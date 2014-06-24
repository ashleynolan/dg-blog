---
layout: post.hbs

title: Getting started with the OSX terminal
url: getting-started-with-terminal
description: "An intro guide to the terminal, going over my most commonly used shortcuts and commands."

posted: 2014-06-24T13:00

post:
- post

published: true

categories:
  - "Web Development"
  - "terminal"

---

{{#markdown}}

For around 18 months now I’ve been using the terminal more and more.  Perhaps the most suprising part of this has been just how enjoyable it is to use once you move past the very basics and become more proficient with what can at first seem on a level with black magic.

Whereas historically it was unusual for a front-end dev to stare too deeply into the command line abyss, it has now become a tool that can aid many front-end tasks.  Whether using git, grunt or jekyll, there are many tools that require a small amount of terminal knowledge.

So I wanted to jot down the basics when starting out with the terminal and share some of the most common and useful commands that I tend to use most often.

Note. The commands and shortcuts will refer directly to the OSX terminal, but many of the basics cross over to Windows command line as well.


## The very basics

The most basic terms you'll need to survive on the command line:

<dl>
	<dt><dfn>**cd**</dfn></dt>
	<dd>
		<p>Short for change directory and will navigate to the directory specified after the command.</p>
		<p>For example, `cd Users/Sites/` will move you into the Users/Sites folder.</p>
		<p>To navigate back one directory (to the current locations parent directory) use `cd ../`. To return to your home directory type `cd`.  To return to the previous directory you were located in type `cd -`.</p>
		<p>Using the `~` character means to use the $HOME internal variable, which is usually the root directory of the current user.  So for example typing `cd ~/` means to traverse from the users home directory.</p>
		<p>To navigate to a folder which has spaces in its folder name, use `cd /Users/Ash/My\ Folder\ Name/` where the `\` escapes each space or `cd “/Users/Ash/My Folder Name/"`.</p>
	</dd>

	<dt><dfn>**mkdir**</dfn></dt>
	<dd>Short for make directory and, as you might have guessed, this command creates a directory.  Usage is like so `mkdir my-directory-name`.</dd>

	<dt><dfn>**pwd**</dfn></dt>
	<dd>Displays the path of the current directory.  Useful for finding your current terminal location in the filesystem.</dd>

	<dt><dfn>**cp**</dfn></dt>
	<dd>Short for copy.  Used like so: `cp /Users/Ash/originalfile.txt tmp/copiedfile.txt`.</dd>

	<dt><dfn>**ls**</dfn></dt>
	<dd>
		<p>Short for list.  Lists all files in a directory.</p>
		<p>To view files as a vertical list use `ls -l`.</p>
		<p>To view all files including hidden ones use `ls -a`.</p>
		<p>To view only directories, type `ls -l | grep '^d'`</p>
	</dd>

	<dt><dfn>**mv**</dfn></dt>
	<dd>Short for move.  Used in the same way as copy (cp).</dd>

	<dt><dfn>**rm**</dfn></dt>
	<dd>Short for remove (more commonly known as deleting).  To remove a folder use `rm -rf folder-name`.</dd>

	<dt><dfn>**open**</dfn></dt>
	<dd><p>Opens a file.</p>
		<p>`open .` opens the current directory in a Finder window.</p>
	</dd>

	<dt><dfn>**man**</dfn></dt>
	<dd>Short for manual.  For example, `man rm` will display information about the `rm` command.</dd>
</dl>

A useful reference if you'd like to see more detail about what specific characters mean when using them on the command line is [Chapter 3 of The Bash Reference Manual](http://tldp.org/LDP/abs/html/special-chars.html).



##Useful Keyboard Shortcuts

<dl>
	<dt><dfn>**Tab**</dfn></dt>
	<dd>Autocomplete a path.  When entering a long path name it can be tedious to type out, hitting tab will autocomplete as much of the filename as it can match from what you have already typed.  Hitting tab twice will show all options available that match what you have written.  This enables quicker traversing of folders and files.</dd>

	<dt><dfn>**↑ (Up Arrow)**</dfn></dt>
	<dd>Toggles trough previously entered commands.  Useful for repeating long commands that are still in the terminal history.</dd>

	<dt><dfn>**Alt + ← or →  (Left or Right Arrow)**</dfn></dt>
	<dd>Skips word. Useful when navigating through long commands you have typed.</dd>

	<dt><dfn>**Alt + Mouse click**</dfn></dt>
	<dd>Holding down the Alt key and then using your mouse enables you to move your cursor to a specific part of the typed command.  Useful when needing to edit commands that are quite long.</dd>

	<dt><dfn>**Cmd + T**</dfn></dt>
	<dd>Opens up a new terminal window in a separate tab.</dd>

	<dt><dfn>**Cmd + Shift + ← or → (Left or Right Arrow)**</dfn></dt>
	<dd>Navigate between open terminal tabs.</dd>

	<dt><dfn>**Ctrl + C**</dfn></dt>
	<dd>Stop Process from running.  Useful when running grunt or git commands for example if you realise you don't want them to run after executing them.</dd>

	<dt><dfn>**Ctrl + Z**</dfn></dt>
	<dd>Quit process.  Different to `Ctrl + C` as the process doesn’t stop – it will still run in the background.</dd>

	<dt><dfn>**Ctrl + R**</dfn></dt>
	<dd>Search through your terminal history.  Let’s you start typing to find a command you have previously written.  Hugely useful for recalling longer commands you have previously written.</dd>
</dl>


##Building on the basics

<dl>

	<dt><dfn>**clear**</dfn></dt>
	<dd>
		<p>Clears the current window, although you will still be able to scroll back up to see your history.  You can also use `Ctrl + L` as a shortcut.</p>
		<p>If you use iTerm (see later in article), you can also clear the screen with `Cmd + K`</p>
	</dd>

	<dt><dfn>**!!**</dfn></dt>
	<dd>Repeat the previous command executed.  For example, if you needed to repeat the previous command with admin privileges, you could type `sudo !!`.</dd>

	<dt><dfn>**&&**</dfn></dt>
	<dd>Lets you chain commands.  So `cd Sites/AshsFolder && mkdir css` will change the directory to the Folder “Sites/AshsFolder” and create a new folder called "css".</dd>

	<dt><dfn>**killall**</dfn></dt>
	<dd>Kills an Application dead.  So for example, typing `killall Finder` will restart all Finder windows.</dd>

	<dt><dfn>**caffeinate**</dfn></dt>
	<dd>Prevents Mac from sleeping.</dd>

	<dt><dfn>**-v**</dfn></dt>
	<dd>
		<p>Requests the version of the operator being called.  So `ruby -v` will display the version of ruby installed.</p>
		<p>Sometimes, packages can use a slightly different terminology such as Git which uses `git —version`.</p>
	</dd>

	<dt><dfn>**ping**</dfn></dt>
	<dd>Will attempt to ping a web server and give a response.  Ping sends very small bits of information over a network to a remote computer, timing how long it takes for a response to be received.  So typing `ping www.bbc.co.uk` attempts to get a response from www.bbc.co.uk and will tell you the response time.  Useful for checking if a server is responding or to find the external IP of a web address.</dd>

	<dt><dfn>**top**</dfn></dt>
	<dd>View all active processes.</dd>

	<dt><dfn>**grep**</dfn></dt>
	<dd>Find text inside files.</dd>

	<dt><dfn>**Find local IP Address**</dfn></dt>
	<dd>`ipconfig getifaddr en1`</dd>

	<dt><dfn>**Find external IP Address**</dfn></dt>
	<dd>`curl ipecho.net/plain; echo`</dd>

	<dt><dfn>**View file system usage in realtime**</dfn></dt>
	<dd>`sudo fs_usage`</dd>

	<dt><dfn>**Changing system preferences**</dfn></dt>
	<dd>
		<p>You can change all sorts of OSX preferences straight from your command line.  If you know about [dotfiles](http://dotfiles.github.io/), then an OSX dotfile simply runs a set of bash commands on your command line to make a set of preference changes.
		<p>For example, to show hidden files and folders in Finder windows, you can run this command in your terminal – `defaults write com.apple.finder AppleShowAllFiles -bool TRUE; killall Finder`.</p>
		<p>To see more examples of preference command line, [checkout my OSX dotfile](https://github.com/ashleynolan/dotfiles/blob/master/.osx).</p>
	</dd>
</dl>


##Aliases

Aliases are a godsend for making short work of commonly used commands.  They are basically a way of creating a shorthand of a longer command, so that you can then type the shorter command in order to execute it.

 I have written a separate article about [how to create terminal aliases and functions](/blog/beginners-guide-to-terminal-aliases-and-functions), so if you're interested in finding out more, go take a look.

##iTerm

An emulator for the default terminal provided by Mac OSX, iTerm provides extra features that the default terminal doesn't.

Especially useful for creating profiles – shortcuts for common directories and commands – and providing split pane views, a number of its features are [detailed on its site](http://www.iterm2.com/#/section/features).

If you want to know more about iTerm, [checkout its website](http://www.iterm2.com/).


 ##…and finally, for shits and giggles

<dl>
	<dt><dfn>**See your most used terminal commands**</dfn></dt>
	<dd>`history | awk '{print $2}' | awk 'BEGIN {FS="|"}{print $1}' | sort | uniq -c | sort -nr | head`</dd>

	<dt><dfn>**Shutdown your Mac with a delay**</dfn></dt>
	<dd>Useful for when you have a grudge that needs satisfying; `sudo shutdown -r +60`.</dd>
</dl>


##Got any more?

I’m always interested in seeing what terminal commands people find most useful, so if you haveof a command that you can’t live without, I’d love to hear about it in the comments!


{{/markdown}}