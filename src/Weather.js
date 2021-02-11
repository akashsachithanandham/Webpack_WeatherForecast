import React, { Component } from "react";
import WeatherData from './WeatherData';


class Weather extends Component {
  constructor() {
    super();
    this.state = {
      loading: true,
        character: {},
    };
  }

  componentDidMount() {
    this.setState({ loading: true });
    fetch(
      "http://api.openweathermap.org/data/2.5/forecast?lat=35&lon=139&appid=a9dac8d426c074d0f1f8c06ec84d66c8"
    )
      .then((response) => response.json())
      .then((data) => {
        this.setState({
          loading: false,
          character: data,
        });
        console.log(data);
        
        // let listArray = data.list;
        
        // console.log(listArray[0]);
      });
  }
  
  render() {
    
    //console.log(this.state);
    const text = this.state.loading ? "loading..." : "Daily Weather Forecast";
    let listArray = []
    if (this.state.loading == false) {
      for (var i = 0; i < 40; i += 7) {
        listArray.push(this.state.character.list[i]);
      }
      console.log(listArray);
    }
    let forecastList = listArray.map((data) => (
      <div className="col-md-3">
        <div style={{ margin: "50px" }}>
          <div className="card h-100 " >
        <WeatherData date={data.dt_txt} tempMin={data.main.temp_min} tempMax={data.main.temp_max} description={data.weather[0].description} />
          </div></div>
          
        </div>
      
    ));  

    return (
      <div className="row" style={{ margin: "25px" }}>
        {forecastList}
      </div>
    );
  }
}

export default Weather;
