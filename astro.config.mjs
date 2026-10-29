import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://uqlit.com',
  // The dev toolbar sits on top of our dock while previewing (it never ships to the live site).
  devToolbar: { enabled: false },
});
