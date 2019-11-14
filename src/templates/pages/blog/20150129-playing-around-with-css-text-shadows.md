---
layout: post.hbs

title: Playing around with CSS text-shadow
url: playing-around-with-css-text-shadow
description: "What I learned playing around with CSS text-shadow for a couple of hours."

posted: 2015-01-29T16:00

post:
- post

published: true

categories:
  - "Web Development"
  - "CSS3"

---

{{#markdown}}

Whenever I get some downtime in work, I try to play around with a front-end technology that I may not have used too much in the past and see what potential it might have for creating some cool effects.

Last week, I decided I’d take a look at the humble `text-shadow`.

## Exploring the property

Browser support for CSS `text-shadow` [is excellent](http://caniuse.com/#feat=css-textshadow), but the [way in which it’s defined](http://www.w3.org/TR/2003/CR-css3-text-20030514/#text-shadows) makes it a little bit of a strange property.

When applying text-shadow to your text, you can specify a color for your shadow, a shadow offset (x and y positions) and a blur radius.  Unlike `box-shadow`, you cannot specify the spread of the shadow, making applying just a single text-shadow to a piece of text fairly limited in what you can actually achieve.

<figure>
<p data-height="220" data-theme-id="11725" data-slug-hash="gbRZpo" data-default-tab="result" data-user="ashleynolan" class='codepen'>See the Pen <a href='http://codepen.io/ashleynolan/pen/gbRZpo/'>gbRZpo</a> by Ashley Watson-Nolan (<a href='http://codepen.io/ashleynolan'>@ashleynolan</a>) on <a href='http://codepen.io'>CodePen</a>.</p>
<figcaption>A word with a simple `text-shadow` effect applied.</figcaption>
</figure>


In most circumstances, the only way to create stunning text effects with text-shadow is to apply more than one to the text.  A popular use is to layer text-shadows on top of one another to create an outline – or stroke – around the text.  The following CSS shows how to achieve such an effect:

<pre>
<code class="language-scss">
 text-shadow: 2px 2px 1px #000,
             -2px -2px 1px #000,
             -2px 2px 1px #000,
              2px -2px 1px #000;
</code>
</pre>

You may be thinking, as I did, that CSS `text-stroke` may be better suited for this.  If you haven’t come across it, the CSS text-stroke property isn’t currently part of any W3C spec and so support for it is still [very limited](http://caniuse.com/#feat=text-stroke) – it’s only currently available when prefixed in webkit.

More frustrating than it’s support is the way in which `text-stroke` is implemented;  currently you cannot control where in relation to the edge of the text the stroke is applied.  If you want a stroke that extends from the outer edge of your text, text-stroke leaves you flat out of luck – it will instead always intrude on the inner edge of the font as it is applied as a centered stroke.  Being able to control the positioning of the stroke would make the property much more useful.

Below is an example showing how `text-shadow` and `text-stroke` compare in practice when attempting to create a stroke effect on some text.

<figure>
<p data-height="535" data-theme-id="11725" data-slug-hash="pvwqEm" data-default-tab="result" data-user="ashleynolan" class='codepen'>See the Pen <a href='http://codepen.io/ashleynolan/pen/pvwqEm/'>Comparing text-shadow to text-stroke</a> by Ashley Watson-Nolan (<a href='http://codepen.io/ashleynolan'>@ashleynolan</a>) on <a href='http://codepen.io'>CodePen</a>.</p>
<figcaption>Comparing `text-shadow` and `text-stroke` when adding an outline or stroke to some text.</figcaption>
</figure>


## Taking things further

An alternative use of `text-shadow` that I’ve seen a number of times is to give text the illusion of being raised up in 3d or to create an embossed look to the text.  Using it in this way can create some [beautiful effects](http://codepen.io/juanbrujo/pen/yGpAK).

While trawling Dribbble for some design inspiration, I came across [this shot by Kickass Factory](https://dribbble.com/shots/1881907-Love?list=shots&sort=recent&timeframe=now&offset=18).  Seeing a bit of a challenge, I decided to try and recreate a similar looking effect using just CSS, animating it on hover.  I focussed on using `:hover`, but there’s no reason that the CSS couldn’t later be modified slightly to work better on touch devices.

Recreating the outline and shadow effects were relatively simple.  I came across a great [CodePen demo](http://codepen.io/hugo/pen/xzjGB) with a mixin that made my life much easier when producing the raised lettering effect.  A few tweaks to this code gave me the base of the effect, all achieved with just the `text-shadow` property.

The final challenge was to apply a pattern to the text, if it was indeed possible to do so; I tried a couple of approaches.

The first property I tried was CSS `background-clip`; this allows you to specify a background – in this case a linear gradient to create the striped effect – and clip it to an element – in this case to the shape of the text.

<pre>
<code class="language-scss">
.backgroundclip {
	background: linear-gradient(#e62915 50%, #e7e7e7 50%);
	background-size: 4px 4px;
	-webkit-background-clip: text;
	text-fill-color: transparent;
}
</code>
</pre>

While this worked in isolation, I found that as soon as `text-shadow` was applied, the shadow was rendered in front of the background, obscuring the pattern effect on the text.  There are hacks around this, but it requires you to have no background specified on any of the texts parent elements, which although useful to know, isn’t a very robust solution in practice.

Support for `background-clip: text` is currently non-standard and is therefore only available in webkit browsers when prefixed.

<figure>
<p data-height="360" data-theme-id="11725" data-slug-hash="ogevGP" data-default-tab="result" data-user="ashleynolan" class='codepen'>See the Pen <a href='http://codepen.io/ashleynolan/pen/ogevGP/'>ogevGP</a> by Ashley Watson-Nolan (<a href='http://codepen.io/ashleynolan'>@ashleynolan</a>) on <a href='http://codepen.io'>CodePen</a>.</p>
<figcaption>Example of using `background-clip` with `text-shadow`.</figcaption>
</figure>

## SVG to the rescue (sort of)

After my failed first attempt, I took to the interwebs to look for another possible solution.  After a short time searching, I stumbled across [this article on SVG fill](http://lea.verou.me/2012/05/text-masking-the-standards-way/).  SVG fills can also take gradients as an input and so it seemed that this could be the solution I was looking for.

The resulting effect can be seen on this [CodePen demo that I created](http://codepen.io/ashleynolan/pen/QwvKaw?editors=110), along with some simpler effects that just use `text-shadow`.

Unfortunately, the effect only works 100% in Chrome; Firefox and IE lose the `text-shadow` on the SVG text when the fill is specified, while Safari goes completely mental at the thought of animating the SVG and the text-shadow together.


## Conclusions

As ever when playing around with combining CSS properties like this, there can be some unexpected side–effects with rendering.

CSS `text-shadow` used on it’s own, and layering multiple shadows together, can create some beautiful effects.

Unfortunately, it seems combining this with SVG gradient fills causes some strange results across browsers.  It would be great to see this more consistently implemented across the board, as I do think that people could create some awesome text effects as a result.

If anyone has any ideas of other text effects they could create with `text-shadow`, fork the demo and let me know what you come up with – I think that I’ve only really scratched the surface with my efforts.

**[View my text-shadow demo on CodePen](http://codepen.io/ashleynolan/pen/QwvKaw?editors=110)**.

<script async src="//assets.codepen.io/assets/embed/ei.js"></script>

{{/markdown}}
