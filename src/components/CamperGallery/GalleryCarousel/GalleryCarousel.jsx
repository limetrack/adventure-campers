import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import GalleryItem from '../GalleryItem/GalleryItem';
import { useEffect, useRef } from 'react';

const GalleryCarousel = ({
  images,
  srcKey,
  fullSize,
  onItemClick,
  initialSlide,
  ...carouselProps
}) => {
  const carouselRef = useRef(null);

  useEffect(() => {
    if (initialSlide) {
      carouselRef.current?.goToSlide(5);
    }
  }, [initialSlide]);

  return (
    <Carousel ref={carouselRef} initialSlide={initialSlide} {...carouselProps}>
      {images.map((image, index) => (
        <GalleryItem
          key={image.thumb}
          index={index}
          image={image}
          srcKey={srcKey}
          fullSize={fullSize}
          onClick={onItemClick}
        />
      ))}
    </Carousel>
  );
};

export default GalleryCarousel;
