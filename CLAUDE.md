# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Kursor CH

Multi-funnel lead generation platform for the Swiss expatriation niche. Interactive diagnostics score and qualify French-speaking professionals considering expatriation to Switzerland; leads are captured, scored, sent an automated report, and stored in a CRM for manual partner routing.

## Live funnels

| Funnel | Route | Status |
|--------|-------|--------|
| Emploi (Salarié) | `/emploi` | Active (legacy webhook schema) |
| Logement | `/logement` | Active (v1.0 schema) |
| Assurance | `/assurance` | Active (v1.0 schema) |
| Retraite | `/retraite` | Active (v1.0 schema) |
| Entrepreneur | `/diagnostic/entrepreneur` | Planned |

`/prevoyance` 301-redirects to `/retraite` (see `next.config.js`).

## Tech stack

Next.js 14 App Router · TypeScript (strict) · Tailwind CSS · Vercel · n8n Cloud · Brevo · Airtable · Plausible · GTM/GA4.

## Development

```bash
npm install
npm run dev        # local server at localhost:3000
npm run build      # production build
npm run lint       # ESLint check (next/core-web-vitals)
```

There is no test runner configured. TypeScript path alias `@/*` resolves to the repo root.

## Environment variables

```
# Main diagnostic submission endpoint (schema v1.0). Used by Logement,
# Assurance, Retraite, and any new funnel conforming to docs/WEBHOOK_SCHEMA.md.
NEXT_PUBLIC_DIAGNOSTIC_WEBHOOK_URL=https://n8n.kursor.ch/webhook/diagnostic-submission

# Legacy endpoint still used by the Emploi funnel (lib/webhook.ts).
# v1.0 funnels also fall back to this if NEXT_PUBLIC_DIAGNOSTIC_WEBHOOK_URL is unset.
NEXT_PUBLIC_WEBHOOK_URL=https://[n8n-instance].app.n8n.cloud/webhook/kursor-lead

# Soft-exit captures (newsletter-only, lightweight payload). No-op if unset.
NEXT_PUBLIC_SOFT_EXIT_WEBHOOK_URL=https://n8n.kursor.ch/webhook/soft-exit-capture

NEXT_PUBLIC_PLAUSIBLE_DOMAIN=kursor.ch

# Server-side only — used by /api/recent and /api/stats to proxy Airtable
# for the homepage social-proof tickers. Both routes return 204 if unset.
AIRTABLE_API_TOKEN=...
AIRTABLE_BASE_ID=...
```

## Architecture

### Funnel anatomy

Every funnel follows the same shape:

- `app/<funnel>/page.tsx` — thin server component that renders the funnel's client app
- `components/<funnel>/<Funnel>App.tsx` — `"use client"` orchestrator. A screen-index state machine: intro → question screens → contact + consent → loading → results (plus optional soft-exit branches). Direction-aware (forward/back), persists nothing across reloads except the webhook retry queue.
- `lib/<funnel>/` — funnel-specific logic split into:
  - `questions.ts` — question/screen definitions (option keys are internal snake_case, not display text)
  - `scoring.ts` — pure score computation from answers
  - `verdicts.ts` — score → tier/label/summary
  - `personas.ts` — persona resolution
  - `routing.ts` — priority, partner routing, cross-sell, soft-exit resolution
  - `webhook.ts` — builds the funnel-specific `WebhookPayloadV1` (see schema below)

The Emploi funnel is the historical exception — it uses the flat `components/diagnostic/`, `lib/scoring.ts`, `lib/verdicts.ts`, `lib/webhook.ts` layout and still ships a pre-v1.0 flat payload. There is a `TODO(post-logement)` in `lib/shared/schemaTypes.ts` to migrate it; n8n handles both shapes during the transition. Don't "harmonize" Emploi into the v1.0 layout casually — coordinate with the n8n side.

### Webhook contract (v1.0)

The cross-funnel webhook contract is the spine of the system. Two artifacts must stay in lockstep:

- `docs/WEBHOOK_SCHEMA.md` — human-readable spec, source of truth
- `lib/shared/schemaTypes.ts` — TypeScript types mirroring it

When changing the schema, update both, follow the evolution rules in `WEBHOOK_SCHEMA.md` (no removals, no renames, additive-only without bumping `schema_version`), and remember n8n must accept the new shape before any client-side rollout.

`lib/shared/webhookClient.ts` implements the transport: POST → on non-200, wait 2s and retry once → on second failure, persist the body to `localStorage` under `kursor_pending_submission_{lead_id}`. On every funnel app mount, `retryPendingWebhooks()` flushes any persisted submissions. `sendSoftExitWebhook()` is best-effort, no retry, no localStorage.

`lib/shared/leadId.ts` generates a client-side `KCH-YYYY-NNNNNN` ID; the n8n response is authoritative and may renumber on collision.

### Answer-key convention

Quiz answers are stored as internal snake_case keys (e.g. `"futur_resident_offre_confirmee"`), never display text. This is load-bearing — n8n routing, scoring tables, and persona resolution all match against these keys. Renaming an option key is a breaking change; renaming display copy is free.

### Tracking

- GTM (`GTM-5BT6Q484`) and GA4 (`G-DL8PGLDKRF`) are wired in `app/layout.tsx` with Google Consent Mode v2 — defaults to denied, restored from `localStorage["kursor-cookie-consent"]` written by `components/cookies/CookieBanner.tsx`.
- Funnel events are pushed to `window.dataLayer` via `lib/gtm.ts` (`trackDiagnosticStarted`, `trackQuestionAnswered`, `trackContactSubmitted`, `trackDiagnosticCompleted`). Each funnel app also fires Plausible custom events directly via `window.plausible`.
- Vercel Analytics + Speed Insights are mounted in the root layout.

### Styling tokens

`tailwind.config.ts` defines the brand palette (`amber` `#D97706`, `creme`, `vert`, `vert-assurance`, `orange`, `rouge`) and three font CSS variables loaded via `next/font` in `app/layout.tsx`: `--font-heading` (Fraunces), `--font-body` (IBM Plex Sans), `--font-outfit` (Outfit). Funnel apps set per-flow accent CSS vars (`--funnel-accent`, `--funnel-accent-soft`) on their root `<main>`.

### Internal API routes

`app/api/recent` and `app/api/stats` proxy Airtable for the homepage tickers. Both gracefully return 204 when Airtable env vars are missing — preserve that fallback so dev environments without secrets still render.

## Docs

- `docs/BUILD_SPEC.md` — full build specification
- `docs/LOCKED_DECISIONS.md` — strategic decisions, scoring tables
- `docs/DIAGNOSTIC_SPEC_WORK.md` — Emploi funnel spec (questions, scoring, report)
- `docs/WEBHOOK_SCHEMA.md` — cross-funnel webhook contract (v1.0)

## License

Private — Kursor CH / GC Consulting

## Frontend Design Skill

This skill guides creation of distinctive, production-grade frontend interfaces that avoid generic "AI slop" aesthetics. Implement real working code with exceptional attention to aesthetic details and creative choices.

The user provides frontend requirements: a component, page, application, or interface to build. They may include context about the purpose, audience, or technical constraints.

### Design Thinking

Before coding, understand the context and commit to a BOLD aesthetic direction:

* **Purpose**: What problem does this interface solve? Who uses it?
* **Tone**: Pick an extreme: brutally minimal, maximalist chaos, retro-futuristic, organic/natural, luxury/refined, playful/toy-like, editorial/magazine, brutalist/raw, art deco/geometric, soft/pastel, industrial/utilitarian, etc. There are so many flavors to choose from. Use these for inspiration but design one that is true to the aesthetic direction.
* **Constraints**: Technical requirements (framework, performance, accessibility).
* **Differentiation**: What makes this UNFORGETTABLE? What's the one thing someone will remember?

CRITICAL: Choose a clear conceptual direction and execute it with precision. Bold maximalism and refined minimalism both work - the key is intentionality, not intensity.

Then implement working code (HTML/CSS/JS, React, Vue, etc.) that is:

* Production-grade and functional
* Visually striking and memorable
* Cohesive with a clear aesthetic point-of-view
* Meticulously refined in every detail

### Frontend Aesthetics Guidelines

Focus on:

* **Typography**: Choose fonts that are beautiful, unique, and interesting. Avoid generic fonts like Arial and Inter; opt instead for distinctive choices that elevate the frontend's aesthetics; unexpected, characterful font choices. Pair a distinctive display font with a refined body font.
* **Color & Theme**: Commit to a cohesive aesthetic. Use CSS variables for consistency. Dominant colors with sharp accents outperform timid, evenly-distributed palettes.
* **Motion**: Use animations for effects and micro-interactions. Prioritize CSS-only solutions for HTML. Use Motion library for React when available. Focus on high-impact moments: one well-orchestrated page load with staggered reveals (animation-delay) creates more delight than scattered micro-interactions. Use scroll-triggering and hover states that surprise.
* **Spatial Composition**: Unexpected layouts. Asymmetry. Overlap. Diagonal flow. Grid-breaking elements. Generous negative space OR controlled density.
* **Backgrounds & Visual Details**: Create atmosphere and depth rather than defaulting to solid colors. Add contextual effects and textures that match the overall aesthetic. Apply creative forms like gradient meshes, noise textures, geometric patterns, layered transparencies, dramatic shadows, decorative borders, custom cursors, and grain overlays.

NEVER use generic AI-generated aesthetics like overused font families (Inter, Roboto, Arial, system fonts), cliched color schemes (particularly purple gradients on white backgrounds), predictable layouts and component patterns, and cookie-cutter design that lacks context-specific character.

Interpret creatively and make unexpected choices that feel genuinely designed for the context. No design should be the same. Vary between light and dark themes, different fonts, different aesthetics. NEVER converge on common choices (Space Grotesk, for example) across generations.

IMPORTANT: Match implementation complexity to the aesthetic vision. Maximalist designs need elaborate code with extensive animations and effects. Minimalist or refined designs need restraint, precision, and careful attention to spacing, typography, and subtle details. Elegance comes from executing the vision well.

Remember: Claude is capable of extraordinary creative work. Don't hold back, show what can truly be created when thinking outside the box and committing fully to a distinctive vision.
