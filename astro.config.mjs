import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
    base: '/boisselle.github.io/',
    cleanUrls: true, // Move cleanUrls here
    // Remove the integrations array if it's empty or add valid integrations
  });
  