import React, { Component } from "react"
import { Route } from "react-router-dom"
import PropTypes from 'prop-types'

import TopBar from './top_bar'
import Welcome from './welcome'
import Resume from './resume'
import Portfolio from './portfolio'
import PortfolioItem from './portfolio_item'
import About from './about';

import portfolioData from 'json-loader!./data/portfolio'


export default class App extends Component {
  constructor(props) {
      super(props);
  }

  componentWillMount() {
    this.setState({
      projects: portfolioData
    })
  }

  render() {
    return (
      <div className='wrapper'>
        <TopBar />
        <div className='page'>
          <Route exact path='/' component={Welcome} key="home"/>
          <Route exact path='/resume' component={Resume} key="resume"/>
          <Route exact path='/portfolio' key="portfolio" render={props => (
            <Portfolio {...props} projects={ this.state.projects } />
            )}
          />
          <Route exact path='/about' component={About} key="about"/>
          <Route path="/portfolio/:id" key = ":id"
            render={props => (
              <PortfolioItem {...props} projects={ this.state.projects } />
            )}
          />
        </div>
      </div>
    );
  }
}
