// App.js

import React, { useState } from 'react';  // Import useState
import Header from './Components/Header';
import './Components/Header.css';
import './App.css';
import MainBody from './Components/MainBody';
import 'bootstrap/dist/css/bootstrap.css';

const App = () => {
  const [selectedCategory, setSelectedCategory] = useState('popular');
  const [searchTerm, setSearchTerm] = useState('');

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
  };

  const handleSearch = (term) => {
    setSearchTerm(term);
  };

  return (
    <div className='redditApp'>
      <Header onCategoryChange={handleCategoryChange} onSearch={handleSearch} />
      <MainBody selectedCategory={selectedCategory} searchTerm={searchTerm} />
    </div>
  );
};

export default App;
