---
layout: default
title: Home
---

# Welcome to My GitHub Pages Site

This is a simple example of a GitHub Pages site using Jekyll and Markdown.

- Point 1
- Point 2
- Point 3

## Blog Posts

<ul>
  {% for post in site.posts %}
    <li>
      <a href="{{ post.url }}">{{ post.title }}</a>
      <span>{{ post.date | date: "%B %d, %Y" }}</span>
    </li>
  {% endfor %}
</ul>