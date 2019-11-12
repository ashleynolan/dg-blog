---
layout: post.hbs

title: The Front-End Tooling Survey 2019 - Results
url: frontend-tooling-survey-2019-results
description: "The results of the 2019 Front-End Tooling Survey are out! Check out the results and analysis of the responses here."

date: November 12, 2019
posted: 2019-11-12T08:00

post:
- post

published: true

categories:
  - "Web Development"
  - "Tooling"

---

{{#markdown}}

It's been a little while in coming, but the results from the 2019 Front-End Tooling Survey are now here!

This year, 3,005 developers answered 27 questions covering a wide range of front-end tools and methodologies. As always, a massive thank you from me to every single person that took the time to fill it in. Organising and writing up the survey has been especially challenging this year with the addition of a baby girl to our family (thus the delay in these results!).

As alway's it's super interesting to look at what’s changed over the last 12 months in front-end tooling and see if our thoughts and opinions are shared by other developers in the industry. These results (hopefully) help to give an insight into the current usage trends and knowledge levels across front-end tools, as well as showing how these are changing over time by looking at [the figures from previous surveys](/blog/frontend-tooling-survey-2018-results).


### Quick Thanks

This survey takes a lot of time to put together each year and is made possible due to the support of Wes Bos (through affiliation with the survey) and my employer, Just Eat.

Wes is renowned for creating awesome learning materials for web developers.  Whether you’re just starting out in web development, or an experienced developer looking to level-up your skillset, I'd highly recommend checking out [Wes's courses](/affiliates).  You'll also find links to Wes' courses where relevant throughout the results.


### The results

So, let's get to it! Grab yourself a `tea || coffee || beverage of your choice` and let’s take a look over the results…

---

## Pre-amble Disclaimer

These results represent a sample of front-end developers working in the industry. Therefore, they shouldn’t be taken as gospel, simply as pointing towards a rough trend.

---

## The responses

As mentioned above, this year's survey received 3,005 responses.  This is down a little from last years survey which received 5,461 responses.

I found it a little more difficult to publicise the survey this year, possibly due to there being an increasing number of web development survey’s out there, but also due to the amount of personal time I could spend trying to get the word out there. All things considered though, over 3,000 responses is still incredible.

In terms of where this year's responses may have come from, the link to the survey was posted on Twitter, Reddit, HackerNews, DesignerNews, Echo.js, LinkedIn and Frontendfront.  It was also featured by a number of newsletters – [FrontEnd Focus](https://frontendfoc.us/) and [CSS Weekly](https://css-weekly.com/) among others.

Where possible, you'll see that I've included the percentage change from the 2018 survey alongside this year's figures.



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
1. [CSS-in-JS Usage](#css-in-js-usage)
1. [CSS Feature Usage](#css-feature-usage)
1. [JavaScript Knowledge Levels](#js-knowledge)
1. [Task Runners](#js-task-runners)
1. [Knowledge of JavaScript Libraries and Frameworks](#js-frameworks)
1. [Most frequently used JS frameworks/libraries](#js-framework-usage)
1. [Most essential JS framework/library](#js-framework-essential)
1. [JavaScript Module Bundler Usage](#js-bundler)
1. [JavaScript Module Bundlers & Task Runners experience](#js-bundler-experience)
1. [JavaScript Transpilers](#js-transpilers)
1. [JavaScript Extension Languages](#js-extensions)
1. [JavaScript Linting](#js-linters)
1. [JavaScript Testing](#js-testing)
1. [Performance Tools & Features](#web-performance)
1. [Accessibility Tools](#web-accessibility)
1. [JavaScript Package Managers](#js-packagemanagers)
1. [Miscellaneous Tools](#js-misc)

{{/markdown}}

</div>

{{#markdown}}

---

<a name="experience-general"></a>

 ## Q1 – General Front-end Experience

The first question in the survey was used to find out the amount of front-end experience each respondent has.

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
			<td>91</td>
			<td>3.03%</td>
		</tr>
		<tr>
			<th>1-2 Years</th>
			<td>279</td>
			<td>9.28%</td>
		</tr>
		<tr>
			<th>2-5 Years</th>
			<td>859</td>
			<td>28.59%</td>
		</tr>
		<tr>
			<th>5-10 Years</th>
			<td>860</td>
			<td>28.62%</td>
		</tr>
		<tr>
			<th>10-15 Years</th>
			<td>503</td>
			<td>16.74%</td>
		</tr>
		<tr>
			<th>Over 15 Years</th>
			<td>413</td>
			<td>13.74%</td>
		</tr>
	</tbody>
</table>

<div class="img img-tall">
	<div class="adaptive-image" data-adaptive="" data-adaptive-image-breakpoints="320 500" data-alt="Roughly how long have you been working with front-end technologies? – Pie Chart showing the results" data-img-320="/assets/img/blog/tooling-survey/2019/q1-small.jpg" data-img-500="/assets/img/blog/tooling-survey/2019/q1-mid.jpg" data-img-max="/assets/img/blog/tooling-survey/2019/q1.jpg">
		<noscript>
			<img src="/assets/img/blog/tooling-survey/2019/q1.jpg" width="720" height="570" alt="Roughly how long have you been working with front-end technologies? – Pie Chart showing the results" />
		</noscript>
	</div>
</div>

59.1% of respondents have been working with front-end technologies for over 5 years. This is up slightly from last year's results (54.18%), so this year's respondents have slightly more experience with front-end technologies.

Just 12.31% of respondents said that they had less than 2 years experience.

As with previous survey's, a clear majority of respondents have a fairly high level of experience in front-end technologies.  It's worth taking this into account when considering the rest of the survey results.

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
			<td>35</td>
			<td>1.16%</td>
		</tr>
		<tr>
			<th>Novice (between Beginner and Intermediate)</th>
			<td>243</td>
			<td>8.09%</td>
		</tr>
		<tr>
			<th>Intermediate</th>
			<td>815</td>
			<td>27.12%</td>
		</tr>
		<tr>
			<th>Advanced (between Intermediate and Expert)</th>
			<td>1452</td>
			<td>48.32%</td>
		</tr>
		<tr>
			<th>Expert</th>
			<td>460</td>
			<td>15.31%</td>
		</tr>
	</tbody>
</table>

<div class="img img-tall">
	<div class="adaptive-image" data-adaptive="" data-adaptive-image-breakpoints="320 500" data-alt="How do you rate your own knowledge of CSS and its associated tools and methodologies? – Pie Chart showing the results" data-img-320="/assets/img/blog/tooling-survey/2019/q2-small.jpg" data-img-500="/assets/img/blog/tooling-survey/2019/q2-mid.jpg" data-img-max="/assets/img/blog/tooling-survey/2019/q2.jpg">
		<noscript>
			<img src="/assets/img/blog/tooling-survey/2019/q2.jpg" width="720" height="570" alt="How do you rate your own knowledge of CSS and its associated tools and methodologies? – Pie Chart showing the results" />
		</noscript>
	</div>
</div>

90.75% of respondents stated that their knowledge in CSS is at an intermediate level or above, with a majority of respondents (63.63%) rating themselves as either Advanced or an Expert.

As I mention every year, any question regarding broad knowledge levels like this is very subjective to the respondent.  One person's idea of what it takes to be an expert in CSS could vary a huge amount to what another person thinks.

Irrespective of this, it's useful to be able to filter these knowledge levels against the results of other questions in the survey – for example to see if more experienced developers favour certain tools over those that beginners may use.  I'll refer back to these results where appropriate in future questions.

---

<a name="css-processors"></a>

## Q3 – CSS Processor Usage

Our first question on CSS Tooling was in relation to CSS processing tools.

In previous years, this question asked respondents to select their favoured CSS Preprocessing Tool.  This year, the question was changed slightly to allow respondents to select multiple tools, asking **Which of these CSS Processors do you regularly use?**

Since the survey began back in 2016, Sass has been the dominant tool in this area, so has anything changed this year?

*N.b. I've included a comparison to last years figures, but it's important to consider that respondents are now able to select multiple responses instead of just one. The results are therefore likely to show at least a small rise in usage across all tools.*

<div class="responsiveTable">
	<table class="table table--bordered">
		<thead>
			<tr>
				<th>Preprocessor</th>
				<th>Number of Votes</th>
				<th>Percentage</th>
				<th>% Diff (to 2018)</th>
			</tr>
		</thead>
		<tbody>
			<tr>
				<th>Sass</th>
				<td>2,322</td>
				<td>77.27%</td>
				<td class="is-trendUp">+11.88%</td>
			</tr>
			<tr>
				<th>PostCSS</th>
				<td>863</td>
				<td>28.72%</td>
				<td class="is-trendUp">+20.06%</td>
			</tr>
			<tr>
				<th>Less</th>
				<td>422</td>
				<td>14.04%</td>
				<td class="is-trendUp">+7.52%</td>
			</tr>
			<tr>
				<th>No Preprocessor</th>
				<td>395</td>
				<td>13.14%</td>
				<td class="is-trendDown">-1.44%</td>
			</tr>
			<tr>
				<th>Stylus</th>
				<td>98</td>
				<td>3.26%</td>
				<td class="is-trendUp">+1.08%</td>
			</tr>
			<tr>
				<th>Other</th>
				<td>80</td>
				<td>2.66%</td>
				<td class="is-trendDown">-0.01%</td>
			</tr>
		</tbody>
	</table>
</div>

<div class="img img-tall">
	<div class="adaptive-image" data-adaptive="" data-adaptive-image-breakpoints="320 500" data-alt="What is your CSS Processing tool of choice? – Pie Chart showing the results" data-img-320="/assets/img/blog/tooling-survey/2019/q3-small.jpg" data-img-500="/assets/img/blog/tooling-survey/2019/q3-mid.jpg" data-img-max="/assets/img/blog/tooling-survey/2019/q3.jpg">
		<noscript>
			<img src="/assets/img/blog/tooling-survey/2019/q3.jpg" width="850" height="500" alt="What is your CSS Processing tool of choice? – Pie Chart showing the results" />
		</noscript>
	</div>
</div>


As in previous years, Sass is still very much the dominant CSS Processing tool being used by developers, with 77.27% of respondents saying that they used it.

Interestingly, PostCSS is now the second most used tool, with 28.72% of respondents using it. Respondents now being able to choose multiple tools has clearly helped to give a more accurate representation of PostCSS usage, with PostCSS often used in addition to a tool such as Sass.

---

<a name="css-processor-experience"></a>

## Q4 – CSS Processor Experience

The next question followed on from the previous one, with respondents asked to indicate their experience levels across CSS processing tools.

Here are the results:

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
					<td>0.33% (10)</td>
					<td class="is-trendUp">+0.13%</td>
					<td>6.82% (205)</td>
					<td class="is-trendDown">-2.17%</td>
					<td>15.34% (461)</td>
					<td class="is-trendDown">-2.61%</td>
					<td>77.50% (2,329)</td>
					<td class="is-trendUp">+4.64%</td>
				</tr>
				<tr>
					<th>Less</th>
					<td>1.40% (42)</td>
					<td class="is-trendUp">+0.21%</td>
					<td>35.81% (1,076)</td>
					<td class="is-trendDown">-0.52%</td>
					<td>35.34% (1,062)</td>
					<td class="is-trendUp">+1.10%</td>
					<td>27.45% (825)</td>
					<td class="is-trendDown">-0.79%</td>
				</tr>
				<tr>
					<th>Stylus</th>
					<td>21.06% (633)</td>
					<td class="is-trendDown">-1.70%</td>
					<td>61.93% (1,861)</td>
					<td class="is-trendUp">+1.56%</td>
					<td>11.35% (341)</td>
					<td class="is-trendUp">+0.47%</td>
					<td>5.66% (170)</td>
					<td class="is-trendDown">-0.33%</td>
				</tr>
				<tr>
					<th>PostCSS</th>
					<td>15.44% (464)</td>
					<td class="is-trendDown">-1.99%</td>
					<td>41.30% (1,241)</td>
					<td class="is-trendDown">-4.06%</td>
					<td>22.73% (683)</td>
					<td class="is-trendUp">+1.98%</td>
					<td>20.53% (617)</td>
					<td class="is-trendUp">+4.07%</td>
				</tr>
			</tbody>
		</table>
	</div>
</div>

<div class="img img-mid">
	<div class="adaptive-image" data-adaptive="" data-adaptive-image-breakpoints="320 500" data-alt="Please indicate your experience with the following CSS Processing tools – Bar Chart showing the results" data-img-320="/assets/img/blog/tooling-survey/2019/q4-small.jpg" data-img-500="/assets/img/blog/tooling-survey/2019/q4-mid.jpg" data-img-max="/assets/img/blog/tooling-survey/2019/q4.jpg">
		<noscript>
			<img src="/assets/img/blog/tooling-survey/2019/q4.jpg" width="850" height="590" alt="Please indicate your experience with the following CSS Processing tools – Bar Chart showing the results" />
		</noscript>
	</div>
</div>

These results are in-line with the results to the previous question, with more than three quarters of respondents (77.50%) saying that they felt comfortable using Sass while just 7.15% said that they had never used it.

PostCSS knowledge levels rose against last years results as 20.53% of respondents said that they felt comfortable using the tool.

Less and Stylus knowledge levels look to be fairly stagnent when compared to last years results.

It's clear looking at the results from Questions 3 and 4 that Sass is still the dominant tool when it comes to CSS Processing.


---

<a name="css-frameworks"></a>

## Q5 – CSS Frameworks

The next question looked at CSS Framework usage, with respondents asked to **Please indicate which of the following CSS frameworks you use most frequently on your projects (if any)**.

Last year saw Bootstrap as the leader in this category, but has this changed 12 months on?

Let’s look at the results:

<table class="table table--bordered">
	<thead>
		<tr>
			<th>Answer</th>
			<th>Number of Votes</th>
			<th>Percentage</th>
			<th>% Diff (to 2018)</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<th>No Framework</th>
			<td>1,054</td>
			<td>35.07%</td>
			<td class="is-trendUp">+2.15%</td>
		</tr>
		<tr>
			<th>Bootstrap</th>
			<td>840</td>
			<td>27.95%</td>
			<td class="is-trendDown">-7.01%</td>
		</tr>
		<tr>
			<th>Custom Framework</th>
			<td>497</td>
			<td>16.54%</td>
			<td class="is-trendUp">+1.29%</td>
		</tr>
		<tr>
			<th>Tailwind CSS</th>
			<td>129</td>
			<td>4.29%</td>
			<td>N/A</td>
		</tr>
		<tr>
			<th>Bulma</th>
			<td>96</td>
			<td>3.19%</td>
			<td class="is-trendUp">+0.75%</td>
		</tr>
		<tr>
			<th>Foundation</th>
			<td>79</td>
			<td>2.63%</td>
			<td class="is-trendDown">-1.31%</td>
		</tr>
		<tr>
			<th>Materialize</th>
			<td>72</td>
			<td>2.40%</td>
			<td class="is-trendDown">-0.24%</td>
		</tr>
		<tr>
			<th>Semantic UI</th>
			<td>63</td>
			<td>2.10%</td>
			<td class="is-trendUp">+0.16%</td>
		</tr>
		<tr>
			<th>Tachyons</th>
			<td>25</td>
			<td>0.83%</td>
			<td>N/A</td>
		</tr>
		<tr>
			<th>PureCSS</th>
			<td>18</td>
			<td>0.60%</td>
			<td class="is-trendDown">-0.10%</td>
		</tr>
		<tr>
			<th>Other</th>
			<td>132</td>
			<td>4.39%</td>
			<td class="is-trendDown">-0.83%</td>
		</tr>
	</tbody>
</table>

<div class="img img-mid">
	<div class="adaptive-image" data-adaptive="" data-adaptive-image-breakpoints="320 500" data-alt="Please indicate which of the following CSS frameworks you use most frequently on your projects – Bar Chart showing the results" data-img-320="/assets/img/blog/tooling-survey/2019/q5-small.jpg" data-img-500="/assets/img/blog/tooling-survey/2019/q5-mid.jpg" data-img-max="/assets/img/blog/tooling-survey/2019/q5.jpg">
		<noscript>
			<img src="/assets/img/blog/tooling-survey/2019/q5.jpg" width="720" height="570" alt="Please indicate which of the following CSS frameworks you use most frequently on your projects – Bar Chart showing the results" />
		</noscript>
	</div>
</div>


In a change from last years results, the most popular answer – with just over a third of the responses (35.07%) – was from those developers that said that they didn't use any framework.

Although no longer the top response in this question, Bootstrap was still the most popular CSS framework, with 27.95% of respondents using it. This was a fall of 7.01% in comparison to last years results.

Behind Bootstrap, the next most popular CSS Framework was Tailwind CSS.

Showing a similar trend to last years results, there was a clear difference when looking at the usage of CSS frameworks set against CSS knowledge levels. For example, developers who said that they were at Beginner or Novice CSS level were more likely to use Bootstrap (43.17%) than developers who stated that they were either Advanced or Expert level developers (23.69%).

There was also a clear (but arguably, expected) disparity across knowledge levels when looking at the usage of custom CSS frameworks. Overall, 16.54% of respondents said that they used a Custom Framework. This fell to 8.63% of respondents when looking at those respondents who said that they were at a Beginner or Novice level of CSS, whereas this rose to 20.35% when looking at developers with Advanced or Expert knowledge of CSS.

Overall though, it looks like the usage of off-the-shelf CSS Frameworks is down slightly in comparison to last years results.

---

<a name="css-naming"></a>

## Q6 – CSS Naming Schemes

The next question in the survey asked respondents – **Do you use a CSS naming scheme when writing CSS –  such as BEM or SUIT?**.

The responses were as follows:

<div class="responsiveTable">
	<table class="table table--bordered">
		<thead>
			<tr>
				<th>Answer</th>
				<th>Number of Votes</th>
				<th>Percentage</th>
				<th>% Diff (to 2018)</th>
			</tr>
		</thead>
		<tbody>
			<tr>
				<th>Yes</th>
				<td>1,565</td>
				<td>52.08%</td>
				<td class="is-trendUp">+3.15%</td>
			</tr>
			<tr>
				<th>No – I’ve heard of CSS naming schemes but don’t use one</th>
				<td>1,153</td>
				<td>38.37%</td>
				<td class="is-trendDown">-0.76%</td>
			</tr>
			<tr>
				<th>No – I’ve never heard of CSS naming schemes</th>
				<td>287</td>
				<td>9.55%</td>
				<td class="is-trendDown">-2.39%</td>
			</tr>
		</tbody>
	</table>
</div>

<div class="img img-tall">
	<div class="adaptive-image" data-adaptive="" data-adaptive-image-breakpoints="320 500" data-alt="Do you use a naming scheme when writing CSS, such as BEM or SUIT? – Pie Chart showing the results" data-img-320="/assets/img/blog/tooling-survey/2019/q6-small.jpg" data-img-500="/assets/img/blog/tooling-survey/2019/q6-mid.jpg" data-img-max="/assets/img/blog/tooling-survey/2019/q6.jpg">
		<noscript>
			<img src="/assets/img/blog/tooling-survey/2019/q6.jpg" width="720" height="570" alt="Do you use a naming scheme when writing CSS, such as BEM or SUIT? – Pie Chart showing the results" />
		</noscript>
	</div>
</div>

For the first time since the survey started asking developers about CSS naming schemes back in 2016, a majority – 52.08% – responded that they use a CSS naming scheme, up +3.15% from last years results.

The number of developers who had never heard of CSS naming schemes also fell to 9.55%, a difference of -2.39% from a year ago.

From these results, it's clear that usage levels in this area of tooling is still rising, with developers not using a CSS naming scheme now in the minority.

---

<a name="css-linting"></a>

## Q7 – CSS Linting

Usage of CSS Linters has been gradually growing since we started asking respondents about the subject back in 2016.

Last year, a majority of developers (50.56%) were still choosing not to lint their CSS, so it'll be interesting to see if this dynamic has changed a year on.

The question asked was – **Do you use a tool to lint your CSS?**

Here are the results:

<div class="responsiveTable">
	<table class="table table--bordered">
		<thead>
			<tr>
				<th>Answer</th>
				<th>Number of Votes</th>
				<th>Percentage</th>
				<th>% Diff (to 2018)</th>
			</tr>
		</thead>
		<tbody>
			<tr>
				<th>Yes</th>
				<td>1,599</td>
				<td>53.21%</td>
				<td class="is-trendUp">+3.77%</td>
			</tr>
			<tr>
				<th>No – I don’t lint my CSS</th>
				<td>1,406</td>
				<td>46.79%</td>
				<td class="is-trendDown">-3.77%</td>
			</tr>
		</tbody>
	</table>
</div>

<div class="img img-tall">
	<div class="adaptive-image" data-adaptive="" data-adaptive-image-breakpoints="320 500" data-alt="Do you use a tool to lint your CSS? – Pie Chart showing the results" data-img-320="/assets/img/blog/tooling-survey/2019/q7-small.jpg" data-img-500="/assets/img/blog/tooling-survey/2019/q7-mid.jpg" data-img-max="/assets/img/blog/tooling-survey/2019/q7.jpg">
		<noscript>
			<img src="/assets/img/blog/tooling-survey/2019/q7.jpg" width="720" height="570" alt="Do you use a tool to lint your CSS? – Pie Chart showing the results" />
		</noscript>
	</div>
</div>

As with CSS Naming Schemes, the results show that for the first time a majority of respondents (53.21%) are now choosing to lint their CSS, up +3.77% from the number that said the same in last years survey.

It's also clear from the results that more advanced CSS developers are more likely to be linting their CSS. Just 28.42% of those with Beginner or Novice CSS knowledge said that they use a CSS linter, compared with 60.15% of those with Advanced CSS knowledge or higher.

CSS linting is steadily on the rise among developers as great tools like Stylelint become more widely known (as we'll look at in the next question).

---

<a name="css-tool-experience"></a>

## Q8 – CSS Tool Experience

The next four questions cover knowledge and usage levels across a number of different CSS methodologies and helper tools.

Firstly, Question 8 asked for respondents to state their experience with Autoprefixer, Modernizr and Stylelint.

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
					<th>Autoprefixer</th>
					<td>16.71% (502)</td>
					<td class="is-trendDown">-0.81%</td>
					<td>15.17% (456)</td>
					<td class="is-trendDown">-1.93%</td>
					<td>17.60% (529)</td>
					<td class="is-trendUp">+0.64%</td>
					<td>50.52% (1,518)</td>
					<td class="is-trendUp">+2.10%</td>
				</tr>
				<tr>
					<th>Modernizr</th>
					<td>12.51% (376)</td>
					<td class="is-trendUp">+1.45%</td>
					<td>28.99% (871)</td>
					<td class="is-trendUp">+1.83%</td>
					<td>34.48% (1,036)</td>
					<td class="is-trendUp">+0.22%</td>
					<td>24.03% (722)</td>
					<td class="is-trendDown">-3.49%</td>
				</tr>
				<tr>
					<th>Stylelint</th>
					<td>37.74% (1,134)</td>
					<td class="is-trendDown">-6.46%</td>
					<td>24.86% (747)</td>
					<td class="is-trendDown">-1.01%</td>
					<td>14.38% (432)</td>
					<td class="is-trendUp">+2.33%</td>
					<td>23.03% (692)</td>
					<td class="is-trendUp">+5.16%</td>
				</tr>
			</tbody>
		</table>
	</div>
</div>

<div class="img">
	<div class="adaptive-image" data-adaptive="" data-adaptive-image-breakpoints="320 500" data-alt="Please indicate your experience with the following CSS tools – Bar Chart showing the results" data-img-320="/assets/img/blog/tooling-survey/2019/q8-small.jpg" data-img-500="/assets/img/blog/tooling-survey/2019/q8-mid.jpg" data-img-max="/assets/img/blog/tooling-survey/2019/q8.jpg">
		<noscript>
			<img src="/assets/img/blog/tooling-survey/2019/q8.jpg" width="850" height="450" alt="Please indicate your experience with the following CSS tools – Bar Chart showing the results" />
		</noscript>
	</div>
</div>

Out of the three tools, Autoprefixer was the most well known, with 50.52% of developers responding that they feel comfortable using it.

Stylelint knowledge levels rose the most over the last 12 months, with 23.03% of developers now feeling comfortable using the tool – a gain of +5.16%.

Modernizr knowledge levels fell a small amount, with the number of respondents saying that they had never heard of it rising and the number who said they felt comfortable using it falling (a drop of -3.49%, to 24.03%).


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
					<td>7.72% (232)</td>
					<td class="is-trendDown">-4.59%</td>
					<td>39.43% (1,185)</td>
					<td class="is-trendDown">-2.14%</td>
					<td>25.32% (761)</td>
					<td class="is-trendDown">-0.88%</td>
					<td>27.52% (827)</td>
					<td class="is-trendUp">+7.60%</td>
				</tr>
				<tr>
					<th>SMACSS</th>
					<td>40.27% (1,210)</td>
					<td class="is-trendDown">-0.86%</td>
					<td>39.13% (1,176)</td>
					<td class="is-trendUp">+0.07%</td>
					<td>12.71% (382)</td>
					<td class="is-trendUp">+0.99%</td>
					<td>7.89% (237)</td>
					<td class="is-trendDown">-0.20%</td>
				</tr>
				<tr>
					<th>Object Oriented CSS (OOCSS)</th>
					<td>30.22% (908)</td>
					<td class="is-trendDown">-1.77%</td>
					<td>47.29% (1,421)</td>
					<td class="is-trendUp">+2.22%</td>
					<td>14.18% (426)</td>
					<td class="is-trendUp">+0.15%</td>
					<td>8.32% (250)</td>
					<td class="is-trendDown">-0.60%</td>
				</tr>
				<tr>
					<th>Atomic Design</th>
					<td>27.99% (841)</td>
					<td class="is-trendDown">-5.94%</td>
					<td>40.60% (1,220)</td>
					<td class="is-trendUp">+3.24%</td>
					<td>16.87% (507)</td>
					<td class="is-trendUp">+0.22%</td>
					<td>14.54% (437)</td>
					<td class="is-trendUp">+2.47%</td>
				</tr>
				<tr>
					<th>ITCSS</th>
					<td>63.89% (1,920)</td>
					<td class="is-trendDown">-5.84%</td>
					<td>24.29% (730)</td>
					<td class="is-trendUp">+3.36%</td>
					<td>5.56% (167)</td>
					<td class="is-trendUp">+1.51%</td>
					<td>6.26% (188)</td>
					<td class="is-trendUp">+0.97%</td>
				</tr>
				<tr>
					<th>BEM</th>
					<td>13.48% (405)</td>
					<td class="is-trendDown">-2.52%</td>
					<td>22.16% (666)</td>
					<td class="is-trendDown">-3.68%</td>
					<td>20.83% (626)</td>
					<td class="is-trendUp">+0.83%</td>
					<td>43.53% (1,308)</td>
					<td class="is-trendUp">+5.37%</td>
				</tr>
				<tr>
					<th>SUIT CSS</th>
					<td>68.92% (2,071)</td>
					<td class="is-trendDown">-1.67%</td>
					<td>24.96% (750)</td>
					<td class="is-trendUp">+1.10%</td>
					<td>3.73% (112)</td>
					<td class="is-trendUp">+0.40%</td>
					<td>2.40% (72)</td>
					<td class="is-trendUp">+0.18%</td>
				</tr>
			</tbody>
		</table>
	</div>
</div>

<div class="img">
	<div class="adaptive-image" data-adaptive="" data-adaptive-image-breakpoints="320 500" data-alt="Please indicate your experience with the following CSS methodologies – Bar Chart showing the results" data-img-320="/assets/img/blog/tooling-survey/2019/q9-small.jpg" data-img-500="/assets/img/blog/tooling-survey/2019/q9-mid.jpg" data-img-max="/assets/img/blog/tooling-survey/2019/q9.jpg">
		<noscript>
			<img src="/assets/img/blog/tooling-survey/2019/q9.jpg" width="850" height="450" alt="Please indicate your experience with the following CSS methodologies – Bar Chart showing the results" />
		</noscript>
	</div>
</div>


In a slight change to last year's results, most of the CSS methodologies referenced saw slight gains in their knowledge levels.

BEM is still the methodology that the most respondents (43.53%) said they felt comfortable using, a rise of +5.37% from last year's results.

The biggest 12-month gain was seen by CSS-in-JS, with the number of developers now saying that they feel comfortable using it rising by +7.6% to 27.52%.

SMACSS, OOCSS, Atomic Design and ITCSS all saw the number of respondents who had at least heard of them, or used them a little, rise from last year's results, with Atomic Design and ITCSS seeing the most notable gains.

Looking specifically across the CSS architectural methodologies mentioned – so that’s SMACSS, OOCSS, Atomic Design, ITCSS and CSS-in-JS – the percentage of respondents who said that they feel comfortable using at least one of these rose from 34.90% last year to 42.26% in 2019. That's a rise of +7.36%.  When looking at those respondents who said that they had used one of these CSS methodologies at least a little, this figure rises to 70.75% – up from 66.49% in 2018.

These results indicate that knowledge levels across CSS methodolgies and naming schemes is trending upwards, with BEM, CSS-in-JS and Atomic Design the most well-known in this area.


---

<a name="css-tool-usage"></a>

## Q10 – CSS Tool Usage

Continuing the focus on CSS methodologies, Question 10 asked respondents – **Which of these CSS methodologies or tools do you currently use on your projects?**

Let's take a look at the results.

_n.b. CSS-in-JS is omitted from the available answers below, as question 11 focuses solely on CSS-in-JS usage._

<div class="responsiveTable">
	<table class="table table--bordered">
		<thead>
			<tr>
				<th>Tool/Methodology</th>
				<th>Number of Votes</th>
				<th>Percentage</th>
				<th>% Diff (to 2018)</th>
			</tr>
		</thead>
		<tbody>
			<tr>
				<th>Autoprefixer</th>
				<td>1708</td>
				<td>56.84%</td>
				<td class="is-trendUp">+0.13%</td>
			</tr>
			<tr>
				<th>BEM</th>
				<td>1368</td>
				<td>45.52%</td>
				<td class="is-trendUp">+2.01%</td>
			</tr>
			<tr>
				<th>Stylelint</th>
				<td>826</td>
				<td>27.49%</td>
				<td class="is-trendUp">+4.71%</td>
			</tr>
			<tr>
				<th>Modernizr</th>
				<td>634</td>
				<td>21.10%</td>
				<td class="is-trendDown">-8.24%</td>
			</tr>
			<tr>
				<th>Atomic Design</th>
				<td>463</td>
				<td>15.41%</td>
				<td class="is-trendUp">+0.19%</td>
			</tr>
			<tr>
				<th>Object Oriented CSS (OOCSS)</th>
				<td>218</td>
				<td>7.25%</td>
				<td class="is-trendDown">-1.98%</td>
			</tr>
			<tr>
				<th>SMACSS</th>
				<td>173</td>
				<td>5.76%</td>
				<td class="is-trendDown">-0.89%</td>
			</tr>
			<tr>
				<th>ITCSS</th>
				<td>155</td>
				<td>5.16%</td>
				<td class="is-trendUp">+0.36%</td>
			</tr>
			<tr>
				<th>SUIT CSS</th>
				<td>46</td>
				<td>1.53%</td>
				<td class="is-trendUp">+0.03%</td>
			</tr>
			<tr>
				<th>I don’t use any of these approaches or tools</th>
				<td>664</td>
				<td>22.10%</td>
				<td class="is-trendUp">+5.18%</td>
			</tr>
		</tbody>
	</table>
</div>

<div class="img img-extraTall">
	<div class="adaptive-image" data-adaptive="" data-adaptive-image-breakpoints="320 500" data-alt="Which of these CSS methodologies or tools do you currently use on your projects? – Bar Chart showing the results" data-img-320="/assets/img/blog/tooling-survey/2019/q10-small.jpg" data-img-500="/assets/img/blog/tooling-survey/2019/q10-mid.jpg" data-img-max="/assets/img/blog/tooling-survey/2019/q10.jpg">
		<noscript>
			<img src="/assets/img/blog/tooling-survey/2019/q10.jpg" width="850" height="590" alt="Which of these CSS methodologies or tools do you currently use on your projects? – Bar Chart showing the results" />
		</noscript>
	</div>
</div>

Autoprefixer saw the most usage out of these tools and methodologies (56.84%), followed by BEM (45.52%) and Stylelint (27.49%).  These figures were all a slight increase from the 2018 results, with Stylelint seeing the biggest gain with +4.71%.

Modernizr usage fell by -8.24% over the last 12 months to 21.10%, continuing it's downward trend in usage that was observed in last years results.

Although knowledge levels of CSS methodologies appear to have grown slightly, their usage levels have stayed fairly similar to those seen in 2018.  Atomic Design is still the most popular CSS design methodology with 15.41% of developers using it.

Overall, these figures suggest it's been a year of consolidation in this area from 2018.


---

<a name="css-in-js-usage"></a>

## Q11 – CSS-in-JS Usage

The next question is a new question for this year's survey and asks about an area that has seen a lot of interest recently – CSS-in-JS.

The number of developers using CSS-in-JS tools has grown to such a point where it'll be interesting to see which tools are the most popular in this space.

So the question asked was – **What is your preferred CSS-in-JS tool?**


<div class="responsiveTable">
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
				<th>I don't use CSS-in-JS on my projects</th>
				<td>1,662</td>
				<td>55.31%</td>
			</tr>
			<tr>
				<th>Styled Components</th>
				<td>812</td>
				<td>27.02%</td>
			</tr>
			<tr>
				<th>CSS Modules</th>
				<td>292</td>
				<td>9.72%</td>
			</tr>
			<tr>
				<th>Emotion</th>
				<td>119</td>
				<td>3.96%</td>
			</tr>
			<tr>
				<th>JSS</th>
				<td>50</td>
				<td>1.66%</td>
			</tr>
			<tr>
				<th>Aphrodite</th>
				<td>10</td>
				<td>0.33%</td>
			</tr>
			<tr>
				<th>Radium</th>
				<td>1</td>
				<td>0.03%</td>
			</tr>
			<tr>
				<th>Other</th>
				<td>59</td>
				<td>1.96%</td>
			</tr>
		</tbody>
	</table>
</div>

<div class="img">
	<div class="adaptive-image" data-adaptive="" data-adaptive-image-breakpoints="320 500" data-alt="What is your preferred CSS-in-JS tool? – Pie Chart showing the results" data-img-320="/assets/img/blog/tooling-survey/2019/q11-small.jpg" data-img-500="/assets/img/blog/tooling-survey/2019/q11-mid.jpg" data-img-max="/assets/img/blog/tooling-survey/2019/q11.jpg">
		<noscript>
			<img src="/assets/img/blog/tooling-survey/2019/q11.jpg" width="720" height="420" alt="What is your preferred CSS-in-JS tool? – Pie Chart showing the results" />
		</noscript>
	</div>
</div>


44.69% of respondents said that they now use a CSS-in-JS tool, with the most popular option being Styled Components (27.02%). CSS Modules (9.72%) and Emotion (3.96%) were the next most popular tools with developers.

The majority of developers (55.31%) responded that they don't use a CSS-in-JS tool. This is still a relatively new area of tooling and given that it is specialised for certain use-cases, it's unsurprising to see that that is the case.

As you may expect, when filtering by developers who said that they had advanced or expert JS skills, the percentage of respondents using a CSS-in-JS tool rose to 51.38%.  This is perhaps unsurprising, given that CSS-in-JS is generally used in combination with a JavaScript framework.

Overall, it's clear that CSS-in-JS is becoming an important part of many developers toolkits. It'll be interesting to see how these figures change in the future.


---

<a name="css-feature-usage"></a>

## Q12 – CSS Feature Usage

The final CSS related question focused on respondents' knowledge of recent CSS features.

With so much being written and talked about with respect to the latest CSS features, it's always interesting to find out how many developers have started to put these features into practice and gained experience using them.

The question asked was – **Please indicate your experience with the following CSS features**.

Here are the results:


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
					<th>CSS Grid</th>
					<td>0.90% (27)</td>
					<td class="is-trendDown">-0.33%</td>
					<td>21.90% (658)</td>
					<td class="is-trendDown">-14.47%</td>
					<td>48.62% (1,461)</td>
					<td class="is-trendUp">+4.69%</td>
					<td>28.59% (859)</td>
					<td class="is-trendUp">+10.11%</td>
				</tr>
				<tr>
					<th>Flexbox</th>
					<td>0.43% (13)</td>
					<td class="is-trendDown">-0.25%</td>
					<td>2.50% (75)</td>
					<td class="is-trendDown">-3.29%</td>
					<td>16.67% (501)</td>
					<td class="is-trendDown">-9.28%</td>
					<td>80.40% (2,416)</td>
					<td class="is-trendUp">+12.81%</td>
				</tr>
				<tr>
					<th>CSS Custom Properties</th>
					<td>8.95% (269)</td>
					<td class="is-trendDown">-1.18%</td>
					<td>30.58% (919)</td>
					<td class="is-trendDown">-14.06%</td>
					<td>32.58% (979)</td>
					<td class="is-trendUp">+6.38%</td>
					<td>27.89% (838)</td>
					<td class="is-trendUp">+8.86%</td>
				</tr>
				<tr>
					<th>CSS Houdini</th>
					<td>51.75% (1,555)</td>
					<td>N/A</td>
					<td>46.46% (1,396)</td>
					<td>N/A</td>
					<td>1.56% (47)</td>
					<td>N/A</td>
					<td>0.23% (7)</td>
					<td>N/A</td>
				</tr>
			</tbody>
		</table>
	</div>
</div>

<div class="img">
	<div class="adaptive-image" data-adaptive="" data-adaptive-image-breakpoints="320 500" data-alt="Please indicate your experience with the following CSS features – Bar Chart showing the results" data-img-320="/assets/img/blog/tooling-survey/2019/q12-small.jpg" data-img-500="/assets/img/blog/tooling-survey/2019/q12-mid.jpg" data-img-max="/assets/img/blog/tooling-survey/2019/q12.jpg">
		<noscript>
			<img src="/assets/img/blog/tooling-survey/2019/q12.jpg" width="720" height="420" alt="Please indicate your experience with the following CSS features – Bar Chart showing the results" />
		</noscript>
	</div>
</div>

Flexbox (up +12.81% to 80.40%), CSS Grid (up +10.11% to 28.59%) and CSS Custom Properties (up +8.86% to 27.89%) have all seen a rise in the number of developers that now feel comfortable using them.

Almost all developers questioned have now used Flexbox, with 97.07% of respondents saying that they had used it at least a little (this figure was 93.53% in 2018). It's safe to say that Flexbox knowledge is now expected of all front-end developers.

CSS Grid and CSS Custom Properties both saw large swings in the number of respondents moving from having heard of or read about them to having used the feature at least a little. Knowledge in these features still looks like it is growing, with more respondents saying that they've used them a little, than those who feel comfortable using them.

CSS Houdini – a set of API's that help developers extend CSS natively – was asked about for the first time this year. 46.46% of respondents said that they had heard of or read about the feature, but only 1.79% had used it at least a little.  This feature is still bleeding edge, so it's perhaps unsurprising to see so few developers using it presently.

{{> promos promo='grid' promotitle="Learn CSS Grid" }}


<a name="js-knowledge"></a>

## Q13 – JavaScript Knowledge

Moving onto the second half of the survey, the questions now focussed on JavaScript and it's ecosystem of tools.

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
			<td>70</td>
			<td>2.33%</td>
		</tr>
		<tr>
			<th>Novice (between Beginner and Intermediate)</th>
			<td>261</td>
			<td>8.69%</td>
		</tr>
		<tr>
			<th>Intermediate</th>
			<td>901</td>
			<td>29.98%</td>
		</tr>
		<tr>
			<th>Advanced (between Intermediate and Expert)</th>
			<td>1,237</td>
			<td>41.16%</td>
		</tr>
		<tr>
			<th>Expert</th>
			<td>536</td>
			<td>17.84%</td>
		</tr>
	</tbody>
</table>

<div class="img img-extraTall">
	<div class="adaptive-image" data-adaptive="" data-adaptive-image-breakpoints="320 500" data-alt="How do you rate your own knowledge of JavaScript and its associated tools and methodologies? – Pie Chart showing the results" data-img-320="/assets/img/blog/tooling-survey/2019/q13-small.jpg" data-img-500="/assets/img/blog/tooling-survey/2019/q13-mid.jpg" data-img-max="/assets/img/blog/tooling-survey/2019/q13.jpg">
		<noscript>
			<img src="/assets/img/blog/tooling-survey/2019/q13.jpg" width="720" height="570" alt="How do you rate your own knowledge of JavaScript and its associated tools and methodologies? – Pie Chart showing the results" />
		</noscript>
	</div>
</div>


Most of the respondents considered themselves at least at Intermediate level or higher (88.98%), with the majority saying that they were Advanced or Expert (59%).

It would be wrong to say that this is a reflection of knowledge levels across the whole of our industry – it's more likely just a reflection of the knowledge levels of those taking a survey like this one. As you might expect within this context, the weighting is more towards the advanced end of the spectrum.


---

<a name="js-task-runners"></a>

## Q14 – Task Runners

Last year saw usage of NPM Scripts move ahead of Gulp by quite some margin.  Have they consolidated their position 12 months on?

The question that respondents were asked was – **What task runner do you prefer using in your typical project workflow?**


<div class="responsiveTable">
	<table class="table table--bordered">
		<thead>
			<tr>
				<th>Task Runner</th>
				<th>Number of Votes</th>
				<th>Percentage</th>
				<th>% Diff (to 2018)</th>
			</tr>
		</thead>
		<tbody>
			<tr>
				<th>NPM Scripts</th>
				<td>1,933</td>
				<td>64.33%</td>
				<td class="is-trendUp">+16.44%</td>
			</tr>
			<tr>
				<th>Gulp</th>
				<td>557</td>
				<td>18.54%</td>
				<td class="is-trendDown">-11.02%</td>
			</tr>
			<tr>
				<th>Don’t use one</th>
				<td>273</td>
				<td>9.08%</td>
				<td class="is-trendDown">-1.61%</td>
			</tr>
			<tr>
				<th>Grunt</th>
				<td>76</td>
				<td>2.53%</td>
				<td class="is-trendDown">-3.26%</td>
			</tr>
			<tr>
				<th>GUI Application (i.e. Codekit)</th>
				<td>30</td>
				<td>1.00%</td>
				<td class="is-trendDown">-0.04%</td>
			</tr>
			<tr>
				<th>Make</th>
				<td>21</td>
				<td>0.70%</td>
				<td class="is-trendUp">+0.06%</td>
			</tr>
			<tr>
				<th>Other</th>
				<td>115</td>
				<td>3.83%</td>
				<td class="is-trendDown">-0.56%</td>
			</tr>
		</tbody>
	</table>
</div>

<div class="img img-extraTall">
	<div class="adaptive-image" data-adaptive="" data-adaptive-image-breakpoints="320 500" data-alt="What task runner do you prefer using in your typical project workflow? (if any) – Pie Chart showing the results" data-img-320="/assets/img/blog/tooling-survey/2019/q14-small.jpg" data-img-500="/assets/img/blog/tooling-survey/2019/q14-mid.jpg" data-img-max="/assets/img/blog/tooling-survey/2019/q14.jpg">
		<noscript>
			<img src="/assets/img/blog/tooling-survey/2019/q14.jpg" width="720" height="570" alt="What task runner do you prefer using in your typical project workflow? (if any) – Pie Chart showing the results" />
		</noscript>
	</div>
</div>


It's clear from these results that NPM Scripting has firmly consolidated its position in this category. 64.33% of respondents said that they now use them – that's a gain of 16.44% on last year's figures.

Usage of almost all other tools in this category fell, with 18.54% of developers using Gulp (a fall of -11.02%) and just 2.53% of developers using Grunt (a fall of -3.26%).

9.08% of respondents said that they didn't use a task runner, although this percentage is down -1.61% from last year's results.

So the trend seems to be following on from last year's results, with developers steadily migrating away from Gulp and Grunt, to be replaced by NPM Scripts in their workflow.


---

<a name="js-frameworks"></a>

## Q15 – Knowledge of JavaScript Libraries and Frameworks

In the following three questions, we asked respondents about their knowledge and usage levels of JavaScript libraries and frameworks.

Last year, React, Vue and Angular 2+ saw the largest gains in knowledge levels.  jQuery was still the tool that most developers felt comfortable using, but it's actual usage level dipped substantially.

This question looks at knowledge levels across the tools, asking respondents to indicate which JavaScript libraries and frameworks they have experience in.

Here are the results:


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
					<td>0.03% (1)</td>
					<td class="is-trendDown">-0.08%</td>
					<td>2.80% (84)</td>
					<td class="is-trendUp">+0.49%</td>
					<td>21.80% (655)</td>
					<td class="is-trendUp">+3.95%</td>
					<td>75.37% (2,265)</td>
					<td class="is-trendDown">-4.36%</td>
				</tr>
				<tr>
					<th>Lodash</th>
					<td>8.09% (243)</td>
					<td class="is-trendDown">-3.61%</td>
					<td>22.50% (676)</td>
					<td class="is-trendDown">-3.23%</td>
					<td>28.75% (864)</td>
					<td class="is-trendUp">+3.15%</td>
					<td>40.67% (1,222)</td>
					<td class="is-trendUp">+3.70%</td>
				</tr>
				<tr>
					<th>Underscore</th>
					<td>12.58% (378)</td>
					<td class="is-trendUp">+0.09%</td>
					<td>32.58% (979)</td>
					<td class="is-trendDown">-2.34%</td>
					<td>26.39% (793)</td>
					<td class="is-trendUp">+1.98%</td>
					<td>28.45% (855)</td>
					<td class="is-trendUp">+0.27%</td>
				</tr>
				<tr>
					<th>React</th>
					<td>0.27% (8)</td>
					<td class="is-trendDown">-0.11%</td>
					<td>24.53% (737)</td>
					<td class="is-trendDown">-6.62%</td>
					<td>26.86% (807)</td>
					<td class="is-trendDown">-1.18%</td>
					<td>48.35% (1,453)</td>
					<td class="is-trendUp">+7.92%</td>
				</tr>
				<tr>
					<th>Vue.js</th>
					<td>0.43% (13)</td>
					<td class="is-trendDown">-0.6%</td>
					<td>50.18% (1,508)</td>
					<td class="is-trendDown">-8.86%</td>
					<td>26.19% (787)</td>
					<td class="is-trendUp">+3.32%</td>
					<td>23.19% (697)</td>
					<td class="is-trendUp">+6.12%</td>
				</tr>
				<tr>
					<th>Angular 1</th>
					<td>0.57% (17)</td>
					<td class="is-trendDown">-0.07%</td>
					<td>50.75% (1,525)</td>
					<td class="is-trendUp">+3.43%</td>
					<td>29.85% (897)</td>
					<td class="is-trendDown">-0.29%</td>
					<td>18.84% (566)</td>
					<td class="is-trendDown">-3.06%</td>
				</tr>
				<tr>
					<th>Angular 2+</th>
					<td>0.40% (12)</td>
					<td class="is-trendDown">-0.30%</td>
					<td>63.73% (1,915)</td>
					<td class="is-trendDown">-1.31%</td>
					<td>20.07% (603)</td>
					<td class="is-trendDown">-1.41%</td>
					<td>15.81% (475)</td>
					<td class="is-trendUp">+3.03%</td>
				</tr>
				<tr>
					<th>Ember</th>
					<td>5.49% (165)</td>
					<td class="is-trendUp">+1.04%</td>
					<td>79.03% (2,375)</td>
					<td class="is-trendDown">-1.52%</td>
					<td>8.22% (247)</td>
					<td class="is-trendDown">-0.22%</td>
					<td>7.25% (218)</td>
					<td class="is-trendUp">+0.69%</td>
				</tr>
				<tr>
					<th>Preact</th>
					<td>21.30% (640)</td>
					<td class="is-trendDown">-2.30%</td>
					<td>65.02% (1,954)</td>
					<td class="is-trendDown">-0.26%</td>
					<td>9.08% (273)</td>
					<td class="is-trendUp">+2.41%</td>
					<td>4.59% (138)</td>
					<td class="is-trendUp">+0.14%</td>
				</tr>
				<tr>
					<th>Backbone</th>
					<td>8.55% (257)</td>
					<td class="is-trendUp">+1.77%</td>
					<td>65.69% (1,974)</td>
					<td class="is-trendDown">-1.86%</td>
					<td>18.20% (547)</td>
					<td class="is-trendUp">+1.30%</td>
					<td>7.55% (227)</td>
					<td class="is-trendDown">-1.22%</td>
				</tr>
				<tr>
					<th>Knockout</th>
					<td>23.43% (704)</td>
					<td class="is-trendUp">+2.88%</td>
					<td>62.53% (1,879)</td>
					<td class="is-trendDown">-2.44%</td>
					<td>10.88% (327)</td>
					<td class="is-trendUp">+0.22%</td>
					<td>3.16% (95)</td>
					<td class="is-trendDown">-0.67%</td>
				</tr>
				<tr>
					<th>Aurelia</th>
					<td>44.79% (1,346)</td>
					<td class="is-trendUp">+3.37%</td>
					<td>51.48% (1,547)</td>
					<td class="is-trendDown">-3.56%</td>
					<td>2.73% (82)</td>
					<td class="is-trendUp">+0.33%</td>
					<td>1.00% (30)</td>
					<td class="is-trendDown">-0.14%</td>
				</tr>
				<tr>
					<th>MeteorJS</th>
					<td>18.24% (548)</td>
					<td class="is-trendUp">+2.86%</td>
					<td>71.45% (2,147)</td>
					<td class="is-trendDown">-1.91%</td>
					<td>8.95% (269)</td>
					<td class="is-trendDown">-0.33%</td>
					<td>1.36% (41)</td>
					<td class="is-trendDown">-0.62%</td>
				</tr>
				<tr>
					<th>Polymer</th>
					<td>18.64% (560)</td>
					<td class="is-trendUp">+0.68%</td>
					<td>71.48% (2,148)</td>
					<td class="is-trendUp">+0.58%</td>
					<td>8.39% (252)</td>
					<td class="is-trendDown">-1.10%</td>
					<td>1.50% (45)</td>
					<td class="is-trendDown">-0.15%</td>
				</tr>
				<tr>
					<th>D3.js</th>
					<td>13.48% (405)</td>
					<td>N/A</td>
					<td>49.68% (1,493)</td>
					<td>N/A</td>
					<td>29.55% (888)</td>
					<td>N/A</td>
					<td>7.29% (219)</td>
					<td>N/A</td>
				</tr>
			</tbody>
		</table>
	</div>
</div>

<div class="img img-short">
	<div class="adaptive-image" data-adaptive="" data-adaptive-image-breakpoints="320 500" data-alt="Please indicate which JavaScript libraries and/or frameworks you have experience in – Bar Chart showing the results" data-img-320="/assets/img/blog/tooling-survey/2019/q15-small.jpg" data-img-500="/assets/img/blog/tooling-survey/2019/q15-mid.jpg" data-img-max="/assets/img/blog/tooling-survey/2019/q15.jpg">
		<noscript>
			<img src="/assets/img/blog/tooling-survey/2019/q15.jpg" width="850" height="420" alt="Please indicate which JavaScript libraries and/or frameworks you have experience in – Bar Chart showing the results" />
		</noscript>
	</div>
</div>


The tools which had the highest number of respondents who said they felt comfortable using them were jQuery (75.37%), React (48.35%), Lodash (40.67%), Underscore (28.45%) and Vue.js (23.19%).

React and Vue were the two tools that saw the biggest gains in the number of developers that felt comfortable using them, with 48.35% saying that they now felt comfortable using React (+7.92% from 2018), and 23.19% saying the same for Vue (+6.12%).

The number of respondents that said the same about jQuery was down slightly to 75.37% (down -4.36% from 2018).

Knowledge levels of Lodash saw a small gain as well, with those using it a little (28.75%) and those that felt comfortable using it (40.67%) up +3.15% and +3.70% respectively.

This year, D3.js was added as an option on this question for the first time, with 7.29% of developers saying they feel comfortable using it.

Looking at knowledge levels across all the JavaScript MV* frameworks – so everything in the list except jQuery, Underscore, Lodash and D3.js – 78.54% of respondents said that they felt comfortable using at least one of these frameworks.  That figure is up 8.04% on last year's results, and up 28% [since 2016](http://localhost:9000/blog/frontend-tooling-survey-2016-results#js-frameworks), showing just how important it is for front-end developers to know at least one of these tools.


---

<a name="js-framework-usage"></a>

## Q16 – Most frequently used JavaScript tools

Next respondents were asked – **Which JavaScript libraries and/or frameworks do you currently use most frequently on projects?**

Respondents were invited to select all (or none) of the tools that they use on their projects.

The responses were as follows:


<div class="responsiveTable">
	<table class="table table--bordered">
		<thead>
			<tr>
				<th></th>
				<th>Number of Votes</th>
				<th>Percentage</th>
				<th>% Diff (to 2018)</th>
			</tr>
		</thead>
		<tbody>
			<tr>
				<th>React</th>
				<td>1,569</td>
				<td>52.21%</td>
				<td class="is-trendUp">+4.82%</td>
			</tr>
			<tr>
				<th>jQuery</th>
				<td>1,106</td>
				<td>36.81%</td>
				<td class="is-trendDown">-14.24%</td>
			</tr>
			<tr>
				<th>Lodash</th>
				<td>986</td>
				<td>32.81%</td>
				<td class="is-trendDown">-1.01%</td>
			</tr>
			<tr>
				<th>Vue.js</th>
				<td>816</td>
				<td>27.15%</td>
				<td class="is-trendUp">+4.21%</td>
			</tr>
			<tr>
				<th>Angular (v2+)</th>
				<td>472</td>
				<td>15.71%</td>
				<td class="is-trendUp">+1.59%</td>
			</tr>
			<tr>
				<th>D3.js</th>
				<td>267</td>
				<td>8.89%</td>
				<td>N/A</td>
			</tr>
			<tr>
				<th>Ember</th>
				<td>201</td>
				<td>6.69%</td>
				<td class="is-trendUp">+0.68%</td>
			</tr>
			<tr>
				<th>Underscore</th>
				<td>199</td>
				<td>6.62%</td>
				<td class="is-trendDown">-1.22%</td>
			</tr>
			<tr>
				<th>AngularJS</th>
				<td>191</td>
				<td>6.36%</td>
				<td class="is-trendDown">-4.06%</td>
			</tr>
			<tr>
				<th>Preact</th>
				<td>75</td>
				<td>2.50%</td>
				<td class="is-trendDown">-0.48%</td>
			</tr>
			<tr>
				<th>Backbone</th>
				<td>55</td>
				<td>1.83%</td>
				<td class="is-trendDown">-0.72%</td>
			</tr>
			<tr>
				<th>Polymer</th>
				<td>35</td>
				<td>1.16%</td>
				<td class="is-trendDown">-0.58%</td>
			</tr>
			<tr>
				<th>Knockout</th>
				<td>30</td>
				<td>1.00%</td>
				<td class="is-trendDown">-0.83%</td>
			</tr>
			<tr>
				<th>Aurelia</th>
				<td>26</td>
				<td>0.87%</td>
				<td class="is-trendDown">-0.25%</td>
			</tr>
			<tr>
				<th>MeteorJS</th>
				<td>24</td>
				<td>0.80%</td>
				<td class="is-trendDown">-0.57%</td>
			</tr>
			<tr>
				<th>I don’t use any of these approaches or tools</th>
				<td>120</td>
				<td>3.99%</td>
				<td class="is-trendUp">+0.38%</td>
			</tr>
		</tbody>
	</table>
</div>

<div class="img img-extraTall">
	<div class="adaptive-image" data-adaptive="" data-adaptive-image-breakpoints="320 500" data-alt="Which JavaScript libraries and/or frameworks do you currently use most frequently on projects? – Bar Chart showing the results" data-img-320="/assets/img/blog/tooling-survey/2019/q16-small.jpg" data-img-500="/assets/img/blog/tooling-survey/2019/q16-mid.jpg" data-img-max="/assets/img/blog/tooling-survey/2019/q16.jpg">
		<noscript>
			<img src="/assets/img/blog/tooling-survey/2019/q16.jpg" width="850" height="590" alt="Which JavaScript libraries and/or frameworks do you currently use most frequently on projects? – Bar Chart showing the results" />
		</noscript>
	</div>
</div>

For the first time since the survey started back in 2015, jQuery is no longer the most frequently used JS tool, with React now holding that position.

52.21% of developers said that they use React frequently on their projects, a gain of +4.82% from last years results. 36.81% of respondents said that they used jQuery frequently, which shows a -14.24% drop from last year.

Lodash (32.81%), Vue.js (27.15%) and Angular v2+ (15.71%) were the next most frequently used tools, seeing a change of -1.01%, +4.21% and +1.59% respectively compared with the 2018 results.

{{> promos promo='advancedreact' }}


<a name="js-framework-essential"></a>

## Q17 – Most essential JavaScript framework/library

The final JS framework question asked respondents – **Which JavaScript library or framework would you regard as essential to you on the majority of your projects?**

Last year, React gained the biggest share of responses from developers, but has anything changed 12 months on?

Let's take a look:


<div class="responsiveTable">
	<table class="table table--bordered">
		<thead>
			<tr>
				<th></th>
				<th>Number of Votes</th>
				<th>Percentage</th>
				<th>% Diff (to 2018)</th>
			</tr>
		</thead>
		<tbody>
			<tr>
				<th>React</th>
				<td>985</td>
				<td>32.78%</td>
				<td class="is-trendUp">+4.31%</td>
			</tr>
			<tr>
				<th>None of them are essential – I feel comfortable just using native JavaScript on my projects</th>
				<td>651</td>
				<td>21.66%</td>
				<td class="is-trendUp">+0.05%</td>
			</tr>
			<tr>
				<th>Vue.js</th>
				<td>404</td>
				<td>13.44%</td>
				<td class="is-trendUp">+3.22%</td>
			</tr>
			<tr>
				<th>jQuery</th>
				<td>335</td>
				<td>11.15%</td>
				<td class="is-trendDown">-8.59%</td>
			</tr>
			<tr>
				<th>Angular (v2+)</th>
				<td>255</td>
				<td>8.49%</td>
				<td class="is-trendUp">+2.30%</td>
			</tr>
			<tr>
				<th>Ember</th>
				<td>167</td>
				<td>5.56%</td>
				<td class="is-trendUp">+1.17%</td>
			</tr>
			<tr>
				<th>Lodash</th>
				<td>73</td>
				<td>2.43%</td>
				<td class="is-trendDown">-0.99%</td>
			</tr>
			<tr>
				<th>AngularJS</th>
				<td>22</td>
				<td>0.73%</td>
				<td class="is-trendDown">-0.97%</td>
			</tr>
			<tr>
				<th>Aurelia</th>
				<td>18</td>
				<td>0.60%</td>
				<td class="is-trendEqual">0%</td>
			</tr>
			<tr>
				<th>Backbone</th>
				<td>11</td>
				<td>0.37%</td>
				<td class="is-trendUp">+0.08%</td>
			</tr>
			<tr>
				<th>Preact</th>
				<td>8</td>
				<td>0.27%</td>
				<td class="is-trendEqual">0%</td>
			</tr>
			<tr>
				<th>Underscore</th>
				<td>7</td>
				<td>0.23%</td>
				<td class="is-trendDown">-0.19%</td>
			</tr>
			<tr>
				<th>Polymer</th>
				<td>7</td>
				<td>0.23%</td>
				<td class="is-trendDown">-0.28%</td>
			</tr>
			<tr>
				<th>MeteorJS</th>
				<td>4</td>
				<td>0.13%</td>
				<td class="is-trendDown">-0.05%</td>
			</tr>
			<tr>
				<th>Knockout</th>
				<td>1</td>
				<td>0.03%</td>
				<td class="is-trendDown">-0.13%</td>
			</tr>
			<tr>
				<th>D3.js</th>
				<td>1</td>
				<td>0.03%</td>
				<td>N/A</td>
			</tr>
			<tr>
				<th>Other (please specify)</th>
				<td>56</td>
				<td>1.86%</td>
				<td class="is-trendUp">+0.07%</td>
			</tr>
		</tbody>
	</table>
</div>

<div class="img img-extraTall">
	<div class="adaptive-image" data-adaptive="" data-adaptive-image-breakpoints="320 500" data-alt="Which JavaScript library or framework would you regard as essential to you on the majority of your projects? – Bar Chart showing the results" data-img-320="/assets/img/blog/tooling-survey/2019/q17-small.jpg" data-img-500="/assets/img/blog/tooling-survey/2019/q17-mid.jpg" data-img-max="/assets/img/blog/tooling-survey/2019/q17.jpg">
		<noscript>
			<img src="/assets/img/blog/tooling-survey/2019/q17.jpg" width="850" height="590" alt="Which JavaScript library or framework would you regard as essential to you on the majority of your projects? – Bar Chart showing the results" />
		</noscript>
	</div>
</div>

React has consolidated it's position in this year's results with 32.78% of respondents saying that they consider it their most essential JavaScript library or framework.  This figure is up +4.31% from last year's survey.

21.66% of developers said that they consider no tool as essential to them in this category.

The next most essential tools were Vue.js with 13.44% (up +3.22% from last year), jQuery with 11.15% (down -8.59%) and Angular v2+ with 8.49% (up +2.3%).

When filtering down into experience levels the results get more pronounced. 45.14% of those developers with 0-2 years front-end development experience said that React was essential to them.  This figure drops to 24.02% of respondents when looking at those developers with 10+ years experience. 28.06% of developers with that level of experience also say that no library or tool is essential to them.

Overall, looking at the results from all three questions relating to JS libraries and frameworks, React knowledge levels and usage is still growing, with Vue.js clearly the second most popular JavaScript framework (albeit still some way behind React's popularity).

jQuery usage, although falling steadily, is still high – with it still being used frequently by more respondents than Lodash.


{{> promos promo='advancedreact' }}


<a name="js-bundler"></a>

## Q18 – JavaScript Module Bundlers – Usage

For the last couple of survey's, Webpack has been dominant in this category of tooling.  So have any tools started to make a dent in it's dominance?

The question asked was – **Do you use a JavaScript module bundler in your workflow?**

Here are the results:


<div class="responsiveTable">
	<table class="table table--bordered">
		<thead>
			<tr>
				<th>Module Bundler</th>
				<th>Number of Votes</th>
				<th>Percentage</th>
				<th>% Diff (to 2018)</th>
			</tr>
		</thead>
		<tbody>
			<tr>
				<th>Webpack</th>
				<td>2,204</td>
				<td>73.34%</td>
				<td class="is-trendUp">+7.66%</td>
			</tr>
			<tr>
				<th>I don’t use a module bundler</th>
				<td>440</td>
				<td>14.64%</td>
				<td class="is-trendDown">-5.91%</td>
			</tr>
			<tr>
				<th>Parcel</th>
				<td>85</td>
				<td>2.83%</td>
				<td class="is-trendUp">+1.79%</td>
			</tr>
			<tr>
				<th>Rollup</th>
				<td>62</td>
				<td>2.06%</td>
				<td class="is-trendDown">-0.12%</td>
			</tr>
			<tr>
				<th>Browserify</th>
				<td>49</td>
				<td>1.63%</td>
				<td class="is-trendDown">-2.09%</td>
			</tr>
			<tr>
				<th>RequireJS</th>
				<td>37</td>
				<td>1.23%</td>
				<td class="is-trendDown">-1.32%</td>
			</tr>
			<tr>
				<th>SystemJS</th>
				<td>3</td>
				<td>0.10%</td>
				<td>N/A</td>
			</tr>
			<tr>
				<th>Other (please specify)</th>
				<td>125</td>
				<td>4.16%</td>
				<td class="is-trendUp">+0.15%</td>
			</tr>
		</tbody>
	</table>
</div>

<div class="img img-extraTall">
	<div class="adaptive-image" data-adaptive="" data-adaptive-image-breakpoints="320 500" data-alt="Do you use a JavaScript module bundler in your workflow? – Pie Chart showing the results" data-img-320="/assets/img/blog/tooling-survey/2019/q18-small.jpg" data-img-500="/assets/img/blog/tooling-survey/2019/q18-mid.jpg" data-img-max="/assets/img/blog/tooling-survey/2019/q18.jpg">
		<noscript>
			<img src="/assets/img/blog/tooling-survey/2019/q18.jpg" width="720" height="570" alt="Do you use a JavaScript module bundler in your workflow? – Pie Chart showing the results" />
		</noscript>
	</div>
</div>


Webpack has continued to grow over the last 12 months,with 73.34% of respondents saying that they use it as their module bundler. That's a +7.66% rise from last year's results.

The next most used modules bundlers were Parcel and Rollup with 2.83% and 2.06% of the responses.

The number of developers saying that they didn't use a module bundler also fell -5.91%, to 14.64% of responses.  That means that 85.36% of respondents are now using a module bundler.

As with last year, Webpack is still very much the dominant tool in this area and is showing no sign of it being replaced by an alternative tool in the foreseeable future.


---

<a name="js-bundler-experience"></a>

## Q19 – JavaScript Module Bundlers & Task Runners – Experience

The next question asked respondents about their experience levels across the module bundlers and task managers previously mentioned.

Here's how the results looked:

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
					<th>Gulp</th>
					<td>1.66% (50)</td>
					<td class="is-trendUp">+0.21%</td>
					<td>20.33% (611)</td>
					<td class="is-trendUp">+1.34%</td>
					<td>32.21% (968)</td>
					<td class="is-trendUp">+2.20%</td>
					<td>45.79% (1,376)</td>
					<td class="is-trendDown">-3.76%</td>
				</tr>
				<tr>
					<th>NPM Scripts</th>
					<td>3.13% (94)</td>
					<td class="is-trendDown">-1.23%</td>
					<td>9.15% (275)</td>
					<td class="is-trendDown">-3.59%</td>
					<td>23.33% (701)</td>
					<td class="is-trendDown">-3.42%</td>
					<td>64.39% (1,935)</td>
					<td class="is-trendUp">+8.25%</td>
				</tr>
				<tr>
					<th>Grunt</th>
					<td>2.93% (88)</td>
					<td class="is-trendUp">+0.68%</td>
					<td>34.51% (1,037)</td>
					<td class="is-trendUp">+1.37%</td>
					<td>37.97% (1,141)</td>
					<td class="is-trendUp">+1.93%</td>
					<td>24.59% (739)</td>
					<td class="is-trendDown">-3.98%</td>
				</tr>
				<tr>
					<th>Webpack</th>
					<td>2.03% (61)</td>
					<td class="is-trendDown">-0.61%</td>
					<td>13.28% (399)</td>
					<td class="is-trendDown">-6.02%</td>
					<td>32.31% (971)</td>
					<td class="is-trendUp">+0.92%</td>
					<td>52.38% (1,574)</td>
					<td class="is-trendUp">+5.70%</td>
				</tr>
				<tr>
					<th>Browserify</th>
					<td>11.91% (358)</td>
					<td class="is-trendUp">+2.33%</td>
					<td>52.95% (1,591)</td>
					<td class="is-trendUp">+0.84%</td>
					<td>25.76% (774)</td>
					<td class="is-trendDown">-0.76%</td>
					<td>9.38% (282)</td>
					<td class="is-trendDown">-2.41%</td>
				</tr>
				<tr>
					<th>Parcel</th>
					<td>30.18% (907)</td>
					<td class="is-trendDown">-15.14%</td>
					<td>49.78% (1,496)</td>
					<td class="is-trendUp">+3.34%</td>
					<td>12.98% (390)</td>
					<td class="is-trendUp">+7.47%</td>
					<td>7.05% (212)</td>
					<td class="is-trendUp">+4.32%</td>
				</tr>
			</tbody>
		</table>
	</div>
</div>

<div class="img">
	<div class="adaptive-image" data-adaptive="" data-adaptive-image-breakpoints="320 500" data-alt="Please indicate which of these JavaScript task runners and/or bundlers you have experience in – Pie Chart showing the results" data-img-320="/assets/img/blog/tooling-survey/2019/q19-small.jpg" data-img-500="/assets/img/blog/tooling-survey/2019/q19-mid.jpg" data-img-max="/assets/img/blog/tooling-survey/2019/q19.jpg">
		<noscript>
			<img src="/assets/img/blog/tooling-survey/2019/q19.jpg" width="850" height="500" alt="Please indicate which of these JavaScript task runners and/or bundlers you have experience in – Pie Chart showing the results" />
		</noscript>
	</div>
</div>

Reflecting the results in previous questions, the tools that most respondents felt comfortable using were NPM Scripts (64.39%), Webpack (52.38%) and Gulp (45.79%).

NPM Scripts and Webpack saw the biggest rises in the number of developers who now feel comfortable using them.

Parcel also saw decent growth, with both the number of respondents who have used it at least a little (12.98%, up +7.47%) and those who feel comfortable using it (7.05%, up +4.32%) rising from the 2018 results.


---

<a name="js-transpilers"></a>

## Q20 – JavaScript Transpilers

Over the last couple of survey's, Javascript transpilation has grown to such a level that now the vast majority of developers now use it in their workflow.

While I wouldn't expect the use of JavaScript transpilers to have dropped in the last 12 months, it's nevertheless interesting to look at it's adoption levels and how much it's still growing (and if it is still growing).

The question asked was – **Are you using a tool to transpile your JavaScript from ES6 to ES5? (i.e. Babel)**

The results are as follows:

<div class="responsiveTable">
	<table class="table table--bordered">
		<thead>
			<tr>
				<th>Answer</th>
				<th>Number of Votes</th>
				<th>Percentage</th>
				<th>% Diff (to 2018)</th>
			</tr>
		</thead>
		<tbody>
			<tr>
				<th>Yes</th>
				<td>2,451</td>
				<td>81.56%</td>
				<td class="is-trendUp">+4.80%</td>
			</tr>
			<tr>
				<th>No – I’ve heard of these tools, but haven’t used one</th>
				<td>466</td>
				<td>15.51%</td>
				<td class="is-trendDown">-4.01%</td>
			</tr>
			<tr>
				<th>No – I’ve never heard of a JavaScript transpiler</th>
				<td>88</td>
				<td>2.93%</td>
				<td class="is-trendDown">-0.79%</td>
			</tr>
		</tbody>
	</table>
</div>

<div class="img img-tall">
	<div class="adaptive-image" data-adaptive="" data-adaptive-image-breakpoints="320 500" data-alt="Are you using a tool to transpile your JavaScript from ES6 to ES5? – Pie Chart showing the results" data-img-320="/assets/img/blog/tooling-survey/2019/q20-small.jpg" data-img-500="/assets/img/blog/tooling-survey/2019/q20-mid.jpg" data-img-max="/assets/img/blog/tooling-survey/2019/q20.jpg">
		<noscript>
			<img src="/assets/img/blog/tooling-survey/2019/q20.jpg" width="720" height="570" alt="Are you using a tool to transpile your JavaScript from ES6 to ES5? – Pie Chart showing the results" />
		</noscript>
	</div>
</div>

Usage of transpilers has continued to grow, with 81.56% of respondents now using one in their workflow, a rise of +4.8%.

As you might expect, developers with less experience in front-end development are less likely to be using a transpiler, with 70% of respondents with 0-2 year's experience saying they did so.


{{> promos promo='es6' }}

<a name="js-extensions"></a>

## Q21 – JavaScript Extension Languages

The next question was a new addition last year, looking at extension languages such as TypeScript and Flow.

TypeScript was the tool that the most respondents felt comfortable using back then, but has this changed 12 months on?

The question asked was – **Please indicate your experience with the following extensions of JavaScript**

Here are this year's results:


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
					<th>TypeScript</th>
					<td>1.16% (35)</td>
					<td class="is-trendDown">-1.07%</td>
					<td>36.74% (1,104)</td>
					<td class="is-trendDown">-11.31%</td>
					<td>30.18% (907)</td>
					<td class="is-trendUp">+2.35%</td>
					<td>31.91% (959)</td>
					<td class="is-trendUp">+10.03%</td>
				</tr>
				<tr>
					<th>Flow</th>
					<td>27.92% (839)</td>
					<td class="is-trendDown">-5.99%</td>
					<td>55.97% (1,682)</td>
					<td class="is-trendUp">+5.50%</td>
					<td>11.78% (354)</td>
					<td class="is-trendUp">+0.83%</td>
					<td>4.33% (130)</td>
					<td class="is-trendDown">-0.34%</td>
				</tr>
				<tr>
					<th>Elm</th>
					<td>29.42% (884)</td>
					<td class="is-trendUp">+0.10%</td>
					<td>63.93% (1,921)</td>
					<td class="is-trendDown">-0.47%</td>
					<td>5.36% (161)</td>
					<td class="is-trendUp">+0.29%</td>
					<td>1.30% (39)</td>
					<td class="is-trendUp">+0.09%</td>
				</tr>
				<tr>
					<th>ClojureScript</th>
					<td>32.31% (971)</td>
					<td class="is-trendDown">-1.24%</td>
					<td>65.69% (1,974)</td>
					<td class="is-trendUp">+2.09%</td>
					<td>1.73% (52)</td>
					<td class="is-trendDown">-0.65%</td>
					<td>0.27% (8)</td>
					<td class="is-trendDown">-0.21%</td>
				</tr>
				<tr>
					<th>Dart</th>
					<td>27.75% (834)</td>
					<td>N/A</td>
					<td>67.62% (2,032)</td>
					<td>N/A</td>
					<td>4.13% (124)</td>
					<td>N/A</td>
					<td>0.50% (15)</td>
					<td>N/A</td>
				</tr>
			</tbody>
		</table>
	</div>
</div>

<div class="img img-tall">
	<div class="adaptive-image" data-adaptive="" data-adaptive-image-breakpoints="320 500" data-alt="Please indicate your experience with the following extensions of JavaScript – Bar Chart showing the results" data-img-320="/assets/img/blog/tooling-survey/2019/q21-small.jpg" data-img-500="/assets/img/blog/tooling-survey/2019/q21-mid.jpg" data-img-max="/assets/img/blog/tooling-survey/2019/q21.jpg">
		<noscript>
			<img src="/assets/img/blog/tooling-survey/2019/q21.jpg" width="850" height="500" alt="Please indicate your experience with the following extensions of JavaScript – Bar Chart showing the results" />
		</noscript>
	</div>
</div>

TypeScript is still the tool that the most respondents felt comfortable using, with 31.91% – a rise of +10.03% from last year's results.

There was no real change in the figures for the other tools in this category, with no real growth or decline seen.

These results seem to indicate that TypeScript is the tool that most developers are looking into when it comes to this category of tooling.  While still not known by a majority of developers, it's seeing steady growth year-on-year and it'll be interesting to see if this continues in the future.


---

<a name="js-linters"></a>

## Q22 – JavaScript Linting

JavaScript linting tools are practically part of the furniture when it comes to JS workflows and last year ESLint was clearly the linter that the majority of developers were using.

The question I asked was – **Which tool do you use to lint your JavaScript? (if any)**


<div class="responsiveTable">
	<table class="table table--bordered">
		<thead>
			<tr>
				<th>Tool</th>
				<th>Number of Votes</th>
				<th>Percentage</th>
				<th>% Diff (to 2018)</th>
			</tr>
		</thead>
		<tbody>
			<tr>
				<th>ESLint</th>
				<td>2,286</td>
				<td>76.07%</td>
				<td class="is-trendUp">+15.39%</td>
			</tr>
			<tr>
				<th>I don’t use a JavaScript linter</th>
				<td>360</td>
				<td>11.98%</td>
				<td class="is-trendDown">-3.42%</td>
			</tr>
			<tr>
				<th>JSLint</th>
				<td>143</td>
				<td>4.76%</td>
				<td class="is-trendDown">-2.44%</td>
			</tr>
			<tr>
				<th>JSHint</th>
				<td>67</td>
				<td>2.23%</td>
				<td class="is-trendDown">-1.74%</td>
			</tr>
			<tr>
				<th>StandardJS</th>
				<td>43</td>
				<td>1.43%</td>
				<td class="is-trendDown">-0.16%</td>
			</tr>
			<tr>
				<th>Other (please specify)</th>
				<td>106</td>
				<td>3.53%</td>
				<td class="is-trendUp">+2.54%</td>
			</tr>
		</tbody>
	</table>
</div>

<div class="img img-tall">
	<div class="adaptive-image" data-adaptive="" data-adaptive-image-breakpoints="320 500" data-alt="Which tool do you use to lint your JavaScript? – Pie Chart showing the results" data-img-320="/assets/img/blog/tooling-survey/2019/q22-small.jpg" data-img-500="/assets/img/blog/tooling-survey/2019/q22-mid.jpg" data-img-max="/assets/img/blog/tooling-survey/2019/q22.jpg">
		<noscript>
			<img src="/assets/img/blog/tooling-survey/2019/q22.jpg" width="850" height="500" alt="Which tool do you use to lint your JavaScript? – Pie Chart showing the results" />
		</noscript>
	</div>
</div>

The results show a very clear trend, with ESLint usage still rising while all other linting tools seem to be trending downwards in their usage levels.  76.07% of respondents said that they use ESLint, a rise of +15.39% from last year's results.

Some of the gain in ESLint usage could be down to the TSLint team’s decision back in February to deprecate TSLint and focus their efforts on [improving ESLint's TypeScript support](https://medium.com/palantir/tslint-in-2019-1a144c2317a9).

The number of respondents who said that they don't use a JavaScript Linter also fell this year to 11.98%.  That means that 88.02% of developers are now using a tool to help them in this area - that's a rise of 3.42% from the 84.6% of respondents that said the same 12 months ago.

So no real surprises, but further consolidation with ESLint very much considered the tool of choice in this category.


---

<a name="js-testing"></a>

## Q23 – JavaScript Testing

The next question looked at usage of JavaScript testing tools.

This year, the format of the question was changed slightly, as feedback from respondents suggested that many developers used multiple tools rather than just one. Therefore, respondents could choose multiple answers rather than just one to reflect this behaviour.

I've included the percentage difference to last year's results for reference, but due to this change in format it's likely that all of the tools will see at least a small rise in their usage.

The question asked was – **Which of these tools do you use to test your JavaScript? (if any)**

Here are the results:


<div class="responsiveTable">
	<table class="table table--bordered">
		<thead>
			<tr>
				<th>Tool</th>
				<th>Number of Votes</th>
				<th>Percentage</th>
				<th>% Diff (to 2018)</th>
			</tr>
		</thead>
		<tbody>
			<tr>
				<th>Jest</th>
				<td>1,348</td>
				<td>44.86%</td>
				<td class="is-trendUp">+22.83%</td>
			</tr>
			<tr>
				<th>I don’t use a tool to test my JS</th>
				<td>1,071</td>
				<td>35.64%</td>
				<td class="is-trendDown">-7.98%</td>
			</tr>
			<tr>
				<th>Mocha</th>
				<td>785</td>
				<td>26.12%</td>
				<td class="is-trendUp">+12.17%</td>
			</tr>
			<tr>
				<th>Jasmine</th>
				<td>585</td>
				<td>19.47%</td>
				<td class="is-trendUp">+8.52%</td>
			</tr>
			<tr>
				<th>Enzyme</th>
				<td>560</td>
				<td>18.64%</td>
				<td class="is-trendUp">+16.86%</td>
			</tr>
			<tr>
				<th>Cypress</th>
				<td>378</td>
				<td>12.58%</td>
				<td>N/A</td>
			</tr>
			<tr>
				<th>QUnit</th>
				<td>184</td>
				<td>6.12%</td>
				<td class="is-trendUp">+1.94%</td>
			</tr>
			<tr>
				<th>Ava</th>
				<td>102</td>
				<td>3.39%</td>
				<td class="is-trendUp">+2.25%</td>
			</tr>
			<tr>
				<th>Tape</th>
				<td>57</td>
				<td>1.90%</td>
				<td class="is-trendUp">+0.98%</td>
			</tr>
			<tr>
				<th>Other (please specify)</th>
				<td>109</td>
				<td>3.63%</td>
				<td class="is-trendUp">+3.63%</td>
			</tr>
		</tbody>
	</table>
</div>


<div class="img img-tall">
	<div class="adaptive-image" data-adaptive="" data-adaptive-image-breakpoints="320 500" data-alt="Which tool do you use to test your JavaScript? – Pie Chart showing the results" data-img-320="/assets/img/blog/tooling-survey/2019/q23-small.jpg" data-img-500="/assets/img/blog/tooling-survey/2019/q23-mid.jpg" data-img-max="/assets/img/blog/tooling-survey/2019/q23.jpg">
		<noscript>
			<img src="/assets/img/blog/tooling-survey/2019/q23.jpg" width="720" height="570" alt="Which tool do you use to test your JavaScript? – Pie Chart showing the results" />
		</noscript>
	</div>
</div>

As within 2018, Jest is still the tool that most respondents are using, with 44.86%.  Mocha (26.12%), Jasmine (19.47%) and Enzyme (18.64%) were the next most popular tools with respondents.

The percentage of developers using any tool to test their JavaScript rose to 64.36% – that's up +7.98% from last year's results.

I think this year's results show that there is now very broad range of tools available when it comes to JavaScript testing. Even though Jest is currently the most popular tool, there are plenty of other popular options that are worth exploring to help in this area.


---

<a name="web-performance"></a>

## Q24 – Performance Testing

The next question was a new addition to find out how developers are building with performance in mind on their projects.

There are now so many tools and native features available when it comes to page performance, I was intrigued to see which ones are being used the most across the community.

The question I asked was **Which of these tools, libraries or language features do you use to help with performance? (if any)**. Respondents could choose one or more of the options listed.

Let's take a look at the results:


<div class="responsiveTable">
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
				<th>Lighthouse</th>
				<td>1,566</td>
				<td>52.11%</td>
			</tr>
			<tr>
				<th>None of these tools</th>
				<td>952</td>
				<td>31.68%</td>
			</tr>
			<tr>
				<th>WebPageTest</th>
				<td>730</td>
				<td>24.29%</td>
			</tr>
			<tr>
				<th>Service Workers</th>
				<td>695</td>
				<td>23.13%</td>
			</tr>
			<tr>
				<th>Pingdom</th>
				<td>317</td>
				<td>10.55%</td>
			</tr>
			<tr>
				<th>AMP (Accelerated Mobile Pages)</th>
				<td>174</td>
				<td>5.79%</td>
			</tr>
			<tr>
				<th>Other (please specify)</th>
				<td>109</td>
				<td>3.63%</td>
			</tr>
		</tbody>
	</table>
</div>


<div class="img img-tall">
	<div class="adaptive-image" data-adaptive="" data-adaptive-image-breakpoints="320 500" data-alt="Which of these tools, libraries or language features do you use to help with performance? (if any) – Bar Chart showing the results" data-img-320="/assets/img/blog/tooling-survey/2019/q24-small.jpg" data-img-500="/assets/img/blog/tooling-survey/2019/q24-mid.jpg" data-img-max="/assets/img/blog/tooling-survey/2019/q24.jpg">
		<noscript>
			<img src="/assets/img/blog/tooling-survey/2019/q24.jpg" width="850" height="590" alt="Which of these tools, libraries or language features do you use to help with performance? (if any) – Bar Chart showing the results" />
		</noscript>
	</div>
</div>

Lighthouse was the most popular option with respondents, with 52.11% saying that they used it when performance tetsing.

Surprisingly, the second most popular option was "None of these tools", with 31.68% of respondents saying that they didn't use any of the tools or features mentioned.

Of the other available options, 24.29% of developers said that they used WebPageTest and 23.13% of developers said that they were using Service Workers on their projects.

It's also interesting to see that just 5.79% of developers said that they were implementing AMP (Accelerated Mobile Pages) on their projects. Given how hard Google has pushed for the implementation of AMP over the last few years, it seems that it's still fairly niche when it comes to usage levels among respondents.


---

<a name="web-accessibility"></a>

## Q25 – Accessibility Testing

Another new question for this year's survey, this looked to find out usage levels of accessibility testing tools among respondents.

The question asked was **Which of these accessibility tools do you use to test your sites/applications?**. Respondents could choose one or more of the options specified.

Here are the results:


<div class="responsiveTable">
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
				<th>I don't use any tools to accessibility test my sites/applications</th>
				<td>1,897</td>
				<td>63.13%</td>
			</tr>
			<tr>
				<th>Colour Contrast Checker (i.e. contrastchecker.com)</th>
				<td>667</td>
				<td>22.20%</td>
			</tr>
			<tr>
				<th>Screenreader (i.e. JAWS, Voiceover)</th>
				<td>464</td>
				<td>15.44%</td>
			</tr>
			<tr>
				<th>WAVE</th>
				<td>285</td>
				<td>9.48%</td>
			</tr>
			<tr>
				<th>Other (please specify)</th>
				<td>282</td>
				<td>9.38%</td>
			</tr>
		</tbody>
	</table>
</div>


<div class="img img-tall">
	<div class="adaptive-image" data-adaptive="" data-adaptive-image-breakpoints="320 500" data-alt="Which of these accessibility tools do you use to test your sites/applications? – Bar Chart showing the results" data-img-320="/assets/img/blog/tooling-survey/2019/q25-small.jpg" data-img-500="/assets/img/blog/tooling-survey/2019/q25-mid.jpg" data-img-max="/assets/img/blog/tooling-survey/2019/q25.jpg">
		<noscript>
			<img src="/assets/img/blog/tooling-survey/2019/q25.jpg" width="850" height="590" alt="Which of these accessibility tools do you use to test your sites/applications? – Bar Chart showing the results" />
		</noscript>
	</div>
</div>

Somewhat surprisingly, 63.13% of respondents said that they didn't use any tools to accessibility test their projects.

22.20% of respondents said that they were using a colour contrast checker and just 15.44% said that they used a screenreader for accessibility testing.

I have to say, these figures make for extremely depressing reading.

Looking at raw figures like this takes away the context of _why_ people aren't using these tools, but as someone who believes that everyone deserves access to the sites that we're building, to see that almost two thirds of developers aren't using a tool to accessibility test their projects is disappointing.

Tools like Wave and Axe (mentioned by quite a few respondents under 'Other Tools') are extremely easy to use and I'd highly recommend checking them out if you haven't already done so.

Hopefully, the more exposure that we can give to the value and ease of using these tools, the more that these usage figures are likely to rise among developers.


---

<a name="js-packagemanagers"></a>

## Q26 – JavaScript Package Managers

The penultimate question of this year's survey was in relation to JS Package Managers, with the question being – **Which JavaScript package manager do you primarily use in your workflow?**

Last year, NPM was the most popular package manager, but has Yarn gained any ground over the last 12 months?

This is how people responded:


<table class="table table--bordered">
	<thead>
		<tr>
			<th>Answer</th>
			<th>Number of Votes</th>
			<th>Percentage</th>
			<th>% Diff (to 2018)</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<th>NPM</th>
			<td>1,965</td>
			<td>65.39%</td>
			<td class="is-trendUp">+2.00%</td>
		</tr>
		<tr>
			<th>Yarn</th>
			<td>895</td>
			<td>29.78%</td>
			<td class="is-trendDown">-0.36%</td>
		</tr>
		<tr>
			<th>I don’t use a package manager</th>
			<td>135</td>
			<td>4.49%</td>
			<td class="is-trendDown">-1.24%</td>
		</tr>
		<tr>
			<th>Other</th>
			<td>10</td>
			<td>0.33%</td>
			<td class="is-trendDown">-0.40%</td>
		</tr>
	</tbody>
</table>

<div class="img img-tall">
	<div class="adaptive-image" data-adaptive="" data-adaptive-image-breakpoints="320 500" data-alt="Which JavaScript package manager do you primarily use in your workflow? – Pie Chart showing the results" data-img-320="/assets/img/blog/tooling-survey/2019/q26-small.jpg" data-img-500="/assets/img/blog/tooling-survey/2019/q26-mid.jpg" data-img-max="/assets/img/blog/tooling-survey/2019/q26.jpg">
		<noscript>
			<img src="/assets/img/blog/tooling-survey/2019/q26.jpg" width="720" height="570" alt="Which JavaScript package manager do you primarily use in your workflow? – Pie Chart showing the results" />
		</noscript>
	</div>
</div>

Looking at the results, NPM usage has grown very slightly with 65.39% of respondents saying that they now use it.

Usage of Yarn stayed pretty static, with it falling a small percentage to 29.78%.

Overall, it looks like the majority of people are happy using NPM as their package manager, with no real change being observed in this category when compared to last years figures.


---

<a name="js-misc"></a>

## Q27 – Miscellaneous Tools

The final question of this year's survey looked at knowledge levels across various front-end tools (some of which didn't quite fit into any of the categories that had been asked about previously).

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
					<td>0.43% (13)</td>
					<td class="is-trendDown">-0.41%</td>
					<td>1.80% (54)</td>
					<td class="is-trendDown">-0.69%</td>
					<td>10.75% (323)</td>
					<td class="is-trendDown">-1.14%</td>
					<td>87.02% (2,615)</td>
					<td class="is-trendUp">+2.24%</td>
				</tr>
				<tr>
					<th>Yarn</th>
					<td>3.29% (99)</td>
					<td class="is-trendDown">-2.95%</td>
					<td>22.30% (670)</td>
					<td class="is-trendDown">-4.21%</td>
					<td>23.79% (715)</td>
					<td class="is-trendUp">+2.84%</td>
					<td>50.62% (1,521)</td>
					<td class="is-trendUp">+4.32%</td>
				</tr>
				<tr>
					<th>Babel</th>
					<td>2.70% (81)</td>
					<td class="is-trendDown">-1.07%</td>
					<td>16.71% (502)</td>
					<td class="is-trendDown">-4.22%</td>
					<td>30.98% (931)</td>
					<td class="is-trendUp">+1.22%</td>
					<td>49.62% (1,491)</td>
					<td class="is-trendUp">+4.08%</td>
				</tr>
				<tr>
					<th>Prettier</th>
					<td>15.67% (471)</td>
					<td class="is-trendDown">-14.76%</td>
					<td>21.60% (649)</td>
					<td class="is-trendDown">-8.03%</td>
					<td>22.30% (670)</td>
					<td class="is-trendUp">+6.25%</td>
					<td>40.43% (1,215)</td>
					<td class="is-trendUp">+16.53%</td>
				</tr>
				<tr>
					<th>Yeoman</th>
					<td>24.76% (744)</td>
					<td class="is-trendUp">+5.63%</td>
					<td>40.67% (1,222)</td>
					<td class="is-trendDown">-1.18%</td>
					<td>26.69% (802)</td>
					<td class="is-trendDown">-3.07%</td>
					<td>7.89% (237)</td>
					<td class="is-trendDown">-1.37%</td>
				</tr>
			</tbody>
		</table>
	</div>
</div>

<div class="img img-tall">
	<div class="adaptive-image" data-adaptive="" data-adaptive-image-breakpoints="320 500" data-alt="Please indicate your experience with the following front-end tools – Bar Chart showing the results" data-img-320="/assets/img/blog/tooling-survey/2019/q27-small.jpg" data-img-500="/assets/img/blog/tooling-survey/2019/q27-mid.jpg" data-img-max="/assets/img/blog/tooling-survey/2019/q27.jpg">
		<noscript>
			<img src="/assets/img/blog/tooling-survey/2019/q27.jpg" width="850" height="500" alt="Please indicate your experience with the following front-end tools – Bar Chart showing the results" />
		</noscript>
	</div>
</div>

Out of these tools, NPM is the one that the most respondents say they feel comfortable using (87.02%). Yarn, with 50.62%, and Babel, with 49.62%, were the next most familiar tools with developers, with both of these tools seeing small rises in developer knowledge levels over the last 12 months.

The biggest change from last year's results was the number of respondents who now feel comfortable using Prettier, with this percentage rising 16.53% to 40.43% of respondents.

Yeoman knowledge levels dropped slightly, a trend that was also observed last year.


---

## Summary

So there we have it – another interesting year in tooling!

In some areas of tooling, developers are clearly consolidating around one tool. ESLint, NPM Scripts and Webpack for instance when it comes to JavaScript linting, task running or module bundling respectively.

Looking at JavaScript frameworks and libraries, React maintained its position as the most essential framework among respondents, with respondents naming Vue.js as the next most essential JS framework/library. A large percentage of developers (21.66%) still see no single framework or library as essential, with native JS becoming more capable each year.

The most shocking figure in this year's results came in relation to accessibility testing, with 63.13% of respondents saying that they don't use any tool to accessibility test their projects. As an industry, we have to do much better than this – not just because it's the right thing to do morally, but also from a legal perspective with [accessibility lawsuits becoming more commonplace](https://www.zdnet.com/article/supreme-court-lets-blind-man-sue-dominos-over-website-accessibility/).

In terms of CSS tooling, Sass is still the most popular CSS Processor but Bootstrap has fallen in popularity slightly, with most developers now choosing not to use any CSS framework on their projects.

The number of developers now linting their CSS and using a CSS naming scheme now outweigh those that don't, with 53.21% using a CSS linter and 52.08% using a CSS naming scheme.

CSS-in-JS continues to grow at a steady rate too, with 44.69% of developers now saying that they use a CSS-in-JS tool.

Overall, I think it's encouraging that consolidation appears to be happening as our front-end tooling becomes more mature. As more powerful tools emerge, the need to supercede these is less prevalent and I think we're seeing proof of this in these results.

Across the majority of tooling categories there are now clear leaders – something that wasn't true a few years ago. This helps with knowledge churn, potentially making it easier for developers of all levels to know where it's best to invest their time when picking up new tools, which can only be a good thing.

---

Thanks again to everyone who took part this year.

If anyone has any questions about any of the results, [message me on Twitter](https://twitter.com/AshNolan_) and I’ll do my best to help.

Also, if you'd like to receive emails about when the next survey is launched, feel free to sign up below.

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

