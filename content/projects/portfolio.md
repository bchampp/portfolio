---
title: 'Portfolio'
startDate: '2020-11-01'
endDate: '2020-11-11'
tags: ['react', 'nextjs', 'typescript', 'webapp']
type: 'projects'
subtitle: 'My personal and portfolio website'
github: 'https://github.com/bchampp/portfolio'
demo: 'https://brentchampion.com'
exists: true
---

![Banner](/projects/portfolio/banner.png)
# `brentchampion.com`
I've been through 3 iterations of my portfolio website. The first two weren't *that bad*, but I was never happy with them.

<!-- My first try was a static HTML page; I bootstrapped an html template I liked, filled it up with some content and threw it in an S3 bucket. Attempt #2 was again, a template I bootstrapped, this time using React. I made it during the couple weeks I had off before starting my internship with [Acoutera](/work/acoutera) to practice React. 

They lacked authenticity. I don't want my portfolio website to be an electronic copy of my resume, or a 'fill in the blank' portfolio template. I want it to be a place to experiment, talk about things I'm interested in and document my projects. -->

## How it works
This site was built with <b>NextJS</b>, a React framework that lets you do <i>cool</i> and <i>complicated</i> things with ease, like static HTML generation and server-side rendering. 

### Routing
I think the best part about NextJS is how routing your pages works.  

This is how my sites laid out: 
![Portfolio Routing](/projects/portfolio/routing.png)

The `pages` folder holds all the pages - where each subfolder defines a new page. 

For example, `brentchampion.com/projects` renders the component `pages/projects/index.tsx`.

Dynamic routing works the same way. 

For example, <a>brentchampion.com/projects/portfolio</a> would render `pages/projects/[id].tsx`, where [id] = portfolio, and all the data is pre-fetched as static props. This means that even though the page routing is <b>dynamic</b>, each page is still built statically at build time.

This file organization is nice, but these features really shine at build time. When you run `npm run build`, NextJS is able to pre-render *almost* everything into static HTML pages. 

This is what the build looks like: 
* INSERT IMAGE HERE OF BUILD *

### Tagging
I got really caught up on the idea of a tagging engine. I've seen a few examples I liked while browsing around, but I wanted to build it from scratch. It adds a whole new way to navigate around the site which I think is pretty neat. 

The implementation was simple. Each markdown file has some metadata, including an array of `tags`. When the `ListItem` and `Post` components render, they create hyperlinks on each tag to the url `/tags/<tag_name>`. 

It gets tricky with the dynamic routing. I wanted to maintain the static page generation for the base `/tags` page, but have the same *look* when hitting a specific tag route.

For example, if you click *react* from `/tags`, it will look identical to the page `/tags/react`. 

I did this by including an optional `tagged` prop on the base tag page, and funnelling my dynamic routing through it. By default, the `tagged` prop is empty, but if a dynamic route is hit, it would look like `tagged={[...tags]}`. By using the `useEffect` Hook, I was able to mount this component to the DOM identically to how the base page would interact. Then, by manipulating `window.location` directly, I was able to change the URL without refreshing the page. Not only does this enforce the idea of <i>reusable components</i>, it also reduced the amount of statically generated pages by a factor of **n!**, where n is the total number of tags. 


### Components
All my React components are defined in the `components` folder. If you're familiar with React, there's nothing too fancy going on here. I make use of hooks where appropriate, as well as tying in some of the features of Next such as the `Link` and `Image` components. The only difference between this and a **pure** react project is the use of `getStaticProps`, which I use to let the compiler know where to do static page generation. 

I absracted my components away from the pages too, so each page basically wraps it's needed components and injects data accordingly. I wanted to be careful with my components since a lot of data was flowing around, so I wrote them in TypeScript. 
> If you're unfamiliar with TypeScript, think of it like a stricter version of JavaScript. You *can* still define a variable as a `let`, but the point of TypeScript is to type all your variables, dodging unnecessary problems. 

### Styling
Each component group has a corresponding css module, which defines the styling for the component. Next tries to perform code-splitting, which means only loading exactly whats needed to show the page. 

We can make it for next by easier using `.module.css` files over normal `.css` files; reducing the scope of the css to their components. What's more is that NextJS gives unique classes to the css modules. If I define a styling for all `h3` tags in one module, that styling won't overlap into another component module.

Unlike my last 2 websites, all of the styling on this website was done by me! To be honest, styling took about twice as long as building the entire architecture/routing powering this website. 


### Deployment
The last thing I wanted to set up was an automated deployment pipeline. I decided to use Vercel, a GitHub Actions extension that triggers deployments on pushes and pull requests. I have a couple of unit tests that also run through GitHub Actions to make sure I'm not accidentally pushing broken code. 

All that was left was tying my domain to vercel using an A record, and hitting `git push -u origin master`. 