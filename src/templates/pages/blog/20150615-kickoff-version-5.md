---
layout: post.hbs

title: Kickoff Version 5 released
url: kickoff-version-5-released
description: "A new version of the lightweight front-end framework has been released."

posted: 2015-06-16T09:00

post:
- post

published: true

categories:
  - "Web Development"

---

{{#markdown}}

After much tweaking and testing, [Version 5 of Kickoff](http://trykickoff.github.io/) has now been released!

We’ve also been working hard to update Kickoff’s associated projects.  Both [Statix](https://github.com/TryKickoff/statix) and the [Kickoff generator](https://github.com/TryKickoff/generator-kickoff) have been developed to reflect the V5 changes.

You may notice that Kickoff and it’s related projects have been moved into a shiny new [Github organisation – TryKickoff](https://github.com/trykickoff/).  We did this mainly to move aweay from being aligned to a specific company – especially as I recently moved from TMW to [work at Just Eat](/blog/a-new-challenge).  We’ve got big plans for these projects and are looking for contributors to help us so if you’d like to get involved, please do [get in touch](mailto:trykickoff@gmail.com).

If you’ve never heard of Kickoff or any of it’s related projects, here’s a quick overview along with the most recent updates.

---

## Kickoff

[Kickoff](http://trykickoff.github.io/) is a lightweight front-end framework that aims to help with consistency of structure across development projects and teams.

We don’t like comparing it to frameworks like Bootstrap and Foundation, as rather than trying to give you everything you might ever need for a front-end project, Kickoff aims to give you just the essentials needed when starting a front-end build.

The base setup of Kickoff will help get you up and running with Grunt, Sass and provide a consistent code structure for use in any front-end project.  By using the [Kickoff Yeoman generator](https://github.com/TryKickoff/generator-kickoff) you can also use Browserify for JavaScript dependencies with the Grunt config taken care of automatically.

If you’re new to Kickoff, check out the [documentation for more details](http://trykickoff.github.io/learn/index.html).

Some of the features of Kickoff V5 include:

- **Simplifying and Restructuring**

  One of Kickoff’s strengths is how simple it is to get up and running.

  Previous versions of Kickoff have been good, but we wanted to do better – the folder structure throughout the framework has been adjusted to make Kickoff more intuitive than ever.  The Grunt tasks have also been overhauled to make it much easier to understand and edit should you ever need to.


- **Redesigned Styleguide**

  Keeping track of the base styles in your project can be difficult – Kickoff’s built-in styleguide aims to help you keep track of these and in V5 it has had a massive facelift.

  The styleguide is auto-generated alongside all Kickoff projects, so no configuration is needed to use it;  Just start coding your Sass in the usual way and any changes are reflected in the styleguide as and when you change them.

**[Try out Kickoff for yourself](http://trykickoff.github.io/learn/get.html)**

---


## Statix

[Statix](https://github.com/TryKickoff/statix) aims to make static template building and prototyping quick and easy.

It was created to allow developers to quickly start writing front-end templates in which you can re-use HTML snippets across files.  For example, if you wanted to code up a bunch of HTML pages and (quite sensibly) only want to maintain one header and footer code snippet across all of your files, Statix lets you do this very easily.

It is essentially a combination of [Assemble](https://github.com/assemble/assemble) – a brilliant static site generator – Kickoff and Grunt, configured so that you can get down to actually coding as quickly as possible.

Statix can also be used for building fully static websites – such as the one you are currently reading now.

**[Download Statix](https://github.com/TryKickoff/statix#getting-started-with-statix)**

---

## Kickoff Generator

The [Kickoff Generator](https://github.com/TryKickoff/generator-kickoff) is a really powerful tool that uses Yeoman to generate your front-end setup exactly as you want it when you start a new project.

Running the generator will ask you a bunch of questions, allowing you to specify the exact components of Kickoff that you wish to use on your project.  It then sets up only those parts, meaning you end up with a boilerplate tailored completely to each project.

For example, if you start developing a new project and want to use a combination of Browserify and Statix, but you don’t need icon generation or any of Kickoff’s JavaScript shims, the generator will set this up for you, installing only the parts you choose.

Give it a try – take a look at [how to use the Kickoff Generator in our documentation](http://trykickoff.github.io/learn/yeoman.html).

---

## Help Contribute!

If you use [Kickoff](http://trykickoff.github.io/) or [Statix](https://github.com/TryKickoff/statix), we’d love to hear about how we can improve the framework in future releases – simply submit an issue or suggestion on the associated Github repo.  Likewise if you’d like to get involved in contributing to any of the projects, [just get in touch](mailto:trykickoff@gmail.com).  We’re always looking for new ideas that can add value to the framework and people that can help us to move faster in doing just that.

Lastly, if you like using Kickoff or any of the Kickoff family of projects, please do give us a mention on Twitter.  As with any Open Source project, we rely massively on word-of-mouth to spread the reach of the framework and we’d love for as many developers to benefit from the work we do as possible :)

{{/markdown}}
