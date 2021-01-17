---
title: 'Movie Nominations'
startDate: '2021-01-03'
endDate: '2021-01-05'
type: 'projects'
subtitle: 'A simple React app written in TypeScript'
link: 'https://github.com/bchampp/movie-nominations'
tags: ['react', 'typescript']
exists: true
---

This project is a simple React App I build in TypeScript for the 2021 Shopify UX Intern Challenge.
It integrates with the OMDB API to search movies, and users have the functionality to nominate movies. 

This project was a great learning exercise as i've never built a React app with TypeScript, along with a couple things I experimented with for the first time. 
More information about the technical implementation can be found in the <a href='https://github.com/bchampp/movie-nominations'>README</a>, but some of the features I added were: 
- Persisting the data (search term, saved movies) through the use of Local Storage.
- Debouncing the API calls until after the user finishes typing. 
- Cascading the search API call to find more information about each movie.
- Writing a custom React Hook.

The final deployment of the app can be found <a href='https://shoppy-movies.netlify.app'>here</a>.