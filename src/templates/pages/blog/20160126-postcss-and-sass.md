---
layout: post.hbs

title: Extending Sass with PostCSS
url: extend-sass-with-postcss
description: "A brief overview of why I find it useful extending Sass by adding PostCSS into the mix."

posted: 2016-01-26T13:30

post:
- post

published: true

categories:
  - "Web Development"
  - "Preprocessors"

---

{{#markdown}}

This morning, I got asked an interesting question on Twitter while discussing PostCSS:

<blockquote class="twitter-tweet" data-conversation="none" lang="en"><p lang="en" dir="ltr"><a href="https://twitter.com/AshNolan_">@AshNolan_</a> <a href="https://twitter.com/NaveenS16">@NaveenS16</a> Can you tell me exactly why you are using PostCSS with Sass, what does it offer you? Help me understand the need?</p>&mdash; Ahmad Awais (@mrahmadawais) <a href="https://twitter.com/mrahmadawais/status/691893845638930437">January 26, 2016</a></blockquote>
<script async src="//platform.twitter.com/widgets.js" charset="utf-8"></script>

I figured writing a quick post would be easier than trying to fit my answer into 140 characters, so here’s a brief explanation of how I use PostCSS in combination with Sass.


## A quick overview

For those who’ve not heard of PostCSS until now, here’s a very quick analogy.

Think of a preprocessor such as Sass like buying a house that is fully built.  You know its features because it’s already fully formed – its rooms and features are already defined.  However, adding new rooms and features to that house can be difficult.

On the other hand, PostCSS is like you have inherited a plot of land and a load of bricks.  You can essentially create whatever you want, with whatever features you need.

Sass is a fully featured preprocessor with a number of great features already defined.  PostCSS is a tool that lets you add PostCSS plugins that enable you to manipulate your CSS in different ways.

Neither of these is the 'right' tool to use.  A lot depends on your own workflow, situation and preferences.


## Supplementing the Sass featureset

Many posts on PostCSS compare its features to Sass equivalents, but PostCSS doesn’t have to be used as an alternative to Sass.  It can instead be used to add additional features to your workflow that Sass doesn’t provide.  Why not add those extra features to your house using a tool that’s suited to that exact job?!

These extra tasks can run either before or after your Sass compilation, as PostCSS can parse both SCSS and CSS.

As an example, a lot of developers now use [Autoprefixer](https://github.com/postcss/autoprefixer) to add vendor prefixes to their CSS.  Although some use Autoprefixer as a Gulp or Grunt plugin, it is in fact a PostCSS plugin – it’s simply been wrapped up so that it can be used directly by these task-runners.

I’d recommend anyone who uses Autoprefxer to set it up directly through PostCSS – it’s no more difficult than setting up the equivalent Gulp/Grunt plugin.  Once setup you will be able to easily add and experiment with other PostCSS plugins in your workflow.  PostCSS is still a pretty new tool and so having the flexibility to easily try out any new plugins that emerge is a real benefit.

Another handy plugin I use is [postcss-assets](https://github.com/assetsjs/postcss-assets) which inlines image files into my CSS as [data URI’s](https://css-tricks.com/data-uris/).  This let’s me keep a reference to the original image file in my SCSS files, converting it as part of my PostCSS task to provide better page performance.

There are many other useful [PostCSS plugins](http://postcss.parts/), that run tasks such as [CSS minification](https://github.com/ben-eb/cssnano), [SVG optimisation](https://github.com/ben-eb/postcss-svgo), [creating simple styleguides](https://github.com/morishitter/postcss-style-guide), or to ensure [conformance to a set naming scheme](https://github.com/postcss/postcss-bem-linter).

The PostCSS community is an extremely active one, so I expect that in time there will be an even larger selection of plugins that will become useful in our CSS workflows.  Being able to tap into these features to supplement the features that Sass provides can only be a positive thing.


## SCSS Linting

Before using PostCSS, the best linter for Sass that I’d come across was [SCSS-lint](https://github.com/brigade/scss-lint).  My only gripe with this plugin is that it comes with an additional Ruby dependency – I prefer to keep the number of language dependencies that people need to install to get a project up and running to a minimum.

When looking for alternatives, I came across [Stylelint](https://github.com/stylelint/stylelint) – a PostCSS linting plugin.  Because the linter is powered by PostCSS, it has no additional language dependencies (it’s built with JavaScript), which was exactly what I was looking for.

In my projects, I now run PostCSS before and after my Sass compilation.  Beforehand, I run Stylelint to lint my code, and then after Sass has converted my SCSS into CSS files, I run any PostCSS plugins that I have included, such as Autoprefixer, to give me additonal functionality.

In Gulp that would look something like this:

```javascript
return gulp.src( ['/**/*.scss'] )
	// PostCSS Tasks before Sass compilation
	.pipe(
		postcss([
			stylelint(),
			reporter({ clearMessages: true, throwError: true })
		],
		{ syntax: scss })
	)

	// Sass Compilation
	.pipe( sass({
		errLogToConsole: true
	}) )

	// PostCSS tasks after Sass compilation
	.pipe( postcss([
		assets({ loadPaths: [ IMG_SRC_PATH ] }), // Converts any specified assets to data URIs
		autoprefixer({ browsers: ['> 5%', 'last 2 versions', 'ie > 7'] }) // Autoprefixes CSS properties for various browsers
		… // any other PostCSS plugins to be run can be added in here
	]) )
	.pipe( gulp.dest( CSS_DEST_PATH ) );
```


## Summary

I hope that this post has helped to explain how PostCSS can be used to compliment using a preprocessor such as Sass.

If you already use Autoprefixer, I honestly believe that setting up PostCSS in your workflow is a no-brainer, as it will enable you to explore and have easy access to the rest of the PostCSS plugin ecosystem.

If you don’t use Autoprefixer currently, then [take a look at the PostCSS plugins](http://postcss.parts/) that are currently available to see if PostCSS can help to improve your current workflow.

If you want to find out a bit more about PostCSS, then check out [this excellent article](http://julian.io/some-things-you-may-think-about-postcss-and-you-might-be-wrong/) by Julian Ćwirko, or take a look at [my previous post on the subject](http://ashleynolan.co.uk/blog/postcss-a-review).


{{/markdown}}
