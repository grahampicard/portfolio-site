import React, { Component } from "react";
import { Link, NavLink } from "react-router-dom";


export default class Test extends Component {
  constructor(props) {
		super(props);
	}

  render() {
    return(
      <div className="welcome">
        <span className="welcome-text">Welcome</span>
        <h2>Busy? I get it. Here's how to make the most of your visit.</h2>
        <div className="timings">
          <div className="minute one">
            <h2>Have a minute?</h2>
            <p>Check out my interactive <NavLink exact to="/resume">resume</NavLink>. Make sure to click around the timeline.</p>
          </div>
          <div className="minute two">
            <h2>Two minutes?</h2>
            <p>After you played with my <NavLink exact to="/resume">resume</NavLink>, click through my <NavLink exact to="/portfolio">portfolio</NavLink> of data products. Intested in music, sports, or education? There's a project that might catch your eye.</p>
          </div>
          <div className="minute two">
            <h2>Five minutes?</h2>
            <p>Click through the full site and get to know a little more about me on the <NavLink exact to="/about">about</NavLink> page.</p>
          </div>
        </div>
      </div>
    )
  }
}
