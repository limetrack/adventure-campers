import Divider from '../../common/Divider/Divider';
import FilterField from '../FilterField/FilterField';
import styles from './FilterGroup.module.scss';

const FilterGroup = ({ type, name, label, options, values }) => {
  return (
    <div className={styles.formGroup}>
      <label className={styles.label}>{label}</label>
      <Divider />
      <div className={styles.checkboxGroup}>
        {options.map(option => {
          const isChecked = Array.isArray(values[name])
            ? values[name].includes(option.value)
            : option.value === values[name];

          return (
            <FilterField
              key={option.value}
              type={type}
              name={name}
              option={option}
              isChecked={isChecked}
            />
          );
        })}
      </div>
    </div>
  );
};

export default FilterGroup;
