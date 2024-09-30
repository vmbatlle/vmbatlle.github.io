---
title: "3D Reconstruction from Images: From Everyday Office Scenes to the Depths of the Human Body"
collection: talks
type: "General talk"
venue: "CVLab, EPFL"
date: 2024-10-08
location: "Lausanne, Switzerland"
thumbnail:
    image: talk-3d-reconstruction-from-images.webp
    background: '#ffffff'
pdfurl: '/files/batlle_talk_3d_reconstruction_from_images.pdf'
duration: '30 min'
summary:
    "A brief introduction to the challenge of reconstructing 3D shapes from images, presented through three real-world use cases I’ve encountered in my career.

    An overview of how conventional, hybrid, and cutting-edge techniques are applied in everyday scenarios—whether in the office, on the road, or even inside the human body. We explore Structure from Motion (SfM), Simultaneous Localization and Mapping (SLAM), and Neural Radiance Fields (NeRF), showcasing how each technique addresses distinct problems across diverse environments."
---

Reconstructing 3D shapes from images is a fundamental challenge in computer vision, with wide-ranging applications from entertainment to scientific research. The goal is to recover the 3D structure of an object or scene from its 2D image projections. This problem is not only theoretically intriguing but also practically valuable in fields like autonomous driving, augmented reality (AR), medical imaging, and robotics.

In this talk, I will share insights from three distinct use cases I’ve worked on, each leveraging different techniques to solve this problem. These techniques span traditional, hybrid, and cutting-edge methodologies, demonstrating their versatility across various real-world applications.

### 1. Structure from Motion (SfM)

SfM is a classical method that uses multiple images captured from different viewpoints to reconstruct 3D shapes. This technique is rooted in projective geometry and typically involves extracting key points from images, matching them across different frames, and solving for camera parameters to estimate the 3D structure.

#### Use Case: Office Environment
In office settings, SfM is used to generate 3D models of spaces for virtual tours or space management. By capturing a series of photos with a simple camera, it's possible to create a full 3D layout of a room, offering applications in interior design, real estate, or even optimizing workspace arrangements.

### 2. Simultaneous Localization and Mapping (SLAM)
SLAM is a more dynamic approach, used when both the camera (or sensor) and the objects are moving. It simultaneously tracks the location of the camera while building a map of the surrounding environment in real-time. This technique is heavily used in robotics and autonomous vehicles.

#### Use Case: On the Road
In autonomous driving, SLAM plays a key role in allowing vehicles to navigate unfamiliar environments while avoiding obstacles. Here, SLAM integrates data from various sensors—like cameras, LiDAR, and IMUs (Inertial Measurement Units)—to continuously update both the car's position and the 3D map of the road and surrounding objects.

### 3. Neural Radiance Fields (NeRF)
NeRF represents a novel frontier in 3D reconstruction, leveraging deep learning to model complex scenes. NeRF encodes scenes in neural networks, allowing for highly detailed 3D reconstructions from just a few images. The flexibility and precision of NeRF make it an ideal tool for challenging environments where traditional methods struggle.

#### Use Case: Inside the Human Body
In this application, NeRF is used to build a 3D model from images captured by an endoscope, taking advantage of the light source's illumination decline as the camera moves. This allows for detailed 3D reconstructions similar to what could be obtained from expensive imaging techniques like CT or MRI scans. The key advantage is that NeRF provides not only a cost-effective solution but also a clear and detailed view of potential cancer lesions, improving early detection and treatment planning.

### Conclusion
From our workspaces to the roads we drive on and even inside our bodies, the task of reconstructing 3D shapes from images is shaping the future. Each of these methods—SfM, SLAM, and NeRF—brings unique strengths, and as new hybrid and advanced techniques emerge, the possibilities for improving our everyday life continue to expand.