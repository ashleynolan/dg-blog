const fs = require('fs');
const { rm } = require('fs/promises');
const path = require('path');

const Handlebars = require('handlebars');
const eleventyImage = require('@11ty/eleventy-img');
const markdownIt = require('markdown-it');
const eleventyPluginRev = require('eleventy-plugin-rev');
const eleventyHandlebars = require('@11ty/eleventy-plugin-handlebars');
const eleventySass = require("eleventy-sass");
const postcss = require('postcss');
const autoprefixer = require('autoprefixer');
const csso = require('postcss-csso');
const esbuild = require('esbuild');

const helpers = require('./src/_helpers');
const momentHelper = require('helper-moment');

module.exports = async (eleventyConfig) => {
    const { feedPlugin } = await import('@11ty/eleventy-plugin-rss');

    // Clean fingerprinted asset directories before each build so stale
    // hashed files don't accumulate across watch rebuilds.
    eleventyConfig.on('eleventy.before', async () => {
        await rm('./dist/assets/styles', { recursive: true, force: true });
    });

    // copy this directory to the dist folder
    eleventyConfig.addPassthroughCopy("src/assets/img");
    eleventyConfig.addPassthroughCopy({ ".htaccess": ".htaccess" });
    eleventyConfig.addPassthroughCopy("src/humans.txt");
    eleventyConfig.addPassthroughCopy("src/robots.txt");

    // Generate responsive variants for work images and inject srcset automatically.
    // Scoped to work.html only. All images become <picture> with a WebP source and
    // original format fallback. Animated GIFs use sharp's animated option to preserve
    // animation in both the WebP and GIF outputs.
    const WORK_IMG_SIZES = '(max-width: 480px) 480px, 900px';
    const srcsetFrom = imgs => imgs.map(img => `${img.url} ${img.width}w`).join(', ');

    eleventyConfig.addTransform('work-image-srcset', async function(content) {
        if (!this.page?.outputPath?.endsWith('/work.html')) return content;

        const posthtml = require('posthtml');
        const result = await posthtml([
            async tree => {
                const nodes = [];
                tree.walk(node => {
                    if (node.tag === 'img' && node.attrs?.src?.startsWith('/assets/img/work/')) {
                        nodes.push(node);
                    }
                    return node;
                });

                await Promise.all(nodes.map(async node => {
                    const src = node.attrs.src;
                    const absPath = path.join('./src', src);
                    const isGif = src.endsWith('.gif');
                    try {
                        const metadata = await eleventyImage(absPath, {
                            widths: [320, 480, 'auto'],
                            formats: isGif ? ['webp', 'gif'] : ['webp', 'auto'],
                            outputDir: './dist/assets/img/work/',
                            urlPath: '/assets/img/work/',
                            ...(isGif && {
                                sharpOptions: { animated: true },
                                sharpWebpOptions: { quality: 60, effort: 6 },
                            }),
                        });

                        const fallbackKey = isGif ? 'gif' : Object.keys(metadata).at(-1);
                        const imgAttrs = { ...node.attrs };
                        node.tag = 'picture';
                        node.attrs = {};
                        node.content = [
                            { tag: 'source', attrs: {
                                type: 'image/webp',
                                srcset: srcsetFrom(metadata.webp),
                                sizes: WORK_IMG_SIZES,
                            } },
                            { tag: 'img', attrs: {
                                ...imgAttrs,
                                src: metadata[fallbackKey].at(-1).url,
                                srcset: srcsetFrom(metadata[fallbackKey]),
                                sizes: WORK_IMG_SIZES,
                            } },
                        ];
                    } catch(err) {
                        console.warn(`[work-images] Could not process ${src}: ${err.message}`);
                    }
                }));
            }
        ]).process(content);

        return result.html;
    });

	eleventyConfig.addFilter("cleanUrl", helpers.cleanUrl);
	eleventyConfig.addFilter("ifCond", helpers.ifCond);
    eleventyConfig.addFilter("inlineSVG", helpers.inlineSVG);
    eleventyConfig.addFilter("withSort", helpers.withSort);
    eleventyConfig.addFilter("printJson", helpers.printJson);

    eleventyConfig.addFilter("moment", momentHelper);

    eleventyConfig.addPlugin(eleventyPluginRev);
    eleventyConfig.addPlugin(eleventyHandlebars);
    // eleventy-plugin-rev registers `rev` via addHandlebarsHelper (not as a filter),
    // which the standalone Handlebars plugin does not pick up. Register directly on
    // the shared Handlebars singleton so the helper is available in .hbs templates.
    Handlebars.registerHelper('rev', eleventyPluginRev.revvedFilePathFromOutputPath_JavaScript);

    // https://sass-lang.com/documentation/cli/dart-sass
    eleventyConfig.addPlugin(eleventySass, {
        postcss: postcss([
            autoprefixer,
            csso
        ]),
        compileOptions: {
            cache: false,
        },
        rev: true,
        sass: {
            // Create friendlier imports for node_modules styles
            loadPaths: [
                'node_modules/normalize.css',
                'node_modules/include-media/dist',
            ],
            sourceMap: true,
        },
    });

    eleventyConfig.addTemplateFormats('js');

    eleventyConfig.addExtension('js', {
        outputFileExtension: 'js',
        compileOptions: {
            permalink: "raw",
        },
        compile: async (content, path) => {
            if (path !== './src/assets/js/index.js') {
                return;
            }

            return async () => {
                let output = await esbuild.build({
                    target: 'es2020',
                    entryPoints: [path],
                    minify: true,
                    bundle: true,
                    write: false,
                });

                return output.outputFiles[0].text;
            }
        }
    });

    // Custom markdown-it library: process inline code (backticks) within HTML blocks.
    // By default, CommonMark type-6 HTML blocks (e.g. <dl>) are passed verbatim so
    // backtick spans never reach the inline parser. This renderer fixes that, and
    // mirrors Eleventy's own defaults (html: true, code rule disabled).
    const md = markdownIt({ html: true });
    md.disable('code');
    md.renderer.rules.html_block = (tokens, idx) =>
        tokens[idx].content
            .replace(/!\[([^\]]*)\]\(([^)]+)\)/g, '<img src="$2" alt="$1">')
            .replace(/`([^`\n]+)`/g, '<code>$1</code>')
            .replace(/\*\*([^*\n]+)\*\*/g, '<strong>$1</strong>')
            .replace(/\*([^*\n]+)\*/g, '<em>$1</em>');
    eleventyConfig.setLibrary('md', md);

    const feedConfig = {
        type: "rss",
        collection: {
            name: "post",
            limit: 0,
        },
        metadata: {
            language: "en",
            title: "AshleyNolan.co.uk",
            subtitle: "Front-end development Blog and Portfolio for Ashley Watson-Nolan",
            base: "https://ashleynolan.co.uk/",
            author: { name: "Ashley Watson-Nolan" },
        },
    };

    eleventyConfig.addPlugin(feedPlugin, { ...feedConfig, outputPath: "/feed.xml" });
    eleventyConfig.addPlugin(feedPlugin, { ...feedConfig, outputPath: "/blog/feed.xml", inputPath: "eleventy-plugin-feed-blog-rss.njk" });

    // setup posts collection
    eleventyConfig.addCollection('post', (collectionApi) =>
        collectionApi.getFilteredByGlob('src/blog/**/*.md')
            .filter(item => item.data.published !== false)
            .map(item => {
                if (item.data.posted) {
                    item.date = new Date(item.data.posted);
                }
                return item;
            })
            .sort((a, b) => a.date - b.date)
    );

    return {
        dir: {
            input: "./src",
            output: "./dist",
            layouts: "_layouts"
        },
        markdownTemplateEngine: "hbs"
    }
};
