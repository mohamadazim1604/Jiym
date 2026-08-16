# azim-portfolio

Personal portfolio built with Astro. Static output, no client-side framework.
The only JavaScript is the two interactive demos plus a small motion fallback
for Firefox.

## Design

Theme is "Instrument": cool silver and graphite, geometric display type (Space
Grotesk), mono for anything numeric (JetBrains Mono), and one electric accent
used only where the interface is live. Flat surfaces, hairline rules, corner
ticks. All fonts are self-hosted, so there are no external requests.

The page is never completely still: a technical grid and a colour mesh drift
behind everything, live panels carry a slow scanline, and both pipeline
diagrams run a pulse along their spine.

## Positioning

Personal brand site, not an employee page. No organisation is named anywhere.
Projects are described by what the software does.

## Before you publish

- [ ] **`src/data/site.ts` → `socials`**: real GitHub and LinkedIn URLs, or
      delete the entries.
- [ ] **`public/portrait.jpg`**: add a 4:5 photo, then set `about.portrait` to
      `'/portrait.jpg'`. Until then a designed placeholder renders.
- [ ] **`astro.config.mjs` → `site`** and **`site.ts` → `url`**: your real
      domain. These two must match; canonical URLs, Open Graph tags and the
      sitemap all read from them.
- [ ] **`repo` in the two case study files**: currently local Windows paths.
      Swap for GitHub URLs if these ever go public, or delete the field.
- [ ] **`src/content/work/*.md`**: both carry a `REVIEW` comment asking for
      adoption or volume numbers. Specifics land far harder than prose.
- [ ] **Check what you may publish about either system** before going live.
- [ ] **`public/og.png`**: regenerate if you change the tagline.

## Structure

```text
src/
├── data/site.ts            all personal content and links
├── content.config.ts       case study schema
├── content/work/*.md       one file per system
├── styles/global.css       tokens, type scale, motion, ambient field
├── layouts/Base.astro      html shell, SEO, structured data
├── components/             page sections and the two demos
└── pages/
    ├── index.astro         single-scroll home page
    ├── work/[slug].astro   case study pages
    └── 404.astro
```

Adding a project is one Markdown file in `src/content/work/`. No code changes.

## The demos

Both are rebuilt from the real codebases, vanilla JavaScript, no dependencies.

**`DemoTrace.astro`** models the three rules that make traceability hard: FIFO
consumption within a bin, compliance status propagating from inputs to output,
and the consumption record doubling as the lineage.

**`BookingDemo.astro`** keeps the real entity split (Room, Booking,
BookingParticipant, Attendance), issues a QR token per booking, and records
check-in timestamps against it.

State lives in memory and resets on refresh.

## Motion

Scroll animations use CSS scroll-driven animations (`animation-timeline`), which
run on the compositor. Chrome, Edge and Safari get them with zero JavaScript;
Firefox falls back to an IntersectionObserver in `Base.astro` that replays the
same keyframes. Everything is disabled under `prefers-reduced-motion: reduce`.

Utility classes in `src/styles/global.css` section 8: `m-rise`, `m-blur`,
`m-wipe`, `m-zoom`, `m-rule`, `m-drift`, `m-exit`, `m-count`, `m-scale`. Add
`--i` to an element to push its reveal later and produce a stagger.

## House style

No em dashes anywhere, in copy or comments. Use commas, colons or full stops.

## Two Astro gotchas this project hit

Scoped styles are applied by stamping an attribute on elements present in the
template at build time. They therefore do **not** reach:

1. the root element of a child component (`<Badge class="x" />`), and
2. any element created at runtime with `document.createElement`.

Both need `:global()`. Both caused silent, invisible-looking bugs here.

Also: `background-clip: text` on a parent has no text of its own to clip once
every word is wrapped in an inline-block for the reveal animation, so gradient
text must be painted on the word spans (`.accentuate .split__i`).

## Commands

| Command                  | Action                                 |
| :----------------------- | :------------------------------------- |
| `astro dev --background` | Start the dev server in the background |
| `astro dev stop`         | Stop it                                |
| `astro dev logs`         | Tail its output                        |
| `npm run build`          | Build to `./dist/`                     |
| `npm run preview`        | Preview the production build           |
