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
│   ├── img/        Static images (passthrough-copied to dist/)
│   ├── js/         Client-side JS (ES modules, bundled by esbuild, entry: index.js)
│   └── styles/     SCSS source (compiled by eleventy-sass + PostCSS)
│       ├── settings/   Design tokens, breakpoints, variables
│       ├── base/       Global resets
│       ├── objects/    Layout patterns (.o- prefix)
│       ├── components/ UI components (.c- prefix)
│       └── helpers/    SCSS %placeholder extends
└── blog/           Markdown posts with YAML front matter
eleventy.config.js  Main config (CommonJS)
```

**Build pipeline:** SCSS → eleventy-sass → PostCSS (autoprefixer + csso) → fingerprinted. JS → esbuild (ES2020, minified, bundled from `src/assets/js/index.js`).

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
--color-white, --color-grey-10/20/40, --color-eggshell, --color-red, --color-purple
--primary-font-family, --secondary-font-family, --mono-font-family
--spacing-base (8px), --spacing-x1/x2/x3/x4, --grid-spacing (24px)
```

## Handlebars

- Partials in `src/_includes/` — included with `{{> partial_name }}`
- Layouts in `src/_layouts/` — set via `layout: post.hbs` in front matter
- Custom helpers: `ifCond`, `inlineSVG`, `withSort`, `printJson`, `moment`
- Inline SVG: `{{inlineSVG "./src/assets/img/icons/filename.svg"}}`
- Asset references use the `rev` filter: `{{ '/assets/styles/main.css' | rev }}`

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
ogimage: /assets/img/blog/image.jpg
nodate: true
nocomments: true
promo: carbon
updated: 2026-02-01
---
```

## Code Style

- Indentation: 4 spaces (enforced by `.editorconfig`)
- `const` over `let`; avoid `var`
- No TypeScript — do not add `.ts` files or JSDoc `@type` annotations
- Error handling: wrap filesystem ops in `try/catch`, re-throw with context (e.g., `throw new Error(\`{{inlineSVG}} helper: ${err}\`)`)
