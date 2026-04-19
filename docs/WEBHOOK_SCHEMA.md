# KURSOR CH — WEBHOOK SCHEMA
## Cross-funnel contract for diagnostic submissions to n8n

> **What this is:** The single source of truth for the JSON payload structure that every Kursor diagnostic funnel sends to its n8n webhook. All four funnels (Diagnostic Emploi, Diagnostic Logement, Audit Assurances, Audit Retraite) MUST send payloads conforming to this schema. The n8n workflows are built once against this schema and handle all four funnels with conditional branching on `funnel_id` and other discriminator fields.

> **Where this file lives:** `/docs/WEBHOOK_SCHEMA.md` in the kursor.ch repo. Reference at the start of every funnel build session.

> **Versioning:** Schema version is included in every payload as `schema_version`. When the schema evolves, the version bumps and n8n workflows handle multiple versions in parallel during transition periods. Never break backward compatibility silently.

---

## CURRENT VERSION

**`schema_version: "1.0"`**

This version supports all four funnels (Emploi already live, Logement, Assurances, Retraite to be built). Future versions will only add optional fields, never remove or rename existing ones.

---

## CORE PAYLOAD STRUCTURE

Every webhook submission, regardless of funnel, follows this top-level structure:

```json
{
  "schema_version": "1.0",
  "funnel_id": "logement",
  "lead_id": "KCH-2026-00427",
  "submitted_at": "2026-04-15T14:32:18.000Z",
  
  "contact": {
    "prenom": "Marie",
    "email": "marie.dubois@example.com",
    "telephone": "+41791234567"
  },
  
  "consent": {
    "rgpd_accepted": true,
    "partner_share_optin": true,
    "newsletter_optin": false
  },
  
  "verdict": {
    "type": "difficulty",
    "score": 72,
    "tier": "difficile",
    "label": "Recherche difficile",
    "summary": "Profil avec 3 facteurs de friction sur le marché lausannois actuel."
  },
  
  "persona": {
    "code": "C",
    "label": "Futur résident avec offre confirmée"
  },
  
  "priority": "very_hot",
  
  "answers": {
    "q1_statut": "futur_resident_offre_confirmee",
    "q2_canton": "vaud",
    "q3_urgence": "lt3m",
    "q4_budget": "2200_3000",
    "q5_duree_recherche": "pas_commence",
    "q6_attestation_non_poursuite": "non_pas_encore"
  },
  
  "partner_routing": {
    "primary_partner": "logement_partner_v1",
    "partner_products": ["placement_locatif"],
    "founder_call_required": true,
    "founder_call_sla_hours": 2,
    "partner_transmission_sla_hours": 48
  },
  
  "cross_sell": {
    "applicable_funnels": ["assurance", "retraite"],
    "cross_sell_priority": "high",
    "cross_sell_reason": "Futur résident, arrivée imminente — déclenchera LAMal obligatoire dans 3 mois"
  },
  
  "metadata": {
    "source": "kursor.ch",
    "user_agent": "Mozilla/5.0 ...",
    "referrer": "https://www.tiktok.com/...",
    "utm_source": "tiktok_organic",
    "utm_medium": "social",
    "utm_campaign": "logement_q2_2026",
    "session_duration_seconds": 287,
    "completion_path": "linear"
  }
}
```

---

## FIELD-BY-FIELD SPECIFICATION

### Top-level fields

| Field | Type | Required | Description |
|---|---|---|---|
| `schema_version` | string | yes | Always `"1.0"` for current version. Bumps when breaking changes occur. |
| `funnel_id` | enum string | yes | One of: `"emploi"`, `"logement"`, `"assurance"`, `"retraite"`. Drives all routing logic in n8n. |
| `lead_id` | string | yes | Format: `KCH-YYYY-NNNNN`. Generated client-side at form completion. Used for tracking across all systems. |
| `submitted_at` | ISO 8601 string | yes | UTC timestamp of submission. |

### `contact` object

| Field | Type | Required | Description |
|---|---|---|---|
| `prenom` | string | yes | First name only. Used in email salutations. |
| `email` | string | yes | Validated email format. Primary identifier for Brevo and Airtable. |
| `telephone` | string | conditional | Required for `priority: "hot"` and `priority: "very_hot"`. Optional otherwise. International format with country code. |

### `consent` object

| Field | Type | Required | Description |
|---|---|---|---|
| `rgpd_accepted` | boolean | yes | Must be `true` to submit. RGPD/nLPD compliance. |
| `partner_share_optin` | boolean | yes | If `false`, lead receives bilan but is NOT transmitted to partner. Critical legal flag. |
| `newsletter_optin` | boolean | yes | Independent opt-in for weekly newsletter. Default `false`. |

### `verdict` object

This object structure varies by funnel. The `type` field discriminates which verdict format applies.

| Field | Type | Required | Description |
|---|---|---|---|
| `type` | enum string | yes | One of: `"score"` (Emploi), `"difficulty"` (Logement), `"fiscal_loss"` (Retraite), `"coverage_audit"` (Assurances). |
| `score` | number | yes | Numeric value matching the type semantics (see below). |
| `tier` | string | yes | Categorical bucket the score falls into. |
| `label` | string | yes | Human-readable label for the tier. |
| `summary` | string | yes | One-sentence personalized summary for the email subject and intro. |

**Verdict type → score semantics:**

- **`score`** (Emploi): integer 0–100, viability score. Tiers: `pret_a_partir`, `en_bonne_voie`, `points_de_vigilance`, `preparation_necessaire`.
- **`difficulty`** (Logement): integer 0–100, difficulty score (higher = harder). Tiers: `faisable`, `moderee`, `difficile`, `tres_difficile`, `quasi_impossible`.
- **`fiscal_loss`** (Retraite): integer in CHF, annual fiscal loss. Tiers: `negligeable`, `significatif`, `eleve`, `critique`.
- **`coverage_audit`** (Assurances): object `{ surcout_annuel_chf: number, trous_couverture_count: number }`. Tiers: `optimal`, `ajustements_mineurs`, `surcouts_significatifs`, `couverture_critique`.

For Assurances, the `score` field becomes an object instead of a number. Both keys are integers in CHF and count respectively.

### `persona` object

| Field | Type | Required | Description |
|---|---|---|---|
| `code` | enum string | yes | Funnel-specific persona code: `A`, `B`, `C`, `D`, or `E`. |
| `label` | string | yes | Full persona label for human reading. |

**Persona codes by funnel:**

- **Emploi:** `A` (CDI cherche mieux), `B` (en recherche active), `C` (futur expat avec offre).
- **Logement:** `A` (expat fraîchement arrivé), `B` (résident qui doit déménager), `C` (futur résident avec offre confirmée).
- **Retraite:** `A` (ignorant total), `B` (prudent informé), `C` (optimisateur), `D` (indépendant abandonné).
- **Assurances:** `A` (expat perdu), `B` (suisse qui surpaie), `C` (indépendant mal protégé), `D` (frontalier en décision), `E` (frontalier installé).

### `priority` (enum string)

| Value | Description |
|---|---|
| `cold` | Standard queue, no urgency. Newsletter cadence acceptable. |
| `warm` | Engaged lead, normal partner transmission within 48h. |
| `hot` | High-value lead. Telephone required. Founder review before partner transmission. |
| `very_hot` | Time-critical or high-stakes lead. Founder call within 2h before partner transmission. Examples: futur résident with arrival <3 months, frontalier in decision window <30 days. |

### `answers` object

Free-form key-value pairs of all quiz answers. Keys follow pattern `q{N}_{topic}` where N is the question number and topic is a short snake_case identifier. Values are the internal keys for selected answer options (not the displayed text).

**Why store internal keys instead of display text:**
- Survives copy changes without breaking analytics.
- Compact for storage and transmission.
- Unambiguous for downstream filtering in n8n.

The exact answer keys for each funnel are defined in that funnel's individual spec document (`Logement_Build_Brief.md`, etc.).

### `partner_routing` object

| Field | Type | Required | Description |
|---|---|---|---|
| `primary_partner` | string | yes | Identifier of the primary partner this lead routes to. Examples: `logement_partner_v1`, `nathan_piliercompar`. |
| `partner_products` | array of strings | yes | Product IDs the partner should focus on. Examples: `["placement_locatif"]`, `["lamal_3a", "complementaire"]`. Allows multi-product flagging within one transmission. |
| `founder_call_required` | boolean | yes | If `true`, n8n triggers a Telegram notification to founders BEFORE partner WhatsApp transmission. |
| `founder_call_sla_hours` | number | conditional | Required if `founder_call_required: true`. Hours within which founder must call the lead. |
| `partner_transmission_sla_hours` | number | yes | Hours within which partner must contact the lead after transmission. Currently always `48` for all funnels in Phase 1. |

### `cross_sell` object

| Field | Type | Required | Description |
|---|---|---|---|
| `applicable_funnels` | array of strings | yes | Other funnels that would also be relevant for this lead. Empty array if none. Drives the cross-sell email sequence. |
| `cross_sell_priority` | enum string | yes | One of: `"none"`, `"low"`, `"medium"`, `"high"`. Drives email cadence and timing. |
| `cross_sell_reason` | string | conditional | Required if `cross_sell_priority` is `"medium"` or `"high"`. One-sentence explanation for personalization. |

### `metadata` object

All fields optional but recommended. Used for analytics, attribution, and debugging.

| Field | Type | Description |
|---|---|---|
| `source` | string | Always `"kursor.ch"` from the website. May expand to `"kursor.app"` etc. later. |
| `user_agent` | string | Browser user-agent string. |
| `referrer` | string | HTTP referrer when the user landed. |
| `utm_source` | string | Standard UTM parameter. |
| `utm_medium` | string | Standard UTM parameter. |
| `utm_campaign` | string | Standard UTM parameter. |
| `session_duration_seconds` | number | Time from landing on the diagnostic to submission. |
| `completion_path` | string | Either `"linear"` (no back-button used) or `"non_linear"` (user navigated back during quiz). |

---

## FUNNEL-SPECIFIC FIELD EXTENSIONS

Some funnels need additional fields beyond the core schema. These fields are added as nested objects under a funnel-specific key. They are OPTIONAL for funnels that don't use them.

### `frontalier_data` object (used by Assurances and Retraite only)

Required when the lead is a frontalier (permis G). Captures the data specific to the LAMal vs CMU arbitrage.

```json
"frontalier_data": {
  "decision_window_status": "in_window_3m",
  "rfr_n_minus_2_eur_bracket": "30k_50k",
  "swiss_salary_chf_bracket": "100k_150k",
  "current_coverage": "none_pending",
  "residence_zone": "frontalier_proche_consult_fr"
}
```

| Field | Type | Description |
|---|---|---|
| `decision_window_status` | enum | `"in_window_3m"`, `"window_expired_lamal_default"`, `"chose_lamal_installed"`, `"chose_cmu_installed"`, `"unknown"`. |
| `rfr_n_minus_2_eur_bracket` | enum | Income bracket for CMU calculation: `"lt15k"`, `"15k_30k"`, `"30k_50k"`, `"50k_80k"`, `"gt80k"`, `"unknown"`. |
| `swiss_salary_chf_bracket` | enum | Current Swiss salary: `"lt60k"`, `"60k_100k"`, `"100k_150k"`, `"gt150k"`. |
| `current_coverage` | enum | `"lamal_active"`, `"cmu_active"`, `"none_pending"`, `"none_expired"`. |
| `residence_zone` | enum | `"frontalier_proche_consult_fr"`, `"frontalier_proche_consult_ch"`, `"frontalier_loin_consult_fr"`, `"installation_en_cours"`. |

### `housing_data` object (used by Logement only)

Required for all Logement submissions. Captures housing-specific calculations.

```json
"housing_data": {
  "canton_difficulty_multiplier": 1.2,
  "budget_eligible": true,
  "min_budget_threshold_chf": 1600,
  "actual_budget_chf_bracket": "2200_3000",
  "search_duration_estimate_weeks": 8,
  "frontalier_soft_exit": false,
  "future_resident_arrival_window": "lt3m"
}
```

| Field | Type | Description |
|---|---|---|
| `canton_difficulty_multiplier` | number | Cantonal multiplier applied to base difficulty score. Genève 1.4, Vaud 1.2, others 1.0. |
| `budget_eligible` | boolean | `false` if below 1600 CHF threshold (soft exit). |
| `min_budget_threshold_chf` | number | Currently `1600`. Stored for future schema flexibility if threshold changes. |
| `actual_budget_chf_bracket` | enum | `"lt1600"`, `"1600_2200"`, `"2200_3000"`, `"3000_4500"`, `"gt4500"`. |
| `search_duration_estimate_weeks` | number | Calculated estimate of weeks needed for search based on difficulty score. |
| `frontalier_soft_exit` | boolean | `true` if lead is permis G and was soft-exited toward Assurances/Retraite. |
| `future_resident_arrival_window` | enum | `"lt3m"`, `"3m_6m"`, `"gt6m"`, `"not_applicable"`. Only populated if persona is C. |

### `retraite_data` object (used by Retraite only)

```json
"retraite_data": {
  "year_arrival_switzerland": 2021,
  "years_eligible_for_rachat_retroactif": 5,
  "estimated_rattrapage_max_chf": 18000,
  "estimated_tax_savings_chf": 6500,
  "current_3a_status": "none",
  "professional_status": "salarie_lpp"
}
```

| Field | Type | Description |
|---|---|---|
| `year_arrival_switzerland` | number | 4-digit year. Critical for rachat rétroactif calculation. |
| `years_eligible_for_rachat_retroactif` | number | Capped at 10. |
| `estimated_rattrapage_max_chf` | number | Maximum 3a contribution catchable. |
| `estimated_tax_savings_chf` | number | Estimated tax savings from full rattrapage. |
| `current_3a_status` | enum | `"none"`, `"has_some_below_max"`, `"maxes_each_year"`, `"unsure"`. |
| `professional_status` | enum | `"salarie_lpp"`, `"salarie_no_lpp"`, `"independant_ri"`, `"independant_sarl_sa"`. |

### `assurance_data` object (used by Assurances only)

```json
"assurance_data": {
  "branch": "resident",
  "current_caisse_known": true,
  "franchise_chf": 2500,
  "model": "libre",
  "ijm_status": "echelle_berne_only",
  "complementaires_count": 2,
  "estimated_surcout_annuel_chf": 2400,
  "trous_couverture_identified": ["ijm_absent", "rc_privee_insuffisante"]
}
```

| Field | Type | Description |
|---|---|---|
| `branch` | enum | `"resident"` or `"frontalier"`. Determines which question set was answered. |
| `current_caisse_known` | boolean | Whether lead knows their current insurance company. |
| `franchise_chf` | enum | `300`, `500`, `1000`, `1500`, `2000`, `2500`, or `null` if unknown. |
| `model` | enum | `"libre"`, `"medecin_famille"`, `"hmo"`, `"telmed"`, `"unknown"`. |
| `ijm_status` | enum | `"covered_employer_full"`, `"echelle_berne_only"`, `"unknown"`, `"independant_no_ijm"`, `"independant_with_ijm"`. |
| `complementaires_count` | number | Number of LCA complementary insurances held. |
| `estimated_surcout_annuel_chf` | number | Calculated annual overspending. |
| `trous_couverture_identified` | array of strings | List of coverage gap identifiers. |

---

## ENDPOINT CONFIGURATION

All four funnels POST to a single n8n webhook URL, with funnel-specific routing handled inside the n8n workflow based on `funnel_id`.

**Production webhook URL:** `https://n8n.kursor.ch/webhook/diagnostic-submission`
**Staging webhook URL:** `https://n8n-staging.kursor.ch/webhook/diagnostic-submission`

**Environment variable:** `NEXT_PUBLIC_DIAGNOSTIC_WEBHOOK_URL`

This environment variable is shared across all four funnel implementations. The same value is used regardless of which funnel is submitting.

**HTTP method:** `POST`
**Content-Type:** `application/json`
**Expected response:** `200 OK` with body `{ "received": true, "lead_id": "KCH-YYYY-NNNNN" }`

If the webhook returns a non-200 status, the front-end should:
1. Display an error toast to the user.
2. Retry once after 2 seconds.
3. If second attempt fails, store the payload in `localStorage` under key `kursor_pending_submission_{lead_id}` and show an apologetic message asking the user to try again later.
4. On next page load, attempt to flush any pending submissions from `localStorage`.

---

## ERROR HANDLING AND VALIDATION

### Client-side validation BEFORE submission

The front-end MUST validate before POST:

- All required fields present and non-null.
- `email` matches a basic email regex.
- `telephone` present if `priority` is `"hot"` or `"very_hot"`.
- `consent.rgpd_accepted` is `true`.
- `funnel_id` is one of the four allowed values.
- `verdict.type` matches the funnel (e.g. Logement always sends `"difficulty"`).

If validation fails, the front-end should NOT submit and should show specific field-level errors to the user.

### Server-side validation in n8n

The n8n webhook workflow MUST validate every incoming payload against the schema:

- Reject payloads missing `schema_version`, `funnel_id`, `lead_id`, `submitted_at`, `contact.email`, or `consent.rgpd_accepted`.
- Reject payloads with unknown `funnel_id` values.
- Log all rejections to a dedicated Airtable table for debugging.
- Return `400 Bad Request` with a JSON body explaining which field failed validation.

---

## SCHEMA EVOLUTION RULES

To prevent breaking the live Emploi funnel when extending the schema for Logement, Assurances, or Retraite:

1. **Never remove or rename existing fields.** If a field becomes obsolete, mark it deprecated in this document but keep it in the schema for at least 6 months.
2. **Never change a field's type.** If a field's type needs to change, add a new field with a different name (e.g. `score` → `score_v2`) and run both in parallel during transition.
3. **All new fields are optional unless they are funnel-specific extensions of an existing required structure.**
4. **Bump `schema_version` when:**
   - A required field is added (would break older clients).
   - A field's allowed enum values change in a non-additive way.
   - The overall payload structure is reorganized.
5. **Do NOT bump `schema_version` when:**
   - Optional fields are added.
   - New funnel-specific extensions are introduced.
   - Documentation or descriptions change.

---

## CHANGELOG

| Version | Date | Changes |
|---|---|---|
| 1.0 | 2026-04-15 | Initial schema. Supports Emploi (live), Logement, Assurances, Retraite. Includes Persona C for Logement (futur résident avec offre confirmée). |
| 1.0 | 2026-04-19 | Additive: `frontalier_data.decision_window_status` gains `"unknown"`. Soft-exit capture gains `"sans_activite"` reason (used by Assurances funnel). No breaking changes — schema_version unchanged. |

---

**End of webhook schema specification.**
