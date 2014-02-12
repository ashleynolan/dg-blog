---
layout: post.hbs

title: Getting started with the OSX terminal – a developers guide
url: getting-started-with-terminal
description: "An intro guide to the terminal, going over my most commonly used shortcuts and commands."

posted: 2014-02-12T10:00

post:
- post

categories:
  - "Web Development"
  - "terminal"

---

{{#markdown}}

For around 18 months now I’ve been using the terminal more and more.  More suprising than becoming more proficient is how enjoyable it can be to use once you learn the basics.

Whereas historically, it would be unusual for a front-end dev to stare too deeply into the command line abyss, now it has become a necessary part of our front-end toolkit.  Whether using git, grunt or jekyll, there are many tasks and tools that require a basic amount of terminal knowledge.

So I wanted to jot down what I have learned about the terminal, and share the most useful commands and tricks that make working with the terminal a genuinely enjoyable experience.

Note. The commands and shortcuts will refer directly to the OSX terminal, but many of the basics cross over to Windows command line as well.


## The very basics

The most basic terms you'll need to survive on the command line:

<dl>
	<dt><dfn>**cd**</dfn></dt>
	<dd>
		<p>Short for change directory and will navigate to the directory specified after the command.</p>
		<p>For example, `cd Users/Sites/` will move you into the Users/Sites folder.</p>
		<p>To navigate back one directory use `cd ../` To return to your home directory type `cd.`  To return to the previous directory type `cd -`.</p>
		<p>To navigate to a folder with spaces, use<br>`cd /Users/Ash/My\ Folder\ Name/`<br>or `cd “/Users/Ash/My Folder Name/"`</p>
	</dd>

	<dt><dfn>**mkdir**</dfn></dt>
	<dd>Short for make directory and, as you might guess, it creates a directory.  Usage is like so `mkdir my-directory-name`.</dd>
</dl>




{{/markdown}}