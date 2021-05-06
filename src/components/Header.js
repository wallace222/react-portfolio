import { Link } from 'react-router-dom';

import React, { useState } from 'react';

import Dropdown from './Dropdown';

import '../style/Header.css';

function Header() {
  const [click, setClick] = useState(false);
  const [dropdown, setDropdown] = useState(false);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const onMouseEnter = () => {
    if (window.innerWidth < 960) {
      setDropdown(false);
    } else {
      setDropdown(true);
    }
  };

  const onMouseLeave = () => {
    if (window.innerWidth < 960) {
      setDropdown(false);
    } else {
      setDropdown(false);
    }
  };

//  go out of your way to create a hover effect for the header of your site

  return (
    <>
      <nav className='navbar'>
        <Link to='/' className='navbar-logo' onClick={closeMobileMenu}>
          EPIC
          <i className='fab fa-firstdraft' />
        </Link>
        <div className='menu-icon' onClick={handleClick}>
          <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
        </div>
        <ul className={click ? 'nav-menu active' : 'nav-menu'}>
          <li className='nav-item'>
            <Link to='/' className='nav-links' onClick={closeMobileMenu}>
              Home
            </Link>
          </li>
          <li
            className='nav-item'
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
          >
            <Link
              to='/react-portfolio/portfolio'
              className='nav-links'
              onClick={closeMobileMenu}
            >
              Portfolio <i className='fas fa-caret-down' />
            </Link>
            {dropdown && <Dropdown />}
          </li>
          <li className='nav-item'>
            <Link
              to='/react-portfolio/form'
              className='nav-links'
              onClick={closeMobileMenu}
            >
              Contactnpm run dev
            </Link>
          </li>
          <li className='nav-item'>
            <Link
              to='/react-portfolio/resume'
              className='nav-links'
              onClick={closeMobileMenu}
            >
              CV
            </Link>
          </li>
        </ul>
      </nav>
    </>
  );
}

export default Header