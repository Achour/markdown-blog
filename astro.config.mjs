import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import tailwind from "@astrojs/tailwind";
import vercel from '@astrojs/vercel/serverless';


// https://astro.build/config
export default defineConfig({
  site: 'https://achourdart.vercel.com',
  integrations: [mdx(), sitemap(), tailwind({
    // Example: Disable injecting a basic `base.css` import on every page.
    // Useful if you need to define and/or import your own custom `base.css`.
    applyBaseStyles: false
  })],
  output: "server",
  adapter: vercel({
    webAnalytics: {
      enabled: true,
    },
  })
});