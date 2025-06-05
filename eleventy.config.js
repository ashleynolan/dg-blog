// const UpgradeHelper = require("@11ty/eleventy-upgrade-help");

const fs = require('fs');

const eleventyPluginRev = require('eleventy-plugin-rev');
const eleventyPluginClean = require("eleventy-plugin-clean");
const eleventySass = require("eleventy-sass");
const postcss = require('postcss');
const autoprefixer = require('autoprefixer');
const csso = require('postcss-csso');
const esbuild = require('esbuild');

const helpers = require('./src/_helpers');
const momentHelper = require('helper-moment');

var getDirName = require('path').dirname;

module.exports = (eleventyConfig) => {
    // copy this directory to the dist folder
    eleventyConfig.addPassthroughCopy("src/assets/img");

	eleventyConfig.addFilter("ifCond", helpers.ifCond);
    eleventyConfig.addFilter("inlineSVG", helpers.inlineSVG);
    eleventyConfig.addFilter("withSort", helpers.withSort);
    eleventyConfig.addFilter("printJson", helpers.printJson);

    eleventyConfig.addHandlebarsHelper("moment", momentHelper);

    eleventyConfig.addPlugin(eleventyPluginRev);
    eleventyConfig.addPlugin(eleventyPluginClean);

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

    // eleventyConfig.addPlugin(UpgradeHelper);

    eleventyConfig.addTemplateFormats('js');

    eleventyConfig.addExtension('js', {
        outputFileExtension: 'js',
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
