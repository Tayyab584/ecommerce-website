import * as Yup from 'yup';

export const checkoutSchema = Yup.object().shape({
  name: Yup.string().required('Name is required'),
  email: Yup.string().email('Invalid email address').required('Email is required'),
  address: Yup.string().required('Address is required'),
  paymentMethod: Yup.string().required('Payment method is required'),
});
