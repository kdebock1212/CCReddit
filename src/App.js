// App.js

import React from 'react';
import Header from './Components/Header';
import './Components/Header.css'; // Import your CSS file
import './App.css';

const App = () => {
  return (
    <div className='redditApp'>
      <Header />
      {/* Your other components go here */}
    </div>
  );
};

export default App;
