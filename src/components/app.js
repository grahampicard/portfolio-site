import React, { Component } from "react"
import { Route } from "react-router-dom"
import { AnimatedSwitch } from 'react-router-transition';

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

  showSettings (event) {
    event.preventDefault()
  }

  render() {
    return (
      <div className='wrapper'>
        <TopBar />
          <div className='page'>
            <AnimatedSwitch
              atEnter={{ opacity: 0 }}
              atLeave={{ opacity: 0 }}
              atActive={{ opacity: 1 }}
              className="switch-wrapper"
            >
              <Route 
                exact path='/' 
                component={Welcome} 
                key="home"/>
              <Route 
                exact path='/resume' 
                component={Resume} 
                key="resume"/>
              <Route 
                exact path='/portfolio' 
                key="portfolio" 
                render={props => (
                  <Portfolio {...props} projects={ this.state.projects } />
                )}
              />
              <Route
                path="/portfolio/:id"
                key=":id"
                render={props => (
                  <PortfolioItem {...props} projects={ this.state.projects } />
                )}
              />
              <Route
                exact path='/about'
                component={About}
                key="about"/>
            </AnimatedSwitch>
          </div>
      </div>
    );
  }
}
