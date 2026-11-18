# Boutique Consultancy Design System

Brand-agnostic system for a three-person senior consultancy site (strategy, delivery, data & AI; Vietnam + abroad). Brand name and logo are placeholders: `[Team Name]` and a dashed `.ds-logo__slot`. No logo was supplied, so none is drawn.

**Source:** the token direction in the brief (navy / paper / amber, Plus Jakarta Sans + Inter, 14px cards, 1120px container). Kept as-is; three real problems fixed (below).

## Brand colors: Indigo · Tangerine · Mint (chosen)
Chosen over the original navy/amber direction for stronger presence. Fonts: **Plus Jakarta Sans** 700 headings + **Inter** body (both with Vietnamese). Section rhythm tightened to 64px desktop / 48px mobile.
| Role | Token | Value | Use |
|---|---|---|---|
| Primary | `--color-primary` | #2d1f8a | buttons, band-2, metrics on light |
| Deep band | `--color-band` | #1a1257 | hero, CTA, selected-work bands |
| Accent | `--color-accent` | #ff7a1a | fills, rules, on-dark buttons, large numerals (2.45:1 on paper: never small text) |
| Accent text | `--color-accent-text` | #b34700 | eyebrows, small accent text on light (5.2:1) |
| Highlight | `--color-highlight` | #9fe8c5 | chips, key words on dark bands |
| Ink / muted / paper | | #1c1a2e / #5b5975 / #f8f7fb | text / secondary / page |
Rules: white text never sits on tangerine (use ink, 6.5:1); on-dark buttons are tangerine with ink text; control borders #85809f (3.5:1); focus ring #0b57d0 (#9fe8c5 on dark). Full audit: guidelines/colors-contrast.html. Alternatives explored: palette-options.html, type-palette-options.html.

## CONTENT FUNDAMENTALS
- **Outcome first.** Lead with what changed, then how. "−31% order-to-delivery time in 5 months", not "We transformed operations".
- **Every claim carries a number, a role or a decision.** If none exists, cut the claim.
- **Less "we".** Name the client situation or the role ("Led by [Delivery lead]"). Max one "we" per paragraph.
- **No buzzwords** (synergy, cutting-edge, holistic, unlock). Plain verbs: decide, ship, cut, measure.
- **Casing:** sentence case for headings and buttons; eyebrows uppercase via CSS only (write them in normal case).
- **Voice:** quiet, specific, matter-of-fact. No exclamation marks, no emoji.
- **Bilingual:** English is the source; Vietnamese is a faithful translation, same claims, same numbers. Budget +25% length: no fixed heights, no `nowrap` on text, buttons wrap, cards stretch. Test every component with the VI string.
- **Placeholders:** `[bracketed]` text until real copy exists. Never ship brackets.
- **Anonymization:** never name clients without written consent. Use "[Size/rank] [sector] [geography]": "Top-3 logistics provider in Vietnam", "Regional consumer lender". Strip logos, names and exact internal figures from deliverable images.

## VISUAL FOUNDATIONS
- **Color:** cool paper (#f8f7fb) page, white cards, deep indigo bands for hero, work and CTA (about every second section). Tangerine is the energy: on-dark buttons, rules, numerals on dark. Mint marks one key phrase per band and chips.
- **Type:** Plus Jakarta Sans 700 headings (display 36–68, −2% tracking), Inter body 16/1.65. Eyebrows Inter 600 12px uppercase +12%. Heading line-height never below 1.1 for Vietnamese stacked marks.
- **Backgrounds:** flat color only. No gradients, patterns or textures; striped placeholder until real imagery.
- **Borders/cards:** 1px hairline, radius 14px, no shadow. Hover on linked cards: border goes navy (200ms). Featured card: navy 2px (border + inset).
- **Elevation:** one level (`--elevation-1`), used only on the stuck sticky nav.
- **Shape:** 14px cards, 10px inputs, pill buttons/chips/pills/lang toggle.
- **Motion:** 150–250ms, color/border/opacity plus 6px fade-up on reveal. No parallax, bounce, autoplay. `prefers-reduced-motion` zeroes all durations.
- **Hover/press:** primary → navy-2 → darker navy on press; secondary gets navy tint; on-dark → accent-soft. No scale/shrink.
- **Focus:** 3px #2a5bd7 (#8fb4ff on dark) outline, 2px offset, on every interactive element.
- **Transparency/blur:** only the 96% paper sticky nav, and the deliberate 6px blur on anonymized deliverables.
- **Imagery:** greyscale monochrome portraits (4:5; initials fallback), blurred greyscale deliverables with an "Anonymized" tag, no stock, no video. WebP ≤120KB, explicit dimensions.
- **Layout:** 1120px container, 24px gutters, 88/64px section rhythm, 720px reading width, 3 → 2 (768) → 1 (<768) grids. Sticky header; nothing else fixed.

## ICONOGRAPHY
Line icons only: Lucide-style, 1.5px stroke, 20/24px, `currentColor`, rounded caps, never filled. Source: **lucide-static** (CDN/npm), substitution flagged: no icon set was supplied. Icons accompany a text label or carry `aria-label`. No emoji, no unicode glyph icons except ✓ in selected pills and ↗ on external links. Not drawn here beyond three sample strokes.

## Fonts
Plus Jakarta Sans and Inter from Google Fonts (both include Vietnamese). **No font files were supplied**, loaded by URL. For production Astro, self-host via `@fontsource-variable/plus-jakarta-sans and /inter` (see guidelines/handoff.md).

## Index
- `styles.css` entry → `tokens/{fonts,colors,typography,spacing}.css`, `components.css`
- `tokens/tokens.json` JSON tokens
- `brand-system.html` one-page brand overview
- `components/{core,sections,cards}/` JSX + d.ts + prompt.md (Button, Chip, Field, NavBar, Footer, SectionHeader, CtaBand, MetricTile, ProcessStep, Callout, ServiceCard, CaseCard, EngagementCard, TeamCard); each folder has a state-sheet card
- `guidelines/` foundation cards, `components.md` (anatomy/do-don't/a11y), `handoff.md` (Astro), `quick-rules.html` (cheat sheet)
- `ui_kits/website/index.html` home (9 sections), case study, article, pricing; EN/VI toggle, filters, contact validation work
- `SKILL.md`
