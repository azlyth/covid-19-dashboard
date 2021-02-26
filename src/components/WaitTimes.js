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
        locationTimeMap.set(
          data[i]['clinic'],
          {'reportedTime': reportedTime.toLocaleString(), 'waitTime': data[i]['wait_time_minutes'] + ' minutes'}
        );
      }

      let locationCards = [];
      locationTimeMap.forEach((value, key) => {
        locationCards.push(<LocationCard key={key} location={key} time={value['waitTime']} lastReported={value['reportedTime']} />)
      });
      this.setState({
        updateTime: mostRecentDate.toDateString(),
        locationTimes: locationCards
      });
    });
  }

  handleChange = (event) => {
    console.log(this.state);
  }
  
  render() {
    return(
      <section className='waitTimeSection'>
        <div className='waitTimeContainer'>
          <h6>Wait Times as of {this.state.updateTime}</h6>
          <SearchBar searchFunction={this.handleChange}></SearchBar>
          {/* TODO: Create 'dummy' cards with 0 height  to maintain spacing when numCards % 3 != 0 */}
          <div className='locationCardContainer'>
            {this.state.locationTimes}
          </div>
        </div>
      </section>
    );
  }
}

export default WaitTimes;