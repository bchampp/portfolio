_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[19],{"9YCi":function(t,a,n){t.exports={title:"tags_title__S29E1",tags:"tags_tags__3wbtO",active:"tags_active__tBctr",inactive:"tags_inactive__JKQMv",content:"tags_content__9ShcU",contentTitle:"tags_contentTitle__lM8fZ",contentContainer:"tags_contentContainer__1PyVS",back:"tags_back__1h3of"}},PRXq:function(t,a,n){"use strict";n.r(a),n.d(a,"__N_SSG",(function(){return i})),n.d(a,"default",(function(){return r}));var e=n("q1tI"),c=n.n(e),s=n("epD1"),o=c.a.createElement,i=!0;function r(t){var a=t.tag,n=t.work,e=t.projects,c=t.posts,i=t.tags;return o(s.default,{tag:a,tags:i,work:n,projects:e,posts:c})}},diFV:function(t,a,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/tags/[id]",function(){return n("PRXq")}])},epD1:function(t,a,n){"use strict";n.r(a),n.d(a,"__N_SSG",(function(){return p})),n.d(a,"default",(function(){return v}));var e=n("q1tI"),c=n.n(e),s=n("pCvL"),o=n("KQm4"),i=n("uBSs"),r=n("YFqc"),u=n.n(r),l=n("9YCi"),_=n.n(l),f=c.a.createElement;function g(t){var a=t.tag,n=t.tags,c=t.work,s=t.projects,r=(t.posts,Object(e.useState)([])),l=r[0],g=r[1];Object(e.useEffect)((function(){a&&g(a)}),[a]);return f("div",null,f("h3",null,"Tags"),f("div",null,f("div",{className:_.a.tags},n&&n.map((function(t){return f("div",{key:t.name,className:l.includes(t.name)?_.a.active:_.a.inactive},f("div",{onClick:function(){!function(t){var a=l,n=l.indexOf(t);-1==n?(a=[].concat(Object(o.a)(l),[t]),g(a)):(a.splice(n,1),g(a.filter((function(a){return a!==t}))));for(var e="/tags/".concat(a[0]||""),c=1;c<a.length;c++){var s="&".concat(a[c]);e=e.concat(s)}window.history.pushState({},null,e)}(t.name)}},t.name))}))),f("div",{className:_.a.content},f("div",{className:_.a.contentContainer},f("div",{className:_.a.contentTitle},f(u.a,{href:"/work"},f("a",null,"Work"))),f(i.a,{tags:!0,type:"work",filters:l,data:c})),f("div",{className:_.a.contentContainer},f("div",{className:_.a.contentTitle},f(u.a,{href:"/projects"},f("a",null,"Projects"))),f(i.a,{tags:!0,type:"projects",filters:l,data:s}))),f("div",{className:"back"},a?f(u.a,{href:"/tags"},f("a",null,"\u2190 All Tags")):f(u.a,{href:"/"},f("a",null,"\u2190 Home")))))}var d=c.a.createElement,p=!0;function v(t){var a=t.tag,n=t.tags,e=t.work,c=t.projects,o=t.posts;return d(s.a,{page:"tags"},d(g,{tag:a,tags:n,work:e,projects:c,posts:o}))}}},[["diFV",0,2,1,3,4,5]]]);