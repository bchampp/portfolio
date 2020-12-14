---
title: 'AuxMe'
startDate: '2020-09-09'
endDate: 'present'
type: 'projects'
subtitle: 'A democratic, shared, cross-platform music queue'
img: '/images/projects/auxme.png'
link: 'https://github.com/bchampp/auxme'
tags: ['spotify', 'serverless', 'websocket', 'react', 'c++', 'control-system']
exists: true
---

AuxMe is an **all-inclusive** app to control music and lights that a group of friends and I started working on in September. Since we're all either working or in school, this has been a long term project we've been working toward, with the goal of launching in January 2021. 

The primary concept is a shared music queue, where users can add, upvote and downvote songs. Each room has **admins**, which have access to protected endpoints - everything that directly influences the music. The other big side of the project is an integrated lighting system, which interfaces with different types of LED lighting strips. 

# Control System
There were two main factors in designing the control system used for AuxMe. The first was WiFi integration - the controller will have to integrate with the online platform, and allow users to control the lighting. Second was an audio signal processing circuit. The goal is for the control system to respond to the music in a realistic way. A MSGEQ7 chip was used to convert the microphone audio signal to a useable analog voltage. The IC was pulsed using the controller to give a 60Hz audio signal. The first working prototype was built on a protoboard. 

![Control System](/projects/auxme/controller.jpg) 

A custom PCB is being designed for the project next. 

# Web platform

## API
The API is where the bulk of AuxMes functionality is built. The API is what connects with spotify accounts, the control system and allows users to host and participate in rooms. 

We started by building a REST API and tested it with PostMan. 

Some of the endpoints look like: 
- `POST auxme.ca/login/spotify`
- `POST auxme.ca/create-room`
- `GET auxme.ca/join-room?id=123`
- `POST auxme.ca/queue/upvote?song=<song_id>`
- `POST auxme.ca/control/color?v=<255, 0, 0>` 

The next step with the AuxMe API is integrating it with websockets, to give users a responsive feel when dealing with party rooms and song queues. 

## Website
A simple React website has been built for users to use the platform. Until now, this has been primarily a place for us to develop our API, however soon we will begin revamping the website as we prepare for the product launch. Check out the website <a href="https://auxme.ca">here!</a>

## App
An app for AuxMe will be built in January 2021, using the API outlined above. 

