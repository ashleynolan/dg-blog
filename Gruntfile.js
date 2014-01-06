module.exports = function (grunt) {

	'use strict';

	/*
	   Javascript settings - Edit this section
	   ========================================================================== */
	/**
	 * Specify which js files you want to include
	 */
	var jsFileList = [
		'js/helpers/helpers.js',
		'js/helpers/console.js',
		'js/script.js'
	];

	var rewriteRulesSnippet = require('grunt-connect-rewrite/lib/utils').rewriteRequest;

	/**
	 * Specify your output directory
	 */
	var distDir = 'js/dist/';

	/**
	 * Specify the name of your compiled JS file
	 * which will be placed in the directory you define above
	 */
	var jsFile = 'app.min.js';

	/* ==================== */

	/**
	 * Project configuration
	 */
	grunt.initConfig({
		pkg: require('./package'),
		site: grunt.file.readYAML('src/data/site.yml'),


		/**
		 * JSHint
		 * https://github.com/gruntjs/grunt-contrib-jshint
		 * Manage the options inside .jshintrc file
		 */
		jshint: {
			all: jsFileList,
			options: {
				jshintrc: '.jshintrc'
			}
		},


		clean: {
			all: ['dist/**/*.html']
		},


		/**
		 * Sass compilation
		 * https://github.com/gruntjs/grunt-contrib-sass
		 * Separate options for dev and production environments
		 * Includes kickoff.scss and kickoff-old-ie.scss by default
		 * Also creates source maps
		 */
		sass: {
			dev: {
				options: {
					unixNewlines: true,
					style: 'expanded',
					lineNumbers: false,
					debugInfo : false,
					precision : 8,
					sourcemap : true
				},
				files: {
					'css/kickoff.css': 'scss/kickoff.scss',
					'css/kickoff-old-ie.css': 'scss/kickoff-old-ie.scss'
				}
			},
			production: {
				options: {
					style: 'compressed',
					precision : 8
				},
				files: {
					'css/kickoff.css': 'scss/kickoff.scss',
					'css/kickoff-old-ie.css': 'scss/kickoff-old-ie.scss'
				}

			}
		},


		/**
		 * Uglify
		 * https://github.com/gruntjs/grunt-contrib-uglify
		 * Minifies and concatinates your JS
		 * Also creates source maps
		 */
		uglify: {
			options: {
				// mangle: Turn on or off mangling
				mangle: true,

				// beautify: beautify your code for debugging/troubleshooting purposes
				beautify: false,

				// report: Show file size report
				report: 'gzip',

				// sourceMap: @string. The location of the source map, relative to the project
				sourceMap: jsFile + '.map',

				// sourceMappingURL: @string. The string that is printed to the final file
				sourceMappingURL: '../../'+ jsFile +'.map'

				// sourceMapRoot: @string. The location where your source files can be found. This sets the sourceRoot field in the source map.
				// sourceMapRoot: 'js',

				// sourceMapPrefix: @integer. The number of directories to drop from the path prefix when declaring files in the source map.
				// sourceMapPrefix: 1,

			},

			/**
			 * Use the array at the top of this file to specify which js files you include
			 */
			js: {
				src: jsFileList,
				dest: distDir + jsFile
			}
		},


		/**
		 * Watch
		 * https://github.com/gruntjs/grunt-contrib-watch
		 * Watches your scss, js etc for changes and compiles them
		 */
		watch: {
			scss: {
				files: ['scss/**/*.scss'],
				tasks: ['sass:dev', 'copy:css']
				// tasks: ['sass:dev', 'autoprefixer:dist', 'csso']
			},

			img: {
				files: [
					'img/**/*.jpeg',
					'img/**/*.gif',
					'img/**/*.png'
				],
				tasks : 'copy:img'
			},

			js: {
				files: [
					'Gruntfile.js',
					'js/*.js',
					'js/libs/**/*.js'
				],
				tasks: ['uglify', 'copy:js']
			},

			assemble : {
				files: ['src/templates/**/*.hbs', 'src/templates/**/*.md'],
				tasks: ['clean', 'assemble'],
				options: {
					livereload: true
				}
			},

			livereload: {
				options: { livereload: true },
				files: [
					'css/*.css'
				]
			}
		},

		connect: {
			options: {
				port: 9000,
				// change this to '0.0.0.0' to access the server from outside
				hostname: 'localhost'
			},
			server: {
				options: {
					base: 'dist',

					middleware: function(connect, options) {
						return [
							rewriteRulesSnippet,
							// Serve static files
							connect.static(require('path').resolve(options.base))
						];
					}
				}
			},
			rules: [
				// http://testing.com/one -> http://testing.com/one.html
				{ from: '(^((?!css|html|js|img|fonts|\/$).)*$)', to: '$1.html' }
			]
		},

		open: {
			server: {
				path: 'http://localhost:<%= connect.options.port %>'
			}
		},


		/**
		 * Autoprefixer
		 * https://github.com/ai/autoprefixer
		 * Auto prefixes your CSS using caniuse data
		 */
		autoprefixer: {
			dist : {
				options: {
					// Task-specific options go here - we are supporting
					// the last 2 browsers, any browsers with >1% market share,
					// and ensuring we support IE7 + 8 with prefixes
					browsers: ['last 2 versions', '> 1%', 'ie 8', 'ie 7']
				},
				files: {
					'css/kickoff.prefixed.css': 'css/kickoff.css',
					'css/kickoff-old-ie.prefixed.css': 'css/kickoff-old-ie.css'
				}
			}
		},


		/**
		 * CSSO
		 * https://github.com/t32k/grunt-csso
		 * Minify CSS files with CSSO
		 */
		csso: {
			dist: {
				files: {
					'css/kickoff.min.css': ['css/kickoff.prefixed.css'],
					'css/kickoff-old-ie.min.css': ['css/kickoff-old-ie.prefixed.css']
				},

			}
		},

		assemble: {
			options: {
				data: 'src/**/*.{json,yml}',
				assets: '<%= site.destination %>/assets',
				helpers: ['helper-moment', 'handlebars-helper-eachitems', 'handlebars-helper-paginate', 'src/helpers/helper-*.js'],

				partials: ['src/templates/includes/**/*.hbs'],
				flatten: false,

				layout: 'main.hbs',
				layoutdir: 'src/templates/layouts'
			},

			posts: {
				options: {
					collections: [{
						name: 'post',
						sortby: 'posted',
						sortorder: 'descending'
					}]
				},
				files: [{
					cwd: './src/templates/pages/',
					dest: '<%= site.destination %>',
					expand: true,
					src: ['**/*.hbs', '!blog/**/*.hbs']
				}, {
					cwd: './src/templates/pages/' + 'blog/',
					dest: '<%= site.destination %>/blog',
					expand: true,
					src: ['**/*.hbs', '**/*.md']
				}]
			}
		},

		copy: {
			dist: {
				files: [
					{ expand: true, cwd: './css', src: ['./**/*.*'], dest: 'dist/assets/css' },
					{ expand: true, cwd: './js', src: ['./**/*.*'], dest: 'dist/assets/js' },
					{ expand: true, cwd: './img', src: ['./**/*.*'], dest: 'dist/assets/img' }
				]
			},
			css: {
				files: [
					{ expand: true, cwd: './css', src: ['./**/*.*'], dest: 'dist/assets/css' }
				]
			},
			img: {
				files: [
					{ expand: true, cwd: './img', src: ['./**/*.*'], dest: 'dist/assets/img' }
				]
			},
			js: {
				files: [
					{ expand: true, cwd: './js', src: ['./**/*.*'], dest: 'dist/assets/js' }
				]
			}
		},

		readme: {
			options: {
				sep: '',
				docs: ['docs/']
			}
		}
	});

	// Load some stuff
	grunt.loadNpmTasks('grunt-readme');
	grunt.loadNpmTasks('grunt-contrib-connect');
	grunt.loadNpmTasks('grunt-open');
	grunt.loadNpmTasks('grunt-contrib-jshint');
	grunt.loadNpmTasks('grunt-contrib-sass');
	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-autoprefixer');
	grunt.loadNpmTasks('grunt-csso');
	grunt.loadNpmTasks('assemble');
	grunt.loadNpmTasks('grunt-newer');
	grunt.loadNpmTasks('grunt-contrib-copy');
	grunt.loadNpmTasks('grunt-contrib-clean');
	grunt.loadNpmTasks('grunt-connect-rewrite');


	/**
	 * Available tasks:
	   * grunt        : run jshint, uglify and sass:dev
	   * grunt watch  : run sass:dev, uglify and livereload
	   * grunt dev    : run jshint, uglify and sass:dev
	   * grunt deploy : run jshint, uglify and sass:production
	 */

	/**
	 * Default task
	 * run jshint, uglify and sass:dev
	 */
	// Default task
	grunt.registerTask('default', [/**'readme', 'jshint',**/'clean', 'uglify', 'sass:dev', 'newer:assemble', 'copy:dist']);


	grunt.registerTask('serve', function (target) {
		grunt.task.run([
			'configureRewriteRules',
			'connect:server',
			'open',
			'watch'
		]);
	});

	/*
		NEED TO UPDATE DEV AND PROD GRUNT BUILDS AS THESE ARE JUST PLACEHOLDERS

	 */

	/**
	 * A task for development
	 * run jshint, uglify and sass:dev
	 */
	grunt.registerTask('dev', ['jshint', 'uglify', 'sass:dev']);

	/**
	 * A task for your production environment
	 * run jshint, uglify and sass:production
	 */
	grunt.registerTask('deploy', ['jshint', 'uglify', 'sass:production']);
	// grunt.registerTask('production', ['jshint', 'uglify', 'sass:production', 'autoprefixer', 'csso']);

};
