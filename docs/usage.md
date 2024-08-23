---
layout: default
title: Run GUNDAM
next_page: "https://ulyevarou.github.io/GUNDAM-documentation/forDevelopers.html"
---

# Overview

There are several applications that can be run within GUNDAM. The primary purpose of GUNDAM is to perform fits to experimental or simulated data by varying sets of underlying model parameters using the `gundamFitter` application. Additionally, GUNDAM can be used for cross-section data analysis through the `gundamCalcXsec` application. There is also a set of additional applications with various goals.

{% capture gundam_fitter_content %}
  {% include_relative ./applications/gundamFitter.md %}
{% endcapture %}

- <div class="collapsible-header">
    <h2 class="header-title">Run gundamFitter</h2>
  <div class="header-content">
    {{ gundam_fitter_content | markdownify }}
  </div>
  </div>

{% capture gundam_calc_content %}
  {% include_relative ./applications/gundamCalcXsec.md %}
{% endcapture %}

- <div class="collapsible-header">
    <h2 class="header-title">Run gundamCalcXsec</h2>
    <div class="header-content">
    {{ gundam_calc_content | markdownify }}
    </div>
  </div>

- <div class="collapsible-header">
    <h2 class="header-title">Other GUNDAM applications</h2>
    <div class="header-content">
      <ul>
        <li><a href="https://github.com/gundam-organization/gundam/blob/main/resources/doc/applications/gundamConfigCompare.md">gundamConfigCompare</a></li>
        <li><a href="https://github.com/gundam-organization/gundam/blob/main/resources/doc/applications/gundamConfigUnfolder.md">gundamConfigUnfolder</a></li>
        <li><a href="./applications/gundamFitPlot.md">gundamFitPlot</a></li>
        <li><a href="./applications/gundamFitReader.md">gundamFitReader</a></li>
        <li><a href="./applications/gundamInputZipper.md">gundamInputZipper</a></li>
        <li><a href="./applications/gundamPlotExtractor.md">gundamPlotExtractor</a></li>
        <li><a href="./applications/gundamRoot.md">gundamRoot</a></li>

      </ul>
    </div>
  </div>