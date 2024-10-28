import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import { fetchCamperInfo } from '../../redux/camper/camperOps';
import {
  selectCamperInfo,
  selectLoading,
  selectError,
  resetState,
} from '../../redux/camper/camperSlice';
import Loading from '../../components/Loading/Loading';
import CamperHeader from '../../components/CamperHeader/CamperHeader';
import CamperGallery from '../../components/CamperGallery/CamperGallery';
import CamperTabs from '../../components/CamperTabs/CamperTabs';
import styles from './CamperPage.module.scss';

const CamperPage = () => {
  const { camperId } = useParams();
  const dispatch = useDispatch();

  const camper = useSelector(selectCamperInfo);
  const isLoading = useSelector(selectLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    if (camperId) {
      dispatch(fetchCamperInfo(camperId));
    }

    return () => {
      resetState();
    };
  }, [camperId, dispatch]);

  useEffect(() => {
    if (error) {
      toast.error(error);
    }
  }, [error]);

  if (isLoading) {
    return (
      <div className="container">
        <div className={styles.centeredContainer}>
          <Loading />
        </div>
      </div>
    );
  }

  if (!camper) {
    return (
      <div className="container">
        <div className={styles.centeredContainer}>
          <p>Camper is not found.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="container">
      <div className={styles.camperContainer}>
        <h1 className="visually-hidden">Camper</h1>

        <CamperHeader camper={camper} />
        <CamperGallery images={camper.gallery} />
        <p className={styles.description}>{camper.description}</p>
        <CamperTabs />
      </div>
    </div>
  );
};

export default CamperPage;
