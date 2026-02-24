const fs = require('fs');
const { rm } = require('fs/promises');

const Handlebars = require('handlebars');
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
    // Clean fingerprinted asset directories before each build so stale
    // hashed files don't accumulate across watch rebuilds.
    eleventyConfig.on('eleventy.before', async () => {
        await rm('./dist/assets/styles', { recursive: true, force: true });
    });

    // copy this directory to the dist folder
    eleventyConfig.addPassthroughCopy("src/assets/img");

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

    // setup posts collection
    eleventyConfig.addCollection('post', (collectionApi) => collectionApi.getFilteredByGlob('src/blog/**/*.md'));

    return {
        dir: {
            input: "./src",
            output: "./dist",
            layouts: "_layouts"
        }
        // markdownTemplateEngine: "hbs"
    }
};
