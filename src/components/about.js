import React, { Component } from "react";
import aboutMePic from "./img/about-me-pic.png";
import Footer from "./footer";


export default class About extends Component {
	constructor(props) {
		super(props);
  }

  componentWillMount() {
    window.scrollTo(0,0)
  }

  render() {    
    return(
      <div className="home">
        <div className="contentRow">
          <div className="row-heading1">
            <h1>About</h1>
            <p>MBA Candidate</p>
            <p>Insights and Analytics</p>
            <p>New Haven, CT</p>
          </div>
          <div className="row-heading2">
            <h1>Contact</h1>
            <p>
              <a href="mailto:grahampicard@gmail.com">
                grahampicard@gmail.com
              </a>
            </p>
          </div>
          <div className="row-heading3">
            <h1>Technology</h1>
            <p>SQL (mssql/postgresql/mysql)</p>
            <p>Python (pandas/numpy/sklearn/flask)</p>
            <p>Tableau</p>
            <p>R (shiny)</p>
            <p>Javascript (d3/react)</p>
            <p>VBA</p>
          </div>
          <div className="row-heading4">
            <h1>Interests</h1>
            <p>Full-stack development</p>
            <p>Interactive design</p>
            <p>Education</p>
            <p>Music production</p>
          </div>
          <img src={aboutMePic} alt="Headshot" className="headshot"/>
        </div>
        <Footer />
      </div>
    )
  }
}
