---
title: "{EndoMetric}: Near-Light Monocular Metric Scale Estimation in Endoscopy"
collection: publications
permalink: /publications/endometric
date: 2025-09-23
last_modified_at: 2025-05-20
doi: 
venue: 'Int. conf. on Medical Image Computing and Computer Assisted Intervention (MICCAI)'
pages: 
videourl: 'https://www.youtube.com/watch?v=WUHts99cs3M'
paperurl: 
suppurl: 
posterurl: 
arxiv: '2410.15065'
website: 
authors:
  - riranzo{*}
  - vmbatlle{*}
  - tardos
  - josemari
notes:
  - "{} Universidad de Zaragoza"
  - "{*} Equal contribution"
thumbnail:
  image: iranzo2025_endometric.webp
header:
  teaser: iranzo2025_endometric_header.svg
abstract:
  "Geometric reconstruction and SLAM with endoscopic images have advanced significantly in recent years. In most medical fields, monocular endoscopes are employed, and the algorithms used are typically adaptations of those designed for external environments, resulting in 3D reconstructions with an unknown scale factor.
 

  For the first time, we propose a method to estimate the real metric scale of a 3D reconstruction from standard monocular endoscopic images, under unknown varying albedo,  without relying on application-specific learned priors. Our fully model-based approach leverages the near-light sources embedded in endoscopes, positioned at a small but nonzero baseline from the camera, in combination with the inverse-square law of light attenuation, to accurately recover the metric scale from scratch. This enables the transformation of any endoscope into a metric device, which is crucial for applications such as measuring polyps, stenosis, or assessing the extent of diseased tissue."
keywords: 
  - Endoscopy
  - Metric scale
  - Size estimation
  - Illumination Decline
bibtex: inproceedings
related:
  - /publications/photometric
---

### Real polyps measurement

In the _EndoMapper dataset_, we show the method’s potential for standardizing polyp size assessment. On average, our measurements deviate from the endoscopist's estimation by 1.0mm (13%).

<figure class="">
  <img src="/images/iranzo2025_endometric_real.webp" alt="Results in EndoMapper dataset" style="max-width: 90%">
  <figcaption>
    <b>Figure.</b> Results in EndoMapper dataset <a href="https://doi.org/10.1038/s41597-023-02564-7">[2]</a>.
  </figcaption>
</figure>
