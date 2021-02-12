import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars} from '@fortawesome/free-solid-svg-icons'
import './Header.css'

function ToggleMenu(e){
  e.preventDefault();
  console.log("Hello!");
}

function Header(){
  return (
    <header>
      <div className='headerContainer'>
        <h1>NYC health and hospitals <br></br> covid 19 testing wait times</h1>
        <FontAwesomeIcon className='menuIcon' icon={faBars} onClick={ToggleMenu}/>
      </div>
    </header>
  );
}

export default Header;