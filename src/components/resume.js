import React, { PropTypes, Component } from "react";
import * as d3 from 'd3'
import axisPoints from 'json-loader!./data/axis'
import timeline from 'json-loader!./data/timeline'
import mapData from 'json-loader!./data/map'


class Resume extends Component {
  propTypes: {
    id: PropTypes.string,
    height: PropTypes.number,
    width: PropTypes.number,
  }

  constructor(props) {
    super(props);
    this.state = {
      // Axis Labels
      labels: [... new Set(timeline.map(item => item.cat))],

      tlHeight: (window.innerWidth <= 400) ? 310 * .625 : 200,
      tlWidth: (window.innerWidth <= 400) ? 310 : 500,
      mapHeight: (window.innerWidth <= 400) ? 310 * .625 : 400 * .625,
      mapWidth: (window.innerWidth <= 400) ? 310 : 400,
      windowHeight: window.innerHeight,
      windowWidth: window.innerWidth,

      // Selected Color
      fillColorSelected: "#47de9c",
      strokeSelected: "#b3f5d9",

      // Unselected Color
      fillColorUnselected: "#E9E9E9",
      strokeUnselected: "#CDCDCD",

      // Gridlines
      gridlines: "#DEDEDE",
      labelColors: "#828282",
    }

    this.createStuff = this.createStuff.bind(this)
    this.createtl = this.createtl.bind(this)
    this.setContext = this.setContext.bind(this)
  }

  componentDidMount() {
    this.createStuff()
  }

  createStuff() {
    // Create SVG elements in the DOM
    const tlContext = this.setContext(this.refs.tl, 'tlContext', this.state.tlHeight, this.state.tlWidth)
    const mapContext = this.setContext(this.refs.map, 'mapContext', this.state.mapHeight, this.state.mapWidth)
    this.createtl(tlContext, mapContext, this.state.labels)
  }

  // Context for D3 svgs
  setContext(context, id, height, width) {
    return (
      d3.select(context).append('svg')
        .attr('id', id)
        .attr("height", height)
        .attr("width", width)
        .append('g')
    )
  }

  // Create the x axis, y axis, and items
  createtl(tlcontext, mapContext, labels) {

    // Dimensions

    var pad = this.state.tlWidth / 20
    var x_start = 10
    var x_tick_start = 100
    var x_end = this.state.tlWidth - pad
    var y_start = this.state.tlHeight * .25
    var y_space = (this.state.tlHeight - y_start) / this.state.labels.length

    // Function
    var parseTime = d3.timeParse("%d-%b-%y");

    const {
      // Colors
      fillColorSelected,
      fillColorUnselected,
      strokeSelected,
      strokeUnselected,
      gridlines,
      labelColors
    } = this.state

    // Initial Data Treatment
    var selected = 6
    var selectedState = ["NY"]
    timeline.forEach(function(d) {
      if (typeof(d.beg) == "string") {
        d.beg = parseTime(d.beg)
        d.end = parseTime(d.end)
      }
    })

    // Scales
    var x = d3.scaleTime().rangeRound([x_tick_start, x_end]);
    x.domain(d3.extent(axisPoints, function(d) { return parseTime(d.date)}));
    var y = d3.scaleLinear().range


    // Axes and Labels
    tlcontext.selectAll(".rowLines")
      .data(labels)
      .enter().append('line')
      .attr("x1", x_start)
      .attr("x2", x_end)
      .attr("y1", function(d, i) {
        return (i) * y_space + y_start + .5 * y_space })
      .attr("y2", function(d, i) {
        return (i) * y_space + y_start + .5 * y_space })
      .attr("stroke", gridlines)
      .attr("stroke-width", 1)

    tlcontext.selectAll(".columnLines")
      .data(axisPoints)
      .enter().append("line")
      .attr("x1", function(d) { return x(parseTime(d.date)); })
      .attr("x2", function(d) { return x(parseTime(d.date)); })
      .attr("y1", y_start * .5)
      .attr("y2", y_start + y_space * (this.state.labels.length - .5))
      .attr("stroke", gridlines)
  		.attr("stroke-width", 1)

    tlcontext.selectAll(".rowLabels")
      .data(labels)
      .enter().append("text")
      .attr("class","categoryLabels")
      .text(function(d) { return d})
      .attr("x", x_start)
      .attr("y", function(d, i) { return (i + .1) * y_space + y_start })
      .attr("fill", labelColors)

    tlcontext.selectAll(".columnLabels")
  		.data(axisPoints)
  	  .enter().append("text")
	  	.attr("class","axisLabels")
	  	.attr("x", function(d) { return x(parseTime(d.date)); })
	  	.attr("y", function(d, i) { return y_start * .3; })
	  	.attr("text-anchor","middle")
	  	.text(function(d) { return d.year; })
      .attr("fill", labelColors)

    // Data visualizations
    // Create Gantt lines
    var gantt = tlcontext.selectAll(".ganttLines")
  		.data(timeline)
  	  .enter().append("rect")
  	  	.attr("class","ganttRect")
        .attr("rx", 1)
  	    .attr("x", function(d) { return x(d.beg) })
  	    .attr("width", function(d) { return x(d.end) - x(d.beg) })
  	    .attr("y", function(d) {
          return (labels.indexOf(d.cat) - .375) * y_space + y_start})
  	    .attr("height", y_space * .75 )
        .attr("stroke-opacity", 1)
        .style("stroke-width", 3)
        .style("cursor", "pointer")
        .attr("stroke", function(d, i) {
  	    	if (i==selected) {
  	    		return strokeSelected
  	    	}
  	    	else {
  	    		return strokeUnselected
  	    	}
		    })
        .attr("fill", function(d, i) {
  	    	if (i==selected) {
  	    		return fillColorSelected
  	    	}
  	    	else {
  	    		return fillColorUnselected
  	    	}
		    })
        .on("click", function(d, i) {
          selected = i;
          selectedState = d.state
          update();
        })

      // Create info section
      var info = d3.select(this.refs.info).selectAll(".g")
        .data(timeline).enter()
        .append("div")
        .html(function(d) { return d.desc })
        .style("opacity", function(d, i) {
          if (i === selected) {
            return 1
          } else {
            return 0
          }
        })
        .attr("class", function(d, i) {
          if (i === selected) {
            return "show"
          } else {
            return "hidden"
          }
        })
        


      // Create map section
      var map = mapContext.selectAll(".states")
        .data(mapData)
        .enter().append("path")
        .attr("class","state")
        .attr("d",function(d) { return d.d; })
        .attr("transform", "scale(" + this.state.mapHeight / 600 + ") translate(" + 9 + ", 0)")
        .style("fill", function(d, i) {
          if (selectedState.indexOf(d.id) > -1) {
            return fillColorSelected
          } else {
            return fillColorUnselected
          }
        })
        .attr("stroke-width", function(d, i) {
          if (selectedState.indexOf(d.id) > -1) {
            return 3
          } else {
            return 1
          }
        })
        .attr("stroke", function(d, i) {
          if (selectedState.indexOf(d.id) > -1) {
            return strokeSelected
          } else {
            return strokeUnselected
          }
        })

      var update = function() {

        // Update Gantt visualizations
    		gantt.transition()
    			.duration(400)
          .attr("stroke", function(d, i) {
            if (i==selected) {
              return strokeSelected
            }
            else {
              return strokeUnselected
            }
          })
    			.attr("fill",function(d,i){
    				if (i === selected){
    					return fillColorSelected
    				}
    				else{
    					return fillColorUnselected
    				}
    			});

        // Update info visualizations
        info.transition()
          .duration(400)
          .style("opacity", function(d, i) {
            if (i === selected) {
              return 1
            } else {
              return 0
            }
          })
        .attr("class", function(d, i) {
          if (i === selected) {
            return "show"
          } else {
            return "hidden"
          }
        })


        // Update map
        map.transition()
          .duration(400)
          .style("fill", function(d, i){
            if (selectedState.indexOf(d.id) > -1) {
                return fillColorSelected
            } else {
              return fillColorUnselected
            }
          })
          .attr("stroke-width", function(d, i) {
            if (selectedState.indexOf(d.id) > -1) {
              return 3
            } else {
              return 1
            }
          })
          .attr("stroke", function(d, i) {
            if (selectedState.indexOf(d.id) > -1) {
              return strokeSelected
            } else {
              return strokeUnselected
            }
          })
      }
  }

  render() {
    return (
      <div className="resume">
        <div className="resume-heading">
          <h1>Interactive Resume</h1>
          <h4>When  |  Where  |  What</h4>
          <p><em><span style={{"color":"#47de9c", "fontWeight": "bold"}}>Select </span>a bar to see details</em></p>
        </div>
        <div className="flexColumns">
          <div className="topContainer">
            <div className="timelineDiv" ref="tl">
              <h2>When</h2>
            </div>
            <div className="mapDiv" ref="map">
              <h2>Where</h2>
            </div>
          </div>
          <div className="infoDiv" ref="info">
            <h2>What</h2>
          </div>
        </div>
      </div>
    )
  }
}

export default Resume
