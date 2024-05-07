---
toc: true
comments: true
layout: post
title: San Diego Activities
description: List of Activities in San Diego
courses: {'compsci': {'week': 7}}
type: blogs
---

Here are some activities in San Diego:

<!--- <form id="activityForm">
    <label for="activityType">Activities:</label>
    <select id="activityType" name="activityType" required>
        <option value="familyfriendly.html">Family Friendly</option>
        <option value="adult.html">Adult</option>
        <option value="indoor.html">Indoor</option>
        <option value="outdoor.html">Outdoor</option>
    </select><br><br>
</form>
--->

<a href="/CPT-project/_posts/familyfriendly.html">
    <h1>Family Friendly</h1>
    <img src="../images/sandiegozoo.jpg" alt="San Diego Zoo" height="auto" width="auto">
</a> <br>

<a href="/CPT-project/_posts/adult.html">
    <h1>Adult</h1>
    <img src="../images/bernardowinery.jpg" alt="Bernardo Winery" height="auto">
</a> <br>

<a href="/CPT-project/_posts/indoor.html">
    <h1>Indoor</h1>
    <img src="../images/birchaquarium.jpg" alt="Birch Aquarium" height="auto">
</a> <br>

<a href="/CPT-project/_posts/outdoor.html">
    <h1>Outdoor</h1>
    <img src="../images/moonlightbeach.jpg" alt="Moonlight Beach" height="auto">
</a> <br>

<script>
    document.addEventListener("DOMContentLoaded", function() {
        const activityLinks = document.querySelectorAll("a"); 

        function openActivityPage(event) {
            event.preventDefault();
            const url =  this.getAttribute("href");
            window.location.href=url;
        }

        activityLinks.forEach(link => {
            link.addEventListener("click", openActivityPage);
            const image = link.querySelector("img");
            if (image) {
                image.addEventListener("click", openActivityPage)
            }
        });
    });
</script>