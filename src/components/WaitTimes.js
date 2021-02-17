import React from 'react';
import * as d3 from 'd3-fetch';
import './WaitTimes.css';
import LocationCard from './LocationCard';
import SearchBar from './SearchBar';

class WaitTimes extends React.Component {
  constructor(props) {
    super(props)
    // TODO: Set date and time from data
    this.state = {
      date: 'today',
      time: '10 am'
    };
  }

  componentDidMount() {
    d3.csv('https://raw.githubusercontent.com/astoria-tech/nyc-covid19-testing-wait-times/main/wait-times.csv').then(function(data) {
      console.log(data);
    });
  }
  
  render() {
    return(
      <section className='waitTimeSection'>
        <div className='waitTimeContainer'>
          <h6>Wait Times as of {this.state.time} {this.state.date}</h6>
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