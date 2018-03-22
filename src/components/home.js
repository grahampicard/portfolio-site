import React, { Component } from "react";
import { Link, NavLink } from "react-router-dom";
import aboutMePic from './img/about-me-pic.png';


export default class About extends Component {
	constructor(props) {
		super(props);
  }
  
  componentDidMount() {
    window.scrollTo(0, 0)
  }

  render() {
    return(
      <div className="home">
        <div className="contentRow">
          <div className="row-heading">
            <h1>About me</h1>
          </div>
          <div className="rowCopy">
          <img src={aboutMePic} alt="Headshot" className="headshot" />
          <p>Thanks for visiting my homepage.</p>
          <p>I am an Insight Analyst/Business
             Intelligence Developer, with a focus on full-stack dashboard
             development and an interest in making data easier to digest for
             wide audiences.
          </p>
          <p>I drive action through analysis and interactive
             data tools.
          </p>
          <p>I'm also a former high school teacher and a lifelong musician.
             View my interactive <NavLink exact to="/resume">resume</NavLink> and
             visit some of my side projects, like my <NavLink exact to="/portfolio/spotify-songkick-artist-tool"> Spotify & Songking Artist Tool </NavLink> to get to know what interests me.
          </p>
          <p>Contact me at <a href="mailto:grahampicard@gmail.com">
              grahampicard@gmail.com</a>
          </p>
          </div>
        </div>
        <div className="contentRow">
          <div className="row-heading">
            <h1>Technology</h1>
          </div>
          <div className="rowCopy">
            <li>SQL (mssql/postgresql/mysql)</li>
            <li>Python (pandas/numpy/sklearn/flask)</li>
            <li>Tableau</li>
            <li>R (shiny)</li>
            <li>Javascript (d3/react)</li>
            <li>VBA</li>
          </div>
        </div>
        <div className="contentRow">
          <div className="row-heading">
            <h1>Interests</h1>
          </div>
          <div className="rowCopy">
            <li>Interactive design</li>
            <li>Education & mathematics instruction</li>
            <li>Behavioral economics</li>
            <li>Music production</li>
          </div>
        </div>
        <p><em>Created with React & d3. Hosted on AWS.</em></p>
      </div>
    )
  }
}
