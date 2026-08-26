# Handover — Luck & Leverage Website

Everything a new developer needs to pick this up, edit it (in Claude Code or any
editor), and ship it. For deeper architecture notes see [`CLAUDE.md`](./CLAUDE.md).

---

## 1. What this is

The marketing website for **Luck & Leverage** — live at **https://luckandleverage.com**.

**Stack:** Next.js 16 (App Router) · React 19 · TypeScript · Tailwind CSS v4 ·
Zod (form validation). Package manager: **pnpm**. Hosted on **Vercel**.

It is **not** a static HTML site — it needs a build step.

---

## 2. Get access & clone

- Repo: `https://github.com/Lhop1990/luck-and-leverage-website` (private)
- Ask the owner to add you as a collaborator, then:

```bash
git clone https://github.com/Lhop1990/luck-and-leverage-website.git
cd luck-and-leverage-website
pnpm install
```

---

## 3. Editing it in Claude Code

Claude Code runs against your **local clone** using **your own** Claude account —
nothing from the previous owner's setup is required.

```bash
# from the repo folder
claude
```

Claude automatically reads `CLAUDE.md` for project context. Typical loop:
ask Claude to make a change → it edits the files → `pnpm build` to check →
commit & push (see §6). You can of course also edit in VS Code / Cursor / any editor.

---

## 4. Run locally

```bash
pnpm dev      # http://localhost:3000
pnpm build    # production build (catches type/build errors)
pnpm start    # serve the production build
pnpm lint     # eslint
```

---

## 5. Environment variables

Copy the template and fill in real values for anything you want active:

```bash
cp .env.example .env.local
```

| Variable | Purpose | Required? |
|---|---|---|
| `RESEND_API_KEY` | Sends contact-form leads by email (via Resend) | Needed for lead emails |
| `LEAD_TO_EMAIL` | Where leads are sent (default: jack@luckandleverage.com) | Optional |
| `LEAD_FROM_EMAIL` | From-address for lead emails | Optional |
| `NEXT_PUBLIC_GA_MEASUREMENT_ID` | Google Analytics 4 tracking ID | Optional |
| `ATLAS_API_KEY` / `ATLAS_API_BASE_URL` | Atlas CRM lead push (integration is stubbed) | Optional |

**Never commit `.env.local`** — it's gitignored. Production values live in the
Vercel project's Environment Variables, not in the repo.

---

## 6. How it deploys

**Recommended:** connect this GitHub repo to the Vercel project (Vercel → project →
Settings → Git). Once connected, **every push to `main` auto-deploys** to
luckandleverage.com — no CLI needed:

```bash
git add -A
git commit -m "your change"
git push
```

**Current fallback (until Git integration is connected):** deploy from the repo with
the Vercel CLI:

```bash
vercel deploy --prod --scope lucien-hopkinsons-projects --yes
```

---

## 7. Where the content lives (common edits)

| Page / thing | File |
|---|---|
| Home page (hero, problem, framework preview, founders, stats) | `src/app/page.tsx` |
| Obsession Framework page | `src/app/obsession-framework/page.tsx` |
| Case studies (content is data) | `src/lib/caseStudies.ts` |
| Case studies index / detail templates | `src/app/case-studies/page.tsx`, `src/app/case-studies/[slug]/page.tsx` |
| Contact page + form | `src/app/contact/page.tsx`, `src/app/contact/ContactForm.tsx` |
| Nav / Footer | `src/components/Nav.tsx`, `src/components/Footer.tsx` |
| Brand tokens (colours, fonts) | `src/app/globals.css` |
| Client logos | `public/logos/` |
| SEO (sitemap, robots, OG image, metadata) | `src/app/sitemap.ts`, `robots.ts`, `opengraph-image.tsx`, `layout.tsx` |

Adding a new case study = add one object to `caseStudies.ts` (no layout work).

---

## 8. Current status — what's built vs. switched on

- ✅ Site is live on luckandleverage.com with SSL.
- ⚠️ **Contact-form email is not active yet** — set `RESEND_API_KEY` in Vercel to
  turn it on. Until then, submissions are logged server-side and the contact page
  shows a `jack@luckandleverage.com` mailto as the fallback.
- ⚠️ **Google Analytics** is integrated but not tracking until
  `NEXT_PUBLIC_GA_MEASUREMENT_ID` is set.
- ⚠️ **Atlas CRM** integration is a stub with placeholder endpoints — wire the real
  API in `src/lib/atlas.ts` once Atlas API docs are available.
- The `/talent` page exists but is intentionally hidden (noindex, not in nav).

---

## 9. Domain & DNS

- **Domain:** luckandleverage.com. DNS managed in **Cloudflare** — apex `@` and `www`
  are `A` records → `76.76.21.21` (Vercel's shared IP), set to **DNS-only** (not proxied).
- `76.76.21.21` is Vercel's shared IP for all accounts, so if the Vercel project ever
  moves accounts, **DNS does not need to change** — the new account just re-adds the
  domain and Vercel re-issues SSL.
- **Domain email (MX) runs through Microsoft 365** — separate from the website; site
  changes never affect email. Do not touch the MX / DKIM / autodiscover DNS records.

---

## 10. Conventions

- Commit after each working change; push before ending a session.
- Run `pnpm build` before deploying — it catches type/build errors.
- Verify visually in the browser/preview before calling something done.
- Keep secrets out of the repo — env vars only.
