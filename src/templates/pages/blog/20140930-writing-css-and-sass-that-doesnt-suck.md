---
layout: post.hbs

title: Writing CSS (and Sass) that doesn’t suck
url: writing-css-and-sass-that-doesnt-suck
description: "A list of some of the issues that I’ve come across when inheriting CSS that you should avoid when authoring your own projects. "

posted: 2014-09-30T11:30

post:
- post

published: true

categories:
  - "Web Development"
  - "CSS"
  - "SASS"

---

{{#markdown}}

Working at an agency, I sometimes have the pleasure (misfortune?) of taking over a front–end project started by a freelancer that we’ve brought in. More regularly, I inherit some code written by a developer in our team at TMW, but front–end may not be their main skill.

Taking over these projects can be an interesting experience.

Often when taking over others work, you can learn new techniques from seeing how other developers approach a problem that you may look at completely differently.  The flip side of this is seeing the mistakes in approach that are present in the code you inherit.

We’ve all been there – sometimes they’re the small mistakes that make your eyes narrow slightly.  Occasionally you’ll hit the jackpot and encouter pieces of code that make you want to repeatedly facepalm while screaming “WHAT DID I DO TO MAKE YOU HATE ME?!?!?11!”.

Over time, the thing I’ve realised is that the things that I think of as obvious mistakes, may actually be anything but.  So I’ve decided to write about some of the issues that I’ve seen recently that seem to crop up most often.

All are fairly straightforward points, but ensuring you avoid the issues they can lead to will guarantee that future developers inheriting your code won’t want to push your head into a steaming turd the next time that they see you.


## 1. Specificity and Nesting

I’ll start with the issue that I’ve seen the most often in other developers code, and that’s **overly specific selectors**.

First, let’s take a look at the following selector:

<pre>
<code class="language-scss">.navMain ul li a { … }</code>
</pre>

This is a fairly tame example, but from my experience selectors like this crop up surprisingly often and can be easily remedied.

Listing out all of the elements in this way is needless and means that to override these styles in the future, we would have to write an equally specific selector – not ideal.

Instead, if you want to target all `<a>` elements within a list of classname `navMain`, you could simply write:

<pre>
<code class="language-scss">.navMain a { … }</code>
</pre>

Much less specific and so easier to override in the future.  Even better would be to put a class on the `<a>` elements you want to target, lowering the specificity to it’s most basic level:

<pre>
<code class="language-markup">&lt;nav class="navMain"&gt;
	&lt;ul class="navMain-list"&gt;
		&lt;li class="navMain-list-item"&gt;
			&lt;a href="…" class="navMain-link"&gt;…&lt;/a&gt;
		…
		&lt;/li&gt;
	&lt;/ul&gt;
&lt;/nav&gt;</code>
</pre>
<pre>
<code class="language-scss">.navMain-link {
	…
}</code>
</pre>

Doing this also helps give more structure to our markup, so we can see the implied hierarchy between elements.

Another specificity problem I’ve seen crop up a number of times is needlessly specifying the element for the class they are targetting.  For example:

<pre>
<code class="language-scss">div.main-logo span { … }</code>
</pre>

By writing a selector in this way, not only do you make your styles more specific and harder to override in future, but your selector is less re-usable.  If you ever wanted to use the class `main-logo` when styling an `<a>` tag or a heading such as an `<h1>` you would have to change your markup and your CSS.

### Specificity – some further reading

I’ve written a bit more about specificity in the [Front–end Guidelines](http://tech.tmw.co.uk/code/TMW-frontend-guidelines#section-css-specificity) I help maintain at TMW.

Harry Roberts has written some great pieces on the subject of specificity – if you haven’t read them, [check](http://csswizardry.com/2012/05/keep-your-css-selectors-short/) [them out](http://cssguidelin.es/#specificity).

For a more detailed look into specificity and CSS structure in general, I highly recommend taking a look at Jonathan Snook’s book ‘SMACCS’.  I personally think that it’s essential reading for anyone who authors HTML and CSS on the web.

### Specificity and Preprocessors

Specificity can be a problem when writing native CSS selectors like in the above examples, yet the problem catapults itself to a whole new stratosphere when you throw a preprocessor – such as Sass or LESS – into the mix.

Here is an example of a compiled selector from some code I recently inherited:

<pre>
<code class="language-scss">.availableTimesContainer .tablularDiv .dayOfTheWeekContainer .dayOfTheWeek .cell.cell:hover .modal.modal.top .arrowUp,
.availableTimesContainer .tablularDiv .dayOfTheWeekContainer .dayOfTheWeek .cell.selected .modal.modal.top .arrowUp {
	…
}</code>
</pre>

Which was produced by the following Sass:

<pre>
<code class="language-scss">.availableTimesContainer { …
	.tablularDiv { …
		.dayOfTheWeekContainer { …
			.dayOfTheWeek { …
				.cell { …
					&.cell:hover, &.selected { …
						.modal { …
							&.modal.top { …
								.arrowUp { …
								}
							}
						}
					}
				}
			}
		}
	}
}</code>
</pre>

Pretty huh?!

First of all, don’t ever do this.

This is an extreme example of the most common issue I have come across when inheriting preprocessor code.  Ridiculously specific selectors like this can be attributed to nesting selectors far too deeply in your code.

This isn’t the preprocessors fault – the developer has told it to output this kind of selector by nesting 9 levels deep – but would you ever write a selector like this in native CSS?

If your answer to that is yes, feel free to slap yourself reasonably hard in the face.

Nesting like in the above snippet is lazy – plain and simple.

As a general rule, try to keep the depth of nested selectors to a maximum of 3 levels deep; the majority of your selectors shouldn’t need to be nested at all.  Doing so will mean your selectors are less specific and easier to override in the future if, and when, required.


## 2. !important

Another common thing that seems to keep cropping up is over reliance on, or plain abuse of, the `!important` declaration.

`!important` has a chequered reputation in CSS – used correctly it can be a powerful tool to have at your disposal.  Yet, it is all too often used as a lazy alternative to simply refactoring bad CSS to achieve quick results.

In short, the `!important` rule should only be used when you know you will never want to override the value in the future.  A good example of this is styling for state, such as ensuring error text is always a certain colour wherever it occurs on your site.  Another example could be to ensure that an element with a class of `hidden` is indeed hidden.

Don’t use it reactively simply as a quick fix to an immediate problem.  Usually the real fix will be to step back, look at the structure of your CSS and refactor it to make your selectors less specific.

Using `!important` lazily will create bigger problems down the line as your site grows and you need your CSS to be as flexible and non-specific as possible.

To read more about the `!important` rule, check out [Chris Coyier’s article on the subject over on CSSTricks](http://css-tricks.com/when-using-important-is-the-right-choice/);


## 3. @extends

I could go on all day about using the `@extends` operator in Sass and how harmful it can be when used badly.

As a general rule of thumb, if you don’t understand what CSS will be generated by extending a class, don’t use it.  At the very least, you should be checking to make sure it compiles to something like the CSS you would expect it to.  I’ve seen some pretty mammoth issues caused by liberal use of the extends operator, most of which could be avoided by understanding how to use native CSS selectors properly.

Can you simply define a new class selector and then add that classname to an element in the markup to extend it’s properties?  It may be slightly less succinct, but it is also much more maintainable, flexible and doesn’t run the risk of unexpected CSS generation.

I definitely don’t have a problem with people using the `@extends` operator, but only use it if you’re sure you know what it will generate when compiled back into CSS.


## 4. Variables and colour palettes

When using a preprocessor, variables are a great way to store frequently used values so that they can be re-used and keep your code better organised.

A great example of this is to use variables to store a colour palette for your site.  So instead of having 10 slightly different variants of red scattered throughout your CSS, the aim is to have have one or two `$red` variables defined and then referenced throughout your project.  If you then want to adjust the colour to a slightly darker red, you can simply change the variable’s colour value and it will change everywhere that variable is referenced.

There are 2 problems I’ve come across with how people use variables in their projects; both problems come down to misusing variables in slightly different ways.

The first problem is when people don’t keep enough control over their variables.  Take the colour palette example that I just mentioned.  If the developer keeps a tight rein over these values, this can be very useful.

However too often, I’ll come across something like this:

<pre>
<code class="language-scss">$white  : #ffffff;
$gray   : #95a5a6;
$gray-1 : #969696;
$gray-2 : #dcdcdc;
$gray-3 : #969691;
$gray-4 : #ebebeb;
$gray-5 : #505046;
$gray-6 : #b2b2b2;
$gray-7 : #a3a3a3;
$gray-8 : #d2d2d2;
$black  : #000000;</code>
</pre>

If I see variables being defined in this way, it sets off invisible alarm bells in my head.  I also cry a little bit inside.

Using variables in this way is counter intuitive to what we set out to achieve, which was having a maintainable and consistent base colour palette.  Imagine inheriting this and wanting to use a predefined gray from our colour palette; which one would I pick?!

Ultimately, using variables like the above is harder to maintain and leads to more confusion.


### Using variables only when needed

The other side to variables is when people either use them too readily when they may not be required or name them in a way which makes them inflexible when compared with their purpose.

Take the following example:

<pre>
<code class="language-scss">$hero-padding-top: 60px;
$hero-padding-bottom: 50px;

.hero {
	padding-top: $hero-padding-top;
	padding-bottom: $hero-padding-bottom;
}</code>
</pre>

This example tightly couples two variables to our hero class padding by naming them `hero-padding-`.

The first question I ask when coming across code such as this would be, ‘Is there any need for these variables?’

The nature of the variable names implies that they are likely to only be used once in our code – for defining padding on the hero class.  If this is the case, why not simply use the values?  If there is no obvious reason, and no comments left giving such a reason, the best solution would be to strip out the variables leaving us with the native CSS:

<pre>
<code class="language-scss">.hero {
	padding-top: 60px;
	padding-bottom: 50px;
}</code>
</pre>

Sometimes the code may be trying to do a sensible thing, but going about it in the wrong way.  In these cases, I will try to refactor it so that it is less tightly coupled and more reusable in the future.

For example, if the intention of the code above was to keep our vertical grid consistent across elements on our site, the main barrier to it being reuseable are the variables names. They imply that both variables can only ever be used on elements with the hero class for padding top or bottom.

So let’s refactor it to be a bit more useful to us in the future:

<pre>
<code class="language-scss">$verticalRhythm: 20px;

.hero {
	padding-top: ($verticalRhythm * 3) + px;
	padding-bottom: ($verticalRhythm * 2.5) + px;
}</code>
</pre>

In the refactored code our variable now relates to a more global grid rhythm.

Note that it might not always be useful to refactor code in this way – sometimes it is important to have variable names that are tightly coupled to their use in your code.  Every case is different.

The most important thing to remember about using variables in CSS is that each variable you define potentially adds unneeded complexity to your CSS.  Only create them where the value of using a variable outweighs this complexity.  Don’t overcomplicate things.


## 5. Media Queries

An issue that crops up now and then is bizarre use of media queries.

Used sensibly, media queries should be as easy to understand as any other part of your code.  Defining 15 different breakpoints for one module without commenting why you’ve done so is a sure fire route to confusion.

The acid test is looking back over what you write and thinking if your future self would understand what you have written at a later date.  If the answer is no, or even maybe, then developers inheriting your code will stand no chance.

It’s also very important to structure media queries so that they’re easy to understand.  Using variables to define major breakpoints can help, such as:

<pre>
<code class="language-scss">$bp-narrow            : 480;
$bp-mid               : 768;
$bp-wide              : 1024;
$bp-huge              : 1600;</code>
</pre>

That way, if you need to adjust them in the future, it is easy to do so.

I’ve come across too many media query related issues to go through each of them individually here, but the majority boil down to how they have been structured and written alongside base CSS.  Using a preprocessor to allow you to define your media queries inline helps with structure a lot, so if you aren’t doing so already, [take a look at how to do so](http://www.impressivewebs.com/modular-css-media-queries-sass/).

Whether you choose to write media queries inline or separately, ensure the structure is easily understandable so that updates can be easily added and changes easily made.



## 6. Formatting

The final, very important, issue I want to mention is something that I personally feel very strongly about. It should be such a simple issue to tackle, yet is so often overlooked, and that’s code formatting.

It doesn’t matter to me how your format code, as long as the style is consistent throughout and has clearly had some amount of thought put into it.

Comment anything you think could be ambiguous in the future, to you or other developers.  Don’t be afraid of using whitespace liberally; it will all get minified before it goes live, so make your code as readable as possible.

Whether you prefer indenting with spaces or tabs, or using camelCase or BEM-style selector naming, it really doesn’t matter.  Just be sure to keep the identity of your code consistent across a project.

Bad formatting sticks out as much, if not more so, than any other issue when inheriting CSS.


## Go forth and write good CSS

So that’s all I’ve got for you!

If you’re interested in reading further examples of bad CSS, check out Harry Roberts’ excellent article [‘Code Smells in CSS’](http://csswizardry.com/2012/11/code-smells-in-css/). It is in a very similar vein to this article (and I have crossed over with some of the points made on there).  He mentions a number of other great tips to look out for and avoid when authoring CSS.

If you’ve got any examples of bad CSS you’ve encountered, I’d love to see them – get in touch in the comments or on Twitter.  If nothing else it’ll make me feel better knowing that the pain is shared by others :)


{{/markdown}}
