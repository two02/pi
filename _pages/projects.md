---
layout: myarchive
permalink: /projects/
title: Projects
entries_layout: grid
categories: [projects]
classes: wide


header:
  overlay_image: "static/siteimages/projets featured img.png"
  overlay_filter: 0.5
---

    {% assign both_posts = site.posts | where_exp: "item", "item.hidden != true" %}
    {% assign posts = both_posts | where_exp: "item", "item.categories == empty" %}
<div class="mygrid-container">

{% for post in posts %}
    {% if post.header.overlay_image %}
        {% assign image = post.header.overlay_image %}
    {% else %}
        {% capture image %}{{ site.teaser }}{% endcapture %}
    {% endif %}
        
        <div class="mycard" onclick="location.href='{{ post.url | relative_url }}'">
              <div class="myarchive__item-teaser"><img src='{{ image | relative_url }}'></div>
              <h1 class=".myarchive__item-title">{{ post.title | escape }}</h1>
            <p style="font-size: 80%;" class="myarchive__item-excerpt">{{ post.excerpt | remove: '<p>' | remove: '</p>' }} </p>
        </div>
        
    
{% endfor %}
</div>
