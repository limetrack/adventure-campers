import { useState } from 'react';
import BookingForm from '../BookingForm/BookingForm';
import CamperFeatures from '../CamperFeatures/CamperFeatures';
import CamperReviews from '../CamperReviews/CamperReviews';
import styles from './CamperTabs.module.scss';

const tabs = ['Features', 'Reviews'];

const CamperTabs = () => {
  const [activeTab, setActiveTab] = useState(tabs[0]);

  return (
    <div className={styles.tabs}>
      <div id="rating-block" className={styles.tabSwitcher}>
        {tabs.map(tab => (
          <div
            key={tab}
            className={`${styles.tab} ${
              activeTab === tab ? styles.active : ''
            }`}
            onClick={() => setActiveTab(tab)}
          >
            {tab}
          </div>
        ))}
      </div>
      <div className={styles.tabContent}>
        <div className={styles.tabContentSide}>
          {activeTab === 'Features' && <CamperFeatures />}
          {activeTab === 'Reviews' && <CamperReviews />}
        </div>
        <div className={styles.tabContentSide}>
          <BookingForm />
        </div>
      </div>
    </div>
  );
};

export default CamperTabs;
