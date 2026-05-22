# Handoff: chill vibes inc. — Landing Page

## Overview
A single-page marketing site for **chill vibes inc.**, a brand-new software studio that builds and owns its own SaaS products. The site is intentionally minimal — it exists because "you have to have one" — and leans into a self-aware, low-pressure tone. There is no product to sell yet; the primary CTA is an email signup for "we'll tell you when we ship."

The page positions the studio (small, independent, no-clients, no-investors), introduces three in-progress projects without revealing them, lists a few operating principles, answers expected questions, and collects emails.

## About the Design Files
The files in this bundle are **design references created in HTML** — a working prototype showing the intended look and behavior. They are **not** production code to ship as-is. The task is to **recreate this design in the target codebase's existing environment** (Next.js / Astro / Remix / SvelteKit / etc.) using its established patterns, component primitives, and conventions.

If there is no existing codebase yet, recommended stack: **Next.js (App Router) + Tailwind CSS + TypeScript**, deployed to Vercel. It matches the studio's stated stack and keeps the single-page site cheap to maintain.

## Fidelity
**High-fidelity (hifi)** — colors, typography, spacing, animations, copy, and interactions are all final and should be matched closely. The mascot illustration is a real brand asset and must appear in the page. The gradient wordmark, terminal-green accents, dark Y2K/retro vibe, and self-aware copy tone are intentional brand decisions, not placeholder choices.

## Screens / Views

The site is a single scrolling page with the following sections, in order:

### 01 — Nav (sticky)
- **Layout:** Full-width sticky bar, blurred translucent background over page bg, 1px bottom border. Inner container max-width 1280px, padding 14px 32px, flex row with `justify-content:space-between`, gap 24px.
- **Left:** Brand lockup — mascot PNG (32px tall) + wordmark "chill vibes inc._" rendered in Bricolage Grotesque 700, 22px, with three colored spans:
  - "chill " → cream (--ink)
  - "vibes" → gradient (cyan → purple → pink, `-webkit-background-clip:text`)
  - "inc._" → gradient (purple → magenta), 18px
  - Wordmark must `white-space:nowrap`.
- **Center:** Nav links — `in the lab`, `about`, `faq`, `say hi`. JetBrains Mono 13.5px, color `--ink-soft`, hover → `--ink`.
- **Right:** Single CTA button "say hi ↗" in primary style (terminal green bg, dark-green text, glow shadow).
- Hidden below 980px.

### 02 — Hero
- **Layout:** Two-column grid 1.05fr / 0.95fr, gap 48px, vertically centered. Padding `60px 0 100px`.
- **Left column:**
  - Eyebrow: "you found the website. cool." — JetBrains Mono 11px, uppercase, letter-spacing 0.18em, color terminal green (`--green` #5af542), prefixed with a `>_` pseudo-element. `white-space:nowrap`.
  - H1 (three lines): Bricolage Grotesque 700, clamp(60px, 8.4vw, 132px), line-height 0.92, letter-spacing -0.04em.
    - Line 1: "we make" — cream
    - Line 2: "saas." — gradient (cyan → purple → pink, animated background-position)
    - Line 3: "that's the bit._" — "that's " cream, "the bit._" gradient (pink → magenta → purple)
  - Lede paragraph: 18px Space Grotesk, color `--ink-soft`, max-width 520px. Contains an `<em>` styled as green mono ("its own").
  - Two CTAs: primary "what we're building ↗" → #lab, ghost "say hi" → #contact.
  - Meta strip (mono 12.5px, flex gap 28px, `flex-wrap:wrap`, each span `white-space:nowrap`):
    - 🟢 "est. recently" (green dot)
    - 🟣 "products shipped: 0" (pink dot with glow)
    - 🟦 "vibes: high" (cyan dot with glow)
    - Dots: 8px square, `box-shadow:0 0 12px <color>` for the glow.
- **Right column (mascot):**
  - Container: aspect-ratio 1/1, max-width 560px, position relative, justify-self center.
  - `::before` pseudo-element: absolute inset 8%, border-radius 50%, radial-gradient purple glow, `filter:blur(40px)`.
  - Mascot PNG (`assets/mascot.png`, transparent background) at 88% width, position relative z-index 2, with two drop-shadows: `drop-shadow(0 30px 50px rgba(196,80,255,.45)) drop-shadow(0 0 24px rgba(255,109,200,.2))`. Animates `floatY` 5s ease-in-out infinite (translateY 0 → -14px, rotate 0 → -1.5deg).
  - Four sparkle elements (✦, ✦, +, ✦) positioned around the mascot at different corners, with `twinkle` animation (opacity + scale, staggered delays).
  - Three floating chips (position absolute, dark bg with backdrop-blur, mono font, gentle bobbing):
    - Top-left: "BUILD_001" label, "in progress" value (green)
    - Bottom-left: "TEAM SIZE" label, "small on purpose" value
    - Top-right: "MOOD" label, "unbothered" value (pink)
  - All chip values need `white-space:nowrap`.

### 03 — Marquee
- Full-width band, padding 18px 0, top + bottom hairline borders, background `rgba(26,14,53,.4)`, overflow hidden.
- Single horizontal scrolling track, two copies of the content to enable infinite loop. Animation: `scroll` 38s linear infinite, `translateX(0)` → `translateX(-50%)`.
- Content (JetBrains Mono 13.5px, uppercase, letter-spacing 0.16em, color `--ink-soft`):
  `own products ★ no clients ★ no investors ★ ship in public ★ small on purpose ★ calm by default` (×2 in each track, ×2 tracks)
- Star pips (`★`) colored pink.

### 04 — About
- Container `max-width: 920px`, padding `120px 0`.
- Section head: eyebrow "about", H2 "so, what is this?_" (`what is this?` is the gradient span).
- Two-column grid of paragraphs (1fr / 1fr, gap 48px), Space Grotesk 17px, line-height 1.7, color `--ink-soft`. Inline `<strong>` for "its own" in column 1.
- Copy:
  - Col 1: "chill vibes inc. is a new software company that builds **its own** SaaS products. we are not an agency. we won't build something for you. we are very politely the wrong vendor for that."
  - Col 2: "we made this website because we were told that businesses need websites — even ones that haven't shipped anything yet. so here it is. there will be real products here soon. promise."

### 05 — In the Lab
- Three-column grid (1fr × 3, gap 18px) of `.svc` cards.
- Each card: border-radius 18px, padding 32px 28px 28px, linear-gradient bg (`--bg-3` → `--bg-2`), 1px hairline border, min-height 340px, flex column gap 18px. Hover: `translateY(-4px)`, border-color → `--hairline-strong`, plus a radial-gradient hotspot reveals at top-right.
- Top row of card: 54×54px square glyph (border-radius 12px, tinted bg + 1px border, big display character) on the left, `svc-num` label (mono 11px uppercase) on the right.
- H3: Bricolage 700, 30px, letter-spacing -0.025em, line-height 1.05. Can include `<br>`.
- Body p: Space Grotesk 14.5px, line-height 1.55, color `--ink-soft`.
- Bottom: `<ul>` of status pills, mono 12.5px, each `<li>` prefixed with green `>` (via `::before`).
- Three cards:
  1. `▲` glyph (pink tint), "project_001 · in dev", "something for indie devs", body about side-projects at 2am, status: "private beta · q3" / "signups: not open yet".
  2. `◐` glyph (cyan tint), "project_002 · stealth", "a thing about ai", body about real problems, status: "🔒 stealth · waitlist later" / "codename: \"decaf\"".
  3. `✦` glyph (purple tint), "project_003 · scoping", "idea pile, being shrunk", body about the notebook, status: "tbd · winter" / "open to suggestions".

### 06 — Principles ("a few rules we keep")
- Section head, then a `.steps` grid: 4 columns, no gap, top border 1px hairline, vertical 1px hairline between cells.
- Each step: padding 32px 24px 0, min-height 280px, flex column gap 14px.
  - `.num` — Bricolage 700, 46px, color `--ink-dim`, with the second digit wrapped in `<em>` colored green (no italic).
  - H3: Bricolage 700, 24px, letter-spacing -0.025em.
  - Body p: Space Grotesk 13.5px, color `--ink-soft`.
  - Tag at bottom: mono 10.5px uppercase, top dashed hairline, `margin-top:auto`.
- Four steps: "own what we build" / "small on purpose" / "ship in public-ish" / "calm by default".

### 07 — FAQ
- Container `max-width: 920px`.
- Native `<details>` / `<summary>` accordions, no JS.
- Each row: 22px 4px padding, 1px hairline bottom (last row no border).
- Summary: Bricolage 700 22px, list-style none, flex row with `justify-content:space-between`. Left span flexes; right span is mono 14px "[ + ]" with `white-space:nowrap; flex-shrink:0`.
- Open body: Space Grotesk 15px, color `--ink-soft`, line-height 1.6, margin-top 14px.
- Five questions (see HTML for exact copy):
  1. "why does this website exist if you don't sell anything yet?"
  2. "can you build something for us?"
  3. "what are you actually building?"
  4. "are you raising? hiring?"
  5. "is the mascot for sale?"

### 08 — Final CTA / Email Signup
- Section padding 60px 0 120px.
- Card: border 1px `--hairline-strong`, border-radius 24px, padding 80px 64px, 2-column grid 1.4fr / 1fr, gap 48px. Background = linear-gradient(135deg, purple-tint, cyan-tint, pink-tint). Scanline overlay via `::before`.
- Left: eyebrow "stay in the loop", H2 "we'll tell you when we ship._" (italic em on "when we ship._" rendered as gradient — Bricolage doesn't ship an italic variant; the `<em>` is restyled `font-style:normal` with the gradient).
- Subhead p: "drop your email and we'll send one short note when our first thing is live. no newsletter, no funnels, no \"10 ways\" listicles. just a heads up."
- **Signup form** (`.signup`): flex wrap row, gap 8px, max-width 480px. 
  - Input: `type="email"`, required, placeholder "your@email", flex:1 min-width 200px, dark transparent bg `rgba(10,5,18,.5)`, 1px hairline-strong border, border-radius 10px, padding 12px 16px, JetBrains Mono 13.5px, focus → border green + slightly darker bg.
  - Button: primary style (green), "notify me ↗".
  - Confirmation: `.ok` span — "→ on the list. thanks." — opacity 0 → 1 on submit, green mono 11.5px uppercase. Submit handler `event.preventDefault()`, set `.ok` opacity to 1, clear input value. Production should POST to a real endpoint (ConvertKit / Buttondown / Resend / custom).
- Ghost link below: "or just email: hi@chillvibessoftware.com" → `mailto:hi@chillvibessoftware.com`.
- Right: smaller mascot PNG, max-width 260px, drop-shadow pink, floatY animation 4s.

### 09 — Footer
- Padding 60px 0 32px, top hairline, bg `#070310`.
- Top grid: 4 columns (2fr / 1fr / 1fr / 1fr), gap 32px.
  - Col 1: Brand lockup + blurb ("a tiny software studio building our own products. no clients, no investors, no decks. just things we want to use.").
  - Col 2 "this site": about / in the lab / faq / say hi.
  - Col 3 "contact": just `hi@chillvibessoftware.com`.
  - Col 4 "legal": privacy / terms.
- **ASCII art block** (`<pre class="ascii">`) — large "chill vibes Inc" rendered in `/$` block-letters. Mono font, 7px, color `--ink-dim`, opacity 0.45, line-height 1.15, `text-align:center`, `white-space:pre`, `overflow:hidden`. Exact ASCII is in the HTML — copy verbatim.
- Bottom row: flex row justify-between, mono 11px uppercase, color `--ink-dim`. Left: "© 2026 chill vibes inc · made remotely, made on purpose". Right: "v0.1 — \"just a website\"" + "all systems green".

## Interactions & Behavior
- **Sticky nav** with backdrop-blur on scroll (no extra JS, just CSS `position:sticky` + `backdrop-filter:blur(16px)`).
- **Smooth anchor scrolling** to `#lab`, `#about`, `#faq`, `#contact` — add `scroll-behavior:smooth` on `html` (or the nearest scroll container).
- **Buttons:** `transform:translateY(-2px)` on hover + shadow intensifies. Arrow span on `.btn` translates `(2px, -2px)` on hover.
- **Service cards:** `translateY(-4px)` on hover + border lights up + radial hotspot fades in.
- **Mascot floatY:** 5s ease-in-out infinite, translateY 0 → -14px, rotate 0 → -1.5deg.
- **Mascot glow `breathe`:** the orb-glow purple radial blur is static; the floatY is what makes it feel alive.
- **Sparkles `twinkle`:** opacity 0.4 → 1 + scale 0.85 → 1.1, 2.2s ease-in-out infinite, staggered delays (0s, 0.4s, 0.9s, 1.3s).
- **Floating chips:** two animations, `bobA` (translateY 0 → -10px) and `bobB` (translateY 0 → 10px), 6-8s loops.
- **Gradient text `gradShift`:** background-position 0 → 200% on a 200% wide gradient, 9-10s linear infinite. Gives the wordmark and headlines a slow color drift.
- **Marquee:** infinite-loop horizontal scroll, 38s linear.
- **FAQ:** native `<details>` toggle — no JS. Indicator `[ + ]` stays as plain text (does not flip to `[ - ]`; you can add that if desired).
- **Signup form:** preventDefault + show `.ok` confirmation. Replace with real submit to your email provider.
- **Scanlines + grain:** two fixed full-viewport overlays at z-index 4–5, pointer-events:none, `mix-blend-mode:overlay` for scanlines, ~4% opacity grain via inline SVG turbulence. Subtle.

## State Management
This page is almost entirely static. The only state is:
1. **Signup form submission state** — empty / submitting / success / error. The HTML demo just toggles `.ok` opacity; production needs real fetch logic and error handling.
2. **Future:** waitlist counters, "now playing" RSS, etc. — not present today.

There is no auth, no routing, no data fetching.

## Design Tokens

### Colors
| Token | Hex | Use |
|---|---|---|
| `--bg` | `#0a0512` | Page background |
| `--bg-2` | `#110826` | Card backgrounds, marquee |
| `--bg-3` | `#1a0e35` | Card top gradient stop |
| `--ink` | `#f4eada` | Primary text (cream) |
| `--ink-soft` | `#a796c5` | Body text, dim labels |
| `--ink-dim` | `#6a577e` | Tertiary text, mono labels |
| `--pink` | `#ff6dc8` | Primary accent (cap pink) |
| `--pink-soft` | `#ffb3e2` | Soft pink |
| `--cyan` | `#6dd5ff` | Secondary accent |
| `--purple` | `#a78bfa` | Tertiary accent, body glow |
| `--purple-2` | `#c084fc` | Highlight |
| `--green` | `#5af542` | Terminal green, primary CTA, eyebrow |
| `--yellow` | `#ffd84a` | Smiley accent (mascot only) |
| `--magenta` | `#c450ff` | End of gradients, mascot, blobs |
| `--hairline` | `rgba(167,139,250,.18)` | Subtle borders |
| `--hairline-strong` | `rgba(167,139,250,.35)` | Stronger borders |

### Typography
| Family | Weights | Use |
|---|---|---|
| **Bricolage Grotesque** | 700 (primary), 600 (light display), 500 (rare) | All display headings, brand wordmark, large numerals. Tight letter-spacing (-.025em to -.04em depending on size). |
| **Space Grotesk** | 400, 500 | All body copy, button text fallback. |
| **JetBrains Mono** | 400, 500, 700 | Eyebrows, labels, marquee, mono accents, code-like UI text, terminal blocks. |

Type scale (display sizes use `clamp` for responsiveness):
- Hero H1: `clamp(60px, 8.4vw, 132px)`, line-height 0.92, letter-spacing -0.04em
- Section H2: `clamp(44px, 5.6vw, 72px)`, line-height 0.98, letter-spacing -0.035em
- Card H3: 30px, line-height 1.05, letter-spacing -0.025em
- Step H3: 24px
- FAQ summary: 22px
- Body: 16px base, 17px lede, 18px hero lede, 14.5px card body, 13.5px small body
- Mono labels: 10–13.5px depending on context, letter-spacing 0.12–0.18em uppercase

### Spacing
- Page sides: 32px desktop, smaller on mobile
- Max content width: 1280px
- Section vertical padding: 120px desktop / 80px mobile
- Card padding: 32–36px
- Hairline grid gaps: 18px (cards), 32px (footer), 48px (about, hero)

### Borders & Radii
- Card border-radius: 18px
- Pricing/CTA card border-radius: 24px (legacy CSS retained)
- Button border-radius: 10px
- Input border-radius: 10px
- Small chips / glyphs: 5–12px
- Hairline borders: 1px solid `--hairline`

### Shadows
- Card hover: subtle, mostly via border-color change + transform.
- Primary button glow: `0 0 0 1px rgba(90,245,66,.6), 0 8px 28px -6px rgba(90,245,66,.4)`
- Pink button glow: same pattern in `--pink`
- Mascot drop-shadow: `0 30px 50px rgba(196,80,255,.45)` + soft pink halo
- Floating chips: `0 16px 40px -10px rgba(0,0,0,.6)` + backdrop-blur

### Animation tokens
- Easing: `ease-in-out` for floats, `linear` for marquee/gradient shift, `ease` for hover transitions (0.15–0.25s)
- floatY (mascot): 5s; bob chips: 6–8s; twinkle sparkles: 2.2s; gradShift: 9–10s; marquee: 38s.

## Assets

| File | Source | Notes |
|---|---|---|
| `assets/mascot.png` | Cropped from the brand sheet provided by the user | Black background was keyed out programmatically; 70% transparent pixels. 470×540. Use everywhere the mascot appears (nav, hero, footer brand lockup, CTA, footer). |
| `assets/brand.png` | Original brand sheet supplied by user | Contains the full lockup, icon variants, mascot in a circle, etc. Included for reference; you may want to use the "icon (compact)" portion as a favicon. |

When implementing: lift the cropped mascot, or re-crop from `brand.png` if you want a different aspect/composition.

### Favicon (recommended)
Use the icon-only square (top-left of `assets/brand.png`'s middle row) at 64×64 or 128×128. A SVG/PNG export with rounded corners matches the rest of the brand.

## Implementation Notes

1. **Framework choice:** Next.js App Router + Tailwind + TS, deployed on Vercel — single page, no routing complexity. SSG the whole thing.
2. **Components to extract:** `<Nav>`, `<HeroMascot>`, `<Marquee>`, `<ServiceCard>`, `<PrincipleStep>`, `<FaqItem>`, `<SignupForm>`, `<Footer>`. Each is small (<150 lines).
3. **Email form:** wire to **Resend** + a simple `/api/subscribe` route, or to **ConvertKit / Buttondown**. Validate email client-side and server-side, store opt-in timestamp, send a confirmation email.
4. **Animations:** all CSS-based today, no JS animation library needed. If migrating to Framer Motion, only the floatY/bob/twinkle would benefit — gradient shift and marquee should stay CSS.
5. **Tweaks panel (`tweaks-panel.jsx` + `tweaks-app.jsx`):** *do not ship this to production*. It's a design-time control surface for previewing palette/font/copy variants — included for reference only. Remove the script tags and the `#tweaks-root` div when implementing.
6. **Accessibility:**
   - The gradient text relies on `-webkit-background-clip:text` + `color:transparent` — fine in modern browsers, but ensure adequate `color` fallback for forced-colors mode (set `color: var(--ink)` and let the gradient override).
   - The native `<details>` accordion needs no ARIA — already accessible.
   - Add `prefers-reduced-motion: reduce` media query that disables `floatY`, `bobA`, `bobB`, `twinkle`, `gradShift`, and `scroll` (marquee). Currently not implemented.
   - All buttons are `<a>` — make them real `<button>` elements where they're not navigation (the email link can stay an `<a href="mailto:">`).
   - Color contrast: `--ink-soft` (#a796c5) on `--bg` (#0a0512) is borderline (WCAG AA ~4.6:1 at 18px). Body copy at 17px is fine; smaller mono text at 11px should bump to `--ink` or be made larger.
7. **Responsive:** the page has a single 980px breakpoint that collapses everything to single column. Production should add 640px and 1280px breakpoints for finer control.
8. **SEO:** add `<meta name="description">`, OG tags (title, description, image), `<title>`, JSON-LD `Organization` schema. None of this is in the prototype.
9. **No tracking, no cookie banner today.** Add only if you actually add analytics — and consider Plausible/Umami over GA so you can skip the banner entirely (EU).

## Files in this bundle

| File | Purpose |
|---|---|
| `ChillVives Landing.html` | The full hifi prototype. Reference this for exact markup, copy, and inline styles. |
| `tweaks-panel.jsx` | Tweaks panel framework (design-time only, not for production). |
| `tweaks-app.jsx` | Tweaks panel config — shows what variants were considered (palette options, font options, headline copy). Useful as a reference for which knobs the client cares about. |
| `assets/mascot.png` | Transparent-background mascot, ready to use. |
| `assets/brand.png` | Full source brand sheet — for reference + favicon source. |
| `README.md` | This document. |

## Copy reference (canonical)

All page copy is intentionally lowercase, self-aware, and avoids corporate-speak. Do not "polish" it — the dry tone is the brand.

Pulled verbatim from the prototype:

- Hero eyebrow: "you found the website. cool."
- Hero H1: "we make / saas. / that's the bit._"
- Hero lede: "chill vibes inc. is a brand-new software studio building *its own* products. no clients, no investors, no decks. just a few small humans making things we want to use."
- Hero meta: "est. recently" / "products shipped: 0" / "vibes: high"
- About column 1: "chill vibes inc. is a new software company that builds **its own** SaaS products. we are not an agency. we won't build something for you. we are very politely the wrong vendor for that."
- About column 2: "we made this website because we were told that businesses need websites — even ones that haven't shipped anything yet. so here it is. there will be real products here soon. promise."
- Lab intro: "three things we're building right now. none are ready. all are real. drop your email at the bottom and we'll tell you the second one ships."
- CTA H2: "we'll tell you / *when we ship._*"
- CTA sub: "drop your email and we'll send one short note when our first thing is live. no newsletter, no funnels, no \"10 ways\" listicles. just a heads up."
- Email button: "notify me ↗"
- Email confirmation: "→ on the list. thanks."
- Email fallback link: "or just email: hi@chillvibessoftware.com"
- Footer copyright: "© 2026 chill vibes inc · made remotely, made on purpose"
- Footer version line: 'v0.1 — "just a website"' / "all systems green"

Full FAQ + Principles + Lab card copy is in the HTML — reference it directly.
