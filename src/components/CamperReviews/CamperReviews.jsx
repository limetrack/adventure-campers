import { useSelector } from 'react-redux';
import { selectCamperInfo } from '../../redux/camper/camperSlice';
import Review from './Review/Review';
import styles from './CamperReviews.module.scss';

const CamperReviews = ({  }) => {
  const camper = useSelector(selectCamperInfo);

  if (!camper.reviews) {
    return <div className={styles.emptyBow}>No reviews.</div>
  }

  return (
    <ul className={styles.reviewsList}>
      {camper.reviews.map(review => (
        <li key={review.reviewer_name}>
          <Review review={review} />
        </li>
      ))}
    </ul>
  );
};

export default CamperReviews;
