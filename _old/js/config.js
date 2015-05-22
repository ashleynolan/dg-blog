"use strict";

require.config({
	baseUrl: "",

	// The main bootstrap js file name.
	name: "script",

	// Module paths, with and without filenames
	paths: {
		jquery: 'libs/jquery.min',
		font: 'components/require-plugins/font',
		propertyParser: 'components/require-plugins/propertyParser',

		mbp: 'helpers/mobile-plugins',
		swiftClick: 'helpers/swiftclick',
		adaptiveImage: 'helpers/adaptiveImage',
		prism: 'helpers/prism',
		moment: 'helpers/moment',
		setExternalLinks: 'helpers/setExternalLinks',

		modernizr: 'components/modernizr/modernizr.min',


		// ---------------------------------------------
		// Modules
		// ---------------------------------------------

		// Global non-module libs
		log : "helpers/log",

		ImagePreloader : "libs/image-preloader",

		App : "app/dg"
	},

	// Add a shim for any non-module libs we want to make global (we have to do this manually once they have been injected), or
	// for any non-module libs that have dependancies.
	shim: {

		"log": {
			exports: "log" // Once loaded, use the global 'log' as the module value.
		},

		"ImagePreloader" : {
			exports: "ImagePreloader"
		},

		"polyfills" : {
			exports: "pollyfills"
		},

		"prism": {
			exports: "Prism"
		}
	}
});
