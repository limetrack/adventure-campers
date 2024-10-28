import { Field } from 'formik';
import Icon from '../../common/Icon';
import styles from './FilterField.module.scss';

const FilterField = ({ type = 'checkbox', name, option, isChecked }) => {
  return (
    <label
      className={`${styles.filterField} ${isChecked ? styles.checked : ''}`}
    >
      <Field
        type={type}
        name={name}
        value={option.value}
        as="input"
        checked={isChecked}
      />
      <div className={styles.iconContainer}>
        <Icon name={option.icon} width={32} height={32} />
        <span>{option.label}</span>
      </div>
    </label>
  );
};

export default FilterField;
