# PRD — Rolando Community Landing Page

Responsive marketing landing page for **Rolando**, a community-driven learning platform. This document is the product brief for the AI-frontend workflow defined in [AGENTS.md](../AGENTS.md). Visual source of truth: [DESIGN.md](./DESIGN.md) + Figma.

## Product

- **Name**: Rolando community
- **Type**: Marketing landing page (single route, statically renderable)
- **Audience**: Prospective learners — self-taught developers, hobbyists, career switchers — who learn best in small, social cohorts.
- **Tone**: Warm, energetic, approachable. Not corporate, not sterile.
- **Tagline (Hero H1)**: "Where the joy of learn meets the power of community"

## Goals

1. Communicate the value proposition in the hero in < 3 seconds.
2. Drive sign-ups through a primary CTA visible in the hero and reinforced in the promo banner.
3. Showcase courses and community proof (avatars, 4.8 rating) to build trust.
4. Read clean on mobile, tablet, and desktop.

## Non-Goals (Out of Scope)

- Backend / auth / signup flow (CTAs are anchors / placeholder `href`).
- Course detail pages, search, filtering.
- Internationalization, dark mode toggle.
- Analytics wiring.

## CTAs

| CTA       | Label          | Target     |
| --------- | -------------- | ---------- |
| Primary   | Get started    | `#signup`  |
| Secondary | Browse courses | `#courses` |

## Figma URLs

- **Web (1730w)**: https://www.figma.com/design/FPM18t2oV8BwC8ztYfngcn/FREE-LANDING-PAGE-TEMPLATE---RESPONSIVE--Community-?node-id=6-14827&m=dev
- **Tablet**: https://www.figma.com/design/FPM18t2oV8BwC8ztYfngcn/FREE-LANDING-PAGE-TEMPLATE---RESPONSIVE--Community-?node-id=6-15694&m=dev
- **Mobile (431w)**: https://www.figma.com/design/FPM18t2oV8BwC8ztYfngcn/FREE-LANDING-PAGE-TEMPLATE---RESPONSIVE--Community-?node-id=6-16562&m=dev

## Breakpoints

Mobile-first. Tokens and tailwind utilities only — see [DESIGN.md](./DESIGN.md) for color, type, radius, and spacing scales.

| Breakpoint | Range          | Figma frame width | Content max-width |
| ---------- | -------------- | ----------------- | ----------------- |
| Mobile     | ≤ 640px        | 431px             | 100% — 16px gutter |
| Tablet     | 641 – 1023px   | ~1024px           | 100% — 32px gutter |
| Desktop    | ≥ 1024px       | 1730px            | 1440px centered    |

## Page Sections

Order from top to bottom. Each section is a Server Component in `components/sections/` unless interactivity demands otherwise.

### 1. Header
- **Intent**: Brand mark + primary nav, present on every breakpoint.
- **Desktop**: Logo left, nav links (Products / Resources / Company) center-right, primary CTA right.
- **Mobile**: Logo left, hamburger icon right (no inline nav).
- **Figma**: mobile `6:17414` (logo + `textalign-right` icon). Desktop header is implicit above the hero — derive from the same logo + nav labels listed in the footer columns.

### 2. Hero
- **Intent**: Headline + value prop + dual CTA + community proof composition.
- **Copy**:
  - H1: *"Where the joy of learn meets the power of community"*
  - Sub: *"Dive deep in immersive, interactive small groups. Expand horizons, engage in discussions, and elevate your learning journey with us."*
- **Visual**: Concentric circles behind the text wrapper, 7 avatar bubbles ringed around the composition, 🧠 and 🙈 emoji accents, a small "⭐ 4.8" rating chip.
- **Buttons**: Primary "Get started", secondary "Browse courses" — stacked vertically per Figma button wrapper.
- **Responsive**: Decorative circle scales 1746px (web) → 913px (mobile). Text width 787px → 401px. H1 64/72 → 40/48 on mobile.
- **Figma**: web `6:14828`, mobile `6:16564`.

### 3. Features (3-up)
- **Intent**: Top-of-funnel "what you get" strip, three icon+title+body cards.
- **Cards**:
  1. **Explore topics** — "Explore our selection of courses in development" (icon: clipboard)
  2. **Meet new friends** — "Join the network with million of students and learn" (icon: people)
  3. **Learn code** — "Learn all about code and become in a developer" (icon: people)
- **Responsive**: 3 columns desktop / 1 column mobile (tablet falls back to 1 or 2 — confirm at Figma 6:15694).
- **Figma**: web `6:14857`, mobile `6:16593`.

### 4. Popular courses
- **Intent**: Section heading + 4 course cards (image, title, meta, price/CTA).
- **Heading**: "Popular courses"
- **Cards**: Pulled from Figma `Course Card` component. 4 instances total.
- **Responsive**: 4-up grid (desktop) → 2-up (tablet) → 1-up stack (mobile).
- **Figma**: web `6:14876`, mobile `6:16612`.

### 5. Promo banner / CTA strip
- **Intent**: Full-width visual + CTA slab between courses and the alternating feature blocks.
- **Status**: Copy + illustration to be extracted from Figma during implementation — metadata reveals no child text nodes. Treat as a banner; verify exact content via Figma node before coding.
- **Figma**: web `6:14883` (600px tall), mobile `6:16619` (631px tall).

### 6. Alternating feature blocks (×3)
- **Intent**: Three side-by-side illustration + "Properties" text blocks that go deeper on the product story.
- **Themes**: (a) retro computer / curriculum, (b) community / inclusivity, (c) group chat / discussion.
- **Layout**: Desktop alternates image-left / image-right per row. Mobile stacks image above text.
- **Figma**: web `6:14887` (parent), mobile `6:16623`.

### 7. Footer
- **Intent**: Logo + social links + sitemap columns.
- **Left**: Logo + Social Networks Dark (icon row).
- **Right columns**:
  - **Products**: Courses, Development
  - **Resources**: Careers, Blog
  - **Company**: QA, Terms and conditions, Privacy policy
- **Figma**: web `6:15657`, mobile `6:17393`.

## Components

Tokens come from [DESIGN.md](./DESIGN.md) — do not hardcode hex/px in components.

`components/ui/`:
- **Button** — `primary` + `secondary` variants. Hover, focus-visible, disabled, loading states.
- **Card** — surface primitive used by course cards and feature cards.
- **IconBadge** — circular badge for feature icons and footer social.
- **Logo** — SVG wordmark.

`components/sections/`:
- **Header**
- **Hero**
- **Features**
- **PopularCourses**
- **PromoBanner**
- **AlternatingFeature** — reused 3× with `imageSide: 'left' | 'right'` prop.
- **Footer**

RSC by default. Add `"use client"` only for the mobile nav toggle.

## Assets to extract into `public/`

| Asset                          | Source                              |
| ------------------------------ | ----------------------------------- |
| Logo SVG                       | Footer `Logo` component             |
| Hamburger icon                 | Mobile header `textalign-right`     |
| Feature icons (clipboard, people) | `Frame 2267` instances in Features |
| Hero avatar set (7 photos)     | Hero `Component 2` ellipses         |
| Course card thumbnails (4)     | `Course Card` instances             |
| 3 illustrations                | Freepik groups in `Frame 2129`      |
| Social icons (footer)          | `Social Networks Dark` instance     |

Prefer SVG for vector assets; PNG/WebP for photographs (avatars, course thumbs).

## Accessibility & Performance

Per AGENTS.md + DESIGN.md:
- WCAG 2.2 AA, visible focus rings on every interactive element.
- Keyboard reachable end-to-end; logical tab order; skip-to-content link.
- Color tokens only — no inline hex / px in components.
- Strict TypeScript, no `any`, no `@ts-ignore`.
- Server Components by default; hydrate only the mobile nav.
- Use `next/image` for raster assets; lazy-load below the fold.
- Lighthouse: a11y ≥ 95, performance ≥ 90 on desktop.

## Acceptance

A PR is shippable when:
1. `npm run lint && npx tsc --noEmit && npm run build` all pass.
2. Visual QA (Playwright MCP screenshots vs Figma) at 430 / 1024 / 1440px matches the three Figma frames.
3. Keyboard nav: tab through hero → features → courses → footer with visible focus on every stop.
4. All copy strings match the Figma source verbatim.
5. Lighthouse a11y ≥ 95.
