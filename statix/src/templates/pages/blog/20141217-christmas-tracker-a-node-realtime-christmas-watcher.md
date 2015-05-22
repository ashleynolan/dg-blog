---
layout: post.hbs

title: Christmas Tracker – A Node.js Realtime Experiment
url: christmas-tracker-a-node-realtime-experiment
description: "Check out my latest side project – a realtime Christmas word watcher built in NodeJS and SVG."

posted: 2014-12-17T09:00

post:
- post

published: true

categories:
  - "Web Development"
  - "Node"
  - "Twitter"
  - "SVG"
  - "CSS3"

---

{{#markdown}}

I’ve been a little quiet on my blog of late – and for once it’s not just through laziness, but because I’ve been working on a little side project – [Christmas Tracker](http://www.christmastracker.com).

Christmas Tracker watches what Christmassy things people are mentioning in realtime on Twitter.  It’s built using NodeJS and front–end technologies, with some heavy use of SVG for the illustrations.

The illustrations on the site were designed by my good friends [Lorena Teruel](http://loreipsum.eu/) and [Simon Kinslow](https://twitter.com/kinslowdian) – they did a beautiful job in a very short space of time and I’m really happy with how the site looks!  I’ve also separated out the illustration effect and [posted it up on CodePen](http://codepen.io/ashleynolan/pen/WbxNap).

Aside from the illustrations, my other favourite feature is the top words view which you can see by clicking the 'See Top Words' button in the top left of the site.  I’m storing all of the historical data for each day and plan to graph this to see if there are any interesting data insights as Christmas approaches.

## Tonnes of learnings

Building Christmas Tracker has been a massive learning experience for me.  I’ve been playing around with Node.js for more than a year now, but I wanted to deploy a Node application using only tools I could personally afford to pay for, rather than larger infrastructure.

The biggest thing that I learned is that getting your hands dirty with servers that can cope with a decent amount of traffic isn’t an easy task, especially as a front-end dev with literally no experience in doing so beforehand.

I’m planning to write up a number of blog posts around this and the other things I’ve learned over the last couple of months, so if you’re interested in Node.js or realtime in general, keep your eyes peeled for them in the near future.

Until then, I hope you [enjoy the site](http://www.christmastracker.com).  If you do, let me know on Twitter – I’d love to know what people think of the project.

{{/markdown}}
