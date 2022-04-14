import { Link } from 'react-router-dom';
import { FaStore } from "react-icons/fa";
import { FaShoppingBasket } from "react-icons/fa";
import { FaSearch } from "react-icons/fa";
import React from 'react';
//sub-components
//import HeaderLogo from './HeaderLogo';
// import Navigation from './Navigation';
// import SearchBar from './SearchBar';
//css style
import './Header.css'

const Header = () => {
  return (
    <div className='header'>
      <div className='header_logo'>
      <Link to= '/' style={{textDecoration: "none", color: "white", display: "flex", alignItems: "center"}}>
        <FaStore className="header_logoImg" style={{color: "orange"}}/>
        <h2 className="logoTitle">myStore</h2>
      </Link>
    </div>

    <div className='header_search'>
        <input type="text" className='header_searchInput' />
        <FaSearch className="header_searchIcon"/>
    </div>

    <div className='header_nav'>
        <div className="nav_item">
            <span className="nav_itemline1">Hello Guest</span>
            <span className="nav_itemline2">Sign In</span>
        </div>
        <div className="nav_item">
            <span className="nav_itemline1">Your</span>
            <span className="nav_itemline2">Shop</span>
        </div>
        
        <Link to= '/checkout' style={{textDecoration: "none", color: "white"}}>
        <div className="nav_item shop">
          <FaShoppingBasket className="itemBasket"/>
          <span className="nav_itemline2 nav_basketCount">0</span>
        </div>
        </Link>
        
    </div>
        {/* <HeaderLogo/> */}
        {/* <SearchBar/> */}
        {/* <Navigation/> */}
    </div>
  )
}

export default Header;