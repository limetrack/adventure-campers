import React from 'react';
import Button from '../../components/common/Button/Button';
import styles from './NotFoundPage.module.scss';

const NotFoundPage = () => (
  <div className={styles.wrapper}>
    <h1 className={styles.header}>Page not found</h1>
    <Button type="link" to="/">
      Go to Home
    </Button>
  </div>
);

export default NotFoundPage;
