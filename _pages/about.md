---
permalink: /
title: ""
author_profile: true
redirect_from: 
  - /about/
  - /about.html
---
# Hello,

I am a PhD student in Computer Vision and Machine Learning at [Universidad de Zaragoza](https://www.unizar.es), supervised by [Prof. Juan D Tardós](https://webdiis.unizar.es/~jdtardos/). My research interests include Simultaneous Localization and Mapping, [3D Reconstruction](/keywords/#3d-reconstruction), and [Depth estimation](/keywords/#depth-estimation). 

Currently part of the [Robotics, CV & AI Lab](https://ropert.i3a.es), my background includes research positions at Apple in California (2023) and [EPFL in Switzerland](https://www.epfl.ch/labs/cvlab/) (2024). Previously, I received a BSc in Computer Science (2020) and an MSc in Robotics, Graphics, and Computer Vision (2021), with the highest GPA in the class.

#### News
{% assign news_sorted = site.data.news | sort: "date" | reverse %}
{%- for news in news_sorted limit: 5 -%}
  - **{{ news.date | date: "%m/%Y" }}:** {{ news.text }}
{% endfor %}

## Last publications

{% assign publications = site.publications | reverse %}
{% for post in publications limit:3 %}
  {% include archive-single-publication.html %}
{% endfor %}

<div class="d-grid gap-2">
  <a href="/publications" class="btn btn-outline-secondary">See more publications</a>
</div>