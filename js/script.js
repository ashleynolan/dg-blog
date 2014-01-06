/*	Author:
		Ashley Nolan
*/

'use strict';

require.config({

	baseUrl: "/assets/js/",

	// make components more sensible
	paths: {
		font: 'components/require-plugins/font',
		propertyParser: 'components/require-plugins/propertyParser'
		//text: 'components/require-plugins/text',
		//fastclick: 'components/fastclick/fastclick',


		// underscore: 'components/underscore/underscore',

		// selectivizr: 'components/selectivizr/selectivizr',
		// modernizr: 'components/modernizr/modernizr.min',
		// transit: 'components/transit/transit-min',
	},

	shim: {
		// 'underscore': {
		// 	exports: '_'
		// },
		// 'modernizr': {
		// 	exports: 'Modernizr'
		// },
		// 'transit': {
		// 	deps: ['jquery']
		// }
	},

	name: 'main'
});

require([
	'font!typekit, id:[xip1pkl]]',
	'font!monotype, projectId:[7f495bc1-d47d-4f68-b796-4c8c60df8cae], version: [12345]'
], function () {

	// Create a closure to maintain scope of TVW
	;(function (TVW) {

		// $(function() {
		// 	// Any globals go here in CAPS (but avoid if possible)

		// 	// follow a singleton pattern
		// 	// (http://addyosmani.com/resources/essentialjsdesignpatterns/book/#singletonpatternjavascript)

		// 	TVW.Config.init();

		// });// END DOC READY



		TVW.Config = {
			variableX : '', // please don't keep me - only for example syntax!

			init : function () {
				console.debug('Kickoff is running');
			}
		};

		// Example module
		/*
		TVW.Ui = {
			init : function() {
				TVW.Ui.modal();
			},

			modal : function() {

			}
		};
		*/

	})(window.TVW = window.TVW || {});

});

