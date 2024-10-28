import React from 'react';
import Button from '../../components/common/Button/Button';
import styles from './HomePage.module.scss';

const HomePage = () => {
  return (
    <div className={styles.heroContainer}>
      <div className={styles.overlay}>
        <div className="container">
          <h1 className={styles.title}>Campers of your dreams</h1>
          <h2 className={styles.subtitle}>
            You can find everything you want in our catalog
          </h2>
          <Button type="link" to="/catalog">
            View Now
          </Button>
        </div>
      </div>

      <picture>
        <source
          media="(max-width: 480px)"
          srcSet="images/hero@1x.png"
        />
        <source
          media="(max-width: 768px)"
          srcSet="images/hero@2x.png"
        />
        <img src="images/hero@3x.png" alt="Campers" />
      </picture>
    </div>
  );
};

export default HomePage;
