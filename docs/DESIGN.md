---
version: alpha
name: Rolando Community
description: >-
  Dark-themed, community-first marketing landing page for Rolando — a learning
  platform built around small social cohorts. Source of truth: Figma file
  FPM18t2oV8BwC8ztYfngcn. Companion to docs/prd.md and AGENTS.md.
colors:
  primary: "#ddd6fe"
  onPrimary: "#4c1d95"
  background: "#171717"
  surface: "#262626"
  surfaceHover: "#262626"
  textPrimary: "#fafafa"
  textHeading: "#f5f5f5"
  textMuted: "#a3a3a3"
  icon: "#d4d4d4"
  border: "#737373"
  warning: "#f59e0b"
  white: "#ffffff"
  black: "#000000"
typography:
  display:
    fontFamily: "Inter Tight"
    fontSize: "64px"
    fontWeight: 600
    lineHeight: "72px"
    letterSpacing: "-0.01em"
  h1:
    fontFamily: "Inter Tight"
    fontSize: "38px"
    fontWeight: 600
    lineHeight: "38px"
    letterSpacing: "0"
  h3:
    fontFamily: "Inter Tight"
    fontSize: "24px"
    fontWeight: 600
    lineHeight: "32px"
    letterSpacing: "0"
  h5:
    fontFamily: "Inter Tight"
    fontSize: "16px"
    fontWeight: 600
    lineHeight: "24px"
    letterSpacing: "0"
  lgStrong:
    fontFamily: "Inter Tight"
    fontSize: "16px"
    fontWeight: 500
    lineHeight: "16px"
    letterSpacing: "2px"
  baseStrong:
    fontFamily: "Inter Tight"
    fontSize: "14px"
    fontWeight: 500
    lineHeight: "14px"
    letterSpacing: "2px"
  baseNormal:
    fontFamily: "Inter Tight"
    fontSize: "14px"
    fontWeight: 400
    lineHeight: "14px"
    letterSpacing: "2px"
rounded:
  md: "8px"
  lg: "16px"
  full: "360px"
spacing:
  half: "2px"
  xxxs: "4px"
  xs: "8px"
  sm: "12px"
  md: "16px"
  base: "20px"
  lg: "24px"
  xl: "32px"
  xxl: "48px"
  xhuge: "128px"
  xxxhuge: "192px"
components:
  buttonMd:
    height: "44px"
    minWidth: "44px"
    radius: "{rounded.md}"
    paddingX: "{spacing.lg}"
    paddingY: "{spacing.sm}"
  buttonLg:
    height: "52px"
    minWidth: "52px"
    radius: "{rounded.md}"
    paddingX: "{spacing.xl}"
    paddingY: "{spacing.md}"
  buttonPrimary:
    background: "{colors.primary}"
    color: "{colors.onPrimary}"
  buttonSecondary:
    background: "transparent"
    color: "{colors.textPrimary}"
    border: "1px solid {colors.border}"
  card:
    background: "{colors.surface}"
    radius: "{rounded.lg}"
    border: "1px solid {colors.border}"
    paddingX: "{spacing.lg}"
    paddingY: "{spacing.lg}"
  iconBadge:
    background: "{colors.primary}"
    color: "{colors.onPrimary}"
    radius: "{rounded.full}"
  avatar:
    radius: "{rounded.full}"
    border: "2px solid {colors.background}"
  ratingChip:
    background: "{colors.warning}"
    color: "{colors.black}"
    radius: "{rounded.full}"
---

# DESIGN.md — Rolando Community

> Authored in the [Stitch DESIGN.md](https://stitch.withgoogle.com/docs/design-md/overview) format (alpha). The YAML front matter is the machine-readable token source; the markdown body below is the rationale agents read before composing UI. Pair with [`prd.md`](./prd.md) and [`../AGENTS.md`](../AGENTS.md).
>
> **Source of truth**: Figma file `FPM18t2oV8BwC8ztYfngcn` ([web frame `6:14827`](https://www.figma.com/design/FPM18t2oV8BwC8ztYfngcn/FREE-LANDING-PAGE-TEMPLATE---RESPONSIVE--Community-?node-id=6-14827&m=dev)).
>
> **Drift notice**: `app/globals.css` and `app/layout.tsx` still ship the original starter palette (light, blue `#0000FF`, Geist). Aligning them with the tokens above is the next implementation step — assume the code does not match the spec yet.

## Overview

Rolando is a community-driven learning platform; the landing page sells the *feeling* of learning with people rather than alone in front of a video. The visual identity is built to make that feeling specific.

- **Atmosphere** — dark, focused, social. Near-black surfaces let avatar photography and a single vibrant lavender accent do the talking. No glassmorphism, no rainbow gradients, no corporate-SaaS sheen.
- **Personality** — warm and energetic but confident. Headlines are direct and human ("Where the joy of learn meets the power of community"). Copy is concise, never marketing-stuffed.
- **Composition** — circular geometry (concentric rings, full-round avatars, pill chips) repeats across sections to reinforce "community" without resorting to literal illustration.
- **Avoid** — generic gradient SaaS look, neumorphism, glassmorphism, raised drop-shadow stacks, hard-edged corporate slabs, low-contrast muted body text.

## Colors

The palette is dark-first. There is exactly one chromatic accent (lavender / deep purple), one warning accent (amber, used only on the 4.8 rating chip), and a neutral scale that holds everything else.

| Token | Hex | Semantic role |
| --- | --- | --- |
| `colors.background` | `#171717` | Page surface; default body background. |
| `colors.surface` | `#262626` | Elevated containers — cards, banners, course tiles, header on scroll. |
| `colors.surfaceHover` | `#262626` | Hover state for list / control items on the dark surface. |
| `colors.textHeading` | `#f5f5f5` | H1–H5 headings. Highest-contrast text. |
| `colors.textPrimary` | `#fafafa` | Body copy, nav links, interactive labels. |
| `colors.textMuted` | `#a3a3a3` | Descriptions, captions, secondary metadata. Never use for primary CTAs or for body copy below 14px. |
| `colors.icon` | `#d4d4d4` | Default icon stroke / fill on dark surfaces. |
| `colors.border` | `#737373` | Card borders, dividers, secondary-button outline. |
| `colors.primary` | `#ddd6fe` | Lavender accent surface — primary CTA background, hero accent fill, IconBadge background. |
| `colors.onPrimary` | `#4c1d95` | Deep purple — text and icon color *on top of* `primary`. Never use as a fill on a dark surface (insufficient contrast). |
| `colors.warning` | `#f59e0b` | Reserved for the "⭐ 4.8" rating chip. Not a general accent. |
| `colors.white` / `colors.black` | `#ffffff` / `#000000` | Pure shades — use sparingly, mainly inside illustrations and on the rating chip text. |

**Contrast pairings to use**
- Body / heading text → page or surface background (passes AA at all sizes).
- `onPrimary` (`#4c1d95`) on `primary` (`#ddd6fe`) → primary CTA label.
- Never put `textMuted` on `surface` for anything load-bearing — it's a captions-only color.

## Typography

Single family across the system: **Inter Tight** (variable; weights 400 / 500 / 600). Fallback stack: `Inter Tight, ui-sans-serif, system-ui, sans-serif`. Inter Tight is loaded via `next/font/google` (replacing the starter's Geist).

| Token | Size / line-height | Weight | Tracking | Usage |
| --- | --- | --- | --- | --- |
| `typography.display` | 64 / 72 | 600 | -0.01em | Hero H1 at desktop. Composed style — scale down to ~40 / 48 on mobile per [prd.md](./prd.md). |
| `typography.h1` | 38 / 38 | 600 | 0 | Figma's H1 token. Use for second-level section openers and the mobile hero title. |
| `typography.h3` | 24 / 32 | 600 | 0 | Section headings ("Popular courses", alternating-feature titles). |
| `typography.h5` | 16 / 24 | 600 | 0 | Card titles (course cards, feature cards), small headings. |
| `typography.lgStrong` | 16 / 16 | 500 | 2px | Button labels, eyebrow labels. Letter-spacing is intentional — Figma uses tight, slightly-tracked sans for control labels. |
| `typography.baseStrong` | 14 / 14 | 500 | 2px | Tag pills, footer column headers, course-card meta. |
| `typography.baseNormal` | 14 / 14 | 400 | 2px | Body copy in cards and footer, secondary descriptions. |

**Notes for composition**
- The Figma `Heading 1` token is 38px; the *rendered* hero is layered using the larger `display` token plus the `h1` token. Don't reduce the hero to a single 38px line and call it done — match the rendered scale from the Figma frame.
- Long lines of body copy should sit at ~14px with 24–32px line-height in dark surfaces — bump line-height beyond the token value when paragraphs exceed two lines, per WCAG 2.2 AA readability guidance.
- Never use `Geist` in new code; the project default font reference exists in the scaffold and is scheduled for removal.

## Layout

Mobile-first. The page lives inside a single column that grows to a max width on desktop.

| Breakpoint | Width range | Figma frame | Container | Gutter |
| --- | --- | --- | --- | --- |
| Mobile | ≤ 640 px | `431` (`6:16562`) | 100% | `spacing.md` (16 px) |
| Tablet | 641 – 1023 px | `~1024` (`6:15694`) | 100% | `spacing.xl` (32 px) |
| Desktop | ≥ 1024 px | `1730` (`6:14827`) | max `1440 px`, centered | `spacing.xxl` (48 px) |

**Spacing scale** (from Figma): `2 · 4 · 8 · 12 · 16 · 20 · 24 · 32 · 48 · 128 · 192` px. Every padding, gap, and margin in the implementation must resolve to one of these tokens.

**Vertical rhythm**
- Between sections on desktop: `spacing.xhuge` (128 px) — drops to `spacing.xxl` (48 px) on mobile.
- Inside a section (heading → content): `spacing.xl` (32 px) desktop / `spacing.lg` (24 px) mobile.
- Between cards in a grid: `spacing.lg` (24 px).

**Grid behavior**
- Features: 3-up desktop → 1-up mobile.
- Popular courses: 4-up desktop → 2-up tablet → 1-up mobile.
- Alternating feature blocks: image-left / image-right alternation desktop; image-above-text stack mobile.

## Elevation & Depth

Depth is conveyed by **surface swap and outline**, not by drop-shadow stacks. Figma encodes no shadow tokens — do not invent them.

- **Level 0** — `colors.background` (`#171717`). Page surface.
- **Level 1** — `colors.surface` (`#262626`). Cards, banners, sticky header, course tiles. Always paired with a 1 px `colors.border` outline at `rounded.lg` for definition.
- **Hover / pressed** — keep the same surface, brighten with a 1-frame opacity tween on the border (`#737373` → `#a3a3a3`) or shift the inner control to `surfaceHover`. No translate-y, no animated shadow.
- **Hero rings** — the concentric circles in the hero are decorative `colors.border` 1 px strokes on transparent fills; treat them as composition, not elevation.

## Shapes

| Token | Value | Where it lives |
| --- | --- | --- |
| `rounded.md` | 8 px | Buttons, course-card thumbnails, hero rating chip body. |
| `rounded.lg` | 16 px | Cards (course, feature, alternating-feature image frames), promo banner. |
| `rounded.full` | 360 px | Pill chips, avatar bubbles, IconBadge, footer social icons. |

Avoid square (`0`) corners anywhere — even the footer column headers sit on radius-8 hit areas. Avoid radii between the three tokens; do not invent a `radius.input` or `radius.tag` unless the Figma spec adds one.

## Components

Composed from primitives in `components/ui/`; section-level compositions live in `components/sections/` (see [`prd.md`](./prd.md) for the full section list).

### Primitives (`components/ui/`)

- **Button** — variants `primary` (lavender fill, deep-purple label) and `secondary` (transparent fill, border outline, light label). Two sizes: `md` (44 / 44 px) and `lg` (52 / 52 px). Hover: secondary swaps border to `colors.icon`; primary darkens the fill ~6% via opacity layer. Focus-visible: 2 px `colors.primary` outline offset 2 px. Disabled: 50% opacity, no pointer events. Loading: replace label with a spinner sized to font, preserve button width.
- **Card** — `surface` background, `rounded.lg`, 1 px border, `lg` padding on both axes. Composed by the course card and feature card.
- **IconBadge** — `rounded.full`, `primary` fill, `onPrimary` icon color. Used for feature icons (clipboard, people) and footer social icons.
- **Logo** — wordmark SVG extracted from the Figma footer logo node. Single color; inherits `currentColor` so it can sit on any surface.

### Section components (`components/sections/`)

| Component | Notes |
| --- | --- |
| `Header` | Sticky, transparent over hero, switches to `surface` background on scroll. Mobile collapses to a hamburger (hydrated `"use client"` island — the only client component on the page). |
| `Hero` | Display H1 + body + dual CTA + decorative concentric rings + 7 avatar bubbles + rating chip. RSC. |
| `Features` | Three IconBadge + h5 + baseNormal cards. RSC. |
| `PopularCourses` | h3 heading + 4 Card instances using `course-thumbnail` aspect. RSC. |
| `PromoBanner` | Full-bleed `surface` block with a single CTA; copy/illustration extracted from Figma during implementation. RSC. |
| `AlternatingFeature` | Re-used 3×; props `imageSide: 'left' | 'right'`. RSC. |
| `Footer` | Logo + social IconBadge row + three sitemap columns. RSC. |

### Interaction states (mandatory for every interactive element)

- `hover` — visible change to background, border, or text color (no transform-only hover).
- `focus-visible` — 2 px ring in `colors.primary`, offset 2 px from the element edge.
- `active` / `pressed` — slight darken via opacity, no positional shift.
- `disabled` — 50% opacity + `cursor: not-allowed`; `aria-disabled` if non-button.
- `loading` — preserve outer dimensions; show a spinner or shimmer in place.
- `error` — border swap to a warning color paired with a textual message — never color-only.

## Do's and Don'ts

**Do**
- Reference tokens from the YAML front matter — `bg-[var(--color-background)]`, `rounded-[var(--rounded-lg)]`, etc. — never raw hex / px.
- Default to React Server Components. Add `"use client"` only for the mobile nav toggle.
- Use `next/image` for raster assets (avatars, course thumbnails). SVG for the logo, icons, and decorative rings.
- Match Figma copy *verbatim*. Headline punctuation and casing are intentional.
- Hit WCAG 2.2 AA — verified contrast pairs, visible focus rings, keyboard-reachable end-to-end, logical tab order, skip-to-content link.
- Run `npm run lint && npx tsc --noEmit && npm run build` before opening a PR.

**Don't**
- Don't add new colors, fonts, radii, or spacing values without first adding them to this file's YAML front matter.
- Don't use the `Geist` font reference left in `app/layout.tsx` — it's scheduled for removal.
- Don't use `colors.textMuted` for primary copy or for any text smaller than 14 px.
- Don't use `colors.warning` outside the rating chip. It is not a general accent.
- Don't introduce drop-shadow elevation. Depth is surface + outline, not shadow.
- Don't barrel-export from `index.ts` files. Don't default-export components. Don't ship `any` or `@ts-ignore`.
- Don't invent variants. If a state is missing from this file, update DESIGN.md *first*, then implement.
