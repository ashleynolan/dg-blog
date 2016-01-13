---
layout: post.hbs

title: Setting up a Node server using Heroku
url: setting-up-a-node-server-using-heroku
description: "How to get started using Heroku to host your Node projects, as well as some gotchas worth noting"

posted: 2014-11-20T10:00

post:
- post

published: false

categories:
  - "Web Development"
  - "hosting"
  - "node"

---

{{#markdown}}

Whether you’re getting started playing around with Node, or if you want a scalable platform for more developed projects, Heroku offers a really great service to host your site – even if you’re a hosting noob like I am.

Having been playing around with Heroku for a little while, I’ve recently deployed my first production site written in Node.js on Heroku and wanted to document the process as well as noting down some of the caveats I experienced in the process so they don’t catch you out if you‘re doing the same thing.

## Getting Started

If you’re new to the world of Heroku, you’ll need to do some basic housekeeping before you get to play with what they have to offer.

First, create an account

- ENV variables = winning

- Cmd line Shortcuts
	- git push heroku master
	- heroku config
	- heroku ps:scale web=1
	- heroku restart

- Foreman

- Free plan – dynos sleep after an hour if noone visits your site

- New Relic
- MongoLab
- LogEntries



{{/markdown}}
