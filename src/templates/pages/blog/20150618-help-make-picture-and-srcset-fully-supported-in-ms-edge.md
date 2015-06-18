---
layout: post.hbs

title: Help to get Picture and Srcset fully implemented in Microsoft Edge
url: help-make-picture-and-srcset-fully-implemented-in-ms-edge
description: "If you care about the future of Responsive Images, please carry out the following two requests."

posted: 2015-06-18T11:30

post:
- post

published: true

categories:
  - "Web Development"

---

{{#markdown}}

**TL:DR**

1. If you use [Picturefill](https://github.com/scottjehl/picturefill) on any of your websites, update it to v2.3.1.

2. Upvote the proposals for [extended scrset features](https://wpdev.uservoice.com/forums/257854-microsoft-edge-developer/suggestions/8204535-support-of-the-width-descriptor-in-srcset-and-the) and [the Picture element](https://wpdev.uservoice.com/forums/257854-microsoft-edge-developer/suggestions/6261271-picture-element) to be prioristied for implementation in Microsoft Edge.

---

This morning I was reading about how `srcset` is [coming to Microsoft Edge in Windows 10]((http://blogs.windows.com/msedgedev/2015/06/08/introducing-srcset-responsive-images-in-microsoft-edge) – Hooray!

But before we all celebrate too wildly, it’s worth noting that it’s not yet the full implementation of `srcset`.  Microsoft are doing a great job of moving towards fully native Responsive Image support but this is simply the first step.


## What can I do to help?

I’m glad you asked.  There are two, very simple, things that you can do to help us all get full support for native responsive images sooner.


### 1. Update Picturefill to v2.3.1

As you [may have recently read](https://css-tricks.com/please-update-picturefill/), for Edge and Webkit to fully implement `srcset` – in particular the `currentSrc` attribute – the use of [Picturefill](https://github.com/scottjehl/picturefill) pre v2.3.1 needs to drop.

Currenty if Microsoft and Apple were to ship the `currentSrc` implementation in Edge and Safari, a whole bunch of websites would simply break due to a small but important bug in old versions of Picturefill.

The sooner we update any old versions of Picturefill that are used on websites that we have developed, the sooner they can implement `currentSrc` into Edge and Webkit.



### 2. Upvote the proposals for [picture element support](https://wpdev.uservoice.com/forums/257854-microsoft-edge-developer/suggestions/6261271-picture-element) and [full srcset implementation](https://wpdev.uservoice.com/forums/257854-microsoft-edge-developer/suggestions/8204535-support-of-the-width-descriptor-in-srcset-and-the) in Microsoft Edge.

Microsoft uses this to gauge and rank new features to implement in Edge and so the more upvotes they receive, the higher a priority both of these features will become.

The sooner we have native Responsive Image support across all browsers for both the [Picture element](http://caniuse.com/#search=picture) and the [extended srcset feature-set](http://caniuse.com/#search=srcse), the closer we will be to not having to rely on polyfills for these features in the future.

Obviously, we’ll also need to kick Apple in the nuts to get native support for `picture` into Webkit as well, but hopefully getting this implemented fully in Edge will help push them into action on this front.


## Do your bit

Responsive Images have come a long way, but there’s still a little way to go before we have native implementation across the board.

By acting on the two simple steps above, you’ll be helping developers everywhere get a step closer to that goal.


{{/markdown}}
