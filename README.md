# UQLIT website

The website for UQ Ladies in Technology, built with [Astro](https://astro.build).

## Updating the site

Most changes don't need any code:

| To change | Edit |
|---|---|
| Events | `src/data/events.ts` (copy an event block, change the details) |
| Sponsors | `src/data/sponsors.ts` (logos go in `public/assets/`) |
| Rubric membership link | `src/data/site.ts` |

You can edit these right on GitHub (open the file, click the pencil, commit). The live site rebuilds itself about a minute later.

## Running it locally

```bash
npm install
npm run dev
```

Then open http://localhost:4321.

## Project layout

- `src/layouts/Desktop.astro`: the shared desktop (menu bar, window, dock, footer)
- `src/components/`: dock, menu bar, event card, membership card, join band, sponsors
- `src/pages/`: one file per page
- `src/styles/global.css`: colours, fonts and shared animations

## Hosting

Cloudflare Pages, connected to this repo. Build command `npm run build`, output folder `dist`.
