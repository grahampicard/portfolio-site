import React, { Component } from "react";
import * as d3 from 'd3'
import Lightbox from 'react-image-lightbox'


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

  componentDidMount() {
		if (this.props.projects.length) {
			this.renderPortfolioItem(this.props.projects);
		}
	}

	renderPortfolioItem(projects) {
    window.scrollTo(0, 0)
		let project = projects.filter(p => {
			return (p.id == this.props.match.params.id);
		});

    this.setState({
      project: project[0],
      image: project[0].id + '.png'
    });
	}

  importImages(r) {
    let images = {};
    r.keys().map((item, index) => {
      images[item.replace('./', '')] = r(item);
    });

    return images;
  }

	render() {
    if(this.refs.pf) {
      d3.select(this.refs.pf)
        .html(this.state.project.description)
    }

    const { project, isOpen, image } = this.state
    const images = this.importImages(require.context('./img', false, /\.(png)$/));

		return (
      <div className="portfolio-item">
        <h1>{ project.name }</h1>
        <div className="columns">
          <div className="text">
            <div className="portfolioText" ref="pf"></div>
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
              <img src={images[image]} onClick={() => this.setState({ isOpen: true })}/>
            </div>
            {isOpen &&
                <Lightbox
                    mainSrc={images[image]}
                    onCloseRequest={() => this.setState({ isOpen: false })}
                />
            }
          </div>
        </div>
      </div>
		);
	}
}
