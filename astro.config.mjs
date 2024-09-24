import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
    base: '/boisselle.github.io/',
    integrations: [
        // Enable clean URLs for better routing in GitHub Pages
        { cleanUrls: true },
      ],
});