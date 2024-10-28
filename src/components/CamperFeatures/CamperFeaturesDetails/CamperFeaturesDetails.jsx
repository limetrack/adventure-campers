import Divider from '../../common/Divider/Divider';
import styles from './CamperFeaturesDetails.module.scss';

export const featureDetails = [
	{ name: "Form", key: "form" },
	{ name: "Length", key: "length" },
	{ name: "Width", key: "width" },
	{ name: "Height", key: "height" },
	{ name: "Tank", key: "tank" },
	{ name: "Consumption", key: "consumption" },
];

const CamperFeaturesDetails = ({ camper }) => {
  return (
    <div>
      <h6 className={styles.title}>Vehicle details</h6>
      <Divider />
			<ul className={styles.detailList}>
				{featureDetails.map((detail) => (
					<li key={detail.key} className={styles.detailRow}>
						<span>{detail.name}</span>
						<span>{camper[detail.key] || '-'}</span>
					</li>
				))}
			</ul>
    </div>
  );
};

export default CamperFeaturesDetails;
