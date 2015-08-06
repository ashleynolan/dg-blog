---
layout: post.hbs

title: Managing Inline Images in CSS
url: managing-inline-images-in-css
description: "A look into the best ways of managing inline images for use in your CSS files."

date: August 06, 2015
posted: 2015-08-06T09:30

post:
- post

published: true

categories:
  - "Web Development"
  - "CSS"

---

{{#markdown}}

It’s fairly old news that it’s a good idea to make as few requests as possible when creating a website of any size.

Latency from HTTP requests can potentially be very expensive, [especially on mobile](https://developers.google.com/speed/docs/insights/mobile?hl=en) where it can take around 200-300 ms roundtrip on a 3G network and around 50-100 ms on 4G.  This can soon start to add up when requesting multiple assets on your website.

[Inlining images](https://css-tricks.com/data-uris/) in your CSS using data URIs is one way to help minify these requests, but this can lead to a couple of issues,  namely:

1. It isn’t always clear where the original image file, from which the data URI was generated, is actually located within a project – or even if it has been saved somewhere in the project at all
2. You have no idea just from looking at a data URI what it actually represents.  Unless you can somehow read base64 encoded strings, It just looks like [gobbledygook](https://en.wikipedia.org/wiki/Gibberish).
3. If you, or someone else, wants to modify the original image in some way and can only find the data URI in your CSS, it makes things way more awkward than they should be to make these modifications.

So what can we do to help combat this?

## Tool me up Scotty

So the best way to manage inline images is to have some sort of reference to the original image in your CSS, which then gets converted into a data URI using some kind of processing tool.

There are a number of tools out there that can help you do this.

If you are using [Compass](http://compass-style.org/) with [Sass](http://sass-lang.com/), you can make use of the [inline-image helper](http://compass-style.org/reference/compass/helpers/inline-data/).  However, not everyone uses Sass – or extends Sass with Compass if they do.

Tools also exist for Gulp and Grunt, such as [gulp-inline-base64](https://www.npmjs.com/package/gulp-inline-base64) or [grunt-image-embed](https://www.npmjs.com/package/grunt-image-embed).  Such tools allow you to skip images that you don’t want to encode and set a maximum file size, which can be handy.

However, my preferred method is to use the PostCSS plugin [postcss-assets](https://github.com/borodean/postcss-assets).  This can be run to supplement a preprocessor such as Sass or Less, or you can just use it to power up your Vanilla CSS – the choice is yours.

Setting up the plugin is easy.  If you haven’t already got a PostCSS task configured in your build tool, check out the steps to do so via their [documentation online](https://github.com/postcss/postcss#usage).

Then, install the [postcss-assets](https://github.com/borodean/postcss-assets) plugin via NPM using `npm install postcss-assets --save-dev`, adding it to your PostCSS task by specifying the base directory in which it can find your projects images:

<pre>
<code class="language-javascript">require('postcss-assets')({
	loadPaths: [ '/basePathToImgs' ]
})</code>
</pre>

Once you have this configured, you can tell the plugin to convert images to data URI’s by writing the following in your CSS (or preprocessor) files:

<pre>
<code class="language-scss">background-image: inline('img/logo.png'); //inline image files
background-image: inline('img/icons/icon-arrow.svg'); // also inlines SVGs unencoded (see https://css-tricks.com/probably-dont-base64-svg/)</code>
</pre>

This will then take the referenced asset and convert it to a data URI when the CSS is compiled, as well as keeping a reference to the original asset in your CSS should it need to be modified in the future – huzzah!

So, the next time you think about putting a data URI straight into your CSS, take a look at [postcss-assets](https://github.com/borodean/postcss-assets) – it really could help you out when it comes to maintaining inline assets on a project.

{{/markdown}}



