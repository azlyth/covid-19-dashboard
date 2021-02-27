import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars} from '@fortawesome/free-solid-svg-icons';
import { faTimes} from '@fortawesome/free-solid-svg-icons';
import './Header.css';


class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {showLinks: false};

    this.toggleMenu = this.toggleMenu.bind(this);
  }

  toggleMenu() {
    console.log('click');
    this.setState(state => ({
      showLinks: !state.showLinks
    }));
  }
  
  render() {
    return (
      <header className={this.state.showLinks ? 'showLinks' : ''}>
        <div className={'headerContainer' + (this.state.showLinks ? (' showLinks') : '')}>
          <div className='headerTextContainer'>
            <h1>NYC health and hospitals <br></br> covid 19 testing wait times</h1>
            <div className={'menuLinks' + (this.state.showLinks ? (' showLinks') : '')}>
              <ul>
                <li>Data Archive</li>
                <li>Data Visualization Dashboard</li>
                <li>Original Document</li>
                <li>About this Project</li>
              </ul>
            </div>
          </div>
          <div className='menuContainer'>
            <FontAwesomeIcon className='menuIcon' icon={this.state.showLinks ? faTimes : faBars} onClick={this.toggleMenu}/>
          </div>
        </div>
      </header>
    );
  }
}

export default Header;