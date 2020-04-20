import React, { Component } from 'react';
import { Link } from "react-router-dom";

class Header extends Component {
  render() {

    if(this.props.data){
      var name = this.props.data.name;
      var networks= this.props.data.social.map(function(network){
        return <li key={network.name}><a href={network.url}><i className={network.className}></i></a></li>
      })
    }

    return (
      <header id="home">
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

      <div className="row banner">
         <div className="banner-text">
            <h1 className="responsive-headline">{name}</h1>
            <h3></h3>
            <hr />
            <ul className="social">
               {networks}
            </ul>
         </div>
      </div>

      <p className="scrolldown">
         <a className="smoothscroll" href="#about"><i className="icon-down-circle"></i></a>
      </p>
   </header>
    );
  }
}

export default Header;
