import { useSelector } from 'react-redux';
import { selectCamperInfo } from '../../redux/camper/camperSlice';
import BadgeList from '../BadgeList/BadgeList';
import styles from './CamperFeatures.module.scss';
import CamperFeaturesDetails from './CamperFeaturesDetails/CamperFeaturesDetails';

const CamperFeatures = () => {
  const camper = useSelector(selectCamperInfo);

  return (
    <div className={styles.container}>
      <BadgeList camper={camper} />
			<CamperFeaturesDetails camper={camper} />
    </div>
  );
};

export default CamperFeatures;
