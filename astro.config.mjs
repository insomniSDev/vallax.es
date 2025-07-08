// @ts-check
import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";

import tailwindcss from "@tailwindcss/vite";

// https://astro.build/config
export default defineConfig({
  site: 'https://vallax.es',
  integrations: [
    starlight({
      title: "Vallax Docs",
      social: [
        {
          icon: "telegram",
          label: "telegram",
          href: "https://github.com/withastro/starlight",
        },
      ],
      sidebar: [
        {
          label: "Primeros pasos",
          items: [
            "docs/primeros-pasos/activacion",
            "docs/primeros-pasos/primer-filtro",
            "docs/primeros-pasos/siguientes-pasos",
          ],
        },
        {
          label: "Referencia",
          items: [
            "docs/referencia/palabras-clave",
            "docs/referencia/filtros",
            "docs/referencia/creacion-manual-de-filtros",
          ],
        },
        {
          label: "Consejos",
          autogenerate: { directory: "docs/consejos" },
        },
        {
          label: "Preguntas Frecuentes",
          link: "docs/faq",
        },
      ],
      customCss: ["./src/styles/docs.css"],
    }),
  ],

  vite: {
    plugins: [tailwindcss()],
  },
});
