import { Formik, Form } from 'formik';
import { BookingSchema } from '../../utils/validation';
import FormField from '../form/FormField/FormField';
import styles from './BookingForm.module.scss';
import Button from '../common/Button/Button';
import DatePicker from '../form/DatePicker/DatePicker';
import { toast } from 'react-toastify';

const initialValues = {
  name: '',
  email: '',
  bookingDate: '',
  comment: '',
};

const BookingForm = () => {
  const handleSubmit = values => {
    console.log('Form Submitted:', values);
    toast.success("You booked a camper!")
  };

  return (
    <div className={styles.formContainer}>
      <h3 className={styles.title}>Book your campervan now</h3>
      <p className={styles.description}>
        Stay connected! We are always ready to help you.
      </p>
      <Formik
        initialValues={initialValues}
        validateOnChange={false}
        validateOnBlur={false}
        validationSchema={BookingSchema}
        onSubmit={handleSubmit}
      >
        {({ values, setFieldValue, errors, touched }) => (
          <Form className={styles.form}>
            <FormField
              name="name"
              placeholder="Name*"
              errors={errors}
              touched={touched}
            />
            <FormField
              name="email"
              placeholder="Email*"
              errors={errors}
              touched={touched}
            />
            <DatePicker
              name="bookingDate"
              placeholder="Booking date*"
              value={values.bookingDate}
              onChange={setFieldValue}
              errors={errors}
              touched={touched}
            />
            <FormField
              name="comment"
              placeholder="Comment"
              renderAs="textarea"
              rows={3}
            />

            <Button type="submit" className={styles.submitButton}>
              Submit
            </Button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default BookingForm;
