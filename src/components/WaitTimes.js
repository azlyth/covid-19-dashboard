import React from 'react';
import './WaitTimes.css';

class WaitTimes extends React.Component {
  constructor(props) {
    super(props)
    // TODO: Set date and time from data
    this.state = {
      date: 'today',
      time: '10 am'
    };
  }
  
  render() {
    return(
      <section className='waitTimeSection'>
        <div className='waitTimeContainer'>
          <h6>Wait Times as of {this.state.time} {this.state.date}</h6>
        </div>
      </section>
    );
  }
}

export default WaitTimes;