---
permalink: /research/
title: "Research"
author_profile: true
---

<div id="toc" class="text-center mb-4"></div>

{% include research-secondments.html %}

{% include research-reviews.html %}

{% include research-patents.html %}

{% include research-projects-grants.html %}


<script>
var h2 = document.getElementsByTagName('h2');
var toc =  document.getElementById("toc");
for (const item of h2) {
  var button = document.createElement('a');
  button.href = `#${item.id}`;
  button.classList.add("btn", "btn-sm", "mx-1", "btn-outline-dark");
  const name = item.id.replaceAll('-', ' ')
  button.text = name.charAt(0).toUpperCase() + name.slice(1);
  toc.appendChild(button);
};
</script>