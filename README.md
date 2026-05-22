# chill vibes inc. — landing

Single-page marketing site for **chill vibes inc.**, built from the design handoff in `design_handoff_chillvibes_landing/`.

Vite + React + TypeScript + Tailwind v4. Deployed as a static bundle to GitHub Pages.

## Stack

- **Vite 6** — build + dev server
- **React 19** + **TypeScript** — components are in `src/components/`
- **Tailwind v4** — all design tokens live in `src/index.css` via `@theme`; no `tailwind.config.js`
- **Google Apps Script** — email signup posts directly to a Sheet-backed web app (no backend, no key)
- **GitHub Actions** — `main` → `gh-pages` via `.github/workflows/deploy.yml`

## Local dev

```bash
npm install
npm run dev          # http://localhost:5173
npm run build        # outputs to dist/
npm run preview      # serve the built bundle locally
npm run typecheck
```

## Configuration (env vars)

Vite picks these up at build time. Set them locally in a `.env.local` (gitignored) and in **GitHub repo settings → Variables**:

| Variable | Required | Notes |
| --- | --- | --- |
| `VITE_SHEET_ENDPOINT` | yes for real signups | Your Apps Script Web App URL (`https://script.google.com/macros/s/.../exec`). The form POSTs `email=...` here. If unset, the form still shows the "on the list. thanks." confirmation but doesn't send. |
| `VITE_BASE_PATH` | yes for project pages | `/` for user/org sites (`<user>.github.io`). `/<repo>/` for project pages (`<user>.github.io/<repo>/`). |
| `VITE_SITE_URL` | optional | Public site URL used in OG/canonical tags (no trailing slash). |

Sample `.env.local`:

```
VITE_SHEET_ENDPOINT=https://script.google.com/macros/s/AKfycb.../exec
VITE_BASE_PATH=/Landing/
VITE_SITE_URL=https://yourname.github.io/Landing
```

### Wiring the Google Sheet (one-time setup)

1. Open the destination Google Sheet. Add two header cells in row 1: `timestamp`, `email`.
2. **Extensions → Apps Script**. Replace the boilerplate `Code.gs` with the contents of `apps-script/signup.gs` (see this repo).
3. **Deploy → New deployment → Type: Web app**. Set **Execute as: Me** and **Who has access: Anyone**.
4. Copy the **Web app URL** (`https://script.google.com/macros/s/.../exec`) and put it in `VITE_SHEET_ENDPOINT` locally + as a **Repo Secret** in GitHub.
5. Each subsequent edit to the script needs **Deploy → Manage deployments → Edit → New version → Deploy** to take effect at the same URL.

## Project structure

```
.
├── .github/workflows/deploy.yml   # GitHub Pages deploy on push to main
├── public/                        # Static assets served at /
│   ├── mascot.png                 # Brand mascot (470×540, transparent)
│   ├── favicon{,-16,-32,-256}.png # Favicons cropped from brand.png ICON tile
│   ├── apple-touch-icon.png       # 180×180
│   └── og-image.png               # 1200×630 social card
├── src/
│   ├── App.tsx                    # Section composition
│   ├── main.tsx                   # React root
│   ├── index.css                  # @theme tokens + keyframes + reduced-motion
│   ├── components/
│   │   ├── Brand.tsx              # Mascot + wordmark lockup (Nav + Footer)
│   │   ├── Nav.tsx                # Sticky nav with CTA
│   │   ├── HeroMascot.tsx         # Mascot + sparkles + floating chips
│   │   ├── Marquee.tsx            # Infinite-scroll band
│   │   ├── ServiceCard.tsx        # Lab card with variant tint
│   │   ├── PrincipleStep.tsx      # Numbered step with responsive borders
│   │   ├── FaqItem.tsx            # Native <details> accordion row
│   │   ├── SignupForm.tsx         # Buttondown form + status
│   │   └── Footer.tsx             # Grid + ASCII art + version row
│   └── data/                      # services, principles, faqs, marquee
├── index.html                     # SEO meta, OG tags, JSON-LD Organization
├── package.json
├── tsconfig*.json
└── vite.config.ts
```

## Design tokens

All tokens live in `src/index.css` under `@theme`. They're exposed as both CSS custom properties **and** Tailwind utilities. For example `--color-pink` → `text-pink`, `bg-pink`, `border-pink`.

Animations are also tokens (`--animate-float-y`, `--animate-marquee`, etc.) and surface as utilities (`animate-float-y`, `animate-marquee`). The `prefers-reduced-motion: reduce` media query at the bottom of `index.css` disables every named animation called out in the design handoff.

## Email signup

The form posts `email=...` (form-encoded) to a Google Apps Script web app with `mode: "no-cors"`. Apps Script appends `[timestamp, email]` to the sheet. The browser can't read the response (Apps Script returns no CORS headers), so we optimistically show success and only show an error on network-level failure. No API key on the client.

## GitHub Pages deploy

1. Push the repo to GitHub.
2. **Settings → Pages → Source → GitHub Actions.**
3. **Settings → Secrets and variables → Actions → Variables** — add `VITE_BASE_PATH` (set to `/<repo>/` for a project page) and `VITE_BUTTONDOWN_USERNAME`.
4. Push to `main`. The workflow builds + publishes.

## What was intentionally not included

Per the design handoff, the following are design-time only and **not shipped**:
- `tweaks-panel.jsx` / `tweaks-app.jsx` / `#tweaks-root`
- The unused prototype sections (`.work-*`, `.stats`, `.testi-*`, `.plan*`, `.terminal`, `.mockup*`)

No analytics, no cookie banner.

## Reference

The original prototype lives in `design_handoff_chillvibes_landing/` — keep it for comparison while iterating.
