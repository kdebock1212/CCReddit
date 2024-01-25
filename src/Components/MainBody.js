// MainBody.js

import React, { useState, useEffect } from 'react';
import ImageFeature from './Features/ImageFeature';
import TitleFeature from './Features/TitleFeature';
import PostOwnerFeature from './Features/PostOwnerFeature';
import './MainBody.css';

const MainBody = () => {
  const [redditData, setRedditData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://www.reddit.com/r/popular.json?raw_json=1');
        const data = await response.json();
        setRedditData(data.data.children);
      } catch (error) {
        console.error('Error fetching Reddit data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className='RedditFeed'>
      {/* Render the Reddit data using feature components */}
      {redditData.map((post) => (
        <div key={post.data.id} className='RedditPost'>
          <TitleFeature title={post.data.title} />
          <ImageFeature imageUrl={post.data.preview && post.data.preview.images[0].source.url} />
          <PostOwnerFeature postOwner={post.data.author} />
        </div>
      ))}
    </div>
  );
};

export default MainBody;
