import { useDispatch, useSelector } from 'react-redux';
import { Formik, Form } from 'formik';
import { changeFilters, selectFilters } from '../../redux/filtersSlice';
import { resetState } from '../../redux/catalog/catalogSlice';
import { vehicleEquipmentOptions, vehicleTypeOptions } from './filterOptions';
import FilterGroup from './FilterGroup/FilterGroup';
import FormGroup from '../form/FormGroup/FormGroup';
import Button from '../common/Button/Button';
import styles from './Filters.module.scss';

const Filters = () => {
  const filters = useSelector(selectFilters);
  const dispatch = useDispatch();

  const handleSubmit = values => {
    dispatch(changeFilters(values));
    dispatch(resetState(true));
  };

  return (
    <Formik initialValues={filters} onSubmit={handleSubmit}>
      {({ values }) => (
        <Form className={styles.form}>
          <FormGroup
            name="location"
            label="Location"
            icon="icon-map"
            placeholder="Enter your location"
          />

          <h3 className={styles.filtersTitle}>Filters</h3>

          <FilterGroup
            type="checkbox"
            name="vehicleEquipment"
            label="Vehicle Equipment"
            options={vehicleEquipmentOptions}
            values={values}
          />

          <FilterGroup
            type="radio"
            name="form"
            label="Vehicle Type"
            options={vehicleTypeOptions}
            values={values}
          />

          <Button type="submit" className={styles.submitButton}>
            Submit
          </Button>
        </Form>
      )}
    </Formik>
  );
};

export default Filters;
