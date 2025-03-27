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

const jobCollection = defineCollection({
    schema: z.object({
        title: z.string(),
        subtitle: z.string(),
        startingDate: z.date(),
        endingDate: z.date(),
        imageSource: z.string(),
        imageAlt: z.string(),
        actualJob: z.boolean(),
    })
});

const projectCollection = defineCollection({
    schema: z.object({
        projectName: z.string(),
        description: z.string(),
        githubLink: z.string(),
        tecnologies: z.array(z.string()),
        frameworkImage: z.string(),
        frameworkLink: z.string(),
        frameworkAlt: z.string(),
    })
});

const awardCollection = defineCollection({
    schema: z.object({
        title: z.string(),
        subtitle: z.string(),
        imageSource: z.string(),
        imageAlt: z.string(),
        date: z.date(),
    })
});


export const collections = {
    "education": itemCollection,
    "experience": jobCollection,
    "projects": projectCollection,
    "awards": awardCollection
};