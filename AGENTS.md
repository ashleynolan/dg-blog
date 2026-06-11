# AGENTS.md — Coding Agent Guidelines for dg-blog

## Project Overview

A personal blog and portfolio built with **Eleventy (11ty) v3.1.2** — a static site
generator. There is no React, Vue, or any JavaScript framework. Output is plain HTML
served from Apache. Package manager is **Yarn v4 Berry** (node-modules linker).

---

## Build / Dev / Lint Commands

```bash
# Install dependencies
yarn install

# Start development server (cleans dist/ first, then serves at localhost:8080)
yarn dev

# Production build (outputs to dist/)
yarn build

# Lint all CSS/SCSS files
yarn lint

# Auto-fix lint issues
yarn lint:fix

# Clean built output
yarn clean:dist
```

> **No tests are configured.** `yarn test` exits with error code 1 intentionally.
> There is no testing framework installed. Do not add tests unless explicitly asked.

### Running a Single Lint Check

Stylelint can be scoped to a specific file:

```bash
npx stylelint src/assets/styles/components/_nav.scss
```

---

## Project Structure

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
│       ├── base/       Global resets and element styles
│       ├── objects/    Layout-agnostic patterns (prefixed .o-)
│       ├── components/ Scoped UI components (prefixed .c-)
│       └── helpers/    SCSS placeholder extends
└── blog/           Markdown blog posts with YAML front matter
eleventy.config.js  Main Eleventy configuration (CommonJS)
```

Passthrough-copied root files: `.htaccess`, `src/humans.txt`, `src/robots.txt`.

---

## Post Collection

Posts are sourced from `src/blog/**/*.md`, filtered to those with `published !== false`, and sorted by the `posted` front matter field (not the file date). The collection name is `post`.

---

## RSS Feeds

Two feeds are generated via `@11ty/eleventy-plugin-rss`:

- `/feed.xml` — full site feed
- `/blog/feed.xml` — blog-only feed (uses `eleventy-plugin-feed-blog-rss.njk`)

---

## Work Image Pipeline

The `work-image-srcset` transform in `eleventy.config.js` auto-generates responsive image variants for the work/portfolio page (`work.html` only) using `@11ty/eleventy-img`. It runs as a post-build HTML transform (via `posthtml`) over the rendered page.

**Authoring:** drop a single full-size image into `src/assets/img/work/` and reference it with a plain `<img>` — no `srcset`/`sizes` needed. The transform adds them automatically.

**What the transform does** to any `<img>` whose `src` starts with `/assets/img/work/`:

All images are converted to `<picture>` with a WebP `<source>` and the original format as fallback. Three widths are generated: 320w, 480w, and original.

- **Static images** (jpg/png): WebP source + original format fallback.
- **Animated GIFs**: animated WebP source (`sharpOptions: { animated: true }`, quality 60/effort 6) + resized GIF fallback.

Generated files are hash-named and written to `dist/assets/img/work/`. Source images are still passthrough-copied, so reference them by their original path.

**Scope:** only `work.html`. Homepage carousel and blog-post images are untouched. To extend responsive handling elsewhere, widen the `outputPath` check in the transform.

---

## Markdown

The config uses a custom `markdown-it` instance with the `code` rule disabled and a custom `html_block` renderer. This allows inline backticks, bold, italic, and image syntax to work inside raw HTML blocks (e.g. `<dl>`, `<table>`) in blog posts — by default CommonMark passes these blocks verbatim, so backticks would never be processed.

If you edit the markdown library config in `eleventy.config.js`, test HTML blocks with inline code in a post to confirm they still render correctly.

---

## JavaScript Code Style

### Module Systems

- **Node.js tooling** (eleventy.config.js, src/_helpers/): use **CommonJS** (`require` / `module.exports`)
- **Client-side JS** (src/assets/js/): use **ES modules** (`import` / `export`)

Do not mix these — follow the convention already in place for the file being edited.

### Formatting

- **Indentation:** 4 spaces (no tabs)
- **Line endings:** LF
- **Final newline:** required
- **Trailing whitespace:** not allowed
- All of the above are enforced by `.editorconfig`

### Naming Conventions

- Variables and functions: `camelCase`
- Constants: `camelCase` (no `SCREAMING_SNAKE_CASE`)
- Files: `kebab-case` (e.g., `inlineSVG.js`, `helper-moment`)
- Prefer `const` over `let`; avoid `var` in new code
- Function expressions (arrow or regular) assigned to `const` are preferred over
  `function` declarations for new helpers, but do not refactor existing declarations

### Error Handling

- Wrap filesystem/module operations in `try/catch`
- Re-throw with a descriptive message that includes the helper/function name:
  ```js
  } catch (err) {
      throw new Error(`{{inlineSVG}} helper: ${err}`);
  }
  ```
- Do not silently swallow errors

### Types

- There is **no TypeScript** in this project. Do not add TypeScript or JSDoc `@type`
  annotations unless explicitly requested.

---

## CSS / SCSS Code Style

### Architecture (ITCSS-inspired)

Files must be placed in the correct layer:

| Layer | Prefix | Directory | Purpose |
|-------|--------|-----------|---------|
| Settings | — | `settings/` | Design tokens as CSS custom properties, SCSS variables |
| Base | — | `base/` | Global element resets and default styles |
| Objects | `.o-` | `objects/` | Layout patterns with no cosmetic styling |
| Components | `.c-` | `components/` | Scoped UI components |
| Helpers | — | `helpers/` | SCSS `%placeholder` extends only |

### Naming Convention (BEM + prefixes)

```scss
.c-articles {}                  // Component block
.c-articles-item {}             // Element (single hyphen, not double underscore)
.c-articles-item-title {}       // Nested element
.c-content--wide {}             // Modifier (double dash)
.o-table {}                     // Object block
.o-table--bordered {}           // Object modifier
.u-separator-top {}             // Utility
.l-container {}                 // Layout
.is-trendUp {}                  // State (camelCase after 'is-')
```

### Sass Module System

Always use modern `@use` / `@forward`. Never use the deprecated `@import`.

```scss
@use './settings/mq' as *;
@use './helpers/extensions' as *;
```

### Media Queries

Use the `include-media` mixin with the project's named breakpoints:

```scss
// Breakpoints: narrow (600px), narrowMid (720px), mid (1000px), wide (1200px)
@include media('>=narrow') { ... }
@include media('>narrowMid') { ... }
@include media('<mid') { ... }
@include media('>=wide') { ... }
```

Do not write raw `@media (min-width: ...)` queries — always use the mixin.

### Design Tokens

Always use CSS custom properties for colours, spacing, and typography. Do not
hard-code values. Key tokens defined in `:root` (see `settings/_variables.scss`):

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

### Linting

Stylelint config is in `package.json` under the `"stylelint"` key. It extends
`@justeattakeaway/stylelint-config-pie/base`. The only overridden rule is:
- `no-descending-specificity: null` (disabled)

Always run `yarn lint` after changing SCSS and fix any reported issues before
considering a task complete.

---

## Handlebars Templates

### Partials and Layouts

- Partials live in `src/_includes/` — include with `{{> partial_name }}`
- Layouts live in `src/_layouts/` — referenced in front matter: `layout: post.hbs`
- Custom helpers: `ifCond`, `inlineSVG`, `withSort`, `printJson`, `moment`, `contains`, `eachUpTo`, `cleanUrl`, `typeOfInput`

### Inline SVGs

```hbs
{{inlineSVG "./src/assets/img/icons/filename.svg"}}
```

### Asset Fingerprinting

Reference assets with the `rev` filter for cache-busting:

```hbs
<link rel="stylesheet" href="{{ '/assets/styles/main.css' | rev }}">
<script src="{{ '/assets/js/index.js' | rev }}" async></script>
```

---

## Blog Post Front Matter

YAML front matter for new posts in `src/blog/`:

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
# Optional fields:
ogimage: /assets/img/blog/image.jpg   # Open Graph image
nodate: true                          # Hides the date display
nocomments: true                      # Disables Disqus comments
promo: carbon                         # Shows a Carbon ad promo
updated: 2026-02-01                   # Shows "last updated" date
---
```

File naming convention: `YYYYMMDD-post-slug.md`

---

## Key Dependencies

| Package | Purpose |
|---------|---------|
| `@11ty/eleventy` | Static site generator |
| `@11ty/eleventy-plugin-handlebars` | Handlebars template support |
| `@11ty/eleventy-plugin-rss` | RSS feed generation |
| `@11ty/eleventy-img` | Responsive image generation (work image pipeline) |
| `eleventy-sass` | SCSS compilation |
| `eleventy-plugin-rev` | Asset fingerprinting/cache-busting |
| `esbuild` | Client-side JS bundling (ES2020 target, minified) |
| `autoprefixer` | CSS vendor prefixes via PostCSS |
| `postcss-csso` | CSS minification via PostCSS |
| `stylelint` | CSS/SCSS linting |
| `prismjs` | Client-side syntax highlighting |
| `include-media` | Sass media query helper |
| `normalize.css` | CSS reset |
| `posthtml` | HTML transform used by the work image pipeline |

---

## Common Pitfalls

- **Do not use `@import` in SCSS** — use `@use`/`@forward` only
- **Do not write raw media queries** — use the `include-media` mixin
- **Do not hard-code colour or spacing values** — use CSS custom properties
- **Keep Node.js helpers as CommonJS** — do not convert to ES modules
- **`dist/` is committed to source control** — run `yarn build` and commit the
  `dist/` output when making changes that affect the build
- **No TypeScript** — do not add `.ts` files or install TypeScript tooling
- **No test framework** — do not add Jest, Vitest, etc. unless explicitly instructed
- **Markdown HTML blocks** — the custom `html_block` renderer handles inline code/bold/images inside raw HTML blocks; don't remove it without testing blog posts that use `<dl>` or similar
