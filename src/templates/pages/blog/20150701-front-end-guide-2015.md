---
layout: post.hbs

title: PostCSS – Sass Killer or Preprocessing Pretender?
url: postcss-a-review
description: "I take a look at a front-end tool that’s been gathering a fair bit of attention as of late."

date: July 16, 2015
posted: 2015-07-16T09:30

post:
- post

published: false

categories:
  - "Web Development"
  - "CSS"

---

{{#markdown}}

PostCSS first came onto my radar back in February when I read Ben Frain’s article [Breaking up with Sass: it’s not you, it’s me](http://benfrain.com/breaking-up-with-sass-postcss/).  I was extremeIely happy with my workflow at the time – using Sass for all of my preprocessing needs – but it piqued my interest in PostCSS to make sure I consider at a later date.

Since joining JUST EAT, my first main task has been to review and restructure the front-end processes that we use going forward, and so I thought it was time to take a deeper look into PostCSS and what it has to offer.


## What is PostCSS

For anyone unfamilar with PostCSS, it’s a tool that can help with processing your CSS, similar to preprocessors such as Sass, Less and Stylus.  PostCSS has a few key differences though.

A preprocessor like Sass gives you a whole bunch of functionality all bundled into one tool, irrespective of whether you need or will use use all of those features.  On the flip side, PostCSS is a blank slate; think of it as a bunch of LEGO bricks that you can use to add pieces of functionality as and when you need them.

So for example, if you only want the ability to use CSS variables and nesting when writing CSS, you can add a plugin for each of these tasks to your PostCSS build.

Another example is Autoprefixer, the popular prefix-management tool, which is actually a PostCSS plugin that has been made accessible through the creation of Grunt and Gulp packages.


## Why is this useful?

Good question!  So this is useful for a couple of reasons:

**Because developers can do stupid things sometimes**

I love using Sass.  It’s a hugely powerful tool that gives me features that I’d genuinely find it hard to live without.

The problem is, not everyone uses them responsibly.

I’ve written about this in the past, but I’ve seen developers do some really dumb things when using preprocessors that they (probably) wouldn’t do when writing vanilla CSS.  The `@extends` feature of Sass in particular can cause a whole world of pain when used improperly, but even something as simple as nesting in some peoples hands can reap horrible consequences.

For example, at JUST EAT, anyone across a whole bunch of teams can edit the CSS files – front-end devs, .NET devs, anyone.  This is great, but not everyone is at the same level when it comes to their knowledge around CSS best practices.  We have code reviews to help mitigate this, but by throwing Sass into the mix, it opens up a whole bunch of extra functionality that some of our team may not fully understand how to use.  The possibility of a developer writing some Sass that produces a whole bunch of unnecessary CSS therefore increases.

Being able to limit the features and functionality that are available on your project could become quite useful.

or

Therefore, being able to limit the features and functionality that are available when writing CSS on your project could be incredibly useful to help reduce this risk.

**Extensibility**

If you wanted to extend the functionality of a preprocessor like Sass, it’s not simple.  The codebase for projects like this are quite large and you’d have to understand what’s going on under the hood before trying to contribute to that project.

Even once you’ve written your extension or pull request, there’s no guarantee that your feature will be accepted and implemented, as the maintainers might not want that functionality as part of the base feature set.

As PostCSS is made up of plugins, extending it is much easier.  You can simply write your own plugin to transform your CSS in the way you require and add it into your PostCSS compilation step.  You can also then make that plugin available for others to use on their own projects.



## Any other standout features

One feature that the PostCSS team is keen to point out is that you can start writing CSS with respect to new standards right now.  Like Ben


## Will it work for your workflow?




{{/markdown}}



