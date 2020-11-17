---
title: 'AuxMe'
startDate: '2020-09-09'
endDate: 'present'
type: 'projects'
subtitle: 'A democratic, shared, cross-platform music queue'
img: '/images/projects/auxme.PNG'
link: 'https://github.com/bchampp/auxme'
tags: ['spotify', 'serverless', 'websocket', 'react', 'c++', 'control-system']
exists: true
---

AuxMe is an **all-inclusive** app to control music and lights. 
The basic concept is a shared music queue, where users can add, upvote and downvote songs. Each room has **Admins** which have access to protected endpoints, like pause, skip...etc, anything that will directly influence the music playing. 

## Control System


# Website
## API
We started by building a REST API. Since AuxMe is being deployed as both a webapp and a mobile app, our backend needed to be reusable so that both clients could make requests to the same set of endpoints. 

Some of the endpoints look like: 
- `POST auxme.ca/login/spotify`
- `POST auxme.ca/create-room`
- `GET auxme.ca/join-room?id=123`
- `POST auxme.ca/queue/upvote?song=<some_song_id>`

We tested the endpoints on our personal music streaming accounts with an app called PostMan.

## Client
We built our website client with React. We threw a simple UI together, tied it with our API and started testing. 

