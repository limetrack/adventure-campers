import React, { useState } from 'react';
import GalleryCarousel from './GalleryCarousel/GalleryCarousel';
import styles from './CamperGallery.module.scss';
import GalleryModal from './GalleryModal/GalleryModal';

const responsive = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 3000 },
    items: 5,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 4,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

const CamperGallery = ({ images }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const openModal = index => {
    setCurrentImageIndex(index);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <GalleryCarousel
        images={images}
        srcKey="thumb"
        onItemClick={openModal}
        responsive={responsive}
        autoPlay
        keyBoardControl
        slidesToSlide={1}
        containerClass={styles.carousel}
      />

      <GalleryModal
        isOpen={isModalOpen}
        images={images}
        currentImageIndex={currentImageIndex}
        onClose={closeModal}
      />
    </>
  );
};

export default CamperGallery;
