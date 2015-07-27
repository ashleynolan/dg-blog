---
layout: post.hbs

title: PostCSS – Sass Killer or Preprocessing Pretender?
url: postcss-a-review
description: "I take a look at a front-end tool that’s been gathering a fair bit of attention as of late."

date: July 17, 2015
posted: 2015-07-17T09:30

post:
- post

published: true

categories:
  - "Web Development"
  - "CSS"

---

{{#markdown}}

[PostCSS](https://github.com/postcss/postcss) first came onto my radar back in February when I read Ben Frain’s excellent article – [Breaking up with Sass: it’s not you, it’s me](http://benfrain.com/breaking-up-with-sass-postcss/).  I was extremely happy with my workflow at the time – using Sass for all of my preprocessing needs – but it piqued my interest in PostCSS enough to make sure that I filed it away in the 'must investigate later' part of my head (one that seems to be constantly overflowing).

Upon joining [JUST EAT back in May](/blog/a-new-challenge), my first main task has been to review and potentially redefine our front-end processes going forward.  As part of this review, I thought it was high time to take a deeper look into PostCSS and what it has to offer.

So is PostCSS the future of preprocessing?  Here’s my thoughts on the subject.

---

**N.b.** PostCSS has been mooted previously as a postprocessor.  However, like Chris Coyier concluded in [his recent article on the topic](https://css-tricks.com/the-trouble-with-preprocessing-based-on-future-specs/), I will be referring to PostCSS as a **preprocessor** rather than a postprocessor, as it processes custom code into CSS via a build step, which to me is still preprocessing – i.e. processing that happens before it is compiled into the CSS that your browser will then evaluate.

I will also refer to Sass by way of a comparison to PostCSS, as that’s simply what I currently use.  See these references as also being applicable to similar tools such as Less and Stylus.

---

## What is PostCSS

For anyone unfamiliar with [PostCSS](https://github.com/postcss/postcss), it’s a tool that helps to provide feature extensions when writing CSS, not wildly dis-similar to preprocessors such as [Sass](http://sass-lang.com/), [Less](http://lesscss.org/) and [Stylus](https://learnboost.github.io/stylus/).  It does however have some very distinct differences to these other tools.

A traditional preprocessor like Sass gives you a whole bunch of functionality all bundled into one tool, irrespective of whether you need or will use all of those features.

On the flip side, PostCSS is a blank slate; you can add as many or as few features to your process as you require.

These features come in the shape of **PostCSS plugins**; think of these like a bunch of LEGO, where each piece is a different feature that can transform your CSS in some way.  PostCSS lets you stick together these pieces so that you can build up your own feature set, adding and removing plugins as and when you need them.

So for example, if you only want the ability to use CSS Variables and Nesting when writing your CSS, you can add a plugin for each of these features to your PostCSS build to start using them.

Another example is [Autoprefixer](https://github.com/postcss/autoprefixer), the popular prefix-management tool, which is actually a PostCSS plugin that has been made more accessible through the creation of [Grunt](https://github.com/ndmitry/grunt-autoprefixer) and [Gulp](https://github.com/sindresorhus/gulp-autoprefixer) packages.  These packages have now been superseded by [grunt-postcss](https://github.com/nDmitry/grunt-postcss) and [gulp-postcss](https://github.com/postcss/gulp-postcss), through which you can use Autoprefixer directly.


## Why is this useful?

Good question!  So being able to add and remove features in this way is useful for a couple of reasons:

**I. Because developers can do stupid things sometimes**

I love using Sass.  It’s a hugely powerful tool that gives me features that I’d genuinely find it hard to live without.

The problem is, not everyone uses it responsibly.

I’ve [written about this in the past](/blog/writing-css-and-sass-that-doesnt-suck), but I’ve seen developers do some really dumb things when using Sass that they (probably) wouldn’t do when writing vanilla CSS.  The `@extends` feature in particular can cause a whole world of pain when used improperly, but even something as simple as nesting in some peoples hands can reap horrible consequences.

For example, at JUST EAT, anyone across a whole bunch of teams can edit our projects CSS files – front-end devs, .NET devs, anyone.  This is great, but not everyone is at the same level when it comes to CSS best practices and standards.  We have code reviews to help mitigate this, but by throwing Sass into the mix, it opens up a whole bunch of extra functionality that some of our team may not fully understand how to use.  The possibility of a developer writing some Sass that produces a whole bunch of unnecessary CSS when compiled therefore increases.

Being able to limit the features that are available when writing CSS on your project could therefore be incredibly useful.


**II. Extensibility**

If you wanted to extend the functionality of a preprocessor like Sass, it’s not simple.  The codebase for projects like this are quite large and you’d have to understand what’s going on under the hood before trying to contribute to that project.

Even once you’ve written your extension and made a pull request, there’s no guarantee that your feature will be accepted and implemented into the codebase, as the maintainers might not want that functionality as part of the base feature set.

As PostCSS is made up of plugins, extending it is much easier.  You can simply write your own plugin to transform your CSS in the way you require and add it into your PostCSS compilation step.  You can then make that plugin available for others to use on their own projects if you wish.


## What else can it do?

One feature that the PostCSS team has been keen to highlight is that you can start writing CSS with respect to new specifications right now by using plugins like [cssnext](https://github.com/cssnext/cssnext).

However, much like [Ben mentioned in his article](http://benfrain.com/breaking-up-with-sass-postcss/) and [Chris Coyier went into in some depth recently](https://css-tricks.com/the-trouble-with-preprocessing-based-on-future-specs/), I’m not convinced that people should be developing with this in mind.  Specifications can change many times before they become implemented and so there seems little value in learning to write CSS with respect to these until they become more stable.

---

## How fast is it?

If speed of compilation floats your boat, PostCSS is also incredibly fast – [apparently around 3x faster than libsass and 4x faster than Less](https://github.com/postcss/postcss/issues/64).  Whether that speed is noticeable in your build process probably comes down to the amount of CSS you’re working with; I’d imagine for most users the difference in speed would be barely noticeable.

---

## Ease of setup

If you’re used to setting up Grunt or Gulp tasks, getting to grips with PostCSS will be a breeze.

The only trickery can come when specifying the order that your PostCSS plugins run in.  Some are required to run before others to work as intended – such as transforming and applying CSS variables before being able to run conditional plugin transformations that involve variables.  This is an obvious case, but others take a little more thinking about.

On the whole though, setup was a relatively painless experience.

---

## Can I convert my project from Sass/Less/Stylus into PostCSS?

PostCSS isn’t designed to replace your current preprocessor like-for-like; It’s designed so that you can extend the functionality of standard CSS.  Although it has plugins that can replicate other preprocessor features, trying to directly convert can be a painful experience.

Not all features of your current preprocessor will be replicated by PostCSS plugins and so if looking to make the switch, it’s important to research into what functionality you still require.

With the upcoming release of version 4.2 of PostCSS, you will be able to specify custom parsers, such as being able to parse SCSS.  This will likely help when being able to move projects over to PostCSS – as it should open up more possibilities for future plugins – but you will still need to make some adjustments to your projects.

---

## Plugin Support

A tool like PostCSS is only as good as the quality of it’s plugins, so how does it fair in this regard?

Well for a tool that’s still relatively young, it’s pretty good.  A full list of plugins can be found on the [PostCSS Github Repo](https://github.com/postcss/postcss#plugins).

### Sass-type features

As a current user of Sass, I wanted to make sure that there were plugins that could provide the functionality I couldn’t bear to be without.

_Variables_ are one of the pillars of writing maintainable CSS and the [postcss-simple-vars](https://github.com/postcss/postcss-simple-vars) plugin let’s you use them in almost the exact same way as you would do in Sass.

_Nesting_ – via [postcss-nested](https://github.com/postcss/postcss-nested) – is also easy to add, and conditional functionality, like `@if`, can be taken care of using the [postcss-conditionals](https://github.com/andyjansson/postcss-conditionals) plugin.

Importing files using the [postcss-imports](https://github.com/postcss/postcss-import) plugin is also possible, but is slightly less slick, defining partials in full, such as:

<pre>
<code class="language-scss">@imports '_variables.css';</code>
</pre>

Using  _mixins_ is slightly more hit and miss.  Currently, the only plugin available – [postcss-mixins](https://github.com/postcss/postcss-mixins) – gives you a less-than intuitive syntax to work with – to me anyway, you can decide for yourself:

<pre>
<code class="language-scss">@define-mixin icon $name {
    padding-left: 16px;
    &::after {
        content: "";
        background-url: url(/icons/$(name).png);
    }
}

.search {
    @mixin icon search;
}</code>
</pre>

To me, it would have made more sense to have followed a more familiar convention to those used in other preprocessors – using brackets to separate out the arguments of each mixin.  I could author my own plugin to do this I’m sure, but it’s disappointing to have to do this for such a key feature many developers will want to utilise.

Less important to me personally are Sass features like `@each`, `@for` and `@extend`, but plugins for those are all present too via [postcss-each](https://github.com/outpunk/postcss-each), [postcss-for](https://github.com/antyakushev/postcss-for) and [postcss-simple-extend](https://github.com/davidtheclark/postcss-simple-extend).


### Things Sass can’t do

So what PostCSS plugins are currently available that give you features that preprocessors like Sass can’t?

[Autoprefixr](https://github.com/postcss/autoprefixer) is probably the most widely known PostCSS plugin and is a tool that I think every developer should be leveraging.  It let’s you write your CSS unprefixed – such as `transition: 250ms ease-in;` – along with defining the browsers you intend on supporting.  It then adds the necessary prefixes upon compilation.  This helps keep your CSS clean of prefixes and makes fallbacks more maintainable and less susceptible to redundancy.

Another useful plugin is [`css-mqpacker`](https://github.com/hail2u/node-css-mqpacker) which joins together multiple matching media query declarations into a single statement; a massively useful optimisation.


### Is writing your own plugin easy?

Yes, but some edge cases aren’t possible (yet).

There are some excellent docs on [writing your own PostCSS plugin](https://github.com/postcss/postcss#how-to-develop-a-postcss-plugin), along with associated [guidelines](https://github.com/postcss/postcss/blob/master/docs/guidelines/plugin.md) and a [boilerplate](https://github.com/postcss/postcss-plugin-boilerplate).

So I went ahead and tried to write my own.

Single line code commenting is a small but important feature that Sass gives me, letting you comment code that doesn’t get compiled into your CSS, such as:

<pre>
<code class="language-scss">// standard button class
.btn { … }</code>
</pre>

Obviously in plain old CSS, this isn’t possible.  Comments are instead written:

<pre>
<code class="language-scss">/* standard button class */
.btn { … }</code>
</pre>

PostCSS has a plugin that helps give you similar functionality – [postcss-discard-comments](https://github.com/ben-eb/postcss-discard-comments) – but I wanted to replicate the Sass-style syntax, as I find it slightly more flexible.

However, I hit a bit of a roadblock. `// my comment` is invalid CSS code and so when running the PostCSS parser over it, it errors and fails to recognise the `/` characters.  As a result, my plugin never got to transform the code as I wanted, as it never got that far.

This situation will shortly be resolved by being able to specify a [custom parser](https://github.com/postcss/postcss/issues/140) – something that is due with the release of PostCSS v4.2.

---

## Considerations

As much as there is to like about the freedom PostCSS gives you, there are a couple of small cracks that need filling in before I think it will gain widespread support.

### Plugin Search

For a tool that is based solely on the strength of it’s plugins, it’s going to need to make finding and discovering the most useful plugins easier than simply looking through a list on it’s repository.

In this way it shares characteristics to Sublime Text, which goes to great lengths to make this process easier through it’s online [package management website](https://packagecontrol.io/).  Similarly, [jQuery plugins](https://plugins.jquery.com/) have been made more accessible through it’s plugin repository.

Without a similar solution, it’ll become increasingly difficult to find plugins that genuinely offer key functionality.  There are already upwards of 100 plugins listed on the PostCSS repository.  Realistically, most developers aren’t going to trawl through that list to find the diamonds in the rough that apply for their project.


### Parsing Custom Syntax

As mentioned in the section above on writing custom plugins, currently it’s not always possible to parse, and therefore transform, syntax that isn’t 100% valid CSS.

This issue is currently being worked on by the PostCSS team and as of v4.2 should hopefully be resolved before long, but if this is something you need right now, you’re going to be flat out of luck.

### Shortcuts

This isn’t so much a gripe with PostCSS, but a problem that PostCSS facilitates due to people being able to write plugins to transform anything.

Writing plugins to transform your own shortcut syntax is a _terrible_ idea on many levels.  For example, the [postcss-verthorz](https://github.com/davidhemphill/postcss-verthorz) plugin let’s you write the following:

<pre>
<code class="language-scss">.foo {
    padding-vert: 2rem;
    margin-horz: auto;
}

.bar {
    ph: 30px;
    mv: 100px;
}

// converts to
.foo {
    padding-top: 2rem;
    padding-bottom: 2rem;
    margin-left: auto;
    margin-right: auto;
}

.bar {
    padding-left: 30px;
    padding-right: 30px;
    margin-top: 100px;
    margin-bottom: 100px;
}</code>
</pre>

The problem with this, or other plugins like [postcss-position](https://github.com/seaneking/postcss-position), is that they are complicating what should be uncomplicated – standard CSS rules.  They are creating as much as a problem as they are solving.

Shortcuts like this should be utilised in text editors, not hard-coded ready to confuse future developers that work on the project.

I would hope that developers choose not to use PostCSS plugins to transform their CSS in this way, as it ultimately just fragments standard syntax more than is necessary.

---

## Conclusion

PostCSS has absolutely amazing potential.

It truly offers a different way of thinking about processing CSS – one that many developers will embrace as an alternative to what is currently available.

Having the power to customise the way in which you can transform your CSS by being able to choose the plugins that you use is really empowering. It means you can introduce new features to your team at a speed you’re all comfortable with, rather than throwing a whole treasure chest of features into the mix and seeing what happens.

As should be remembered when adopting any new tool however, there are going to be some edge cases that need to be ironed out.  Ensure you thoroughly research whether PostCSS will give you all of the things you need it to before deciding on whether it is ready to use in your workflow.

At JUST EAT, we’ve added PostCSS to our workflow, but currently only to provide additional functionality that Sass can’t, such as Autoprefixer.  I envisage that we will gradually shift over to using PostCSS as the ability to write more flexible plugins that can transform parsed SCSS files becomes available.  For our team it makes sense to keep a syntax that the majority of our developers feel comfortable writing – at least until PostCSS has become slightly more mature.

But that doesn’t mean PostCSS isn’t right for your team or project – I would fully encourage you to take a look yourself at what PostCSS can offer you.  If PostCSS continues to develop and improve at the rate it is right now, it’s likely to be a part of many front-end developers workflows in the near future.



{{/markdown}}



