---
layout: post.hbs

title: The State of Front-End Tooling – 2016
url: frontend-tooling-survey-2016-results
description: "The results of the 2016 Front-End Tooling Survey are out! Check out the results and analysis of the responses here."

date: November 29, 2016
posted: 2016-11-29T14:00

post:
- post

published: true

categories:
  - "Web Development"
  - "Tooling"

---

{{#markdown}}

---

About a month ago, I put out the [2016 Front-End Tooling Survey](http://ashn.uk/survey-tooling-2016).  The response has been *phenomenal* – to date, 4,715 developers have taken the time to fill it in.  **Thank you** to all of you who have taken the time to do so.

Continuing on from [last years survey](/blog/frontend-tooling-survey-2015-results), the aim was pretty straight-forward; To find out more details about the tools front-end developers are currently using in their own workflows.  In our industry, it’s all too easy to take for granted what people are using based on your own knowledge.  This survey aims to give more of an insight into the current trends in front-end tooling from a broader perspective.

This year the survey was made up of 19 questions – up from 8 questions last year – covering a wide range of front-end tools and methodologies.

For anyone who hasn’t completed the survey, I’ll be leaving it open for a couple more weeks and updating the results here, so please do [take the time to fill it in](http://ashn.uk/survey-tooling-2016).


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

As I mentioned above, this years survey has had 4,715 responses to date.  In comparison, when I released the first set of results in 2015, the survey had received just 648 responses which then rose to a final figure of 2,028 responses when the survey closed.  So that’s almost 2 and a half times the number of responses in comparison to last years final numbers, or a 132% increase for people who like percentages.

In terms of where the responses have come from, I posted the survey on Twitter, Reddit, HackerNews, DesignerNews, Echo.js, LinkedIn and Frontendfront.  It was also featured by a number of newsletters such as Responsive Design Weekly, Sitepoint Weekly and FrontEnd Focus, among others.

The reason I want to highlight these sources is to show that there has been a good spread of response across various channels; respondents haven’t all come from one social channel.

---

## Question Index

{{/markdown}}

<div class="no-external">

{{#markdown}}

- [Q1 – General Front-end Experience](#experience-general)
- [Q2  – CSS Knowledge Levels](#knowledge-css)
- [Q3 – CSS Processor Usage](#css-processors)
- [Q4 – CSS Processor Experience](#css-processor-experience)
- [Q5 – CSS Naming Schemes](#css-naming)
- [Q6 – CSS Linting](#css-linting)
- [Q7 – CSS Tool Experience](#css-tool-experience)
- [Q8 – CSS Methodologies and Naming Scheme Experience](#css-methodologies)
- [Q9 – CSS Tool Usage](#css-tool-usage)
- [Q10 – JavaScript Knowledge Levels](#js-knowledge)
- [Q11 – Task Runners](#js-task-runners)
- [Q12 – Knowledge of JavaScript Libraries and Frameworks](#js-frameworks)
- [Q13 – Most frequently used JS tools](#js-framework-usage)
- [Q14 – Most essential JS tool](#js-framework-essential)
- [Q15 – JavaScript Module Bundlers](#js-bundlers)
- [Q16 – JavaScript Transpilers](#js-transpilers)
- [Q17 – JavaScript Linting](#js-linters)
- [Q18 – JavaScript Testing](#js-testing)
- [Q19 – Miscellaneous Tools](#js-misc)

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
			<td>232</td>
			<td>4.92%</td>
		</tr>
		<tr>
			<th>1-2 Years</th>
			<td>589</td>
			<td>12.49%</td>
		</tr>
		<tr>
			<th>2-5 Years</th>
			<td>1,508</td>
			<td>31.98%</td>
		</tr>
		<tr>
			<th>5-10 Years</th>
			<td>1,323</td>
			<td>28.06%</td>
		</tr>
		<tr>
			<th>10-15 Years</th>
			<td>673</td>
			<td>14.27%</td>
		</tr>
		<tr>
			<th>Over 15 Years</th>
			<td>390</td>
			<td>8.27%</td>
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

The majority of respondents said that they have been working with front-end technologies for either 2-5 years or 5-10 years, which together accounted for 60.04% (2,831) of responses.

Interestingly, there is a very even split between those who have been working with front-end for up to 5 years (49.39%) when compared to those with over 5 years experience (50.6%).  Positively, this implies that the results of the survey come from a fairly even distribution of experience levels.

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
			<td>78</td>
			<td>1.65%</td>
		</tr>
		<tr>
			<th>Novice (between Beginner and Intermediate)</th>
			<td>424</td>
			<td>8.99%</td>
		</tr>
		<tr>
			<th>Intermediate</th>
			<td>1,243</td>
			<td>26.36%</td>
		</tr>
		<tr>
			<th>Advanced (between Intermediate and Expert)</th>
			<td>2,203</td>
			<td>46.72%</td>
		</tr>
		<tr>
			<th>Expert</th>
			<td>767</td>
			<td>16.27%</td>
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

Looking at the results, **89.36%** (4,213) of respondents rated themselves as having an intermediate level of CSS knowledge or higher, with most – 46.72% (2,203) – saying that they are at an advanced level.  Just 16.27% (767) of respondents rated themselves as having expert knowledge.

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
			<td>2,989</td>
			<td>63.39%</td>
			<td>-0.56%</td>
		</tr>
		<tr>
			<th>Less</th>
			<td>478</td>
			<td>10.14%</td>
			<td>-5.05%</td>
		</tr>
		<tr>
			<th>Stylus</th>
			<td>137</td>
			<td>2.91%</td>
			<td>-0.84%</td>
		</tr>
		<tr>
			<th>PostCSS</th>
			<td>392</td>
			<td>8.31%</td>
			<td>N/A</td>
		</tr>
		<tr>
			<th>Rework</th>
			<td>3</td>
			<td>0.06%</td>
			<td>N/A</td>
		</tr>
		<tr>
			<th>No Preprocessor</th>
			<td>643</td>
			<td>13.64%</td>
			<td>-1.4%</td>
		</tr>
		<tr>
			<th>Other</th>
			<td>73</td>
			<td>1.55%</td>
			<td>-0.52%</td>
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

Looking at the results, Sass is still the CSS processing tool of choice for the majority of respondents with **63.39%**.  When compared to last years results, Less usage has dropped slightly to 10.14% (down 5.05%).

PostCSS showed good growth with 8.31% of respondents saying that they used it exclusively.  It’s usage is likely to be slightly higher in reality as this doesn’t account for those respondents who use it in combination with another processing tool.

Interestingly, the percentage of respondents not using any CSS processing tool has dropped to 13.64%, down from 15.04% in 2015. This re-enforces how CSS processing is now a key skill in modern front-end development and one that the majority (86.36%) of front-end developers currently use in their own workflows.

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
				<td>0.57% (27)</td>
				<td>11.11% (524)</td>
				<td>17.16% (809)</td>
				<td>71.16% (3,355)</td>
			</tr>
			<tr>
				<th>Less</th>
				<td>0.81% (38)</td>
				<td>30.86% (1,455)</td>
				<td>33.32% (1,571)</td>
				<td>35.02% (1,651)</td>
			</tr>
			<tr>
				<th>Stylus</th>
				<td>24.22% (1,142)</td>
				<td>57.26% (2,700)</td>
				<td>11.11% (524)</td>
				<td>7.40% (349)</td>
			</tr>
			<tr>
				<th>PostCSS</th>
				<td>21.76% (1,026)</td>
				<td>45.37% (2,139)</td>
				<td>18.73% (883)</td>
				<td>14.15% (667)</td>
			</tr>
			<tr>
				<th>Rework</th>
				<td>78.43% (3,698)</td>
				<td>20.17% (951)</td>
				<td>0.91% (43)</td>
				<td>0.49% (23)</td>
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

The tool with the highest knowledge levels was Sass by quite some distance, with **71.16%** of respondents saying that they felt comfortable using it.  In fact just 11.68% of people had never used it, with only 0.57% (27 people) having never heard of it at all.  When looking at this together with the results of question 3, Sass clearly dominates when it comes to both usage and knowledge levels across CSS processing tools.

Looking at the other tools, 35.02% of respondents said that they felt comfortable using Less, followed by 14.15% that said the same with respect to PostCSS.  Interestingly, this number has almost doubled from the 7.15% of respondents who said that they felt comfortable using PostCSS in last years survey, showing an upwards trend in knowledge of the tool.

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
			<td>2,170</td>
			<td>46.02%</td>
		</tr>
		<tr>
			<th>No – I’ve heard of CSS naming schemes but don’t use one</th>
			<td>1,731</td>
			<td>36.71%</td>
		</tr>
		<tr>
			<th>No – I’ve never heard of CSS naming schemes</th>
			<td>814</td>
			<td>17.26%</td>
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

The results show a fairly even split, although just less than half of respondents (46.02%) said that they do use a CSS naming scheme in comparison to those that said that they did not (53.98%).

It’s encouraging that overall 82.73% (3,901) of respondents had at least heard of CSS naming schemes, but 36.71% (1,731) had yet to use one.

As you might expect, when looking at the respondents who rated themselves as having an advanced level of CSS knowledge or higher, the usage of CSS naming schemes rose to 56.94%.  This is compared to a usage of just 27.47% among those who rated themselves as an intermediate or lower.

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
			<td>2,232</td>
			<td>47.34%</td>
		</tr>
		<tr>
			<th>No – I don’t lint my CSS</th>
			<td>2,483</td>
			<td>52.66%</td>
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

Like the previous question, this was a pretty even split with 47.34% (2,232) of respondents saying that they do use a tool to lint their CSS, compared with 52.66% (2,483) of those that do not.

Unsurprisingly, these numbers also rise as we look at those respondents with more advanced knowledge in CSS.  52.42% of respondents who rated themselves as having advanced or higher knowledge of CSS also said that they linted their CSS, compared to just 38.70% of those with beginner to intermediate knowledge.

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
				<td>18.28% (862)</td>
				<td>17.18% (810)</td>
				<td>15.93% (751)</td>
				<td>48.61% (2,292)</td>
			</tr>
			<tr>
				<th>Susy</th>
				<td>55.02% (2,594)</td>
				<td>29.78% (1,404)</td>
				<td>9.69% (457)</td>
				<td>5.51% (260)</td>
			</tr>
			<tr>
				<th>Modernizr</th>
				<td>6.64% (313)</td>
				<td>22.93% (1,081)</td>
				<td>37.96% (1,790)</td>
				<td>32.47% (1,531)</td>
			</tr>
			<tr>
				<th>Stylelint</th>
				<td>54.68% (2,578)</td>
				<td>24.35% (1,148)</td>
				<td>10.39% (490)</td>
				<td>10.58% (499)</td>
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

Out of these, Autoprefixer, with 48.61% (2,292), was the CSS tool that the most respondents felt comfortable using, followed by Modernizr (32.47%), Stylelint (10.58%) and finally Susy (5.51%).

However, when expanding this out to include those respondents who had used the tool a little, Modernizr then came out on top, with 70.43% compared with the 64.54% of respondents who said that they have at least a little experience in using Autoprefixer.

The majority of respondents said that they had never heard of Stylelint (54.68%), a CSS Linting tool, and Susy (55.02%), a Sass layout tool.

Interestingly, a high percentage of respondents who rated themselves as advanced or above in CSS and it’s tools had never heard of these two tools – 46.53% for Stylelint and 45.52% for Susy.  I think this illustrates just how difficult it can be for developers of any experience level, let alone beginners, to keep up with the tools available to us all.

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
				<td>40.57% (1,913)</td>
				<td>33.91% (1,599)</td>
				<td>14.74% (695)</td>
				<td>10.77% (508)</td>
			</tr>
			<tr>
				<th>Object Oriented CSS (OOCSS)</th>
				<td>28.27% (1,333)</td>
				<td>41.80% (1,971)</td>
				<td>17.77% (838)</td>
				<td>12.15% (573)</td>
			</tr>
			<tr>
				<th>Atomic Design</th>
				<td>41.53% (1,958)</td>
				<td>33.74% (1,591)</td>
				<td>14.34% (676)</td>
				<td>10.39% (490)</td>
			</tr>
			<tr>
				<th>ITCSS</th>
				<td>68.34% (3,222)</td>
				<td>22.38% (1,055)</td>
				<td>4.50% (212)</td>
				<td>4.79% (226)</td>
			</tr>
			<tr>
				<th>CSS Modules</th>
				<td>27.42% (1,293)</td>
				<td>44.77% (2,111)</td>
				<td>15.95% (752)</td>
				<td>11.86% (559)</td>
			</tr>
			<tr>
				<th>BEM</th>
				<td>24.90% (1,174)</td>
				<td>23.52% (1,109)</td>
				<td>18.49% (872)</td>
				<td>33.09% (1,560)</td>
			</tr>
			<tr>
				<th>SUIT CSS</th>
				<td>69.42% (3,273)</td>
				<td>24.14% (1,138)</td>
				<td>3.90% (184)</td>
				<td>2.55% (120)</td>
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

Of these, BEM – a CSS naming scheme – was the most widely known with 33.09% of respondents saying that they felt comfortable using it.  This figure rises to 51.58% of respondents when including those who said they have used it a little.

Surprisingly (to me at least), knowledge of many of the most well known CSS methodologies is pretty low.  Just 29.92% of developers said that they have used OOCSS either a little or feel comfortable using it in their projects, with 27.81% saying the same for CSS modules, 25.51% for SMACSS and 24.73% for Atomic design.

Even among those with advanced or expert knowledge of CSS, none of these methodologies break the 20% mark in terms of the number of respondents that said that they felt comfortable using them.

Digging into the responses a bit further shows that less than a third (29.20%) of respondents feel comfortable using at least one of the listed CSS methodologies – so that’s any one of SMACSS, OOCSS, Atomic Design, ITCSS and CSS Modules.  This rises to 55.02% of respondents if we consider those who say that they have used any one of these methodologies at least a little.

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
			<td>613</td>
			<td>13.00%</td>
		</tr>
		<tr>
			<th>Object Oriented CSS (OOCSS)</th>
			<td>696</td>
			<td>14.76%</td>
		</tr>
		<tr>
			<th>Atomic Design</th>
			<td>680</td>
			<td>14.42%</td>
		</tr>
		<tr>
			<th>ITCSS</th>
			<td>248</td>
			<td>5.26%</td>
		</tr>
		<tr>
			<th>CSS Modules</th>
			<td>740</td>
			<td>15.69%</td>
		</tr>
		<tr>
			<th>BEM</th>
			<td>1905</td>
			<td>40.40%</td>
		</tr>
		<tr>
			<th>SUIT CSS</th>
			<td>111</td>
			<td>2.35%</td>
		</tr>
		<tr>
			<th>Autoprefixer</th>
			<td>2,414</td>
			<td>51.20%</td>
		</tr>
		<tr>
			<th>Susy</th>
			<td>237</td>
			<td>5.03%</td>
		</tr>
		<tr>
			<th>Modernizr</th>
			<td>1,828</td>
			<td>38.77%</td>
		</tr>
		<tr>
			<th>Stylelint</th>
			<td>682</td>
			<td>14.46%</td>
		</tr>
		<tr>
			<th>I don’t use any of these approaches or tools</th>
			<td>1,095</td>
			<td>23.22%</td>
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


Top in terms of actual usage was Autoprefixer (51.20%), followed by BEM (40.40%) and Modernizr (38.77%), which all saw good usage levels from respondents.

Although individual usage levels of CSS methodologies is modest – even among those who stated advanced experience with CSS – when looking at usage across all of them together, 41.21% of respondents said that they were using at least one of SMACSS, OOCSS, Atomic Design, ITCSS or CSS Modules on their projects.

It’s also a little surprising, due to the relative newness of the approach, to see that usage of CSS modules has higher usage than any of the other CSS methodologies.

For me, the relatively low usage levels – and knowledge levels shown from question 8 – across CSS methodologies indicates two things.  The diversity of ways that people are writing their CSS is very broad – there isn’t any one method that developers seem drawn to when it comes to writing their CSS.

Secondly – and perhaps slightly worryingly – a high number of front-end developers consider themselves to have an advanced knowledge of CSS when they don’t feel comfortable using some of the most well known CSS methodologies.

This seems slightly contradictory and points to an issue I’ve seen fairly often.  CSS may be a simple language on the surface, but it can be a complex one to master and fully understand.


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
			<td>78</td>
			<td>4.18%</td>
		</tr>
		<tr>
			<th>Novice (between Beginner and Intermediate)</th>
			<td>424</td>
			<td>11.73%</td>
		</tr>
		<tr>
			<th>Intermediate</th>
			<td>1,243</td>
			<td>32.98%</td>
		</tr>
		<tr>
			<th>Advanced (between Intermediate and Expert)</th>
			<td>2,203</td>
			<td>35.72%</td>
		</tr>
		<tr>
			<th>Expert</th>
			<td>767</td>
			<td>15.40%</td>
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

Responses showed a similar distribution across knowledge levels to those seen in relation to CSS.  The main exception comes in the number of respondents who rated themselves as having an advanced knowledge of JavaScript, which is 35.72%.

By way of comparison, 51.12% of respondents rated themselves as having either an advanced of expert level of JavaScript knowledge, compared with 62.99% of respondents who said the same in relation to their knowledge of CSS.

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
			<td>2,060</td>
			<td>43.69%</td>
			<td>-0.1%</td>
		</tr>
		<tr>
			<th>NPM Scripts</th>
			<td>1,223</td>
			<td>25.94%</td>
			<td>+22.78%</td>
		</tr>
		<tr>
			<th>Grunt</th>
			<td>554</td>
			<td>11.75%</td>
			<td>-15.81%</td>
		</tr>
		<tr>
			<th>Make</th>
			<td>54</td>
			<td>1.15%</td>
			<td>N/A</td>
		</tr>
		<tr>
			<th>GUI Application (i.e. Codekit)</th>
			<td>93</td>
			<td>1.97%</td>
			<td>N/A</td>
		</tr>
		<tr>
			<th>Other (please specify)</th>
			<td>214</td>
			<td>4.54%</td>
			<td>-0.34%</td>
		</tr>
		<tr>
			<th>I don’t use a task runner</th>
			<td>517</td>
			<td>10.97%</td>
			<td>-8.56%</td>
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

Looking at the results, Gulp is still the clear leader when it comes to front-end task runners with **43.69%** (2,060) of responses.

The biggest movement is in the usage NPM Scripts, which got a 25.94% (1,223) share of the response, making it the second most used task runner tool.  That’s an increase of 22.8% when compared to last years figures.  This suggests that more front-end developers are trying to simplify their build tasks and take away the abstraction layer that tools such as Gulp and Grunt provide.

Meanwhile Grunt has seen a substantial drop in use, with just 11.75% of respondents saying that they prefer using the tool – a fall of over 15% from 2015.

Interestingly, the number of respondents not using any task runner has fallen to just 10.97% – down from 19.5% last year – showing that the overwhelming majority of front-end developers now utilise a task running tool on their projects.

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
				<td>0.11% (5)</td>
				<td>0.85% (40)</td>
				<td>12.17% (574)</td>
				<td>86.87% (4,096)</td>
			</tr>
			<tr>
				<th>Underscore</th>
				<td>10.22% (482)</td>
				<td>28.12% (1,326)</td>
				<td>24.41% (1,151)</td>
				<td>37.24% (1,756)</td>
			</tr>
			<tr>
				<th>Lodash</th>
				<td>15.89% (749)</td>
				<td>26.70% (1,259)</td>
				<td>19.75% (931)</td>
				<td>37.67% (1,776)</td>
			</tr>
			<tr>
				<th>Backbone</th>
				<td>4.31% (203)</td>
				<td>58.13% (2,741)</td>
				<td>23.01% (1,085)</td>
				<td>14.55% (686)</td>
			</tr>
			<tr>
				<th>Angular 1</th>
				<td>0.66% (31)</td>
				<td>40.21% (1,896)</td>
				<td>30.43% (1,435)</td>
				<td>28.70% (1,353)</td>
			</tr>
			<tr>
				<th>Angular 2</th>
				<td>0.89% (42)</td>
				<td>73.59% (3,470)</td>
				<td>20.19% (952)</td>
				<td>5.32% (251)</td>
			</tr>
			<tr>
				<th>Ember</th>
				<td>3.75% (177)</td>
				<td>78.41% (3,697)</td>
				<td>11.71% (552)</td>
				<td>6.13% (289)</td>
			</tr>
			<tr>
				<th>React</th>
				<td>0.76% (36)</td>
				<td>42.29% (1,994)</td>
				<td>28.04% (1,322)</td>
				<td>28.91% (1,363)</td>
			</tr>
			<tr>
				<th>Polymer</th>
				<td>13.55% (639)</td>
				<td>72.68% (3,427)</td>
				<td>11.75% (554)</td>
				<td>2.01% (95)</td>
			</tr>
			<tr>
				<th>Aurelia</th>
				<td>43.71% (2,061)</td>
				<td>50.03% (2,359)</td>
				<td>3.20% (151)</td>
				<td>3.05% (144)</td>
			</tr>
			<tr>
				<th>Vue.js</th>
				<td>14.68% (692)</td>
				<td>66.55% (3,138)</td>
				<td>13.11% (618)</td>
				<td>5.66% (267)</td>
			</tr>
			<tr>
				<th>MeteorJS</th>
				<td>9.59% (452)</td>
				<td>75.91% (3,579)</td>
				<td>11.69% (551)</td>
				<td>2.82% (133)</td>
			</tr>
			<tr>
				<th>Knockout</th>
				<td>16.14% (761)</td>
				<td>66.62% (3,141)</td>
				<td>11.33% (534)</td>
				<td>5.92% (279)</td>
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

As was the case last year, jQuery is still the library or framework with the highest percentage of respondents – **86.87%** (4,096) – who said that they felt comfortable using it.  In fact over 99% of respondents said that they had used it at least a little, which is pretty remarkable for any tool.

Both Underscore (37.24%) and Lodash (37.67%) also had a sizeable number of respondents who said they felt comfortable using them.

When looking at the big hitting JS frameworks, the growth in knowledge of React is the most noticeable change from last year.  It has not only caught up with Angular 1 (the leading MV* framework last year), but it has managed to even slightly surpass it, with 28.91% (1,363) of developers saying that they feel comfortable using it compared with 28.70% (1,353) of those that said the same about Angular 1.

It’s also interesting to see that Angular 2 uptake has been pretty slow so far, with 20.19% of respondents saying that they had used it a little but just 5.32% saying that they felt comfortable using it.  I would suspect this number will grow over time, but it will be interesting to see by how much and if it reaches the level that Angular 1 has currently.

Looking at knowledge levels across the MV* frameworks – so everything in the list except jQuery, Underscore and Lodash – 62.23% of respondents said that they felt comfortable using at least one of these frameworks.  That’s up just over 12% (from 50.2%) who said the same in last years survey.

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
			<td>3284</td>
			<td>69.65%</td>
		</tr>
		<tr>
			<th>Underscore</th>
			<td>714</td>
			<td>15.14%</td>
		</tr>
		<tr>
			<th>Lodash</th>
			<td>1527</td>
			<td>32.39%</td>
		</tr>
		<tr>
			<th>Backbone</th>
			<td>301</td>
			<td>6.38%</td>
		</tr>
		<tr>
			<th>Angular 1</th>
			<td>1180</td>
			<td>25.03%</td>
		</tr>
		<tr>
			<th>Angular 2</th>
			<td>387</td>
			<td>8.21%</td>
		</tr>
		<tr>
			<th>Ember</th>
			<td>280</td>
			<td>5.94%</td>
		</tr>
		<tr>
			<th>React</th>
			<td>1776</td>
			<td>37.67%</td>
		</tr>
		<tr>
			<th>Polymer</th>
			<td>87</td>
			<td>1.85%</td>
		</tr>
		<tr>
			<th>Aurelia</th>
			<td>154</td>
			<td>3.27%</td>
		</tr>
		<tr>
			<th>Vue.js</th>
			<td>456</td>
			<td>9.67%</td>
		</tr>
		<tr>
			<th>MeteorJS</th>
			<td>115</td>
			<td>2.44%</td>
		</tr>
		<tr>
			<th>Knockout</th>
			<td>156</td>
			<td>3.31%</td>
		</tr>
		<tr>
			<th>I don’t use any of these approaches or tools</th>
			<td>132</td>
			<td>2.80%</td>
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

jQuery usage was again very strong, with over two thirds (69.65%) of respondents saying that they used it frequently on their projects.

Arguably more interesting is that 37.67% (1,776) of respondents said that they frequently use React, even though this is almost 10% more than the number who said that they felt comfortable using it when answering question 12.  It can therefore be concluded that a decent number of those who said that they have used it just a little are also using it frequently on their projects.

In keeping with the results from question 12, Angular 1 was said to be used frequently by 25.03% (1,180) of respondents, while Angular 2 is currently well below that figure with 8.21% (387) usage.

Although knowledge levels were similar between Lodash and Underscore in the results of question 12, Lodash received more than double the number of respondents who said that they still use it frequently on their projects – 32.39% (1,527) compared with just 15.14% (714) for Underscore.

Also, a notable mention to Vue.js, which has been getting mentioned a lot recently, with 9.67% of respondents saying that they use frequently on their projects.


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
			<td>985</td>
			<td>20.89%</td>
		</tr>
		<tr>
			<th>jQuery</th>
			<td>1468</td>
			<td>31.13%</td>
		</tr>
		<tr>
			<th>Underscore</th>
			<td>38</td>
			<td>0.81%</td>
		</tr>
		<tr>
			<th>Lodash</th>
			<td>262</td>
			<td>5.56%</td>
		</tr>
		<tr>
			<th>Backbone</th>
			<td>38</td>
			<td>0.81%</td>
		</tr>
		<tr>
			<th>Angular 1</th>
			<td>386</td>
			<td>8.19%</td>
		</tr>
		<tr>
			<th>Angular 2</th>
			<td>129</td>
			<td>2.74%</td>
		</tr>
		<tr>
			<th>Ember</th>
			<td>178</td>
			<td>3.78%</td>
		</tr>
		<tr>
			<th>React</th>
			<td>857</td>
			<td>18.18%</td>
		</tr>
		<tr>
			<th>Polymer</th>
			<td>16</td>
			<td>0.34%</td>
		</tr>
		<tr>
			<th>Aurelia</th>
			<td>113</td>
			<td>2.40%</td>
		</tr>
		<tr>
			<th>Vue.js</th>
			<td>148</td>
			<td>3.14%</td>
		</tr>
		<tr>
			<th>MeteorJS</th>
			<td>8</td>
			<td>0.17%</td>
		</tr>
		<tr>
			<th>Knockout</th>
			<td>17</td>
			<td>0.36%</td>
		</tr>
		<tr>
			<th>Other (please specify)</th>
			<td>72</td>
			<td>1.53%</td>
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

The tools that the most respondents said was essential to them was jQuery with 31.13% (1,468 responses), followed by React which received 18.18% (857) of the vote.

20.89% (985) of respondents said that they did not think that any library or tool was essential – most likely due to the rise in knowledge of ES6 (also known as ES2015).

These were the only answers that received more than a 10% share of the vote, with Angular 1 the next biggest choice with 8.19% (386) of responses.

Perhaps most interesting is that even among those who rated themselves at having Intermediate level JS knowledge or higher, jQuery is still the most popular choice with 25.98% of responses in this category, compared with 20.06% for the next closest tool which is React.

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
			<td>1516</td>
			<td>32.15%</td>
			<td>-21.75%</td>
		</tr>
		<tr>
			<th>RequireJS</th>
			<td>359</td>
			<td>7.61%</td>
			<td>-5.85%</td>
		</tr>
		<tr>
			<th>Browserify</th>
			<td>510</td>
			<td>10.82%</td>
			<td>-5.65%</td>
		</tr>
		<tr>
			<th>Webpack</th>
			<td>1962</td>
			<td>41.61%</td>
			<td>+31.11%</td>
		</tr>
		<tr>
			<th>Rollup</th>
			<td>79</td>
			<td>1.68%</td>
			<td>N/A</td>
		</tr>
		<tr>
			<th>JSPM</th>
			<td>108</td>
			<td>2.29%</td>
			<td>+0.07%</td>
		</tr>
		<tr>
			<th>Other (please specify)</th>
			<td>181</td>
			<td>3.84%</td>
			<td>+0.39%</td>
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

In a massive shift from last year, 41.61% (1,962) of respondents are now using Webpack to handle their module bundling in JavaScript, making it the clear leader in this category.

The percentage of those now using any kind of module bundler has increased to 67.85% (3,199 responses), an increase of over 20% when compared to last years figures.

In terms of other module bundling tools, both Browserify and RequireJS have both seen a 5% drop in usage, with 10.82% and 7.61% of respondents saying that they use these respective tools.

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
			<td>2,942</td>
			<td>62.40%</td>
		</tr>
		<tr>
			<th>No – I’ve heard of these tools, but haven’t used one</th>
			<td>1,443</td>
			<td>30.60%</td>
		</tr>
		<tr>
			<th>No – I’ve never heard of a JavaScript transpiler</th>
			<td>330</td>
			<td>7.00%</td>
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

The majority – **62.40%** (2,942) – of respondents indicated that they are now using a JavaScript transpiler.   Considering the short period of time these tools have been around, this shows just how valuable developers see working with ES6 features today.

Only 7% (330) of respondents had never heard of a JavaScript transpiler, again showing the remarkable reach that has been achieved in a relatively short space of time.

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
			<td>1,076</td>
			<td>22.82%</td>
		</tr>
		<tr>
			<th>JSLint</th>
			<td>894</td>
			<td>18.96%</td>
		</tr>
		<tr>
			<th>JSHint</th>
			<td>657</td>
			<td>13.93%</td>
		</tr>
		<tr>
			<th>ESLint</th>
			<td>1,927</td>
			<td>40.87%</td>
		</tr>
		<tr>
			<th>xo</th>
			<td>24</td>
			<td>0.51%</td>
		</tr>
		<tr>
			<th>Other (please specify)</th>
			<td>137</td>
			<td>2.91%</td>
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

The majority of respondents – **77.18%** (3,639 people) – indicated that they do use a tool to lint their JavaScript.

Comparing this to the results seen earlier in relation to CSS linting, there is an obvious gap between those who choose to lint their JavaScript and those who do the same with their CSS – a difference of 29.84% in fact, as just 47.34% of respondents indicated that they used a tool to lint their CSS.

40.87% (1,927) of respondents said that ESLInt was the tool they used, making it the most popular linting tool, followed by JSLint with 18.96% (894) and JSHint with 13.93% (657).

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
			<td>2,241</td>
			<td>47.53%</td>
			<td>-12.13%</td>
		</tr>
		<tr>
			<th>Jasmine</th>
			<td>802</td>
			<td>17.01%</td>
			<td>+0.64</td>
		</tr>
		<tr>
			<th>Mocha</th>
			<td>1,061</td>
			<td>22.50%</td>
			<td>+7.46%</td>
		</tr>
		<tr>
			<th>Tape</th>
			<td>69</td>
			<td>1.46%</td>
			<td>-0.02%</td>
		</tr>
		<tr>
			<th>Ava</th>
			<td>84</td>
			<td>1.78%</td>
			<td>N/A</td>
		</tr>
		<tr>
			<th>QUnit</th>
			<td>199</td>
			<td>4.22%</td>
			<td>+0.37%</td>
		</tr>
		<tr>
			<th>Jest</th>
			<td>164</td>
			<td>3.48%</td>
			<td>+2.69%</td>
		</tr>
		<tr>
			<th>Other (please specify)</th>
			<td>95</td>
			<td>2.01%</td>
			<td>+0.33%</td>
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

The split between those who test and those who don’t is now pretty even, with 47.53% (2,241) of respondents saying that they don’t use a tool to help with their JavaScript testing.  This figure is down 12.13% from last year.

This means that the majority of respondents – **52.47%** (2,474) – are using a tool to test their JavaScript.  This indicates that more front-end developers are seeing the benefits of learning and using a tool to test their JavaScript, which – I personally think – is great news.

Of those testing their JS, the most popular tools were Jasmine, with 17.01% of the responses, and Mocha, with 22.50%.  Mocha has seen the biggest gains, with a usage rise of 7.46% on last years figures, making it the most popular testing tool.

Jest also saw a 2.69% rise in usage, with 3.48% (164) of respondents saying that they now use it as their primary JS testing tool.

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
				<td>2.52% (119)</td>
				<td>21.34% (1,006)</td>
				<td>33.96% (1,601)</td>
				<td>42.18% (1,989)</td>
			</tr>
			<tr>
				<th>NPM</th>
				<td>1.76% (83)</td>
				<td>4.01% (189)</td>
				<td>14.15% (667)</td>
				<td>80.08% (3,776)</td>
			</tr>
			<tr>
				<th>Yarn</th>
				<td>21.40% (1,009)</td>
				<td>50.56% (2,384)</td>
				<td>14.32% (675)</td>
				<td>13.72% (647,409)</td>
			</tr>
			<tr>
				<th>Babel</th>
				<td>7.15% (337)</td>
				<td>29.20% (1,377)</td>
				<td>24.16% (1,139,387)</td>
				<td>39.49% (1,862)</td>
			</tr>
			<tr>
				<th>Yeoman</th>
				<td>11.56% (545)</td>
				<td>41.53% (1,958)</td>
				<td>33.47% (1,578,387)</td>
				<td>13.45% (634)</td>
			</tr>
			<tr>
				<th>TypeScript</th>
				<td>6.68% (315)</td>
				<td>60.87% (2,870)</td>
				<td>19.53% (921,387)</td>
				<td>12.92% (609)</td>
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

The most well-known tools in this list were NPM, with a huge 80.08% of respondents saying that they feel comfortable using it, Bower with 42.18% and Babel with 39.49%.

It’s interesting to see that although Yarn has only been around a few months, 78.6% of respondents had at least heard of it or used it in some way.

The number of respondents who felt comfortable using Yeoman, TypeScript and Yarn was fairly low, with these tools receiving between 12-14% in that category.

---

## Summary

So that’s it – you made it through!  But what conclusions can we make from the survey overall?

As with last years results, the adoption rate of front-end tools shows no signs of letting up, with tools such as Webpack and JavaScript transpilers becoming ever more essential in our workflows.

Although there has been a lot of talk about front-end developers moving away from using jQuery, the results show that usage and knowledge levels are still unrivalled in comparison with any other JavaScript tool of it’s kind.

The great news is that more people seem to be using a JavaScript testing tool than not, showing that more front-end developers are embracing the value that these tools provide.

Looking specifically at CSS, the adoption of methodologies, linting and naming schemes seems to be a bit slower.  This is most noticeable when comparing the number of respondents linting their CSS compared to those doing the same with their JavaScript.

Whether this is down to developers seeing less value in investing their time in learning these tools is unclear.  I’d encourage anyone reading this to put the time into learning some of the more popular CSS methodologies and tools such as SMACSS, OOCSS, CSS Modules and BEM.  They really do help broaden your knowledge of CSS in terms of learning ways to structure and maintain your CSS, so that you can then choose the approach that best works for you.

If anyone has any questions about any of the results, or would like me to look at other cross sections of the responses, [message me on Twitter](https://twitter.com/AshNolan_) and I’ll do my best to help!

{{/markdown}}



