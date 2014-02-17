---
layout: post.hbs

title: Getting started with the OSX terminal – a developers guide
url: getting-started-with-terminal
description: "An intro guide to the terminal, going over my most commonly used shortcuts and commands."

posted: 2014-02-12T10:00

post:
- post

published: false

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

	<dt><dfn>**pwd**</dfn></dt>
	<dd>Displays the path of the current directory.  Useful for finding your location in your filesystem.</dd>

	<dt><dfn>**cp**</dfn></dt>
	<dd>Short for copy.  Used like so: cp /Users/Ash/originalfile.txt tmp/copiedfile.txt</dd>

	<dt><dfn>**ls**</dfn></dt>
	<dd>Short for list.  Lists all files in a directory  To view it as a vertical list use ls -l.  To view all files including hidden ones use ls -a</dd>

	<dt><dfn>**mv**</dfn></dt>
	<dd>Short for move.</dd>

	<dt><dfn>**rm**</dfn></dt>
	<dd>Short for remove (or delete).  To remove a folder use rm -rf folder-name</dd>

	<dt><dfn>**open**</dfn></dt>
	<dd>
		<p>Opens a file.</p>
		<p>`open .` opens the current directory in Finder.</dd>

	<dt><dfn>**man**</dfn></dt>
	<dd>Short for manual.  man rm will display information about the rm command</dd>

</dl>



##Building on the basics

<dl>

	<dt><dfn>**clear**</dfn></dt>
	<dd>Clears the current window – in OSX, you will still be able to scroll up to see what was there.  You can also use `Ctrl + L` as a shortcut for clear.</dd>

	<dt><dfn>**!!**</dfn></dt>
	<dd>Run the same command again.  So if you need to repeat the previous command with admin privileges type `sudo !!`</dd>

	<dt><dfn>**&&**</dfn></dt>
	<dd>Lets you chain commands.  So `cd Sites/AshsFolder && mkdir css` will change the directory to the Folder “AshsFolder” and create a new folder called “css”.  A contrived example, but you get the idea.</dd>

	<dt><dfn>**rename**</dfn></dt>
	<dd>Lets you rename a file or multiple files.  Very useful when renaming multiple images such as `rename 's/text_to_find/been_renamed/' *.txt`</dd>

	<dt><dfn>**killall**</dfn></dt>
	<dd>Kills an Application dead.  So typing killall Finder will restart all Finder windows.</dd>

	<dt><dfn>**caffeinate**</dfn></dt>
	<dd>Prevents Mac from sleeping.</dd>

	<dt><dfn>**-v**</dfn></dt>
	<dd>
		<p>Requests the version of the operator being called.  So `ruby -v` will request the version of ruby.</p>
		<p>Some commands use a slightly different terminology such as Git which uses `git —version`</p>
	</dd>

	<dt><dfn>**ping**</dfn></dt>
	<dd>Will attempt to ping a web server and give a response.  Ping sends very small bits of information over a network to a remote computer, timing how long it takes for a response to be received.  So typing `ping www.bbc.co.uk` attempts to get a response from www.bbc.co.uk and will tell you the response time.  Useful for checking if a server is responding or to find the external IP of a web address.</dd>

	<dt><dfn>**top**</dfn></dt>
	<dd>View all active processes.</dd>

	<dt><dfn>**grep**</dfn></dt>
	<dd>Find text inside files.</dd>


	<dt><dfn>**Find ipaddress**</dfn></dt>
	<dd>`ipconfig getifaddr en1`</dd>

	<dt><dfn>**Find external ip**</dfn></dt>
	<dd>`curl ipecho.net/plain; echo`</dd>

	<dt><dfn>**Show hidden files and folders**</dfn></dt>
	<dd>`defaults write com.apple.finder AppleShowAllFiles -bool TRUE
  killall Finder`</dd>

	<dt><dfn>**View file system usage**</dfn></dt>
	<dd>`sudo fs_usage`</dd>

</dl>



##Useful Keyboard Shortcuts

<dl>
	<dt><dfn>**tab**</dfn></dt>
	<dd>Autocomplete a path.  When entering a long path name it can be tedious to type out, hitting tab will autocomplete as much of the filename as it can match from what you have already typed.  Hitting tab twice will show all options available that match what you have written.  This enables quicker traversing of folders and files.</dd>

	<dt><dfn>**Arrow Up**</dfn></dt>
	<dd>Toggles trough previously entered commands.  Useful for repeating long commands that are still in the terminal history.</dd>

	<dt><dfn>**Alt + Arrow Left/Right**</dfn></dt>
	<dd>Skips word. Useful when navigating back through long commands you have typed</dd>

	<dt><dfn>**Alt + Mouse click**</dfn></dt>
	<dd>Holding down the Alt key and then using your mouse enables you to move your cursor to a specific part of the typed command.  Useful when needing to edit commands that are quite long.</dd>

	<dt><dfn>**Cmd + T**</dfn></dt>
	<dd>Opens up a new terminal window in a separate tab.</dd>

	<dt><dfn>**Cmd + Shift + Arrow Left/Right**</dfn></dt>
	<dd>Navigate between open terminal tabs</dd>

	<dt><dfn>**Ctrl + C**</dfn></dt>
	<dd>Stop Process</dd>

	<dt><dfn>**Ctrl + Z**</dfn></dt>
	<dd>Quit process (but process doesn’t stop, it will still run in the background).</dd>

	<dt><dfn>**Ctrl + R**</dfn></dt>
	<dd>Search through your terminal history.  Let’s you start typing to find a command you have previously written.  Hugely useful for searching for longer commands such as scp (see later on).</dd>

</dl>



##Aliases


Aliases are a godsend for making short work of commonly used commands.  They basically are a way of creating a shorthand of a longer command so you can then type the shorter command to execute it.

 I use aliases a lot when using git as it means instead of writing git commit “message here” I can simply write gc “Message here”.  Lazy, yes. Timesaving, muchos yes.


 ##…and finally, for shits and giggles

<dl>
	<dt><dfn>**See your most used terminal commands**</dfn></dt>
	<dd>`history | awk '{print $2}' | awk 'BEGIN {FS="|"}{print $1}' | sort | uniq -c | sort -nr | head`</dd>

	<dt><dfn>**Shutdown your Mac with a delay**</dfn></dt>
	<dd>`sudo shutdown -r +60`</dd>
</dl>



{{/markdown}}