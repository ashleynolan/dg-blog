# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Overview

A personal blog and portfolio built with **Eleventy (11ty) v3.1.2**. No JavaScript framework — output is plain HTML served from Apache. Package manager is **Yarn** (node-modules linker).

## Commands

```bash
yarn install          # install dependencies
yarn dev              # clean dist/, then serve at localhost:8080
yarn build            # production build to dist/
yarn lint             # lint all CSS/SCSS
yarn lint:fix         # auto-fix lint issues
yarn clean:dist       # remove built output

# Lint a single file
npx stylelint src/assets/styles/components/_nav.scss
```

> No tests are configured. `yarn test` exits with error 1 intentionally. Do not add a test framework unless explicitly asked.

> `dist/` is committed to source control. Run `yarn build` and commit `dist/` when making changes that affect the build.

## Architecture

```
src/
├── _helpers/       Node.js Handlebars helper functions (CommonJS)
├── _includes/      Handlebars partials (.hbs)
├── _layouts/       Page layouts (default.hbs, post.hbs)
├── assets/
│   ├── fonts/      Web fonts (passthrough-copied to dist/)
│   ├── img/        Static images (passthrough-copied to dist/)
│   │   ├── blog/       Blog post images
│   │   ├── icons/      SVG icons (used by inlineSVG helper)
│   │   ├── logos/      Brand logos
│   │   ├── resources/  Resource/promo images
│   │   └── work/       Portfolio images (processed by work-image-srcset transform)
│   ├── js/         Client-side JS (ES modules, bundled by esbuild, entry: index.js)
│   │   ├── carousel.js
│   │   ├── dateHandler.js
│   │   ├── externalLinks.js
│   │   ├── work.js
│   │   └── libs/       disqus.js, prism.js
│   └── styles/     SCSS source (compiled by eleventy-sass + PostCSS)
│       ├── settings/   Design tokens, breakpoints, variables
│       ├── base/       Global resets
│       ├── objects/    Layout patterns (.o- prefix)
│       ├── components/ UI components (.c- prefix)
│       └── helpers/    SCSS %placeholder extends
└── blog/           Markdown posts with YAML front matter
eleventy.config.js  Main config (CommonJS)
```

Passthrough-copied root files: `.htaccess`, `src/humans.txt`, `src/robots.txt`.

**Build pipeline:** SCSS → eleventy-sass → PostCSS (autoprefixer + csso) → fingerprinted. JS → esbuild (ES2020, minified, bundled from `src/assets/js/index.js`).

## Post Collection

Posts are sourced from `src/blog/**/*.md`, filtered to those with `published !== false`, and sorted by the `posted` front matter field (not the file date). The collection name is `post`.

## RSS Feeds

Two feeds are generated via `@11ty/eleventy-plugin-rss`:

- `/feed.xml` — full site feed
- `/blog/feed.xml` — blog-only feed (uses `eleventy-plugin-feed-blog-rss.njk`)

## Work Image Pipeline

The `work-image-srcset` transform in `eleventy.config.js` auto-generates responsive image variants for the work/portfolio page (`work.html` only) using `@11ty/eleventy-img`. It runs as a post-build HTML transform (via `posthtml`) over the rendered page.

**Authoring:** drop a single full-size image into `src/assets/img/work/` and reference it with a plain `<img>` — no `srcset`/`sizes` needed. The transform adds them:

```html
<img src="/assets/img/work/work-example.jpg" alt="..." width="900" height="510" loading="lazy">
```

**What the transform does** to any `<img>` whose `src` starts with `/assets/img/work/`:

All images are converted to `<picture>` with a WebP `<source>` and the original format as fallback. Three widths are generated: 320w, 480w, and original.

- **Static images** (jpg/png): WebP source + original format fallback.
- **Animated GIFs**: animated WebP source (`sharpOptions: { animated: true }`, quality 60/effort 6) + resized GIF fallback. Quality tuned so WebP is always smaller than the GIF.

Generated files are hash-named and written to `dist/assets/img/work/`. Source images are still passthrough-copied, so reference them by their original path.

**Scope:** only `work.html`. Homepage carousel and blog-post images are untouched — they use plain `<img>` tags. To extend responsive handling elsewhere, widen the `outputPath` check in the transform.

## Module System

- **Node.js tooling** (`eleventy.config.js`, `src/_helpers/`): CommonJS (`require` / `module.exports`)
- **Client-side JS** (`src/assets/js/`): ES modules (`import` / `export`)

Do not mix these conventions.

## CSS / SCSS Conventions

**Architecture (ITCSS-inspired):**

| Layer | Prefix | Directory |
|-------|--------|-----------|
| Settings | — | `settings/` |
| Base | — | `base/` |
| Objects | `.o-` | `objects/` |
| Components | `.c-` | `components/` |
| Helpers | — | `helpers/` |

**Naming (BEM + prefixes):**
```scss
.c-articles {}           // Component block
.c-articles-item {}      // Element (single hyphen, not double underscore)
.c-content--wide {}      // Modifier (double dash)
```

**Hard rules:**
- Use `@use` / `@forward` only — never `@import`
- Use `include-media` mixin for all breakpoints — never raw `@media`
- Use CSS custom properties for all colours, spacing, typography — never hard-coded values

**Breakpoints:** `narrow` (600px), `narrowMid` (720px), `mid` (1000px), `wide` (1200px)

```scss
@include media('>=narrow') { ... }
```

**Key design tokens** (defined in `settings/_variables.scss`):
```css
/* Colours */
--color-white, --color-black, --color-black-almost (#333)
--color-grey-10, --color-grey-20, --color-grey-40, --color-grey-dark
--color-eggshell, --color-eggshell-alt
--color-red, --color-purple, --color-yellow-light
--color-black-opaque-65, --color-black-opaque-90, --color-black-opaque-95

/* Semantic aliases */
--page-bg-color, --page-border-color, --logo-bg-color
--text-color, --link-color-inverse
--hr-border, --hr-border-alt

/* Typography */
--primary-font-family, --secondary-font-family, --mono-font-family
--base-font-size (16px), --base-font-size--wide (22px)
--font-weight-bold (700), --base-leading (1.6)

/* Spacing */
--spacing-base (8px), --spacing-x1/x2/x3/x4/x5, --grid-spacing (24px)

/* Misc */
--border-radius (4px)
```

## Handlebars

- Partials in `src/_includes/` — included with `{{> partial_name }}`
- Layouts in `src/_layouts/` — set via `layout: post.hbs` in front matter
- Custom helpers: `ifCond`, `inlineSVG`, `withSort`, `printJson`, `moment`, `contains`, `eachUpTo`, `cleanUrl`, `typeOfInput`
- Inline SVG: `{{inlineSVG "./src/assets/img/icons/filename.svg"}}`
- Asset references use the `rev` filter: `{{ '/assets/styles/main.css' | rev }}` / `{{ '/assets/js/index.js' | rev }}`

## Markdown

The config uses a custom `markdown-it` instance with the `code` rule disabled and a custom `html_block` renderer. This allows inline backticks, bold, italic, and image syntax to work inside raw HTML blocks (e.g. `<dl>`, `<table>`) in blog posts — by default CommonMark passes these blocks verbatim, so backticks would never be processed.

If you edit the markdown library config in `eleventy.config.js`, test HTML blocks with inline code in a post to confirm they still render correctly.

## Blog Post Front Matter

File naming: `YYYYMMDD-post-slug.md`

```yaml
---
layout: post.hbs
title: Post Title
url: post-url-slug
description: "SEO meta description"
posted: 2026-01-15T09:00
post:
  - post
published: true
categories:
  - "Web Development"
# Optional:
ogimage: /assets/img/blog/image.jpg   # Open Graph image
nodate: true                          # Hides the date display
nocomments: true                      # Disables Disqus comments
promo: carbon                         # Shows a Carbon ad promo
updated: 2026-02-01                   # Shows "last updated" date
---
```

## Code Style

- Indentation: 4 spaces (enforced by `.editorconfig`)
- `const` over `let`; avoid `var`
- No TypeScript — do not add `.ts` files or JSDoc `@type` annotations
- Error handling: wrap filesystem ops in `try/catch`, re-throw with context (e.g., `throw new Error(\`{{inlineSVG}} helper: ${err}\`)`)

## Common Pitfalls

- **`@import` in SCSS** — use `@use`/`@forward` only; `@import` is deprecated
- **Raw media queries** — always use the `include-media` mixin
- **Hard-coded colour/spacing** — use CSS custom properties
- **Keep Node.js helpers as CommonJS** — do not convert to ES modules
- **`dist/` is committed** — run `yarn build` and commit `dist/` when changes affect the build output
- **No TypeScript** — do not add `.ts` files
- **No test framework** — do not add Jest, Vitest, etc. unless explicitly asked
- **Markdown HTML blocks** — the custom `html_block` renderer handles inline code/bold/images inside raw HTML; don't remove it without testing
