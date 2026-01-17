import { defineCollection } from 'astro:content';
import { z } from 'astro/zod';

const posts = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    description: z.string().optional(),
    pubDate: z.date(),
    updatedDate: z.date().optional(),
    tags: z.array(z.string()).optional(),
    categories: z.array(z.string()).optional(),
    draft: z.boolean().default(false),
  })
});

export const collections = { posts };
