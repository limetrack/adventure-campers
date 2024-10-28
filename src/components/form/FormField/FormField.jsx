import { Field } from 'formik';
import styles from './FormField.module.scss';

const FormGroup = ({
  type = 'text',
  name,
  placeholder,
  renderAs,
  errors,
  touched,
  ...props
}) => {
  return (
    <div className={styles.formGroup}>
      <label htmlFor={name} className="visually-hidden">
        {placeholder}
      </label>
      <Field
        type={type}
        id={name}
        name={name}
        placeholder={placeholder}
        as={renderAs}
        className={styles.field}
        {...props}
      />
      {errors?.[name] && touched?.[name] ? (
        <div className={styles.error}>{errors[name]}</div>
      ) : null}
    </div>
  );
};

export default FormGroup;
