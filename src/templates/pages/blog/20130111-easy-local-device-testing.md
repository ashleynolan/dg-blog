---
layout: post.hbs

title: Easy local device testing
url: easy-local-device-testing
description: "Checking out some alternatives for local device testing."

posted: 2013-01-11T09:00

post:
- post

categories:
  - "Web Development"
  - "Testing"

---

{{#markdown}}

I've been doing a lot of device testing recently due to being involved in quite a few different responsive builds. Earlier this week, courtesy of my colleague Rick, I stumbled across a very handy service by the guys over at (37signals)[] called xip.io.

Xip.io lets you access any virtualhost you have setup locally on your computer from any device on your local network; and the extra bonus is it's mega easy to use.  Once setup, it simply gives you a domain to point your devices to and hey presto! Your local site is then viewable from any device you have to hand.

To set it up, you'll simply need to know your current IP address and your virtualhost address.  For example, if you have setup a virtualhost called mysite.local and your IP is 10.0.0.1 then you need to add the following to your httpd.conf file inside the related <VirtualHost> declaration:

	ServerAlias mysite.local.*.xip.io

If you're using MAMP Pro, it's even easier.  Simply add it to the related hosts 'Customised virtual host general settings', which can be found under the 'Advanced' tab, right at the bottom (on v1.9.6.1).

After restarting your local servers, the following address will then let you view your local site on your device (exchanging your own virtualhost address and IP in place of the examples).

	mysite.local.10.0.0.1.xip.io

For those shouting at their screens 'This is already what Adobe Edge Inspect gives you!', indeed it is, but only for one paired device if you have a free creative cloud membership. Setting up xip.io is also much easier in my opinion.

* image of opera mobile emulator *

The other tool I've come across is Opera's Mobile Emulator.  Although emulation can never be as good as the real thing, we don't all have every phone since 2004 sitting on our desks. This emulator goes some way to help fill in any gaps you might have and device testing your site with an emulator is better than not device testing it at all.

Opera's Mobile Emulator comes packed with a whole bunch of devices, including a variety of HTC, Samsung and Sony Phones and Tablets, as well as the Kindle Fire and the Nexus 7.  The great thing about the emulator is that it sets the pixel density and resolution when choosing each device - very handy for comparing your site between high quality HD and less capable alternatives.  It can also be hooked up to Opera Dragonfly so that you can debug straight onto the emulator.

I'd love to know what other tools people are currently using for local device testing, so please do let me know either through the comments or on Twitter.

{{/markdown}}