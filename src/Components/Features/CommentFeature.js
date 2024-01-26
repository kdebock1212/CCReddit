// CommentFeature.js
import React from 'react';
import './CommentFeature.css';

const CommentFeature = ({ comments }) => {
  return (
    <div className='comments'>
      <h3>Comments:</h3>
      <ul>
        {comments.map((comment, index) => (
          <li key={index}>
          <p>{comment.body}</p>
          <p>by: {comment.author}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CommentFeature;
