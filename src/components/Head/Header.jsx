import React from 'react';
//sub-components
import HeaderLogo from './HeaderLogo';
import Navigation from './Navigation';
import SearchBar from './SearchBar';
//css style
import './Header.css'

const Header = () => {
  return (
    <div className='header'>
        <HeaderLogo/>
        <SearchBar/>
        <Navigation/>
    </div>
  )
}

export default Header;