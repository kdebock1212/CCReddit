// MainBody.js

import React, { useState, useEffect } from 'react';
import ImageFeature from './Features/ImageFeature';
import TitleFeature from './Features/TitleFeature';
import PostOwnerFeature from './Features/PostOwnerFeature';
import './MainBody.css';
import SubRedditFeature from './Features/SubReddit';

const MainBody = ({ selectedCategory }) => {
  const [redditData, setRedditData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [cachedResults, setCachedResults] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      setError(null);

      try {
        if (cachedResults && selectedCategory in cachedResults) {
          setRedditData(cachedResults[selectedCategory]);
        } else {
          const response = await fetch(`https://www.reddit.com/r/${selectedCategory}.json?raw_json=1`);
          
          if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
          }

          const data = await response.json();
          setRedditData(data.data.children);

          // Cache the successful query results
          setCachedResults((prevResults) => ({
            ...prevResults,
            [selectedCategory]: data.data.children,
          }));
        }
      } catch (error) {
        console.error('Error fetching Reddit data:', error);
        setError(error.message || 'An error occurred while fetching Reddit data.');
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, [selectedCategory, cachedResults]);

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error}</p>;
  }

  return (
    <div className='RedditFeed'>
      {/* Render the Reddit data using feature components */}
      {redditData.map((post) => (
        <div key={post.data.id} className='RedditPost'>
          <SubRedditFeature subreddit={post.data.subreddit_name_prefixed} />
          <TitleFeature title={post.data.title} />
          <ImageFeature imageUrl={post.data.preview && post.data.preview.images[0].source.url} />
          <PostOwnerFeature postOwner={post.data.author} />
        </div>
      ))}
    </div>
  );
};

export default MainBody;
