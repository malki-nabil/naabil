# Naabil

Personal website for Naabil, backend developer. Built with [Astro](https://astro.build).

## Commands

| Command          | Action                    |
| ---------------- | ------------------------- |
| `npm install`    | Install dependencies      |
| `npm run dev`    | Start local dev server    |
| `npm run build`  | Build site to `dist/`     |
| `npm run preview`| Preview the built site    |

## Structure

```
public/    Static assets (favicon, og-image, robots.txt, llms.txt)
src/layouts/BaseLayout.astro   Page shell with SEO metadata
src/pages/index.astro          Homepage
```

SEO, sitemap, robots.txt and llms.txt are generated at build. The site is deployed at https://naabil.com.
