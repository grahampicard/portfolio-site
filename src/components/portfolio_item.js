import React, { Component } from "react";
import Lightbox from 'react-image-lightbox'
import components from './items'


export default class PortfolioItem extends Component {
	constructor(props) {
		super(props);
		this.state = {
			project: {},
      image: "",
      isOpen: false
		};
    this.importImages = this.importImages.bind(this)
  }
  
  componentWillMount() {
		if (this.props.projects.length) {
			this.renderPortfolioItem(this.props.projects);
		}    
  }

	renderPortfolioItem(projects) {
    window.scrollTo(0, 0)

    const desc = components[this.props.match.params.id]
    const pic = require('./img/' + this.props.match.params.id + '.png')
    const project = projects.filter(p => {
			return (p.id == this.props.match.params.id);
    })

    this.setState({
      project: project[0],
      image: pic,
      description: desc
    })

  }
  
  importImages(r) {
    let images = {};
    r.keys().map((item, index) => {
      images[item.replace('./', '')] = r(item);
    });

    return images;
  }

	render() {
    const { project, isOpen, image, description } = this.state

		return (
      <div className="portfolio-item">
        <h1>{ project.name }</h1>
        <div className="columns">
          <div className="text">
            <div className="portfolioText" ref="pt">
              {description()}
            </div>
            <div className="goBack">
      				<a onClick={e => {
      				  e.preventDefault();
      					this.props.history.goBack();
      				}} >
      						←
      				</a>
            </div>
          </div>
          <div className="col2">
            <p><em>Click to enlarge</em></p>
            <div className="portfolioImage">
              <img src={this.state.image} onClick={() => this.setState({ isOpen: true })}/>
            </div>
            {isOpen &&
                <Lightbox
                    mainSrc={this.state.image}
                    onCloseRequest={() => this.setState({ isOpen: false })}
                />
            }
          </div>
        </div>
      </div>
		);
	}
}
