// @ts-check
import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";

// https://astro.build/config
export default defineConfig({
  site: 'https://vallax.es',
  base: '/',
  vite: {
    plugins: [tailwindcss()],
  },
   prefetch: {
    prefetchAll: true
  }
});
