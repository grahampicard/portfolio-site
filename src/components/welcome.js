import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import Footer from "./footer";


export default class WelcomePage extends Component {
  constructor(props) {
		super(props);
	}

  render() {
    return(
      <div className="welcome">
        <div className="timings">
          <div className="minute one">
            <h2>1 minute?</h2>
            <p><NavLink exact to="/resume">resume</NavLink></p>
          </div>
          <div className="minute two">
            <h2>2 minutes?</h2>
            <p><NavLink exact to="/resume">resume</NavLink> and <NavLink exact to="/about">about</NavLink></p>
          </div>
          <div className="minute two">
            <h2>5 minutes?</h2>
            <p><NavLink exact to="/resume">resume</NavLink>, <NavLink exact to="/about">about</NavLink>, and <NavLink exact to="/portfolio">side projects</NavLink></p>
          </div>
        </div>
        <Footer />
      </div>
    )
  }
}
