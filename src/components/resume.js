import React, { Component } from "react";
import { 
  select,
  timeParse,
  scaleTime,
  extent,
  scaleLinear
} from 'd3'
import axisPoints from 'json-loader!./data/axis'
import timeline from 'json-loader!./data/timeline'
import mapData from 'json-loader!./data/map'


class Resume extends Component {

  constructor(props) {
    super(props);

    this.state = {
      // Axis Labels
      labels: [... new Set(timeline.map(item => item.cat))], 

      tlHeight:     (window.innerWidth <= 400) ? 280 * .625 : 110,
      tlWidth:      Math.min(window.innerWidth * .8, 500),
      mapHeight:    Math.min(window.innerWidth * .8, 350) * .625,
      mapWidth:     Math.min(window.innerWidth * .8, 350),
      windowHeight: window.innerHeight,
      windowWidth:  window.innerWidth,

      // Selected Color
      fillColorSelected: "#00adef",
      strokeSelected: "#83c9f4",

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
    window.scrollTo(0, 0)
    this.createStuff()
    console.log(window.innerWidth)
  }

  createStuff() {
    // Create SVG elements in the DOM
    const tlContext = this.setContext(
      this.refs.tl,
      'tlContext', 
      this.state.tlHeight,
      this.state.tlWidth
    )
    const mapContext = this.setContext(
      this.refs.map, 
      'mapContext', 
      this.state.mapHeight, 
      this.state.mapWidth
    )
    this.createtl(tlContext, mapContext, this.state.labels)

  }

  // Context for D3 svgs
  setContext(context, id, height, width) {
    return (
      select(context).append('svg')
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
    var y_start = this.state.tlHeight * .35
    var y_space = (this.state.tlHeight - y_start) / this.state.labels.length

    // Axis scaling function
    var parseTime = timeParse("%d-%b-%y");

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
    var selected = 8
    var selectedState = ["CT"]
    
    timeline.forEach(function(d) {

      if (d.end == null) {
        const monthNames = [
          "Jan", 
          "Feb", 
          "Mar", 
          "Apr", 
          "May", 
          "Jun",
          "Jul",
          "Aug",
          "Sep",
          "Oct",
          "Nov",
          "Dec"
        ];

        const today = new Date()
        const json_date = '{"date": "' + String(today.getDay()) + '-' + String(monthNames[today.getMonth()]) + '-' + String(today.getFullYear() - 2000) + '"}'
        const json_loaded = JSON.parse(json_date);

        d.end = json_loaded.date
      }

    if (typeof(d.beg) === "string") {
      d.beg = parseTime(d.beg)
    }

    if (typeof(d.end) === "string") {
      d.end = parseTime(d.end)
    }
  })

    // Scales
    var x = scaleTime().rangeRound([x_tick_start, x_end]);
    x.domain(extent(axisPoints, function(d) { return parseTime(d.date)}));

    var y = scaleLinear().range


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
        .style("stroke-width", 2)
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
      var info = select(this.refs.info).selectAll(".g")
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
        
      var mapTitle = select(".mapDiv")
        .append("h4")
        .text(timeline[selected].location)

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

        mapTitle.transition()
        .text(timeline[selected].location)

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
        </div>
        <div className="resumeSpace">
          <div className="flexColumns">
            <p><em><span style={{"color":"#00adef", "fontWeight": "bold"}}>Select </span>a bar to see details</em></p>
            <div className="timelineDiv" ref="tl"></div>
          </div>
          <div className="infoDiv" ref="info"></div>
          <div className="mapDiv" ref="map"></div>              
        </div>          
      </div>
    )
  }
}

export default Resume
