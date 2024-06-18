---
title: "LightNeuS: Neural Surface Reconstruction in Endoscopy Using Illumination Decline"
collection: publications
permalink: /publications/lightneus
date: 2023-10-01
doi: 'https://doi.org/10.1007/978-3-031-43999-5_48'
venue: 'Medical Image Computing and Computer Assisted Intervention (MICCAI)'
videourl: 'https://www.youtube.com/watch?v=YnyUutpGGg4'
arxiv: '2309.02777'
authors: 
  - vmbatlle
  - josemari
  - pascal.fua
  - tardos
# header:
#   teaser: batlle23_lightneus.png
abstract:
  "We propose a new approach to 3D reconstruction from sequences of images acquired by monocular endoscopes. It is based on two key insights. First, endoluminal cavities are watertight, a property naturally enforced by modeling them in terms of a signed distance function. Second, the scene illumination is variable. It comes from the endoscope’s light sources and decays with the inverse of the squared distance to the surface. To exploit these insights, we build on NeuS [25], a neural implicit surface reconstruction technique with an outstanding capability to learn appearance and a SDF surface model from multiple views, but currently limited to scenes with static illumination. To remove this limitation and exploit the relation between pixel brightness and depth, we modify the NeuS architecture to explicitly account for it and introduce a calibrated photometric model of the endoscope’s camera and light source.

  Our method is the first one to produce watertight reconstructions of whole colon sections. We demonstrate excellent accuracy on phantom imagery. Remarkably, the watertight prior combined with illumination decline, allows to complete the reconstruction of unseen portions of the surface with acceptable accuracy, paving the way to automatic quality assessment of cancer screening explorations, measuring the global percentage of observed mucosa."
bibtex: inproceedings
related:
  - /publications/photometric
---
Empty website