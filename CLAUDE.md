# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

| Command | Action |
| :--- | :--- |
| `astro dev --background` | Start the dev server detached. Always prefer this over a foreground `npm run dev` |
| `astro dev status` / `astro dev stop` | Check on it, stop it |
| `astro dev logs [--follow]` | Tail its output |
| `npm run build` | Static build to `./dist/` |
| `npm run preview` | Serve the production build |

There is no test suite, no linter and no formatter in this project, and `@astrojs/check` is not installed. `npm run build` is the only gate: the content schema is strict, so a malformed case study fails the build rather than shipping half rendered. Node >= 22.12.0.

## Architecture

Astro 7, static output, zero UI framework. There is no React, Vue or Svelte, and no island hydration anywhere. Adding one should be treated as a significant decision, not a convenience.

### Content lives in two places, and only two

1. **`src/data/site.ts`**: single source of truth for everything personal. Identity, contact, stats, awards, process, about copy, stack lists, plus the `whatsappHref` and `mailtoHref` helpers. Exported `as const`. Components read from it; they do not hardcode copy.
2. **`src/content/work/*.md`**: one Markdown file per case study, validated by the strict Zod schema in [src/content.config.ts](src/content.config.ts). Adding a project is one file, no code changes. `[slug].astro` sorts by `order`, wraps the list for prev/next, and `Systems.astro` renders whatever is `featured`.

`astro.config.mjs` → `site` and `site.ts` → `url` must stay in sync. Canonical URLs, Open Graph tags and the sitemap all read from them, and a mismatch breaks all three silently.

### The runtime JavaScript, all of it

The page ships a deliberately small amount of script, in four places. Know these before adding a fifth.

- **[src/layouts/Base.astro](src/layouts/Base.astro)** inline script: ambient video gating (paused on hidden tab, Data Saver, reduced motion), magnetic pull on `.magnetic`, 3D tilt on `[data-tilt]` with `[data-tilt-lift]` counter parallax, `[data-copy]` clipboard, and the pointer lamp feeding `--mx`/`--my` to `.glow`.
- **[src/components/Cursor.astro](src/components/Cursor.astro)**: the reticle cursor, three parts on three clocks. Reads `data-cursor-label` off hover targets.
- **[src/components/BlockField.astro](src/components/BlockField.astro)**: IntersectionObserver that only plays a section's backdrop clip while it is on screen.
- **[src/components/Header.astro](src/components/Header.astro)**: nav pill tracking and the scroll spy.

`motion` (the framework agnostic Framer Motion build) is a dependency for `motionValue`/`springValue` only. Springs are used over CSS transitions where a target changes continuously, because a transition restarts from wherever it was and never settles under a moving pointer.

Every interaction above is gated on `prefers-reduced-motion` and, where it is pointer specific, on `(hover: hover) and (pointer: fine)`.

### Motion is CSS, not script

Scroll reveals run on **view timelines** (`animation-timeline: view()`), declared once in [src/styles/global.css](src/styles/global.css) section 8. An earlier version of this site did the same effect in JavaScript and it was deleted on purpose. Two rules follow from this:

- Everything is inside `@supports (animation-timeline: view())`. A browser without view timelines must never apply the `both` fill that would hold an element at zero opacity, so it gets the content plainly present and un-animated. **Nothing on this page may be hidden behind a feature the browser might not have.** There is no JavaScript fallback and none should be added.
- A stagger goes in the **range**, not in a delay. A scroll driven animation has no clock to delay against, so "later" can only mean "further up the scrollport". Set `--i` on children and offset `animation-range` by it. Measure against `cover` rather than `entry` for short elements, since the entry range is only as long as the element is tall.

Vocabulary: `.rise` / `.rise-1..5` for on load entrance, `.reveal` for a single scroll reveal, `.reveal-set > *` for a staggered group, `.split--load` / `.split--scroll` from `SplitText`. Note `.m-rise` in [src/pages/work/\[slug\].astro](src/pages/work/%5Bslug%5D.astro) is dead markup with no rule behind it, left from an earlier system.

[src/components/SplitText.astro](src/components/SplitText.astro) splits text into mask boxes **at build time**, so the browser receives finished markup and ships no script to do it. `--i` counts across word boundaries so a line reads as one cascade.

### Styling

One stylesheet, [src/styles/global.css](src/styles/global.css), organised in numbered sections (1 tokens, 2 reset, 3 structure, 4 typography, 5 controls, 6 surface, 7 ambient background, 7b per-block backdrops, 8 motion, 9 prose, 10 utilities). Component `<style>` blocks hold only what is genuinely local.

The theme is **dark by construction**, not a light theme with values flipped. The ramp is authored for emitted light, `--deep` sits below the page ground rather than inverting it, and that is why no component carries a dark mode branch. Do not add one.

Backdrops go through `BlockField` with a `variant` (`beam`, `scan`, `streams`, `mesh`, `aurora`, `video`) and a `tone`. The parent section needs `has-field`. All the drawing and motion lives in section 7b so every backdrop reads as one system rather than a set of one-off decorations.

## Conventions this project enforces

- **No em dashes anywhere**, in copy or in comments. Use commas, colons or full stops.
- Comments here explain *why*, often at length, and frequently record what was tried and rejected. Match that register rather than stripping it.
- `.gitattributes` normalises to LF in the repository. Do not fight the CRLF warnings on Windows checkouts.

## Two Astro gotchas this codebase already hit

Scoped styles are applied by stamping an attribute on elements present in the template at build time. They therefore do **not** reach:

1. the root element of a child component (`<Badge class="x" />`), or
2. any element created at runtime with `document.createElement`.

Both need `:global()`. Both caused silent, invisible-looking bugs here.

Also: `background-clip: text` on a parent has no text of its own to clip once every word is wrapped in an inline-block for the reveal animation, so gradient text must be painted on the word spans (`.accentuate .split__i`).

## Current state

- The demo section is **pulled** from [src/pages/index.astro](src/pages/index.astro) pending replacement imagery. `Demos.astro`, `DemoTrace.astro` and `BookingDemo.astro` are left in place so restoring it is one line.
- `Process.astro` exists but is not mounted on the home page.
- Outstanding placeholders, all marked `REVIEW` or `⚠️` in source: real social URLs in `site.ts`, the production domain in both `astro.config.mjs` and `site.ts`, local Windows paths in the `repo` field of both case studies, and requests for adoption or volume numbers in both Markdown files.
- [README.md](README.md) is stale in three places: there is no longer a Firefox IntersectionObserver fallback in `Base.astro`, the `m-*` utility class list it documents does not exist, and the portrait is imported in `About.astro` from `src/assets/` rather than read from `public/portrait.jpg` via `about.portrait`.
