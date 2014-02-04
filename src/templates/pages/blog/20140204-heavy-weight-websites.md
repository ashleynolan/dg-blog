---
layout: post.hbs

title: Controlling heavy weight websites
url: controlling-heavy-weight-websites
description: "The worringing trend of creating beautiful websites at the cost of performance."

posted: 2014-02-04T12:00

post:
- post

categories:
  - "Web Development"
  - "Performance"

---

{{#markdown}}

I love beautiful websites. They inspire the work we do and help move the industry forward in terms of what we know is achievable on the web.

A recent trend on the web conflicts with this love; a large number of recently launched websites are putting a far greater emphasis on the beauty of the visual experience above and beyond considering the practical impact on the user.

The site that has led me to write about this is the recently launched [Heart of the Arctic](http://heartofthearctic.ca/) website.  Straight up, I want to say that I'm not trying to single out this one website; it simply exaggerates the points I had been thinking about writing about.

## But it looks great…

First of all, I can't deny that it's a beautiful looking website; the visual design is top notch and once the experience loads, it's clear a lot of great work has been put into creating and developing the site.

But that doesn't hide the problem that lies under the hood.

It didn't take long to notice the main issue when using the site.  At work, my connection speed (when tested this morning) comes in at ~94Mbps; Pretty quick.  Yet despite this, the Heart of the Arctic's loading screen took over 30 seconds to reach 20% and over a minute to start playing its first piece of video content.

Opening the Network tab in Chrome gives a better insight into what's going on:

<div class="img">![Image showing the network results after 20% of the page has loaded of the Heart of the Arctic website](/assets/img/blog/heavy-weight-pages/ita-20.jpg)</div>

At the 20% mark on the loading screen, 30Mb of data had been transferred in just over 33 seconds.  Fast forward towards the end of the loading screen:

<div class="img">![Image showing the network results after 98% of the page has loaded of the Heart of the Arctic website](/assets/img/blog/heavy-weight-pages/ita-98.jpg)</div>

At 98%, ~44MB of data had been transferred in almost 53 seconds.  Once the loading bar hit 100%, the opening video played, and in the background another 50MB of data is transferred, taking the sites data transfer total to just under 100MB.

So all of this leads to one question.

**Can excessive page weight be justified for any visual experience?**

Creating immersive interactive experiences like this is difficult, especially the optimisation aspects of these projects.  What I honestly can't understand is the need to load in 50Mb, or make a user wait almost a minute on a fast connection, before seeing any real content.  When asking other people on Twitter to try viewing the site, a lot of people didn't even make it past the loading screen.

More thought needs to be taken about how to offset the load to when the data is actually needed.  Rather than transferring all of the sites assets up front, the site should load in what is needed and defer loading the rest until later when it's actually required.  This is done to good effect in the recent [Middle Earth Chrome experiment](http://middle-earth.thehobbit.com/), where assets are progressively loaded as you interact with and explore deeper into the site.

The Heart of the Arctic website is by no means alone. There's a whole slew of websites displaying this worrying trend.  [Phil Hawksworth](https://twitter.com/philhawksworth) has been doing a great job highlighting similar issues seen in parallax scrolling websites such as [Oakley's recent campaign site](http://hawksworx.com/blog/oakleys-monster-page-of-baubles/).

Another similar example is the [Sony "Be Moved" site](http://discover.store.sony.com/be-moved/), that weighs in at over 50MB.

All of these sites would be better served to take a step back and consider the decisions they make and the impact the perceived beauty of their site has on all aspects of the users experience.

It's not impossible to create a site that is visually beautiful while not vastly excessive.  The recently voted [FWA site of the year](http://www.thefwa.com/article/fwa-site-of-the-year-2013), Pharell's [24hoursofhappy.com](http://24hoursofhappy.com/) weighs in at around 14Mb on load, progressively loading in more of its music video as the user continues to watch.  Not small, but not unreasonable for such an experience.

It's also worth noting that the Oakley's site that Phil brought to attention in his post has now been optimised down to less than 15MB in size without any noticeable change in functionality – proof that with a bit more consideration, these excessive sizes can be avoided.

## The impossible dream…?

It's hard to make visually interactive experiences that don't involve using huge assets.  Video and high-res imagery by their nature are always going to affect the page weight of your site.

But we need to be thinking about two things.

Are we throwing unnecessary assets at a site?  Beauty doesn't automatically require 100+ high-res images spinning your product around in 3D.  In the majority of websites of this type, restraint needs to be displayed.  Think outside of the much overused parallax trend.  We have a vast array of tools at our disposal now in the browser. Consider using SVG over high-res imagery which is much more friendly when it comes to file-size.

Then, for the assets that are necessary, think about how and when you load them. Offsetting the loading of unneeded assets means users get to experience your site quicker and if they do choose to leave the site before viewing the whole experience, they haven't downloaded things they'll never even see.

So don't stop creating beautiful experiences.  Just start thinking about how to control those experiences and optimise their performance to benefit the users viewing them.

{{/markdown}}