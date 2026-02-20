import { defineConfig } from "astro/config";

// https://astro.build/config
export default defineConfig({
  site: "https://onwtr.dev",
  integrations: [],
  vite: {
    css: {
      postcss: true,
    },
  },
});
