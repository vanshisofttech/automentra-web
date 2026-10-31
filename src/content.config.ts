import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const blog = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/blog' }),
  schema: z.object({
    title: z.string().default('Untitled Post'),
    description: z.string().default(''),
    date: z.coerce.date().default(() => new Date()),
    author: z.string().default('Automentra Team'),
  }),
});

export const collections = { blog };