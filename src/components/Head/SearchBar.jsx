import { FaSearch } from "react-icons/fa";
import React from 'react';

const SearchBar = () => {
  return (
    <div className='header_search'>
        <input type="text" className='header_searchInput' />
        <FaSearch className="header_searchIcon"/>
    </div>
  )
}

export default SearchBar