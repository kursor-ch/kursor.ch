# Kursor CH

Multi-funnel lead generation platform for the Swiss expatriation niche.

## What it does

Interactive diagnostics that score and qualify French-speaking professionals considering expatriation to Switzerland. Leads are captured, scored, sent an automated report, and stored in a CRM for manual routing to specialized partners (recruiters, fiduciaries, insurers, pension advisors, real estate agents).

## Live funnels

| Funnel | Route | Status |
|--------|-------|--------|
| Emploi (Salarié) | /emploi | Active |
| Logement | /logement | Active |
| Assurance | /assurance | Active |
| Retraite | /retraite | Active |
| Entrepreneur | /diagnostic/entrepreneur | Planned |

## Tech stack

- Frontend: Next.js 14, TypeScript, Tailwind CSS
- Hosting: Vercel (kursor.ch)
- Automation: n8n Cloud
- Email: Brevo (transactional)
- CRM: Airtable
- Analytics: Plausible (cookieless)

## Pipeline

```
Content (TikTok/IG/YT) → Lead magnet (diagnostic) → Score + results on screen
    → Webhook → n8n → Brevo email + Airtable CRM + Telegram notification
    → Manual partner routing by founders
```

## Development

```bash
npm install
npm run dev        # local server at localhost:3000
npm run build      # production build
npm run lint       # ESLint check
```

## Environment variables

```
# Main diagnostic submission endpoint (schema v1.0 — used by Logement,
# and by future funnels that conform to docs/WEBHOOK_SCHEMA.md)
NEXT_PUBLIC_DIAGNOSTIC_WEBHOOK_URL=https://n8n.kursor.ch/webhook/diagnostic-submission

# Legacy endpoint (Emploi funnel still uses this). Logement's webhook client
# falls back to this if NEXT_PUBLIC_DIAGNOSTIC_WEBHOOK_URL is unset.
NEXT_PUBLIC_WEBHOOK_URL=https://[n8n-instance].app.n8n.cloud/webhook/kursor-lead

# Lightweight soft-exit captures (newsletter-only from Logement soft-exits).
# Silent no-op if unset.
NEXT_PUBLIC_SOFT_EXIT_WEBHOOK_URL=https://n8n.kursor.ch/webhook/soft-exit-capture

NEXT_PUBLIC_PLAUSIBLE_DOMAIN=kursor.ch
```

## Docs

- docs/BUILD_SPEC.md — full build specification
- docs/LOCKED_DECISIONS.md — all strategic decisions, scoring tables
- docs/DIAGNOSTIC_SPEC_WORK.md — Work funnel spec (questions, scoring, report)
- docs/WEBHOOK_SCHEMA.md — cross-funnel webhook contract (v1.0)

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
