# CLAUDE.md — castecheq.com (CasTech EQ)

Casino equipment website for **CasTech EQ by Virexa**. Owner: Bilal Durmaz. He talks to you in Turkish or English; site copy is in English, German, Czech and Russian.

## Working rules

- Follow the karpathy-guidelines skill: state assumptions, minimum code, surgical changes, verify before saying "done".
- Never change copy, logo, images or prices on your own initiative. Do only what was asked; mention other issues instead of fixing them.
- `main` deploys straight to production (castecheq.com). Before pushing to `main`, `npm run build` must pass. For anything bigger than a text fix, work on a branch and open a PR.
- Commit messages: short, English, imperative ("Add DE copy for table signs").

## Stack

- Next.js 15 (App Router) + React 19 + Tailwind CSS 4 + TypeScript.
- **Static export** (`output: "export"`, `trailingSlash: true`) to GitHub Pages via `.github/workflows/deploy-pages.yml`. No server: no API routes, no server actions, no `next/image` optimisation, no middleware.
- Domain set by `public/CNAME` (castecheq.com). Do not touch it.
- Font: **Inter** only (`src/components/RootHtml.tsx`), same as virexa-tech.com. Do not add other fonts.
- Forms post to FormSubmit → `sales@virexa-tech.com` (`contactContent.formEndpoint` in `src/content/site.ts`). Never change the recipient.

Commands: `npm run dev` · `npm run build` (writes `out/`) · `npm run lint` · `npm run images`.

## Where things live

- `src/content/` holds all copy and data. Edit content here, not inside components.
  - `site.ts`: brand, contact details, company/legal data, footer.
  - `locales.ts`: per-language packs (meta titles/descriptions + page content); text lives in `src/content/{de,cs,ru}/`.
  - `catalogueData.ts`, `inventory.ts`, `liveGames.ts`, `accessoriesContent.ts`, `jackpotScreens.ts`, `installations.ts`.
  - `searchIndex.ts`: site search. Add new pages and products here too.
- `src/app/(en)/` holds the English pages at the root URL. `src/app/[locale]/` holds the `/de/`, `/cs/` and `/ru/` versions.
- `src/lib/i18n.ts`: `LOCALES`, `LOCALIZED_PATHS`. `src/app/sitemap.ts` has its own `paths` list.
- `src/views/` and `src/components/` hold layout and UI.

### Adding a page

1. Add the English page under `src/app/(en)/`.
2. If it is translated, add the `[locale]` page, add the path to `LOCALIZED_PATHS`, and add the copy to all three locale packs.
3. Add it to `paths` in `sitemap.ts` and to `searchIndex.ts`.
4. Add a meta title and description (SEO) for every language.

### Images

- Photos go in `public/images/<section>/` as `.webp`. Then run `npm run images`, which makes the `.w480`/`.w960` variants and updates `src/content/imageVariants.json`. Commit both the variants and the JSON.
- People may be cropped out of casino-floor photos. Outdoor LED and installation photos may be used uncropped.
- Logo: `public/brand/castech-mark.svg`: roulette-wheel "C", gold "T" inside, four card suits around it. Do not redraw it or swap it for the CasTech LED mark.

## Business facts the copy must respect

- Main goal: selling **casino equipment** (slot machines, gaming tables, chairs, chips, layouts, accessories) **plus** jackpot screens. The site must not read as a jackpot-screen-only business.
- **Slot machines: used (second-hand) only. Shuffle machines: refurbished.** Tables, chairs, chips, layouts and accessories are **new**. Never imply everything is second-hand.
- CasTech EQ is **not an authorised dealer or distributor** of any brand. Other manufactured items are sourced through direct relationships with manufacturers.
- **Jackpot screens are our own production** (CasTech EQ by Virexa). They are compatible with the jackpot servers of any brand and model (EGT, Apex, Novomatic…) and are made in any size or in sizes similar to the original EGT/Apex/Novomatic displays. They can show jackpot values or other content (e.g. a sports broadcast). Showing EGT/Novomatic logos on those screens in photos is fine.
- "Bell Link" and "Clover Twist" are EGT and other makers' jackpot systems, **not our products**.
- **Table signs** (limit signs, roulette result displays): screens are bought in, usually 21″ or 13″ (11–21″ or custom on request). Stands and design are ours. Say **"designed and assembled"**, never "own production".
- **No CCTV** on the site (no partnerships).
- Say "LED screen", not "LED display".
- SEO main keyword for the jackpot page: **"jackpot screen"**.

## Company details (footer, legal, about)

- Virexa AI Technologies s.r.o., IČO 29716055, Cihlářská 782/10a, Prosek, 190 00 Praha 9. Commercial Register, Municipal Court in Prague, section C, file 451241.
- Sister company: Deniz Trade LLC, Batumi, ID 445613480, Khakhuli Str. No. 3 (since 2021). Russia/CIS business goes through Batumi, not Prague.
- Phones: Prague +420 704 481 975, Georgia +995 555 48 19 75. Do not change them.
- Background: 22 years of international casino setup and management.

Keep these values in `src/content/site.ts`. Do not hard-code them in components.
