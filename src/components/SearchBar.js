import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch} from '@fortawesome/free-solid-svg-icons'
import './SearchBar.css';

class SearchBar extends React.Component {
  render() {
    return(
      <div className='searchBar'>
        <div className='searchIconContainer'>
          <FontAwesomeIcon icon={faSearch} />
        </div>
        <div className='searchInputContainer'>
          <input type='text' placeholder='Search' onChange={this.props.searchFunction}></input>
        </div>
      </div>
    );
  }
}

export default SearchBar;