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

# AuxMe
AuxMe is an **all-inclusive** app to control music and lights. 
The basic concept is a shared music queue, where users can add, upvote and downvote songs. Each room has **Admins** which give access to protected endpoints, like pause, skip...etc. Basically anything that will directly influence the music playing.

## Inspiration
AuxMe was inspired from a project I saw on YouTube when I was in first year.
The base ideas simple: mapping an Audio Signal to an LED strip to give *sick* lighting effects. 

## API
We started by building a REST API. Since we want to deploy AuxMe as both a webapp and a mobile app, we wanted our backend to be reusable to the point where both clients could make requests to the same endpoints. 

Some of the endpoints look like: 
- `POST auxme.ca/login/spotify`
- `POST auxme.ca/create-room`
- `GET auxme.ca/join-room?id=123`
- `POST auxme.ca/queue/upvote?song=<some_song_id>`

We tested the endpoints on our personal music streaming accounts with an app called PostMan. It was really cool controlling my spotify account through our API.

## Client
We built our website client in my favorite Javascript framework, React. We threw a simple UI together, tied it with our API and started testing. 

