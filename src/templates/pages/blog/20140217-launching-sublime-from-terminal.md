---
layout: post.hbs

title: Launch Sublime Text 2 or 3 straight from the Mac OSX terminal
url: launching-sublime-from-the-terminal
description: "A really quick win to open up Sublime Text in one quick command from the Mac OSX terminal."

posted: 2014-02-17T09:00

post:
- post

categories:
  - "Web Development"
  - "terminal"

---

{{#markdown}}

As I’m working in the OSX Terminal more and more these days, I'm always on the lookout for time saving shortcuts.

A really useful one that I picked up recently from [Zander Martineau](http://twitter.com/MrMartineau) is how to open up Sublime Text straight from the Terminal.  This is done by hooking into a CLI utility that Sublime provides called [subl](http://www.sublimetext.com/docs/2/osx_command_line.html).

The following instructions are based largely on the original [gist on Github](https://gist.github.com/artero/1236170) by [Artero](https://github.com/artero), so credit for this solution should be directed to them and not myself.

It’s a slightly different installation depending on whether you're using Sublime Text 2 or 3, so I'll split the two out below; simply refer to the instructions that are relevant to you.


##Installation for Sublime Text 2

Assuming you installed Sublime in the Applications folder, the following command should open up the editor when you type it into the Terminal:

`open /Applications/Sublime\ Text\ 2.app/Contents/SharedSupport/bin/subl`

If that worked, you're good to go. You now need to create a symlink called `sublime` which links the subl CLI to a folder where your system usually looks to execute these binaries.  To do this, type in:

`ln -s /Applications/Sublime\ Text\ 2.app/Contents/SharedSupport/bin/subl /usr/local/bin/sublime`

Now skip past the Sublime Text 3 installation instructions to find out how to check your bash profile and finish the installation process.


##Installation for Sublime Text 3

Assmuming you installed Sublime in the Applications folder, check that the following command opens up the editor when typed in:

`open /Applications/Sublime\ Text.app/Contents/SharedSupport/bin/subl`

If that worked, you're good to go.  You now need to create a symlink called `sublime` which links the subl CLI to a folder where your system usually looks to execute these binaries.  To do this, type in:

`ln -s "/Applications/Sublime Text.app/Contents/SharedSupport/bin/subl" /usr/local/bin/sublime`



##Check your profile

The final thing you need to do, is to check that your system profile is looking in the right place to see the symlink you have just created.

Enter the following command into your Terminal:

`open ~/.bash_profile`

Note that in some cases the profile may be called `~/.profile`.

This should open up your profile in a text editor.  What you’re looking for is a line towards the top of the file that starts with `export PATH=`.  Your `PATH` contains all the directories that will be looked into for executable binaries when you type a command into your Terminal.  Since we created a symlink in the `/usr/local/bin` folder, we want to make sure that that folder is being checked too.

You should be able to see something similar to this:

`export PATH=/usr/local/bin:(...)`

If not, simply add it in and save the file.

Note: The `(...)` in this example represents other folders that would be listed on the same line and separated by a colon.

If you don't already have a `PATH` set in your bash_profile you can type the following on a new line:

`export PATH=/usr/local/bin:$PATH`

Finally, if you did have to add `/usr/local/bin` to your `PATH`, run the following command before continuing:

`source ~/.bash_profile`

This will reload your .bash_profile with the newly added directory in your PATH.


##Test it all works!

In your Terminal, the following commands should now work:

<ul class="unstyled">
	<li>`sublime .` – opens the current directory in Sublime</li>
	<li>`sublime filename` – opens a file where `filename` is the file to be opened</li>
	<li>`sublime foldername` – opens a folder where `foldername` is the folder to be opened</li>
</ul>

And there you have it – you can now open any file or folder in Sublime straight from the Terminal.

Thanks and credit for this great solution again goes to [artero](https://www.github.com/artero).

{{/markdown}}