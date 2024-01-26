// App.js

import React, { useState } from 'react';
import Header from './Components/Header';
import './Components/Header.css';
import './App.css';
import MainBody from './Components/MainBody';
import 'bootstrap/dist/css/bootstrap.css';
import PostDetail from './Components/PostDetail';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

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
    <Router>
      <div className='redditApp'>
        <Header onCategoryChange={handleCategoryChange} onSearch={handleSearch} />
        <Routes>
          <Route path="/" element={<MainBody selectedCategory={selectedCategory} searchTerm={searchTerm} />} />
          <Route path="/post/:postId" element={<PostDetail />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
