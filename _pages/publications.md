---
layout: archive
title: "Publications"
permalink: /publications/
author_profile: true
---

<!-- 
{% if site.author.googlescholar %}
  <div class="wordwrap">You can also find my articles on <a href="{{site.author.googlescholar}}">my Google Scholar profile</a>.</div>
{% endif %}
-->

{% include base_path %}

<div id="date_last_modified" class="small text-center text-muted mb-4" data-path="_publications"></div>

{% for post in site.publications reversed %}
  {% include archive-single-publication.html %}
{% endfor %}
