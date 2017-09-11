import React, { Component } from "react";
import { Route } from "react-router-dom";
import PropTypes from 'prop-types';

import TopBar from './top_bar';
import Home from './home';
import Resume from './resume';
import Portfolio from './portfolio'
import PortfolioItem from './portfolio_item'

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
          <Route exact path='/' component={Home} key="home"/>
          <Route exact path='/resume' component={Resume} key="resume"/>
          <Route exact path='/portfolio' key="portfolio" render={props => (
            <Portfolio {...props} projects={ this.state.projects } />
            )}
          />
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
