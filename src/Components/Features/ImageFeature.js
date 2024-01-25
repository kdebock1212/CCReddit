// ImageFeature.js

import React from 'react';
import './ImageFeature.css';

const ImageFeature = ({ imageUrl }) => {
  return <img src={imageUrl} alt="Post" />;
};

export default ImageFeature;
