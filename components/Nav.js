import React, { Component } from 'react';
import Link from 'next/link'

function NavBar(){
      return (
         <nav id="nav-wrap">
            <a className="mobile-btn" href="#nav-wrap" title="Show navigation">Show navigation</a>
            <a className="mobile-btn" href="#home" title="Hide navigation">Hide navigation</a>
            <ul id="nav" className="nav">
               <Link href='/'><a className="current">Home</a></Link>
               <Link href='/about'><a>About</a></Link>
               <Link href='/projects'><a>Projects</a></Link>
               <Link href='/resume'><a>Resume</a></Link>
            </ul>
         </nav>
      )
}

export default NavBar;