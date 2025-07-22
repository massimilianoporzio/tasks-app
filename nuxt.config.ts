// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
	modules: ["@nuxt/eslint"],
	devtools: { enabled: true },
	css: ["@picocss/pico"], // global css for all the pages
	compatibilityDate: "2025-07-15",

	eslint: {
		config: {
			stylistic: {
				semi: true,
				quotes: "double",
				commaDangle: "always-multiline",
				indent: "tab",
			},
		},
	},
});
