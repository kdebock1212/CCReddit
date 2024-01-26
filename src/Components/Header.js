// Header.js

import React, { useState } from 'react';
import Logo from '../Images/Reddit-Logo.wine.png';
import SearchBar from './SearchBar';
import { Link } from 'react-router-dom';

const Header = ({ onCategoryChange, onSearch }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('popular');

  const handleSearch = (term) => {
    setSearchTerm(term);
    setSelectedCategory(term); // Update category based on search term
    onCategoryChange(term); // Notify the parent component about the category change
    onSearch(term); // Notify the parent component about the search term
  };
  
  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
    onCategoryChange(category); // Notify the parent component about the category change
  };

  return (
    <div className="header container-fluid">
      <div className="row d-flex justify-content-between w-100 ">
        <div className="col-12 col-md-4 justify-content-md-left justify-content-center">
          <Link to="/">
            <img src={Logo} alt="Logo" className="logo" />
          </Link>
        </div>
        <div className="col-12 col-md-4 justify-content-md-center justify-content-center">
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
        <div className="col-12 col-md-4 justify-content-md-end justify-content-center">
          <div className="search-bar-container">
            <SearchBar onSearch={handleSearch} />
          </div>
          
        </div>
      </div>
    </div>
  );
};

export default Header;
