---
title: 'Link Up Education'
startDate: '2020-11-07'
endDate: 'present'
tags: ['react', 'serverless', 'amplify']
type: 'projects'
subtitle: 'A social network for students to collaborate on course-work'
exists: true
---

LinkUpEducation is an online platform for students to connect with peers in their classes to collaborate on schoolwork. Students can register, sign in and view filtered courses to their program and university. 
Students looking for partners can either post an ad for what they're looking for, or request to match with 
existing users through their ads. When two students match, or when a student accepts a match request, contact info
will become available for the students. 

## Inspiration
The idea behind this platform was to create a space for students to be able to meet like-minded peers to collaborate
on school work with. Since school has gone primarily online during the COVID-19 pandemic, a lot of students may struggle to network with classmates, and the goal of this platform is to reduce the problem of meeting classmates.

## The Tech Stack
Since this was a hackathon project, we were eager to experiment with some new technologies while building this. 
We decided that we wanted to put emphasis on learning a whole new backend stack, while building a simple React front end.

### Front End
The frontend for the project was built with ReactJS, and hosted with AWS Amplify. Amplify was used to connect our frontend with our API, as well as our Cognito user pool. There was nothing fancy about our front end implementation, although it was my first time using the React `useContext()` hook to handle Authentication throughout the application. The frontend is deployed to Netlify through a continuous integration pipeline through GitHub. 

### Back End
The backend of the project is where we really wanted to try something new. We chose to build a REST API using AWS serverless, by writing lambda functions to handle different API routes. 

We chose AWS serverless for a couple reasons:
- Deployment - deploying serverless API is as easy as running `serverless deploy`. What's more is that the deployment handles creating and connecting AWS resources. In our case, this was only DynamoDB and S3, but it's easy to add resources as needed. 
- Testing - each function can be individually tested with various request payloads. This made our development really fast. We mocked sample payloads that would be created on the frontend, and ensured our API handled them appropriately. 
- Scability - AWS will invoke as many lambdas as needed. So if one day our platform spuratically gained a million users, the backend would be able to handle it!

Lastly, the company I intern at uses AWS serverless heavily for our email service. I personally wanted to become more familiar with the technology, so I lead the backend development for this project. 


Overall I had a great time working on this platform , and the team from the hackathon is continuing to develop the platform as a learning exersize. Feel free to make an account and play around on the platform!