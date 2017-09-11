import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';


export default class TopBar extends Component {
  render() {
    return(
      <div className='top-bar'>
        <h2>Graham Picard</h2>
        <nav>
          <NavLink exact to='/'>Home</NavLink>
          <NavLink to='/resume'>Resume</NavLink>
          <NavLink to='/portfolio'>Portfolio</NavLink>
        </nav>
      </div>
    )
  }
}
