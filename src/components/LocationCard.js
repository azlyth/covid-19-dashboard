import React from 'react';
import './LocationCard.css';

class LocationCard extends React.Component {
  constructor(props) {
    super(props);
  }
  
  render() {
    return(
      <div className='locationCard'>
        <div className='locationTimeContainer'>
          <p>{this.props.location}</p>
          <p>{this.props.time}</p>
        </div>
        <div className='lastReportedContainer'>
          <p>last reported {this.props.lastReported}</p>
        </div>
      </div>
    );
  }
}

export default LocationCard;