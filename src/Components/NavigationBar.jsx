// Navigation.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import { FaHome } from 'react-icons/fa';
import { RiContactsBookLine } from 'react-icons/ri';
import '../App.css';

const Navigation = () => {
  return (
    <nav className="navbar">
      <ul>
        <li>
          <Link to="/">
            <FaHome />
            Home
          </Link>
        </li>
        <li>
          <Link to="/Contacto">
            <RiContactsBookLine />
            Contacto
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;