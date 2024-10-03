// @ts-check
import { defineConfig } from "astro/config"

import tailwind from "@astrojs/tailwind"

import vercel from "@astrojs/vercel/serverless"

// https://astro.build/config
export default defineConfig({
	integrations: [tailwind()],

	i18n: {
		locales: ["en", "es"],
		defaultLocale: "en",
		routing: {
			prefixDefaultLocale: true,
		},
	},

	output: "server",
	adapter: vercel(),
})
