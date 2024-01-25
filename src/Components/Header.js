// Header.js

import React, { useState } from 'react';
import Logo from '../Images/Reddit-Logo.wine.png';
import SearchBar from './SearchBar';

const Header = ({ onCategoryChange }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('popular');

  const handleSearch = (term) => {
    setSearchTerm(term);
    // Your search functionality goes here
  };

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
    onCategoryChange(category); // Notify the parent component about the category change
  };

  return (
    <div className="header container-fluid">
      <div className="row d-flex justify-content-between">
        <div className="col-12 col-md-4">
          <img src={Logo} alt="Logo" className="logo" />
        </div>
        <div className="col-12 col-md-8">
          <div className="search-bar-container">
            <SearchBar onSearch={handleSearch} />
          </div>
          <div className="categories">
            <button
              className={selectedCategory === 'popular' ? 'active' : ''}
              onClick={() => handleCategoryChange('popular')}
            >
              Popular
            </button>
            <button
              className={selectedCategory === 'news' ? 'active' : ''}
              onClick={() => handleCategoryChange('news')}
            >
              News
            </button>
            <button
              className={selectedCategory === 'science' ? 'active' : ''}
              onClick={() => handleCategoryChange('science')}
            >
              Science
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
