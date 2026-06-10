const fs = require('fs');
const { rm } = require('fs/promises');

const Handlebars = require('handlebars');
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
