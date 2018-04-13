import React, { Component } from 'react';
import './App.css';


import  DataAnalysis from './component/DataAnalysis.js';
import  Weather from './component/Weather.js';

class App extends Component {

  constructor(props){
    super(props);
    
    this.state = {
      dataAnalysis: true,
      weather: false,
      tempData: {},
      temprature: 23,
      humidity: 60
    }
  }

  getItem(item) {
    if (item == 'analysis') {
      this.setState({ dataAnalysis: true, weather: false });
    } else if (item == 'weather') {
      this.setState({ weather: true, dataAnalysis: false });
    }
  }

  render() {

    return (
      <div className="App">
        <ul className="list">
          <li onClick={(e) => this.getItem('analysis')} >Data Analysis</li>
          <li onClick={(e) => this.getItem('weather')}>Today's Weather</li>
        </ul>
        <div className="load-component">
          {this.state.weather &&
            <Weather />
          }
          {this.state.dataAnalysis &&
            <DataAnalysis />
          }
        </div>
      </div>
    );
  }
}

export default App;
