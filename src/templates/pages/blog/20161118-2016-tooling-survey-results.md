---
layout: post.hbs

title: The State of Front-End Tooling 2016 - Results
url: frontend-tooling-survey-2016-results
description: "The results of the 2016 Front-End Tooling Survey are out! Check out the results and analysis of the responses here."

date: November 29, 2016
posted: 2016-11-29T14:00
updated: 2019-04-09T14:00

post:
- post

published: true

categories:
  - "Web Development"
  - "Tooling"

---

{{#markdown}}

---

**Update 12/09/2019**

The results for the 2019 edition of the Front-end Tooling Survey are now available. If you'd like to view them, [check them out here](/blog/frontend-tooling-survey-2019-results).

---

**Update 06/01/2017**

Since publishing the initial results, I've closed the survey after receiving 5,254 responses and updated the article and results data to reflect this.

---

About a month ago, I put out the [2016 Front-End Tooling Survey](http://ashn.uk/survey-tooling-2016).  The response has been *phenomenal* – to date, 4,715 developers have taken the time to fill it in.  **Thank you** to all of you who have taken the time to do so.

Continuing on from [last years survey](/blog/frontend-tooling-survey-2015-results), the aim was pretty straight-forward; To find out more details about the tools front-end developers are currently using in their own workflows.  In our industry, it’s all too easy to take for granted what people are using based on your own knowledge.  This survey aims to give more of an insight into the current trends in front-end tooling from a broader perspective.

This year the survey was made up of 19 questions – up from 8 questions last year – covering a wide range of front-end tools and methodologies.


### Quick Thanks

This survey would have been a whole lot harder to put together without the support of Just Eat (my employer) and Wes Bos, who has kindly affiliated with this years survey, which has enabled me to spend more time analysing the results.

Wes is renowned for creating great learning materials for web developers.  His courses are a great place to start if you’re looking to learn more about topics such as [React](https://ReactForBeginners.com/friend/NOLAN) and [ES6](https://ES6.io/friend/NOLAN).  You’ll find links to some of Wes’ courses where relevant in the results.


### The results

So, without further ado, let’s take a look at the results!  Grab yourself a cup of tea/coffee and let’s take a look…

---

## Pre-amble Disclaimer

These results represent a sample of front-end developers working in the industry – therefore, they shouldn’t be taken as gospel, simply as pointing towards a rough trend.

---

## The responses

As I mentioned above, this years survey received 5,254 responses.  In comparison, when I released the first set of results in 2015, the survey had received just 648 responses which then rose to a final figure of 2,028 responses when the survey closed.  So that’s almost 2 and a half times the number of responses in comparison to last years final numbers, or a 132% increase for people who like percentages.

In terms of where the responses have come from, I posted the survey on Twitter, Reddit, HackerNews, DesignerNews, Echo.js, LinkedIn and Frontendfront.  It was also featured by a number of newsletters such as Responsive Design Weekly, Sitepoint Weekly and FrontEnd Focus, among others.

The reason I want to highlight these sources is to show that there has been a good spread of response across various channels; respondents haven’t all come from one social channel.

---

## Question Index

{{/markdown}}

<div class="no-external">

{{#markdown}}

1. [General Front-end Experience](#experience-general)
1. [CSS Knowledge Levels](#knowledge-css)
1. [CSS Processor Usage](#css-processors)
1. [CSS Processor Experience](#css-processor-experience)
1. [CSS Naming Schemes](#css-naming)
1. [CSS Linting](#css-linting)
1. [CSS Tool Experience](#css-tool-experience)
1. [CSS Methodologies and Naming Scheme Experience](#css-methodologies)
1. [CSS Tool Usage](#css-tool-usage)
1. [JavaScript Knowledge Levels](#js-knowledge)
1. [Task Runners](#js-task-runners)
1. [Knowledge of JavaScript Libraries and Frameworks](#js-frameworks)
1. [Most frequently used JS tools](#js-framework-usage)
1. [Most essential JS tool](#js-framework-essential)
1. [JavaScript Module Bundlers](#js-bundlers)
1. [JavaScript Transpilers](#js-transpilers)
1. [JavaScript Linting](#js-linters)
1. [JavaScript Testing](#js-testing)
1. [Miscellaneous Tools](#js-misc)

{{/markdown}}

</div>

{{#markdown}}

---

<a name="experience-general"></a>

 ## Q1 – General Front-end Experience

The first question I asked was to get an idea of the experience level of those responding; something that wasn’t recorded in last year’s survey.  The question was **Roughly how long have you been working with front-end technologies?**

Here are the results:

<table class="table table--bordered">
	<thead>
		<tr>
			<th>Answer</th>
			<th>Number of Votes</th>
			<th>Percentage</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<th>0-1 Year</th>
			<td>267</td>
			<td>5.08%</td>
		</tr>
		<tr>
			<th>1-2 Years</th>
			<td>670</td>
			<td>12.75%</td>
		</tr>
		<tr>
			<th>2-5 Years</th>
			<td>1,690</td>
			<td>32.17%</td>
		</tr>
		<tr>
			<th>5-10 Years</th>
			<td>1,452</td>
			<td>27.64%</td>
		</tr>
		<tr>
			<th>10-15 Years</th>
			<td>744</td>
			<td>14.16%</td>
		</tr>
		<tr>
			<th>Over 15 Years</th>
			<td>431</td>
			<td>8.20%</td>
		</tr>
	</tbody>
</table>

<div class="img img-tall">
	<div class="adaptive-image" data-adaptive="" data-adaptive-image-breakpoints="320 500" data-alt="Roughly how long have you been working with front-end technologies? – Pie Chart showing the results" data-img-320="/assets/img/blog/tooling-survey/2016/q1-small.jpg" data-img-500="/assets/img/blog/tooling-survey/2016/q1-mid.jpg" data-img-max="/assets/img/blog/tooling-survey/2016/q1.jpg">
		<noscript>
			<img src="/assets/img/blog/tooling-survey/2016/q1.jpg" width="720" height="500" alt="Roughly how long have you been working with front-end technologies? – Pie Chart showing the results" />
		</noscript>
	</div>
</div>

The majority of respondents said that they have been working with front-end technologies for either 2-5 years or 5-10 years, which together accounted for 59.80% (3,142) of responses.

Interestingly, there is an even split between those who have been working with front-end for up to 5 years (50%) when compared to those with over 5 years experience (50%).  Positively, this implies that the results of the survey come from a fairly even distribution of experience levels.

---

<a name="knowledge-css"></a>

## Q2 – CSS Knowledge

The second question was a subjective look at how respondents rated their own knowledge of CSS.

It goes without saying that this question is pretty relative, as this can be interpreted differently by each respondent as well as relying on a level of modesty when it comes to rating your own skill level – but it is none-the-less interesting to see the results!

The question was **How do you rate your own knowledge of CSS and its associated tools and methodologies?**

Here’s what the responses looked like:

<table class="table table--bordered">
	<thead>
		<tr>
			<th>Level</th>
			<th>Number of Votes</th>
			<th>Percentage</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<th>Beginner</th>
			<td>83</td>
			<td>1.58%</td>
		</tr>
		<tr>
			<th>Novice (between Beginner and Intermediate)</th>
			<td>483</td>
			<td>9.19%</td>
		</tr>
		<tr>
			<th>Intermediate</th>
			<td>1,428</td>
			<td>27.18%</td>
		</tr>
		<tr>
			<th>Advanced (between Intermediate and Expert)</th>
			<td>2,420</td>
			<td>46.06%</td>
		</tr>
		<tr>
			<th>Expert</th>
			<td>840</td>
			<td>15.99%</td>
		</tr>
	</tbody>
</table>

<div class="img img-tall">
	<div class="adaptive-image" data-adaptive="" data-adaptive-image-breakpoints="320 500" data-alt="How do you rate your own knowledge of CSS and its associated tools and methodologies? – Pie Chart showing the results" data-img-320="/assets/img/blog/tooling-survey/2016/q2-small.jpg" data-img-500="/assets/img/blog/tooling-survey/2016/q2-mid.jpg" data-img-max="/assets/img/blog/tooling-survey/2016/q2.jpg">
		<noscript>
			<img src="/assets/img/blog/tooling-survey/2016/q2.jpg" width="720" height="500" alt="How do you rate your own knowledge of CSS and its associated tools and methodologies? – Pie Chart showing the results" />
		</noscript>
	</div>
</div>

Looking at the results, **89.23%** (4,688) of respondents rated themselves as having an intermediate level of CSS knowledge or higher, with most – 46.06% (2,420) – saying that they are at an advanced level.  Just 15.99% (840) of respondents rated themselves as having expert knowledge.

When digging a little deeper into these results and filtering based on the answers given to question 1, of those who have up to 12 months experience working with front-end technologies 10% rated themselves as having advanced knowledge of CSS or higher (although no-one in this subcategory rated themselves as an expert).  That percentage rose to 22% for respondents with up to 2 years experience.

This can be interpreted in different ways, but it seems a relatively high percentage considering the short amount of time they have spent working with CSS.  It could also reflect how CSS can often be perceived to be simpler to learn when compared to other languages such as JavaScript – something I wouldn’t necessarily agree with when it comes to learning the intricacies and nuances of the language and it’s methodologies.

We’ll look to reference these results in the following questions.

---

<a name="css-processors"></a>

## Q3 – CSS Processor Usage

The next question was the first technology specific question, asking **What is your CSS Processing tool of choice?**

This question was asked on last years survey, with Sass being the choice for the majority of developers back in 2015.  The possible answers included all of those available last year plus the addition of PostCSS and Rework, two more modular CSS Processors.

The results below also show the percentage difference between this years and last years results where applicable.

<table class="table table--bordered">
	<thead>
		<tr>
			<th>Preprocessor</th>
			<th>Number of Votes</th>
			<th>Percentage</th>
			<th>% Diff (to 2015)</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<th>Sass</th>
			<td>3,336</td>
			<td>63.49%</td>
			<td>-0.46%</td>
		</tr>
		<tr>
			<th>Less</th>
			<td>537</td>
			<td>10.22%</td>
			<td>-4.97%</td>
		</tr>
		<tr>
			<th>Stylus</th>
			<td>160</td>
			<td>3.05%</td>
			<td>-0.70%</td>
		</tr>
		<tr>
			<th>PostCSS</th>
			<td>414</td>
			<td>7.88%</td>
			<td>N/A</td>
		</tr>
		<tr>
			<th>Rework</th>
			<td>4</td>
			<td>0.08%</td>
			<td>N/A</td>
		</tr>
		<tr>
			<th>No Preprocessor</th>
			<td>727</td>
			<td>13.84%</td>
			<td>-1.2%</td>
		</tr>
		<tr>
			<th>Other</th>
			<td>76</td>
			<td>1.45%</td>
			<td>-0.62%</td>
		</tr>
	</tbody>
</table>

<div class="img img-tall">
	<div class="adaptive-image" data-adaptive="" data-adaptive-image-breakpoints="320 500" data-alt="What is your CSS Processing tool of choice? – Pie Chart showing the results" data-img-320="/assets/img/blog/tooling-survey/2016/q3-small.jpg" data-img-500="/assets/img/blog/tooling-survey/2016/q3-mid.jpg" data-img-max="/assets/img/blog/tooling-survey/2016/q3.jpg">
		<noscript>
			<img src="/assets/img/blog/tooling-survey/2016/q3.jpg" width="720" height="500" alt="What is your CSS Processing tool of choice? – Pie Chart showing the results" />
		</noscript>
	</div>
</div>

Looking at the results, Sass is still the CSS processing tool of choice for the majority of respondents with **63.49%**.  When compared to last years results, Less usage has dropped slightly to 10.2% (down 4.97%).

PostCSS showed good growth with 7.86% of respondents saying that they used it exclusively.  It’s usage is likely to be slightly higher in reality as this doesn’t account for those respondents who use it in combination with another processing tool.

Interestingly, the percentage of respondents not using any CSS processing tool has dropped to 13.80%, down from 15.04% in 2015. This re-enforces how CSS processing is now a key skill in modern front-end development and one that the majority (86.2%) of front-end developers currently use in their own workflows.

---

<a name="css-processor-experience"></a>

## Q4 – CSS Processor Experience

Following on from the last question, I wanted to find out more detail about knowledge levels across CSS processing tools with respondents asked to give their experience in each.

Here is how people responded when asked – **Please indicate your experience with the following CSS Processing tools**:

<div class="table-wrapper">
	<table class="table table--bordered">
		<thead>
			<tr>
				<th></th>
				<th>Never Heard of</th>
				<th>Heard of/Read About</th>
				<th>Used a little</th>
				<th>Feel Comfortable Using</th>
			</tr>
		</thead>
		<tbody>
			<tr>
				<th>Sass – Standard or SCSS syntax</th>
				<td>0.59% (31)</td>
				<td>11.32% (595)</td>
				<td>17.40% (914)</td>
				<td>70.69% (3,714)</td>
			</tr>
			<tr>
				<th>Less</th>
				<td>0.88% (46)</td>
				<td>31.14% (1,636)</td>
				<td>33.33% (1,751)</td>
				<td>34.66% (1,821)</td>
			</tr>
			<tr>
				<th>Stylus</th>
				<td>24.88% (1,307)</td>
				<td>56.79% (2,984)</td>
				<td>10.87% (571)</td>
				<td>7.46% (392)</td>
			</tr>
			<tr>
				<th>PostCSS</th>
				<td>22.44% (1,179)</td>
				<td>45.83% (2,408)</td>
				<td>18.29% (961)</td>
				<td>13.44% (706)</td>
			</tr>
			<tr>
				<th>Rework</th>
				<td>78.97% (4,149)</td>
				<td>19.60% (1,030)</td>
				<td>0.91% (48)</td>
				<td>0.51% (27)</td>
			</tr>
		</tbody>
	</table>
</div>

<div class="img img-mid">
	<div class="adaptive-image" data-adaptive="" data-adaptive-image-breakpoints="320 500" data-alt="Please indicate your experience with the following CSS Processing tools – Bar Chart showing the results" data-img-320="/assets/img/blog/tooling-survey/2016/q4-small.jpg" data-img-500="/assets/img/blog/tooling-survey/2016/q4-mid.jpg" data-img-max="/assets/img/blog/tooling-survey/2016/q4.jpg">
		<noscript>
			<img src="/assets/img/blog/tooling-survey/2016/q4.jpg" width="720" height="500" alt="Please indicate your experience with the following CSS Processing tools – Bar Chart showing the results" />
		</noscript>
	</div>
</div>

The tool with the highest knowledge levels was Sass by quite some distance, with **70.69%** of respondents saying that they felt comfortable using it.  In fact just 11.91% of people had never used it, with only 0.59% (31 people) having never heard of it at all.  When looking at this together with the results of question 3, Sass clearly dominates when it comes to both usage and knowledge levels across CSS processing tools.

Looking at the other tools, 34.66% of respondents said that they felt comfortable using Less, followed by 13.44% that said the same with respect to PostCSS.  Interestingly, this number has almost doubled from the 7.15% of respondents who said that they felt comfortable using PostCSS in last years survey, showing an upwards trend in knowledge of the tool.

---

<a name="css-naming"></a>

## Q5 – CSS Naming Schemes

The next question was an area of CSS that I have a lot of interest in – CSS Naming Schemes.  Having used a naming scheme in my own work for a number of years now, I was interested to see if this was something that other front-end developers had adopted too.

The question asked was – **Do you use a naming scheme when writing CSS, such as BEM or SUIT?**

<table class="table table--bordered">
	<thead>
		<tr>
			<th>Answer</th>
			<th>Number of Votes</th>
			<th>Percentage</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<th>Yes</th>
			<td>2,384</td>
			<td>45.37%</td>
		</tr>
		<tr>
			<th>No – I’ve heard of CSS naming schemes but don’t use one</th>
			<td>1,937</td>
			<td>36.87%</td>
		</tr>
		<tr>
			<th>No – I’ve never heard of CSS naming schemes</th>
			<td>933</td>
			<td>17.76%</td>
		</tr>
	</tbody>
</table>

<div class="img img-tall">
	<div class="adaptive-image" data-adaptive="" data-adaptive-image-breakpoints="320 500" data-alt="Do you use a naming scheme when writing CSS, such as BEM or SUIT? – Pie Chart showing the results" data-img-320="/assets/img/blog/tooling-survey/2016/q5-small.jpg" data-img-500="/assets/img/blog/tooling-survey/2016/q5-mid.jpg" data-img-max="/assets/img/blog/tooling-survey/2016/q5.jpg">
		<noscript>
			<img src="/assets/img/blog/tooling-survey/2016/q5.jpg" width="720" height="500" alt="Do you use a naming scheme when writing CSS, such as BEM or SUIT? – Pie Chart showing the results" />
		</noscript>
	</div>
</div>

The results show a fairly even split, although just less than half of respondents (45.37%) said that they do use a CSS naming scheme in comparison to those that said that they did not (54.63%).

It’s encouraging that overall 82.24% (4,321) of respondents had at least heard of CSS naming schemes, but 36.87% (1,937) had yet to use one.

As you might expect, when looking at the respondents who rated themselves as having an advanced level of CSS knowledge or higher, the usage of CSS naming schemes rose to 56.38%.  This is compared to a usage of just 27.38% among those who rated themselves as an intermediate or lower.

CSS naming schemes are a tool that I think will continue to grow in usage, so it’ll be interesting to see how these figures change in the future.

---

<a name="css-linting"></a>

## Q6 – CSS Linting

Next up was CSS Linting – is this a tool that a lot of developers use in their workflows?

I asked **Do you use a tool to lint your CSS?**

The results were as follows:

<table class="table table--bordered">
	<thead>
		<tr>
			<th>Answer</th>
			<th>Number of Votes</th>
			<th>Percentage</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<th>Yes</th>
			<td>2,447</td>
			<td>46.57%</td>
		</tr>
		<tr>
			<th>No – I don’t lint my CSS</th>
			<td>2,807</td>
			<td>53.43%</td>
		</tr>
	</tbody>
</table>

<div class="img img-tall">
	<div class="adaptive-image" data-adaptive="" data-adaptive-image-breakpoints="320 500" data-alt="Do you use a tool to lint your CSS? – Pie Chart showing the results" data-img-320="/assets/img/blog/tooling-survey/2016/q6-small.jpg" data-img-500="/assets/img/blog/tooling-survey/2016/q6-mid.jpg" data-img-max="/assets/img/blog/tooling-survey/2016/q6.jpg">
		<noscript>
			<img src="/assets/img/blog/tooling-survey/2016/q6.jpg" width="720" height="500" alt="Do you use a tool to lint your CSS? – Pie Chart showing the results" />
		</noscript>
	</div>
</div>

Like the previous question, this was a pretty even split with 46.57% (2,447) of respondents saying that they do use a tool to lint their CSS, compared with 53.43% (2,807) of those that do not.

Unsurprisingly, these numbers also rise as we look at those respondents with more advanced knowledge in CSS.  52.06% of respondents who rated themselves as having advanced or higher knowledge of CSS also said that they linted their CSS, compared to just 37.61% of those with beginner to intermediate knowledge.

CSS linting is still relatively new in terms of tooling and usage, especially when compared with the amount of time that JavaScript linting has been around. As better tools, such as Stylelint, continue to be discovered by developers I’d expect usage to grow as this area of CSS tooling matures.

---

<a name="css-tool-experience"></a>

## Q7 – CSS Tool Experience

The next three questions in the survey covered the knowledge levels and usage across a number of CSS tools and methodologies.  Firstly question 7 asked respondents to **Please indicate your experience with the following CSS tools**.

Let’s look at the results:

<div class="table-wrapper">
	<table class="table table--bordered">
		<thead>
			<tr>
				<th></th>
				<th>Never Heard of</th>
				<th>Heard of/Read About</th>
				<th>Used a little</th>
				<th>Feel Comfortable Using</th>
			</tr>
		</thead>
		<tbody>
			<tr>
				<th>Autoprefixer</th>
				<td>18.86% (991)</td>
				<td>17.53% (921)</td>
				<td>15.82% (831)</td>
				<td>47.79% (2,511)</td>
			</tr>
			<tr>
				<th>Susy</th>
				<td>55.04% (2,892)</td>
				<td>29.56% (1,553)</td>
				<td>9.88% (519)</td>
				<td>5.52% (290)</td>
			</tr>
			<tr>
				<th>Modernizr</th>
				<td>6.95% (365)</td>
				<td>23.13% (1,215)</td>
				<td>37.76% (1,984)</td>
				<td>32.17% (1,690)</td>
			</tr>
			<tr>
				<th>Stylelint</th>
				<td>55.10% (2,895)</td>
				<td>24.53% (1,289)</td>
				<td>9.99% (525)</td>
				<td>10.37% (545)</td>
			</tr>
		</tbody>
	</table>
</div>

<div class="img">
	<div class="adaptive-image" data-adaptive="" data-adaptive-image-breakpoints="320 500" data-alt="Please indicate your experience with the following CSS tools – Bar Chart showing the results" data-img-320="/assets/img/blog/tooling-survey/2016/q7-small.jpg" data-img-500="/assets/img/blog/tooling-survey/2016/q7-mid.jpg" data-img-max="/assets/img/blog/tooling-survey/2016/q7.jpg">
		<noscript>
			<img src="/assets/img/blog/tooling-survey/2016/q7.jpg" width="720" height="500" alt="Please indicate your experience with the following CSS tools – Bar Chart showing the results" />
		</noscript>
	</div>
</div>

Out of these, Autoprefixer, with 47.79% (2,511), was the CSS tool that the most respondents felt comfortable using, followed by Modernizr (32.17%), Stylelint (10.37%) and finally Susy (5.52%).

However, when expanding this out to include those respondents who had used the tool a little, Modernizr then came out on top, with 69.93% compared with the 63.61% of respondents who said that they have at least a little experience in using Autoprefixer.

The majority of respondents said that they had never heard of Stylelint (55.10%), a CSS Linting tool, and Susy (55.04%), a Sass layout tool.

Interestingly, a high percentage of respondents who rated themselves as advanced or above in CSS and it’s tools had never heard of these two tools – 46.78% for Stylelint and 45.46% for Susy.  I think this illustrates just how difficult it can be for developers of any experience level, let alone beginners, to keep up with the tools available to us all.

---

<a name="css-methodologies"></a>

## Q8 – CSS Methodologies and Naming Scheme Experience

This next question followed on from the last by asking respondents to **Please indicate your experience with the following CSS methodologies**.

The results looked like this:

<div class="table-wrapper">
	<table class="table table--bordered">
		<thead>
			<tr>
				<th></th>
				<th>Never Heard of</th>
				<th>Heard of/Read About</th>
				<th>Used a little</th>
				<th>Feel Comfortable Using</th>
			</tr>
		</thead>
		<tbody>
			<tr>
				<th>SMACSS</th>
				<td>40.90% (2,149)</td>
				<td>34.07% (1,790)</td>
				<td>14.37% (755)</td>
				<td>10.66% (560)</td>
			</tr>
			<tr>
				<th>Object Oriented CSS (OOCSS)</th>
				<td>28.68% (1,507)</td>
				<td>41.68% (2,190)</td>
				<td>17.62% (926)</td>
				<td>12.01% (631)</td>
			</tr>
			<tr>
				<th>Atomic Design</th>
				<td>41.97% (2,205)</td>
				<td>33.35% (1,752)</td>
				<td>14.48% (761)</td>
				<td>10.20% (536)</td>
			</tr>
			<tr>
				<th>ITCSS</th>
				<td>69.01% (3,626)</td>
				<td>21.93% (1,152)</td>
				<td>4.43% (233)</td>
				<td>4.63% (243)</td>
			</tr>
			<tr>
				<th>CSS Modules</th>
				<td>27.98% (1,470)</td>
				<td>44.50% (2,338)</td>
				<td>15.99% (840)</td>
				<td>11.53% (606)</td>
			</tr>
			<tr>
				<th>BEM</th>
				<td>25.33% (1,331)</td>
				<td>23.75% (1,248)</td>
				<td>18.16% (954)</td>
				<td>32.76% (1,721)</td>
			</tr>
			<tr>
				<th>SUIT CSS</th>
				<td>70.23% (3,690)</td>
				<td>23.49% (1,234)</td>
				<td>3.79% (199)</td>
				<td>2.49% (131)</td>
			</tr>
		</tbody>
	</table>
</div>

<div class="img">
	<div class="adaptive-image" data-adaptive="" data-adaptive-image-breakpoints="320 500" data-alt="Please indicate your experience with the following CSS methodologies – Bar Chart showing the results" data-img-320="/assets/img/blog/tooling-survey/2016/q8-small.jpg" data-img-500="/assets/img/blog/tooling-survey/2016/q8-mid.jpg" data-img-max="/assets/img/blog/tooling-survey/2016/q8.jpg">
		<noscript>
			<img src="/assets/img/blog/tooling-survey/2016/q8.jpg" width="720" height="500" alt="Please indicate your experience with the following CSS methodologies – Bar Chart showing the results" />
		</noscript>
	</div>
</div>

Of these, BEM – a CSS naming scheme – was the most widely known with 32.76% of respondents saying that they felt comfortable using it.  This figure rises to 50.92% of respondents when including those who said they have used it a little.

Surprisingly (to me at least), knowledge of many of the most well known CSS methodologies is pretty low.  Just 29.63% of developers said that they have used OOCSS either a little or feel comfortable using it in their projects, with 27.52% saying the same for CSS modules, 25.03% for SMACSS and 24.68% for Atomic design.

Even among those with advanced or expert knowledge of CSS, none of these methodologies break the 20% mark in terms of the number of respondents that said that they felt comfortable using them.

Digging into the responses a bit further shows that less than a third (28.80%) of respondents feel comfortable using at least one of the listed CSS methodologies – so that’s any one of SMACSS, OOCSS, Atomic Design, ITCSS and CSS Modules.  This rises to 54.64% of respondents if we consider those who say that they have used any one of these methodologies at least a little.

Before drawing more conclusions from these results, let’s also take a look at question 9, which is closely related.

---

<a name="css-tool-usage"></a>

## Q9 – CSS Tool Usage

Rounding off the survey’s questions on CSS, I asked respondents **Which of these CSS methodologies or tools do you currently use on your projects?**

Here are the results:

<table class="table table--bordered">
	<thead>
		<tr>
			<th>Tool/Methodology</th>
			<th>Number of Votes</th>
			<th>Percentage</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<th>SMACSS</th>
			<td>676</td>
			<td>12.87%</td>
		</tr>
		<tr>
			<th>Object Oriented CSS (OOCSS)</th>
			<td>771</td>
			<td>14.67%</td>
		</tr>
		<tr>
			<th>Atomic Design</th>
			<td>755</td>
			<td>14.37%</td>
		</tr>
		<tr>
			<th>ITCSS</th>
			<td>268</td>
			<td>5.10%</td>
		</tr>
		<tr>
			<th>CSS Modules</th>
			<td>816</td>
			<td>15.53%</td>
		</tr>
		<tr>
			<th>BEM</th>
			<td>2,099</td>
			<td>39.95%</td>
		</tr>
		<tr>
			<th>SUIT CSS</th>
			<td>121</td>
			<td>2.30%</td>
		</tr>
		<tr>
			<th>Autoprefixer</th>
			<td>2,646</td>
			<td>50.36%</td>
		</tr>
		<tr>
			<th>Susy</th>
			<td>267</td>
			<td>5.08%</td>
		</tr>
		<tr>
			<th>Modernizr</th>
			<td>2,025</td>
			<td>38.54%</td>
		</tr>
		<tr>
			<th>Stylelint</th>
			<td>747</td>
			<td>14.22%</td>
		</tr>
		<tr>
			<th>I don’t use any of these approaches or tools</th>
			<td>1,236</td>
			<td>23.52%</td>
		</tr>
	</tbody>
</table>

<div class="img img-extraTall">
	<div class="adaptive-image" data-adaptive="" data-adaptive-image-breakpoints="320 500" data-alt="Which of these CSS methodologies or tools do you currently use on your projects? – Bar Chart showing the results" data-img-320="/assets/img/blog/tooling-survey/2016/q9-small.jpg" data-img-500="/assets/img/blog/tooling-survey/2016/q9-mid.jpg" data-img-max="/assets/img/blog/tooling-survey/2016/q9.jpg">
		<noscript>
			<img src="/assets/img/blog/tooling-survey/2016/q9.jpg" width="720" height="500" alt="Which of these CSS methodologies or tools do you currently use on your projects? – Bar Chart showing the results" />
		</noscript>
	</div>
</div>


Top in terms of actual usage was Autoprefixer (50.36%), followed by BEM (39.95%) and Modernizr (38.54%), which all saw good usage levels from respondents.

Although individual usage levels of CSS methodologies is modest – even among those who stated advanced experience with CSS – when looking at usage across all of them together, 41.09% of respondents said that they were using at least one of SMACSS, OOCSS, Atomic Design, ITCSS or CSS Modules on their projects.

It’s also a little surprising, due to the relative newness of the approach, to see that usage of CSS modules has higher usage than any of the other CSS methodologies.

For me, the relatively low usage levels – and knowledge levels shown from question 8 – across CSS methodologies indicates two things.  The diversity of ways that people are writing their CSS is very broad – there isn’t any one method that developers seem drawn to when it comes to writing their CSS.

Secondly, a high number of front-end developers consider themselves to have an advanced knowledge of CSS when they don’t have knowledge of some of the most well known CSS methodologies.  Learning different approaches to writing CSS (such as SMACSS, OOCSS and ITCSS) helps give a better perspective to how you structure your own styles – irrespective of whether you choose to use them or not in your own work-flow.

CSS may be a simple language on the surface, but it can be a complex one to master and fully understand.


---

<a name="js-knowledge"></a>

## Q10 – JavaScript Knowledge

The second half of the survey focussed on JavaScript and it’s ecosystem of tools.

First up, I asked respondents **How do you rate your own knowledge of JavaScript and its associated tools and methodologies?**

These were the results:

<table class="table table--bordered">
	<thead>
		<tr>
			<th>Knowledge</th>
			<th>Number of Votes</th>
			<th>Percentage</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<th>Beginner</th>
			<td>220</td>
			<td>4.19%</td>
		</tr>
		<tr>
			<th>Novice (between Beginner and Intermediate)</th>
			<td>638</td>
			<td>12.14%</td>
		</tr>
		<tr>
			<th>Intermediate</th>
			<td>1,749</td>
			<td>33.29%</td>
		</tr>
		<tr>
			<th>Advanced (between Intermediate and Expert)</th>
			<td>1,867</td>
			<td>35.53%</td>
		</tr>
		<tr>
			<th>Expert</th>
			<td>780</td>
			<td>14.85%</td>
		</tr>
	</tbody>
</table>

<div class="img img-extraTall">
	<div class="adaptive-image" data-adaptive="" data-adaptive-image-breakpoints="320 500" data-alt="How do you rate your own knowledge of JavaScript and its associated tools and methodologies? – Pie Chart showing the results" data-img-320="/assets/img/blog/tooling-survey/2016/q10-small.jpg" data-img-500="/assets/img/blog/tooling-survey/2016/q10-mid.jpg" data-img-max="/assets/img/blog/tooling-survey/2016/q10.jpg">
		<noscript>
			<img src="/assets/img/blog/tooling-survey/2016/q10.jpg" width="720" height="500" alt="How do you rate your own knowledge of JavaScript and its associated tools and methodologies? – Pie Chart showing the results" />
		</noscript>
	</div>
</div>

Responses showed a similar distribution across knowledge levels to those seen in relation to CSS.  The main exception comes in the number of respondents who rated themselves as having an advanced knowledge of JavaScript, which is 35.53%.

By way of comparison, 50.38% of respondents rated themselves as having either an advanced of expert level of JavaScript knowledge, compared with 62.05% of respondents who said the same in relation to their knowledge of CSS.

---

<a name="js-task-runners"></a>

## Q11 – Task Runners

Task runners have become a very important part of many front-end developers’ workflows.  But has this area changed much over the last 12 months, or has usage stayed consistent across tools and approaches?

The question that respondents were asked was **What task runner do you prefer using in your typical project workflow?**

Let’s take a look at the results – where possible I’ve included the percentage change from last years survey:

<table class="table table--bordered">
	<thead>
		<tr>
			<th>Task Runner</th>
			<th>Number of Votes</th>
			<th>Percentage</th>
			<th>% Diff (to 2015)</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<th>Gulp</th>
			<td>2,290</td>
			<td>43.59%</td>
			<td>-0.2%</td>
		</tr>
		<tr>
			<th>NPM Scripts</th>
			<td>1,356</td>
			<td>25.81%</td>
			<td>+22.65%</td>
		</tr>
		<tr>
			<th>Grunt</th>
			<td>626</td>
			<td>11.91%</td>
			<td>-15.65%</td>
		</tr>
		<tr>
			<th>Make</th>
			<td>62</td>
			<td>1.18%</td>
			<td>N/A</td>
		</tr>
		<tr>
			<th>GUI Application (i.e. Codekit)</th>
			<td>100</td>
			<td>1.90%</td>
			<td>N/A</td>
		</tr>
		<tr>
			<th>Other (please specify)</th>
			<td>238</td>
			<td>4.53%</td>
			<td>-0.35%</td>
		</tr>
		<tr>
			<th>I don’t use a task runner</th>
			<td>582</td>
			<td>11.08%</td>
			<td>-8.45%</td>
		</tr>
	</tbody>
</table>

<div class="img img-extraTall">
	<div class="adaptive-image" data-adaptive="" data-adaptive-image-breakpoints="320 500" data-alt="What task runner do you prefer using in your typical project workflow? (if any) – Pie Chart showing the results" data-img-320="/assets/img/blog/tooling-survey/2016/q11-small.jpg" data-img-500="/assets/img/blog/tooling-survey/2016/q11-mid.jpg" data-img-max="/assets/img/blog/tooling-survey/2016/q11.jpg">
		<noscript>
			<img src="/assets/img/blog/tooling-survey/2016/q11.jpg" width="720" height="500" alt="What task runner do you prefer using in your typical project workflow? (if any) – Pie Chart showing the results" />
		</noscript>
	</div>
</div>

Looking at the results, Gulp is still the clear leader when it comes to front-end task runners with **43.59%** (2,290) of responses.

The biggest movement is in the usage NPM Scripts, which got a 25.81% (1,356) share of the response, making it the second most used task runner tool.  That’s an increase of 22.65% when compared to last years figures.  This suggests that more front-end developers are trying to simplify their build tasks and take away the abstraction layer that tools such as Gulp and Grunt provide.

Meanwhile Grunt has seen a substantial drop in use, with just 11.91% of respondents saying that they prefer using the tool – a fall of over 15% from 2015.

Interestingly, the number of respondents not using any task runner has fallen to just 11.08% – down from 19.5% last year – showing that the overwhelming majority of front-end developers now utilise a task running tool on their projects.

---

<a name="js-frameworks"></a>

## Q12 – Knowledge of JavaScript Libraries and Frameworks

This was one of the questions I was most looking forward to seeing the responses to.  How have knowledge levels across the most popular JavaScript libraries and frameworks changed in the last year?

At the time of the 2015 survey, React was a relative newcomer still gaining ground on Angular.  Since then, the Angular team has released version 2 of the framework, but have developers started to migrate over?

Here’s what the results show:

<div class="table-wrapper">
	<table class="table table--bordered">
		<thead>
			<tr>
				<th></th>
				<th>Never Heard of</th>
				<th>Heard of/Read About</th>
				<th>Used a little</th>
				<th>Feel Comfortable Using</th>
			</tr>
		</thead>
		<tbody>
			<tr>
				<th>jQuery</th>
				<td>0.10% (5)</td>
				<td>0.88% (46)</td>
				<td>12.31% (647)</td>
				<td>86.71% (4,556)</td>
			</tr>
			<tr>
				<th>Underscore</th>
				<td>10.68% (561)</td>
				<td>28.40% (1,492)</td>
				<td>24.61% (1,293)</td>
				<td>36.32% (1,908)</td>
			</tr>
			<tr>
				<th>Lodash</th>
				<td>16.56% (870)</td>
				<td>27.10% (1,424)</td>
				<td>19.55% (1,027)</td>
				<td>36.79% (1,933)</td>
			</tr>
			<tr>
				<th>Backbone</th>
				<td>4.55% (239)</td>
				<td>58.43% (3,070)</td>
				<td>22.86% (1,201)</td>
				<td>14.16% (744)</td>
			</tr>
			<tr>
				<th>Angular 1</th>
				<td>0.78% (41)</td>
				<td>39.97% (2,100)</td>
				<td>30.68% (1,612)</td>
				<td>28.57% (1,501)</td>
			</tr>
			<tr>
				<th>Angular 2</th>
				<td>1.01% (53)</td>
				<td>73.14% (3,843)</td>
				<td>20.31% (1,067)</td>
				<td>5.54% (291)</td>
			</tr>
			<tr>
				<th>Ember</th>
				<td>4.19% (220)</td>
				<td>78.02% (4,099)</td>
				<td>11.63% (611)</td>
				<td>6.17% (324)</td>
			</tr>
			<tr>
				<th>React</th>
				<td>0.95% (50)</td>
				<td>42.73% (2,245)</td>
				<td>28.19% (1,481)</td>
				<td>28.13% (1,478)</td>
			</tr>
			<tr>
				<th>Polymer</th>
				<td>14.52% (763)</td>
				<td>72.00% (3,783)</td>
				<td>11.44% (601)</td>
				<td>2.04% (107)</td>
			</tr>
			<tr>
				<th>Aurelia</th>
				<td>44.14% (2,319)</td>
				<td>49.77% (2,615)</td>
				<td>3.08% (162)</td>
				<td>3.01% (158)</td>
			</tr>
			<tr>
				<th>Vue.js</th>
				<td>15.70% (825)</td>
				<td>66.01% (3,468)</td>
				<td>12.81% (673)</td>
				<td>5.48% (288)</td>
			</tr>
			<tr>
				<th>MeteorJS</th>
				<td>10.58% (556)</td>
				<td>75.30% (3,956)</td>
				<td>11.38% (598)</td>
				<td>2.74% (144)</td>
			</tr>
			<tr>
				<th>Knockout</th>
				<td>16.94% (890)</td>
				<td>65.76% (3,455)</td>
				<td>11.44% (601)</td>
				<td>5.86% (308)</td>
			</tr>
		</tbody>
	</table>
</div>

<div class="img img-short">
	<div class="adaptive-image" data-adaptive="" data-adaptive-image-breakpoints="320 500" data-alt="Please indicate which JavaScript libraries and/or frameworks you have experience in – Bar Chart showing the results" data-img-320="/assets/img/blog/tooling-survey/2016/q12-small.jpg" data-img-500="/assets/img/blog/tooling-survey/2016/q12-mid.jpg" data-img-max="/assets/img/blog/tooling-survey/2016/q12.jpg">
		<noscript>
			<img src="/assets/img/blog/tooling-survey/2016/q12.jpg" width="720" height="500" alt="Please indicate which JavaScript libraries and/or frameworks you have experience in – Bar Chart showing the results" />
		</noscript>
	</div>
</div>

As was the case last year, jQuery is still the library or framework with the highest percentage of respondents – **86.71%** (4,556) – who said that they felt comfortable using it.  In fact over 99% of respondents said that they had used it at least a little, which is pretty remarkable for any tool.

Both Underscore (36.32%) and Lodash (36.79%) also had a sizeable number of respondents who said they felt comfortable using them.

When looking at the big hitting JS frameworks, the growth in knowledge of React is the most noticeable change from last year.  It has not only caught up with Angular 1 (the leading MV* framework last year), but it has managed to even slightly surpass it, with 28.13% (1,478) of developers saying that they feel comfortable using it compared with 28.57% (1,501) of those that said the same about Angular 1.

It’s also interesting to see that Angular 2 uptake has been pretty slow so far, with 20.31% of respondents saying that they had used it a little but just 5.54% saying that they felt comfortable using it.  I would suspect this number will grow over time, but it will be interesting to see by how much and if it reaches the level that Angular 1 has currently.

Looking at knowledge levels across the MV* frameworks – so everything in the list except jQuery, Underscore and Lodash – 61.71% of respondents said that they felt comfortable using at least one of these frameworks.  That’s up just over 11% (from 50.2%) who said the same in last years survey.

As I noted last year, knowledge of at least one framework has become an important skill for many front-end developers.

---

<a name="js-framework-usage"></a>

## Q13 – Which JavaScript libraries and/or frameworks do you currently use most frequently on projects?

The next question referred to actual usage of the libraries and frameworks listed in the previous question.

The question was, **Which JavaScript libraries and/or frameworks do you currently use most frequently on projects?** with respondents invited to select all that applied.

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
			<th>jQuery</th>
			<td>3,691</td>
			<td>70.25%</td>
		</tr>
		<tr>
			<th>Underscore</th>
			<td>784</td>
			<td>14.92%</td>
		</tr>
		<tr>
			<th>Lodash</th>
			<td>1,669</td>
			<td>31.77%</td>
		</tr>
		<tr>
			<th>Backbone</th>
			<td>330</td>
			<td>6.28%</td>
		</tr>
		<tr>
			<th>Angular 1</th>
			<td>1,319</td>
			<td>25.10%</td>
		</tr>
		<tr>
			<th>Angular 2</th>
			<td>445</td>
			<td>8.47%</td>
		</tr>
		<tr>
			<th>Ember</th>
			<td>318</td>
			<td>6.05%</td>
		</tr>
		<tr>
			<th>React</th>
			<td>1,939</td>
			<td>36.91%</td>
		</tr>
		<tr>
			<th>Polymer</th>
			<td>99</td>
			<td>1.88%</td>
		</tr>
		<tr>
			<th>Aurelia</th>
			<td>173</td>
			<td>3.29%</td>
		</tr>
		<tr>
			<th>Vue.js</th>
			<td>491</td>
			<td>9.35%</td>
		</tr>
		<tr>
			<th>MeteorJS</th>
			<td>120</td>
			<td>2.28%</td>
		</tr>
		<tr>
			<th>Knockout</th>
			<td>179</td>
			<td>3.41%</td>
		</tr>
		<tr>
			<th>I don’t use any of these approaches or tools</th>
			<td>143</td>
			<td>2.72%</td>
		</tr>
	</tbody>
</table>

<div class="img img-extraTall">
	<div class="adaptive-image" data-adaptive="" data-adaptive-image-breakpoints="320 500" data-alt="Which JavaScript libraries and/or frameworks do you currently use most frequently on projects? – Bar Chart showing the results" data-img-320="/assets/img/blog/tooling-survey/2016/q13-small.jpg" data-img-500="/assets/img/blog/tooling-survey/2016/q13-mid.jpg" data-img-max="/assets/img/blog/tooling-survey/2016/q13.jpg">
		<noscript>
			<img src="/assets/img/blog/tooling-survey/2016/q13.jpg" width="720" height="500" alt="Which JavaScript libraries and/or frameworks do you currently use most frequently on projects? – Bar Chart showing the results" />
		</noscript>
	</div>
</div>

jQuery usage was again very strong, with over two thirds (70.25%) of respondents saying that they used it frequently on their projects.

Arguably more interesting is that 36.91% (1,939) of respondents said that they frequently use React, even though this is almost 10% more than the number who said that they felt comfortable using it when answering question 12.  It can therefore be concluded that a decent number of those who said that they have used it just a little are also using it frequently on their projects.

In keeping with the results from question 12, Angular 1 was said to be used frequently by 25.10% (1,319) of respondents, while Angular 2 is currently well below that figure with 8.47% (445) usage.

Although knowledge levels were similar between Lodash and Underscore in the results of question 12, Lodash received more than double the number of respondents who said that they still use it frequently on their projects – 31.77% (1,669) compared with just 14.92% (784) for Underscore.

Also, a notable mention to Vue.js, which has been getting mentioned a lot recently, with 9.35% of respondents saying that they use frequently on their projects.


{{> promos promo='react' }}


<a name="js-framework-essential"></a>

## Q14 – Which JavaScript library or framework would you regard as essential to you on the majority of your projects?

Question 14 looked at what JavaScript library or framework respondents considered to be their most essential tool, with the question being **Which JavaScript library or framework would you regard as essential to you on the majority of your projects?**

Let’s take a look at the results:

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
			<th>None of them are essential – I feel comfortable using native JavaScript on my projects</th>
			<td>1,081</td>
			<td>20.57%</td>
		</tr>
		<tr>
			<th>jQuery</th>
			<td>1,687</td>
			<td>32.11%</td>
		</tr>
		<tr>
			<th>Underscore</th>
			<td>43</td>
			<td>0.82%</td>
		</tr>
		<tr>
			<th>Lodash</th>
			<td>280</td>
			<td>5.33%</td>
		</tr>
		<tr>
			<th>Backbone</th>
			<td>43</td>
			<td>0.82%</td>
		</tr>
		<tr>
			<th>Angular 1</th>
			<td>428</td>
			<td>8.15%</td>
		</tr>
		<tr>
			<th>Angular 2</th>
			<td>148</td>
			<td>2.82%</td>
		</tr>
		<tr>
			<th>Ember</th>
			<td>198</td>
			<td>3.77%</td>
		</tr>
		<tr>
			<th>React</th>
			<td>935</td>
			<td>17.80%</td>
		</tr>
		<tr>
			<th>Polymer</th>
			<td>18</td>
			<td>0.34%</td>
		</tr>
		<tr>
			<th>Aurelia</th>
			<td>122</td>
			<td>2.32%</td>
		</tr>
		<tr>
			<th>Vue.js</th>
			<td>158</td>
			<td>3.01%</td>
		</tr>
		<tr>
			<th>MeteorJS</th>
			<td>9</td>
			<td>0.17%</td>
		</tr>
		<tr>
			<th>Knockout</th>
			<td>20</td>
			<td>0.38%</td>
		</tr>
		<tr>
			<th>Other (please specify)</th>
			<td>84</td>
			<td>1.60%</td>
		</tr>
	</tbody>
</table>

<div class="img img-extraTall">
	<div class="adaptive-image" data-adaptive="" data-adaptive-image-breakpoints="320 500" data-alt="Which JavaScript library or framework would you regard as essential to you on the majority of your projects? – Bar Chart showing the results" data-img-320="/assets/img/blog/tooling-survey/2016/q14-small.jpg" data-img-500="/assets/img/blog/tooling-survey/2016/q14-mid.jpg" data-img-max="/assets/img/blog/tooling-survey/2016/q14.jpg">
		<noscript>
			<img src="/assets/img/blog/tooling-survey/2016/q14.jpg" width="720" height="500" alt="Which JavaScript library or framework would you regard as essential to you on the majority of your projects? – Bar Chart showing the results" />
		</noscript>
	</div>
</div>

The tools that the most respondents said was essential to them was jQuery with 32.11% (1,687 responses), followed by React which received 17.80% (935) of the vote.

20.57% (1,081) of respondents said that they did not think that any library or tool was essential – most likely due to the rise in knowledge of ES6 (also known as ES2015).

These were the only answers that received more than a 10% share of the vote, with Angular 1 the next biggest choice with 8.15% (428) of responses.

Perhaps most interesting is that even among those who rated themselves at having Intermediate level JS knowledge or higher, jQuery is still the most popular choice with 26.84% of responses in this category, compared with 19.65% for the next closest tool which is React.

It’s clear that jQuery is still playing an important part in many front-end developers’ toolsets.

---

<a name="js-bundlers"></a>

## Q15 – JavaScript Module Bundlers

Looking at the results of last years survey, JavaScript module bundlers were still a tool used by a minority of front-end developers, with just 46.1% of respondents saying that they used one in their own workflow.

Will this have changed just over 12 months on?  The question asked was **Do you use a JavaScript module bundler in your workflow?**

Let’s take a look at the results:

<table class="table table--bordered">
	<thead>
		<tr>
			<th>Module Bundler</th>
			<th>Number of Votes</th>
			<th>Percentage</th>
			<th>% Diff (to 2015)</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<th>I don’t use a module bundler</th>
			<td>1,716</td>
			<td>32.66%</td>
			<td>-21.24%</td>
		</tr>
		<tr>
			<th>RequireJS</th>
			<td>407</td>
			<td>7.75%</td>
			<td>-5.71%</td>
		</tr>
		<tr>
			<th>Browserify</th>
			<td>560</td>
			<td>10.66%</td>
			<td>-5.81%</td>
		</tr>
		<tr>
			<th>Webpack</th>
			<td>2,166</td>
			<td>41.23%</td>
			<td>+30.74%</td>
		</tr>
		<tr>
			<th>Rollup</th>
			<td>89</td>
			<td>1.69%</td>
			<td>N/A</td>
		</tr>
		<tr>
			<th>JSPM</th>
			<td>119</td>
			<td>2.26%</td>
			<td>+0.04%</td>
		</tr>
		<tr>
			<th>Other (please specify)</th>
			<td>197</td>
			<td>3.75%</td>
			<td>+0.28%</td>
		</tr>
	</tbody>
</table>

<div class="img img-extraTall">
	<div class="adaptive-image" data-adaptive="" data-adaptive-image-breakpoints="320 500" data-alt="Do you use a JavaScript module bundler in your workflow? – Pie Chart showing the results" data-img-320="/assets/img/blog/tooling-survey/2016/q15-small.jpg" data-img-500="/assets/img/blog/tooling-survey/2016/q15-mid.jpg" data-img-max="/assets/img/blog/tooling-survey/2016/q15.jpg">
		<noscript>
			<img src="/assets/img/blog/tooling-survey/2016/q15.jpg" width="720" height="500" alt="Do you use a JavaScript module bundler in your workflow? – Pie Chart showing the results" />
		</noscript>
	</div>
</div>

In a massive shift from last year, 41.23% (2,166) of respondents are now using Webpack to handle their module bundling in JavaScript, making it the clear leader in this category.

The percentage of those now using any kind of module bundler has increased to 67.34% (3,538 responses), an increase of over 20% when compared to last years figures.

In terms of other module bundling tools, both Browserify and RequireJS have both seen a 5% drop in usage, with 10.66% and 7.75% of respondents saying that they use these respective tools.

Overall, it’s great to see so many developers embracing module bundlers.  Webpack has obviously struck a real chord with developers and is now considered the go-to tool when it comes to handling JavaScript module dependencies.

---

<a name="js-transpilers"></a>

## Q16 – JavaScript Transpilers

The next question in the survey is a subject that has been talked about a lot over the last 12-18 months.

The use of a JS transpiler, such as Babel, enables developers to transpile their JavaScript from ES6 (ES2015) back to ES5 so that they can use the latest JS features while still providing support for older browsers.

The question I asked was **Are you using a tool to transpile your JavaScript from ES6 to ES5? (i.e. Babel)**

Here are the results:

<table class="table table--bordered">
	<thead>
		<tr>
			<th>Answer</th>
			<th>Number of Votes</th>
			<th>Percentage</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<th>Yes</th>
			<td>3,245</td>
			<td>61.76%</td>
		</tr>
		<tr>
			<th>No – I’ve heard of these tools, but haven’t used one</th>
			<td>1,623</td>
			<td>30.89%</td>
		</tr>
		<tr>
			<th>No – I’ve never heard of a JavaScript transpiler</th>
			<td>386</td>
			<td>7.35%</td>
		</tr>
	</tbody>
</table>

<div class="img img-tall">
	<div class="adaptive-image" data-adaptive="" data-adaptive-image-breakpoints="320 500" data-alt="Are you using a tool to transpile your JavaScript from ES6 to ES5? – Pie Chart showing the results" data-img-320="/assets/img/blog/tooling-survey/2016/q16-small.jpg" data-img-500="/assets/img/blog/tooling-survey/2016/q16-mid.jpg" data-img-max="/assets/img/blog/tooling-survey/2016/q16.jpg">
		<noscript>
			<img src="/assets/img/blog/tooling-survey/2016/q16.jpg" width="720" height="500" alt="Are you using a tool to transpile your JavaScript from ES6 to ES5? – Pie Chart showing the results" />
		</noscript>
	</div>
</div>

The majority – **61.76%** (3,245) – of respondents indicated that they are now using a JavaScript transpiler.   Considering the short period of time these tools have been around, this shows just how valuable developers see working with ES6 features today.

Only 7.35% (386) of respondents had never heard of a JavaScript transpiler, again showing the remarkable reach that has been achieved in a relatively short space of time.

Looking at these results, it’s straightforward to conclude that having knowledge of a transpilation tool, such as Babel, is becoming a required skill for the modern front-end developer.

{{> promos promo='es6' }}

<a name="js-linters"></a>

## Q17 – JavaScript Linting

JavaScript Linting, once a polarizing topic, is now firmly embedded in many developers workflows.  But just how many people use one and is there a clear leader among tools that front-end developers use?

The question I asked was **Which tool do you use to lint your JavaScript? (if any)**

Here are the results:

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
			<th>I don’t use a JavaScript linter</th>
			<td>1,229</td>
			<td>23.39%</td>
		</tr>
		<tr>
			<th>JSLint</th>
			<td>992</td>
			<td>18.88%</td>
		</tr>
		<tr>
			<th>JSHint</th>
			<td>727</td>
			<td>13.84%</td>
		</tr>
		<tr>
			<th>ESLint</th>
			<td>2,123</td>
			<td>40.41%</td>
		</tr>
		<tr>
			<th>xo</th>
			<td>24</td>
			<td>0.46%</td>
		</tr>
		<tr>
			<th>Other (please specify)</th>
			<td>159</td>
			<td>3.03%</td>
		</tr>
	</tbody>
</table>

<div class="img img-tall">
	<div class="adaptive-image" data-adaptive="" data-adaptive-image-breakpoints="320 500" data-alt="Which tool do you use to lint your JavaScript? – Pie Chart showing the results" data-img-320="/assets/img/blog/tooling-survey/2016/q17-small.jpg" data-img-500="/assets/img/blog/tooling-survey/2016/q17-mid.jpg" data-img-max="/assets/img/blog/tooling-survey/2016/q17.jpg">
		<noscript>
			<img src="/assets/img/blog/tooling-survey/2016/q17.jpg" width="720" height="500" alt="Which tool do you use to lint your JavaScript? – Pie Chart showing the results" />
		</noscript>
	</div>
</div>

The majority of respondents – **76.61%** (4,025 people) – indicated that they do use a tool to lint their JavaScript.

Comparing this to the results seen earlier in relation to CSS linting, there is an obvious gap between those who choose to lint their JavaScript and those who do the same with their CSS – a difference of 30.04% in fact, as just 46.57% of respondents indicated that they used a tool to lint their CSS.

40.41% (2,123) of respondents said that ESLInt was the tool they used, making it the most popular linting tool, followed by JSLint with 18.88% (992) and JSHint with 13.84% (727).

It’s great to see that linting is now considered the norm when developing JavaScript, especially considering the benefits it brings to code quality and consistency.

---

<a name="js-testing"></a>

## Q18 – JavaScript Testing

The next subject provided some of the most interesting results in last years survey.

Last year the majority of respondents – 59.66% – said that they weren’t using a tool to help test their JavaScript.  Are more developers using JS testing tools a year on?

The question I asked was **Which tool do you use to test your JavaScript? (if any)**

Let’s take a look at the results:

<table class="table table--bordered">
	<thead>
		<tr>
			<th>Tool</th>
			<th>Number of Votes</th>
			<th>Percentage</th>
			<th>% Diff (to 2015)</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<th>I don’t use a tool to test my JS</th>
			<td>2,519</td>
			<td>47.94%</td>
			<td>-11.72%</td>
		</tr>
		<tr>
			<th>Jasmine</th>
			<td>889</td>
			<td>16.92%</td>
			<td>+0.55</td>
		</tr>
		<tr>
			<th>Mocha</th>
			<td>1,174</td>
			<td>22.34%</td>
			<td>+7.3%</td>
		</tr>
		<tr>
			<th>Tape</th>
			<td>77</td>
			<td>1.47%</td>
			<td>-0.01%</td>
		</tr>
		<tr>
			<th>Ava</th>
			<td>88</td>
			<td>1.67%</td>
			<td>N/A</td>
		</tr>
		<tr>
			<th>QUnit</th>
			<td>221</td>
			<td>4.21%</td>
			<td>+0.36%</td>
		</tr>
		<tr>
			<th>Jest</th>
			<td>180</td>
			<td>3.43%</td>
			<td>+2.64%</td>
		</tr>
		<tr>
			<th>Other (please specify)</th>
			<td>106</td>
			<td>2.02%</td>
			<td>+0.34%</td>
		</tr>
	</tbody>
</table>

<div class="img img-tall">
	<div class="adaptive-image" data-adaptive="" data-adaptive-image-breakpoints="320 500" data-alt="Which tool do you use to test your JavaScript? – Pie Chart showing the results" data-img-320="/assets/img/blog/tooling-survey/2016/q18-small.jpg" data-img-500="/assets/img/blog/tooling-survey/2016/q18-mid.jpg" data-img-max="/assets/img/blog/tooling-survey/2016/q18.jpg">
		<noscript>
			<img src="/assets/img/blog/tooling-survey/2016/q18.jpg" width="720" height="500" alt="Which tool do you use to test your JavaScript? – Pie Chart showing the results" />
		</noscript>
	</div>
</div>

Looking at the results, the figures show some changes since last years survey.

The split between those who test and those who don’t is now pretty even, with 47.93% (2,519) of respondents saying that they don’t use a tool to help with their JavaScript testing.  This figure is down 11.72% from last year.

This means that the majority of respondents – **52.07%** (2,735) – are using a tool to test their JavaScript.  This indicates that more front-end developers are seeing the benefits of learning and using a tool to test their JavaScript, which – I personally think – is great news.

Of those testing their JS, the most popular tools were Jasmine, with 16.92% of the responses, and Mocha, with 22.34%.  Mocha has seen the biggest gains, with a usage rise of 7.3% on last years figures, making it the most popular testing tool.

Jest also saw a 2.64% rise in usage, with 3.43% (180) of respondents saying that they now use it as their primary JS testing tool.

All in all, I think this shows a positive step from last years figures on JavaScript testing, but there is clearly more work to be done to reduce the gap in knowledge of testing tools among front-end developers.

---

<a name="js-misc"></a>

## Q19 – Miscellaneous Tools

The final question of the survey was to find out more information on tools that don’t quite fit into the questions that have been asked so far.

The list this year consisted of package management tools – Bower, NPM and Yarn – as well as Babel, a popular JS transpilation tool, Yeoman and TypeScript.

Respondents were asked to **Please indicate your experience with the following front-end tools**.

Here is how people responded:

<div class="table-wrapper">
	<table class="table table--bordered">
		<thead>
			<tr>
				<th></th>
				<th>Never Heard of</th>
				<th>Heard of/Read About</th>
				<th>Used a little</th>
				<th>Feel Comfortable Using</th>
			</tr>
		</thead>
		<tbody>
			<tr>
				<th>Bower</th>
				<td>2.70% (142)</td>
				<td>21.70% (1,140)</td>
				<td>33.44% (1,757)</td>
				<td>42.16% (2,215)</td>
			</tr>
			<tr>
				<th>NPM</th>
				<td>1.87% (98)</td>
				<td>4.15% (218)</td>
				<td>14.39% (756)</td>
				<td>79.60% (4,182)</td>
			</tr>
			<tr>
				<th>Yarn</th>
				<td>22.33% (1,173)</td>
				<td>50.23% (2,639)</td>
				<td>14.01% (736)</td>
				<td>13.44% (706)</td>
			</tr>
			<tr>
				<th>Babel</th>
				<td>7.46% (392)</td>
				<td>29.62% (1,556)</td>
				<td>24.04% (1,263)</td>
				<td>38.88% (2,043)</td>
			</tr>
			<tr>
				<th>Yeoman</th>
				<td>12.52% (658)</td>
				<td>41.24% (2,167)</td>
				<td>32.83% (1,725)</td>
				<td>13.40% (704)</td>
			</tr>
			<tr>
				<th>TypeScript</th>
				<td>6.83% (359)</td>
				<td>60.70% (3,189)</td>
				<td>19.60% (1,030)</td>
				<td>12.87% (676)</td>
			</tr>
		</tbody>
	</table>
</div>

<div class="img">
	<div class="adaptive-image" data-adaptive="" data-adaptive-image-breakpoints="320 500" data-alt="Please indicate your experience with the following front-end tools – Bar Chart showing the results" data-img-320="/assets/img/blog/tooling-survey/2016/q19-small.jpg" data-img-500="/assets/img/blog/tooling-survey/2016/q19-mid.jpg" data-img-max="/assets/img/blog/tooling-survey/2016/q19.jpg">
		<noscript>
			<img src="/assets/img/blog/tooling-survey/2016/q19.jpg" width="720" height="500" alt="Please indicate your experience with the following front-end tools – Bar Chart showing the results" />
		</noscript>
	</div>
</div>

The most well-known tools in this list were NPM, with a huge 79.60% of respondents saying that they feel comfortable using it, Bower with 42.16% and Babel with 38.88%.

It’s interesting to see that although Yarn has only been around a few months, 77.68% of respondents had at least heard of it or used it in some way.

The number of respondents who felt comfortable using Yeoman, TypeScript and Yarn was fairly low, with these tools receiving between 12-14% in that category.

---

## Summary

So that’s it – you made it through!  But what conclusions can we make from the survey overall?

As with last years results, the adoption rate of front-end tools shows no signs of letting up, with tools such as Webpack and JavaScript transpilers becoming ever more essential in our workflows.

Although there has been a lot of talk about front-end developers moving away from using jQuery, the results show that usage and knowledge levels are still unrivalled in comparison with any other JavaScript tool of it’s kind.

The great news is that more people seem to be using a JavaScript testing tool than not, showing that more front-end developers are embracing the value that these tools provide.

Looking specifically at CSS, the adoption of methodologies, linting and naming schemes seems to be a bit slower.  This is most noticeable when comparing the number of respondents linting their CSS compared to those doing the same with their JavaScript.

Whether this is down to developers seeing less value in investing their time in learning these tools is unclear.  I’d encourage anyone reading this to put the time into learning some of the more popular CSS methodologies and tools such as SMACSS, OOCSS, CSS Modules and BEM.  They really do help broaden your knowledge of CSS in terms of learning ways to structure and maintain your CSS, so that you can then choose the approach that best works for you.

If anyone has any questions about any of the results, or would like me to look at other cross sections of the responses, [message me on Twitter](https://twitter.com/WelshAsh_) and I’ll do my best to help.

Also, if you'd like to receive emails about next year's survey when it launches, feel free to sign up below.

{{/markdown}}


<!-- Begin MailChimp Signup Form -->
<link href="//cdn-images.mailchimp.com/embedcode/classic-10_7.css" rel="stylesheet" type="text/css">
<style type="text/css">
	#mc_embed_signup{background:#fff; clear:left; font:14px Helvetica,Arial,sans-serif; }
	/* Add your own MailChimp form style overrides in your site stylesheet or in this style block.
	   We recommend moving this block and the preceding CSS link to the HEAD of your HTML file. */
</style>
<div id="mc_embed_signup">
<form action="https://ashleynolan.us14.list-manage.com/subscribe/post?u=7df2babe441e95159f7ddc4d2&amp;id=c31e78838a" method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" class="validate" target="_blank" novalidate>
    <div id="mc_embed_signup_scroll">
	<h2>Subscribe to hear about next year's Survey</h2>
<div class="indicates-required"><span class="asterisk">*</span> indicates required</div>
<div class="mc-field-group">
	<label for="mce-EMAIL">Email Address  <span class="asterisk">*</span>
</label>
	<input type="email" value="" name="EMAIL" class="required email" id="mce-EMAIL">
</div>
	<div id="mce-responses" class="clear">
		<div class="response" id="mce-error-response" style="display:none"></div>
		<div class="response" id="mce-success-response" style="display:none"></div>
	</div>    <!-- real people should not fill this in and expect good things - do not remove this or risk form bot signups-->
    <div style="position: absolute; left: -5000px;" aria-hidden="true"><input type="text" name="b_7df2babe441e95159f7ddc4d2_c31e78838a" tabindex="-1" value=""></div>
    <div class="clear"><input type="submit" value="Subscribe" name="subscribe" id="mc-embedded-subscribe" class="button"></div>
    </div>
</form>
</div>
<script type='text/javascript' src='//s3.amazonaws.com/downloads.mailchimp.com/js/mc-validate.js'></script><script type='text/javascript'>(function($) {window.fnames = new Array(); window.ftypes = new Array();fnames[0]='EMAIL';ftypes[0]='email';fnames[1]='FNAME';ftypes[1]='text';fnames[2]='LNAME';ftypes[2]='text';fnames[3]='ADDRESS';ftypes[3]='address';fnames[4]='PHONE';ftypes[4]='phone';}(jQuery));var $mcj = jQuery.noConflict(true);</script>
<!--End mc_embed_signup-->






