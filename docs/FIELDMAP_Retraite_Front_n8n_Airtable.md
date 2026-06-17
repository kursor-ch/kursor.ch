# Kursor — Field Map VERROUILLÉ v2 · Tunnel Retraite
### CONFORME à WEBHOOK_SCHEMA v1.0 · Front → n8n → Airtable

> Cette version **remplace** la v1 (qui inventait un bloc `scores` inexistant). Elle épouse le schéma réel et intègre les décisions prises. Source de vérité unique : un champ ne bouge nulle part sans être mis à jour ici d'abord.

## Décisions intégrées
- **`lead_id` généré par n8n**, renvoyé dans la réponse 200. Le **front ne l'envoie pas**. (Mécanisme reco : autonumber Airtable formaté `KCH-{année}-{NNNNN}` → zéro collision.)
- **`partner_routing` peuplé a minima** (`primary_partner: "resale_pool"`), vraie refonte routing-revente en **schéma v1.1** (étape 4).
- **`consent.resale_optin`** ajouté (champ optionnel additif, conforme aux règles d'évolution). Wording en annexe.
- **Attribution = nouveau champ `metadata.acquisition_channel`** — PAS `source` (qui reste `"kursor.ch"`, identifiant du site). Collision évitée.
- **`persona` + bruit metadata** gardés légers maintenant, **dégraissés en v1.1** (voir backlog).

---

## 1. Payload Retraite conforme (exemple annoté)

```json
{
  "schema_version": "1.0",
  "funnel_id": "retraite",
  "submitted_at": "2026-06-18T10:00:00.000Z",
  "contact":  { "prenom": "Marie", "email": "m@ex.com", "telephone": "+41791234567" },
  "consent":  { "rgpd_accepted": true, "partner_share_optin": false, "newsletter_optin": false, "resale_optin": false },
  "verdict":  { "type": "fiscal_loss", "score": 2250, "tier": "eleve", "label": "Perte fiscale élevée", "summary": "Vous laissez ~2 250 CHF/an sur la table en 3a non versé." },
  "persona":  { "code": "B", "label": "Prudent informé" },
  "priority": "hot",
  "answers":  { "q1_statut": "salarie_c", "q2_arrivee": "5_10_ans", "q3_canton": "vaud", "q4_revenu": "80_120k", "q5_3a": "non_ignore", "q6_lpp": "jamais_ouvert", "q7_inquietude": "impots", "q8_horizon": "15_30_ans" },
  "partner_routing": { "primary_partner": "resale_pool", "partner_products": ["3a","3b"], "founder_call_required": false, "partner_transmission_sla_hours": 48 },
  "cross_sell": { "applicable_funnels": ["assurance"], "cross_sell_priority": "medium", "cross_sell_reason": "Résident, déclencheur LAMal/complémentaires probable." },
  "retraite_data": { "year_arrival_switzerland": 2020, "years_eligible_for_rachat_retroactif": 6, "estimated_rattrapage_max_chf": 43548, "estimated_tax_savings_chf": 13500, "current_3a_status": "none", "professional_status": "salarie_lpp" },
  "metadata": { "source": "kursor.ch", "acquisition_channel": "tiktok", "utm_source": "tiktok", "utm_medium": "social", "utm_campaign": null, "utm_content": null, "referrer": null, "landing_page": "/diagnostic/retraite-3a", "user_agent": "...", "session_duration_seconds": 0, "completion_path": "linear" }
}
```
> `lead_id` absent du payload front → injecté par n8n.

---

## 2. Blocs & colonnes Airtable

### `contact`
| Champ | Type | Oblig. | Colonne Airtable | Type AT |
|---|---|---|---|---|
| `contact.prenom` | string | oui | `prenom` | Single line |
| `contact.email` | string | oui | `email` | Email |
| `contact.telephone` | string | oui si priority hot/very_hot | `telephone` | Phone |

### `consent`
| Champ | Type | Défaut | Colonne | Type AT |
|---|---|---|---|---|
| `consent.rgpd_accepted` | bool | — (doit être true) | `rgpd_accepted` | Checkbox |
| `consent.partner_share_optin` | bool | false | `partner_share_optin` | Checkbox |
| `consent.newsletter_optin` | bool | false | `newsletter_optin` | Checkbox |
| `consent.resale_optin` 🆕 | bool | **false (décoché)** | `resale_optin` | Checkbox |

### `verdict` (type `fiscal_loss`)
| Champ | Type | Source | Colonne | Type AT |
|---|---|---|---|---|
| `verdict.type` | const `"fiscal_loss"` | — | `verdict_type` | Single Select |
| `verdict.score` | number CHF | = perte annuelle | `verdict_score` | Number (CHF) |
| `verdict.tier` | enum | seuils ci-dessous | `verdict_tier` | Single Select |
| `verdict.label` | string | dérivé du tier | `verdict_label` | Single line |
| `verdict.summary` | string | phrase bilan | `verdict_summary` | Long text |

**Seuils `verdict.tier` :** `negligeable` < 500 · `significatif` 500–1500 · `eleve` 1500–3000 · `critique` > 3000 (CHF/an).

### `persona` (dérivé — non porteur)
`persona.code` ∈ `A`·`B`·`C`·`D` → `persona_code` (Single Select) · `persona.label` → `persona_label` (Single line).

### `priority`
`cold`·`warm`·`hot`·`very_hot` → `priority` (Single Select).

### `answers` (Single Select chacun, options = slugs)
`q1_statut` : `salarie_suisse`·`salarie_c`·`salarie_b`·`frontalier_g`·`independant_suisse`·`independant_bc`·`sans_activite`
`q2_arrivee` : `depuis_naissance`·`plus_10_ans`·`5_10_ans`·`2_5_ans`·`moins_2_ans`
`q3_canton` : `geneve`·`vaud`·`valais`·`neuchatel`·`fribourg`·`jura`·`berne`·`bale`·`zurich`·`tessin`·`autre`
`q4_revenu` : `moins_50k`·`50_80k`·`80_120k`·`120_180k`·`180_250k`·`plus_250k`·`non_renseigne`
`q5_3a` : `max`·`partiel`·`recent`·`non_connait`·`non_ignore`
`q6_lpp` : `consulte_regulierement`·`lu_pas_compris`·`jamais_ouvert`·`ignore_existence`·`independant_na`
`q7_inquietude` : `niveau_de_vie`·`impots`·`droits_expat`·`par_ou_commencer`·`opportunite_manquee`·`depart_suisse`
`q8_horizon` : `moins_5_ans`·`5_15_ans`·`15_30_ans`·`plus_30_ans`·`ne_sait_pas`

### `retraite_data`
| Champ | Source | Colonne | Type AT |
|---|---|---|---|
| `year_arrival_switzerland` | ≈ 2026 − annéesSuisse (dérivé du bucket Q2 — voir écart #1) | `year_arrival` | Number |
| `years_eligible_for_rachat_retroactif` | = annéesSans3a (≤10) | `years_eligible_rachat` | Number |
| `estimated_rattrapage_max_chf` | calc | `rattrapage_max_chf` | Number |
| `estimated_tax_savings_chf` | calc | `tax_savings_chf` | Number |
| `current_3a_status` | mappé de Q5 | `current_3a_status` | Single Select (`none`·`has_some_below_max`·`maxes_each_year`·`unsure`) |
| `professional_status` | mappé de Q1 | `professional_status` | Single Select (`salarie_lpp`·`salarie_no_lpp`·`independant_ri`·`independant_sarl_sa`) |

### `partner_routing` (minimal — refonte v1.1)
`primary_partner: "resale_pool"` · `partner_products: ["3a","3b"]` · `founder_call_required: (priority==='very_hot')` · `founder_call_sla_hours: 4` si requis · `partner_transmission_sla_hours: 48`.

### `cross_sell`
`applicable_funnels` (array) · `cross_sell_priority` (`none`·`low`·`medium`·`high`) · `cross_sell_reason` (si medium/high). Colonnes : `cross_sell_funnels` (multi-select), `cross_sell_priority` (Single Select), `cross_sell_reason` (Long text).

### `metadata`
| Champ | Source | Colonne | Type AT |
|---|---|---|---|
| `source` | const `"kursor.ch"` — **ne pas écraser** | `source_site` | Single line |
| `acquisition_channel` 🆕 | socle tracking | `acquisition_channel` | Single Select (`tiktok`·`google_organic`·`direct`·`referral`·`search_other`) |
| `utm_source/medium/campaign` | URL | `utm_source`/`utm_medium`/`utm_campaign` | Single line |
| `utm_content` 🆕 · `landing_page` 🆕 · `referrer` | URL/socle | mêmes noms | Single line |
| `user_agent` · `session_duration_seconds` · `completion_path` | techn. (trim v1.1) | mêmes noms | Single line / Number |

---

## 3. Règles de dérivation (TS-ready)

```typescript
// PERSONA (ordre des règles)
let persona = 'B';
if (['independant_suisse','independant_bc'].includes(q1_statut)) persona = 'D';
else if (q5_3a === 'non_ignore') persona = 'A';
else if (['max','partiel'].includes(q5_3a) && ['120_180k','180_250k','plus_250k'].includes(q4_revenu)) persona = 'C';

// PRIORITY
let priority = 'warm';
if (q1_statut === 'sans_activite') priority = 'cold';
else if (persona === 'C' || (persona === 'D' && richIncome) ||
         (yearsEligible >= 5 && richIncome)) priority = 'very_hot';
else if (persona === 'B' && ['80_120k','120_180k'].includes(q4_revenu)) priority = 'hot';
// richIncome = q4 ∈ {80_120k,120_180k,180_250k,plus_250k}

// current_3a_status (depuis Q5)
const MAP_3A = { max:'maxes_each_year', partiel:'has_some_below_max', recent:'has_some_below_max', non_connait:'none', non_ignore:'none' };

// professional_status (depuis Q1) — best-effort, voir écart #2
const MAP_PROF = { salarie_suisse:'salarie_lpp', salarie_c:'salarie_lpp', salarie_b:'salarie_lpp',
                   frontalier_g:'salarie_lpp', independant_suisse:'independant_ri', independant_bc:'independant_ri',
                   sans_activite:'salarie_no_lpp' };

// year_arrival_switzerland (depuis Q2, approx)
const MAP_YEARS = { depuis_naissance:10, plus_10_ans:10, '5_10_ans':6, '2_5_ans':3, moins_2_ans:1 };
const year_arrival_switzerland = 2026 - MAP_YEARS[q2_arrivee];
```
> Tous les montants CHF (`verdict.score`, `rattrapage_max`, `tax_savings`) viennent de la **table fiscale** (artefact séparé). `taux_marginal` et `perte_cumulée` restent **internes** (non transmis) : la perte cumulée se régénère à l'envoi de l'email (`score × min(annéesSuisse,10)`).

---

## 4. ⚠️ Écarts schéma ↔ funnel (à connaître, gérés en best-effort)

1. **`year_arrival_switzerland` veut une année exacte, Q2 donne un bucket** → on dérive une année approximative. Si on veut de la précision rachat, Q2 devra demander l'année réelle (décision Phase 2).
2. **`professional_status` (enum à 4 valeurs) ne couvre ni frontalier, ni sans-activité, ni RI vs Sàrl/SA** → mapping best-effort ci-dessus. Enum à étendre en v1.1.
3. **`frontalier_data` est taillé Assurance (LAMal/CMU)** → **non peuplé en Retraite**. Le statut frontalier passe par `answers.q1_statut = frontalier_g`. À splitter en v1.1.
4. **Pas de question d'âge** dans le funnel, alors que la spec évoque des exits <25 / >60 ans → approximés via `q1_statut` (sans_activite) et `q8_horizon`. Acceptable pour MVP.

---

## 5. Backlog dégraissage — schéma v1.1 (à l'étape 4)
- Remplacer `partner_routing` (modèle exclusif) par un bloc **routing-revente** (pool, acheteurs multiples).
- Retirer / rétrograder `persona` (dérivé, non porteur).
- Couper le bruit metadata : `user_agent`, `session_duration_seconds`, `completion_path`.
- Rendre `verdict.summary` optionnel (régénérable à l'email).
- Étendre `professional_status` (frontalier, sans-activité, RI/SA) et splitter `frontalier_data` par funnel.

---

## Annexe — Wording consentement revente (FR, base à valider juridiquement)

**Case 1 — RGPD/nLPD (obligatoire, doit être cochée pour soumettre) :**
> J'ai lu et j'accepte la [politique de confidentialité](#) de Kursor.

**Case 2 — `resale_optin` (facultative, DÉCOCHÉE par défaut) :**
> J'accepte que mes coordonnées et les résultats de mon diagnostic soient transmis à des courtiers et conseillers en prévoyance et assurance, partenaires de Kursor en Suisse, afin d'être recontacté(e) au sujet de ma situation (3e pilier, rachat, optimisation). Je peux retirer ce consentement à tout moment en écrivant à equipe@kursor.ch.

**Note de transparence à afficher près des cases (nLPD) :** identité du responsable (Kursor / GC Consulting), finalité (mise en relation avec des courtiers en vue d'un conseil/produit de prévoyance), catégories de destinataires (courtiers partenaires en Suisse), droit de retrait et d'accès.

> ⚠️ Je ne suis pas juriste : ce wording est une **base solide** couvrant la cession à des tiers, mais la revente de leads à des acheteurs multiples mérite une validation par un professionnel de la protection des données en Suisse avant mise en ligne.
