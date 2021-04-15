import Fuse from 'fuse.js';
import React from 'react';
import * as d3 from 'd3-fetch';
import './WaitTimes.css';
import LocationCard from './LocationCard';
import SearchBar from './SearchBar';

class WaitTimes extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      updateTime: null,
      locationTimes: []
    };
  }

  componentDidMount() {
    d3.csv('https://raw.githubusercontent.com/astoria-tech/nyc-covid19-testing-wait-times/main/wait-times.csv').then((data) => {
      let locationTimeMap = new Map();
      let mostRecentDate = new Date(-8640000000000000); // Set to the minimum possible data value
      for (let i = 0; i < data.length; i++){
        let reportedTime = new Date(data[i]['reported_time_human']);
        mostRecentDate = reportedTime > mostRecentDate ? reportedTime : mostRecentDate;

        let backgroundColor = 'white';
        if (data[i]['wait_time_minutes'] > 30 && data[i]['wait_time_minutes'] <= 60) {
          backgroundColor = 'grey';
        } else if (data[i]['wait_time_minutes'] > 60) {
          backgroundColor = 'black';
        }

        locationTimeMap.set(
          data[i]['clinic'],
          {
            'reportedTime': reportedTime.toLocaleString(),
            'waitTime': (data[i]['wait_time_minutes'] > 30 ? data[i]['wait_time_minutes'] : '0 - 30') + ' minutes', // Consolidate all times less than 30 minutes to avoid confusion
            'backgroundColor': backgroundColor
          }
        );
      }
      
      let locationCards = [];
      locationTimeMap.forEach((value, key) => {
        locationCards.push(<LocationCard key={key} location={key} time={value['waitTime']} lastReported={value['reportedTime']} backgroundColor={value['backgroundColor']}/>)
      });
      this.setState({
        updateTime: mostRecentDate.toDateString(),
        locationTimes: locationCards,
        originalLocationTimes: locationCards
      });
    });
  }

  handleChange = (event) => {
    let locationTimes = this.state.originalLocationTimes;
    let options = {
      keys: ['key']
    };

    let fuse = new Fuse(locationTimes, options);
    let results = fuse.search(event.target.value);

    if (event.target.value.length) {
      results = results.map((result) => result.item);
    } else {
      results = this.state.originalLocationTimes;
    }

    // Add an extra invisible card to maintain proper spacing
    if (results.length % 3 === 2) {
      results.push(<LocationCard key='extraCard' extraCard={true}></LocationCard>)
    }

    this.setState({locationTimes: results});
  }
  
  render() {
    return(
      <section className='waitTimeSection'>
        <div className='waitTimeContainer'>
          <h6>Wait Times as of {this.state.updateTime}</h6>
          <SearchBar searchFunction={this.handleChange}></SearchBar>
          <div className='locationCardContainer'>
            {this.state.locationTimes}
          </div>
        </div>
      </section>
    );
  }
}

export default WaitTimes;