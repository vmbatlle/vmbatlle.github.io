---
title: "Photometric single-view dense 3D reconstruction in endoscopy"
collection: publications
date: 2022-10-23
doi: 'https://doi.org/10.1109/IROS47612.2022.9981742'
venue: 'IEEE/RSJ International Conference on Intelligent Robots and Systems (IROS)'
videourl: 'https://www.youtube.com/watch?v=zlls1mVsFA0'
arxiv: '2204.09083'
authors: 
  - vmbatlle
  - josemari
  - tardos
header:
  teaser: batlle22_photometric.gif
abstract:
  "Visual SLAM inside the human body will open the way to computer-assisted navigation in endoscopy. However, due to space limitations, medical endoscopes only provide monocular images, leading to systems lacking true scale. In this paper, we exploit the controlled lighting in colonoscopy to achieve the first in-vivo 3D reconstruction of the human colon using photometric stereo on a calibrated monocular endoscope. Our method works in a real medical environment, providing both a suitable in-place calibration procedure and a depth estimation technique adapted to the colon's tubular geometry. We validate our method on simulated colonoscopies, obtaining a mean error of 7% on depth estimation, which is below 3 mm on average. Our qualitative results on the EndoMapper dataset show that the method is able to correctly estimate the colon shape in real human colonoscopies, paving the ground for truescale monocular SLAM in endoscopy."
keywords: 
  - 3D Reconstruction
  - Illumination Decline
  - Endoscopy
  - Depth Estimation
bibtex: inproceedings
related:
  - /publications/endomapper
---