import { ImageListItem, useMediaQuery } from '@mui/material';
import React from 'react';

import { IGalleryImage } from '../../../types';

export const Image = (props: {
  image: IGalleryImage;
  handleModal: (e: any) => void;
  loadingGallery: () => void;
}) => {
  const mediaQueryMobile = useMediaQuery('(min-width:600px)');
  return (
    <>
      <ImageListItem
        sx={{
          cursor: mediaQueryMobile ? 'pointer' : 'default',
        }}
      >
        <img
          src={`https:${props.image.file.url}`}
          srcSet={`https:${props.image.file.url}`}
          alt={props.image.title}
          loading="lazy"
          onClick={props.handleModal}
          onLoad={props.loadingGallery}
        />
      </ImageListItem>
    </>
  );
};
