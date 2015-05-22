#Preprocessor responsibility

CSS pre-processors have become an essential tool in my workflow over the last 18 months.  I'll be the first to admit that I was dubious at the start; I should have tried using them at least 6 months before I actually did, but could instead be heard shouting (in my head at least) that "CSS is meant to be simple to understand, why complicate it?!?!11!".

I admit now that I was pretty horrendously wrong to put it off, and I can't imagine not having the power of SASS to call on when I need it.

But there's one tiny part of the preprocessor revolution that still doesn't sit right with me; there seems to be a worrying trend of simply not caring about the CSS the preprocessor actually compiles for you.  I think all front end developers have a responsibility to care and not just take the path of least resistance because a preprocessor makes it easy to do so.

So I thought I'd write down the key values I try to keep at the back of my mind whenever I'm using a preprocessor.  I'll be using SASS to illustrate my points, but most should translate over to other preprocessors.  They are intended to make sense from more than simply a CSS purity viewpoint, and should help you write better SASS code, which is more maintainable and better structured.


## To extend or not to extend

I thought I'd start with my biggest bug bear of SASS - it's @extends functionality.  CSS actually gives you this functionality out of the box - it's called a class.  If you want to extend a button to be a different type of button you can write this snippet of HTML:

<a class="btn btn-dummy">My button</a>

Two classes, one class for the base style, one class to extend on that base.  Job done.

In my opinion, @extends gets overused because preprocessors make it so easy to do so.  Writing @extends is undoubtably easier than having to give a bit of thought to the stucture of your CSS and how one class could extend upon another.  Stucturing CSS classes in this way makes a lot of sense though - it means you hav clearly defined modules and structures, that will be much more robust if you need to extend them further in the future.

, it's just a bit misunderstood in my opinion (a bit like !important)

@extends isn't completely without it's uses - there are some situations where @extends comes in very handy.  If you don't have full control over your HTML, which can happen when developing for some CMS's, @extends can get you out of jail when it's a lot harder to add an extending class.

But when you do have complete control over your HTML, it makes a lot more sense to extend using classes; it's more native and it makes the markup much more clear in terms of what modules are extensions of a base class.

It also makes a lot of sense when it comes to debugging your CSS in dev tools.  When using @extends, you can easily end up with  

### Nesting

Nesting gives us all kinds of crazy power we always wished we had had in the past.  For being able to group declarions, it's a lifesaver, and helps to keep our SASS very well structured in comparison to how it would look if we were writing it in basic CSS.

Nesting can however accentuate CSS's most difficult trait; specificity. It is very easy to dig yourself into specificity problems using nesting that can then be very hard to get out of down the line.

As a general rule of thumb, I tend to think that if I'm writing nested selectors more than 3 levels deep, that's too far and I should re-evaluate my markup.  Adding an extra class to hook onto at a lower level in your markup is preferable to writing deep nested selectors and will stop you running into these issues down the line.

