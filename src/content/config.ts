import {z, defineCollection } from "astro:content";

// https://astro.build/config
const exercises = defineCollection({
  name: z.string(),
  editURL: z.string(),
});
export const collections = { exercises };
