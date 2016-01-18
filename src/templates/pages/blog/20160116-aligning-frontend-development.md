---
layout: post.hbs

title: Aligning your Front End Process
url: aligning-frontend-process
description: "A few tips for helping to align your processes across your team to help with consistency in your projects."

posted: 2016-01-16T09:00

post:
- post

published: true

categories:
  - "Web Development"
  - "Process"

---

{{#markdown}}

Developing with front-end code is highly deceptive.  From a distance it seems straightforward; HTML, CSS and JavaScript are easy languages right?

Not so much.

As a project scales, the structure of your front-end code becomes essential.  How you choose to do things when your website has just a few pages and one developer working on it can quickly come back to bite you if you neglect to think about the future.

At JUST EAT we have a number of developers working on the front-end of any one of our products.  As with any project, ensuring that those developers are working together, and not against each other, is of massive importance.

I want to take you through some of the things that I’ve found help to keep our projects and developers aligned and our codebase better structured.  Although these solutions have come about through working with larger scale projects, they are equally useful on smaller projects.  In essence, they are all about encouraging good habits and practices.


## Consistent Workflow

Front-end workflow tools such as [Gulp](http://gulpjs.com/) and [Grunt](http://gruntjs.com/) have become extremely popular over the last couple of years.  They put in place a set of tasks that can then be carried out by any developer working with the project.

Each task is comprised of a set of operations to run; this can include things like code linting, CSS preprocessing, compressing code and images and running JavaScript tests you have written.

The biggest benefit of using any workflow tool is that it gives all of the developers working on the project a consistent way of carrying out these tasks.  The configuration files are a part of your base project and so, once the tasks are setup, a newcomer to the project will be able to run these almost immediately.

These tasks can also be run as part of a projects build process to ensure that uncompressed code and images are never deployed.  Doing this means you aren’t reliant on developers having to remember to carry out tasks required to make your website production ready – they are done automatically in your release build.

If you’re new to setting up a project workflow, look at tools that can help you get up and running with example configurations.  [Bootstrap](http://getbootstrap.com/) and [Kickoff](http://trykickoff.com/) are examples of frameworks that utilise a workflow tool, so take a look at how they are setup and the tasks they implement to get you started.

If you take away only one thing from this article, it should be the importance of spending some effort on your projects workflow.  The benefits vastly outweigh any potential time you will spend initially setting it up.


## Modularise

One of the hardest things to do when developing the front-end of a website or application is to step back from thinking about the context you are developing for and build code for any scenario.

Taking CSS as an example, it’s easy to name things with respect to the page we are building for, defining classnames such as `.searchResults-item` or `.homepageCarousel`.  These classnames are useless in terms of reusing those styles; what happens if I later want to use the same base styles that the `.searchResults-item` element has, but applying them to a list of user comments instead?  It would make much more sense to use classnames that can be used in any context.

Try to build all of your code in components.  Across teams, this means that you will save time as you reuse classes and styles when building new pages.  Some components may be able to be used with very little modification, others may need be able to be adapted and modified slightly.

The same goes for JavaScript.  Ensure modules that you write can be potentially reused in any part of your site, or on any future projects.  Well written JavaScript modules can be used on any project, not just the one you are working on right now.

Thinking in components isn’t an easy habit to get into, but as you get better at doing so, your front-end code will become much easier to work with, while having the additional benefit of being much more future-proof.


## Stay on the same page

It’s a widely held saying that a good codebase should look like it has been written by one developer, irrespective of how many people are working on it.

This can be a challenge; every developer likes to write code in slightly different ways and so this involves encouraging change for the benefit of the team and project.

In my experience, good developers will embrace code consistency within a team over any personal preferences they may hold.  Ultimately, there’s no point arguing over the use of spaces vs tabs.  If you have a preference for a certain type of formatting, then try to make sure you can give reasons beyond 'because I like doing it that way'.

The most important thing is to make these choices as a team and stick to them.  Using a linter – such as [Stylelint](http://stylelint.io/) for CSS or [ESLint](http://eslint.org/) for JavaScript – will ensure that the formatting you decide on is adhered to.

Using linters for code formatting can seem over the top and un-needed to some.  I find them to be quite the opposite.  They act as your first line of defence in code quality, stopping any badly formatted code hitting the codebase.  They also help to ensure code reviews focus on the way code has been written rather than getting bogged down trying to spot formatting inconsistencies.  This is tiresome both for those doing the reviewing and those whose code is being reviewed.

CSS Naming Schemes are also very valuable in terms of project consistency.  [BEM](https://en.bem.info/method/key-concepts/), [SUIT](https://github.com/suitcss/suit/blob/master/doc/naming-conventions.md) and [Kickoff’s naming conventions](http://trykickoff.com/learn/css.html#namingscheme) are all naming schemes that help promote modularity, but also put in place rules over how classnames are defined.

When a naming scheme is being used, classnames become more self documenting and it becomes easier to see how classnames relate to one another.

Ultimately, the more you can do to promote consistency across your team, the easier your codebase will be to maintain and work with.


## Code Commenting and Documentation

As with anything important, you truly realise how good something is when it’s not there and this is especially true of code comments and documentation.

First up, if you aren’t commenting your code, you need to start.  This doesn’t just apply to those working in a team; code you write today you will inevitably return to in several weeks or months.  It’s always good to have an insight into what you were thinking when you first wrote that code.

Commenting doesn’t need to be some elaborate process – it’s just about explaining the basics.  If you’re writing a function in JavaScript, say what it does, even if you think it’s obvious.  Writing a utility class or an element modifier in CSS?  Then explain how it will affect an element it is applied to.

Code commenting becomes even more important when working in a team.  For example, at JUST EAT, it’s impossible for me to see every piece of code that goes into the project I work on.  So when I come to modifying an area of the site I’ve never used, it’s a massive help if the person who wrote that code decided to comment it.

At the very least, I try to write a comment for every CSS component that I write, or for every function in JavaScript.

Documentation is more involved but is equally useful.  Spending time to document how things have been done in your project is useful not just to other developers working on the project but also to you.

For JUST EAT’s website, we maintain a Component Library which contains every CSS component class available in our project.  If another developer comes to work on a new feature, they can take a look through this documentation to see if something can be reused first.  Without this, every developer would need to know every front-end component in the codebase – an unrealistic goal for any mid-size project that changes over time.

If you have a number of developers in your team, try to spend some time building up documentation relevant to your project – or projects – that you work on.  They can be valuable as a reference point for all the members of a team, and especially so for new hires.


## In summary

Trying to keep a consistent codebase which is being worked on by a number of developers isn’t easy, especially as new members join and your team grows.  The key is to put the right processes in place that will gain you and your team the most value over time.

Look at what causes you the most headaches – is there confusion over how to do simple things like compiling preprocessor code or image compressing?  If so, spend time on your workflow tooling.  Is your CSS hard to manage because the structure isn’t clear or there is too much inconsistency?  Look at how you can modularise your CSS and tools that can help ensure your team writes CSS in a more consistent manner.

Putting the effort in to review your workflow and team processes will pay back handsomely over time.

{{/markdown}}
