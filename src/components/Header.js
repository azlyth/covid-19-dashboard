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
    this.setState(state => ({
      showLinks: !state.showLinks
    }));
  }
  
  render() {
    return (
      <header className={this.state.showLinks ? 'showLinks' : ''}>
        <div className={'headerContainer' + (this.state.showLinks ? (' showLinks') : '')}>
          <div className='headerTextContainer'>
            <h2>NYC health and hospitals <br></br> covid-19 testing wait times</h2>
            <div className={'menuLinks' + (this.state.showLinks ? (' showLinks') : '')}>
              <ul>
                <li><a target='_blank' rel='noopener noreferrer' href='https://github.com/astoria-tech/nyc-covid19-testing-wait-times'>Data Archive</a></li>
                <li><a target='_blank' rel='noopener noreferrer' href='https://datastudio.google.com/u/0/reporting/1506fb15-ab88-4226-a251-59a114affd9c/page/EdRsB'>Data Visualization Dashboard</a></li>
                <li><a target='_blank' rel='noopener noreferrer' href='https://hhinternet.blob.core.windows.net/wait-times/testing-wait-times.pdf'>Original Document</a></li>
                <li><a target='_blank' rel='noopener noreferrer' href='https://github.com/astoria-tech/covid-19-dashboard'>GitHub for this Project</a></li>
                <li><a href='#aboutSection'>About this Project</a></li>
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