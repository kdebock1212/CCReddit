// Header.js

import React, { useState } from 'react';
import Logo from '../Images/Reddit-Logo.wine.png'; 
import SearchBar from './SearchBar';
import './Header.css'; 

const Header = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = (term) => {
    setSearchTerm(term);
    // Your search functionality goes here
  };

  return (
    <div className="header">
      <div className="logo-container">
        <img src={Logo} alt="Logo" className="logo" />
      </div>
      <div className="search-bar-container">
        <SearchBar onSearch={handleSearch} />
      </div>
    </div>
  );
};

export default Header;
