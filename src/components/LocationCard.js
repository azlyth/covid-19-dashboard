import React from 'react';
import './LocationCard.css';

class LocationCard extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      hideCard: props.extraCard // An extra card occupies width but no height to maintain spacing when necessary
    };
  }
  
  render() {
    return(
      <div className={'locationCard' + (this.state.hideCard ? (' hideCard') : '')}>
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