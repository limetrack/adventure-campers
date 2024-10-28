import Icon from '../../common/Icon';
import styles from './RatingStars.module.scss';

const RatingStars = ({ rating }) => {
  return (
    <ul className={styles.stars}>
      {[...Array(5)].map((_, index) => (
        <li key={index}>
          <Icon
            name="icon-star"
            width={16}
            height={16}
            className={index < rating ? styles.filledStar : styles.emptyStar}
          />
        </li>
      ))}
    </ul>
  );
};

export default RatingStars;
