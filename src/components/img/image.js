import React, { Component } from 'react';
import * as classNames from 'classnames';

export default class imagecomp extends Component {
    constructor(props) {
        super(props);

        this.state = {
            loaded: true
        }
    }

  onImageLoad = function() {
    if (this.isMounted()) {
      this.setState({ loaded: true });
    }
  }

  componentDidMount() {
    var imgTag = ReactDOM.findDOMNode(this.refs.img);
    var imgSrc = imgTag.getAttribute('src');
    // You may want to rename the component if the <Image> definition
    // overrides window.Image
    var img = new window.Image();
    img.onload = this.onImageLoad;
    img.src = imgSrc;
  }

  render() {
    var { className, ...props } = this.props;
    var imgClasses = 'image';
    var rootClassName = classNames(className, 'image', {
      'image-loaded': this.state.loaded,
    });
    return (
      <img ref="img" {...props} className={rootClassName} />
    );
  }
};