// App.js

import React, { useState } from 'react';  // Import useState
import Header from './Components/Header';
import './Components/Header.css';
import './App.css';
import MainBody from './Components/MainBody';

const App = () => {
  const [selectedCategory, setSelectedCategory] = useState('popular');

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
  };

  return (
    <div className='redditApp'>
      <Header onCategoryChange={handleCategoryChange} />
      <MainBody selectedCategory={selectedCategory} />
    </div>
  );
};

export default App;
