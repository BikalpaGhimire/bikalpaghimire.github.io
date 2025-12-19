---
layout: page
permalink: /publications/
title: publications
nav: true
nav_order: 3

toc:
  sidebar: right
---

<!-- _pages/publications.md -->

You can view my Google scholar profile [here](https://scholar.google.com/citations?user=MKO_vEgAAAAJ&hl=en){:target="\_blank"}

If you are unable to access any of the files below, please [email me](mailto:{{ site.email | encode_email }})!
{: .notice--info}

## preprints

<div class="publications">
{% bibliography -q @*[pubtype=preprint] %}
</div>

<br>

## published articles

<div class="publications">
{% bibliography -q @*[pubtype=article] %}
</div>

<br>

## talks

<div class="publications talks-compact">
{% bibliography -q @*[pubtype=conftalk] --group_by none %}
</div>

<br>

## posters

<div class="publications posters-compact">
{% bibliography -q @*[pubtype=confposter] --group_by none %}
</div>
