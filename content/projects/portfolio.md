---
title: 'Portfolio'
startDate: '2020-11-01'
endDate: '2020-11-11'
tags: ['react', 'nextjs', 'typescript', 'webapp']
type: 'projects'
subtitle: 'My personal and portfolio website'
exists: true
---

![Banner](/projects/portfolio/banner.png)
# `brentchampion.com`
I've been through 3 iterations of my portfolio website. The first two weren't *that bad*, but I was never happy with them.

My first try was a static HTML page; I bootstrapped an html template I liked, filled it up with some content and threw it in an S3 bucket. Attempt #2 was again, a template I bootstrapped, this time using React. I made it during the couple weeks I had off before starting my internship with [Acoutera](/work/acoutera) to practice React. 

They lacked authenticity. I don't want my portfolio website to be an electronic copy of my resume, or a 'fill in the blank' portfolio template. I want it to be a place to experiment, talk about things I'm interested in and document my projects.

## How it works
This site was built with NextJS, a React framework that lets you do 'cool' and 'complicated' things with ease, like static HTML generation and server-side rendering. 

### Routing
My favorite thing about next is how it organizes routing. 

This is how my sites laid out: 
![Portfolio Routing](/projects/portfolio/routing.png)

The `pages` folder holds all the pages (makes sense), where each subfolder defines a new page. For example, `brentchampion.com/projects` renders the component `pages/projects/index.tsx`.

Dynamic routing is just as simple. For example,
brentchampion.com/projects/portfolio would render `pages/projects/[id].tsx`, where [id] = portfolio, and all the data is pre-fetched as static props. 

The organization is nice, but these features really shine at build time. When you run `npm run build`, nextJS is able to pre-render *almost* everything into static HTML pages. 

### Tagging
I went down a wormhole over the idea of a tagging engine. I've seen a few examples I liked while browsing around, but I wanted to build it from scratch. It adds a whole new way to navigate around the site which I think is pretty neat. 

The implementation was pretty simple too. Each markdown file has some metadata, including these tags. `ListItem` and `Post` components both render the tags, which hyperlink to the url `/tags/<tag_name>`. 

Where it gets tricky is how the dynamic routing works. I wanted to maintain the static generation for the base tags page, but have the same *look* when hitting a specific tag route. I added an optional prop to the `<Tagged />` component, which is shared between the static and dynamic pages. By manipulating `window.location` directly, I was able to basically fake this. For example, if a users on the page: `brentchampion.com/tags` and clicks a few tags, it'll change their url to something like `brentchampion.com/tags/node&typescript&java`, without serving any new pages. But, if they refresh, it'll render the exact same page as it did before, through a different component. 


### Components
All my React components are defined in the `components` folder, chilling beside their corresponding css modules. I wanted to be careful with my components since a lot of data was flowing around, so I wrote them in TypeScript.

> If you're unfamiliar with TypeScript, think of it like a stricter version of JavaScript. You *can* still define a variable as a `let`, but the point of TypeScript is to type all your variables, dodging unnecessary problems

### Styling
Next tries to perform code-splitting, which means only loading exactly whats needed to show the page. We can make it for next by easier using `.module.css` files over normal `.css` files; reducing the scope of the css to their components.

Unlike my last 2 websites, all of the styling on this website was done by me! To be honest, styling took about twice as long as building the entire architecture powering this website. I used this awesome online tool, Figma, to play around with some ideas of the I had. 

My *final* design for this site looked like this:




### Deployment
The last thing I wanted to set up was an automated deployment pipeline. I decided to use Vercel, a GitHub Actions extension that triggers deployments on pushes and pull requests. I have a couple of unit tests that also run through GitHub Actions to make sure I'm not accidentally pushing broken code. 

All that was left was tying my domain to vercel using an A record, and hitting `git push -u origin master`. 