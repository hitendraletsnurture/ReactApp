import React, { Component } from 'react';
import axios from 'axios';

class Weather extends Component {

  constructor(props){
    super(props);
    
    this.state = {
      tempData: {},
      city: '',
      country: ''
    }
  }

  componentWillMount() {
    let url = 'http://samples.openweathermap.org/data/2.5/weather?lat=35&lon=139&appid=b6907d289e10d714a6e88b30761fae22';
    
    axios.get(url)
    .then((response)=>  {
      let data = response.data;
      this.setState({ tempData: data });
    })
    .catch(function (error) {
      console.log(error);
    });
  }

  handleCityChange(e) {
    this.setState({ city: e.target.value });
  }
  handleCountryChange(e) {
    this.setState({ country: e.target.value });
  }

  getWeatherData() {
    this.setState({ tempData: '' });
    let city = this.state.city;
    let country = this.state.country;

    let queryString = city + ',' + country;
    let QueryUrl = 'http://api.openweathermap.org/data/2.5/weather?q=' + queryString + '&units=metric&appid=bd5e378503939ddaee76f12ad7a97608';
    
    axios.get(QueryUrl)
    .then((response)=>  {
      let data = response.data;
      if (data.cod == '404') {
        this.setState({ tempData: {} });
      } else {
        this.setState({ tempData: data });
      }
    })
    .catch((error) => {
      this.setState({ tempData: {} });
      console.log(error);
    });

  }

  render() {
    return (
      <div>
        <h1>Today's Wather</h1>
        <hr style={{ marginBottom: '10px' }} / >
        <lable>City: </lable>
        <input type="text" value={this.state.city} name="city" onChange={(e) => this.handleCityChange(e)} />
        <lable>Country: </lable>
        <input type="text" value={this.state.country} name="country" onChange={(e) => this.handleCountryChange(e)} />
        <button type="button" name="Submit" onClick={() => this.getWeatherData()}>Search</button>
        <div style={{ marginTop: '10px'}}>
          <h2>Clouds</h2>
          <h4 style={{ marginBottom: '20px'}}>Overcast clouds</h4>
          {this.state.tempData === '' &&
            <p>Loading...</p>
          }
          {this.state.tempData === {} &&
            <p>Not found city</p>
          }
          {this.state.tempData.main !== undefined && this.state.tempData.main.temp_max !== undefined && this.state.tempData.main.temp_min !== undefined && 
            <lable>Temprature: {this.state.tempData.main.temp_min} <sup>o</sup>C ~ {this.state.tempData.main.temp_max} <sup>o</sup>C</lable>
          }
          <br/>
          {this.state.tempData.main !== undefined && this.state.tempData.main.humidity !== undefined && 
            <lable>Humidity: {this.state.tempData.main.humidity} %</lable>
          }
        </div>
      </div>
    );
  }
}

export default Weather;
