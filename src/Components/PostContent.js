// PostContent.js

import React from 'react';
import SubRedditFeature from './Features/SubReddit';
import TitleFeature from './Features/TitleFeature';
import ImageFeature from './Features/ImageFeature';
import PostOwnerFeature from './Features/PostOwnerFeature';
import { Link } from 'react-router-dom';

const PostContent = ({ post }) => (
  <Link to={`/post/${post.data.id}`}>
    <div className='RedditPost'>
      <SubRedditFeature subreddit={post.data.subreddit_name_prefixed} />
      <TitleFeature title={post.data.title} />
      <ImageFeature imageUrl={post.data.preview && post.data.preview.images[0].source.url} />
      <PostOwnerFeature postOwner={post.data.author} />
    </div>
  </Link>
);

export default PostContent;
