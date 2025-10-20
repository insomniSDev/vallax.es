// @ts-check
import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";
import netlify from "@astrojs/netlify";
import react from "@astrojs/react";
// https://astro.build/config
export default defineConfig({
  site: "https://vallax.es",
  base: "/",

  vite: {
    plugins: [tailwindcss()],
  },

  prefetch: {
    prefetchAll: true,
  },

  i18n: {
    locales: ["en", "es"],
    defaultLocale: "es",
    routing: {
      prefixDefaultLocale: false,
    },
  },

  adapter: netlify(),
  integrations: [react()],
});
