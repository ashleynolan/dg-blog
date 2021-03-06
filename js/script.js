/*	Author:
		Ashley Watson-Nolan
*/

'use strict';

require([
	//'font!typekit, id:[xip1pkl]]',
	//'font!monotype, projectId:[7f495bc1-d47d-4f68-b796-4c8c60df8cae], version: [12345]',
	'jquery',
	'log',
	'mbp',
	'swiftClick',
	'adaptiveImage',
	'setExternalLinks',
	'modernizr',
	'App',
	'moment',
	'prism',
	'disqus'
],
	function ($, log, MBP, sw, ai, ext, Modernizr, App, moment, prism, disqus) {

		Prism.highlightAll();

		disqusLoader( '.comments', {
			scriptUrl: '//ashleynolan.disqus.com/embed.js',
			disqusConfig: function ()
			{
				this.page.url       = window.disqusConfig.url;
				this.page.identifier  = window.disqusConfig.identifier;
			}
		});

	});
