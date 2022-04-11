import { Link } from 'react-router-dom';
import { FaStore } from "react-icons/fa";
import React from 'react';

const HeaderLogo = () => {
  return (

    <div className='header_logo'>
      <Link to= '/' style={{textDecoration: "none", color: "white", display: "flex", alignItems: "center"}}>
        <FaStore className="header_logoImg" style={{color: "orange"}}/>
        <h2 className="logoTitle">myStore</h2>
      </Link>
    </div>
  )
}

export default HeaderLogo;