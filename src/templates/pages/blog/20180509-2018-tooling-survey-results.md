---
layout: post.hbs

title: The Front-End Tooling Survey 2018 - Results
url: frontend-tooling-survey-2018-results
description: "The results of the 2018 Front-End Tooling Survey are out! Check out the results and analysis of the responses here."

date: May 09, 2018
posted: 2018-05-09T13:15
updated: 2018-07-26T08:00

post:
- post

published: true

categories:
  - "Web Development"
  - "Tooling"

---

{{#markdown}}

**Update 25/07/2018**

Since publishing the initial results, I've updated the survey after receiving 5,461 responses and updated the article and results data to reflect this.

---

Since launching this year's Front-End Tooling Survey in March, 5,461 front-end developers have taken the time to fill it in.  Thanks to all of you who have taken part!

Each year the survey has a pretty straight-forward aim; to shed light on the the tools that front-end developers are using right now in our industry.

It's very easy to take for granted what tools are being used based on your own knowledge and habits.  These results help to give an insight into the current trends in front-end tooling, as well as showing how usage is changing over time by looking at [the figures from previous surveys](https://ashleynolan.co.uk/blog/frontend-tooling-survey-2016-results).

This year the survey was made up of 24 questions – up from 19 questions in 2016  – covering a wide range of front-end tools and methodologies.


### Quick Thanks

This survey would be impossible to run without the support it receives from our affiliates; Wes Bos and Just Eat (my employer).

Wes is renowned for creating awesome learning materials for web developers.  Whether you’re just starting out in web development, or an experienced developer looking to level-up your skillset, I'd highly recommend checking out [Wes's courses](https://ashleynolan.co.uk/affiliates).  You'll find links to some of these courses where relevant throughout the results.


### The results

So, without further ado, let’s get onto the results!  Make yourself comfortable and let’s take a look…

---

## Pre-amble Disclaimer

These results represent a sample of front-end developers working in the industry.  Therefore, they shouldn’t be taken as gospel, simply as pointing towards a rough trend.

---

## The responses

As mentioned above, this year's survey received 5,461 responses.  When releasing the first set of results in 2016, the survey received 5,254 responses – so that's about a 4% rise in the number of responses.

In terms of where this year's responses may have come from, the link to the survey has been posted on Twitter, Reddit, HackerNews, DesignerNews, Echo.js, SitePoint, LinkedIn and Frontendfront.  It was also featured by a number of newsletters such as [Responsive Design Weekly](http://responsivedesignweekly.com/), [Versioning](https://versioning.substack.com/) and [FrontEnd Focus](https://frontendfoc.us/), among others.

Where possible, you'll see that I've included the percentage change from the 2016 survey alongside this year's figures.

---

## Question Index

{{/markdown}}

<div class="no-external">

{{#markdown}}

1. [General Front-end Experience](#experience-general)
1. [CSS Knowledge Levels](#knowledge-css)
1. [CSS Processor Usage](#css-processors)
1. [CSS Processor Experience](#css-processor-experience)
1. [CSS Framework Usage](#css-frameworks)
1. [CSS Naming Schemes](#css-naming)
1. [CSS Linting](#css-linting)
1. [CSS Tool Experience](#css-tool-experience)
1. [CSS Methodologies and Naming Scheme Experience](#css-methodologies)
1. [CSS Tool Usage](#css-tool-usage)
1. [CSS Feature Usage](#css-feature-usage)
1. [JavaScript Knowledge Levels](#js-knowledge)
1. [Task Runners](#js-task-runners)
1. [Knowledge of JavaScript Libraries and Frameworks](#js-frameworks)
1. [Most frequently used JS tools](#js-framework-usage)
1. [Most essential JS tool](#js-framework-essential)
1. [JavaScript Module Bundler Usage](#js-bundler)
1. [JavaScript Module Bundlers & Task Runners experience](#js-bundler-experience)
1. [JavaScript Transpilers](#js-transpilers)
1. [JavaScript Extension Languages](#js-extensions)
1. [JavaScript Linting](#js-linters)
1. [JavaScript Testing](#js-testing)
1. [JavaScript Package Managers](#js-packagemanagers)
1. [Miscellaneous Tools](#js-misc)

{{/markdown}}

</div>

{{#markdown}}

---

<a name="experience-general"></a>

 ## Q1 – General Front-end Experience

As in previous years, the first question is used to find out the amount of front-end experience each respondent has.

The question asked was – **Roughly how long have you been working with front-end technologies?**

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
			<td>258</td>
			<td>4.72%</td>
		</tr>
		<tr>
			<th>1-2 Years</th>
			<td>632</td>
			<td>11.57%</td>
		</tr>
		<tr>
			<th>2-5 Years</th>
			<td>1,612</td>
			<td>29.52%</td>
		</tr>
		<tr>
			<th>5-10 Years</th>
			<td>1,457</td>
			<td>26.68%</td>
		</tr>
		<tr>
			<th>10-15 Years</th>
			<td>874</td>
			<td>16.00%</td>
		</tr>
		<tr>
			<th>Over 15 Years</th>
			<td>628</td>
			<td>11.50%</td>
		</tr>
	</tbody>
</table>

<div class="img img-tall">
	<div class="adaptive-image" data-adaptive="" data-adaptive-image-breakpoints="320 500" data-alt="Roughly how long have you been working with front-end technologies? – Pie Chart showing the results" data-img-320="/assets/img/blog/tooling-survey/2018/q1-small.jpg" data-img-500="/assets/img/blog/tooling-survey/2018/q1-mid.jpg" data-img-max="/assets/img/blog/tooling-survey/2018/q1.jpg">
		<noscript>
			<img src="/assets/img/blog/tooling-survey/2018/q1.jpg" width="720" height="570" alt="Roughly how long have you been working with front-end technologies? – Pie Chart showing the results" />
		</noscript>
	</div>
</div>

So looking at the results, 54.18% of respondents have been working with front-end technologies for over 5 years, with just 16.29% saying that they had less than 2 years experience.  It's clear from these figures that the majority of respondents in this year's survey have a fairly high level of experience in front-end technologies.

Interestingly, these figures are extremely similar to those seen in the results to the same question in the 2016 survey.

---

<a name="knowledge-css"></a>

## Q2 – CSS Knowledge

The second question looked at how respondents rated their own knowledge of CSS, asking – **How do you rate your own knowledge of CSS and its associated tools and methodologies?**

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
			<td>80</td>
			<td>1.46%</td>
		</tr>
		<tr>
			<th>Novice (between Beginner and Intermediate)</th>
			<td>484</td>
			<td>8.86%</td>
		</tr>
		<tr>
			<th>Intermediate</th>
			<td>1,596</td>
			<td>29.23%</td>
		</tr>
		<tr>
			<th>Advanced (between Intermediate and Expert)</th>
			<td>2,465</td>
			<td>45.14%</td>
		</tr>
		<tr>
			<th>Expert</th>
			<td>836</td>
			<td>15.31%</td>
		</tr>
	</tbody>
</table>

<div class="img img-tall">
	<div class="adaptive-image" data-adaptive="" data-adaptive-image-breakpoints="320 500" data-alt="How do you rate your own knowledge of CSS and its associated tools and methodologies? – Pie Chart showing the results" data-img-320="/assets/img/blog/tooling-survey/2018/q2-small.jpg" data-img-500="/assets/img/blog/tooling-survey/2018/q2-mid.jpg" data-img-max="/assets/img/blog/tooling-survey/2018/q2.jpg">
		<noscript>
			<img src="/assets/img/blog/tooling-survey/2018/q2.jpg" width="720" height="570" alt="How do you rate your own knowledge of CSS and its associated tools and methodologies? – Pie Chart showing the results" />
		</noscript>
	</div>
</div>

89.7% of respondents stated that their knowledge in CSS is at an intermediate level or above, with most of those (45.14%) rating themselves as advanced.

As with any question regarding knowledge levels, this is very subjective to the person answering the question.  One person's idea of what it takes to be an expert in CSS may differ to what another person thinks.  Irrespective of this subjectiveness, it's useful to be able to use these knowledge levels to see how it effects the tools that developers are using.

I'll refer back to these results where appropriate, as it's interesting to filter based on these knowledge levels to get more of an insight into certain results.

---

<a name="css-processors"></a>

## Q3 – CSS Processor Usage

The first tooling specific question was in relation to CSS processing tools, asking – **What is your CSS Processing tool
of choice?**

In previous years, Sass has been the dominant tool in this area, but how do things look today?  The results were as follows:

<div class="responsiveTable">
	<table class="table table--bordered">
		<thead>
			<tr>
				<th>Preprocessor</th>
				<th>Number of Votes</th>
				<th>Percentage</th>
				<th>% Diff (to 2016)</th>
			</tr>
		</thead>
		<tbody>
			<tr>
				<th>Sass</th>
				<td>3,571</td>
				<td>65.39%</td>
				<td class="is-trendUp">+1.90%</td>
			</tr>
			<tr>
				<th>No Preprocessor</th>
				<td>796</td>
				<td>14.58%</td>
				<td class="is-trendUp">+0.74%</td>
			</tr>
			<tr>
				<th>PostCSS</th>
				<td>473</td>
				<td>8.66%</td>
				<td class="is-trendUp">+0.78%</td>
			</tr>
			<tr>
				<th>Less</th>
				<td>356</td>
				<td>6.52%</td>
				<td class="is-trendDown">-3.70%</td>
			</tr>
			<tr>
				<th>Stylus</th>
				<td>119</td>
				<td>2.18%</td>
				<td class="is-trendDown">-0.87%</td>
			</tr>
			<tr>
				<th>Other</th>
				<td>146</td>
				<td>2.67%</td>
				<td class="is-trendUp">+1.22%</td>
			</tr>
		</tbody>
	</table>
</div>

<div class="img img-tall">
	<div class="adaptive-image" data-adaptive="" data-adaptive-image-breakpoints="320 500" data-alt="What is your CSS Processing tool of choice? – Pie Chart showing the results" data-img-320="/assets/img/blog/tooling-survey/2018/q3-small.jpg" data-img-500="/assets/img/blog/tooling-survey/2018/q3-mid.jpg" data-img-max="/assets/img/blog/tooling-survey/2018/q3.jpg">
		<noscript>
			<img src="/assets/img/blog/tooling-survey/2018/q3.jpg" width="720" height="570" alt="What is your CSS Processing tool of choice? – Pie Chart showing the results" />
		</noscript>
	</div>
</div>

The results show that Sass is still the dominant tool in this space, with 65.39% of respondents choosing to use it.  This figure is actually up slightly (+1.90%) from the 2016 results, with the split across CSS processing tools holding fairly consistent.

Less usage continued to show a downward trend, with just 6.52% of respondents using it, a fall of 3.7% from the 2016 results.

---

<a name="css-processor-experience"></a>

## Q4 – CSS Processor Experience

Following on from the previous question, I asked respondents to indicate their experience levels across CSS processing tools.

Here is how they responded:

<div class="responsiveTable">
	<div class="table-wrapper">
		<table class="table table--bordered">
			<thead>
				<tr>
					<th></th>
					<th colspan="2">Never Heard of</th>
					<th colspan="2">Heard of/Read About</th>
					<th colspan="2">Used a little</th>
					<th colspan="2">Feel Comfortable Using</th>
				</tr>
			</thead>
			<tbody>
				<tr>
					<th>Sass – Standard or SCSS syntax</th>
					<td>0.20% (11)</td>
					<td class="is-trendDown">-0.39%</td>
					<td>8.99% (491)</td>
					<td class="is-trendDown">-2.33%</td>
					<td>17.95% (980)</td>
					<td class="is-trendUp">+0.55%</td>
					<td>72.86% (3,979)</td>
					<td class="is-trendUp">+2.17%</td>
				</tr>
				<tr>
					<th>Less</th>
					<td>1.19% (65)</td>
					<td class="is-trendUp">+0.31%</td>
					<td>36.33% (1,984)</td>
					<td class="is-trendUp">+5.19%</td>
					<td>34.24% (1,870)</td>
					<td class="is-trendUp">+0.91%</td>
					<td>28.24% (1,542)</td>
					<td class="is-trendDown">-6.42%</td>
				</tr>
				<tr>
					<th>Stylus</th>
					<td>22.76% (1,243)</td>
					<td class="is-trendDown">-2.12%</td>
					<td>60.37% (3,297)</td>
					<td class="is-trendUp">+3.58%</td>
					<td>10.88% (594)</td>
					<td class="is-trendUp">+0.01%</td>
					<td>5.99% (327)</td>
					<td class="is-trendDown">-1.47%</td>
				</tr>
				<tr>
					<th>PostCSS</th>
					<td>17.43% (952)</td>
					<td class="is-trendDown">-5.01%</td>
					<td>45.36% (2,477)</td>
					<td class="is-trendDown">-0.47%</td>
					<td>20.75% (1,133)</td>
					<td class="is-trendUp">+2.46%</td>
					<td>16.46% (899)</td>
					<td class="is-trendUp">+3.02%</td>
				</tr>
			</tbody>
		</table>
	</div>
</div>

<div class="img img-mid">
	<div class="adaptive-image" data-adaptive="" data-adaptive-image-breakpoints="320 500" data-alt="Please indicate your experience with the following CSS Processing tools – Bar Chart showing the results" data-img-320="/assets/img/blog/tooling-survey/2018/q4-small.jpg" data-img-500="/assets/img/blog/tooling-survey/2018/q4-mid.jpg" data-img-max="/assets/img/blog/tooling-survey/2018/q4.jpg">
		<noscript>
			<img src="/assets/img/blog/tooling-survey/2018/q4.jpg" width="850" height="590" alt="Please indicate your experience with the following CSS Processing tools – Bar Chart showing the results" />
		</noscript>
	</div>
</div>

As you might have expected following the results from the previous question, Sass is the tool with by far the highest knowledge levels.

72.86% of respondents indicated that they feel comfortable using it, with this figure up slightly (+2.17%) from the 2016 survey.  Only 9.19% of respondents replied that they had never used it with just 0.2% of people having never heard of it at all.  Combined with the results from Question 3, it's clear that Sass is still the dominant tool when it comes to CSS Processing.

Looking at the rest of these tools, only PostCSS saw a positive gain from the 2016 results, with 16.46% of respondents saying that they feel comfortable using it – up 3.02%.  Both Less and Stylus knowledge levels trended down compared with 2016.


---

<a name="css-frameworks"></a>

## Q5 – CSS Frameworks

This next question came as a result of feedback to last year's survey, with a number of people interested in finding out about CSS Framework usage.

The part of these results I was most interested to see was how many developers are using an off-the-shelf solution, in comparison to those who are either choosing not to use a framework or working with something more custom.

So the question asked was – **Please indicate which of the following CSS frameworks you use most frequently on your projects (if any)**.

The results are as follows:

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
			<th>Bootstrap</th>
			<td>1,909</td>
			<td>34.96%</td>
		</tr>
		<tr>
			<th>No Framework</th>
			<td>1,798</td>
			<td>32.92%</td>
		</tr>
		<tr>
			<th>Custom Framework</th>
			<td>833</td>
			<td>15.25%</td>
		</tr>
		<tr>
			<th>Foundation</th>
			<td>215</td>
			<td>3.94%</td>
		</tr>
		<tr>
			<th>Materialize</th>
			<td>144</td>
			<td>2.64%</td>
		</tr>
		<tr>
			<th>Bulma</th>
			<td>133</td>
			<td>2.44%</td>
		</tr>
		<tr>
			<th>Semantic UI</th>
			<td>106</td>
			<td>1.94%</td>
		</tr>
		<tr>
			<th>PureCSS</th>
			<td>38</td>
			<td>0.70%</td>
		</tr>
		<tr>
			<th>Other</th>
			<td>285</td>
			<td>5.22%</td>
		</tr>
	</tbody>
</table>

<div class="img img-mid">
	<div class="adaptive-image" data-adaptive="" data-adaptive-image-breakpoints="320 500" data-alt="Please indicate which of the following CSS frameworks you use most frequently on your projects – Bar Chart showing the results" data-img-320="/assets/img/blog/tooling-survey/2018/q5-small.jpg" data-img-500="/assets/img/blog/tooling-survey/2018/q5-mid.jpg" data-img-max="/assets/img/blog/tooling-survey/2018/q5.jpg">
		<noscript>
			<img src="/assets/img/blog/tooling-survey/2018/q5.jpg" width="720" height="570" alt="Please indicate which of the following CSS frameworks you use most frequently on your projects – Bar Chart showing the results" />
		</noscript>
	</div>
</div>

By far the most popular CSS framework is Bootstrap, with just over a third of respondents (34.96%) using it.

What's interesting about these results is the number of respondents choosing to use an off-the-shelf CSS framework (51.82%) compared to those who are choosing to either use something custom or use no framework at all (48.17%), which is a fairly even split.

When filtering the responses based on CSS knowledge levels, Bootstrap usage is more prevalent in beginners and novices, with usage rising to 50.89% when looking solely at these respondents.  At higher knowledge levels, framework usage drops at each category level, with 36.84% of those with an expert level of CSS not having a preferred CSS framework and Bootstrap usage much lower at 21.65% among these respondents.

This pattern is repeated for custom frameworks with 25.60% of those with expert knowledge in CSS saying that they use a custom framework, while just 6.21% of those with beginner or novice level knowledge saying the same thing.

These figures make sense – as a developer gains more knowledge using CSS, they are more likely to move away from using an off-the-shelf solution, using what they've learned to write CSS in a way that better suits them and their team.

---

<a name="css-naming"></a>

## Q6 – CSS Naming Schemes

Next up was CSS Naming Schemes.

This question doesn't ask for detail around a specific naming scheme, instead simply asking – **Do you use a CSS naming scheme when writing CSS, such as BEM or SUIT?**

<div class="responsiveTable">
	<table class="table table--bordered">
		<thead>
			<tr>
				<th>Answer</th>
				<th>Number of Votes</th>
				<th>Percentage</th>
				<th>% Diff (to 2016)</th>
			</tr>
		</thead>
		<tbody>
			<tr>
				<th>Yes</th>
				<td>2,672</td>
				<td>48.93%</td>
				<td class="is-trendUp">+3.56%</td>
			</tr>
			<tr>
				<th>No – I’ve heard of CSS naming schemes but don’t use one</th>
				<td>2,137</td>
				<td>39.13%</td>
				<td class="is-trendUp">+2.26%</td>
			</tr>
			<tr>
				<th>No – I’ve never heard of CSS naming schemes</th>
				<td>652</td>
				<td>11.94%</td>
				<td class="is-trendDown">-5.82%</td>
			</tr>
		</tbody>
	</table>
</div>

<div class="img img-tall">
	<div class="adaptive-image" data-adaptive="" data-adaptive-image-breakpoints="320 500" data-alt="Do you use a naming scheme when writing CSS, such as BEM or SUIT? – Pie Chart showing the results" data-img-320="/assets/img/blog/tooling-survey/2018/q6-small.jpg" data-img-500="/assets/img/blog/tooling-survey/2018/q6-mid.jpg" data-img-max="/assets/img/blog/tooling-survey/2018/q6.jpg">
		<noscript>
			<img src="/assets/img/blog/tooling-survey/2018/q6.jpg" width="720" height="570" alt="Do you use a naming scheme when writing CSS, such as BEM or SUIT? – Pie Chart showing the results" />
		</noscript>
	</div>
</div>

The results show that usage and knowledge levels of CSS naming schemes has risen since the 2016 survey, with 48.93% of developers now using one when writing CSS.

Only 11.94% of respondents had never heard of a CSS naming scheme – down from 17.76% in 2016.  This figure rose to 21.85% among respondents who rated themselves as at an intermediate level of CSS knowledge or lower.

When looking at the respondents who rated themselves as having an advanced level of CSS knowledge or higher, the usage of CSS naming schemes rose to 59.16%.

Overall, knowledge levels in this area are rising – and as an advocate for their usefulness myself, this is encouraging to see.

---

<a name="css-linting"></a>

## Q7 – CSS Linting

In the 2016 survey results, the majority of respondents said that were not using a CSS linting tool.  So has this changed 18 months on?

The question asked was – **Do you use a tool to lint your CSS?**

The results are as follows:

<div class="responsiveTable">
	<table class="table table--bordered">
		<thead>
			<tr>
				<th>Answer</th>
				<th>Number of Votes</th>
				<th>Percentage</th>
				<th>% Diff (to 2016)</th>
			</tr>
		</thead>
		<tbody>
			<tr>
				<th>Yes</th>
				<td>2,700</td>
				<td>49.44%</td>
				<td class="is-trendUp">+2.87%</td>
			</tr>
			<tr>
				<th>No – I don’t lint my CSS</th>
				<td>2,761</td>
				<td>50.56%</td>
				<td class="is-trendDown">-2.87%</td>
			</tr>
		</tbody>
	</table>
</div>

<div class="img img-tall">
	<div class="adaptive-image" data-adaptive="" data-adaptive-image-breakpoints="320 500" data-alt="Do you use a tool to lint your CSS? – Pie Chart showing the results" data-img-320="/assets/img/blog/tooling-survey/2018/q7-small.jpg" data-img-500="/assets/img/blog/tooling-survey/2018/q7-mid.jpg" data-img-max="/assets/img/blog/tooling-survey/2018/q7.jpg">
		<noscript>
			<img src="/assets/img/blog/tooling-survey/2018/q7.jpg" width="720" height="570" alt="Do you use a tool to lint your CSS? – Pie Chart showing the results" />
		</noscript>
	</div>
</div>

The split between those choosing to lint their CSS and those opting not to couldn't be much closer, with 49.44% (2,700) of respondents now saying that they do lint their CSS.  This shows a 2.87% gain from the results in 2016.

As we saw with CSS naming schemes, those with more advanced knowledge in CSS are more likely to lint their CSS.  56.68% of respondents who rated themselves as having advanced or higher knowledge of CSS also said that they linted their CSS, compared to just 38.38% of those with beginner to intermediate knowledge.

This is another area of CSS tooling that seems to be trending upwards. I'd be very surprised if this didn't continue to rise as the practice of CSS linting becomes as ubiquitous as JavaScript linting has now become in our industry.

---

<a name="css-tool-experience"></a>

## Q8 – CSS Tool Experience

The next few questions cover the knowledge and usage levels of a number of different CSS methodologies and helper tools.

Firstly, Question 8 asked for respondents to state their experience with Autoprefixer, Modernizr and Stylelint.

Let's take a look at the results:

<div class="responsiveTable">
	<div class="table-wrapper">
		<table class="table table--bordered">
			<thead>
				<tr>
					<th></th>
					<th colspan="2">Never Heard of</th>
					<th colspan="2">Heard of/Read About</th>
					<th colspan="2">Used a little</th>
					<th colspan="2">Feel Comfortable Using</th>
				</tr>
			</thead>
			<tbody>
				<tr>
					<th>Autoprefixer</th>
					<td>17.52% (957)</td>
					<td class="is-trendDown">-1.34%</td>
					<td>17.10% (934)</td>
					<td class="is-trendDown">-0.43%</td>
					<td>16.96% (926)</td>
					<td class="is-trendUp">+1.14%</td>
					<td>48.42% (2,644)</td>
					<td class="is-trendUp">+0.63%</td>
				</tr>
				<tr>
					<th>Modernizr</th>
					<td>11.06% (604)</td>
					<td class="is-trendUp">+4.11%</td>
					<td>27.16% (1,483)</td>
					<td class="is-trendUp">+4.03%</td>
					<td>34.26% (1,871)</td>
					<td class="is-trendDown">-3.50%</td>
					<td>27.52% (1,503)</td>
					<td class="is-trendDown">-4.65%</td>
				</tr>
				<tr>
					<th>Stylelint</th>
					<td>44.20% (2,414)</td>
					<td class="is-trendDown">-10.90%</td>
					<td>25.87% (1,413)</td>
					<td class="is-trendUp">+1.34%</td>
					<td>12.05% (658)</td>
					<td class="is-trendUp">+2.06%</td>
					<td>17.87% (976)</td>
					<td class="is-trendUp">+7.50%</td>
				</tr>
			</tbody>
		</table>
	</div>
</div>

<div class="img">
	<div class="adaptive-image" data-adaptive="" data-adaptive-image-breakpoints="320 500" data-alt="Please indicate your experience with the following CSS tools – Bar Chart showing the results" data-img-320="/assets/img/blog/tooling-survey/2018/q8-small.jpg" data-img-500="/assets/img/blog/tooling-survey/2018/q8-mid.jpg" data-img-max="/assets/img/blog/tooling-survey/2018/q8.jpg">
		<noscript>
			<img src="/assets/img/blog/tooling-survey/2018/q8.jpg" width="850" height="450" alt="Please indicate your experience with the following CSS tools – Bar Chart showing the results" />
		</noscript>
	</div>
</div>

Looking at the results against the 2016 figures, both Stylelint and Autoprefixer knowledge levels have risen, with Modernizer knowledge falling a little.

Stylelint has seen good growth in knowledge levels, with 17.87% of respondents saying that they feel comfortable using it. This figure is up 7.5% from 2016.  It does however also have the highest percentage of respondents who have never heard of it (44.20%), although this number has fallen 10.9% from 2016.

Surprisingly, over a third of developers who say they are at an advanced level of CSS or higher have never heard of Stylelint.  I'd be very surprised if this figure didn't continue to fall over the coming years.

Autoprefixer knowledge levels are still very high, with 48.42% of respondents comfortable using it.  Likewise, although Modernizr knowledge levels have slipped slightly, only 11.06% of respondents have never heard of it, showing how well known it still is.

---

<a name="css-methodologies"></a>

## Q9 – CSS Methodologies and Naming Scheme Experience

Following on from the previous question, respondents were asked to – **Please indicate your experience with the following CSS methodologies**.

The results were as follows:

<div class="responsiveTable">
	<div class="table-wrapper">
		<table class="table table--bordered">
			<thead>
				<tr>
					<th></th>
					<th colspan="2">Never Heard of</th>
					<th colspan="2">Heard of/Read About</th>
					<th colspan="2">Used a little</th>
					<th colspan="2">Feel Comfortable Using</th>
				</tr>
			</thead>
			<tbody>
				<tr>
					<th>CSS-in-JS</th>
					<td>12.31% (672)</td>
					<td class="is-trendDown">-15.67%</td>
					<td>41.57% (2,270)</td>
					<td class="is-trendDown">-2.93%</td>
					<td>26.20% (1,431)</td>
					<td class="is-trendUp">+10.21%</td>
					<td>19.92% (1,088)</td>
					<td class="is-trendUp">+8.39%</td>
				</tr>
				<tr>
					<th>SMACSS</th>
					<td>41.13% (2,246)</td>
					<td class="is-trendDown">-0.23%</td>
					<td>39.06% (2,133)</td>
					<td class="is-trendUp">+4.99%</td>
					<td>11.72% (640)</td>
					<td class="is-trendDown">-2.65%</td>
					<td>8.09% (442)</td>
					<td class="is-trendDown">-2.57%</td>
				</tr>
				<tr>
					<th>Object Oriented CSS (OOCSS)</th>
					<td>31.99% (1,747)</td>
					<td class="is-trendUp">+3.31%</td>
					<td>45.07% (2,461)</td>
					<td class="is-trendUp">+3.39%</td>
					<td>14.03% (766)</td>
					<td class="is-trendDown">-3.59%</td>
					<td>8.92% (487)</td>
					<td class="is-trendDown">-3.09%</td>
				</tr>
				<tr>
					<th>Atomic Design</th>
					<td>33.93% (1,853)</td>
					<td class="is-trendDown">-8.04%</td>
					<td>37.36% (2,040)</td>
					<td class="is-trendUp">+4.01%</td>
					<td>16.65% (909)</td>
					<td class="is-trendUp">+2.17%</td>
					<td>12.07% (659)</td>
					<td class="is-trendUp">+1.87%</td>
				</tr>
				<tr>
					<th>ITCSS</th>
					<td>69.73% (3,808)</td>
					<td class="is-trendUp">+0.72%</td>
					<td>20.93% (1,143)</td>
					<td class="is-trendDown">-1.00%</td>
					<td>4.05% (221)</td>
					<td class="is-trendDown">-0.38%</td>
					<td>5.29% (289)</td>
					<td class="is-trendUp">+0.66%</td>
				</tr>
				<tr>
					<th>BEM</th>
					<td>16.00% (874)</td>
					<td class="is-trendDown">-9.33%</td>
					<td>25.84% (1,411)</td>
					<td class="is-trendUp">+2.09%</td>
					<td>20.00% (1,092)</td>
					<td class="is-trendUp">+1.84%</td>
					<td>38.16% (2,084)</td>
					<td class="is-trendUp">+5.40%</td>
				</tr>
				<tr>
					<th>SUIT CSS</th>
					<td>70.59% (3,855)</td>
					<td class="is-trendDown">-0.36%</td>
					<td>23.86% (1,303)</td>
					<td class="is-trendUp">+0.37%</td>
					<td>3.33% (182)</td>
					<td class="is-trendDown">-0.46%</td>
					<td>2.22% (121)</td>
					<td class="is-trendDown">-0.27%</td>
				</tr>
			</tbody>
		</table>
	</div>
</div>

<div class="img">
	<div class="adaptive-image" data-adaptive="" data-adaptive-image-breakpoints="320 500" data-alt="Please indicate your experience with the following CSS methodologies – Bar Chart showing the results" data-img-320="/assets/img/blog/tooling-survey/2018/q9-small.jpg" data-img-500="/assets/img/blog/tooling-survey/2018/q9-mid.jpg" data-img-max="/assets/img/blog/tooling-survey/2018/q9.jpg">
		<noscript>
			<img src="/assets/img/blog/tooling-survey/2018/q9.jpg" width="850" height="450" alt="Please indicate your experience with the following CSS methodologies – Bar Chart showing the results" />
		</noscript>
	</div>
</div>

The big mover in CSS methodologies this year is CSS-in-JS, with 19.92% of respondents saying that they feel comfortable using it – up 8.39% from 2016.  This rises to 46.12% of respondents when including those who said they have used it a little.

BEM is still the best known CSS methodology and also saw good growth, with 38.16% of respondents saying that they feel comfortable using it – up 5.4% since the last survey.

Almost all other CSS methodologies saw a fall in their knowledge levels – the exception being Atomic Design for which 28.72% of respondents said that they had used it at least a little.

Looking across all methodologies – so that’s of SMACSS, OOCSS, Atomic Design, ITCSS and CSS-in-JS – more than a third (34.9%) of respondents feel comfortable using at least one of these.  This rises to 66.49% of respondents if we consider those that said that they have used any one of these methodologies at least a little.

So more people are using one of these CSS methodologies than they were in 2016, with this gain being driven by more developers using CSS-in-JS and Atomic Design.

---

<a name="css-tool-usage"></a>

## Q10 – CSS Tool Usage

Rounding off the questions on CSS methodologies and tools, Question 10 asked respondents – **Which of these CSS methodologies or tools do you currently use on your projects?**

Would these results tally up with the experience levels shown in the previous two questions?  Let's take a look.

<div class="responsiveTable">
	<table class="table table--bordered">
		<thead>
			<tr>
				<th>Tool/Methodology</th>
				<th>Number of Votes</th>
				<th>Percentage</th>
				<th>% Diff (to 2016)</th>
			</tr>
		</thead>
		<tbody>
			<tr>
				<th>Autoprefixer</th>
				<td>3,097</td>
				<td>56.71%</td>
				<td class="is-trendUp">+6.35%</td>
			</tr>
			<tr>
				<th>BEM</th>
				<td>2,376</td>
				<td>43.51%</td>
				<td class="is-trendUp">+3.56%</td>
			</tr>
			<tr>
				<th>Modernizr</th>
				<td>1,602</td>
				<td>29.34%</td>
				<td class="is-trendDown">-9.20%</td>
			</tr>
			<tr>
				<th>CSS-in-JS</th>
				<td>1,423</td>
				<td>26.06%</td>
				<td class="is-trendUp">+10.53%</td>
			</tr>
			<tr>
				<th>Stylelint</th>
				<td>1,244</td>
				<td>22.78%</td>
				<td class="is-trendUp">+8.56%</td>
			</tr>
			<tr>
				<th>Atomic Design</th>
				<td>831</td>
				<td>15.22%</td>
				<td class="is-trendUp">+0.85%</td>
			</tr>
			<tr>
				<th>Object Oriented CSS (OOCSS)</th>
				<td>504</td>
				<td>9.23%</td>
				<td class="is-trendDown">-5.44%</td>
			</tr>
			<tr>
				<th>SMACSS</th>
				<td>363</td>
				<td>6.65%</td>
				<td class="is-trendDown">-6.22%</td>
			</tr>
			<tr>
				<th>ITCSS</th>
				<td>262</td>
				<td>4.80%</td>
				<td class="is-trendDown">-0.30%</td>
			</tr>
			<tr>
				<th>SUIT CSS</th>
				<td>82</td>
				<td>1.50%</td>
				<td class="is-trendDown">-0.80%</td>
			</tr>
			<tr>
				<th>I don’t use any of these approaches or tools</th>
				<td>924</td>
				<td>16.92%</td>
				<td class="is-trendDown">-6.60%</td>
			</tr>
		</tbody>
	</table>
</div>

<div class="img img-extraTall">
	<div class="adaptive-image" data-adaptive="" data-adaptive-image-breakpoints="320 500" data-alt="Which of these CSS methodologies or tools do you currently use on your projects? – Bar Chart showing the results" data-img-320="/assets/img/blog/tooling-survey/2018/q10-small.jpg" data-img-500="/assets/img/blog/tooling-survey/2018/q10-mid.jpg" data-img-max="/assets/img/blog/tooling-survey/2018/q10.jpg">
		<noscript>
			<img src="/assets/img/blog/tooling-survey/2018/q10.jpg" width="850" height="590" alt="Which of these CSS methodologies or tools do you currently use on your projects? – Bar Chart showing the results" />
		</noscript>
	</div>
</div>

The results do indeed tally up to the experience levels seen in the previous two questions.

Top in terms of actual usage was Autoprefixer (56.71%), followed by BEM (43.51%) and Modernizr (29.34%).  This is actually the same top three as in 2016, but looking at the percentage difference compared with those results you can see that they've changed by +6.35%, +3.56% and -9.20% respectively.  These changes match what was seen in questions 8 and 9, with Modernizr usage seemingly trending downwards and Autoprefixer and BEM usage growing.

CSS-in-JS usage has risen +10.53%, with 26.06% of respondents now using it in their projects.  Likewise, Stylelint usage has risen +8.56%, with 22.78% of developers now using it.

On the flip-side, usage of other CSS methodologies is down – with the exception being Atomic Design which saw a small rise in usage.  OOCSS and SMACSS saw 5.44% and 6.65% falls in usage respectively.  With more modern techniques of developing CSS now being written about and promoted, it isn't a huge surprise to see older methodologies usage decline over time.

As you might expect, usage of all these methodologies and tools rises among those respondents with advanced knowledge of CSS.

It's clear from these results which tools and methodologies are on an upwards trajectory in terms of both knowledge levels and usage and it'll be interesting to see how these figures evolve in the future.

---

<a name="css-feature-usage"></a>

## Q11 – CSS Feature Usage

The next question was all about the new and shiny.

With so much being written and talked about with respect to the latest CSS features, I thought it would be interesting to find out how many developers had started to put these features into practice and gained experience using them.

Therefore, I asked respondents to – **Please indicate your experience with the following CSS features**.

Here are the results:


<div class="responsiveTable">
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
					<th>CSS Grid</th>
					<td>1.23% (67)</td>
					<td>36.37% (1,986)</td>
					<td>43.93% (2,399)</td>
					<td>18.48% (1,009)</td>
				</tr>
				<tr>
					<th>Flexbox</th>
					<td>0.68% (37)</td>
					<td>5.79% (316)</td>
					<td>25.95% (1,417)</td>
					<td>67.59% (3,691)</td>
				</tr>
				<tr>
					<th>CSS Custom Properties</th>
					<td>10.13% (553)</td>
					<td>44.64% (2,438)</td>
					<td>26.20% (1,431)</td>
					<td>19.03% (1,039)</td>
				</tr>
			</tbody>
		</table>
	</div>
</div>

<div class="img">
	<div class="adaptive-image" data-adaptive="" data-adaptive-image-breakpoints="320 500" data-alt="Please indicate your experience with the following CSS features – Bar Chart showing the results" data-img-320="/assets/img/blog/tooling-survey/2018/q11-small.jpg" data-img-500="/assets/img/blog/tooling-survey/2018/q11-mid.jpg" data-img-max="/assets/img/blog/tooling-survey/2018/q11.jpg">
		<noscript>
			<img src="/assets/img/blog/tooling-survey/2018/q11.jpg" width="720" height="420" alt="Please indicate your experience with the following CSS features – Bar Chart showing the results" />
		</noscript>
	</div>
</div>

It's clear from the results that Flexbox is now understood by the majority of developers, with 67.59% of respondents saying they feel comfortable using it.  This figure rises to 93.54% when including the respondents who have at least used it a little.

Somewhat surprisingly, more respondents said that they felt comfortable using CSS Custom Properties (19.03%) than CSS Grid (18.48%), although when looking at how many had used each feature at least a little, CSS Grid came out ahead with 62.41%, compared with 45.23% of respondents saying the same for CSS Custom Properties.

Looking at these figures, it seems a lot of people have dabbled with CSS Grid, but not that many have yet fully got to grips with it.  Looking at how developers now feel comfortable developing with flexbox, it's not unreasonable to think that these figures will increase fairly rapidly now that CSS Grid and Custom Properties are so well supported in modern browsers.

{{> promos promo='grid' promotitle="Learn CSS Grid" }}


<a name="js-knowledge"></a>

## Q12 – JavaScript Knowledge

The second half of the survey was focussed on JavaScript and it's ecosystem of tools.

Firstly, I asked respondents – **How do you rate your own knowledge of JavaScript and its associated tools and methodologies?**

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
			<td>139</td>
			<td>2.55%</td>
		</tr>
		<tr>
			<th>Novice (between Beginner and Intermediate)</th>
			<td>596</td>
			<td>10.91%</td>
		</tr>
		<tr>
			<th>Intermediate</th>
			<td>1,828</td>
			<td>33.47%</td>
		</tr>
		<tr>
			<th>Advanced (between Intermediate and Expert)</th>
			<td>2,028</td>
			<td>37.14%</td>
		</tr>
		<tr>
			<th>Expert</th>
			<td>870</td>
			<td>15.93%</td>
		</tr>
	</tbody>
</table>

<div class="img img-extraTall">
	<div class="adaptive-image" data-adaptive="" data-adaptive-image-breakpoints="320 500" data-alt="How do you rate your own knowledge of JavaScript and its associated tools and methodologies? – Pie Chart showing the results" data-img-320="/assets/img/blog/tooling-survey/2018/q12-small.jpg" data-img-500="/assets/img/blog/tooling-survey/2018/q12-mid.jpg" data-img-max="/assets/img/blog/tooling-survey/2018/q12.jpg">
		<noscript>
			<img src="/assets/img/blog/tooling-survey/2018/q12.jpg" width="720" height="570" alt="How do you rate your own knowledge of JavaScript and its associated tools and methodologies? – Pie Chart showing the results" />
		</noscript>
	</div>
</div>

The split between knowledge levels seen in these results were very similar to those seen in the 2016 results.  Similar to CSS, it seems that the vast majority of respondents consider themselves to be at an intermediate level or higher in JavaScript, with over three quarters (86.54%) of respondents rating themselves at this level.

There was a small increase in the number of respondents rating themselves as either at an advanced or expert level when compared to the last survey and subsequently there was a slightly smaller number of respondents at beginner or novice level.

I'll reference these knowledge levels where appropriate throughout the rest of the results.

---

<a name="js-task-runners"></a>

## Q13 – Task Runners

Back in 2016, Gulp was the most widely used task runner, with 43.59% of respondents saying they used the tool.  NPM scripts had seen large growth in usage however, so it'll be interesting to see what developers are now using in their workflows.

The question that respondents were asked was – **What task runner do you prefer using in your typical project workflow?**

Let’s take a look at the results:

<div class="responsiveTable">
	<table class="table table--bordered">
		<thead>
			<tr>
				<th>Task Runner</th>
				<th>Number of Votes</th>
				<th>Percentage</th>
				<th>% Diff (to 2016)</th>
			</tr>
		</thead>
		<tbody>
			<tr>
				<th>NPM Scripts</th>
				<td>2,615</td>
				<td>47.89%</td>
				<td class="is-trendUp">+22.26%</td>
			</tr>
			<tr>
				<th>Gulp</th>
				<td>1,614</td>
				<td>29.56%</td>
				<td class="is-trendDown">-14.03%</td>
			</tr>
			<tr>
				<th>I don’t use a task runner</th>
				<td>584</td>
				<td>10.69%</td>
				<td class="is-trendDown">-0.37%</td>
			</tr>
			<tr>
				<th>Grunt</th>
				<td>316</td>
				<td>5.79%</td>
				<td class="is-trendDown">-6.12%</td>
			</tr>
			<tr>
				<th>GUI Application (i.e. Codekit)</th>
				<td>57</td>
				<td>1.04%</td>
				<td class="is-trendDown">-0.86%</td>
			</tr>
			<tr>
				<th>Make</th>
				<td>35</td>
				<td>0.64%</td>
				<td class="is-trendDown">-0.54%</td>
			</tr>
			<tr>
				<th>Other (please specify)</th>
				<td>240</td>
				<td>4.39%</td>
				<td class="is-trendDown">-0.34%</td>
			</tr>
		</tbody>
	</table>
</div>

<div class="img img-extraTall">
	<div class="adaptive-image" data-adaptive="" data-adaptive-image-breakpoints="320 500" data-alt="What task runner do you prefer using in your typical project workflow? (if any) – Pie Chart showing the results" data-img-320="/assets/img/blog/tooling-survey/2018/q13-small.jpg" data-img-500="/assets/img/blog/tooling-survey/2018/q13-mid.jpg" data-img-max="/assets/img/blog/tooling-survey/2018/q13.jpg">
		<noscript>
			<img src="/assets/img/blog/tooling-survey/2018/q13.jpg" width="720" height="570" alt="What task runner do you prefer using in your typical project workflow? (if any) – Pie Chart showing the results" />
		</noscript>
	</div>
</div>

Interestingly, usage of NPM scripts has overtaken Gulp by quite some margin, now becoming the most used task runner with 47.89%. This is a huge increase of 22.26% when compared to the 2016 figures.

Gulp is now the second most used tool in this area with 29.56%, falling 14.03% from 2016.  While Gulp has seen usage fall, it's important to consider that it's still used by almost a third of respondents, which is a considerable amount.

Grunt usage also decreased, with just 5.79% of developers now using it in their workflows.  The number of people not using a task runner has stayed pretty consistent (10.69%) with the 2016 figures.

Digging a little deeper into these results reveals that among respondents with advanced to expert level knowledge of JavaScript, NPM script usage rises above the average to 58.70%.  However, among those with beginner to intermediate knowledge of JavaScript, Gulp is slightly more popular, with 36.13% of those respondents using it compared to 35.66% using NPM scripts.

So the main trend to be observed here is that it looks like more developers are switching to using NPM scripts to handle their workflow tasks, moving away from tools like Grunt and Gulp.  This is especially true when looking at more experienced developers, although NPM Script usage has grown substantially even among beginners.  This could be due to better synergy with tools like WebPack and React, or simply because NPM Scripts provide a simple way of running tasks without the overhead of learning an additional tool.

---

<a name="js-frameworks"></a>

## Q14 – Knowledge of JavaScript Libraries and Frameworks

The next three questions look closely at knowledge and usage levels of JavaScript libraries and frameworks.

In 2016, jQuery was still proving to be an extremely popular tool among front-end developers, with React becoming the most popular framework, ahead of Angular.

So how have things changed 18 months on?  Have any new tools emerged?

First I asked respondents to indicate their experience with a number of JavaScript libraries and frameworks.  Here's how they replied:

<div class="responsiveTable">
	<div class="table-wrapper">
		<table class="table table--bordered">
			<thead>
				<tr>
					<th></th>
					<th colspan="2">Never Heard of</th>
					<th colspan="2">Heard of/Read About</th>
					<th colspan="2">Used a little</th>
					<th colspan="2">Feel Comfortable Using</th>
				</tr>
			</thead>
			<tbody>
				<tr>
					<th>jQuery</th>
					<td>0.11% (6)</td>
					<td class="is-trendUp">+0.01%</td>
					<td>2.31% (126)</td>
					<td class="is-trendUp">+1.43%</td>
					<td>17.85% (975)</td>
					<td class="is-trendUp">+5.54%</td>
					<td>79.73% (4,354)</td>
					<td class="is-trendDown">-6.98%</td>
				</tr>
				<tr>
					<th>Lodash</th>
					<td>11.70% (639)</td>
					<td class="is-trendDown">-4.86%</td>
					<td>25.73% (1,405)</td>
					<td class="is-trendDown">-1.37%</td>
					<td>25.60% (1,398)</td>
					<td class="is-trendUp">+6.05%</td>
					<td>36.97% (2,019)</td>
					<td class="is-trendUp">+0.18%</td>
				</tr>
				<tr>
					<th>Underscore</th>
					<td>12.49% (682)</td>
					<td class="is-trendUp">+1.81%</td>
					<td>34.92% (1,907)</td>
					<td class="is-trendUp">+6.52%</td>
					<td>24.41% (1,333)</td>
					<td class="is-trendUp">+0.20%</td>
					<td>28.18% (1,539)</td>
					<td class="is-trendDown">-8.14%</td>
				</tr>
				<tr>
					<th>React</th>
					<td>0.38% (21)</td>
					<td class="is-trendDown">-0.57%</td>
					<td>31.15% (1,701)</td>
					<td class="is-trendDown">-11.58%</td>
					<td>28.04% (1,531)</td>
					<td class="is-trendDown">-0.15%</td>
					<td>40.43% (2,208)</td>
					<td class="is-trendUp">+12.30%</td>
				</tr>
				<tr>
					<th>Angular 1</th>
					<td>0.64% (35)</td>
					<td class="is-trendDown">-0.14%</td>
					<td>47.32% (2,584)</td>
					<td class="is-trendUp">+7.35%</td>
					<td>30.14% (1,646)</td>
					<td class="is-trendDown">-0.54%</td>
					<td>21.90% (1,196)</td>
					<td class="is-trendDown">-6.67%</td>
				</tr>
				<tr>
					<th>Angular 2+</th>
					<td>0.70% (38)</td>
					<td class="is-trendDown">-0.31%</td>
					<td>65.04% (3,552)</td>
					<td class="is-trendDown">-8.10%</td>
					<td>21.48% (1,173)</td>
					<td class="is-trendUp">+1.17%</td>
					<td>12.78% (698)</td>
					<td class="is-trendUp">+7.24%</td>
				</tr>
				<tr>
					<th>Vue.js</th>
					<td>1.03% (56)</td>
					<td class="is-trendDown">-14.67%</td>
					<td>59.04% (3,224)</td>
					<td class="is-trendDown">-6.97%</td>
					<td>22.87% (1,249)</td>
					<td class="is-trendUp">+10.06%</td>
					<td>17.07% (932)</td>
					<td class="is-trendUp">+11.59%</td>
				</tr>
				<tr>
					<th>Ember</th>
					<td>4.45% (243)</td>
					<td class="is-trendUp">+0.26%</td>
					<td>80.55% (4,399)</td>
					<td class="is-trendUp">+2.53%</td>
					<td>8.44% (461)</td>
					<td class="is-trendDown">-3.19%</td>
					<td>6.56% (358)</td>
					<td class="is-trendUp">+0.39%</td>
				</tr>
				<tr>
					<th>Preact</th>
					<td>23.60% (1,289)</td>
					<td>N/A</td>
					<td>65.28% (3,565)</td>
					<td>N/A</td>
					<td>6.67% (364)</td>
					<td>N/A</td>
					<td>4.45% (243)</td>
					<td>N/A</td>
				</tr>
				<tr>
					<th>Backbone</th>
					<td>6.78% (370)</td>
					<td class="is-trendUp">+2.23%</td>
					<td>67.55% (3,689)</td>
					<td class="is-trendUp">+9.12%</td>
					<td>16.90% (923)</td>
					<td class="is-trendDown">-5.96%</td>
					<td>8.77% (479)</td>
					<td class="is-trendDown">-5.39%</td>
				</tr>
				<tr>
					<th>Knockout</th>
					<td>20.55% (1,122)</td>
					<td class="is-trendUp">+3.61%</td>
					<td>64.97% (3,548)</td>
					<td class="is-trendDown">-0.79%</td>
					<td>10.66% (582)</td>
					<td class="is-trendDown">-0.78%</td>
					<td>3.83% (209)</td>
					<td class="is-trendDown">-2.03%</td>
				</tr>
				<tr>
					<th>Aurelia</th>
					<td>41.42% (2,262)</td>
					<td class="is-trendDown">-2.72%</td>
					<td>55.04% (3,006)</td>
					<td class="is-trendUp">+5.27%</td>
					<td>2.40% (131)</td>
					<td class="is-trendDown">-0.68%</td>
					<td>1.14% (62)</td>
					<td class="is-trendDown">-1.87%</td>
				</tr>
				<tr>
					<th>MeteorJS</th>
					<td>15.38% (840)</td>
					<td class="is-trendUp">+4.80%</td>
					<td>73.36% (4,006)</td>
					<td class="is-trendDown">-1.94%</td>
					<td>9.28% (507)</td>
					<td class="is-trendDown">-2.10%</td>
					<td>1.98% (108)</td>
					<td class="is-trendDown">-0.76%</td>
				</tr>
				<tr>
					<th>Polymer</th>
					<td>17.96% (981)</td>
					<td class="is-trendUp">+3.44%</td>
					<td>70.90% (3,872)</td>
					<td class="is-trendDown">-1.10%</td>
					<td>9.49% (518)</td>
					<td class="is-trendDown">-1.95%</td>
					<td>1.65% (90)</td>
					<td class="is-trendDown">-0.39%</td>
				</tr>
			</tbody>
		</table>
	</div>
</div>

<div class="img img-short">
	<div class="adaptive-image" data-adaptive="" data-adaptive-image-breakpoints="320 500" data-alt="Please indicate which JavaScript libraries and/or frameworks you have experience in – Bar Chart showing the results" data-img-320="/assets/img/blog/tooling-survey/2018/q14-small.jpg" data-img-500="/assets/img/blog/tooling-survey/2018/q14-mid.jpg" data-img-max="/assets/img/blog/tooling-survey/2018/q14.jpg">
		<noscript>
			<img src="/assets/img/blog/tooling-survey/2018/q14.jpg" width="850" height="420" alt="Please indicate which JavaScript libraries and/or frameworks you have experience in – Bar Chart showing the results" />
		</noscript>
	</div>
</div>

Looking broadly over these results, the most notable changes can be seen in the number of respondents that say they feel comfortable using jQuery (79.73%), React (40.43%), Vue.js (17.07%) and Angular 2+ (12.78%).

Although jQuery still has the highest number of developers that feel comfortable using it, this number has fallen 6.98% when compared to the 2016 results.

On the flip-side, React has gained 12.30% in this category, making it the framework that the most respondents said that they feel comfortable using.  It also seems that Vue.js has gained a lot of traction with developers, with 17.07% of respondents saying that they feel comfortable using it, up 11.59% from the 2016 results.

Angular 2+ knowledge levels have risen, but slightly less in comparison to React and Vue.js.

In terms of JS utility libraries, more respondents said that they felt comfortable using Lodash (36.97%) than Underscore (28.18%).

Looking at knowledge levels across all the JavaScript MV* frameworks – so everything in the list except jQuery, Underscore and Lodash – 70.5% of respondents said that they felt comfortable using at least one of these frameworks.  That’s up almost 9% (from 61.71%) who said the same in the 2016 survey, and up 20% since 2015.

These figures really show how important it's become to know at least one JavaScript framework in modern front-end development.

---

<a name="js-framework-usage"></a>

## Q15 – Which JavaScript libraries and/or frameworks do you currently use most frequently on projects?

The next question asked respondents to indicate whether they actually use any of the libraries and frameworks mentioned in the previous question.

Respondents were invited to select all (or none) of the tools that they used on their projects.

The responses were as follows:

<div class="responsiveTable">
	<table class="table table--bordered">
		<thead>
			<tr>
				<th></th>
				<th>Number of Votes</th>
				<th>Percentage</th>
				<th>% Diff (to 2016)</th>
			</tr>
		</thead>
		<tbody>
			<tr>
				<th>jQuery</th>
				<td>2,788</td>
				<td>51.05%</td>
				<td class="is-trendDown">-19.20%</td>
			</tr>
			<tr>
				<th>React</th>
				<td>2,588</td>
				<td>47.39%</td>
				<td class="is-trendUp">+10.48%</td>
			</tr>
			<tr>
				<th>Lodash</th>
				<td>1,847</td>
				<td>33.82%</td>
				<td class="is-trendUp">+2.05%</td>
			</tr>
			<tr>
				<th>Vue.js</th>
				<td>1,253</td>
				<td>22.94%</td>
				<td class="is-trendUp">+13.59%</td>
			</tr>
			<tr>
				<th>Angular 2+</th>
				<td>771</td>
				<td>14.12%</td>
				<td class="is-trendUp">+5.65%</td>
			</tr>
			<tr>
				<th>Angular 1</th>
				<td>569</td>
				<td>10.42%</td>
				<td class="is-trendDown">-14.68%</td>
			</tr>
			<tr>
				<th>Underscore</th>
				<td>428</td>
				<td>7.84%</td>
				<td class="is-trendDown">-7.08%</td>
			</tr>
			<tr>
				<th>Ember</th>
				<td>328</td>
				<td>6.01%</td>
				<td class="is-trendDown">-0.04%</td>
			</tr>
			<tr>
				<th>Preact</th>
				<td>163</td>
				<td>2.98%</td>
				<td>N/A</td>
			</tr>
			<tr>
				<th>Backbone</th>
				<td>139</td>
				<td>2.55%</td>
				<td class="is-trendDown">-3.73%</td>
			</tr>
			<tr>
				<th>Knockout</th>
				<td>100</td>
				<td>1.83%</td>
				<td class="is-trendDown">-1.58%</td>
			</tr>
			<tr>
				<th>Polymer</th>
				<td>95</td>
				<td>1.74%</td>
				<td class="is-trendDown">-0.14%</td>
			</tr>
			<tr>
				<th>MeteorJS</th>
				<td>75</td>
				<td>1.37%</td>
				<td class="is-trendDown">-0.91%</td>
			</tr>
			<tr>
				<th>Aurelia</th>
				<td>61</td>
				<td>1.12%</td>
				<td class="is-trendDown">-2.17%</td>
			</tr>
			<tr>
				<th>I don’t use any of these approaches or tools</th>
				<td>197</td>
				<td>3.61%</td>
				<td class="is-trendUp">+0.89%</td>
			</tr>
		</tbody>
	</table>
</div>

<div class="img img-extraTall">
	<div class="adaptive-image" data-adaptive="" data-adaptive-image-breakpoints="320 500" data-alt="Which JavaScript libraries and/or frameworks do you currently use most frequently on projects? – Bar Chart showing the results" data-img-320="/assets/img/blog/tooling-survey/2018/q15-small.jpg" data-img-500="/assets/img/blog/tooling-survey/2018/q15-mid.jpg" data-img-max="/assets/img/blog/tooling-survey/2018/q15.jpg">
		<noscript>
			<img src="/assets/img/blog/tooling-survey/2018/q15.jpg" width="850" height="590" alt="Which JavaScript libraries and/or frameworks do you currently use most frequently on projects? – Bar Chart showing the results" />
		</noscript>
	</div>
</div>

This year's figures show some fairly big changes.

jQuery usage is still high amongst developers – with 51.05% of respondents using it on their projects – but React is now a very close second, with 47.39%.  This is actually a huge swing of over 30% when compared to the 2016 results, with jQuery usage falling 19.20% and React usage growing 10.48%.

Lodash was the third most used tool (33.82%) and, interestingly, Vue.js was the next most used tool, with 22.94% of respondents saying they used it frequently on their projects.  This put Vue just ahead of Angular 2+, which received 14.12% of responses.

Angular 1 usage fell by 14.68% from 2016, but this hasn't translated into similar gains for Angular 2+, which only saw growth of 5.65%.  Clearly Angular developers have moved onto alternative frameworks rather than simply moving to the newest version of the framework.

Usage of all other frameworks was down from their respective figures in the 2016 results.

{{> promos promo='advancedreact' }}


<a name="js-framework-essential"></a>

## Q16 – Which JavaScript library or framework would you regard as essential to you on the majority of your projects?

The next question asks respondents to choose the one library or framework that they consider to be essential to them.

In 2016, jQuery was top of the pile with about a third of developers regarding it as essential to them.

Let's see if that's still the case:

<div class="responsiveTable">
	<table class="table table--bordered">
		<thead>
			<tr>
				<th></th>
				<th>Number of Votes</th>
				<th>Percentage</th>
				<th>% Diff (to 2016)</th>
			</tr>
		</thead>
		<tbody>
			<tr>
				<th>React</th>
				<td>1,555</td>
				<td>28.47%</td>
				<td class="is-trendUp">+10.67%</td>
			</tr>
			<tr>
				<th>None of them are essential – I feel comfortable using native JavaScript on my projects</th>
				<td>1,180</td>
				<td>21.61%</td>
				<td class="is-trendUp">+1.04%</td>
			</tr>
			<tr>
				<th>jQuery</th>
				<td>1,078</td>
				<td>19.74%</td>
				<td class="is-trendDown">-12.37%</td>
			</tr>
			<tr>
				<th>Vue.js</th>
				<td>558</td>
				<td>10.22%</td>
				<td class="is-trendUp">+7.21%</td>
			</tr>
			<tr>
				<th>Angular 2+</th>
				<td>338</td>
				<td>6.19%</td>
				<td class="is-trendUp">+3.37%</td>
			</tr>
			<tr>
				<th>Ember</th>
				<td>240</td>
				<td>4.39%</td>
				<td class="is-trendUp">+0.62%</td>
			</tr>
			<tr>
				<th>Lodash</th>
				<td>187</td>
				<td>3.42%</td>
				<td class="is-trendDown">-1.91%</td>
			</tr>
			<tr>
				<th>Angular 1</th>
				<td>93</td>
				<td>1.70%</td>
				<td class="is-trendDown">-6.45%</td>
			</tr>
			<tr>
				<th>Aurelia</th>
				<td>33</td>
				<td>0.60%</td>
				<td class="is-trendDown">-1.72%</td>
			</tr>
			<tr>
				<th>Polymer</th>
				<td>28</td>
				<td>0.51%</td>
				<td class="is-trendUp">+0.17%</td>
			</tr>
			<tr>
				<th>Underscore</th>
				<td>23</td>
				<td>0.42%</td>
				<td class="is-trendDown">-0.40%</td>
			</tr>
			<tr>
				<th>Preact</th>
				<td>15</td>
				<td>0.27%</td>
				<td>N/A</td>
			</tr>
			<tr>
				<th>Backbone</th>
				<td>16</td>
				<td>0.29%</td>
				<td class="is-trendDown">-0.53%</td>
			</tr>
			<tr>
				<th>MeteorJS</th>
				<td>10</td>
				<td>0.18%</td>
				<td class="is-trendUp">+0.01%</td>
			</tr>
			<tr>
				<th>Knockout</th>
				<td>9</td>
				<td>0.16%</td>
				<td class="is-trendDown">-0.22%</td>
			</tr>
			<tr>
				<th>Other (please specify)</th>
				<td>98</td>
				<td>1.79%</td>
				<td class="is-trendUp">+0.19%</td>
			</tr>
		</tbody>
	</table>
</div>

<div class="img img-extraTall">
	<div class="adaptive-image" data-adaptive="" data-adaptive-image-breakpoints="320 500" data-alt="Which JavaScript library or framework would you regard as essential to you on the majority of your projects? – Bar Chart showing the results" data-img-320="/assets/img/blog/tooling-survey/2018/q16-small.jpg" data-img-500="/assets/img/blog/tooling-survey/2018/q16-mid.jpg" data-img-max="/assets/img/blog/tooling-survey/2018/q16.jpg">
		<noscript>
			<img src="/assets/img/blog/tooling-survey/2018/q16.jpg" width="850" height="590" alt="Which JavaScript library or framework would you regard as essential to you on the majority of your projects? – Bar Chart showing the results" />
		</noscript>
	</div>
</div>

There has been a change at the top, with React now the tool that the most respondents say is most essential to them, with 28.47% (1,555).  jQuery is now down to third with 19.74% (1,078), just behind the 21.61% (1,180) of respondents that said that no tool is essential to them.

As we saw in the previous question, Vue.js (10.22%) is considered the next most essential JavaScript framework among respondents, ahead of Angular 2+ (6.19%) and Ember (4.39%).

Drilling down using experience levels reveals some interesting insights.  When looking at the responses of developers with less than 2 years experience in front-end technologies, these figures are even more pronounced, with 32.81% saying that React is their most essential tool and 12.36% saying the same for Vue.js.  Likewise 19.89% chose jQuery as their tool of choice, lower than the average across all experience levels.

Historically, jQuery has been a tool that developers have reached for to help them get started with JavaScript, but looking at these figures more newcomers are choosing to learn a framework instead.  This makes sense in a lot of ways, as there are now far more articles being published about how to get started with React and Vue.js than there are relating to jQuery.

It's clear overall that usage levels of jQuery, although still high, are starting to trend down.  It'll be interesting to see if Vue.js can continue it's growth and establish itself as a serious contender to React's crown in the future.

For the time being though, React is clearly the JavaScript framework of choice among front-end developers.

{{> promos promo='advancedreact' }}


<a name="js-bundler"></a>

## Q17 – JavaScript Module Bundlers – Usage

Looking back at 2016, Webpack was the clear leader when it came to JavaScript module bundlers, with 41.23% of respondents using it.

So has anything changed since then, or has this lead continued to grow?  The question asked was – **Do you use a JavaScript module bundler in your workflow?**

Let’s take a look at the results:

<div class="responsiveTable">
	<table class="table table--bordered">
		<thead>
			<tr>
				<th>Module Bundler</th>
				<th>Number of Votes</th>
				<th>Percentage</th>
				<th>% Diff (to 2016)</th>
			</tr>
		</thead>
		<tbody>
			<tr>
				<th>Webpack</th>
				<td>3,587</td>
				<td>65.68%</td>
				<td class="is-trendUp">+24.45%</td>
			</tr>
			<tr>
				<th>I don’t use a module bundler</th>
				<td>1,122</td>
				<td>20.55%</td>
				<td class="is-trendDown">-12.11%</td>
			</tr>
			<tr>
				<th>Browserify</th>
				<td>203</td>
				<td>3.72%</td>
				<td class="is-trendDown">-6.94%</td>
			</tr>
			<tr>
				<th>RequireJS</th>
				<td>139</td>
				<td>2.55%</td>
				<td class="is-trendDown">-5.20%</td>
			</tr>
			<tr>
				<th>Rollup</th>
				<td>119</td>
				<td>2.18%</td>
				<td class="is-trendUp">+0.49%</td>
			</tr>
			<tr>
				<th>Parcel</th>
				<td>57</td>
				<td>1.04%</td>
				<td>N/A</td>
			</tr>
			<tr>
				<th>JSPM</th>
				<td>15</td>
				<td>0.27%</td>
				<td class="is-trendDown">-1.99%</td>
			</tr>
			<tr>
				<th>Other (please specify)</th>
				<td>219</td>
				<td>4.01%</td>
				<td class="is-trendUp">+0.26%</td>
			</tr>
		</tbody>
	</table>
</div>

<div class="img img-extraTall">
	<div class="adaptive-image" data-adaptive="" data-adaptive-image-breakpoints="320 500" data-alt="Do you use a JavaScript module bundler in your workflow? – Pie Chart showing the results" data-img-320="/assets/img/blog/tooling-survey/2018/q17-small.jpg" data-img-500="/assets/img/blog/tooling-survey/2018/q17-mid.jpg" data-img-max="/assets/img/blog/tooling-survey/2018/q17.jpg">
		<noscript>
			<img src="/assets/img/blog/tooling-survey/2018/q17.jpg" width="720" height="570" alt="Do you use a JavaScript module bundler in your workflow? – Pie Chart showing the results" />
		</noscript>
	</div>
</div>

Webpack has seen further significant gains in usage since 2016, with the majority of respondents (65.68%) now using it – up +24.45% since the last survey.

Usage of Browserify (3.72%) and RequireJS (2.55%) both fell by 6.94% and 5.20% respectively.

Overall usage levels of module bundler's has continued to rise, with 79.45% (4,339) of respondents now using one of these tools, an increase of 12% from 2016's results and up 32% since 2015.

Developers seem to have settled on Webpack in this area of JavaScript tooling.  It's clear that unless a new tool were to emerge and gain traction in the future, it's usage levels will likely continue to rise as it becomes more ubiquitous among developers.


---

<a name="js-bundler-experience"></a>

## Q18 – JavaScript Module Bundlers & Task Runners – Experience

The next question asked respondents about their experience levels across the module bundlers and task managers previously mentioned.

Here's how the results looked:

<div class="responsiveTable">
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
					<th>Gulp</th>
					<td>1.45% (79)</td>
					<td>18.99% (1,037)</td>
					<td>30.01% (1,639)</td>
					<td>49.55% (2,706)</td>
				</tr>
				<tr>
					<th>NPM Scripts</th>
					<td>4.36% (238)</td>
					<td>12.74% (696)</td>
					<td>26.75% (1,461)</td>
					<td>56.14% (3,066)</td>
				</tr>
				<tr>
					<th>Grunt</th>
					<td>2.25% (123)</td>
					<td>33.14% (1,810)</td>
					<td>36.04% (1,968)</td>
					<td>28.57% (1,560)</td>
				</tr>
				<tr>
					<th>Webpack</th>
					<td>2.64% (144)</td>
					<td>19.30% (1,054)</td>
					<td>31.39% (1,714)</td>
					<td>46.68% (2,549)</td>
				</tr>
				<tr>
					<th>Browserify</th>
					<td>9.58% (523)</td>
					<td>52.11% (2,846)</td>
					<td>26.52% (1,448)</td>
					<td>11.79% (644)</td>
				</tr>
				<tr>
					<th>Parcel</th>
					<td>45.32% (2,475)</td>
					<td>46.44% (2,536)</td>
					<td>5.51% (301)</td>
					<td>2.73% (149)</td>
				</tr>
			</tbody>
		</table>
	</div>
</div>

<div class="img img-extraTall">
	<div class="adaptive-image" data-adaptive="" data-adaptive-image-breakpoints="320 500" data-alt="Please indicate which of these JavaScript task runners and/or bundlers you have experience in – Pie Chart showing the results" data-img-320="/assets/img/blog/tooling-survey/2018/q18-small.jpg" data-img-500="/assets/img/blog/tooling-survey/2018/q18-mid.jpg" data-img-max="/assets/img/blog/tooling-survey/2018/q18.jpg">
		<noscript>
			<img src="/assets/img/blog/tooling-survey/2018/q18.jpg" width="850" height="590" alt="Please indicate which of these JavaScript task runners and/or bundlers you have experience in – Pie Chart showing the results" />
		</noscript>
	</div>
</div>

As you might expect from the previous results, the tools that most respondents felt comfortable using were NPM Scripts (56.14%), Gulp (49.55%) and Webpack (46.68%).

It's interesting to see that the percentage of respondents who said that they feel comfortable using Webpack is actually lower than the percentage that said they were using it as their module bundler in the previous question.

This may be down to people using tooling such as Create-React-App, which comes with Webpack preconfigured, meaning that developers don't necessarily need to know it in detail in order to use it on their projects.

---

<a name="js-transpilers"></a>

## Q19 – JavaScript Transpilers

Back in 2016, JavaScript transpilers were a hot new topic.  Since then, Babel has gained a lot of traction as transpiling JavaScript has become best practice, enabling developers to write the latest ES features while being able to compile their code back into code that browsers can still understand.

So how has their usage levels changed since the last survey?

The question I asked was – **Are you using a tool to transpile your JavaScript from ES6 to ES5? (i.e. Babel)**

The results are as follows:

<div class="responsiveTable">
	<table class="table table--bordered">
		<thead>
			<tr>
				<th>Answer</th>
				<th>Number of Votes</th>
				<th>Percentage</th>
				<th>% Diff (to 2016)</th>
			</tr>
		</thead>
		<tbody>
			<tr>
				<th>Yes</th>
				<td>4,192</td>
				<td>76.76%</td>
				<td class="is-trendUp">+15.00%</td>
			</tr>
			<tr>
				<th>No – I’ve heard of these tools, but haven’t used one</th>
				<td>1,066</td>
				<td>19.52%</td>
				<td class="is-trendDown">-10.87%</td>
			</tr>
			<tr>
				<th>No – I’ve never heard of a JavaScript transpiler</th>
				<td>203</td>
				<td>3.72%</td>
				<td class="is-trendDown">-3.63%</td>
			</tr>
		</tbody>
	</table>
</div>

<div class="img img-tall">
	<div class="adaptive-image" data-adaptive="" data-adaptive-image-breakpoints="320 500" data-alt="Are you using a tool to transpile your JavaScript from ES6 to ES5? – Pie Chart showing the results" data-img-320="/assets/img/blog/tooling-survey/2018/q19-small.jpg" data-img-500="/assets/img/blog/tooling-survey/2018/q19-mid.jpg" data-img-max="/assets/img/blog/tooling-survey/2018/q19.jpg">
		<noscript>
			<img src="/assets/img/blog/tooling-survey/2018/q19.jpg" width="720" height="570" alt="Are you using a tool to transpile your JavaScript from ES6 to ES5? – Pie Chart showing the results" />
		</noscript>
	</div>
</div>

As you may have expected, usage of transpilers has continued to grow, with 76.76% of respondents now using one in their workflow, up 15% since the last survey.

As I mentioned in the 2016 results, knowledge of a tool such as Babel is now an essential part of modern JavaScript development.  If you haven't taken steps to integrate this into your workflow, I'd recommend that you do so in order to have access to the latest JavaScript features.

{{> promos promo='es6' }}

<a name="js-extensions"></a>

## Q20 – JavaScript Extension Languages

This question was another new one added on the back of feedback from last year's survey, with a number of people wanting to know about TypeScript and extension language usage.

TypeScript, and more recently Flow, have been gaining more momentum due to their usefulness in bringing static typing to JavaScript.

The question asked was – **Please indicate your experience with the following extensions of JavaScript**

Here are the results:

<div class="responsiveTable">
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
					<th>TypeScript</th>
					<td>2.23% (122)</td>
					<td>48.05% (2,624)</td>
					<td>27.83% (1,520)</td>
					<td>21.88% (1,195)</td>
				</tr>
				<tr>
					<th>Flow</th>
					<td>33.91% (1,852)</td>
					<td>50.47% (2,756)</td>
					<td>10.95% (598)</td>
					<td>4.67% (255)</td>
				</tr>
				<tr>
					<th>Elm</th>
					<td>29.32% (1,601)</td>
					<td>64.40% (3,517)</td>
					<td>5.07% (277)</td>
					<td>1.21% (66)</td>
				</tr>
				<tr>
					<th>ClojureScript</th>
					<td>33.55% (1,832)</td>
					<td>63.60% (3,473)</td>
					<td>2.38% (130)</td>
					<td>0.48% (26)</td>
				</tr>
			</tbody>
		</table>
	</div>
</div>

<div class="img img-tall">
	<div class="adaptive-image" data-adaptive="" data-adaptive-image-breakpoints="320 500" data-alt="Please indicate your experience with the following extensions of JavaScript – Bar Chart showing the results" data-img-320="/assets/img/blog/tooling-survey/2018/q20-small.jpg" data-img-500="/assets/img/blog/tooling-survey/2018/q20-mid.jpg" data-img-max="/assets/img/blog/tooling-survey/2018/q20.jpg">
		<noscript>
			<img src="/assets/img/blog/tooling-survey/2018/q20.jpg" width="850" height="500" alt="Please indicate your experience with the following extensions of JavaScript – Bar Chart showing the results" />
		</noscript>
	</div>
</div>

Looking at the results, TypeScript is the tool that the most respondents felt comfortable using, with 21.88%.  This is compared to just 4.67% saying the same in relation to Flow – a figure I thought would be higher.

Just under half of respondents (49.71%) said that they had used TypeScript at least a little.

This appears to be an area of JavaScript that is gaining more traction currently so it'll be interesting to see if these tools gain more usage in the coming years.

---

<a name="js-linters"></a>

## Q21 – JavaScript Linting

JavaScript linting tools are now considered a part of most developers toolkit's, with over 76% of respondents back in 2016 using one.

ESLint was the most popular tool back then, but is this still the case now?

I asked – **Which tool do you use to lint your JavaScript? (if any)**

Let's look at the results:

<div class="responsiveTable">
	<table class="table table--bordered">
		<thead>
			<tr>
				<th>Tool</th>
				<th>Number of Votes</th>
				<th>Percentage</th>
				<th>% Diff (to 2016)</th>
			</tr>
		</thead>
		<tbody>
			<tr>
				<th>ESLint</th>
				<td>3,314</td>
				<td>60.68%</td>
				<td class="is-trendUp">+20.27%</td>
			</tr>
			<tr>
				<th>I don’t use a JavaScript linter</th>
				<td>841</td>
				<td>15.40%</td>
				<td class="is-trendDown">-7.99%</td>
			</tr>
			<tr>
				<th>TSLint</th>
				<td>555</td>
				<td>10.16%</td>
				<td>N/A</td>
			</tr>
			<tr>
				<th>JSLint</th>
				<td>393</td>
				<td>7.20%</td>
				<td class="is-trendDown">-11.68%</td>
			</tr>
			<tr>
				<th>JSHint</th>
				<td>217</td>
				<td>3.97%</td>
				<td class="is-trendDown">-9.87%</td>
			</tr>
			<tr>
				<th>StandardJS</th>
				<td>87</td>
				<td>1.59%</td>
				<td>N/A</td>
			</tr>
			<tr>
				<th>Other (please specify)</th>
				<td>54</td>
				<td>0.99%</td>
				<td class="is-trendDown">-2.04%</td>
			</tr>
		</tbody>
	</table>
</div>

<div class="img img-tall">
	<div class="adaptive-image" data-adaptive="" data-adaptive-image-breakpoints="320 500" data-alt="Which tool do you use to lint your JavaScript? – Pie Chart showing the results" data-img-320="/assets/img/blog/tooling-survey/2018/q21-small.jpg" data-img-500="/assets/img/blog/tooling-survey/2018/q21-mid.jpg" data-img-max="/assets/img/blog/tooling-survey/2018/q21.jpg">
		<noscript>
			<img src="/assets/img/blog/tooling-survey/2018/q21.jpg" width="850" height="500" alt="Which tool do you use to lint your JavaScript? – Pie Chart showing the results" />
		</noscript>
	</div>
</div>

ESLint usage has grown further since the last survey, with 60.68% of respondents now using it.  The next popular linter was TSLint with 10.16% of respondents using it.

Overall, the percentage of respondents using a JS linter went up by 8% to 84.6%.

Like module bundling, it seems that this area of tooling has settled a little and that ESLint is now considered the tool of choice for the majority of developers.

---

<a name="js-testing"></a>

## Q22 – JavaScript Testing

JavaScript testing has seen steady gains since the first survey in 2015, with 52.07% of respondents saying that they used a tool to test their JavaScript back in 2016.

However, there wasn't a clear leader among the tools available.  So is this still the case?

The question I asked was – **Which tool do you use to test your JavaScript? (if any)**

Here are the results:

<div class="responsiveTable">
	<table class="table table--bordered">
		<thead>
			<tr>
				<th>Tool</th>
				<th>Number of Votes</th>
				<th>Percentage</th>
				<th>% Diff (to 2016)</th>
			</tr>
		</thead>
		<tbody>
			<tr>
				<th>I don’t use a tool to test my JS</th>
				<td>2,382</td>
				<td>43.62%</td>
				<td class="is-trendDown">-4.32%</td>
			</tr>
			<tr>
				<th>Jest</th>
				<td>1,203</td>
				<td>22.03%</td>
				<td class="is-trendUp">+18.60%</td>
			</tr>
			<tr>
				<th>Mocha</th>
				<td>762</td>
				<td>13.95%</td>
				<td class="is-trendDown">-8.39%</td>
			</tr>
			<tr>
				<th>Jasmine</th>
				<td>598</td>
				<td>10.95%</td>
				<td class="is-trendDown">-5.97%</td>
			</tr>
			<tr>
				<th>QUnit</th>
				<td>228</td>
				<td>4.18%</td>
				<td class="is-trendUp">-0.03%</td>
			</tr>
			<tr>
				<th>Enzyme</th>
				<td>97</td>
				<td>1.78%</td>
				<td>N/A</td>
			</tr>
			<tr>
				<th>Ava</th>
				<td>62</td>
				<td>1.14%</td>
				<td class="is-trendDown">-0.53%</td>
			</tr>
			<tr>
				<th>Tape</th>
				<td>50</td>
				<td>0.92%</td>
				<td class="is-trendDown">-0.55%</td>
			</tr>
			<tr>
				<th>Other (please specify)</th>
				<td>79</td>
				<td>1.45%</td>
				<td class="is-trendDown">-0.57%</td>
			</tr>
		</tbody>
	</table>
</div>

<div class="img img-tall">
	<div class="adaptive-image" data-adaptive="" data-adaptive-image-breakpoints="320 500" data-alt="Which tool do you use to test your JavaScript? – Pie Chart showing the results" data-img-320="/assets/img/blog/tooling-survey/2018/q22-small.jpg" data-img-500="/assets/img/blog/tooling-survey/2018/q22-mid.jpg" data-img-max="/assets/img/blog/tooling-survey/2018/q22.jpg">
		<noscript>
			<img src="/assets/img/blog/tooling-survey/2018/q22.jpg" width="720" height="570" alt="Which tool do you use to test your JavaScript? – Pie Chart showing the results" />
		</noscript>
	</div>
</div>

Jest has become the most popular testing tool, with 22.03% of respondents saying that they use it.  Amazingly, this is up 18.60% from 2016 – a pretty huge leap.  It seems Jest has really struck a chord in the community and provided something different to what was available before.

Mocha and Jasmine usage has slipped as a result, with 13.95% and 10.95% usage respectively.

Encouragingly, the percentage of developers using any tool to test their JS has risen to 56.38% – up 4.31% from the 2016 results.

It's great to see more developers using tools to help them test their JavaScript as these figures continue to grow.


---

<a name="js-packagemanagers"></a>

## Q23 – JavaScript Package Managers

The next question was born out of my own desire to find out whether more developers were using NPM or Yarn.

Was Yarn just a flash in the pan, or has it actually seen considerable stickiness in usage among developers.

Therefore, I asked – **Which JavaScript package manager do you primarily use in your workflow?**

This is how people responded:

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
			<th>NPM</th>
			<td>3,462</td>
			<td>63.39%</td>
		</tr>
		<tr>
			<th>Yarn</th>
			<td>1,646</td>
			<td>30.14%</td>
		</tr>
		<tr>
			<th>Don’t use</th>
			<td>313</td>
			<td>5.73%</td>
		</tr>
		<tr>
			<th>Other</th>
			<td>40</td>
			<td>0.73%</td>
		</tr>
	</tbody>
</table>

<div class="img img-tall">
	<div class="adaptive-image" data-adaptive="" data-adaptive-image-breakpoints="320 500" data-alt="Which JavaScript package manager do you primarily use in your workflow? – Pie Chart showing the results" data-img-320="/assets/img/blog/tooling-survey/2018/q23-small.jpg" data-img-500="/assets/img/blog/tooling-survey/2018/q23-mid.jpg" data-img-max="/assets/img/blog/tooling-survey/2018/q23.jpg">
		<noscript>
			<img src="/assets/img/blog/tooling-survey/2018/q23.jpg" width="720" height="570" alt="Which JavaScript package manager do you primarily use in your workflow? – Pie Chart showing the results" />
		</noscript>
	</div>
</div>

NPM is clearly still the leading package manager, with 63.39% of respondents using it.  Almost a third of respondents (30.14%) are using Yarn, showing that there has been a reasonable shift by some developers not content with NPM.

It'll be interesting to see how these figures change in future and if NPM gains back these developers or if Yarn usage grows.

---

<a name="js-misc"></a>

## Q24 – Miscellaneous Tools

The final question of this year's survey looked at knowledge levels across package managers and other various tools that didn't quite fit into any of the categories that had been asked about previously.

Respondents were asked to – **Please indicate your experience with the following front-end tools**.

Here is how people responded:

<div class="responsiveTable">
	<div class="table-wrapper">
		<table class="table table--bordered">
			<thead>
				<tr>
					<th></th>
					<th colspan="2">Never Heard of</th>
					<th colspan="2">Heard of/Read About</th>
					<th colspan="2">Used a little</th>
					<th colspan="2">Feel Comfortable Using</th>
				</tr>
			</thead>
			<tbody>
				<tr>
					<th>NPM</th>
					<td>0.90% (49)</td>
					<td class="is-trendDown">-0.97%</td>
					<td>2.53% (138)</td>
					<td class="is-trendDown">-1.62%</td>
					<td>12.18% (665)</td>
					<td class="is-trendDown">-2.21%</td>
					<td>84.40% (4,609)</td>
					<td class="is-trendUp">+4.80%</td>
				</tr>
				<tr>
					<th>Yarn</th>
					<td>6.34% (346)</td>
					<td class="is-trendDown">-15.99%</td>
					<td>26.92% (1,470)</td>
					<td class="is-trendDown">-23.31%</td>
					<td>21.17% (1,156)</td>
					<td class="is-trendUp">+7.16%</td>
					<td>45.58% (2,489)</td>
					<td class="is-trendUp">+32.14%</td>
				</tr>
				<tr>
					<th>Bower</th>
					<td>4.50% (246)</td>
					<td class="is-trendUp">+1.80%</td>
					<td>31.02% (1,694)</td>
					<td class="is-trendUp">+9.32%</td>
					<td>36.93% (2,017)</td>
					<td class="is-trendUp">+3.49%</td>
					<td>27.54% (1,504)</td>
					<td class="is-trendDown">-14.62%</td>
				</tr>
				<tr>
					<th>Babel</th>
					<td>3.88% (212)</td>
					<td class="is-trendDown">-3.58%</td>
					<td>21.55% (1,177)</td>
					<td class="is-trendDown">-8.07%</td>
					<td>29.99% (1,638)</td>
					<td class="is-trendUp">+5.95%</td>
					<td>44.57% (2,434)</td>
					<td class="is-trendUp">+5.69%</td>
				</tr>
				<tr>
					<th>Prettier</th>
					<td>31.53% (1,722)</td>
					<td>N/A</td>
					<td>29.21% (1,595)</td>
					<td>N/A</td>
					<td>15.86% (866)</td>
					<td>N/A</td>
					<td>23.40% (1,278)</td>
					<td>N/A</td>
				</tr>
				<tr>
					<th>Yeoman</th>
					<td>19.81% (1,082)</td>
					<td class="is-trendUp">+7.29%</td>
					<td>41.84% (2,285)</td>
					<td class="is-trendUp">+0.6%</td>
					<td>29.26% (1,598)</td>
					<td class="is-trendDown">-3.57%</td>
					<td>9.08% (496)</td>
					<td class="is-trendDown">-4.32%</td>
				</tr>
			</tbody>
		</table>
	</div>
</div>

<div class="img img-tall">
	<div class="adaptive-image" data-adaptive="" data-adaptive-image-breakpoints="320 500" data-alt="Please indicate your experience with the following front-end tools – Bar Chart showing the results" data-img-320="/assets/img/blog/tooling-survey/2018/q24-small.jpg" data-img-500="/assets/img/blog/tooling-survey/2018/q24-mid.jpg" data-img-max="/assets/img/blog/tooling-survey/2018/q24.jpg">
		<noscript>
			<img src="/assets/img/blog/tooling-survey/2018/q24.jpg" width="850" height="500" alt="Please indicate your experience with the following front-end tools – Bar Chart showing the results" />
		</noscript>
	</div>
</div>

The biggest change from the 2016 results saw the number of respondents who feel comfortable using Yarn grow to 45.58%, a rise of +32.14%.  This figure is still some way below those that said the same about NPM (84.40%), most likely because developers who know Yarn will also implicitly know NPM, but not necessarily vice-versa.

Babel experience grew slightly with 44.57% of respondents feeling comfortable using it, up +5.69%, while Bower and Yeoman knowledge levels have dropped slightly.  In the case of Bower, this is unsurprising given that the project maintainers have now advised using Yarn and Webpack [as an alternative](https://bower.io/blog/2017/how-to-migrate-away-from-bower/).

Prettier – a fairly new tool aimed at [providing opinionated code formatting](https://prettier.io/) – knowledge levels came in strong, with 23.4% of respondents feeling comfortable using it.  It'll be interesting to see if this tool (or similar alternatives) continue to grow in the future.

---

## Summary

So some very interesting results, especially looking at the figures relating to JavaScript libraries and frameworks!

React is now the library or framework that the most respondents said was essential to them on their projects.  jQuery usage looks like it is starting to fall away slightly, although it is still regarded as the second most essential tool in this area.  This is especially interesting in terms of less experienced developers, who seem to be picking up a framework as the first tool they use, ahead of jQuery.

Vue.js is now the second most popular framework, leapfrogging Angular in terms of being regarded as essential and seeing a large amount of growth in it's knowledge levels and usage.

Elsewhere in the JavaScript landscape, Webpack has consolidated it's position as the most popular module bundler, with ESLint doing the same in the JavaScript linting category.  Jest has also become the most popular JavaScript testing tool, it's usage growing a huge amount since the end of 2016.

Looking at CSS tooling, Sass and Bootstrap sit top of the pile when it comes to CSS processors and CSS frameworks.

CSS-in-JS knowledge and usage levels have continued to grow, with BEM and Autoprefixer knowledge levels also seeing rises in their usage.  On the flip-side, Modernizr usage appears to be falling along with some of the older CSS methodologies such as SMACSS and OOCSS.

Looking at CSS feature usage, flexbox knowledge levels are now extremely high with CSS Grid knowledge levels also looking promising among respondents.  This is encouraging to see given the amount of effort the development community has put in to communicating the benefits of these features.

Looking across all of our front-end tools, it's clear that certain areas seem to have matured with one clear tool now becoming the most popular.  This can be seen with Sass, Webpack and ESLint which are all very dominant in their respective areas of expertise.  It'll be very interesting to see if this happens across more areas of our tooling over time.

---

Thanks again to everyone who has taken part – as I mentioned at the top, the survey will be open for a couple more weeks so if you haven't taken part yet, please [take the time to fill it in](http://ashn.uk/survey-2018).

If anyone has any questions about any of the results, [message me on Twitter](https://twitter.com/AshNolan_) and I’ll do my best to help.

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

