import * as Yup from 'yup';

export const BookingSchema = Yup.object().shape({
  name: Yup.string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required'),
  email: Yup.string().email('Invalid email').required('Required'),
  bookingDate: Yup.date()
    .required('Required')
    .typeError('Please enter a valid date')
    .min(new Date(), 'Date must be today or in the future'),
});
