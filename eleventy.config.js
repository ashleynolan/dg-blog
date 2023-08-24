const helpers = require('./src/_helpers');
const clean = require("eleventy-plugin-clean");
const eleventyPluginRev = require('eleventy-plugin-rev');
const momentHelper = require('helper-moment');
const fs = require('fs');
var getDirName = require('path').dirname;


const eleventySass = require("eleventy-sass");

const postcss = require('postcss');
// const syntax = require('postcss-scss');
const csso = require('postcss-csso');
// const atImport = require('postcss-import');
// const includeMedia = require('postcss-include-media');
// const postcssNesting = require('postcss-nesting');
// const stripInlineComments = require('postcss-strip-inline-comments');
const autoprefixer = require('autoprefixer');
const stylelint = require('stylelint');


// const lightningCSS = require("@11tyrocks/eleventy-plugin-lightningcss");


module.exports = (eleventyConfig) => {
    // copy this directory to the dist folder
    eleventyConfig.addPassthroughCopy("src/assets/img");

	eleventyConfig.addFilter("ifCond", helpers.ifCond);
	eleventyConfig.addFilter("inlineSVG", helpers.inlineSVG);
    eleventyConfig.addFilter("printJson", helpers.printJson);

    eleventyConfig.addHandlebarsHelper("moment", momentHelper);

    eleventyConfig.addPlugin(clean);
    eleventyConfig.addPlugin(eleventyPluginRev);

    eleventyConfig.addPlugin(eleventySass, {
        // output to /css instead of /scss
        compileOptions: {
            permalink: function (contents, inputPath) {
                return (data) => {
                    return data.page.filePathStem.replace(/^\/scss\//, "/css/") + ".css";
                };
            }
        },
        postcss: postcss([
            // require("stylelint")(),
            autoprefixer,
            csso
        ]),
        // TODO: should enable this and change head <link>
        // rev: true,
        sass: {
            // Probably won't need this - used for loading other SCSS files
            loadPaths: [
                'node_modules/normalize.css',
                'node_modules/include-media/dist',
            ],
            sourceMap: true,
        },
    });

    // CSS Output
    // eleventyConfig.addTemplateFormats("css");
    // eleventyConfig.addExtension('css', {
    //     outputFileExtension: 'min.css',
    //     compile: async (inputContent, inputPath) => {
    //         if (inputPath !== './src/assets/css/styles.css') {
    //             return;
    //         }

    //         return async () => {
    //             let output = await postcss([
    //                 atImport({
    //                     plugins: [
    //                         require("stylelint")()
    //                     ]
	// 				}),
	// 				stripInlineComments,
	// 				autoprefixer,
	// 				includeMedia({
	// 					breakpoints: {
    //                         narrow: '600px',
    //                         narrowMid: '720px',
    //                         mid: '1000px',
	// 						wide: '1200px'
	// 					}
	// 				}),
	// 				postcssNesting,
	// 				csso
    //             ]).process(inputContent, {
    //                 from: inputPath,
	// 				to: './dist/assets/css/styles.min.css',
	// 				parser: syntax,
    //                 map: {
    //                     inline: false
    //                 }
    //             });

    //             if (output.map) {
    //                 fs.mkdir(getDirName(output.opts.to), { recursive: true }, function (err) {
    //                     if (err) return cb(err);

    //                     fs.writeFileSync(output.opts.to + '.map', output.map.toString())
    //                 });
    //             }

    //             return output.css;
    //         }
    //     }
    // });

    return {
        dir: {
            input: "./src",
            output: "./dist",
            layouts: "_layouts"
        }
        // markdownTemplateEngine: "hbs"
    }
};
