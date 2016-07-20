---
layout: post.hbs

title: Some Updates…
url: some-updates
description: "A brief post on some of the updates I’ve made to my site’s hosting recently."

posted: 2016-07-20:30

post:
- post

published: true

categories:
  - "Web Development"
  - "Updates"

---

{{#markdown}}

Last week, I spent some time moving my site onto [Digital Ocean](https://www.digitalocean.com/).  Previously it had been hosted with GoDaddy, but I became tired with the relative lack of control they gave me with respect to my server setup.  That combined with the prospect of having to pay for an SSL certificate – which you can generate yourself for free (more on that in a second) – gave me the push I needed to make the switch.

For those who don’t know anything about Digital Ocean, I highly recommend checking them out.  The [tutorials they provide](https://www.digitalocean.com/community/tutorials/initial-server-setup-with-ubuntu-16-04) are excellent, irrespective of the server technologies you want to use – I learned a tonne about what goes on under the hood of my server by reading through a few of them.

Rather than convolute this article with how I went about making the switch, I’ve written a [separate article](/blog/setting-up-a-site-on-digital-ocean) about the steps involved in setting up a site on Digital Ocean using NGINX.


## Moving to HTTPS

As I mentioned above, one of the biggest reasons for moving my hosting was so I could enable HTTPS on my site – something that any developer can do for free using a great tool called [LetsEncrypt](https://letsencrypt.org/).

Once I had my initial server setup on Digital Ocean, making the switch to HTTPS literally took a couple of hours.  If you want to find out more details about how easy the process is, I’ve written [an article explaining exactly how I went about it](/blog/moving-to-https-with-letsencrypt).

I can’t stress enough how straight-forward this is to do.

Switching your site to HTTPS is a no-brainer; Google use it as a [ranking signal for their search results](https://webmasters.googleblog.com/2014/08/https-as-ranking-signal.html) and securing your site using HTTPS is also a [requirement should you wish to enable HTTP/2](https://www.smashingmagazine.com/2016/02/getting-ready-for-http2/#make-the-move-to-tls) on your server (which you should be looking to do in the very near future, if not right now).


## Adding a CDN

While I was configuring my new hosting, I also decided to try out a CDN to serve up my site.  The service I now use for this is [CloudFlare](https://www.cloudflare.com/overview/).

So far I’ve been pretty impressed at how easy it has been to setup and use, although it’ll be interesting to see if that’s still the case when I change any of the front-end styling or assets.


## TL:DR

If you’re interested in any of the things I’ve mentioned above, then check out the posts that I’ve written that explain the subjects in more detail:

- [Setting up a server on Digital Ocean](/blog/setting-up-a-site-on-digital-ocean) and
- [Moving to HTTPS using LetsEncrypt](/blog/moving-to-https-with-letsencrypt)

{{/markdown}}
