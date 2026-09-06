---
version: alpha
name: Void Instrument
description: A dark-void editorial system for a solo full-stack developer's portfolio. Pure black ground, no borders or cards, monolithic weight-400 display type, and one cyan reserved for emphasis in type. Instrument-grade mono for anything a client could verify.
colors:
  primary: "#52eeff"
  secondary: "#6ea6ff"
  tertiary: "#3fdcff"
  neutral: "#000000"
  ink: "#ffffff"
  silver: "#bcc6c9"
  ash: "#9aa4a8"
  hairline: "#ffffff1f"
  scrim: "#6ea6ff7a"
typography:
  display:
    fontFamily: Sora Variable
    fontSize: 112px
    fontWeight: 400
    lineHeight: 1.02
    letterSpacing: -0.04em
  h2:
    fontFamily: Sora Variable
    fontSize: 78px
    fontWeight: 400
    lineHeight: 1.08
    letterSpacing: -0.04em
  h3:
    fontFamily: Sora Variable
    fontSize: 27px
    fontWeight: 400
    lineHeight: 1.16
    letterSpacing: -0.028em
  lede:
    fontFamily: Inter Variable
    fontSize: 20px
    fontWeight: 200
    lineHeight: 1.5
    letterSpacing: 0em
  body:
    fontFamily: Inter Variable
    fontSize: 18px
    fontWeight: 200
    lineHeight: 1.6
    letterSpacing: 0em
  label:
    fontFamily: JetBrains Mono Variable
    fontSize: 12px
    fontWeight: 600
    lineHeight: 1.2
    letterSpacing: 0.16em
  readout:
    fontFamily: JetBrains Mono Variable
    fontSize: 14px
    fontWeight: 500
    lineHeight: 1.4
    letterSpacing: 0.04em
rounded:
  sm: "6px"
  lg: "24px"
  pill: "9999px"
spacing:
  gutter: "24px"
  block: "48px"
  section: "120px"
components:
  button-primary:
    backgroundColor: "{colors.secondary}"
    textColor: "{colors.neutral}"
    typography: "{typography.label}"
    rounded: "{rounded.pill}"
    padding: "14px 22px"
  button-primary-hover:
    backgroundColor: "{colors.tertiary}"
    textColor: "{colors.neutral}"
    rounded: "{rounded.pill}"
  button-ghost:
    backgroundColor: "{colors.neutral}"
    textColor: "{colors.ink}"
    typography: "{typography.label}"
    rounded: "{rounded.pill}"
    padding: "14px 6px"
  button-ghost-hover:
    backgroundColor: "{colors.neutral}"
    textColor: "{colors.primary}"
  section-label:
    backgroundColor: "{colors.neutral}"
    textColor: "{colors.primary}"
    typography: "{typography.label}"
  headline-accent:
    backgroundColor: "{colors.neutral}"
    textColor: "{colors.primary}"
    typography: "{typography.display}"
  readout-key:
    backgroundColor: "{colors.neutral}"
    textColor: "{colors.ash}"
    typography: "{typography.label}"
  readout-value:
    backgroundColor: "{colors.neutral}"
    textColor: "{colors.ink}"
    typography: "{typography.readout}"
  chip:
    backgroundColor: "{colors.neutral}"
    textColor: "{colors.silver}"
    typography: "{typography.readout}"
    rounded: "{rounded.pill}"
    padding: "6px 14px"
  media:
    backgroundColor: "{colors.neutral}"
    textColor: "{colors.ink}"
    rounded: "{rounded.lg}"
  media-overlay:
    backgroundColor: "{colors.neutral}"
    textColor: "{colors.silver}"
    typography: "{typography.label}"
    rounded: "{rounded.sm}"
  cursor-tag:
    backgroundColor: "{colors.neutral}"
    textColor: "{colors.ink}"
    typography: "{typography.label}"
    rounded: "{rounded.sm}"
    padding: "5px 9px"
  divider:
    backgroundColor: "{colors.hairline}"
    height: "1px"
  focus-ring:
    backgroundColor: "{colors.neutral}"
    textColor: "{colors.ink}"
    rounded: "{rounded.sm}"
  cursor-ring:
    backgroundColor: "{colors.neutral}"
    textColor: "{colors.primary}"
    size: "38px"
  button-disabled:
    backgroundColor: "{colors.neutral}"
    textColor: "{colors.ash}"
    typography: "{typography.label}"
    rounded: "{rounded.pill}"
  scrim:
    backgroundColor: "{colors.scrim}"
---

# Void Instrument

## Overview

This is the portfolio of one full-stack developer in Kuala Lumpur who builds
systems businesses depend on daily. It is read once, for maybe ninety seconds,
by someone deciding whether to hand a stranger real money. Everything here is
shaped by that single reading.

The system is a deliberate blend of two directions that usually cancel each
other out. The **structure** is dark-void editorial: pure black, no panels, no
cards, no borders, no shadows, enormous flush-left type carrying the entire
hierarchy through scale alone. The **small type** is instrument: monospace for
every label, key, year, award count and technology name, tracked wide and set
in caps.

That split is the whole argument. The editorial half is what makes a solo
developer's site read as considered rather than as a template with a résumé in
it. The instrument half is what makes the claims read as *checkable* — a
technology stack set in JetBrains Mono at 12px looks like a specification,
while the same list in Inter looks like a boast. The visitor should feel that
the person behind this writes software carefully, and should feel it before
reading a single sentence of prose.

**What this system gives up: density and scannability.** With no cards, no
borders and 120px between sections, there are no boxes to skim and no edges to
navigate by. A visitor cannot triage this page — they read it in sequence or
they leave. That is an acceptable trade for a nine-section portfolio read once
by one person at a time. It would be the wrong system for anything a user
returns to daily, and it must not be extended to a dashboard, an admin surface
or any table-heavy view.

**Motion is a first-class part of this system, not decoration**, and is
specified in Do's and Don'ts rather than left to interpretation.

## Colors

The palette is two colors and a greyscale. Black is not a background here — it
is the material, and every other decision is about what floats on it.

- **Void — `neutral`, #000000:** Every surface on the site. Not near-black, not charcoal,
  not slate-950. Pure. This is the one place this system deliberately breaks
  the usual rule against absolute black, and the reason is structural rather
  than stylistic: because there are no cards or panels anywhere, any lift
  toward #0a0a0a would immediately read as *a panel* floating on a darker
  page. There is nothing for a near-black to be near. One ground, no
  alternation, no tonal sections.

- **Ink — `ink`, #ffffff:** Headlines and primary text, and nothing else. Pure white
  on pure black is the maximum contrast the medium allows, which is exactly
  what an 112px headline at weight 400 needs — the type is carrying hierarchy
  with no weight and no color to help it.

- **Silver — `silver`, #bcc6c9** and **Ash — `ash`, #9aa4a8:** Body copy and labels
  respectively. Both are bent a few points toward the signal cyan rather than
  being true greys. This matters more than it sounds: R=G=B neutrals beside a
  saturated accent read as two unrelated systems sharing a page, and the
  flatness is the single loudest sign that nobody examined the palette. These
  sit in the accent's hue family at very low chroma, so the greyscale and the
  cyan belong to each other.

- **Signal — `primary`, #52eeff:** Reserved for **emphasis inside typography** — the
  second clause of a headline, a section label, an active state. This is the
  brightest thing available on a black page, and at display size it is the
  only element that can hold its own against a 112px white line. It appears on
  well under 5% of the surface and never as a background fill.

- **Action — `secondary`, #6ea6ff** and **Action Press — `tertiary`, #3fdcff:** The filled button, at
  rest and pressed. Deliberately a *different* blue from Signal: emphasis in
  type and a thing you can click are different promises, and using one color
  for both teaches the visitor that colored text is clickable, which on this
  site it is not.

The two blues are the survivors of an older identity built around
`#5b91ff`, brightened when the accent stopped being a gradient and started
carrying whole headlines. They are the one inherited constraint in this system.

## Typography

Three families, three jobs, no overlap.

**Sora Variable** sets every headline at **weight 400** — the same weight as
nothing else on the page, because body copy is lighter and labels are heavier.
This is the load-bearing rule of the entire system. At 112px, added weight
contributes density rather than emphasis; the size is already doing all the
shouting that needs doing. Hierarchy comes from **scale and tracking only**,
and `-0.04em` on everything above 42px is not optional — at display sizes the
default spacing reads as a row of separate letters rather than a word.

Sora over a neutral grotesk is a deliberate and arguable choice. Its geometry
is close to the neutral grotesks this direction usually reaches for, but its
`a` and `g` carry enough character to keep an all-black page from feeling
anonymous. **This is the weakest link in the system and worth revisiting**:
Sora and Inter are both broadly geometric sans, so display and body differ by
weight and scale rather than by classification. The mono is doing most of the
contrast work. If this system is ever extended, the honest fix is a display
face from a different classification, not another weight.

**Inter Variable** sets prose at **weight 200**. Almost every dark developer
site sets body at 400; dropping two full steps is what makes a paragraph read
as unhurried instead of as a wall advancing on the reader. This is a real
variable-font weight, not a synthesized one.

Weight 200 applies **only to prose at 18px and above**. It is scoped by
selector and must never be set on `body`, because there are 57 monospace rules
in this codebase that declare no weight of their own and would inherit it — at
12px, weight 200 stops being airy and becomes unreadable.

**JetBrains Mono Variable** carries every label, key, metric, year and
technology name at weight 500–600 with wide positive tracking, uppercase for
labels. Tracking moves opposite to size throughout: `-0.04em` at 112px,
`+0.16em` at 12px.

Body measure is capped at 66ch and the lede at 48ch.

## Layout

Flush-left, asymmetric, and single-column by default.

Content sits in an 80rem container with a fluid gutter. The hero is the one
two-column composition on the page: headline and actions on the left, a mono
readout panel on the right. Everything below it runs full-measure and
left-aligned. Nothing on this site is centered — centered text on a void
reads as a landing page template, and the flush-left rag is what carries the
editorial register.

**Section rhythm is 120px** and that number is doing structural work. With one
ground and no borders, whitespace is the *only* thing separating one section
from the next. It was roughly half this when the sections had alternating
grounds and hairline edges to divide them; when those went, the spacing had to
absorb the entire job.

Every size in this system is fluid. The tokens above record the **desktop
ceiling** — an 112px headline is a fixed value only at the top of its range,
and clamps down to roughly 46px on a phone. A fixed 112px display line on a
375px screen is four characters wide, and any implementation that ships the
token value as a literal is wrong.

## Elevation & Depth

**There is no elevation.** Nothing on this page sits above anything else, so
nothing casts a shadow. Every `box-shadow` in the codebase resolves through a
transparent token and paints nothing.

Depth is created by three things instead, in order of importance:

1. **Scale.** A 112px headline against 18px prose is a depth cue before it is
   a hierarchy cue.
2. **Parallax.** Section backdrops drift against the scroll at a fraction of
   its speed. That mismatch is the only literal depth signal in the system.
3. **3D tilt.** Media and readout panels rotate toward the pointer on spring
   physics, with their contents drifting *against* the rotation to imply the
   contents sit above the surface.

The single exception is the primary button, which throws a colored halo on
hover. It is the one element asking to be pressed, and the halo is feedback
rather than decoration.

Film grain at 4.5% covers the entire document. On a page this flat it is
functional, not stylistic: it breaks the banding that large soft gradients
produce on an unrelieved black ground.

## Shapes

Radius is **hierarchical**, by job, never one value everywhere:

- **Pill (9999px)** — anything pressable. Buttons and chips. On a page with no
  other filled shapes, a fully rounded fill is unmistakably "press this."
- **Large (24px)** — media and large blocks. Portraits, certificates, images.
- **Small (6px)** — the residual instrument details. The cursor tag, the
  overlay caption on a photograph.

Borders are not part of this system. The three hairline tokens exist and
resolve to transparent; they are retained rather than deleted so the structure
stays legible in the CSS, and because a transparent border still occupies its
1px in the box model, which means turning them off shifted nothing. The one
surviving hairline is the hero rule, which is a drawn gesture rather than an
edge.

## Components

Tokens above are normative. Notes on the ones whose intent is not obvious from
their values:

**button-primary** rests in Action and stays there. An earlier version was
white-on-black and only revealed the accent on hover, which meant the single
element that should read as unmistakably primary was the same color as the
headline above it. It carries a mono label in caps, not sentence case.

**button-ghost** has no background and no border at all — it is a word. The
hierarchy between the two buttons is "one is a filled shape, one is text," not
"one has a heavier border."

**headline-accent** is the second clause of a two-clause headline, set in
Signal. Headlines are written as two clauses, and the accent applies to the
whole of the second one — never to a word inside a sentence.

**divider** is the only element permitted to paint a hairline. It carries no
textColor, and neither does **scrim**: a 1px rule and a hover halo render no
text, so a foreground/background pair on either would be a contrast assertion
about something that does not exist.

**cursor-ring** and **cursor-tag** are the custom pointer. Documented as
components because they are as visible as any button on the site.

**scrim** is the button's hover halo, and the only shadow-like value in the
system.

## Do's and Don'ts

### Do

- Set every headline at weight 400 and get hierarchy from size and tracking.
  `-0.04em` above 42px, always.
- Keep pure `#000000` as every surface. One ground for the whole document.
- Write headlines as **two clauses**, the second one in Signal cyan.
- Use monospace for anything a client could verify — years, counts, award
  names, technologies, locations. Prose in Inter, evidence in JetBrains Mono.
- Reserve Signal cyan for emphasis in type; reserve Action blue for things that
  can be clicked. They are different promises.
- Set prose at weight 200, scoped by selector, at 18px and up only.
- Separate sections with 120px of nothing.
- Ship every size as a `clamp()`. The tokens are desktop ceilings.
- Give the accent under 5% of the surface.

### Don't

- **Don't add a card.** No borders, no filled panels, no tonal surfaces, no
  shadows. If something needs to feel separate, give it space or scale. This is
  the rule most likely to be broken by an agent under time pressure, and
  breaking it once collapses the whole system back into a template.
- **Don't set `font-weight: 200` on `body`.** 57 mono rules declare no weight
  and will inherit it, and at 12px it is illegible.
- Don't introduce a third accent. If something needs emphasis, use scale,
  space, or the mono face — not a new hue.
- Don't use Signal cyan as a background fill or for large areas. It is a text
  color and a 1px ring.
- Don't bold a headline. Ever. Weight 400 is the system.
- Don't use an untinted grey. Every neutral bends toward Signal.
- Don't add gradients to UI. Gradients belong to ambient backdrops only, never
  to text, buttons, borders or icons.
- Don't center anything. Flush left, ragged right.
- Don't animate on scroll by default. Scroll motion is scroll-*linked* through
  view timelines, never a fade-up triggered by an observer. Continuous loops
  run 6s or longer and stay quiet for most of their cycle.
- Don't hide content behind a motion feature. Every reveal is wrapped in
  `@supports (animation-timeline: view())`; a browser without it shows the
  content plainly.
- Don't extend this system to dense UI. It has no table, form or dashboard
  vocabulary, and its whitespace makes it actively bad at those.
