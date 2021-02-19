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
      locationTimes: {}
    };
  }

  componentDidMount() {
    d3.csv('https://raw.githubusercontent.com/astoria-tech/nyc-covid19-testing-wait-times/main/wait-times.csv').then((data) => {
      let locationTimeMap = new Map();
      let mostRecentDate = new Date(-8640000000000000); // Set to the minimum possible data value
      for (let i = 0; i < data.length; i++){
        let reportedTime = new Date(data[i]['reported_time_human']);
        mostRecentDate = reportedTime > mostRecentDate ? reportedTime : mostRecentDate;
        locationTimeMap.set(
          data[i]['clinic'],
          {'reportedTime': reportedTime, 'waitTime': data[i]['wait_time_minutes']}
        );
      }
      this.setState({
        updateTime: mostRecentDate.toDateString(),
        locationTimes: locationTimeMap
      });
    });
  }
  
  render() {
    return(
      <section className='waitTimeSection'>
        <div className='waitTimeContainer'>
          <h6>Wait Times as of {this.state.updateTime}</h6>
          <SearchBar></SearchBar>
          {/* TODO: Create locationCards using data and loop */}
          {/* TODO: Create 'dummy' cards with 0 height  to maintain spacing when numCards % 3 != 0 */}
          <div className='locationCardContainer'>
            <LocationCard location='196 Albany' time='0 - 30 minutes' lastReported='10:30 am'></LocationCard>
            <LocationCard location='196 Albany' time='0 - 30 minutes' lastReported='10:30 am'></LocationCard>
            <LocationCard location='196 Albany' time='0 - 30 minutes' lastReported='10:30 am'></LocationCard>
            <LocationCard location='196 Albany' time='0 - 30 minutes' lastReported='10:30 am'></LocationCard>
            <LocationCard location='196 Albany' time='0 - 30 minutes' lastReported='10:30 am'></LocationCard>
            <LocationCard location='196 Albany' time='0 - 30 minutes' lastReported='10:30 am'></LocationCard>
            <LocationCard location='196 Albany' time='0 - 30 minutes' lastReported='10:30 am'></LocationCard>
            <LocationCard location='196 Albany' time='0 - 30 minutes' lastReported='10:30 am'></LocationCard>
            <LocationCard location='196 Albany' time='0 - 30 minutes' lastReported='10:30 am'></LocationCard>
          </div>
        </div>
      </section>
    );
  }
}

export default WaitTimes;