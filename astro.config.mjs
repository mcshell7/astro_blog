import {defineConfig} from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import markdownConfig from './markdown.config.js';
import vercel from "@astrojs/vercel/serverless";

// https://astro.build/config
export default defineConfig({
    site: 'https://example.com',
    integrations: [
        sitemap(),
        mdx({
            ...markdownConfig,
            extendPlugins: false,
        }),],
    output: "server",
    adapter: vercel(),
    markdown: markdownConfig,
});