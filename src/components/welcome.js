import React, { Component } from "react";
import { Link, NavLink } from "react-router-dom";
import Footer from "./footer";


export default class Test extends Component {
  constructor(props) {
		super(props);
	}

  render() {
    return(
      <div className="welcome">
        <span className="welcome-text">Welcome</span>
        <h2>Busy? Make the most of your visit. </h2>
        <div className="timings">
          <div className="minute one">
            <h2>One minute?</h2>
            <p>Check out my interactive <NavLink exact to="/resume">resume</NavLink>. Click around the timeline.</p>
          </div>
          <div className="minute two">
            <h2>Two minutes?</h2>
            <p>After playing with my <NavLink exact to="/resume">resume</NavLink>, find one of my <NavLink exact to="/portfolio">side projects</NavLink> that catches your eye.</p>
          </div>
          <div className="minute two">
            <h2>Five minutes?</h2>
            <p>See the whole site, and get to know me the <NavLink exact to="/about">about</NavLink> page.</p>
          </div>
        </div>
        <Footer />
      </div>
    )
  }
}
