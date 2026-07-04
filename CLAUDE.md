# Luck and Leverage Website

Marketing website for Luck & Leverage: home/case-studies/talent/contact pages plus a lead-capture contact form that emails the team and can push to Atlas CRM. Next.js 16 (App Router) + React 19 + Tailwind v4, TypeScript throughout.

## Run / test / deploy
```
# install:  pnpm install
# dev:      pnpm dev      (http://localhost:3000)
# lint:     pnpm lint     (eslint)
# build:    pnpm build
# start:    pnpm start    (serves the production build)
# deploy:   Vercel (Next.js preset, auto-detected)
```
No test runner is configured yet.

## Architecture
- `src/app/` — App Router pages: `page.tsx` (home), `case-studies/`, `case-studies/[slug]/`, `talent/`, `contact/`, `obsession-framework/`.
- `src/app/contact/actions.ts` — server action handling contact form submission (email + optional Atlas CRM push).
- `src/app/contact/ContactForm.tsx` — client form component; validated by `src/lib/leadSchema.ts` (zod).
- `src/lib/email.ts` — sends lead notification emails via Resend.
- `src/lib/atlas.ts` — optional Atlas CRM lead capture integration.
- `src/lib/caseStudies.ts` — case study content/data.
- `src/components/` — shared UI (Nav, Footer, Section, Button, Stat, GoogleAnalytics).
- `src/app/sitemap.ts`, `robots.ts`, `opengraph-image.tsx` — SEO/meta generation.

## Gotchas
- Real secrets (Resend API key, Atlas API key, GA measurement ID) go in `.env.local`, never committed — see `.env.example` for the required keys and format.
- Lead capture depends on `RESEND_API_KEY` and `LEAD_TO_EMAIL`/`LEAD_FROM_EMAIL`; Atlas push is optional and only fires if `ATLAS_API_KEY`/`ATLAS_API_BASE_URL` are set.
- Uses pnpm workspaces (`pnpm-workspace.yaml`) — install with pnpm, not npm/yarn, to keep the lockfile consistent.
- Tailwind v4 config lives in `postcss.config.mjs` / `globals.css`, not a `tailwind.config.js`.

## Conventions
- Commit after every working milestone; push before ending a session.
- Verify in browser/preview before claiming done. Tests required for money/auth logic.
