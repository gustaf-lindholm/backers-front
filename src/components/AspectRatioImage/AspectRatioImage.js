import React from 'react';
import { AspectRatioContainer } from './AspectRatioContainer.styled';
import { ImageContainer } from './ImageContainer.styled';

export default function AspectRatioImage({ image }) {
  const background = `https://res.cloudinary.com/babiluskus/image/upload/v1586975703/backers-simple-front/${image}.jpg`;

  return (
    <AspectRatioContainer>
      <ImageContainer>
        <img src={background} alt={image}/>
      </ImageContainer>
    </AspectRatioContainer>
  );
}
