// MainBody.js

import React, { useState, useEffect } from 'react';
import './MainBody.css';
import PostContent from './PostContent';

const MainBody = ({ selectedCategory, searchTerm }) => {
  const [redditData, setRedditData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [cachedResults, setCachedResults] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      setError(null);

      try {
        if (searchTerm) {
          const response = await fetch(`http://localhost:8080/https://www.reddit.com/r/${searchTerm}.json?raw_json=1`, {
            headers: {
              'User-Agent': 'CodecademyRedditApp/1.0.0 (by /u/xkatoclysm)',
            },
            });
          if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
          }
          const data = await response.json();
          setRedditData(data.data.children);
        } else if (cachedResults && selectedCategory in cachedResults) {
          setRedditData(cachedResults[selectedCategory]);
        } else {
          const response = await fetch(`http://localhost:8080/https://www.reddit.com/r/${selectedCategory}.json?raw_json=1`);
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
  }, [selectedCategory, searchTerm, cachedResults]);

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error}</p>;
  }

  return (
    <div className='RedditFeed'>
      {redditData.map((post) => (
        <PostContent key={post.data.id} post={post} />
      ))}
    </div>
  );
};

export default MainBody;