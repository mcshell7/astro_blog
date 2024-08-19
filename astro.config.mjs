import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import markdownConfig from './markdown.config.js';
import vercel from "@astrojs/vercel/serverless";

import react from "@astrojs/react";

// https://astro.build/config
export default defineConfig({
  site: 'https://example.com',
  integrations: [sitemap(), mdx({
    ...markdownConfig,
    extendPlugins: false
  }), react()],
  output: "server",
  adapter: vercel(),
  markdown: markdownConfig
});