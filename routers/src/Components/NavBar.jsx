import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../App.css';

const NavBar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav>
      <Link to="/">Logo</Link>
      <div className="menu-toggle" onClick={toggleMenu}>
        &#9776;
      </div>
      <ul className={menuOpen ? 'show' : ''}>
        <li><Link to='/about'>About</Link></li>
        <li><Link to='/contact'>Contact</Link></li>
        <li><Link to='/login'><button>Login</button></Link></li>
      </ul>
    </nav>
  );
};

export default NavBar;

