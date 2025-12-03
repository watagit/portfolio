import react from "@astrojs/react";
import { vanillaExtractPlugin } from "@vanilla-extract/vite-plugin";
import { defineConfig } from "astro/config";

// https://astro.build/config
export default defineConfig({
  site: "https://onwtr.dev",
  integrations: [react()],
  vite: {
    plugins: [vanillaExtractPlugin()],
    css: {
      postcss: true,
    },
  },
});
