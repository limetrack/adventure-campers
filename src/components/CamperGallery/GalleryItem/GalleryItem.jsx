import React from 'react';
import styles from './GalleryItem.module.scss';

const GalleryItem = ({ image, index, srcKey = 'thumb', fullSize, onClick }) => {
  return (
    <div
      role="button"
      className={
        fullSize ? styles.imageContainerFullSize : styles.imageContainer
      }
      onClick={() => onClick && onClick(index)}
    >
      <img
        src={image[srcKey]}
        alt={image.alt || `Photo ${index}`}
        className={styles.image}
      />
    </div>
  );
};

export default GalleryItem;
