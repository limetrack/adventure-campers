import Modal from 'react-modal';
import GalleryCarousel from '../GalleryCarousel/GalleryCarousel';
import styles from './GalleryModal.module.scss';

const GalleryModal = ({ isOpen, images, currentImageIndex, onClose }) => {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onClose}
			ariaHideApp={false}
			style={{
				overlay: {
					display: 'flex',
					alignItems: 'center',
					justifyContent: 'center',
					backgroundColor: 'rgba(0, 0, 0, 0.8)',
					zIndex: 1000
				},
				content: {
					position: 'relative',
					inset: 'auto',
					width: '90%',
					height: 'fit-content',
					maxWidth: 700,
					padding: 0,
					border: 0,
					background: 'transparent',
					backgroundColor: 'transparent',
					overflow: 'hidden',
					zIndex: 1000
				},
			}}
    >
      <button className={styles.closeButton} onClick={onClose}>&times;</button>
      <GalleryCarousel
        images={images}
        srcKey="original"
				fullSize={true}
				initialSlide={currentImageIndex}
				responsive={{
					all: {
						breakpoint: { max: 4000, min: 0 },
						items: 1,
					}
				}}
        infinite
        arrows
        slidesToSlide={1}
        additionalTransfrom={0}
      />
    </Modal>
  );
};

export default GalleryModal;
