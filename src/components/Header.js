import React, { useState } from 'react';
import { NavLink, Link } from 'react-router-dom';

import SlideBox from '../services/SlideBox/Slidebox';

const Header = () => {

  const [ show, set ] = useState(false);

  const toggleSlideBox = () => {
    set(!show)
  }

  return (
    <header>
      <div className="main-wrapper">
        <Link to="/" className="home">
          <img src="https://dmvie1.s3.us-east-2.amazonaws.com/profilepic.jpg" alt="DmVie"/>
        </Link>
        <h1>The Web Hermits</h1>
        <i className="fas fa-bars" onClick={toggleSlideBox}>X</i>
        <SlideBox  show={show} toggleSlideBox={toggleSlideBox}>
          <nav className="mob-nav">
            <li><NavLink to="/" onClick={toggleSlideBox} exact={true}>Home</NavLink></li>
            <li><NavLink to="/projects" onClick={toggleSlideBox}> Projects</NavLink></li>
            <li><NavLink to="/articles" onClick={toggleSlideBox}> Articles</NavLink></li>
            <li><NavLink to="/learnings" onClick={toggleSlideBox}> Learning</NavLink></li>
            <li><NavLink to="/contact" onClick={toggleSlideBox}> Contact</NavLink></li>
          </nav>
        </SlideBox>

        <nav className="noMob">
          <li>
            <NavLink to="/" exact={true}>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/projects" exact={true}>
              Projects
            </NavLink>
          </li>
          <li>
            <NavLink to="/articles" exact={true}>
              Articles
            </NavLink>
          </li>
          <li>
            <NavLink to="/learnings" exact={true}>
              Learnings
            </NavLink>
          </li>
          <li>
            <NavLink to="/contact" exact={true}>
              Contact Us
            </NavLink>
          </li>
        </nav>









      </div>
    </header>
  )
}

export default Header
