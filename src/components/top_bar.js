import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { slide as Menu } from 'react-burger-menu'

const isMenuOpen = function(state) {
  return state.isOpen
}

export default class TopBar extends Component {
  render() {
    return(
      <div className="top-bar">
        <div className="top-bar-text">
          <NavLink exact to='/'>Home</NavLink>
          <NavLink to='/resume'>Resume</NavLink>
          <NavLink to='/portfolio'>Portfolio</NavLink>
          <NavLink to='/about'>About</NavLink>
          <span className="name">graham picard</span>
        </div>
        <div className="top-bar-mini">
        <span className="name">graham picard</span>        
        </div>
        <div className="burger-menu">
          <Menu onStateChange={ isMenuOpen }>
            <NavLink exact to='/'>Home</NavLink>
            <NavLink to='/resume'>Resume</NavLink>
            <NavLink to='/portfolio'>Portfolio</NavLink>
            <NavLink to='/about'>About</NavLink>
          </Menu>

        </div>
      </div>
    )
  }
}
