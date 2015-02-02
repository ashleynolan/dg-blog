---
layout: post.hbs

title: A tour of JavaScript Array methods
url: javascript-array-methods
description: "An in depth look at the varying array manipulation methods in JavaScript."

posted: 2015-02-05T09:00

post:
- post

published: true

categories:
  - "Web Development"
  - "JavaScript"

---

{{#markdown}}

## Array.map

<pre>
<code class="language-js">function doubleAll(numbers) {
	return numbers.map(function (num) {
		return num * 2;
	});
}</code>
</pre>

## Array.filter

<pre>
<code class="language-js">function getShortMessages(messages) {
	return messages.map(function(msg) {
		return msg.message;
	}).filter(function (msg) {
		return msg.length < 50;
	});
}</code>
</pre>

## Array.every

<pre>
<code class="language-js">
</code>
</pre>

## Array.some

<pre>
<code class="language-js">
</code>
</pre>

{{/markdown}}
