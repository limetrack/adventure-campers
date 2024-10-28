import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import { fetchCatalog } from '../../redux/catalog/catalogOps';
import {
  selectCatalog,
  selectError,
  selectIsNextPageAvailable,
  selectLoading,
  selectPage,
  setNextPage,
} from '../../redux/catalog/catalogSlice';
import { selectFilters } from '../../redux/filtersSlice';
import CamperCard from '../CamperCard/CamperCard';
import Loading from '../Loading/Loading';
import Button from '../common/Button/Button';
import styles from './CamperList.module.scss';

const CamperList = () => {
  const dispatch = useDispatch();
  const list = useSelector(selectCatalog);
  const page = useSelector(selectPage);
  const isNextPageAvailable = useSelector(selectIsNextPageAvailable);
  const filters = useSelector(selectFilters);
  const isLoading = useSelector(selectLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchCatalog());
  }, [page, filters, dispatch]);

  useEffect(() => {
    if (error) {
      toast.error(error);
    }
  }, [error]);

  const handlePageChange = () => {
    dispatch(setNextPage());
  };

	if (!isLoading && !list?.length) {
		return <p className={styles.emptyList}>No items.</p>
	}

  return (
    <>
      <ul className={styles.list}>
        {list.map(item => (
          <li key={item.id}>
            <CamperCard camper={item} />
          </li>
        ))}
      </ul>
      <div className={styles.actions}>
        {isLoading && <Loading />}
        {!isLoading && isNextPageAvailable && (
          <Button
            variant="outlined"
            title=""
            className={styles.loadMore}
            onClick={handlePageChange}
          >
            Load more
          </Button>
        )}
      </div>
    </>
  );
};

export default CamperList;
