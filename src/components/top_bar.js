import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';


export default class TopBar extends Component {
  render() {
    return(
      <div className="top-bar">
        <span className="name">Graham Picard</span>
        <nav>
          <NavLink exact to='/'>Home</NavLink>
          <NavLink to='/resume'>Resume</NavLink>
          <NavLink to='/portfolio'>Portfolio</NavLink>
          <NavLink to='/about'>About</NavLink>
        </nav>
      </div>
    )
  }
}
