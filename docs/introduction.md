---
layout: default
title: About
---

## Introduction

### Overview of the software
GUNDAM, standing for *Generalized and Unified Neutrino Data Analysis Methods*,
is a suite of applications which aims at performing various statistical
analysis with different purposes and setups.
It has been developed as a fork of 
[xsllhFitter](https://gitlab.com/cuddandr/xsLLhFitter),
in the context of the Upgrade of ND280 for the T2K neutrino experiment.

The applications are intended to be fully configurable with a set
of YAML/JSON files, as the philosophy of this project is to avoid users
having to put their hands into the code for each study.
A lot of time and efforts are usually invested by various working
groups to debug and optimize pieces of codes which does generic tasks.
As GUNDAM is designed for maximize flexibility to accommodate
various physics works, it allows to share optimizations
and debugging for every project at once.

### Version information



<nav>
<a href="javascript:void(0);" class="toggle-link" data-target="section1">Section 1</a>
<a href="javascript:void(0);" class="toggle-link" data-target="section2">Section 2</a>
<a href="javascript:void(0);" class="toggle-link" data-target="section3">Section 3</a>
</nav>

<div id="section1" class="hidden">
## Section 1
Content for section 1...
</div>

<div id="section2" class="hidden">
## Section 2
Content for section 2...
</div>

<div id="section3" class="hidden">
## Section 3
Content for section 3...
</div>

<a href="javascript:history.back()" class="btn">Back</a>

<script>
document.addEventListener("DOMContentLoaded", function() {
  const links = document.querySelectorAll('.toggle-link');
  links.forEach(link => {
    link.addEventListener('click', function() {
      const targetId = this.getAttribute('data-target');
      const targetElement = document.getElementById(targetId);
      if (targetElement) {
        targetElement.classList.toggle('hidden');
      }
    });
  });
});
</script>


<a href="javascript:history.back()" class="btn">Back</a>
