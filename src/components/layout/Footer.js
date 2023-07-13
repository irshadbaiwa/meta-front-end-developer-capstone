import {
  faFacebook,
  faTwitter,
  faInstagram,
} from '@fortawesome/free-brands-svg-icons';
import {
  faEnvelope,
  faLocationDot,
  faPhone,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';
import './Footer.css';
import logoWhiteImage from './assets/logo-white.png';

const contacts = [
  { icon: faLocationDot, info: '298 Ilsa Street, Canada.' },
  { icon: faPhone, info: '837 9032 09' },
  { icon: faEnvelope, info: 'support@littlelemon.com' },
];

const socials = [
  { icon: faFacebook, name: 'facebook', link: 'https://facebook.com' },
  { icon: faInstagram, name: 'instagram', link: 'https://instagram.com' },
  { icon: faTwitter, name: 'twitter', link: 'https://twitter.com' },
];

const navLinks = [
  { name: 'Home', path: '/' },
  { name: 'About', path: '/about' },
  { name: 'Menu', path: '/menu' },
  { name: 'Reservations', path: '/bookings' },
  { name: 'Order Online', path: '/order-online' },
  { name: 'Login', path: '/login' },
];

const Footer = () => {
  return (
    <footer className="site-footer">
      <div className="container grid">
        <img
          className="site-footer-logo"
          src={logoWhiteImage}
          alt="Little Lemon"
        />
        <nav className="site-footer-nav">
          <h4>Pages</h4>
          <ul>
            {navLinks.map((navLink) => (
              <li key={navLink.path}>
                <Link to={navLink.path}>{navLink.name}</Link>
              </li>
            ))}
          </ul>
        </nav>
        <div className="site-footer-contact">
          <h4>Contact Us</h4>
          <address>
            {contacts.map((contact, index) => (
              <p key={index}>
                <FontAwesomeIcon icon={contact.icon} /> {contact.info}
              </p>
            ))}
          </address>
        </div>
        <div className="site-footer-social">
          <h4>Social Media Links</h4>
          {socials.map((social) => (
            <a
              key={social.link}
              href={social.link}
              target="_blank"
              rel="noreferrer"
            >
              <FontAwesomeIcon icon={social.icon} size="lg" />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
