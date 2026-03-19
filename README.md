# Kursor CH

Multi-funnel lead generation platform for the Swiss expatriation niche.

## What it does

Interactive diagnostics that score and qualify French-speaking professionals considering expatriation to Switzerland. Leads are captured, scored, sent an automated report, and stored in a CRM for manual routing to specialized partners (recruiters, fiduciaries, insurers, pension advisors, real estate agents).

## Live funnels

| Funnel | Route | Status |
|--------|-------|--------|
| Work (Salarié) | `/diagnostic/work` | Active |
| Logement | `/diagnostic/logement` | Planned |
| Assurance | `/diagnostic/assurance` | Planned |
| Retraite | `/diagnostic/retraite` | Planned |
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
NEXT_PUBLIC_WEBHOOK_URL=https://[n8n-instance].app.n8n.cloud/webhook/kursor-lead
NEXT_PUBLIC_PLAUSIBLE_DOMAIN=kursor.ch
```

## Docs

- `docs/BUILD_SPEC.md` — full build specification
- `docs/LOCKED_DECISIONS.md` — all strategic decisions, scoring tables
- `docs/DIAGNOSTIC_SPEC_WORK.md` — Work funnel spec (questions, scoring, report)

## License

Private — Kursor CH / GC Consulting
