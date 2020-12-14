---
title: 'TERMinator'
startDate: '2019-09-01'
endDate: '2019-12-09'
subtitle: 'A C++ application to analyze and solve math problems using machine learning'
tags: ['c++', 'opencv', 'machine learning', 'tesserect']
type: 'projects'
exists: true
---

# C++ Design Project
In my third year I took an <i>Intro to Software Development</i> course whose sole purpose was to work in a team setting to deliver a working C++ application. 
We were put in teams of roughly 7 people, where we designated roles to everyone (Scrum Master, Product Owner, Lead Developer...etc.). The goal was to introduce us 
to working on collaborative code projects and understand the fundamentals of Agile, Scrum and leveraging Git. 

My team chose to implement a C++ program that would solve hand-written math problems. Since this wasn't a course specifically on Machine Learning, we leveraged OpenCV and the
Tesserect library to simplify the image processing and character recognition (OCR) parts of the program. The bulk of our work was building a GUI, a math engine and ensuring that we worked effectively as a team. 

I specifically built the pipeline for the Image processing and OCR. My sole job was to convert an image into a string, representing the math problem. 
From there, the math engine would be able to solve the problem and display the steps accordingly. My teammates worked hard to build the GUI and math engines, and ensure that everything would work together. 

This is what our final application looked like:

![GUI](/projects/terminator/gui.png)