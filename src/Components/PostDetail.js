// PostDetail.js

import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const PostDetail = () => {
  const { postId } = useParams();
  const [postDetails, setPostDetails] = useState({});
  const [comments, setComments] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchPostDetails = async () => {
      try {
        const postResponse = await fetch(`https://www.reddit.com/api/info.json?id=t3_${postId}`);
        const postData = await postResponse.json();
        setPostDetails(postData.data.children[0].data);

        const commentsResponse = await fetch(`https://www.reddit.com/r/${postDetails.subreddit}/comments/${postId}.json`);
        const commentsData = await commentsResponse.json();
        setComments(commentsData[1].data.children);
      } catch (error) {
        console.error('Error fetching post details:', error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchPostDetails();
  }, [postId, postDetails.subreddit]);

  if (isLoading) {
    return <p>Loading...</p>;
  }

  return (
    <div>
      <h2>{postDetails.title}</h2>
      <p>{postDetails.selftext}</p>
      <h3>Comments:</h3>
      <ul>
        {comments.map((comment) => (
          <li key={comment.data.id}>{comment.data.body}</li>
        ))}
      </ul>
    </div>
  );
};

export default PostDetail;
