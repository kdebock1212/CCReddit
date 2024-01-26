// PostDetail.js
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import TitleFeature from './Features/TitleFeature';
import ImageFeature from './Features/ImageFeature';
import PostOwnerFeature from './Features/PostOwnerFeature';
import CommentFeature from './Features/CommentFeature';

const PostDetail = () => {
  const { postId } = useParams();
  const [postDetails, setPostDetails] = useState({});
  const [comments, setComments] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchPostDetails = async () => {
      try {
        const postResponse = await fetch(`http://localhost:8080/https://www.reddit.com/api/info.json?id=t3_${postId}`);
        const postData = await postResponse.json();
        const fetchedPostDetails = postData.data.children[0].data;
        setPostDetails(fetchedPostDetails);

        const commentsResponse = await fetch(`http://localhost:8080/https://www.reddit.com/r/${fetchedPostDetails.subreddit}/comments/${postId}.json`);
        const commentsData = await commentsResponse.json();

        // Log the commentsData to the console
        console.log('Comments JSON data:', commentsData);

        // Extracting comments' bodies
        const extractedComments = commentsData[1].data.children.map((comment) => ({
          author: comment.data.author, // Assuming the author property is available
          body: comment.data.body,
        }));

        setComments(extractedComments);
      } catch (error) {
        console.error('Error fetching post details:', error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchPostDetails();
  }, [postId]);

  if (isLoading) {
    return <p>Loading...</p>;
  }

  // Check if postDetails is defined before rendering features
  if (!postDetails) {
    return <p>No post details found</p>;
  }

  const { title, author, url_overridden_by_dest } = postDetails;

  return (
    <div className='RedditPost'>
      {/* Use TitleFeature */}
      <TitleFeature title={title} />

      {/* Use ImageFeature */}
      <ImageFeature imageUrl={url_overridden_by_dest} />

      {/* Use PostOwnerFeature */}
      <PostOwnerFeature postOwner={author} />

      {/* Use CommentFeature and pass the comments data */}
      <CommentFeature comments={comments} />
    </div>
  );
};

export default PostDetail;
