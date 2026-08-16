import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

/**
 * Case studies. Adding a project is one Markdown file in src/content/work.
 * No code changes, no database, no CMS to keep patched.
 *
 * The schema is deliberately strict: if a field is missing the build fails
 * loudly rather than shipping a half-empty case study.
 */
const work = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/work' }),
  schema: z.object({
    title: z.string(),
    client: z.string(),
    sector: z.string(),
    year: z.number(),
    /** One line on the card. What the project was. */
    summary: z.string(),
    /** The line that sells. What measurably changed for the client. */
    outcome: z.string(),
    services: z.array(z.string()).min(1),
    stack: z.array(z.string()).min(1),
    /** What you personally were on the project. Clients read this first. */
    role: z.string().optional(),
    /** Awards the project itself won. Rendered as a band on the case study. */
    awards: z.array(z.string()).default([]),
    /** Three-letter domain code shown in the plate. */
    code: z.string().default('SYS'),
    /** Source location, rendered in mono. Swap for a GitHub URL when public. */
    repo: z.string().optional(),
    /** Anchor id of the matching live demo, if this project has one. */
    demo: z.string().optional(),
    /** Headline capability chips. */
    domains: z.array(z.string()).default([]),
    /** Lower numbers appear first. */
    order: z.number().default(99),
    /** Set false to keep a study written but off the home page. */
    featured: z.boolean().default(true),
  }),
});

export const collections = { work };
