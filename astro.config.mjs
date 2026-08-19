// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: 'https://naabil.com',
  integrations: [
    sitemap({
      filter: (page) => page !== 'https://naabil.com/llms.txt',
    }),
  ],
});
