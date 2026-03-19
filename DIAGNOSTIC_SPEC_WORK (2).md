# DIAGNOSTIC_SPEC — WORK FUNNEL (Salarié) — Kursor CH

> Specification for the Work (Salarié) funnel. This is Funnel 1 of 5 in the Kursor CH ecosystem.
> Each funnel will have its own spec document following the same structure, designed in the Brain project.
> Last updated: March 16, 2026

---

## 1. OVERVIEW

### Multi-funnel architecture

Kursor CH operates 5 funnels, each targeting a different audience with a different lead magnet. This document covers **Funnel 1: Work (Salarié)** only. Other funnel specs will be created separately:

| Funnel | Spec document | Status |
|--------|--------------|--------|
| Work (Salarié) | **This document** | LIVE |
| Logement | TBD — design in Brain project | TO BUILD |
| Assurance (Complémentaires) | TBD — design in Brain project | TO BUILD |
| Retraite (3ème pilier) | TBD — design in Brain project | TO BUILD |
| Entrepreneur | TBD — design in Brain project | TO BUILD |

### This funnel

**Name:** Diagnostic de viabilité — Expatriation professionnelle en Suisse
**Primary partner:** Recruteur
**Target audience:** French-speaking professionals (28-42, CDI, 45-90k€) CONSIDERING moving to Switzerland. Pre-move. They know salaries are higher, don't know the hidden costs/traps.

**The lead magnet** is a free 8-question diagnostic that computes a viability score /100 client-side, shows the score + brief summary instantly on screen, then triggers an automated generalized template report via email.

### Universal funnel structure (all 5 funnels follow this)

```
Catchy content (TikTok/IG/YT/LinkedIn)
    → CTA ("lien en bio")
    → Lead magnet (interactive tool on kursor.ch)
    → Score + brief summary on screen (client-side, instant)
    → Contact info capture + partner opt-ins
    → Automated generalized template report emailed (N8N → Brevo)
    → Lead stored (Airtable → Supabase later)
    → Partner routing (if opted in)
    → Notification to founders
```

**Report approach:** Fully automated, template-based. NO manual personalization. The score and verdict are the personalized elements (computed client-side via conditional logic). The emailed report is a generalized template with the lead's score/verdict/category plugged in. This scales from 5 leads/month to 500 with zero additional effort.

**Language:** French (vous — formal register)
**Tone:** Premium, credible, bold on risks/costs, empathetic on fears/uncertainty.
**Report delivery:** Automated email via N8N → Brevo. Links to hosted HTML report with PDF download option.

### Lead ID Convention
Each lead gets a unique ID: **KCH-[YEAR]-[SEQUENTIAL]**
Example: KCH-2026-007. Used in all internal tracking, Airtable, and partner transmissions.

### Salary Translation Note
The Tally form captures monthly gross revenue in EUR. When the report references Swiss salary comparisons, translate to annual CHF equivalents. Example: 3 000€/mois ≈ 36 000€/an ≈ 38 000 CHF/an (current rate). Swiss equivalent for a dev at this level: ~90 000-110 000 CHF/an.

---

## 2. THE 8 QUESTIONS

### Screen 1 — Votre situation actuelle

**Q1 — Quel est votre statut professionnel ?**
| Option | Internal key |
|--------|-------------|
| Salarié(e) en CDI | `cdi` |
| Salarié(e) en CDD / Intérim | `cdd` |
| En recherche d'emploi | `recherche` |
| Autre (Freelances, Indépendants,...) | `freelance` |

**Q2 — Dans quel secteur travaillez-vous ?**
*Hint: "Certains secteurs sont en forte pénurie en Suisse — votre profil pourrait être très demandé."*
| Option | Internal key |
|--------|-------------|
| Tech / IT / Digital | `tech` |
| Finance / Banque / Assurance | `finance` |
| Pharma / Biotech / Santé | `pharma_sante` |
| Ingénierie / Industrie | `ingenierie` |
| Horlogerie / Luxe | `horlogerie` |
| Conseil / Audit / Juridique | `conseil` |
| BTP / Construction | `btp` |
| Commerce / Vente | `commerce` |
| Hôtellerie / Restauration | `hotellerie` |
| Éducation / Recherche | `education` |
| Autre | `autre` |

**Q3 — Votre revenu mensuel brut actuel**
*Hint: "On utilise cette info pour estimer votre gain potentiel en Suisse."*
| Option | Internal key |
|--------|-------------|
| Moins de 2 000€ | `lt2k` |
| 2 000€ - 2 500€ | `2k_2500` |
| 2 500€ - 3 000€ | `2500_3k` |
| 3 000€ - 4 000€ | `3k_4k` |
| Plus de 4 000€ | `gt4k` |

### Screen 2 — Votre projet suisse

**Q4 — Quelle région ou canton visez-vous ?**
*Hint: "Le canton change tout : fiscalité, primes d'assurance, coût de la vie, marché de l'emploi."*
| Option | Internal key |
|--------|-------------|
| Genève | `geneve` |
| Vaud (Lausanne) | `vaud` |
| Neuchâtel | `neuchatel` |
| Jura | `jura` |
| Berne | `berne` |
| Fribourg | `fribourg` |
| Valais | `valais` |
| Zurich | `zurich` |
| Bâle | `bale` |
| Tessin | `tessin` |
| Pas encore décidé | `indecis` |

**Q5 — Dans combien de temps aimeriez-vous démarrer votre projet ?**
| Option | Internal key |
|--------|-------------|
| Moins de 3 mois | `lt3m` |
| 3 à 6 mois | `3_6m` |
| Je me renseigne | `exploration` |

### Screen 3 — Votre préparation

*Section intro: "Ces questions révèlent les angles morts qui coûtent le plus cher aux expatriés."*

**Q6 — Quel montant avez-vous budgétisé pour ce projet ?**
| Option | Internal key |
|--------|-------------|
| Moins de 3 000€ | `lt3k` |
| Entre 3 000€ et 4 000€ | `3k_4k` |
| Entre 4 000€ et 5 000€ | `4k_5k` |
| Plus de 5 000€ | `gt5k` |

**Q7 — Avez-vous déjà commencé des démarches ?**
| Option | Internal key |
|--------|-------------|
| J'ai fait des recherches en ligne | `recherches` |
| J'ai postulé à des offres | `postule` |
| J'ai des entretiens en cours | `entretiens` |
| J'ai une offre ou promesse d'embauche | `offre` |

**Q8 — Vous êtes-vous renseigné(e) sur le système administratif suisse (fiscalité, assurance maladie, prévoyance) ?**
| Option | Internal key |
|--------|-------------|
| Pas du tout | `aucune` |
| Quelques recherches | `quelques` |
| Très bien | `tres_bien` |

### Final Step — Dernière étape

*"Votre diagnostic personnalisé sera prêt sous 48h."*

- Prénom (required)
- Nom (required)
- Email (required)
- Numéro (required)

**Partner opt-ins:**
*"Avant de recevoir votre diagnostic, souhaitez-vous être mis en relation avec nos experts ? Sélectionnez les domaines où vous aimeriez un accompagnement. Gratuit et sans engagement — vos données sont partagées uniquement avec les partenaires que vous choisissez."*

| Opt-in | Description |
|--------|-------------|
| Recrutement | Trouver un emploi plus rapidement grâce à notre réseau de partenaires |
| Assurance maladie | Éviter toutes les erreurs liées au processus d'affiliation des assurances obligatoires |
| Prévoyance & 3e pilier | Comprendre et optimiser votre épargne afin de créer votre retraite |
| Fiscalité | Être accompagné(e) par un professionnel dans la création et la gestion de sa société en Suisse (SA/SÀRL/RI) |

**Confidentialité (required):**
☐ J'accepte que Kursor CH traite mes données pour me fournir mon diagnostic et me recontacter.

---

## 3. SCORING ENGINE

### Category Weights

| Category | Max | Questions | Weight rationale |
|----------|-----|-----------|-----------------|
| Profil professionnel | 30 | Q1 + Q2 + Q3 | 3 data points, strongest predictor of partner placement |
| Maturité projet | 30 | Q4 + Q5 + Q7 | 3 data points, strongest predictor of conversion timeline |
| Solidité financière | 20 | Q6 | 1 data point, proxy for financial readiness |
| Préparation | 20 | Q8 | 1 data point, indicates risk exposure |
| **TOTAL** | **100** | | |

### Point Tables

#### Profil professionnel (max 30) = Q1 + Q2 + Q3, capped at 30

**Q1 — Statut:**
| Answer | Points | Note |
|--------|--------|------|
| `cdi` | 12 | Most stable, most placeable by recruiter |
| `cdd` | 8 | Employable but less stable |
| `recherche` | 6 | Available but harder to place |
| `freelance` | 4 | Base score |
| `freelance` + revenu ≥ 3k€ | 10 | Conditional bonus: high-earning freelancer = fiduciaire lead |

**Q2 — Secteur (bonus):**
| Answer | Bonus | Rationale |
|--------|-------|-----------|
| `tech`, `pharma_sante` | +10 | Highest demand in CH |
| `ingenierie`, `horlogerie` | +9 | Strong demand, niche |
| `btp` | +7 | Solid structural demand |
| `finance`, `conseil` | +6 | Demand exists |
| `commerce`, `hotellerie`, `education`, `autre` | +4 | Lower priority demand |

**Q3 — Revenu:**
| Answer | Points | Rationale |
|--------|--------|-----------|
| `2500_3k` | +8 | Biggest salary uplift to CH |
| `3k_4k` | +8 | Sweet spot, strong uplift |
| `2k_2500` | +5 | Uplift exists, may be junior |
| `gt4k` | +5 | Good profile, smaller relative uplift |
| `lt2k` | +2 | Junior, harder to place |

#### Maturité projet (max 30) = Q4 + Q5 + Q7, capped at 30

**Q4 — Canton:**
| Answer | Points | Rationale |
|--------|--------|-----------|
| `geneve`, `vaud` | 10 | Biggest francophone job markets |
| `bale` | 8 | Pharma hub |
| `neuchatel`, `jura` | 7 | Horlogerie hub |
| `fribourg`, `valais`, `berne` | 6 | Smaller francophone markets |
| `zurich` | 5 | Strong market but germanophone |
| `tessin` | 4 | Italophone, small francophone market |
| `indecis` | 3 | Low maturity signal |

**Q5 — Horizon:**
| Answer | Points |
|--------|--------|
| `lt3m` | 10 |
| `3_6m` | 8 |
| `exploration` | 3 |

**Q7 — Démarches:**
| Answer | Points |
|--------|--------|
| `offre` | 10 |
| `entretiens` | 8 |
| `postule` | 6 |
| `recherches` | 3 |

#### Solidité financière (max 20) = Q6

| Answer | Points |
|--------|--------|
| `gt5k` | 20 |
| `4k_5k` | 16 |
| `3k_4k` | 12 |
| `lt3k` | 6 |

#### Préparation (max 20) = Q8

| Answer | Points | Note |
|--------|--------|------|
| `tres_bien` | 18 | Max is 18, not 20 — even knowledgeable people have blind spots |
| `quelques` | 10 | |
| `aucune` | 3 | |

### Score Computation

```
score_profil = min(30, Q1_pts + Q2_pts + Q3_pts)
score_projet = min(30, Q4_pts + Q5_pts + Q7_pts)
score_financier = Q6_pts  // already capped at 20
score_preparation = Q8_pts  // already capped at 20

score_total = score_profil + score_projet + score_financier + score_preparation
```

### Verdict Thresholds

| Score | Verdict | Color | Meaning |
|-------|---------|-------|---------|
| 75-100 | **Prêt à partir** | Vert #15803D | Strong profile, project is viable, go |
| 50-74 | **En bonne voie** | Amber #D97706 | Good foundation, specific gaps to address |
| 25-49 | **Points de vigilance** | Orange #EA580C | Several areas need work before moving |
| 0-24 | **Préparation nécessaire** | Rouge #DC2626 | Significant preparation needed |

---

## 4. RISK DETECTION

Risks are detected from the answers and trigger specific warnings in the report. Each risk has a severity level, a title, an estimated CHF cost, and a description.

### Risk Rules

| # | Condition | Severity | Title | Estimated cost | Description |
|---|-----------|----------|-------|---------------|-------------|
| R1 | Q8 = `aucune` | CRITIQUE | Double imposition potentielle | 5 000 – 40 000 CHF/an | Sans connaissance du système fiscal suisse, vous risquez de payer des impôts dans deux pays simultanément. La convention bilatérale France-Suisse permet d'éviter cela, mais elle nécessite des démarches spécifiques dès votre arrivée. |
| R2 | Q6 = `lt3k` | CRITIQUE | Sous-capitalisation du projet | Min. 15 000 – 20 000 CHF | S'installer en Suisse requiert un capital initial conséquent : caution logement (3 mois), premier mois de loyer, assurance maladie, frais administratifs. Un budget inférieur à 3 000€ expose à un risque de blocage. |
| R3 | Q8 ≤ `quelques` | ÉLEVÉ | 3ème pilier non optimisé | 2 000 – 3 500 CHF/an de déduction fiscale manquée | Le 3ème pilier permet une déduction fiscale annuelle significative. Chaque année sans souscription est une économie d'impôt perdue définitivement. |
| R4 | Q8 = `aucune` | ÉLEVÉ | Surcoût LAMal probable | 2 000 – 8 000 CHF/an | L'assurance maladie suisse (LAMal) est obligatoire et les primes varient énormément selon le canton, le modèle et la franchise. Sans comparaison préalable, la plupart des expatriés surpayent leur couverture. |
| R5 | Q5 = `lt3m` AND Q7 = `recherches` | CRITIQUE | Délai potentiellement trop court | — | Moins de 3 mois pour concrétiser un projet d'expatriation avec uniquement des recherches en ligne effectuées : le risque de précipitation est élevé. Les démarches administratives suisses prennent du temps. |
| R6 | Q4 in (`zurich`, `berne`, `bale`) AND Q8 ≤ `quelques` | ÉLEVÉ | Barrière linguistique | — | Vous visez un canton germanophone ou bilingue. Sans une préparation linguistique adaptée, l'intégration professionnelle et administrative sera plus complexe. |
| R7 | Q1 = `freelance` AND Q8 ≠ `tres_bien` | ÉLEVÉ | Risque de montage juridique inadapté | 10 000 – 100 000+ CHF | En tant qu'indépendant, le choix de la structure juridique (RI, Sàrl, SA) et du canton d'implantation a des conséquences fiscales majeures. Un mauvais montage peut coûter très cher sur plusieurs années. |
| R8 | Q6 ≤ `3k_4k` AND Q4 in (`geneve`, `vaud`, `zurich`, `bale`) | MOYEN | Budget tendu pour le canton visé | — | Les cantons de Genève, Vaud, Zurich et Bâle ont un coût de la vie parmi les plus élevés de Suisse. Votre budget actuel pourrait limiter vos options de logement et créer du stress financier les premiers mois. |

### Risk display rules

- Order risks by severity: CRITIQUE first, then ÉLEVÉ, then MOYEN
- Always show the estimated CHF cost prominently (bold, separate line)
- Each risk gets a colored left border: CRITIQUE = #DC2626, ÉLEVÉ = #EA580C, MOYEN = #D97706
- Max risks shown: all detected (do not hide any)

---

## 5. STRENGTHS DETECTION

Strengths (atouts) are positive signals detected from the answers. They balance the report and reinforce confidence.

| # | Condition | Strength title | Description |
|---|-----------|---------------|-------------|
| S1 | Q2 in (`tech`, `pharma_sante`, `ingenierie`, `horlogerie`) | Secteur en forte demande | Votre secteur fait partie des plus recherchés en Suisse romande. Les opportunités sont nombreuses et les employeurs peinent à recruter. |
| S2 | Q3 in (`2500_3k`, `3k_4k`) | Potentiel de gain salarial élevé | Votre tranche de revenu actuelle correspond au plus fort multiplicateur salarial France → Suisse. L'augmentation nette peut atteindre 40 à 80%. |
| S3 | Q3 = `gt4k` | Profil senior valorisé | Votre niveau de rémunération indique un profil expérimenté, recherché pour des postes à responsabilité en Suisse. |
| S4 | Q1 = `cdi` | Stabilité professionnelle | Votre CDI actuel est un signal fort pour les recruteurs suisses et facilite l'obtention du permis de travail. |
| S5 | Q7 in (`entretiens`, `offre`) | Démarches bien avancées | Vous avez déjà franchi des étapes concrètes. C'est un indicateur fort de la maturité de votre projet. |
| S6 | Q8 = `tres_bien` | Bonne maîtrise administrative | Votre connaissance du système suisse réduit significativement les risques de mauvaises surprises fiscales et administratives. |
| S7 | Q6 = `gt5k` | Budget confortable | Votre budget vous donne une marge de manœuvre saine pour les premiers mois (caution, assurances, installation). |
| S8 | Q4 in (`geneve`, `vaud`) | Marché de l'emploi dynamique | Genève et Vaud concentrent le plus grand nombre d'offres pour les profils francophones. Votre canton cible maximise vos opportunités. |
| S9 | Q5 = `lt3m` AND Q7 in (`entretiens`, `offre`) | Momentum fort | Un horizon court combiné à des démarches avancées indique un projet mûr et une transition rapide possible. |

### Strength display rules

- Show as green (#15803D) badges or cards
- Display after score breakdown, before risks
- Show all detected strengths (do not cap)

---

## 6. PARTNER RECOMMENDATIONS

Based on the lead's answers and opt-ins, the report includes contextual partner recommendations.

### Recommendation Rules

| # | Condition | Partner | Recommendation text | Value proposition |
|---|-----------|---------|-------------------|-------------------|
| P1 | Q1 in (`cdi`, `cdd`, `recherche`) OR Q7 in (`recherches`, `postule`) | Recruteur | Accédez à des offres exclusives en Suisse romande | Postes avec +20 à 40% vs France, accompagnement personnalisé |
| P2 | Q1 = `freelance` OR Q6 ≥ `3k_4k` | Fiduciaire | Structurez votre projet avec un expert fiscal | Accompagnement clé en main : structure juridique, fiscalité, domiciliation |
| P3 | Q8 ≠ `tres_bien` | 3ème pilier | Optimisez votre prévoyance dès le premier jour | Économie fiscale jusqu'à 3 500 CHF/an |
| P4 | Always | Assurance maladie | Comparez et choisissez la bonne couverture LAMal | Économie potentielle de 2 400 CHF/an |
| P5 | Q4 ≠ `indecis` | Immobilier / Régie | Trouvez votre logement dans le canton visé | Accès à des biens pour profils expatriés solvables |

### Partner display rules

- **ALWAYS show all relevant partner cards in full color** — regardless of whether the lead checked the opt-in or not. The cards are informational, not a data transmission.
- If the lead DID check the opt-in → card shows normally + lead data is transmitted to that partner
- If the lead did NOT check the opt-in → card shows normally but NO data is transmitted. The card serves as awareness.
- In the report, each partner recommendation is tied to a specific detected risk when possible (e.g., R1 double imposition → P2 fiduciaire)
- Display partner value propositions with concrete CHF amounts where applicable

### Warm CTA (always present, bottom of every report)

Regardless of opt-ins, every report ends with this CTA block:

> **Besoin d'un accompagnement personnalisé ?**
>
> Nos experts peuvent vous guider gratuitement sur chaque point identifié dans votre diagnostic — fiscalité, assurance, recrutement, prévoyance.
>
> 📩 **Répondez directement à cet email**
> 📅 **Ou réservez un appel gratuit de 15 minutes** — [lien Calendly]
>
> Sans engagement. Vos données ne sont partagées qu'avec votre accord explicite.

This CTA routes through Kursor (not directly to partners), allowing verbal qualification and consent collection before any partner introduction.

---

## 7. REPORT STRUCTURE

Two outputs: instant on-screen summary (client-side) + automated template email (N8N → Brevo).

### On-screen (instant, client-side)

Computed and displayed immediately after the lead submits. No server call needed.

1. **Score headline** — "Votre score de viabilité : XX/100" + verdict badge (Prêt à partir / En bonne voie / etc.) + verdict color
2. **Category breakdown** — 4 visual bars showing each category score (Profil pro, Maturité projet, Solidité financière, Préparation)
3. **Brief summary** — 1-2 sentences generated from conditional logic based on score tier and top risk/strength. NOT AI-generated, just template strings with variables plugged in.
4. **Partner opt-ins** — if not already selected during quiz
5. **CTA** — "Votre rapport détaillé arrive dans votre boîte email sous quelques minutes"

### Emailed report (automated template via N8N → Brevo)

**This is a GENERALIZED template, not a personalized report.** The only personalized elements are: prénom, score, verdict, and which score tier the lead falls into. The rest is static content that applies to everyone in that tier.

**Structure:**

**Section 1 — Header**
- Kursor CH branding
- "[Prénom], votre diagnostic Kursor CH"
- Score /100 + verdict badge

**Section 2 — Votre score**
- Score + verdict + 1 sentence tier-appropriate summary
- 4 category bars (static visual or text representation)

**Section 3 — Ce que cela signifie**
- Tier-specific generalized content (NOT personalized per lead):
  - **Prêt à partir (75-100):** General text about strong positioning, remaining optimization opportunities, partner value for fine-tuning
  - **En bonne voie (50-74):** General text about solid foundation, key areas to address, partner value for acceleration
  - **Points de vigilance (25-49):** General text about identified gaps, risks of proceeding unprepared, partner value for structuring
  - **Préparation nécessaire (0-24):** General text about foundations to build, partner value for starting right

**Section 4 — Les risques les plus fréquents**
- NOT personalized risk detection. Instead: a generalized overview of the top 3-4 risks ALL expat candidates face (double imposition, LAMal surcoût, 3ème pilier missed, logement costs)
- Each risk: title, estimated CHF cost range, 1-2 sentence explanation
- General directional guidance — NEVER step-by-step solutions

**Section 5 — Nos partenaires**
- All 5 partner cards in full color (regardless of opt-ins)
- Each card: partner type, value proposition, what they do
- Warm CTA block (see below)

**Section 6 — Warm CTA**
- "Besoin d'un accompagnement personnalisé ?"
- Reply to email OR book free 15-min call (Calendly link)
- "Sans engagement. Vos données ne sont partagées qu'avec votre accord explicite."

### Why this works

The report doesn't need to be personalized to be valuable. It needs to:
1. Confirm the lead's score (personalized element — builds trust)
2. Educate them on the risks they likely face (generalized — applies to 80%+ of leads)
3. Make partner help feel necessary (every risk naturally leads to a partner)
4. Provide a frictionless next step (warm CTA)

The score IS the personalization. The report is the sales tool.

### Report tone guidelines

| Context | Tone |
|---------|------|
| Presenting the score | Neutral, factual |
| Tier summary | Encouraging but honest |
| Risk overview | Bold, direct, concrete CHF amounts |
| Partner recommendations | Helpful, no hard sell |
| CTA | Warm, low-pressure |

### What the report NEVER does

- Never gives step-by-step instructions
- Never names specific providers, banks, or tax rates
- Never makes guarantees about salary levels or job placement
- Never provides legal advice
- Never reveals the scoring algorithm

---

## 8. SAMPLE REPORT LOGIC

### Example Lead: "Marie, Dev Frontend, 3.2k€/mois, vise Vaud, 3-6 mois, budget 4-5k€, postulé, quelques recherches"

**Scoring:**
- Q1 (CDI) = 12, Q2 (tech) = +10, Q3 (3k-4k) = +8 → Profil = min(30, 30) = **30**
- Q4 (Vaud) = 10, Q5 (3-6m) = 8, Q7 (postulé) = 6 → Projet = min(30, 24) = **24**
- Q6 (4-5k) = **16**
- Q8 (quelques) = **10**
- **Total = 80/100 → Prêt à partir**

**Risks detected:**
- R3 (3ème pilier non optimisé) — ÉLEVÉ — 2 000-3 500 CHF/an
- R4 (Surcoût LAMal) — ÉLEVÉ — 2 000-8 000 CHF/an

**Strengths detected:**
- S1 (Secteur en forte demande — tech)
- S2 (Potentiel de gain salarial élevé — 3k-4k)
- S4 (Stabilité professionnelle — CDI)
- S8 (Marché dynamique — Vaud)

**Key insight for report:**
"Marie, votre profil de développeuse frontend en CDI est très recherché en Suisse romande. Votre score de 80/100 confirme un projet viable. Deux points d'attention subsistent : l'optimisation de votre 3ème pilier (jusqu'à 3 500 CHF/an de déduction fiscale) et le choix de votre couverture LAMal, où une mauvaise sélection peut coûter jusqu'à 8 000 CHF/an de surcoût."

### Example Lead: "Karim, Freelance, 1.8k€/mois, pas encore décidé, je me renseigne, budget <3k€, recherches en ligne, aucune connaissance"

**Scoring:**
- Q1 (freelance, revenu <3k) = 4, Q2 (autre) = +4, Q3 (<2k) = +2 → Profil = **10**
- Q4 (indécis) = 3, Q5 (exploration) = 3, Q7 (recherches) = 3 → Projet = **9**
- Q6 (<3k) = **6**
- Q8 (aucune) = **3**
- **Total = 28/100 → Points de vigilance**

**Risks detected:**
- R1 (Double imposition) — CRITIQUE — 5 000-40 000 CHF/an
- R2 (Sous-capitalisation) — CRITIQUE — 15 000-20 000 CHF
- R7 (Montage juridique freelance) — ÉLEVÉ — 10 000-100 000+ CHF
- R3 (3ème pilier) — ÉLEVÉ — 2 000-3 500 CHF/an
- R4 (Surcoût LAMal) — ÉLEVÉ — 2 000-8 000 CHF/an

**Strengths detected:**
- (none or minimal)

**Key insight for report:**
"Karim, votre projet en est à ses débuts et plusieurs fondations doivent être posées avant d'avancer sereinement. Nous avons identifié 5 risques dont 2 critiques, représentant un impact potentiel cumulé de plus de 60 000 CHF. La bonne nouvelle : ces risques sont évitables avec la bonne préparation et le bon accompagnement."

---

## 9. AUTOMATION WORKFLOW (N8N)

### Architecture

```
Client-side (lead magnet):
- Questions + answers
- Score computation (conditional logic)
- Instant display: score + verdict + brief summary + category bars
- Contact info + opt-in capture
- Fires webhook to N8N on submission

N8N (delivery + storage + routing):
- Receives webhook payload
- Sends template report email via Brevo
- Stores lead in Airtable
- Notifies founders
- Routes lead data to opted-in partners
```

### Webhook payload (what the lead magnet sends to N8N)

```json
{
  "funnel_id": "work",
  "prenom": "Marie",
  "nom": "Dupont",
  "email": "marie@example.com",
  "telephone": "+33612345678",
  "score_total": 80,
  "score_profil": 30,
  "score_projet": 24,
  "score_financier": 16,
  "score_preparation": 10,
  "verdict": "pret_a_partir",
  "answers": {
    "statut": "cdi",
    "secteur": "tech",
    "revenu": "3k_4k",
    "canton": "vaud",
    "horizon": "3_6m",
    "budget": "4k_5k",
    "demarches": "postule",
    "connaissance": "quelques"
  },
  "opt_ins": {
    "recrutement": true,
    "assurance": false,
    "prevoyance": true,
    "fiscalite": false
  },
  "consent": true,
  "timestamp": "2026-03-16T14:30:00Z"
}
```

### N8N flow (Work funnel)

1. **Webhook trigger** — receives payload above
2. **Switch node** — routes by `funnel_id` (for future multi-funnel support)
3. **Set node** — determine email template ID based on `verdict`
4. **Brevo API** — send template email (template selected by verdict tier, prénom + score injected as variables)
5. **Airtable create** — store full lead record
6. **Notification** — Slack/email/Telegram to founders ("New lead: [prénom], score [X], verdict [Y], opted into [partners]")
7. **IF opt_ins** — for each opted-in partner: format lead data → email to partner
8. **Airtable update** — mark which partners were transmitted + timestamp

### Brevo email templates needed (Work funnel)

4 templates, one per verdict tier:
- `work_pret_a_partir` (score 75-100)
- `work_en_bonne_voie` (score 50-74)
- `work_points_vigilance` (score 25-49)
- `work_preparation_necessaire` (score 0-24)

Each template has the same structure (Section 7) but with tier-specific body content. Variables injected: `{{ prenom }}`, `{{ score_total }}`, `{{ verdict_label }}`.

### Reusable template for other funnels

When building funnels 2-5, the N8N flow structure is identical. Only these elements change per funnel:
- Webhook payload fields (different questions per funnel)
- Brevo email template IDs
- Partner routing rules
- Airtable table/fields

---

*This document is the source of truth for the Work (Salarié) funnel. Scoring, risk detection, and report generation follow these specifications. Other funnel specs will be created separately in the Brain project.*
