import React, { Component } from 'react';
import LineChart, { parseFlatArray } from 'react-linechart';
import '../../node_modules/react-linechart/dist/styles.css';

class DataAnalysis extends Component {

  render() {
    const gsmData = [
        {
            "Year": 2007,
            "Men": 106898,
            "Female": 97516,
        },
        {
            "Year": 2008,
            "Men": 103937,
            "Female": 94796,
    },
    {
            "Year": 2009,
            "Men": 99492,
            "Female": 91818,
  },
  {
            "Year": 2010,
            "Men": 87213,
            "Female": 79673,
  },
  {
            "Year": 2011,
            "Men": 101943,
            "Female": 94684,
  },
  {
            "Year": 2012,
            "Men": 118848,
            "Female": 110633,
  },
  {
            "Year": 2013,
            "Men": 103120,
            "Female": 95993,
        },
    ];
    const gsmFlat = parseFlatArray(gsmData, "Year", ["Men", "Female"]);

    return (
      <div>
          <p>Birth in Taiwan</p>
         <LineChart width={600} height={400} data={gsmFlat} />
      </div>
    );
  }
}

export default DataAnalysis;
