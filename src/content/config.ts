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

const projectCollection = defineCollection({
    schema: z.object({
        projectName: z.string(),
        githubLink: z.string(),
        tecnologies: z.array(z.string()),
        frameworkImage: z.string(),
        frameworkLink: z.string(),
        frameworkAlt: z.string(),
    })
});

export const collections = {
    "education": itemCollection,
    "experience": itemCollection,
    "projects": projectCollection
};