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

<p>This is a simple solution to a responsive problem I was having recently - in essence it's similar to a problem&nbsp;<a href="http://adactio.com/journal/5429/" target="_blank">Jeremy Keith</a>&nbsp;wrote about&nbsp;back in April.&nbsp; I needed my JavaScript to recognise which media queries were currently being fired, so that it could in turn execute some related functionality. This also needed to run when the browser was resized, firing when different min-width conditions were met. &nbsp;So in context, this could be binding a click event to open a lightbox at larger breakpoints, and then unbinding this event when we hit lower widths.</p>
<p>This should be pretty simple; surely just compare the media query width to the current window width in JavaScript? &nbsp;Unfortunately, <a href="http://iamkeir.com/post/26647025450/firefox-media-query-breakpoints-wtf" target="_blank">differing ideas</a> of what true window size should be - Firefox includes the vertical scrollbar in the total window size, whereas webkit browsers don't - means checking for a window width of 800px will not always give consistent results across browsers.</p>
<p>For anyone lucky enough to be working on projects that don't suport IE8&lt;, MatchMedia takes care of this problem (with a fix for resize support). &nbsp;Unfortunately, I needed to support down to IE7 and there isn't a polyfill to patch MatchMedia with resizing for IE7/8 as yet.</p>
<p>Having previously read Jeremy's blog post, I knew that a version of what I wanted existed using pseudo elements. &nbsp;It wasn't until speaking to a friend of mine,&nbsp;<a href="https://twitter.com/middric" target="_blank">Rich</a>,&nbsp;about the problem, that he suggested manipulating the z-index of an arbitrary div to perform this role. &nbsp;This is the resulting solution that came out of his suggestion.</p>
<h2>The solution</h2>
<p>First, create the div element. &nbsp;As Jeremy's points out in his blog post, a z-index applied to the body wouldn't work - webkit always returns a value of auto in this case - but doing so on an element&nbsp;<em>within</em>&nbsp;the body allows the JavaScript to retrieve the z-index value as we need to. &nbsp;This is added with JS, to keep the solution out of the markup:</p>
<pre><code>var breakpointTest = document.createElement('div');
breakpointTest.setAttribute('id', 'breakpoint-test');
document.body.appendChild(breakpointTest);</code></pre>
<p>Next, we add a set of media queries that manipulate the z-index of our div element. &nbsp;Rather than using arbitrary numbers to represent the breakpoints, setting the z-index to the min-width of the media query makes our JavaScript checks make more sense when read in isolation.</p>
<p>So as an example here, we'll set checks for 480px and 850px:</p>
<pre><code>#breakpoint-test {
    z-index:1;
&nbsp; &nbsp; position:relative;
}

@media all and (min-width: 480px) {
&nbsp; &nbsp; #breakpoint-test {
&nbsp; &nbsp; &nbsp; &nbsp; z-index:480;
&nbsp; &nbsp; }
}
@media all and (min-width: 850px) {
&nbsp; &nbsp; #breakpoint-test {
&nbsp; &nbsp; &nbsp; &nbsp; z-index:850;
&nbsp; &nbsp; }
}
...</code></pre>
<p>So, we've now got a div that will have a z-index equal to the min-width value of the currently active media query. &nbsp;All that's left is to check for this value back in the JavaScript. &nbsp;I'll do this on resize, but you could just do this on page load if you don't need it to fire on window resize. &nbsp;Note that although I'm not throttling my resize event here to keep the example concise, <a href="http://paulirish.com/2009/throttled-smartresize-jquery-event-handler/" target="_blank">it's a good idea to do this</a>.</p>
<pre><code>var lastminwidth = 0, //keep track of last fired minwidth
&nbsp; &nbsp; minwidth = 1; //the current minwidth

window.onresize = function(event){
&nbsp; &nbsp; minwidth =&nbsp;window.getComputedStyle(document.getElementById('breakpoint-test'), null).getPropertyValue("z-index");

&nbsp; &nbsp; if (lastminwidth !== minwidth) {
        if (minwidth &gt;= 480) {
&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; //fire js bindings for over 480px
&nbsp; &nbsp; &nbsp; &nbsp; } else if ( minwidth &lt; 480 ) {
&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; //fire js bindings for under 480px
&nbsp; &nbsp; &nbsp; &nbsp; }
&nbsp; &nbsp; }
}
window.fireEvent('resize'); //trigger resize on load for first run</code></pre>
<p>We keep a track of our <code>lastminwidth</code> to ensure checks only happen when our media queries actually change, rather than every time the window resizes. &nbsp;One caveat here is that getComputedStyle isn't supported by lower versions of IE. &nbsp;You have two optons to solve this; you can <a href="http://snipplr.com/view/13523/" target="_blank">patch it</a>, or if you're using jQuery, you can return the z-index using $('#breakpoint-test').css('zIndex') instead.</p>
<p>This now lets you fire different functions based on your minwidth checks. &nbsp;I think it's a fairly elegant cross-browser solution, but if you have any ideas as to how it can be improved, let me know in the comments.</p>


{{/markdown}}