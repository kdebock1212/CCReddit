// CommentFeature.js
import React from 'react';

const CommentFeature = ({ comments }) => {
  return (
    <div>
      <h3>Comments:</h3>
      <ul>
        {comments.map((comment, index) => (
          <li key={index}>{comment.body}</li>
        ))}
      </ul>
    </div>
  );
};

export default CommentFeature;
