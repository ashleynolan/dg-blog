---
layout: post.hbs

title: A Guide to the Front-End Interview Process
url: a-guide-to-front-end-interviews
description: "Having recently been an interviewer and interviewee, I wanted to put together a brief guide for those preparing to interview for front-end roles."

posted: 2015-07-01T09:30

post:
- post

published: true

categories:
  - "Web Development"

---

{{#markdown}}

One of my former bosses used to tell me that even if you aren’t actively looking for a job, it can be a good idea to go along to a job interview once in a while to keep yourself sharp.

Having very recently changed job myself, I can now see what he meant.

Interviewing for the first time in over 3 years was tough.  Although, as front-end developers, we’re very lucky to be working in an industry in which there are plenty of jobs available, the very best roles are – as expected – looking for the very best devs and the interview process can be very rigourous.

So I wanted to share what I have learned from my recent experiences as a candidate and previously as an interviewer.  Although my observations come from my experience with front-end roles, some of the points raised could easily be relevant when applying for any technical role.


## Refresh the basics

As someone who has led interviews in the past, I can verify just how difficult it can be to judge just how good a developer is by simply talking to them.

Interviewers only get to see a brief snapshot of you and your work.  This is especially true when the first stage of an application is over the phone.  This inevitably means that you will be asked a variety of questions to roughly gauge your ability.  No matter how good you may be when it comes to writing code, if you can’t answer questions on some fundamental topics, then chances are the interview won’t go very well.

The problem with this is that developers rarely have to explain the basics in their day-to-day jobs, as it’s what could be thought of as ** *implied knowledge* **.  By this I mean that it’s knowledge that all front-end developers should have, but can be so fundamental to the work we do that we simply take it for granted; so much so that explaining it verbally can be awkward or unfamiliar.

 For example, how many times recently have you had to explain out loud the difference between using `position: relative`, `position: absolute` and `position: fixed`?  My guess would be not very often. This is a fundamental piece of knowledge for any front–end developer, but ensuring you can effectively convey your understanding in areas such as this is key.

Here are a few examples of front-end specific questions that I have been asked during recent interviews:

- Explain the box-model and how it affects various CSS properties.
- What is the difference between `display: block`, `display: inline` and `display: inline-block`?
- What is a normal HTTP request made up of?
- List some common HTTP response codes and describe what they mean.
- Describe some of the steps you might take to ensure your website is accessible.
- What is BEM and explain why using something like it could be useful in your CSS?

While JavaScript specific questions included:

- Explain the concept of closure and what it is used for.
- What does the ` $ ` represent when using jQuery?
- Explain the `this` keyword and it’s behaviour in JS.
- What is the difference between the `DOMContentLoaded` and `window.load` events?
- Give a brief overview of any JavaScript frameworks that you know of or have used, providing examples of the kind of projects that they could be best suited towards.

Questions such as these act as the baseline for any front-end interview, therefore being able to answer examples like these correctly and succinctly is something that you should practice before any interview.

The HTML5 boilerplate team maintains a [more exhaustive list](https://github.com/h5bp/Front-end-Developer-Interview-Questions) of possible interview questions for front–end devs – I highly recommend checking it out.


## Know what’s current

It may sound obvious, but make sure you are up-to-date with the current hot topics in front-end development.

For example, if you were to go to a front-end interview right now, you would almost certainly be asked a question on the subject of JS frameworks.

Even if you’ve never used one, make sure that you know what’s out there and the type of projects that are best suited to each one.  There’s no right or wrong answer to the question 'What’s your favourite JS framework?' (some people may disagree!).  If I was asking that question, I’d expect the candidate to be objective and to be to able explain the pros and cons of the frameworks that they knew about.

Other currently talked about topics include Responsive Images, Element Queries, Build Tools (such as Grunt and Gulp), CSS Naming Schemes and Methodologies, Web Components and front-end performance, to name just a few.  Also check out Rebecca Murphy’s excellent [baseline for JavaScript developers](http://rmurphey.com/blog/2015/03/23/a-baseline-for-front-end-developers-2015/), for more details around JS specific knowledge you are likely to need to know about.

If you like to keep on top of this kind of stuff – which if you’re reading this post, you likely do – you’ll be in a great position come interview time.


## Admit what you don’t know

The best interviewers will not only be looking for what you _do_ know, but also what you _don’t_.

Part of working effectively with others is knowing when to be able to ask for help from those around you when needed.  I’ve found that the better the role I have applied for, the more likely it will be that the interviewer(s) will look to explore topics that I clearly have less experience on.

The goal of this type of questioning is to see how far the candidate needs to be questioned before they stop looking for the 'correct' answer – of which there sometimes isn’t one – and concedes that they don’t know and should ask someone else for advice on the subject.  Not only does this show more humility towards the candidates own ability, but it also gives the impression that they would be less likely to relentlessly plough on attempting to solve a problem themselves when the best option would be to ask for some help.

A classic example of this was actually during my interview with Just Eat (aka my new employer).  At one stage in the process I was asked to sketch and explain how I would structure a takeaway ordering application – right through to envisaging the sort of database structure the system might need.

Interviewing for a UI development role this question was designed to take me out of my comfort zone to see how I would try to solve problems that I wouldn’t have all the answers to.  As the conversation went deeper into specifics, the more I struggled to find concrete solutions.  I finally concluded that it would be advisable to ask those with more specialist experience to explore some of my assumptions around databases and server scaling.  This is completely understandable – I would be working with people specialising in these areas, so trying to solve these problems myself would be pretty futile.

It’s ok not to know things – the best front-end developers in the world don’t know everything about all aspects of the web.  If you definitely don’t know the answer to a question, it’s much better to admit it rather than trying to fabricate a solution.


## Practice Live Coding

As teams can potentially be remotely located, the chance of having a job interview via Skype or Google Hangouts increases.  One tool that has become increasingly popular in interviews is live coding.

The concept is pretty simple – the candidate is asked to live code the solution to a programming question while explaining their thinking out loud to the interviewer.  Simple enough, but this comes more naturally to some devs than others. If you’ve ever pair programmed, you’ll probably be very comfortable as the experience can be pretty similar.

If you’ve never done something like this before, make sure you practice it beforehand.  Use an online editor such as [CodePen](http://codepen.io/) or [JSBin](http://jsbin.com/?html,output), as usually these tests will utilise a similar online text editor.  If you have a friend who is happy to help you out, put them in the position of interviewer and let them provide feedback on areas you could improve upon.

Companies will likely tell you beforehand if they’re expecting you to live code, so if this does happen just make sure you prepare in the right way.


## Show your passion

This is the one facet that I used to look for most whenever I conducted interviews.

Personally, I love working with developers who are passionate about the industry we work in.  If I interviewed Developer A with 10 years experience, but they couldn’t tell me anything about future standards on the web, or Developer B with just a couple of years experience but could talk about web components and ES6 all day long, I’d want to work with developer B.

The best front-end developers I know don’t read about future web standards and articles because they have to – they do it because they love learning about the latest developments in what we do.  They will happily lose an entire evening playing with an emerging CSS property or latest JavaScript framework.  They see their work as a hobby.

This passion is impossible to teach and so if someone has it, they will always be sought after when looking for new roles.  The hard part can be showing it when you’re starting out – make sure you put your projects on [Github](https://github.com/) or [CodePen](http://codepen.io/) so you can send links in with your application, or blog about the things that you’re most passionate about.  The more visible you make your skills, the more you will stand out from the crowd.



## Basic CS knowledge

There was one final aspect of interviewing that took me a little by surprise – an emphasis on basic Computer Science (CS) knowledge.

One interview in particular took this area very seriously.  While on a live coding interview over Skype, I was asked to explain the complexity of the JavaScript code I was writing using [Big O notation](https://rob-bell.net/2009/06/a-beginners-guide-to-big-o-notation/), while offering alternatives that may improve upon that complexity and why it is more or less efficient.

I’m lucky to have a background in CS and so knew what this meant, but was nonetheless surprised that this formed part of an interview for a front-end development role – perhaps a sign of how far the expectation for JavaScript developers has moved on in the past few years.

I would caveat this point by saying that I by no means think that this is required learning for all front-end interviews.  However, when going for roles with companies renowned for their rigorous interview process – or more JavaScript focussed roles – you are highly likely to be asked questions in relation to code complexity and algorithms.  This could involve explaining some common sorting algorithms, the differences between data storage techniques, recursion and some other common CS concepts such as State Machines.


## Summary

Interviewers ultimately want you to be successful – they aren’t trying to set you up to fail.  These points should help you focus on some of the key areas that you should prepare for.

I’ve avoided going over general interview advice, but make sure you do the expected groundwork around knowing a bit about what the company you’re applying for actually does – it usually helps!

If you’ve had any recent experiences interviewing for front-end positions which you’d like to share, I’d love to hear from you in the comments.




{{/markdown}}
