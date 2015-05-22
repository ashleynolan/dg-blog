---
layout: post.hbs

title: Using Git in the terminal (or on command line)
url: using-git-in-terminal-or-command-line
description: "Some simple tips to make using Git a breeze in OSX Terminal"

posted: 2014-11-06T10:00

post:
- post

published: false

categories:
  - "Web Development"
  - "terminal"

---

{{#markdown}}

A while back I wrote about how you should be [using aliases to save time](/blog/beginners-guide-to-terminal-aliases-and-functions) when using the Terminal or command line.

If you don’t know what an Alias is, quite simply it’s a way of shortening a complex command, or set of commands, down into a shortcut you define yourself.  If you want to find out more, I recommend [reading the initial article](/blog/beginners-guide-to-terminal-aliases-and-functions).

As a follow up, I wanted to go over how setting up these aliases on my system has helped me speed up my workflow with Git in the terminal, and how it can do the same for you too.


## A more visual view

One of the first things I tried out when I began using Git on the command line was [Git Convience](https://github.com/jakearchibald/git-convenience), by Jake Archibald.

This is a set of tools and aliases that makes often–used Git commands more accessible by making them less cumbersome to write.

For example, instead of writing `git commit -m 'My example commit'`, it sets up a shortcut so that you can simply type in `gc "My example commit"`.  Similarly, instead of `git status` to view the status of your repo, you can simply write `gs`.

This may not seem like much, but when you’re commiting regularly – as you should be when using Git – this can save a fair amount of time.

The other big thing that Git Convenience gives you is a much [more useful and visual command prompt](https://github.com/jakearchibald/git-convenience#prompt).

This shows you the status of your local Git repoistory when compared to the origin as well as displaying the name of the current branch you are on.  This gives you a good idea as to whether you have uncommitted changes, if you need to pull or push to the origin, or if you are up–to–date.

This is something that I still use in my workflow today and find incredibly useful.

## Building on this initial setup

If you install git convenience, it will set up [some basic aliases](https://github.com/jakearchibald/git-convenience#shortcuts) to get you started using Git on the command line.  As I’ve continued using Git, I’ve added to this initial list and expanded the number of aliases available to me.

The full list of aliases can be [seen in my dotfiles](https://github.com/ashleynolan/dotfiles/blob/master/.git-shortcuts.sh), but here are some of my most often used shortcuts:

- `gb _branchname_` short for `git branch _branchname_` = for creating a new branch called _branchname_
- `gbr` short for `git branch -r` = Shows a list of all remote branches
- `gbn _branchname_` short for `git checkout -b _branchname_` = creates a branch called _branchname and immediately switches to the newly created branch
- `gck _branchname_` short for `git checkout _branchname_` = Switches current branch to _branchname_
- `gbdel _branchname_` short for `git branch -D _branchname_` = Deletes local branch _branchname_
- `gbrdel _branchname_` short for `git branch origin :_branchname_`

- `gss` short for `git status -s` = Shows the status of your local repo, in a more friendly way than using just git status






{{/markdown}}
