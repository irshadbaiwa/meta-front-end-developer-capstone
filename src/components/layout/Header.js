import { useState } from 'react';
import { useLocation, Link } from 'react-router-dom';
import { faBars, faXmark } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import logoImage from './assets/logo.png';
import './Header.css';

const navLinks = [
  {name: 'Home', path:'/'},
  {name: 'About', path:'/about'},
  {name: 'Menu', path:'/menu'},
  {name: 'Reservations', path:'/bookings'},
  {name: 'Order Online', path:'/order-online'},
  {name: 'Login', path:'/login'},
];

const Header = () => {
  const { pathname } = useLocation();
  const [isNavExpanded, setIsNavExpanded] = useState(false);

  return (
    <header>
      <nav className="container grid nav-bar">
        <Link className="nav-bar-logo" to='/'>
          <img src={logoImage} alt="Little Lemon logo" />
        </Link>
        <button 
          className="nav-bar-hamburger" 
          type="button" 
          onClick={() => setIsNavExpanded(!isNavExpanded)}
        >
          {isNavExpanded ?
            <FontAwesomeIcon icon={faXmark} size="2x" /> : 
            <FontAwesomeIcon icon={faBars} size="2x" />}
        </button>
        <ul 
          className={isNavExpanded ? 'nav-bar-links expanded' : 'nav-bar-links'} 
          onClick={() => setIsNavExpanded(!isNavExpanded)}
        >
          {navLinks.map((navLink) => 
            <li key={navLink.path}>
              <Link 
                className={pathname === navLink.path ? 'current-location' : ''} 
                to={navLink.path}
              >
                {navLink.name}
              </Link>
            </li>
          )}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
