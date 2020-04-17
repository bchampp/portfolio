import React from 'react';
import './App.css';
import { Link } from 'react-router-dom';

function NavBar(){

    return (
        <header id="home">
        <nav id="nav-wrap">
           <a className="mobile-btn" href="#nav-wrap" title="Show navigation">Show navigation</a>
            <a className="mobile-btn" href="#home" title="Hide navigation">Hide navigation</a>
           <ul id="nav" className="nav">
              {/* <li><a className="smoothscroll" href="#home">Brent Champion</a></li> */}
              <Link to='./home'>
                 <li className="current"><a className="smoothscroll" href="home">Home</a></li> 
              </Link>
  
              <Link to='./about'>
                 <li className='smoothscroll'>About</li>
              </Link>
  
              <Link to='./projects'>
                 <li><a className="smoothscroll" href="#portfolio">Projects</a></li>
              </Link>
              
              <Link to='./resume'>
                  <li><a className="smoothscroll" href="#resume">Resume</a></li>
              </Link>
           </ul>
        </nav>
   </header>
    )
}