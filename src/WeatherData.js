import React, { Component } from 'react';
//import React, { useState, useEffect } from "react";

class WeatherData extends Component {
  constructor(props) {
    super(props);
    this.state = {
      date: this.props.date,
      tempMin: this.props.tempMin,
      tempMax: this.props.tempMax,
      description: this.props.description,
    };
    //this.hourWise = this.hourWise.bind(this);
  }

    

  render() {
    return (
      <React.Fragment>
        
            <div className="card-header">{this.state.date.split(" ")[0]}</div>
            <div className="card-body">
              <div> Min Temp:{this.state.tempMin} </div>
              <div> Max Temp:{this.state.tempMax} </div>
              <div> Description:{this.state.description} </div>
            </div>
          
      </React.Fragment>
    );
  }
}
 
export default WeatherData;