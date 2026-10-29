import { defineConfig } from 'astro/config';

export default defineConfig({
  // Set to the real domain once it's bought, e.g. 'https://uqlit.com'
  site: 'https://uqlit-website.pages.dev',
  // The dev toolbar sits on top of our dock while previewing (it never ships to the live site).
  devToolbar: { enabled: false },
});
