import { defineConfig, passthroughImageService } from "astro/config";
import vercel from "@astrojs/vercel";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import solidJs from "@astrojs/solid-js";
import tailwindcss from "@tailwindcss/vite";
import { SITE_METADATA } from "./src/consts.ts";

export default defineConfig({
  prefetch: true,
  site: SITE_METADATA.siteUrl,
  image: { service: passthroughImageService() },
  output: "server",
  adapter: vercel(),
  integrations: [mdx(), sitemap(), solidJs()],
  vite: {
    plugins: [tailwindcss()],
  },
});
