import RatingStars from '../RatingStars/RatingStars';
import styles from './Review.module.scss';

const Review = ({ review }) => {
  return (
    <div className={styles.review}>
      <div className={styles.header}>
        <div className={styles.avatar}>{review.reviewer_name[0]}</div>
        <div>
          <h6 className={styles.reviewer}>{review.reviewer_name}</h6>
					<RatingStars rating={review.reviewer_rating} />
        </div>
      </div>
      <p className={styles.comment}>{review.comment}</p>
    </div>
  );
};

export default Review;
