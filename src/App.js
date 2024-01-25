// App.js

import React from 'react';
import Header from './Components/Header';
import './Components/Header.css'; // Import your CSS file
import './App.css';
import MainBody from './Components/MainBody';

const App = () => {
  return (
    <div className='redditApp'>
      <Header />
      <MainBody className='card'/>
    </div>
  );
};

export default App;
