import { useMemo } from 'react';
import { useSelector } from 'react-redux';
import { selectFavorites } from '../../redux/favoritesSlice';
import CamperHeader from '../CamperHeader/CamperHeader';
import BadgeList from '../BadgeList/BadgeList';
import Button from '../common/Button/Button';
import styles from './CamperCard.module.scss';

const CamperCard = ({ camper }) => {
  const favorites = useSelector(selectFavorites);

  const isFavorite = useMemo(
    () => favorites.includes(camper.id),
    [camper, favorites]
  );

  return (
    <div className={styles.card}>
      <div className={styles.preview}>
        <img src={camper.gallery?.[0]?.thumb} alt={camper.name} />
      </div>
      <div className={styles.info}>
        <CamperHeader camper={camper} isCard isFavorite={isFavorite} />
        <p className={styles.description}>{camper.description}</p>
        <BadgeList camper={camper} onlyMain />
        <div className={styles.actions}>
          <Button type="link" to={`/catalog/${camper.id}`}>
            Show more
          </Button>
        </div>
      </div>
    </div>
  );
};

export default CamperCard;
