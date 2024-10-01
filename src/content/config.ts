import { defineCollection, z } from 'astro:content';

const itemCollection = defineCollection({
    schema: z.object({
        title: z.string(),
        subtitle: z.string(),
        startingDate: z.date(),
        endingDate: z.date(),
        imageSource: z.string(),
        imageAlt: z.string(),
    })
});

export const collections = {
    'education': itemCollection,
};