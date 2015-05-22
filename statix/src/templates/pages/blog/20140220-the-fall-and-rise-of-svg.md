---
layout: post.hbs

title: The fall and rise of SVG – how SVG is more relevant than ever
url: the-fall-and-rise-of-svg
description: "There’s no doubting that SVG is going through a rennaisance right now.  I take a look at at how modern techniques are bringing this old gem back to the forefront of front-end development."

posted: 2014-02-20T09:00

post:
- post

categories:
  - "Web Development"
  - "svg"
  - "rwd"

---

{{#markdown}}


It’s strange to remark that SVG is currently a technology to keep an eye on, simply as it’s been around for so long already.  However, there’s absolutely no doubt that SVG is going through something of a renaissance right now.  As someone who has been using it in some form or another for longer than I can really remember, it’s encouraging to see a technology that has been lurking in the web development shadows for so long now get the limelight it deserves.

So let’s take a look at why it’s become more relevant among today’s web technologies and the techniques that are making SVG easier to include as part of modern web builds.


## Why now?

SVG has benefited in no small part to the rise of Responsive Design as developers look for solutions that scale better across multiple devices.  SVG is lightweight and scale extremely well when resized, making them an extremely attractive alternative to standard images and icons in certain use cases.

For example, you can use SVG for iconography as [explained by Ian Feather from Lonely Planet](http://ianfeather.co.uk/ten-reasons-we-switched-from-an-icon-font-to-svg/).  The [Lonely Planet website](http://www.lonelyplanet.com/) uses SVG for it’s iconography, as well as for smaller images such as their logo.

SVG’s uses aren’t just limited to icons though.  Many sites are using them across a wide variety of use cases due to their flexibility.  They can be used to replace much larger images, such as on the recent [Lynx Mass Debates site](http://www.lynxmassdebates.com/question/happiness) for providing the visual imagery on each question page.


## Implementing SVG as an image replacement technique

SVG can be exported out of Adobe Illustrator, or other tools such as [Sketch](http://www.bohemiancoding.com/sketch/#4), by choosing ‘Save as’ and then selecting SVG from the Save as type extension drop down.  Once you have your SVG, you then have a number of options.

The simplest way to use them is to reference your SVG file as you would a standard image.

<pre>
<code class="language-scss">background-image: url('myNewShinySVG.svg');</code>
</pre>

This comes with the same drawbacks as including images in this way – it costs an extra HTTP request for each file you add. Thankfully, like any other image, you can convert the SVG into a data-uri and save yourself that extra cost.  There are a number of tools for converting images to data-uri’s my personal favourite being http://duri.me/.  Remember, that to support older browsers – mainly IE8 and below – you will also need to include and maintain fallback images.  [Modernizr](http://modernizr.com/) provides a CSS class hook to help you do this:

<pre>
<code class="language-scss">.exampleIcon {
	background-image: url('myNewShinySVG.svg');
}

.no-svg .exampleIcon {
	background-image: url('myNewShinySVG-fallback.png');
}</code>
</pre>

I’ve included these as standard file includes just for this example, but it’s worth converting both to data-uri’s in practice to save on the extra HTTP requests.

If you use SASS, your CSS can be tidied up slightly:

<pre>
<code class="language-scss">.exampleIcon {
	background-image: url('myNewShinySVG.svg');

	.no-svg & {
		background-image: url('myNewShinySVG-fallback.png');
	}
}</code>
</pre>


Including SVG in this way is fine if you are only including a small number of SVG files in your site, but maintaining a larger number in this way can get tedious, especially if the design of the SVG changes slightly and you have to redo your data-uri’s and fallback PNG’s each time. Luckily, there is a better solution.

Using Grunt, you can implement a task called [Grunticon](https://github.com/filamentgroup/grunticon) which was created by the talented guys at [Filament Group](https://github.com/filamentgroup).  Grunticon let’s you specify a folder, or folders, in which you keep you SVG files.  It will go through each of your SVG files and create the CSS needed to include them in your site, as well as generating fallback PNG’s.  It then gives you a tiny piece of JavaScript to add into your site header which detects relevant feature support and serves up the most appropriate CSS file for that browser to load in your SVG or fallback PNG’s.

Grunticon is the best solution I have found for maintaining SVG in a site, and I’d definitely encourage you to check it out if you want to start using SVG more in your development.

It’s also recommended to go one step further and optimise your SVG files before using in production; the SVG that Illustrator gives you can be a bit verbose compared to what you actually need.  There are many ways you can do this. You can integrate it into your grunt workflow using a task like [grunt-svgmin](https://github.com/sindresorhus/grunt-svgmin).  There are a number of other ways to use the SVG Optimiser, [all detailed in it’s documentation](https://github.com/svg/svgo#how-to-use).  If you don’t fancy any of those methods, you can use an online convertor such as [this one by Peter Collingridge](http://petercollingridge.appspot.com/svg_optimiser).

For a more in-depth look at the ways you can implement SVG and their fallbacks, take a look at [this article on CSS Tricks](http://css-tricks.com/using-svg/) or [David Bushell’s excellent post on the subject](http://dbushell.com/2013/02/04/a-primer-to-front-end-svg-hacking/).


## SVG for animation

Another strength of SVG that is being used ever more frequently is for use in web animation.  Individual parts of an SVG can be animated using CSS, while techniques such as this [line drawing effect talked about by Jake Archibald](http://jakearchibald.com/2013/animated-line-drawing-svg/) are now being discovered, opening up ever more possibilities.

SVG also has some very solid libraries available for drawing and animation, such as **Raphael.js**, **Snap.svg** and **D3.js**.

[Raphael.js](http://raphaeljs.com/) is a library that has been around for some time, providing support for SVG right back to older browsers such as IE6; it does this by falling back to render the SVG as VML instead.  It gives access to a lot of simple SVG animation and interaction options, as well as having a more graph focused library based on it called [gRaphael](http://g.raphaeljs.com/). I encourage you to take a look through the demos on both sites to see what it can do.

[Snap.svg](http://snapsvg.io) was also made by the creator of Raphael, [Dmitry Baranovskiy](https://twitter.com/DmitryBaranovsk). It aims to provide access to many of the more advanced features of SVG. It is therefore capable of a lot more than Raphael, but at the expense of some browser support. Snap.svg is supported in all the recent versions of major browsers.

[D3.js](http://d3js.org/) is a library that helps to bring data to life using a combination of HTML, SVG and CSS, created by [Mike Bostock](https://twitter.com/mbostock).  There are a whole range of examples of how D3 can be used in it’s [demo gallery](https://github.com/mbostock/d3/wiki/Gallery).  D3 also supports modern browsers, which generally means everything except IE8 and below.

## SVG Animations in the wild

One of the nicest examples I’ve seen was created by Vox Product, for the [Xbox One](http://www.polygon.com/a/xbox-one-review) and [Playstation 4](http://www.polygon.com/a/ps4-review) reviews on the Polygon website.  I highly recommend you read the [excellent article the develpers wrote](http://product.voxmedia.com/post/68085482982/polygon-feature-design-svg-animations-for-fun-and) describing how and why they chose to use SVG for the animations on their site, but this snippet from the article describes some of the reasons:

> …standard image formats like jpg, gif, or png don’t don’t always perform well when asked to enlarge or shrink dimensions as dictated by the user’s browser size. SVGs, on the other hand, take on responsive properties perfectly: vectors can increase or shrink to arbitrary sizes without any loss of fidelity, and animations and operations done on SVG elements adjust relative to its size without any additional work.

D3.js is also being used widely across the web for data visualisation.  For a full list of links, check out their [examples](https://github.com/mbostock/d3/wiki/Gallery#wiki-examples) and [collections](https://github.com/mbostock/d3/wiki/Gallery#wiki-collections) lists.

There are a number of other SVG animation demos popping up across the web.

Codedrops has some nice examples of [how SVG animations could be used on a site](http://tympanus.net/Development/SVGDrawingAnimation/) as well as how you can animate SVG to [add more flare to your icons](http://tympanus.net/Development/AnimatedSVGIcons/) or [spice up your hover effects](http://tympanus.net/Tutorials/ShapeHoverEffectSVG/index3.html).

Snap.svg also has some [nice demos](http://snapsvg.io/demos/) on their site showing just a small sample of what it’s capable of.

If anyone has seen any examples of SVG animation being used on production websites, please send them over and I’ll add them in to this article.


## Browser Support

SVG is supported by all the major browsers, and back to Internet Explorer 9.  For a full list of SVG support across browsers, see the [CanIUse.com support tables](http://caniuse.com/#cats=SVG).

As mentioned above, there are solutions for providing support to older browsers.  Grunticon helps maintain fallback images to serve to older browsers.  Obviously you can simply manage these fallback images yourself if you wish, but I’d recommend checking out GruntIcon if you plan on using more than just a few SVG files across your site.

Raphael also provides SVG fallbacks for older browsers should you require it.


## Should I be using SVG?

Like any technology, you should know the strengths and weaknesses of SVG and know when it is most appropriate to be using them.

SVG has been ready for widespread use for a good while now, with articles on the subject [dating back at least a couple of years](http://dbushell.com/2012/04/03/svg-use-it-already/).  I think the difference now is that the [tools we have available to us](http://gruntjs.com/) take away some of the more fiddly aspects of maintaining SVG, in turn making it more accessible to developers.

In a lot of my work currently at TMW, I am actively encouraging the use of SVG to our designers, simply because of how flexible, lightweight and scalable it is across devices.  They are by no means suitable for every situation however and should be used in combination with a robust responsive image solution.

So, if you’re not using SVG or have only briefly looked at using them, definitely take some time to take a deeper look into what they can offer you – it’ll be worth the effort spent, both for you and your users.

{{/markdown}}