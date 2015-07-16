---
layout: post.hbs

title: Conditional CSS – an alternative
url: conditional-css-an-alternative
description: "After reading several other solutions to the problem of linking up CSS media queries and JavaScript, here's my go at solving it."

posted: 2012-09-24T13:00

post:
- post

categories:
  - "Responsive"
  - "Web Development"

---

{{#markdown}}

This is a simple solution to a responsive problem I was having recently - in essence it's similar to a problem [Jeremy Keith](http://adactio.com/journal/5429/) wrote about back in April.  I needed my JavaScript to recognise which media queries were currently being fired, so that it could in turn execute some related functionality. This also needed to run when the browser was resized, firing when different min-width conditions were met.  So in context, this could be binding a click event to open a lightbox at larger breakpoints, and then unbinding this event when we hit lower widths.

This should be pretty simple; surely just compare the media query width to the current window width in JavaScript?  Unfortunately, [differing ideas](http://iamkeir.com/post/26647025450/firefox-media-query-breakpoints-wtf) of what true window size should be - Firefox includes the vertical scrollbar in the total window size, whereas webkit browsers don't - means checking for a window width of 800px will not always give consistent results across browsers.

For anyone lucky enough to be working on projects that don't suport IE8<, MatchMedia takes care of this problem (with a fix for resize support).  Unfortunately, I needed to support down to IE7 and there isn't a polyfill to patch MatchMedia with resizing for IE7/8 as yet.

Having previously read Jeremy's blog post, I knew that a version of what I wanted existed using pseudo elements.  It wasn't until speaking to a friend of mine, [Rich](https://[twitter.com/middric), about the problem, that he suggested manipulating the z-index of an arbitrary](http://paulirish.com/2009/throttled-smartresize-jquery-event-handler/) div to perform this role.  This is the resulting solution that came out of his suggestion.

## The Solution

First, create the div element.  As Jeremy's points out in his blog post, a z-index applied to the body wouldn't work - webkit always returns a value of auto in this case - but doing so on an element within the body allows the JavaScript to retrieve the z-index value as we need to.  This is added with JS, to keep the solution out of the markup:

<pre>
<code class="language-javascript">var breakpointTest = document.createElement('div');
	breakpointTest.setAttribute('id', 'breakpoint-test');
	document.body.appendChild(breakpointTest);</code>
</pre>

Next, we add a set of media queries that manipulate the z-index of our div element.  Rather than using arbitrary numbers to represent the breakpoints, setting the z-index to the min-width of the media query makes our JavaScript checks make more sense when read in isolation.

So as an example here, we'll set checks for 480px and 850px:

<pre>
<code class="language-css">#breakpoint-test {
	z-index:1;
	position:relative;
}

@media all and (min-width: 480px) {
	#breakpoint-test {
		z-index:480;
	}
}
@media all and (min-width: 850px) {
	#breakpoint-test {
		z-index:850;
	}
}
...</code>
</pre>

So, we've now got a div that will have a z-index equal to the min-width value of the currently active media query.  All that's left is to check for this value back in the JavaScript.  I'll do this on resize, but you could just do this on page load if you don't need it to fire on window resize.  Note that although I'm not throttling my resize event here to keep the example concise, [it's a good idea to do this](http://paulirish.com/2009/throttled-smartresize-jquery-event-handler/).

<pre>
<code class="language-javascript">var lastminwidth = 0, //keep track of last fired minwidth
	minwidth = 1; //the current minwidth

window.onresize = function(event){
	minwidth = window.getComputedStyle(document.getElementById('breakpoint-test'), null).getPropertyValue("z-index");

	if (lastminwidth !== minwidth) {
		if (minwidth >= 480) {
			//fire js bindings for over 480px
		} else if ( minwidth < 480 ) {
			//fire js bindings for under 480px
		}
	}
}

window.fireEvent('resize'); //trigger resize on load for first run</code>
</pre>


We keep a track of our lastminwidth to ensure checks only happen when our media queries actually change, rather than every time the window resizes.  One caveat here is that getComputedStyle isn't supported by lower versions of IE.  You have two optons to solve this; you can [patch it](http://snipplr.com/view/13523/), or if you're using jQuery, you can return the z-index using `$('#breakpoint-test').css('zIndex')` instead.

This now lets you fire different functions based on your minwidth checks.  I think it's a fairly elegant cross-browser solution, but if you have any ideas as to how it can be improved, let me know in the comments.

{{/markdown}}
