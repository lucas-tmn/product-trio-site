# Component specs
Shared: min target 44px; focus = 3px ring (`:focus-visible`); never color-only meaning; every component tested with Vietnamese (+25%) text; no fixed heights.

## Button
Anatomy: label (+ optional trailing arrow). 44px min height, 24px side padding, pill, Inter 600 15px. Variants: primary (indigo), secondary (outline), on-dark, ghost-dark. States: hover darkens/tints, active darker, disabled #ebe8df/#6f6a5d (use `disabled`, or `aria-disabled` for links). Do: one primary per view; verb-first labels. Don't: accent-filled buttons (fail contrast), icon-only without aria-label.
## Text link
Accent-text, underlined, 44px hit area. External links: ↗ and `rel="noopener"`.
## Nav + sticky header
72px row, links 44px high, current page = 2px accent underline + `aria-current="page"`. Sticky; elevation only after scroll. Mobile (<768): links collapse into a Menu button (`aria-expanded`, `aria-controls`), full-width 52px rows, Plus Jakarta Sans 20px. Skip-link as first focusable element (add in Astro layout).
## EN/VI toggle
Two-segment group, `role="group"`, `aria-pressed`, each 44×40. Set `<html lang>`; use `lang="vi"` on mixed-language fragments. Persist choice via URL path (/vi/).
## Section header
Eyebrow (accent-text) → H2 → optional lead (Body L, ≤56ch). 12px gap, 48px below. One H2 per section; H1 only on page top.
## Dark band / CTA band
`data-band="indigo"`: flips semantic tokens. CTA: one line + max 2 buttons (on-dark + ghost-dark), 48px padding, 14px radius. Do: one CTA band per page end.
## Service card
Title H3, 2–3 line body, tags at bottom. 32px padding, hairline, 14px radius. Whole card is a link only if it has a destination.
## Case-study card
Eyebrow industry, title (anonymized client), metric (Plus Jakarta Sans 40–56) + label, owner role under a hairline. Link card: hover border indigo; `<a>` wraps card, accessible name = title. Don't: more than one metric.
## Engagement card
Name, summary, "Starting from" price, 2–4 bullets, button pinned to bottom. Featured = indigo border + "Most chosen" text label (not color alone).
## Problem/insight item
Numeral (accent, 24px) + H4 + one sentence, hairline top.
## Metric tile / proof strip
Value + ≤2-line label; 3 per strip, hairline top/bottom, stack on mobile. Use real numbers only; `−` U+2212 not hyphen.
## Chips / filter pills
Chip: static, 28px. Pill: 44px, single-select, `aria-pressed`; selected = indigo fill + ✓ (not color only). Group has `role="group"` + label; results update with `aria-live="polite"` count.
## Process step / callout
Step: 2px accent rule, numeral 32px, H4, body. Callout: accent-soft block, diamond mark, text #1a2233 (≥11:1).
## Team card
Portrait 4:5 greyscale (initials fallback, aria-hidden when decorative), name H4, role accent-text, bio clamped to 2 lines (full bio on a profile/case page), LinkedIn link with person's name in aria-label.
## Form fields
Label above (never placeholder-only), 48px control, 1px #8b8678 border, 10px radius. Hint → error order below. Error: red border + icon + text, `aria-invalid`, `aria-describedby`, `role="alert"`; on submit focus first invalid field. Required marked with * and "required". Autocomplete attributes set. Success message `role="status"`.
## Footer
Logo slot + one-line positioning, two nav columns, legal row. Links 36px+ high with spacing; focus visible.
