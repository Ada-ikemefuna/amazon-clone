import { Link } from 'react-router-dom';
import { FaShoppingBasket } from "react-icons/fa";
import React from 'react';
import StateProvider  from '../StateProvider';
import { useContext } from 'react';



const Navigation = () => {
  const { items } = useContext(StateProvider);
  console.log(items)
  return (
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
          <span className="nav_itemline2 nav_basketCount">{items.length}</span>
        </div>
        </Link>
        
    </div>
  )
}

export default Navigation