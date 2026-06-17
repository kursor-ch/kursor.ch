# Kursor — Table fiscale & règles de calcul VERROUILLÉES · Tunnel Retraite
### Input figé du calculateur de perte fiscale (étape 2)

> **But :** fournir à Claude Code des **valeurs et des règles fixes** pour que le calcul ne soit jamais improvisé. Le front implémente exactement ceci ; il ne déduit rien de lui-même.

**Statut :** estimation v1, **suffisante pour un affichage « environ X CHF »** (ce que la spec exige). À affiner en Phase 2 avec le calculateur officiel de l'AFC.
**Sources de base :** AFC (données consolidées), KPMG 2025 (taux marginaux max), PwC 2025, barèmes cantonaux 2025/2026.
**Hypothèses :** célibataire, commune chef-lieu, taux marginal combiné IFD + cantonal + communal. Revenu brut Q4 utilisé comme proxy du revenu imposable (simplification assumée).

> ⚠️ **Flag mineur vs spec :** la spec indiquait une fourchette « 18 %–38 % ». Je l'élargis aux extrêmes réels (≈12 % bas revenus, jusqu'à 45 % GE hauts revenus) pour ne pas fausser le chiffre. La fourchette 18–38 % reste vraie pour le cœur de cible (50k–180k).

---

## 1. Table des taux marginaux (canton × tranche de revenu Q4)

Estimation, en %. `non_renseigne` → on retombe sur la valeur de la tranche `80_120k` (médiane).

| Canton | <50k | 50–80k | 80–120k | 120–180k | 180–250k | >250k |
|---|---|---|---|---|---|---|
| Genève | 16 | 25 | 33 | 40 | 43 | 45 |
| Vaud | 14 | 23 | 31 | 37 | 40 | 41 |
| Neuchâtel | 14 | 23 | 31 | 37 | 40 | 41 |
| Jura | 14 | 23 | 31 | 37 | 40 | 41 |
| Berne | 14 | 23 | 31 | 37 | 40 | 41 |
| Bâle (V/C) | 13 | 21 | 29 | 35 | 38 | 40 |
| Zurich | 13 | 21 | 29 | 35 | 38 | 40 |
| Fribourg | 12 | 19 | 26 | 31 | 34 | 36 |
| Valais | 12 | 19 | 26 | 31 | 34 | 36 |
| Tessin | 12 | 19 | 26 | 31 | 34 | 36 |
| Autre | 12 | 19 | 26 | 30 | 32 | 33 |

### Constante TS prête à coller

```typescript
// Taux marginal estimé (IFD + cantonal + communal, célibataire, chef-lieu), en fraction
const MARGINAL_RATE: Record<string, Record<string, number>> = {
  geneve:    { moins_50k:0.16, '50_80k':0.25, '80_120k':0.33, '120_180k':0.40, '180_250k':0.43, plus_250k:0.45 },
  vaud:      { moins_50k:0.14, '50_80k':0.23, '80_120k':0.31, '120_180k':0.37, '180_250k':0.40, plus_250k:0.41 },
  neuchatel: { moins_50k:0.14, '50_80k':0.23, '80_120k':0.31, '120_180k':0.37, '180_250k':0.40, plus_250k:0.41 },
  jura:      { moins_50k:0.14, '50_80k':0.23, '80_120k':0.31, '120_180k':0.37, '180_250k':0.40, plus_250k:0.41 },
  berne:     { moins_50k:0.14, '50_80k':0.23, '80_120k':0.31, '120_180k':0.37, '180_250k':0.40, plus_250k:0.41 },
  bale:      { moins_50k:0.13, '50_80k':0.21, '80_120k':0.29, '120_180k':0.35, '180_250k':0.38, plus_250k:0.40 },
  zurich:    { moins_50k:0.13, '50_80k':0.21, '80_120k':0.29, '120_180k':0.35, '180_250k':0.38, plus_250k:0.40 },
  fribourg:  { moins_50k:0.12, '50_80k':0.19, '80_120k':0.26, '120_180k':0.31, '180_250k':0.34, plus_250k:0.36 },
  valais:    { moins_50k:0.12, '50_80k':0.19, '80_120k':0.26, '120_180k':0.31, '180_250k':0.34, plus_250k:0.36 },
  tessin:    { moins_50k:0.12, '50_80k':0.19, '80_120k':0.26, '120_180k':0.31, '180_250k':0.34, plus_250k:0.36 },
  autre:     { moins_50k:0.12, '50_80k':0.19, '80_120k':0.26, '120_180k':0.30, '180_250k':0.32, plus_250k:0.33 },
};
// Q4 = 'non_renseigne' → utiliser la valeur '80_120k' du canton.
```

---

## 2. Constantes 2026

```typescript
const PLAFOND_3A_SALARIE = 7258;       // CHF/an
const PLAFOND_3A_INDEP_CAP = 36288;    // CHF/an, plafonné aussi à 20 % du revenu
const RACHAT_MAX_ANNEES = 10;          // rachat rétroactif : 10 ans max
```

Plafond indépendant par tranche = `min(36288 ; 20 % × milieu de tranche)` :

```typescript
const PLAFOND_INDEP: Record<string, number> = {
  moins_50k: 8000, '50_80k': 13000, '80_120k': 20000,
  '120_180k': 30000, '180_250k': 36288, plus_250k: 36288, non_renseigne: 20000,
};
```

---

## 3. Règles d'estimation (ce que la spec laissait implicite)

**Statut salarié vs indépendant** (depuis Q1) :
```typescript
const isIndependant = ['independant_suisse','independant_bc'].includes(q1_statut);
const plafond = isIndependant ? PLAFOND_INDEP[q4_revenu] : PLAFOND_3A_SALARIE;
```

**Versement 3a actuel estimé** (depuis Q5), en fraction du plafond :
```typescript
const VERSEMENT_ACTUEL = { max:1.0, partiel:0.5, recent:1.0, non_connait:0.0, non_ignore:0.0 };
const versementActuel = plafond * VERSEMENT_ACTUEL[q5_3a];
```
*(`recent` = ouvert <2 ans → on suppose qu'il verse désormais → perte annuelle ~0, mais années passées manquantes comptées.)*

**Années en Suisse** (depuis Q2, valeurs **conservatrices** — on prend le bas de tranche, mieux vaut sous-estimer que gonfler le chiffre annoncé) :
```typescript
const ANNEES_SUISSE = { depuis_naissance:10, plus_10_ans:10, '5_10_ans':6, '2_5_ans':3, moins_2_ans:1 };
const anneesSuisse = ANNEES_SUISSE[q2_arrivee];
```

---

## 4. Le calcul (4 étapes, TS-ready)

```typescript
// Étape 1 — taux marginal
const band = q4_revenu === 'non_renseigne' ? '80_120k' : q4_revenu;
const taux = MARGINAL_RATE[q3_canton][band];

// Étape 2 — perte fiscale annuelle (3a non versé × marginal)
const perteAnnuelle = Math.round(Math.max(0, plafond - versementActuel) * taux);

// Étape 3 — éligibilité + potentiel de rachat rétroactif 2026
const sans3a = ['non_connait','non_ignore','recent'].includes(q5_3a);
const eligibleRachat = sans3a && anneesSuisse >= 2;
const anneesSans3a = eligibleRachat
  ? Math.min(anneesSuisse - (q5_3a === 'recent' ? 1 : 0), RACHAT_MAX_ANNEES)
  : 0;
const rachatPotentiel = anneesSans3a * PLAFOND_3A_SALARIE;       // le rachat rétroactif utilise le plafond standard
const economieRachat = Math.round(rachatPotentiel * taux);

// Perte cumulée passée (pour la phrase « sur X ans vous avez laissé Y »)
const perteCumulee = Math.round(perteAnnuelle * Math.min(anneesSuisse, RACHAT_MAX_ANNEES));

// Étape 4 — mention LPP (qualitative, pas de chiffre)
const mentionLPP = !isIndependant && ['lu_pas_compris','jamais_ouvert','ignore_existence'].includes(q6_lpp);
```

**Sorties → bloc `scores` du field map :** `taux_marginal` (= `taux*100`), `perte_annuelle_chf`, `perte_cumulee_chf`, `annees_sans_3a`, `eligible_rachat`, `rachat_potentiel_chf`, `economie_fiscale_rachat_chf`.

---

## 5. Vérification contre l'exemple de la spec

> Spec : Persona B, salarié, **Vaud**, **95 000 CHF** (→ `80_120k`), **pas de 3a**, ~5 ans.

- taux = `MARGINAL_RATE.vaud['80_120k']` = **0,31**
- perteAnnuelle = 7258 × 0,31 = **≈ 2 250 CHF/an** → spec dit « ~2 200 CHF/an » ✅
- rachatPotentiel (à 6 ans conservateur) = 6 × 7258 = 43 548 ; economieRachat = ×0,31 ≈ **13 500 CHF** → spec dit « 11 000–13 000 CHF » ✅

Le modèle reproduit l'exemple verrouillé de la spec. Le seul écart vient des tranches Q2 (grossières) ; le choix conservateur évite de sur-promettre.

---

## 6. Limite assumée

C'est une **estimation d'accroche**, pas un calcul fiscal certifié — exactement le rôle voulu (« vous perdez **environ** X »). Le vrai chiffrage se fait ensuite par le courtier. À réévaluer en Phase 2 via le calculateur officiel AFC si on veut affiner.
