# Kursor CH

Multi-funnel lead generation platform for the Swiss expatriation niche.

## What it does

Interactive diagnostics that score and qualify French-speaking professionals considering expatriation to Switzerland. Leads are captured, scored, sent an automated report, and stored in a CRM for manual routing to specialized partners (recruiters, fiduciaries, insurers, pension advisors, real estate agents).

## Live funnels

| Funnel | Route | Status |
|--------|-------|--------|
| Emploi (Salarié) | `/emploi` | Active |
| Logement | `/logement` | Active |
| Assurance | `/assurance` | Planned (stub live) |
| Retraite | `/retraite` | Active |
| Entrepreneur | `/diagnostic/entrepreneur` | Planned |

## Tech stack

- **Frontend:** Next.js 14, TypeScript, Tailwind CSS
- **Hosting:** Vercel (kursor.ch)
- **Automation:** n8n Cloud
- **Email:** Brevo (transactional)
- **CRM:** Airtable
- **Analytics:** Plausible (cookieless)

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
# Main diagnostic submission endpoint (v1.0 schema). Used by Logement and
# all future funnels conforming to docs/WEBHOOK_SCHEMA.md.
NEXT_PUBLIC_DIAGNOSTIC_WEBHOOK_URL=https://n8n.kursor.ch/webhook/diagnostic-submission

# Legacy endpoint still used by the Emploi funnel. Logement falls back to this
# if NEXT_PUBLIC_DIAGNOSTIC_WEBHOOK_URL is unset.
NEXT_PUBLIC_WEBHOOK_URL=https://[n8n-instance].app.n8n.cloud/webhook/kursor-lead

# Lightweight soft-exit captures (newsletter-only from Logement soft-exits).
# If unset, soft-exit captures are silent no-ops.
NEXT_PUBLIC_SOFT_EXIT_WEBHOOK_URL=https://n8n.kursor.ch/webhook/soft-exit-capture

NEXT_PUBLIC_PLAUSIBLE_DOMAIN=kursor.ch
```

## Docs

- `docs/BUILD_SPEC.md` — full build specification
- `docs/LOCKED_DECISIONS.md` — all strategic decisions, scoring tables
- `docs/DIAGNOSTIC_SPEC_WORK.md` — Work funnel spec (questions, scoring, report)

## License

Private — Kursor CH / GC Consulting
