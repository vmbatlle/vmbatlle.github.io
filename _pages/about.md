---
permalink: /
title: "Hello,"
author_profile: true
redirect_from: 
  - /about/
  - /about.html
---

I am a PhD candidate in Computer Vision and Machine Learning at [Universidad de Zaragoza](https://www.unizar.es). My research interests include Simultaneous Localization and Mapping, 3D Reconstruction and Depth estimation. 

I am a member of the [Robotics, CV & AI Lab](https://ropert.i3a.es) and I also held research positions at Apple in California (2023) and [EPFL in Switzerland](https://www.epfl.ch/labs/cvlab/) (2024). Previously, I received a BSc in Computer Science (2020) and an MSc in Robotics, Graphics, and Computer Vision (2021), both with the highest GPA in the class.

## Last publications

{% assign publications = site.publications | reverse %}
{% for post in publications limit:2 %}
  {% include archive-single-publication.html %}
{% endfor %}

<div class="d-grid gap-2">
  <a href="/publications" class="btn btn-outline-secondary">See more publications</a>
</div>