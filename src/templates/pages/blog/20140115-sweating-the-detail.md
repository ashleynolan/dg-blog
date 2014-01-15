---
layout: post.hbs

title: Sweating the detail
url: sweating-the-detail
description: "The last time I redesigned my blog, it took me over a year to have something to show for it. This time I gave myself a week."

posted: 2014-01-15T12:30

post:
- post

categories:
  - "Web Development"
  - "Personal"

---

{{#markdown}}

I‘m pretty awful at setting myself deadlines.  Unless there‘s a hard deadline which people are relying on me to hit, I can procrastinate like nobodies business.

Case in point; the last time I redesigned this site.  What should have taken a few weeks to develop ended up dragging on for longer than I‘d even like to consider.  The problem is that the only person it affects is yourself.  Having many ongoing side projects can be somewhat self defeating; personally I‘m far better when focussed, completing the task and then moving on.

Just before Christmas I decided it was time for a site refresh.  My old site was fine and could have lasted a while longer, but having my content in a CMS made no sense; it simply put too much baggage in the way of me actually writing.  I wanted to remove as many potential barriers as I could so that I minimised any excuses future me would be able to think up.

When I went back to work in January, I made myself a deal. I had a free week of evenings. I would therefore try to turn around the resdesign in a week. No time to drag my feet, no time for procrastination. Just enough time to do it.

To compete against my inner self I needed to lay down a couple of rules.

The first self imposed rule was not to sweat the detail.  In the past, I‘ve been my own worse enemy. Trying to perfect absolutely every detail of a design is fine in some cases, but when redesigning my own personal site it‘s a match made in hell.  Therefore, if I hit a fork where there was a choice between a simple or a more complex route, I would take the simple route.  No pouring hours into features that don't help me hit my goal. Focus on the main goals, then iterate.

The second rule was to design almost exclusively in the brower, mobile first.  I figured this would be quicker than trying to mock things up first.  The goal was to refresh and not overhaul the whole site design, so having recently dived a bit deeper into actually designing myself, I wanted to chance my arm and see where that took me.  As the week went on, I found designing in the browser lead to me making design decisions faster.  Being able to try small things out before deciding the direction I'd go with was refreshingly simple.

In terms of the technology the site was to be built on, I needed my content to be more easily transferrable, not hard baked into a CMS.  I write my posts in Markdown, so it made sense to have them saved like that in my site structure and parsed into HTML.  I therefore chose to use [Assemble](http://assemble.io/), a static site generator similar in nature to [Jekyll](http://jekyllrb.com/), but far less blog focussed and more flexible if I choose to extend the site down the line.

So how did it go?  Any possibility of suspense is unsurprisingly ruined by the fact that the site looks completely different I‘d have thought…!

8 days after starting, the redesign is done. I spent around 5 evenings and a Saturday in terms of actual time put in and although it‘s taken up most of my last week, it feels good that it‘s moved forward so much in a relatively short space of time.

My blog content is now all saved in Markdown which removes potential excuses when I think about writing in the future.  Sure, there are things I want to improve upon, but I'm way happier with the site now than I was 8 days ago. Plus noone will notice the things I know aren‘t there for precisely that reason; they aren‘t there.

But the single piece of advice I‘d give anyone else who, like myself, feels they struggle to finish their own personal projects.

**Don‘t sweat the detail.**

Think about your options, but recognise when you are digging yourself a bigger hole instead of simply moving forward.  If your main goal is to get a site out with feature x, don‘t spend days playing around with feature y if it holds up feature x.  Complete feature x, release, then make new goals relating to feature y.  It‘s what all the great companies have done in the past to ensure they focus their priorities and their time; it works the same across any project, irrespective of scale.

I had to pull myself away from doing this a number of times, but if I hadn't, the site would still be half finished.  Spending too much time thinking about what‘s missing from what you‘re building detracts from what you‘ve already created.

So make sure you give that the focus it deserves first before moving onto new goals.

{{/markdown}}