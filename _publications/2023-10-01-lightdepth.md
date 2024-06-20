---
title: "LightDepth: Single-View Depth Self-Supervision from Illumination Decline"
collection: publications
date: 2023-10-01
doi: 'https://doi.org/10.1109/ICCV51070.2023.01945'
venue: 'IEEE/CVF International Conference on Computer Vision (ICCV)'
pages: 21273-21283
videourl: 'https://www.youtube.com/watch?v=Jrzzy2JjOCQ'
paperurl: 'https://openaccess.thecvf.com/content/ICCV2023/papers/Rodriguez-Puigvert_LightDepth_Single-View_Depth_Self-Supervision_from_Illumination_Decline_ICCV_2023_paper.pdf'
suppurl: 'https://openaccess.thecvf.com/content/ICCV2023/supplemental/Rodriguez-Puigvert_LightDepth_Single-View_Depth_ICCV_2023_supplemental.zip'
posterurl: '/files/rodriguez23_lightdepth_poster.pdf'
arxiv: '2308.10525'
website: 'https://sites.google.com/unizar.es/lightdepth'
authors:
  - jrp{1,*}
  - vmbatlle{1,*}
  - josemari{1}
  - rmcantin{1}
  - pascal.fua{2}
  - tardos{1}
  - jcivera{1}
notes:
  - "{*} Equal contribution"
  - "{1} Universidad de Zaragoza"
  - "{2} École Polytechnique Fédérale de Lausanne"
header:
  teaser: rodriguez23_lightdepth.gif
abstract:
  "Single-view depth estimation can be remarkably effective if there is enough ground-truth depth data for supervised training. However, there are scenarios, especially in medicine in the case of endoscopies, where such data cannot be obtained. In such cases, multi-view self-supervision and synthetic-to-real transfer serve as alternative approaches, however, with a considerable performance reduction in comparison to supervised case. Instead, we propose a single-view self-supervised method that achieves a performance similar to the supervised case. In some medical devices, such as endoscopes, the camera and light sources are co-located at a small distance from the target surfaces. Thus, we can exploit that, for any given albedo and surface orientation, pixel brightness is inversely proportional to the square of the distance to the surface, providing a strong single-view self-supervisory signal. In our experiments, our self-supervised models deliver accuracies comparable to those of fully supervised ones, while being applicable without depth ground-truth data."
keywords: 
  - Depth Estimation
  - Illumination Decline
  - Endoscopy
bibtex: inproceedings
related:
  - /publications/photometric
  - /publications/endomapper
---