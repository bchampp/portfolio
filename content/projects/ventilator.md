---
title: 'Code Life Ventilator Challenge'
startDate: '2020-03-15'
endDate: '2020-05-03'
tags: ['python', 'control system']
type: 'projects'
subtitle: 'Building a ventilator in under 14 days'
github: 'https://code.engineering.queensu.ca/ygk-modular-ventilator/display-app'
exists: true
---

# Code Life Ventilator Project 
On March 15th, the University of McGill announced the <a>[Agorize Code Life Ventilator Challenge](https://www.agorize.com/en/challenges/code-life-challenge)</a>. The idea behind the challenge was to invite participants to build a low-cost, easy to build ventilator that met various safety and medical requirements. 

A friend of mine from RCVLab posted in our group chat asking if anyone would be interested in creating a team. Myself and another colleague were both interested, so we started researching the project between the 3 of us. 
Unfortunately, the requirements were far beyond the scope of something we could build in 2 weeks. Fortunately, a group of mechanical engineering professors at Queen's were also interested in the project, and we were invited to join their team. This was the beginning of the most fast-paced development team I've ever been on. 

Within 2 days, our team consisted of 17 people, including professors, heads of departments, graduate students... and me. Imposter Syndrome would be an understatement. Our team met every morning at 8:30am, to review progress, talk about upcoming deadlines, and ensure that we were on-track to have a working prototype by March 31st. 

One of the project requirements was that the ventilator needed an integrated display and accessible UI, where doctors could monitor vitals and adjust the ventilator accordingly. I was on the sub-team responsible for the display system, with 3 other developers. 

The display system was built using a Raspberry Pi, a 7" touch display and Pythons TKinter library. We interfaced to an Arduino powered control system over a USB Serial connection, and built a multi-threaded communication protocol into our display software to talk with the control system. I didn't really have any contribution to the communication between our Pi and the Arduino, but I thought it was really cool. 

My specific contributions were to the UI itself, where I worked with another developer to collect requirements and storyboard the UI. Once we had settled on what features were going to be built, and how the product would look and function, we started developing. 

Over 2 weeks, our 4 person team wrote and tested over 6000 lines of Python code. The repository for all this code can be found <a href='https://code.engineering.queensu.ca/ygk-modular-ventilator/display-app'>here.</a>

Our Queen's University team managed to come in the top 9 out of over 1100 submissions. We don't know specifically what place we came in, because only the top 3 winners were announced. This was easily the most fun project I've ever been a part of. Even though I had a small contribution in the big picture, it was an honor to work with so many talented engineers under such a tight deadline. 