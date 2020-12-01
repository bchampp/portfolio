---
title: 'AutoStitch'
startDate: '2019-12-01'
endDate: '2019-12-09'
image: ''
subtitle: 'A C++ application to merge panoramas'
tags: ['c++', 'opencv', 'machine learning']
type: 'projects'
link: 'https://github.com/bchampp/autostitch'
exists: true
---

AutoStitch is an OpenCV application which uses Machine Learning to construct a panorama image from an unordered set of images. 

## How it works
Theres two primary parts to the program: Feature Detection & Image Construction. 
We built a custom `subImage` class to hold information about each image, as well as how it relates to all of the other subImages. 
Each subImage contains an array of fitness scores to all of the other images.
One way to think of the implementation is a weighted graph, where images are the vertices, and weight between images is the matching score. 

### Pre-Processing
The first step to any Machine Vision problem is applying necessary pre-processing to the images. In our case, we simply added padding to all of the images to ensure that the images were all normalized before we tried evaluating matching potential with other images. 

### Feature Detection
The ORB Feature Detection module was used to determine a matching fitness score between each pair of images. 
Our fitness scoring algorithm was simply based on the euclidian distance between matches, such to minimize this distance. 
Throughout the feature detection algorithm, each subImage object gets populated with fitness scores to all the other images. 

### Composition
The first step of the composition algorithm is finding the subImage with the highest overall fitness score. 
This means that this specific image has the highest matching potential to all other images, and so it is chosen as the center image in the composition. 

A helper function is then used to merge the next best image, by calculating the homography matrix and performing the desired geometric transformation. This helper function is called recursively through all the images, adding the next <i>best fit</i> on each iteration. The result of this process is a refined composite image. 

After the first composite image is created, a back-tracking algorithm goes through and re-evaluates any images that were left out against the panorama image. This ensured that no false negatives were left behind, in case the matching fitness score for a subImage was not high enough before building the composite image. In some cases, the fitness score for subImages improved against the composite image, meaning it should have been included. 

### Results
The results of the software can be seen below, on a sample of the St. James church in Kingston. 
![AutoStitch Result](/projects/autostitch/results.png)