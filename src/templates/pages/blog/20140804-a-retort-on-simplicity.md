---
layout: post.hbs

title: A Retort on Simplicity
url: a-retort-on-simplicity
description: "Simplicity isn’t about using out development tools less – it’s about using the right tool for the right task."

posted: 2014-08-04T23:20

post:
- post

published: true

categories:
  - "Web Development"
  - "design"

---

{{#markdown}}

There has been a lot of talk about Simplicity on the web as of late.  It’s a good conversation to be having, but one that I think has cast an unfair scapegoat in our quest to keep things simple.

That scapegoat seems to be our tools.

The reasoning seems to be that development tools put layers of complexity in the way of what we are actually doing, and by doing so, hinder simplicity by abstraction.  But the problem isn’t our tools, simply how we as developers use them.

## Tea Break

Let’s step outside of the web for a moment.  I want you to imagine making a cup of tea and the steps you would go through to make one.  My steps are [pretty similar to these](http://teamethod.co.uk/) if you’re wondering – pretty simple right?

Now, instead of using a kettle to boil the water, think of a different way to boil the water.  While you’re at it, also think of an alternative to the teabag you were likely using to brew the tea.

Ok, so unless you’ve got some niche X-Men–style ability enabling you to boil water with your mind, taking both of these things away will have made making your cup of tea much less simple; their invention came about to aid this process.  It’s fair to say that both can be considered tools in the realm of tea making.

So why aren’t people in the world of tea–making throwing away their kettles and sticking to boiling water on a fire instead?

##  Use the right tool at the right time

Tools are there to make our lives simpler.  Used sensibly and in moderation, they enable us to be more productive and to focus more on the creative aspects of our work.

Before grunt came along, I had to do mundane tasks like minifying my code manually and setting up local servers to run whatever I was building; this usually resulted in me hacking around with configuration files and settings that I never wanted to see in the first place.  Now, I run `grunt serve`, and all of that is done for me; I’m good to get on with writing code.

Sass (other preprocessors are available), if used solely just for it’s implementation of variables in CSS, saves me more time than I wish to consider.

Whenever I talk to someone about using Sass for the first time, the main point I bring up is that if you can start out writing pure CSS using SASS, leaving you free to explore other features as you become comfortable with them at your own pace.

As a bonus, some of the features of Sass are actually in the working specification for CSS, so it can also help prepare you for what will soon be available in standard CSS.


## Responsibility

Of course, how we use the tools being created is our responsibility.

If I were to throw a load of teabags into a kettle to try and speed up my tea making process, it would likely be counter productive; I’d burn my tea by overheating them, my kettle would need to be cleaned after every use and it may even damage it in some way – who knows.  If someone would like to try this out and let me know, I’d love to hear their findings…

The same goes for our tools on the web.  Throwing every tool at the job just ‘because’, isn’t good for anyone or any project.  Likewise, just because a tool has a lot of hype behind it, doesn’t mean it’ll be any use to you or your team.

Instead, put the time into creating a process for your work and refining the list of tools that aid that process.  It will create an slight overhead while learning a new tool, sure, but if the gains are justified in the long run then it’s worth that time.

As Stephen Hay recently said at his talk at Beyond Tellerrand:

> “Start a new project as simple as it can get and only add things if you really need them.”

For me personally, this means grabbing a core structure of code and tools that enables me to just start coding.  To you, it might mean something different and that’s fine.  The main thing is that your chosen process gives you the simplicity that you need to start creating.

So let’s all stop blaming our tools for hindering simplicity; instead blame ourselves for the ways in which we choose to use them.

{{/markdown}}