import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../App.css';

class NavBar extends Component {
   render(){
      return (
         <nav id="nav-wrap">
            <a className="mobile-btn" href="#nav-wrap" title="Show navigation">Show navigation</a>
            <a className="mobile-btn" href="#home" title="Hide navigation">Hide navigation</a>
            <ul id="nav" className="nav">
               {/* <li><a className="smoothscroll" href="#home">Brent Champion</a></li> */}
               <Link to='/home'>
                  <li className="current"><a className="smoothscroll" href="home">Home</a></li> 
               </Link>

               <Link to='/about'>
                  <li>About</li>
               </Link>

               <Link to='/projects'>
                  <li>Projects</li>
               </Link>
               
               <Link to='/resume'>
                  <li>Resume</li>
               </Link>
            </ul>
         </nav>
      );
   }
}

export default NavBar;