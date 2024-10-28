import Icon from '../../common/Icon';
import styles from './Badge.module.scss';

const Badge = ({ badge }) => {
  return (
    <div className={styles.badge}>
      <Icon name={badge.icon} width={20} height={20} />
      <span>{badge.name}</span>
    </div>
  );
};

export default Badge;
