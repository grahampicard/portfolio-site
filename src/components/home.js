import React, { Component } from "react";
import { Link } from "react-router-dom";


export default class Home extends Component {
	constructor(props) {
		super(props);
	}

  render() {
    return(
      <div className="home">
        <h1>Welcome</h1>
        <p>Thanks for visiting my homepage. I'm an Insight Analyst/Business
           Intelligence Developer, with a focus on full-stack dashboard
           development and an interest in making data easier to digest for
           wide audiences. I drive action through analysis and interactive
           data tools. View my interactive resume and visit some of my side
           projects at the links above.
        </p>
        <p>Contact me at <a href="mailto:grahampicard@gmail.com">
            grahampicard@gmail.com
          </a>
        </p>
        <div className="lineItems">
          <h4>Technology</h4>
          <ul>
            <li>SQL (mssql/postgresql/mysql)</li>
            <li>Python (pandas/numpy/sklearn/flask)</li>
            <li>Tableau</li>
            <li>R (shiny)</li>
            <li>Javascript (d3/react)</li>
            <li>VBA</li>
          </ul>
        </div>
        <div className="lineItems">
          <h4>Interests</h4>
          <ul>
            <li>Interactive design</li>
            <li>Education & mathematics instruction</li>
            <li>Behavioral economics</li>
            <li>Music production</li>
          </ul>
        </div>
        <p><em>Created with React & d3. Hosted on AWS.</em></p>
      </div>
    )
  }
}
