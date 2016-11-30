---
layout: post.hbs

title: The State of Front-End Tooling – 2015
url: frontend-tooling-survey-2015-results
description: "I asked front-end developers to fill in a survey about their their knowledge and usage patterns across a number of front-end tools.  Check out the results."

date: September 08, 2015
posted: 2015-09-08T10:00
updated: 2016-11-30T17:45

post:
- post

published: true

categories:
  - "Web Development"
  - "Tooling"

---

{{#markdown}}

---

**Update 30/11/2016**

If you’re interested in finding out more details about current Front-End Tooling trends, [I’ve now published the results from the 2016 Edition of this Survey](/blog/frontend-tooling-survey-2016-results).

---

**Update 12/10/2015** – Thanks to the incredible response to the survey!

Since putting the article live last month, responses to the survey have flooded in – so much so that SurveyMonkey almost bankrupted me! ;)  I closed the survey with a total of **2028** responses and have now updated the article and data to reflect this.

Interestingly, the results haven’t changed all that much from the initial results I published (based on 648 responses) – in fact the majority have only moved a couple of percent without affecting what can be drawn from the responses.

I hope to run the survey again next year, to compare and see how current trends evolve, so if you’d like to be informed of when that happens, or have any questions regarding these results, [follow me or drop me a message on Twitter](https://twitter.com/AshNolan_).

---

A couple of weeks ago, [I put out a request for front-end developers](https://twitter.com/AshNolan_/status/636499157079998464) to fill-out a very brief survey on front-end tooling.

The aim?  I simply wanted to find out more information about current knowledge and usage levels across the community.  I often hear that Sass is now the defacto preprocessor of choice, or that {insert JS framework here} is the latest and greatest thing since sliced bread, but I’ve often wondered how that would be reflected if I could ask developers directly about what tools they have knowledge of and use in their projects.

Before I put the survey together, I was pretty conservative in terms of the number of responses I was aiming to reach.  People are busy actually doing work and getting them to fill out a survey without any tangible reward can be a pretty hard sell.  However, at the time of writing this article, I’ve had an incredible **2028 responses** – easily surpassing my modest expectations!  Thanks to all those who took the time to fill in the survey – I really do appreciate it.

So, it’s time to go through the results!  Grab yourself a cup of tea/coffee and let’s take a look…

---

## Pre-amble Disclaimer

These results represent a small sample of front-end developers working in the industry – therefore, they shouldn’t be taken as gospel, simply as pointing towards a rough trend.

---

 ## Q1 – Preprocessors

The first question I asked was **What is your CSS Preprocessing tool of choice?**

The possible answers included all the usual suspects, however I chose to leave PostCSS off the list of answers simply as I didn’t want to confuse anyone who uses PostCSS in addition to another preprocessor in their workflow.  I figured people who did solely use PostCSS would use the 'Other' option to specify this.

Here are the results:

<table class="table table--bordered">
	<thead>
		<tr>
			<th>Preprocessor</th>
			<th>Number of Votes</th>
			<th>Percentage</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<th>Sass</th>
			<td>1297</td>
			<td>63.95%</td>
		</tr>
		<tr>
			<th>Less</th>
			<td>308</td>
			<td>15.19%</td>
		</tr>
		<tr>
			<th>Stylus</th>
			<td>76</td>
			<td>3.75%</td>
		</tr>
		<tr>
			<th>No Preprocessor</th>
			<td>305</td>
			<td>15.04%</td>
		</tr>
		<tr>
			<th>Other</th>
			<td>42</td>
			<td>2.07%</td>
		</tr>
	</tbody>
</table>

<div class="img">
	<div class="adaptive-image" data-adaptive="" data-adaptive-image-breakpoints="320 500" data-alt="What is your CSS Pre-Processing tool of choice? – Pie Chart showing the results" data-img-320="/assets/img/blog/tooling-survey/2015/q1-small.jpg" data-img-500="/assets/img/blog/tooling-survey/2015/q1-mid.jpg" data-img-max="/assets/img/blog/tooling-survey/2015/q1.jpg">
		<noscript>
			<img src="/assets/img/blog/tooling-survey/2015/q1.jpg" width="720" height="500" alt="What is your CSS Pre-Processing tool of choice? – Pie Chart showing the results" />
		</noscript>
	</div>
</div>

As you can see, Sass was the preprocessor of choice for the majority of respondents with **63.95%**.  Only 15.04% of those questioned use no preprocessing tool when authoring their CSS, indicating that we may now be close to 'peak preprocessor adoption'!

One thing that I would take away from these results is that CSS preprocessing is without a doubt a skill that all front-end developers should learn if they haven’t got experience in this area already, as most projects and job roles will require it.

Of those who specified 'Other', 29 respondents (1.4%) specified that they use PostCSS as their preprocessor of choice.

---

## Q2 – PostCSS and Rework

Next, I wanted to find out how many devs had heard of so called 'post-processing' tools such as PostCSS or Rework.  I therefore asked **Have you heard of the following CSS processing tools?**

The results were as follows:

<div class="table-wrapper">
	<table class="table table--bordered">
		<thead>
			<tr>
				<th></th>
				<th>Heard of/Read About</th>
				<th>Used a little</th>
				<th>Feel Comfortable Using</th>
				<th>Never Heard of</th>
			</tr>
		</thead>
		<tbody>
			<tr>
				<th>PostCSS</th>
				<td>47.78% (969)</td>
				<td>9.32% (189)</td>
				<td>7.15% (145)</td>
				<td>35.75% (725)</td>
			</tr>
			<tr>
				<th>Rework</th>
				<td>19.03% (386)</td>
				<td>1.53% (31)</td>
				<td>0.69% (14)</td>
				<td>78.75% (1,597)</td>
			</tr>
		</tbody>
	</table>
</div>

<div class="img">
	<div class="adaptive-image" data-adaptive="" data-adaptive-image-breakpoints="320 500" data-alt="Have you heard of the following CSS processing tools? – Pie Chart showing the results" data-img-320="/assets/img/blog/tooling-survey/2015/q2-small.jpg" data-img-500="/assets/img/blog/tooling-survey/2015/q2-mid.jpg" data-img-max="/assets/img/blog/tooling-survey/2015/q2.jpg">
		<noscript>
			<img src="/assets/img/blog/tooling-survey/2015/q2.jpg" width="801" height="282" alt="Have you heard of the following CSS processing tools? – Pie Chart showing the results" />
		</noscript>
	</div>
</div>

Looking at the raw results, 64.25% of respondents had either heard of or used PostCSS, compared with just 21.25% for Rework.  Only a small percentage of developers responding said that they felt comfortable using either tool.

Analysing the results further across both tools, 690 devs (just over 34%) said they hadn’t heard of either PostCSS or Rework, compared to 147 devs (7.2%) who said they felt comfortable using at least one of the two tools.

I think these results reflect how new an area this is for many front-end developers and I would expect these numbers to rise in the future.

---

## Q3 – Task Runners

Next up was one of the questions I was most interested in seeing the results to – **What task runner do you prefer using, if any, in your typical project workflow?**

Looking at the NPM download stats, Grunt is downloaded roughly 1.45 million times a month, with Gulp having 1.34 million, so in terms of shear usage stats, they seem very equal, although there seems to have been a shift towards people moving to using Gulp over Grunt recently.

So what did the survey results say?

<table class="table table--bordered">
	<thead>
		<tr>
			<th>Task Runner</th>
			<th>Number of Votes</th>
			<th>Percentage</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<th>Gulp</th>
			<td>888</td>
			<td>43.79%</td>
		</tr>
		<tr>
			<th>Grunt</th>
			<td>559</td>
			<td>27.56%</td>
		</tr>
		<tr>
			<th>NPM</th>
			<td>64</td>
			<td>3.16%</td>
		</tr>
		<tr>
			<th>Broccoli</th>
			<td>22</td>
			<td>1.08%</td>
		</tr>
		<tr>
			<th>Other</th>
			<td>99</td>
			<td>4.88%</td>
		</tr>
		<tr>
			<th>Don’t Use a Task Runner</th>
			<td>396</td>
			<td>19.53%</td>
		</tr>
	</tbody>
</table>

<div class="img">
	<div class="adaptive-image" data-adaptive="" data-adaptive-image-breakpoints="320 500" data-alt="What task runner do you prefer using, if any, in your typical project workflow? – Pie Chart showing the results" data-img-320="/assets/img/blog/tooling-survey/2015/q3-small.jpg" data-img-500="/assets/img/blog/tooling-survey/2015/q3-mid.jpg" data-img-max="/assets/img/blog/tooling-survey/2015/q3.jpg">
		<noscript>
			<img src="/assets/img/blog/tooling-survey/2015/q3.jpg" width="720" height="500" alt="What task runner do you prefer using, if any, in your typical project workflow? – Pie Chart showing the results" />
		</noscript>
	</div>
</div>

Somewhat surprisingly, Gulp came out a fair distance ahead with **43.79%** of respondents saying they preferred using it compared with just **27.56%** for Grunt.

19.5% of respondents said that they don’t use a task runner at all on their projects – signifying that the majority of front-end developers are seeing the benefits of using a task runner to help keep consistency across projects and teams.

---

## Q4 – Knowledge of JavaScript Libraries and Frameworks

Another question that really interested me was current knowledge levels across the most popular JavaScript libraries and frameworks, so this question was for respondents to indicate their experience levels in each.

Here is how people responded:

<div class="table-wrapper">
	<table class="table table--bordered">
		<thead>
			<tr>
				<th></th>
				<th>Heard of/Read About</th>
				<th>Used a little</th>
				<th>Feel Comfortable Using</th>
				<th>Never Heard of</th>
			</tr>
		</thead>
		<tbody>
			<tr>
				<th>jQuery</th>
				<td>1.4% (28)</td>
				<td>7.2% (146)</td>
				<td>91.4% (1,854)</td>
				<td>0% (0)</td>
			</tr>
			<tr>
				<th>Underscore</th>
				<td>34.5% (700)</td>
				<td>20% (406)</td>
				<td>35.4% (718)</td>
				<td>10.1% (204)</td>
			</tr>
			<tr>
				<th>Backbone</th>
				<td>60.8% (1,234)</td>
				<td>21.1% (427)</td>
				<td>16.2% (328)</td>
				<td>1.9% (39)</td>
			</tr>
			<tr>
				<th>AngularJS</th>
				<td>36.9% (748)</td>
				<td>33.5% (680)</td>
				<td>29.1% (590)</td>
				<td>0.5% (10)</td>
			</tr>
			<tr>
				<th>Ember</th>
				<td>78.7% (1,595)</td>
				<td>13.1% (265)</td>
				<td>4% (82)</td>
				<td>4.2% (86)</td>
			</tr>
			<tr>
				<th>React</th>
				<td>61.8% (1,253)</td>
				<td>19.9% (404)</td>
				<td>14.3% (290)</td>
				<td>4% (81)</td>
			</tr>
			<tr>
				<th>Polymer</th>
				<td>70.4% (1,429)</td>
				<td>11.4% (231)</td>
				<td>2.5% (50)</td>
				<td>15.7% (318)</td>
			</tr>
			<tr>
				<th>Knockout</th>
				<td>65.2% (1,321)</td>
				<td>9.7% (197)</td>
				<td>6.1% (124)</td>
				<td>19% (386)</td>
			</tr>
		</tbody>
	</table>
</div>

<div class="img">
	<div class="adaptive-image" data-adaptive="" data-adaptive-image-breakpoints="320 500" data-alt="Please indicate which JavaScript libraries and/or frameworks you have experience in – Pie Chart showing the results" data-img-320="/assets/img/blog/tooling-survey/2015/q4-small.jpg" data-img-500="/assets/img/blog/tooling-survey/2015/q4-mid.jpg" data-img-max="/assets/img/blog/tooling-survey/2015/q4.jpg">
		<noscript>
			<img src="/assets/img/blog/tooling-survey/2015/q4.jpg" width="750" height="330" alt="Please indicate which JavaScript libraries and/or frameworks you have experience in – Pie Chart showing the results" />
		</noscript>
	</div>
</div>

Unsurprisingly, jQuery was the JavaScript library or framework with the highest percentage – **91.4%** – of respondents saying that they felt comfortable using it.  In terms of pure knowledge levels it was by far the most far-reaching of any of the libraries or frameworks listed.

Looking down the list of JS frameworks, Angular came out on top in terms of the number of developers (29.1%) who said they felt comfortable using it.  16.2% of respondents said they felt comfortable using Backbone, with 14.3% saying the same for React.

Looking at knowledge levels across the MV* frameworks – so everything in the list except jQuery and Underscore – just over 50% of respondents (1018) said they felt comfortable using at least one of these frameworks.  Clearly being able to develop using at least one of these is an increasingly important skill for any front-end developer to have in their toolkit.

One addition I would like to make if I ever run this survey again would be to see how many devs had started using ES2015 features – I’m sure this will be an area of huge growth and it will be interesting to see how the amount of knowledge in this area increases over time.

{{> promos promo='react' }}

## Q5 – Which JavaScript library or framework do you use on the majority of your projects?

The next question was a late addition to the survey, as it was something I wished I had asked from the start.  Because of this, there were slightly fewer – 1415 – responses.

The question was **Which JavaScript library or framework do you use on the majority of your projects?**

Here are the results:

<table class="table table--bordered">
	<thead>
		<tr>
			<th></th>
			<th>Number of Votes</th>
			<th>Percentage</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<th>None – I just use native JS</th>
			<td>120</td>
			<td>8.48%</td>
		</tr>
		<tr>
			<th>jQuery</th>
			<td>799</td>
			<td>56.47%</td>
		</tr>
		<tr>
			<th>AngularJS</th>
			<td>253</td>
			<td>17.88%</td>
		</tr>
		<tr>
			<th>React</th>
			<td>124</td>
			<td>8.76%</td>
		</tr>
		<tr>
			<th>Backbone</th>
			<td>42</td>
			<td>2.97%</td>
		</tr>
		<tr>
			<th>Ember</th>
			<td>34</td>
			<td>2.40%</td>
		</tr>
		<tr>
			<th>Knockout</th>
			<td>21</td>
			<td>1.48%</td>
		</tr>
		<tr>
			<th>Underscore</th>
			<td>18</td>
			<td>1.27%</td>
		</tr>
		<tr>
			<th>Polymer</th>
			<td>4</td>
			<td>0.28%</td>
		</tr>
		<tr>
			<th>Other (please specify)</th>
			<td>0</td>
			<td>0%</td>
		</tr>
	</tbody>
</table>

<div class="img">
	<div class="adaptive-image" data-adaptive="" data-adaptive-image-breakpoints="320 500" data-alt="Which JavaScript library or framework do you use on the majority of your projects? – Pie Chart showing the results" data-img-320="/assets/img/blog/tooling-survey/2015/q5-small.jpg" data-img-500="/assets/img/blog/tooling-survey/2015/q5-mid.jpg" data-img-max="/assets/img/blog/tooling-survey/2015/q5.jpg">
		<noscript>
			<img src="/assets/img/blog/tooling-survey/2015/q5.jpg" width="720" height="500" alt="Which JavaScript library or framework do you use on the majority of your projects? – Pie Chart showing the results" />
		</noscript>
	</div>
</div>

jQuery was the most used library or framework by quite some distance, with 56.47% (799 responses), followed by Angular with 17.88% (253).

It’s interesting to see that most of the respondents still use jQuery on the majority of their projects – I would expect this number to decrease over time as people’s knowledge of ES2015 increases and move back towards using native JavaScript and smaller micro libraries.  Of course, there’s always the possibility that jQuery continues to adapt to the changing landscape and is therefore still used by developers.


{{> promos promo='es6' }}


## Q6 – JavaScript Module Bundlers

Module bundlers are something I’ve been using for some time, but I wanted to know if the majority of front-end devs were also using them, and if so, which tool?

The question I therefore asked was **Do you use a JavaScript module bundler in your workflow?**

Responses were as follows:

<table class="table table--bordered">
	<thead>
		<tr>
			<th>Module Bundler</th>
			<th>Number of Votes</th>
			<th>Percentage</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<th>I don’t use a module bundler</th>
			<td>1093</td>
			<td>53.9%</td>
		</tr>
		<tr>
			<th>Browserify</th>
			<td>334</td>
			<td>16.47%</td>
		</tr>
		<tr>
			<th>RequireJS</th>
			<td>273</td>
			<td>13.46%</td>
		</tr>
		<tr>
			<th>Webpack</th>
			<td>213</td>
			<td>10.5%</td>
		</tr>
		<tr>
			<th>JSPM</th>
			<td>45</td>
			<td>2.22%</td>
		</tr>
		<tr>
			<th>Other</th>
			<td>70</td>
			<td>3.45%</td>
		</tr>
	</tbody>
</table>

<div class="img">
	<div class="adaptive-image" data-adaptive="" data-adaptive-image-breakpoints="320 500" data-alt="Do you use a JavaScript module bundler in your workflow? – Pie Chart showing the results" data-img-320="/assets/img/blog/tooling-survey/2015/q6-small.jpg" data-img-500="/assets/img/blog/tooling-survey/2015/q6-mid.jpg" data-img-max="/assets/img/blog/tooling-survey/2015/q6.jpg">
		<noscript>
			<img src="/assets/img/blog/tooling-survey/2015/q6.jpg" width="720" height="500" alt="Do you use a JavaScript module bundler in your workflow? – Pie Chart showing the results" />
		</noscript>
	</div>
</div>

Overall, almost half of respondents (46.1%) are now using a module bundler to manage the dependencies in their JavaScript.  Of those, 16.47% use Browserify, 13.46% use RequireJS and 10.5% are using Webpack.  Webpack has been gaining a lot of traction of late and so it’s interesting to see that it isn’t all that far behind the two most well known tools in terms of usage.

It’ll again be interesting to see how these numbers change as more developers jump on the ES2015 bandwagon and start using the tools that lend themself well to transpiling JavaScript using Babel.

Overall though, it’s great to see so many developers embracing module bundlers and I’d fully expect the number of people using JS module bundlers to increase as knowledge levels continue to rise.

---

## Q7 – JavaScript Testing

Testing!  So, do people actually test their JavaScript, or is it still on everyones bucket list to setup on their project?

The question I asked was **What tool do you use to test your JavaScript? (if any)**

The results were as follows:

<table class="table table--bordered">
	<thead>
		<tr>
			<th>Tool</th>
			<th>Number of Votes</th>
			<th>Percentage</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<th>I don’t use a tool to test my JS</th>
			<td>1210</td>
			<td>59.66%</td>
		</tr>
		<tr>
			<th>Jasmine</th>
			<td>332</td>
			<td>16.37%</td>
		</tr>
		<tr>
			<th>Mocha</th>
			<td>305</td>
			<td>15.04%</td>
		</tr>
		<tr>
			<th>QUnit</th>
			<td>78</td>
			<td>3.85%</td>
		</tr>
		<tr>
			<th>Tape</th>
			<td>30</td>
			<td>1.48%</td>
		</tr>
		<tr>
			<th>Jest</th>
			<td>16</td>
			<td>0.79%</td>
		</tr>
		<tr>
			<th>Karma</th>
			<td>15</td>
			<td>0.74%</td>
		</tr>
		<tr>
			<th>Intern</th>
			<td>8</td>
			<td>0.39%</td>
		</tr>
		<tr>
			<th>Other</th>
			<td>34</td>
			<td>1.68%</td>
		</tr>
	</tbody>
</table>

<div class="img">
	<div class="adaptive-image" data-adaptive="" data-adaptive-image-breakpoints="320 500" data-alt="What tool do you use to test your JavaScript? (if any) – Pie Chart showing the results" data-img-320="/assets/img/blog/tooling-survey/2015/q7-small.jpg" data-img-500="/assets/img/blog/tooling-survey/2015/q7-mid.jpg" data-img-max="/assets/img/blog/tooling-survey/2015/q7.jpg">
		<noscript>
			<img src="/assets/img/blog/tooling-survey/2015/q7.jpg" width="720" height="500" alt="What tool do you use to test your JavaScript? (if any) – Pie Chart showing the results" />
		</noscript>
	</div>
</div>

So, the majority of respondents – **59.66%** – aren’t using any tool to help with their JavaScript testing.  Given how long the subject of testing in JavaScript has been around, I find this a surprisingly large percentage – but it is often the area that gets most overlooked in a project.

Of those testing their JS, the majority of respondents are using either Jasmine – 16.37% – or Mocha – 15.04%.

Looking at the answers entered when respondents choose the 'Other' option, it was a little disconcerting to see how many people had replied with linting tools such as JSLint and JSHint.  Although good for applying consistent code formatting, these aren’t tools that test the functionality of JavaScript code.

All in all, there’s obviously still a gap in developer knowledge when it comes to JS testing.

---

## Q8 – Miscellaneous Tools

The final question of the survey asked about tools typically used for package and workflow management, with me asking **Which of these tools do you have experience in?**

Here is how people responded:

<div class="table-wrapper">
	<table class="table table--bordered">
		<thead>
			<tr>
				<th></th>
				<th>Heard of/Read About</th>
				<th>Used a little</th>
				<th>Feel Comfortable Using</th>
				<th>Never Heard of</th>
			</tr>
		</thead>
		<tbody>
			<tr>
				<th>Bower</th>
				<td>23.27% (472)</td>
				<td>28.06% (569)</td>
				<td>45.36% (920)</td>
				<td>3.30% (67)</td>
			</tr>
			<tr>
				<th>Yeoman</th>
				<td>37.13% (753)</td>
				<td>30.57% (620)</td>
				<td>19.97% (405)</td>
				<td>12.33% (250)</td>
			</tr>
			<tr>
				<th>Ender</th>
				<td>28.55% (579)</td>
				<td>1.43% (29)</td>
				<td>0.54% (11)</td>
				<td>69.48% (1,409)</td>
			</tr>
			<tr>
				<th>NPM</th>
				<td>6.76% (137)</td>
				<td>19.63% (398)</td>
				<td>68.39% (1,387)</td>
				<td>5.23% (106)</td>
			</tr>
		</tbody>
	</table>
</div>

<div class="img">
	<div class="adaptive-image" data-adaptive="" data-adaptive-image-breakpoints="320 500" data-alt="Which of these tools do you have experience in? – Pie Chart showing the results" data-img-320="/assets/img/blog/tooling-survey/2015/q8-small.jpg" data-img-500="/assets/img/blog/tooling-survey/2015/q8-mid.jpg" data-img-max="/assets/img/blog/tooling-survey/2015/q8.jpg">
		<noscript>
			<img src="/assets/img/blog/tooling-survey/2015/q8.jpg" width="776" height="302" alt="Which of these tools do you have experience in? – Pie Chart showing the results" />
		</noscript>
	</div>
</div>

A large percentage of respondents felt comfortable using NPM and Bower, with a large number never having heard of Ender at all.

Knowledge of Yeoman – in my opinion, one of the most useful tools I use – was quite low in terms of those that feel comfortable using it (19.97%), although not many people had never heard of it (12.33%).  In my experience, putting in the time to grips with it is hugely worthwhile, as it makes setting up projects so simple.

---

## Summary

So, what can be summarised overall?  Well, it seems that the adoption rate of front-end tools across the board is pretty high.  If you’re someone who has been putting off learning more about workflow tools in whatever area, be it CSS, JavaScript module bundlers, or Task Runners, you are in the minority and these skills are now a very important part of being a front-end developer in 2015.

On the flip side, use of JavaScript testing tools seems to be lagging behind the adoption rate of tools in other areas – something that can only be solved by better edutcaion of how to use and integrate these tools into peoples projects and as importantly, how to write JavaScript that is easy to test.

If anyone has any questions about any of the results, or would like me to look at other cross sections of the responses, [message me on Twitter](https://twitter.com/AshNolan_) and I’ll do my best to help!

{{/markdown}}



