import React from 'react';
import ReactDatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import styles from './DatePicker.module.scss';

const DatePicker = ({
	name,
	placeholder,
	value,
	errors,
	touched,
	onChange,
}) => {
	const handleSetDate = (newDate) => {
		onChange(name, newDate.toString());
	};

  return (
		<div className={styles.formGroup}>
    <ReactDatePicker
			name={name}
			placeholderText={placeholder}
      selected={value}
      onChange={handleSetDate}
			// minDate={new Date()}
      dateFormat="dd-MM-yyyy"
			className={styles.input}
			calendarClassName="custom-datepicker"
			useWeekdaysShort={true}
    />
		
			{errors?.[name] && touched?.[name] ? (
				<div className={styles.error}>{errors[name]}</div>
			) : null}
		</div>
  );
};

export default DatePicker;
