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
│   ├── img/        Static images (passthrough-copied to dist/)
│   ├── js/         Client-side JS (ES modules, bundled by esbuild)
│   └── styles/     SCSS source (compiled by eleventy-sass + PostCSS)
│       ├── settings/   Design tokens, breakpoints, variables
│       ├── base/       Global resets and element styles
│       ├── objects/    Layout-agnostic patterns (prefixed .o-)
│       ├── components/ Scoped UI components (prefixed .c-)
│       └── helpers/    SCSS placeholder extends
└── blog/           Markdown blog posts with YAML front matter
eleventy.config.js  Main Eleventy configuration (CommonJS)
```

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
/* Colour */
--color-white, --color-grey-10/20/40, --color-eggshell, --color-red, --color-purple
--page-bg-color, --text-color, --link-color-inverse

/* Typography */
--primary-font-family, --secondary-font-family, --mono-font-family
--base-font-size (16px), --font-weight-bold, --base-leading (1.6)

/* Spacing */
--spacing-base (8px), --spacing-x1/x2/x3/x4, --grid-spacing (24px)
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
- Custom helpers available: `ifCond`, `inlineSVG`, `withSort`, `printJson`, `moment`

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
| `eleventy-sass` | SCSS compilation |
| `esbuild` | Client-side JS bundling (ES2020 target, minified) |
| `autoprefixer` | CSS vendor prefixes via PostCSS |
| `postcss-csso` | CSS minification via PostCSS |
| `eleventy-plugin-rev` | Asset fingerprinting/cache-busting |
| `stylelint` | CSS/SCSS linting |
| `prismjs` | Client-side syntax highlighting |
| `include-media` | Sass media query helper |
| `normalize.css` | CSS reset |

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
