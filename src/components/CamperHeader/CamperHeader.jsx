import { useDispatch } from 'react-redux';
import { getReviewsText } from '../../utils/utils';
import Button from '../common/Button/Button';
import Icon from '../common/Icon';
import styles from './CamperHeader.module.scss';
import { deleteFavorite, setFavorite } from '../../redux/favoritesSlice';
import { useMemo } from 'react';

const CamperHeader = ({ camper, isCard, isFavorite }) => {
  const dispatch = useDispatch();

  const price = useMemo(() => camper.price.toFixed(2));

  const toggleFavorite = () => {
    const action = isFavorite ? deleteFavorite : setFavorite;
    dispatch(action(camper.id));
  };

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <div className={styles.nameSection}>
          <h6 className={styles.name}>{camper.name}</h6>
        </div>
        {isCard && (
          <div className={styles.priceSectionCard}>
            <span className={styles.price}>€{price}</span>
            <Button type="button" variant="text" onClick={toggleFavorite}>
              <Icon
                name="icon-heart"
                width={26}
                height={24}
                className={isFavorite ? styles.favoriteIconActive : ''}
              />
            </Button>
          </div>
        )}
      </div>
      <div className={styles.subInfo}>
        <span
          className={styles.rating}
          style={{ textDecoration: isCard ? '' : 'underline' }}
        >
          <Icon
            name="icon-star"
            width={16}
            height={16}
            className={styles.star}
          />
          {camper.rating} ({getReviewsText(camper.reviews)})
        </span>
        <span className={styles.location}>
          <Icon name="icon-map" width={16} height={16} />
          {camper.location}
        </span>
      </div>
      {!isCard && (
        <div className={styles.priceSection}>
          <span className={styles.price}>€{price}</span>
        </div>
      )}
    </div>
  );
};

export default CamperHeader;
