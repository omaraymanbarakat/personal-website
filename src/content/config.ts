import { defineCollection, z } from 'astro:content';

const work = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    slug: z.string().optional(),
    dimension: z.enum(['Build', 'Fix', 'Design', 'Transform & Teach']),
    company: z.string(),
    companyContext: z.string(),
    role: z.string(),
    hook: z.string(),
    metric: z.string(),
    demonstrates: z.string(),
    order: z.number(),
    externalUrl: z.string().optional(),
    // Rows from the in-file Summary table — rendered in the sidebar FactsCallout
    summary: z.array(z.object({ label: z.string(), value: z.string() })).optional(),
  }),
});

export const collections = { work };
