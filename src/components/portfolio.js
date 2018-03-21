import React, { Component } from "react";
import { Link } from "react-router-dom";


export default class Portfolio extends Component {
	constructor(props) {
		super(props);
		this.state = {
			projects: []
		};
	}

  componentDidMount() {
    this.setState({
      projects: this.props.projects
    })
  }

  render() {
    return (
      <div className='portfolioWrapper'>
        <h1>Selected Portfolio</h1>
        <div className='portfolio'>
          <ul>
            {this.state.projects.map((p, i) => {
              return (
                <li key={i}>
                  <Link to={`/portfolio/${p.id}`}>
                    {p.name}
                  </Link>
                </li>
              )
             })
            }
          </ul>
        </div>
      </div>
    )
  }
}
