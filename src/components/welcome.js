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
        <div className="timings">
          <div className="minute one">
            <h2>One minute?</h2>
            <p>See my <NavLink exact to="/resume">resume</NavLink></p>
          </div>
          <div className="minute two">
            <h2>Two minutes?</h2>
            <p><NavLink exact to="/resume">Resume</NavLink> and <NavLink exact to="/portfolio">side projects</NavLink></p>
          </div>
          <div className="minute two">
            <h2>Five minutes?</h2>
            <p><NavLink exact to="/resume">Resume</NavLink>, <NavLink exact to="/portfolio">side projects</NavLink>, and <NavLink exact to="/about">about</NavLink></p>
          </div>
        </div>
        <Footer />
      </div>
    )
  }
}
