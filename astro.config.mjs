import { defineConfig } from "astro/config";
import { defineCollection } from "astro:content";

// https://astro.build/config
export default defineConfig({});
const exercises = defineCollection({});
export const collections = { exercises };
