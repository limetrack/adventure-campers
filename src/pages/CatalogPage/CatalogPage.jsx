import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { resetState } from '../../redux/catalog/catalogSlice';
import CamperList from '../../components/CamperList/CamperList';
import Filters from '../../components/Filters/Filters';
import styles from './CatalogPage.module.scss';

const CatalogPage = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    return () => {
      dispatch(resetState(true));
    };
  }, [dispatch]);
  
  return (
    <div className="container">
      <div className={styles.catalogContainer}>
        <h1 className="visually-hidden">Camper list</h1>
        <div className={styles.filtersContainer}>
          <Filters />
        </div>
        <div className={styles.listContainer}>
          <CamperList />
        </div>
      </div>
    </div>
  );
};

export default CatalogPage;
