# Portfolio Redesign Brief

Read this file before any design or UI work in this repo. Where it
conflicts with your defaults, this file wins.

---

## 1. Subject

Personal portfolio for Mohamad Azim, a full-stack developer in Kuala
Lumpur. Core stack: ASP.NET Core Web API, Entity Framework Core, SQL
Server, Angular. Three and a half years building MSNR Trace, the
Malaysian Rubber Board's national rubber supply chain traceability and
compliance platform, as technical lead. Three Malaysia Technology Expo
awards. Also takes freelance work.

**Audience:** hiring managers and prospective freelance clients who can
tell the difference between someone who ships production systems and
someone who builds landing pages.

**Primary job of the site:** make MSNR Trace legible as serious
infrastructure work, fast. Everything else is secondary.

---

## 2. Direction: Material

The visual language comes from the material Azim spent three and a half
years tracking through a supply chain. Not rubber as a cute theme, but
rubber as a set of physical facts: latex is cool and pale and slightly
green. Smoked sheet is translucent amber, graded by eye against a
reference. Cured rubber is dense, matte, near-black, and absorbs light
instead of reflecting it.

That gives a palette nobody else's developer portfolio has, and it is
earned rather than decorative.

**What this direction commits to:** weight, density, matte surfaces, a
sense of something physical being handled and graded.

**What it gives up:** brightness, playfulness, and any suggestion of
speed or startup energy. This site should feel like it was made by
someone who works on things that have to keep running for a decade.

---

## 3. Tokens

### Color

| Name | Hex | Role |
|---|---|---|
| `cured` | `#131110` | Primary dark surface. Warm-dark, never pure black. |
| `latex` | `#E4E5DF` | Primary light surface. Cool, faint green cast. Not cream. |
| `sheet` | `#A8652A` | The only accent. Smoked sheet amber. |
| `graded` | `#6E7168` | Secondary text, rules, muted state. |
| `ink` | `#1C1A18` | Body text on `latex`. |

Rules:
- `sheet` appears on **under 5% of any viewport**. It marks the single
  most important action or the current state. If it shows up on three
  things in one screen, two of them are wrong.
- No gradients anywhere. Not on buttons, not as background washes, not
  on text.
- No pure `#000` and no pure `#FFF`.
- Depth comes from tonal shift and rules, not shadows. If a shadow is
  genuinely needed, it is `sheet`-tinted and has a consistent light
  direction, never neutral black at 10% opacity.

### Type

Two families, both free and self-hosted from Fontshare. Do not load
from Google Fonts, and do not fall back to Inter.

- **Clash Display**, weight 600, for headings. Set large. Tracking
  `-0.03em` at display sizes.
- **Switzer**, weights 400 and 600 only, for body and interface.

Scale ratio 1.25 for interface text, then hand-tuned at the display
end. The largest heading should be genuinely large, not merely bigger.

Body line length under 75 characters. Line height moves inversely to
size.

### Shape and space

- Spacing base: 8px. Stay on it.
- Radius is hierarchical, not uniform. Interactive controls take a
  small radius (4px). Content surfaces take 0. One radius applied to
  everything is a tell.
- Layout is asymmetric and left-anchored. Content does not sit in a
  centred column. Commit to this rather than sprinkling it.

---

## 4. Motion

One orchestrated moment per page, not effects scattered across every
section.

- Smooth scroll via Lenis, global.
- The signature moment is a **grading reveal**: on scroll into view,
  headings resolve from `graded` to `ink` character by character with a
  small stagger, as though being inspected and graded. This appears on
  section headings only, nowhere else.
- Easing is mechanical and decisive: `cubic-bezier(0.16, 1, 0.3, 1)`,
  durations 400 to 700ms. Nothing bouncy, nothing elastic.
- Hover states change tone, never scale or lift.
- No fade-and-slide-up on every section. That is the generic default.
- `prefers-reduced-motion: reduce` disables all of the above and shows
  final states immediately. Non-negotiable.

---

## 5. Content structure

Four routes. No more.

**Home.** Name, what he does, one sentence. Then MSNR Trace directly,
given real space. Not a card in a grid.

**Work.** Three or four projects maximum, each with a real case study
page. MSNR Trace gets the fullest treatment: the compliance problem,
the scale, the architecture, what shipped. Screenshots of actual
interfaces, not mockup frames on gradient backgrounds.

**About.** Plain prose. Where he works, what he has built, the awards
stated flatly without a badge row.

**Contact.** Email and links. Nothing else.

Copy is plain and specific. Name the system, the ministry-adjacent
context, the stack, the constraint. Delete anything that could appear
on a software vendor's homepage. "Fast to ship, built to last" is
exactly the kind of line to cut.

---

## 6. Explicitly banned

The previous version of this site used every one of these. None return.

- Cyan or electric blue on near-black.
- Animated particle or wireframe network backgrounds.
- Gradient pill buttons, and arrows appended to button labels.
- Tracked-out ALL-CAPS eyebrow labels above headings.
- Meta strings joined with middle dots.
- A monospace face used for small data labels.
- Numbered markers (01 / 02 / 03) on content that is not a sequence.
- Content chopped into identical rounded cards with matching shadows.
- Accenting a single word inside a headline with colour.
- Any stock icon set used decoratively next to labels.

---

## 7. Build order

Do not skip ahead. Each stage is a separate prompt.

1. Audit the existing repo. Report the current routes, components, and
   styling approach before changing anything.
2. Set up tokens: CSS custom properties, self-hosted fonts, base
   typography. No components yet.
3. Rebuild the four routes as static pages. Correct type, spacing, and
   colour. Zero animation.
4. Screenshot each page and critique it honestly against this brief
   before adding any motion.
5. Lenis smooth scroll.
6. The grading reveal, on section headings only.
7. Astro View Transitions between routes.
8. The single 3D object, if it still earns its place after stage 4.
9. Quality floor: responsive to 375px, visible keyboard focus, reduced
   motion, contrast at WCAG AA, Lighthouse pass.

---

## 8. Quality floor

Built in, not announced. Responsive down to mobile. Visible keyboard
focus on every interactive element. Reduced motion respected. Text
contrast at AA or better. No layout shift on load.

---

## 9. The test

Before calling any page done: could a specific person have made this,
and would they defend it? Is there something clearly given up in
exchange for something else? If every choice is the safe median, it is
not a direction, it is a default.

Spend the boldness in one place. Let one element be the memorable
thing and keep everything around it quiet.
