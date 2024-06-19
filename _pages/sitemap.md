---
layout: archive
title: "Sitemap"
permalink: /sitemap/
author_profile: true
---

{% include base_path %}

A list of all the posts and pages found on the site. For you robots out there is an [XML version]({{ base_path }}/sitemap.xml) available for digesting as well.

{% if site.pages.size != 0 %} <h2>Pages</h2> {% endif %}
{% for post in site.pages %}
  {% unless post.sitemap == false %}
    {% include archive-single.html %}
  {% endunless %}
{% endfor %}

{% if site.posts.size != 0 %} <h2>Posts</h2> {% endif %}
{% for post in site.posts %}
  {% unless post.sitemap == false %}
    {% include archive-single.html %}
  {% endunless %}
{% endfor %}

{% capture written_label %}'None'{% endcapture %}

{% for collection in site.collections %}
{% unless collection.output == false or collection.label == "posts" %}
  {% capture label %}{{ collection.label }}{% endcapture %}
  {% if label != written_label %}
  <h2>{{ label | capitalize }}</h2>
  {% capture written_label %}{{ label }}{% endcapture %}
  {% endif %}
{% endunless %}
{% for post in collection.docs %}
  {% unless collection.output == false or collection.label == "posts" %}
  {% include archive-single.html %}
  {% endunless %}
{% endfor %}
{% endfor %}
