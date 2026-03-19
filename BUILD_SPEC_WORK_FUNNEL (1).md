# BUILD_SPEC — Work Funnel (Salarié) — Kursor CH

> Complete build specification for the Hands project. Everything needed to go from zero to a live, automated Work funnel.
> Created: March 18, 2026
> Source: Brain project (LOCKED_DECISIONS.md v3 + DIAGNOSTIC_SPEC_WORK.md)
> Builder: Claude Code + founder

---

## 0. WHAT WE'RE BUILDING

A fully automated lead generation pipeline for the Work (Salarié) funnel:

```
[User sees TikTok/IG/YT content]
    → Clicks "lien en bio" → kursor.ch/diagnostic/work
    → Answers 8 questions (interactive, branded UI)
    → Score computed client-side (instant)
    → Results displayed on screen (score + verdict + category bars + summary)
    → Contact info capture (prénom, nom, email, numéro)
    → Partner opt-ins (4-5 checkboxes)
    → Consent checkbox
    → SUBMIT → webhook fires to n8n
        → n8n sends template email via Brevo (link to report page)
        → n8n stores lead in Airtable (CRM, all funnels)
        → n8n sends Telegram notification to founders
    → Founders manually qualify lead in Airtable
    → Founders call partner by phone to introduce qualified lead
    → User receives email → clicks link → kursor.ch/report/[lead_id]
    → Report page loads (branded, partner cards, warm CTA, PDF download)
```

**Two front-end builds + one back-end automation:**
1. Lead magnet page (`/diagnostic/work`)
2. Report page (`/report/[lead_id]`)
3. n8n workflow (webhook → Brevo + Airtable + Telegram notification)

Partner routing is manual in Phase 1 — founders qualify leads in Airtable and call partners by phone.

---

## 1. BUILD ORDER (do in this sequence)

| # | Task | Project | Dependency | Est. time |
|---|------|---------|------------|-----------|
| 1 | DNS: Point kursor.ch → Vercel | Infra | None (do first, propagation takes up to 48h) | 30 min + wait |
| 2 | Airtable base: Design schema for all 5 funnels | Hands | None | 1-2 hours |
| 3 | Lead magnet: Code the Work diagnostic | Hands (Claude Code) | DNS propagating | 1-2 days |
| 4 | Report page: Code the hosted report | Hands (Claude Code) | Lead magnet done (shares design system) | 0.5-1 day |
| 5 | Deploy to Vercel | Hands | Steps 1-4 | 30 min |
| 6 | Plausible: Set up analytics | Infra | Deployed site | 30 min |
| 7 | Brevo templates: Design 4 verdict-tier emails | Hands + Mouth | Report page done (email links to it) | 0.5-1 day |
| 8 | n8n workflow: Wire everything together | Hands | Brevo templates + Airtable + Telegram bot | 0.5-1 day |
| 9 | End-to-end test | Hands | All above | 1-2 hours |
| 10 | Kill Tally: Redirect old form | Hands | Test passed | 15 min |

**Total estimated: 4-7 days of focused work.**

---

## 2. DNS SETUP (Step 1)

**Do this first — DNS propagation can take up to 48 hours.**

Domain: `kursor.ch` on Gandi
Target: Vercel

**Actions on Gandi DNS panel:**
- Add CNAME record: `www` → `cname.vercel-dns.com`
- Add A record: `@` → `76.76.21.21` (Vercel's IP)
- Optional: Add A record: `@` → `76.223.126.88` (Vercel secondary)

**Actions on Vercel:**
- Add `kursor.ch` as custom domain in project settings
- Vercel auto-provisions SSL certificate

**Verify:** `curl -I https://kursor.ch` returns 200 once propagated.

---

## 3. AIRTABLE BASE DESIGN (Step 2)

**One base, designed for all 5 funnels from day one.** Only the Work funnel writes to it in Phase 1, but the schema supports all 5.

### Table: Leads

**Shared fields (all funnels):**

| Field | Type | Notes |
|-------|------|-------|
| lead_id | Formula/Auto | UUID or auto-increment |
| funnel_id | Single select | `work`, `logement`, `assurance`, `retraite`, `entrepreneur` |
| prenom | Text | |
| nom | Text | |
| email | Email | |
| telephone | Phone | |
| score_total | Number | /100 |
| verdict | Single select | `pret_a_partir`, `en_bonne_voie`, `points_vigilance`, `preparation_necessaire` |
| consent | Checkbox | Must be true |
| created_at | DateTime | Webhook timestamp |
| opt_in_recrutement | Checkbox | |
| opt_in_assurance | Checkbox | |
| opt_in_prevoyance | Checkbox | |
| opt_in_fiscalite | Checkbox | |
| opt_in_immobilier | Checkbox | |
| partner_transmitted | Multiple select | Which partners received the lead |
| partner_transmitted_at | DateTime | When partner emails were sent |
| status | Single select | `new`, `contacted`, `converted`, `closed` |
| source | Text | Traffic source if trackable |
| notes | Long text | Manual notes by founders |

**Work funnel fields:**

| Field | Type | Notes |
|-------|------|-------|
| score_profil | Number | /30 |
| score_projet | Number | /30 |
| score_financier | Number | /20 |
| score_preparation | Number | /20 |
| answer_statut | Single select | CDI, CDD, recherche, freelance |
| answer_secteur | Single select | 11 options |
| answer_revenu | Single select | 5 brackets |
| answer_canton | Single select | 11 options |
| answer_horizon | Single select | 3 options |
| answer_budget | Single select | 4 brackets |
| answer_demarches | Single select | 4 options |
| answer_connaissance | Single select | 3 options |

**Views to create:**
- All Leads (default, sorted by date desc)
- By Funnel (grouped by funnel_id)
- By Verdict (grouped by verdict)
- Partner Routing (filtered: has opt-ins, not yet transmitted)
- Hot Leads (filtered: score ≥ 75)

---

## 4. LEAD MAGNET — `/diagnostic/work` (Step 3)

### Tech

- **Framework:** HTML/CSS/JS (vanilla or lightweight — no React needed for a single-page diagnostic)
- **Alternative:** Next.js if developer prefers (Vercel-native, helps with routing for report page)
- **Fonts:** Fraunces (headings) + Outfit (body) — Google Fonts
- **Colors:** Amber #D97706 (primary), background #FDFAF5 (or refined crème), verdict colors per spec
- **Aesthetic:** Swiss private bank with human warmth. Premium, editorial, credible. NOT a generic quiz tool.

### Flow

```
Screen 1: Intro / hero
    → "Évaluez la viabilité de votre projet d'expatriation en Suisse"
    → CTA button: "Commencer le diagnostic gratuit"

Screen 2-4: Questions (8 questions across 3 screens)
    → Screen 2: Q1 (statut) + Q2 (secteur) + Q3 (revenu)
    → Screen 3: Q4 (canton) + Q5 (horizon)
    → Screen 4: Q6 (budget) + Q7 (démarches) + Q8 (connaissance)
    → Progress bar visible throughout
    → Back button on each screen

Screen 5: Contact info capture
    → Prénom, Nom, Email, Numéro (all required)
    → "Vos informations sont protégées et ne seront jamais partagées sans votre accord."

Screen 6: Partner opt-ins + consent
    → 4 partner checkboxes (recrutement, assurance, prévoyance, fiscalité)
    → Each with brief value prop (1 line)
    → Consent checkbox: "J'accepte que Kursor CH traite mes données pour me fournir mon diagnostic et me recontacter."
    → Submit button

Screen 7: Results (instant, client-side)
    → Score headline: "Votre score de viabilité : XX/100"
    → Verdict badge with color
    → 4 category bars (visual)
    → Brief summary (template string based on verdict tier)
    → "Votre rapport détaillé arrive dans votre boîte email sous quelques minutes"
    → Additional partner opt-ins (dual-layer — second chance)
```

### Scoring Logic (client-side JavaScript)

Full scoring tables are in DIAGNOSTIC_SPEC_WORK.md Section 4 and LOCKED_DECISIONS.md Section 4. Key points:

- 4 categories: Profil (30), Projet (30), Financier (20), Préparation (20) = 100
- Each category capped at its max
- Freelancer bonus: +6 to Q1 if statut=freelance AND revenu ≥ 3k€
- Verdict thresholds: 75-100 (prêt), 50-74 (bonne voie), 25-49 (vigilance), 0-24 (préparation)

**IMPORTANT:** Score is computed entirely client-side. No API call needed. The scoring algorithm is in JavaScript, not exposed to the user (obfuscated in production build).

### Webhook (fires on submit)

```javascript
// On form submission
const payload = {
  funnel_id: "work",
  prenom: "...",
  nom: "...",
  email: "...",
  telephone: "...",
  score_total: 80,
  score_profil: 30,
  score_projet: 24,
  score_financier: 16,
  score_preparation: 10,
  verdict: "pret_a_partir",
  answers: {
    statut: "cdi",
    secteur: "tech",
    revenu: "3k_4k",
    canton: "vaud",
    horizon: "3_6m",
    budget: "4k_5k",
    demarches: "postule",
    connaissance: "quelques"
  },
  opt_ins: {
    recrutement: true,
    assurance: false,
    prevoyance: true,
    fiscalite: false,
    immobilier: false
  },
  consent: true,
  timestamp: new Date().toISOString()
};

// Send to n8n webhook
fetch("https://[n8n-cloud-url]/webhook/kursor-lead", {
  method: "POST",
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify(payload)
})
.then(response => {
  if (!response.ok) throw new Error("Webhook failed");
  // Clear localStorage retry queue
  localStorage.removeItem("kursor_pending_lead");
})
.catch(error => {
  // RETRY MECHANISM: store in localStorage, retry on next page load
  localStorage.setItem("kursor_pending_lead", JSON.stringify(payload));
  console.error("Webhook failed, stored for retry:", error);
});
```

### Retry mechanism (on page load)

```javascript
// Check for pending leads on every page load
window.addEventListener("load", () => {
  const pending = localStorage.getItem("kursor_pending_lead");
  if (pending) {
    fetch("https://[n8n-cloud-url]/webhook/kursor-lead", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: pending
    })
    .then(response => {
      if (response.ok) localStorage.removeItem("kursor_pending_lead");
    })
    .catch(() => {}); // Will retry on next page load
  }
});
```

### Design requirements

- **Mobile-first.** 80%+ traffic will come from TikTok = mobile.
- **One question per screen vs. grouped:** OPEN decision (to be A/B tested). Start with grouped (3 screens of questions) per the spec. Can split to one-per-screen later.
- **Input style:** Cards for single-select (statut, horizon, connaissance), pills for multi-option (secteur, canton), dropdown or slider for numeric ranges (revenu, budget).
- **Animations:** Subtle transitions between screens. Progress bar fills. Score reveal has a brief count-up animation.
- **Speed:** Page must load in <2 seconds on mobile 4G. No heavy frameworks. Inline critical CSS.
- **Language:** French only for Phase 1. Formal register (vous).

---

## 5. REPORT PAGE — `/report/[lead_id]` (Step 4)

### How it works

Brevo email contains a link: `https://kursor.ch/report/?p=[prénom]&s=[score]&v=[verdict]&sp=[score_profil]&sj=[score_projet]&sf=[score_financier]&sr=[score_preparation]`

Report page reads URL parameters and renders the report. No server-side data fetch in Phase 1.

**Note:** URL parameters mean anyone with the link can see the report. Acceptable for Phase 1 — the data is the lead's own score, not sensitive financial information. Migrate to authenticated report pages in Phase 2 (Supabase).

### Report structure (from DIAGNOSTIC_SPEC_WORK.md Section 7)

**Section 1 — Header**
- Kursor CH branding (logo, colors)
- "[Prénom], votre diagnostic Kursor CH"
- Score /100 + verdict badge with color

**Section 2 — Votre score**
- Score + verdict + 1 sentence tier-appropriate summary
- 4 category bars (Profil pro, Maturité projet, Solidité financière, Préparation)

**Section 3 — Ce que cela signifie**
- Tier-specific generalized content (4 versions, one per verdict):
  - **Prêt à partir (75-100):** Strong positioning, optimization opportunities, partner value for fine-tuning
  - **En bonne voie (50-74):** Solid foundation, key areas to address, partner value for acceleration
  - **Points de vigilance (25-49):** Identified gaps, risks of proceeding unprepared, partner value for structuring
  - **Préparation nécessaire (0-24):** Foundations to build, partner value for starting right

**Section 4 — Les risques les plus fréquents**
- Generalized overview of top 3-4 risks ALL expat candidates face:
  - Double imposition (5 000-40 000 CHF/an)
  - Surcoût LAMal (2 000-8 000 CHF/an)
  - 3ème pilier non optimisé (2 000-3 500 CHF/an)
  - Logement costs
- Each risk: title, estimated CHF cost range, 1-2 sentence explanation
- General directional guidance — NEVER step-by-step solutions

**Section 5 — Nos partenaires**
- All 5 partner cards in full color (regardless of opt-ins)
- Each card: partner type, value proposition, what they do
- Cards are informational — they don't reveal which ones the lead opted into

**Section 6 — Warm CTA**
- "Besoin d'un accompagnement personnalisé ?"
- "Répondez directement à cet email" (or contact equipe@kursor.ch)
- "Ou réservez un appel gratuit de 15 minutes" → Calendly link: https://calendly.com/sav-gcconsulting/30min
- "Sans engagement. Vos données ne sont partagées qu'avec votre accord explicite."

### PDF download

- Button: "Télécharger votre rapport en PDF"
- Generated client-side using html2pdf.js
- Same content as the web page, formatted for print

### Design

- Same design system as lead magnet (Fraunces + Outfit, amber, Swiss bank aesthetic)
- Desktop-optimized (users will open this from email on desktop more often)
- But still responsive for mobile

---

## 6. PLAUSIBLE ANALYTICS (Step 6)

### Setup

1. Create account at plausible.io (€9/mo)
2. Add site: kursor.ch
3. Add tracking script to all pages:

```html
<script defer data-domain="kursor.ch" src="https://plausible.io/js/script.js"></script>
```

### Custom events to track

```javascript
// Diagnostic started
plausible("Diagnostic Started", { props: { funnel: "work" } });

// Each question screen completed
plausible("Question Screen Completed", { props: { funnel: "work", screen: "1" } });
plausible("Question Screen Completed", { props: { funnel: "work", screen: "2" } });
plausible("Question Screen Completed", { props: { funnel: "work", screen: "3" } });

// Contact info submitted
plausible("Contact Info Submitted", { props: { funnel: "work" } });

// Diagnostic completed (results shown)
plausible("Diagnostic Completed", { props: { funnel: "work", verdict: "pret_a_partir", score: "80" } });

// Report page viewed
plausible("Report Viewed", { props: { funnel: "work" } });

// PDF downloaded
plausible("PDF Downloaded", { props: { funnel: "work" } });
```

### Key metrics to monitor

- Start → Screen 1 completion (drop-off at first question = messaging problem)
- Screen 3 → Contact info (drop-off here = trust or friction problem)
- Contact info → Complete (drop-off here = opt-in/consent friction)
- Report email open rate (from Brevo)
- Report page visit rate (from Plausible)

---

## 7. BREVO EMAIL TEMPLATES (Step 7)

### Account setup

1. Create Brevo account (free tier)
2. Authenticate sending domain: kursor.ch
3. Set up DKIM, SPF, DMARC records on Gandi DNS:
   - SPF: Add `include:sendinblue.com` to existing SPF record
   - DKIM: Add TXT record provided by Brevo
   - DMARC: Add if not already present

### 4 templates to create

All 4 share the same structure. Only Section 3 (tier-specific content) changes.

**Template variables:** `{{ params.prenom }}`, `{{ params.score_total }}`, `{{ params.verdict_label }}`, `{{ params.report_url }}`

**Email structure:**

```
From: Kursor CH <equipe@kursor.ch>
Subject: [Prénom], votre diagnostic Kursor CH — Score [XX]/100
Reply-to: equipe@kursor.ch

[Header: Kursor CH logo + branding]

Bonjour {{ params.prenom }},

Merci d'avoir complété votre diagnostic de viabilité.
Votre score : {{ params.score_total }}/100 — {{ params.verdict_label }}

[Brief tier-specific summary — 2-3 sentences]

👉 Consultez votre rapport complet :
[BUTTON: "Voir mon rapport" → {{ params.report_url }}]

[Partner cards — all 5, branded, with value props]

[Warm CTA block]
Besoin d'un accompagnement personnalisé ?
📩 Répondez directement à cet email
📅 Ou réservez un appel gratuit de 15 minutes — [Calendly link]

Sans engagement. Vos données ne sont partagées qu'avec votre accord explicite.

[Footer: Kursor CH, kursor.ch, equipe@kursor.ch, unsubscribe link]
```

**Template IDs to create in Brevo:**

| Template name | Verdict | Trigger condition |
|---------------|---------|-------------------|
| `work_pret_a_partir` | Prêt à partir (75-100) | verdict = "pret_a_partir" |
| `work_en_bonne_voie` | En bonne voie (50-74) | verdict = "en_bonne_voie" |
| `work_points_vigilance` | Points de vigilance (25-49) | verdict = "points_vigilance" |
| `work_preparation_necessaire` | Préparation nécessaire (0-24) | verdict = "preparation_necessaire" |

---

## 8. N8N WORKFLOW (Step 8)

### Prerequisites
- n8n Cloud account (~€20/mo)
- Brevo API key
- Airtable API key + base ID
- Telegram bot token + chat ID for founder notifications

### Workflow: `kursor-lead-pipeline`

```
[1] Webhook Trigger
    → URL: https://[n8n-instance].app.n8n.cloud/webhook/kursor-lead
    → Method: POST
    → Receives full payload from lead magnet

[2] Switch Node (route by funnel_id)
    → Case "work" → continue
    → Case "logement" → (future)
    → Case "assurance" → (future)
    → Case "retraite" → (future)
    → Case "entrepreneur" → (future)

[3] Set Node (determine Brevo template + build report URL)
    → Map verdict → Brevo template ID
    → Build report_url with URL params:
      kursor.ch/report/?p={{prenom}}&s={{score_total}}&v={{verdict}}&sp={{score_profil}}&sj={{score_projet}}&sf={{score_financier}}&sr={{score_preparation}}
    → Build verdict_label (human-readable French)

[4] Brevo: Send Transactional Email
    → Template ID from step 3
    → To: lead email
    → Params: prenom, score_total, verdict_label, report_url

[5] Airtable: Create Record
    → Table: Leads
    → All fields from payload
    → Status: "new"

[6] Telegram: Send Message
    → Bot → founder chat/group
    → Message format:
      "🟢 Nouveau lead — Work funnel
      Prénom: {{prenom}}
      Score: {{score_total}}/100 — {{verdict_label}}
      Secteur: {{answers.secteur}}
      Canton: {{answers.canton}}
      Partenaires souhaités: {{opted_in_partners_list}}
      Email: {{email}}
      Tél: {{telephone}}"

[7] Error Workflow (separate)
    → Triggers on any execution failure
    → Sends Telegram message to founders: "⚠️ Pipeline error: [error message]"
```

### Partner routing — MANUAL (Phase 1)

**No automated partner emails in Phase 1.** Founders handle routing manually:

1. Telegram notification arrives with lead details + opted-in partners
2. Open Airtable → review full lead record
3. Qualify the lead (is this worth sending to a partner?)
4. Call the partner by phone to introduce the lead
5. Update Airtable: set `status` to "contacted", add partner name to `partner_transmitted`, set `partner_transmitted_at`

**Why manual is better for now:**
- You control quality — no junk leads reach partners
- You learn what partners actually want to hear
- You build the relationship (verbal > email for first 50 leads)
- No dependency on partner email addresses or formatted templates

**Automate when:** Volume exceeds what you can handle manually (~20+ leads/week), OR you have written CPL contracts that require structured delivery. This is a Phase 2 decision.

---

## 9. END-TO-END TEST CHECKLIST (Step 9)

Before killing Tally, run through this complete test:

| # | Test | Expected result | ✓ |
|---|------|----------------|---|
| 1 | Open kursor.ch/diagnostic/work on mobile | Page loads <2s, branded, fonts correct | ☐ |
| 2 | Complete all 8 questions | Navigation smooth, back button works, progress bar accurate | ☐ |
| 3 | Submit contact info + opt-ins | No errors, score displays instantly on screen | ☐ |
| 4 | Check score calculation | Score matches manual calculation from scoring tables | ☐ |
| 5 | Check Telegram | Founder notification received within 30 seconds, all fields present | ☐ |
| 6 | Check email inbox | Brevo email received within 2 minutes, correct template, correct score | ☐ |
| 7 | Click report link in email | Report page loads, correct prénom/score/verdict displayed | ☐ |
| 8 | Download PDF | PDF generates, readable, branded | ☐ |
| 9 | Check Airtable | Lead record created with all fields populated correctly | ☐ |
| 10 | Airtable opt-ins visible | Opted-in partners clearly marked in lead record | ☐ |
| 11 | Test webhook failure | Disconnect n8n → submit lead → reconnect → verify retry fires and lead arrives | ☐ |
| 12 | Check Plausible | Events tracked: Diagnostic Started, screens completed, Diagnostic Completed | ☐ |
| 13 | Test all 4 verdict tiers | Submit leads with scores in each range, verify correct template fires | ☐ |
| 14 | Test with no opt-ins | Submit with all opt-ins unchecked → lead stored, no partner fields checked | ☐ |
| 15 | Check Brevo deliverability | Email lands in primary inbox (Gmail, Outlook), not spam | ☐ |
| 16 | Manual routing dry run | See Telegram → open Airtable → find lead → simulate partner call | ☐ |

**Test with real email addresses. Test on iPhone and Android. Test on slow 3G.**

---

## 10. KILL TALLY (Step 10)

Once all tests pass:

1. Update any existing links (TikTok bio, Instagram bio) to point to `kursor.ch/diagnostic/work`
2. If Tally form has a custom URL, set up a redirect to the new page
3. Do NOT delete the Tally form — keep it as archive. Just remove all links to it.
4. Export existing Tally leads to Airtable if not already there

---

## 11. CONTENT & COPY NEEDED (from Mouth project)

The Hands project builds the containers. Mouth project fills them with copy. Here's what's needed:

| Content piece | Owner | Status |
|---------------|-------|--------|
| Lead magnet intro text / hero copy | Mouth | TO DO |
| Question helper text (if any) | Mouth | TO DO |
| 4 verdict summary texts (on-screen, 1-2 sentences each) | Mouth | TO DO |
| 4 verdict email body texts (tier-specific, 2-3 sentences each) | Mouth | TO DO |
| Report Section 3 content (4 versions, tier-specific) | Mouth | TO DO |
| Report Section 4 content (risk descriptions, CHF amounts) | Mouth | TO DO |
| Partner card copy (5 cards, value prop + description) | Mouth | TO DO |
| Warm CTA copy | Mouth | DONE (in DIAGNOSTIC_SPEC_WORK.md) |
| Privacy/consent text | Brain | DONE (in LOCKED_DECISIONS.md) |

**Mouth project should work on this in parallel with Hands build.**

---

## 12. WHAT THIS SPEC DOES NOT COVER (explicitly out of scope)

- Funnels 2-5 (Logement, Assurance, Retraite, Entrepreneur) — replicate this pattern later
- Central kursor.ch site / homepage — separate build
- Automated partner email routing — Phase 2, when volume justifies it or CPL contracts are signed
- n8n content automation agents — Phase 2, parked
- Full platform with developer equity partner — separate project, TBD
- ML scoring, personalized reports, partner dashboard — all Phase 2
- Multi-language (EN version) — Phase 2

---

## 13. REFERENCE DOCUMENTS

| Document | Location | What it contains |
|----------|----------|-----------------|
| LOCKED_DECISIONS.md (v3) | Brain project knowledge | All locked decisions, automation stack, scoring tables, thresholds |
| DIAGNOSTIC_SPEC_WORK.md | Brain project knowledge | Full Work funnel spec: questions, scoring, report structure, n8n flow, webhook payload |
| Funnel tunnel docs (Logement, Assurance, Retraite, Travail) | Brain project knowledge | Funnel-specific action plans (for future builds) |

---

*This document is the single build spec for the Work funnel. If it contradicts LOCKED_DECISIONS.md, the locked decisions win. Take this to the Hands project and build.*
