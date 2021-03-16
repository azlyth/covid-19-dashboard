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
        <p className='locationText'>{this.props.location}</p>
        <p className='timeText'>{this.props.time}</p>
        <p className='lastReportedText'>last reported {this.props.lastReported}</p>
      </div>
    );
  }
}

export default LocationCard;