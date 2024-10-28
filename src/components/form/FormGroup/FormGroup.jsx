import { Field } from 'formik';
import Icon from '../../common/Icon';
import styles from './FormGroup.module.scss';

const FormGroup = ({ type = 'text', name, label, icon, placeholder }) => {
  return (
    <div className={styles.formGroup}>
      <label
        htmlFor={name}
        className={label ? styles.label : 'visually-hidden'}
      >
        {label || placeholder}
      </label>
      <div className={styles.formField}>
        <div className={styles.inputAdornment}>
          <Icon name={icon} />
        </div>
        <Field
          type={type}
          id={name}
          name={name}
          placeholder={placeholder}
          className={styles.input}
        />
      </div>
    </div>
  );
};

export default FormGroup;
