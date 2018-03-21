import React, { Component } from 'react';
import LinkedIn from "./svg/linkedin";
import Twitter from "./svg/twitter";
import Github from "./svg/github";


export default class Footer extends Component {
  render() {
    return(
      <div className="footer">
        <ul className="socialMedia">
          <li><a href="https://www.linkedin.com/in/graham-picard/" target="_blank"><LinkedIn /></a></li>
          <li><a href="https://twitter.com/grahampicard/" target="_blank"><Twitter /></a></li>
          <li><a href="https://www.github.com/grahampicard/" target="_blank"><Github /></a></li>
        </ul>
        <p><em>Created with React & d3. Hosted on AWS.</em></p>
      </div>
    )
  }
}
