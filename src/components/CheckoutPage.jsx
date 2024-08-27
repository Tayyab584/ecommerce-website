import React, { useState } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { checkoutSchema } from '../utils/validation';
import { useDispatch } from 'react-redux';
import { clearCart } from '../features/cart/cartSlice';

const CheckoutPage = () => {
  const [isSuccess, setIsSuccess] = useState(false);
  const dispatch = useDispatch();

  const handleSubmit = (values, { resetForm }) => {
    // Generate a new order ID (for simplicity, use timestamp)
    const orderId = new Date().getTime();

    // Create an order object
    const order = {
      id: orderId,
      ...values,
      // Optionally include other details like cart items
    };

    // Retrieve existing orders from local storage
    const existingOrders = JSON.parse(localStorage.getItem('orderHistory')) || [];

    // Add the new order to the history
    existingOrders.push(order);

    // Save the updated order history back to local storage
    localStorage.setItem('orderHistory', JSON.stringify(existingOrders));

    // Clear the cart
    dispatch(clearCart());

    // Show success message and clear form
    setIsSuccess(true);
    resetForm();
  };

  return (
    <div className="bg-gradient-to-br from-indigo-100 via-blue-200 to-blue-400 min-h-screen flex flex-col">
      <div className="flex-grow container mx-auto py-16 px-4 lg:px-8">
        <h2 className="text-4xl font-extrabold mb-8 text-gray-900 text-center">Checkout</h2>

        {isSuccess && (
          <div className="mb-6 p-4 bg-green-200 text-green-800 border border-green-400 rounded-lg shadow-lg">
            <p>Thank you for your purchase! Your order has been placed successfully.</p>
          </div>
        )}

        <Formik
          initialValues={{
            name: '',
            email: '',
            address: '',
            paymentMethod: '',
          }}
          validationSchema={checkoutSchema}
          onSubmit={handleSubmit}
        >
          <Form className="bg-white shadow-xl rounded-lg p-8 max-w-3xl mx-auto">
            <div className="mb-6">
              <label htmlFor="name" className="block text-lg font-semibold text-gray-700">Name</label>
              <Field 
                type="text" 
                id="name" 
                name="name" 
                placeholder="Enter your name" 
                className="w-full border border-gray-300 rounded-lg p-3 mt-1 focus:outline-none focus:ring-2 focus:ring-blue-600 transition duration-300" 
              />
              <ErrorMessage name="name" component="div" className="text-red-600 mt-1 text-sm" />
            </div>

            <div className="mb-6">
              <label htmlFor="email" className="block text-lg font-semibold text-gray-700">Email</label>
              <Field 
                type="email" 
                id="email" 
                name="email" 
                placeholder="Enter your email" 
                className="w-full border border-gray-300 rounded-lg p-3 mt-1 focus:outline-none focus:ring-2 focus:ring-blue-600 transition duration-300" 
              />
              <ErrorMessage name="email" component="div" className="text-red-600 mt-1 text-sm" />
            </div>

            <div className="mb-6">
              <label htmlFor="address" className="block text-lg font-semibold text-gray-700">Address</label>
              <Field 
                type="text" 
                id="address" 
                name="address" 
                placeholder="Enter your address" 
                className="w-full border border-gray-300 rounded-lg p-3 mt-1 focus:outline-none focus:ring-2 focus:ring-blue-600 transition duration-300" 
              />
              <ErrorMessage name="address" component="div" className="text-red-600 mt-1 text-sm" />
            </div>

            <div className="mb-6">
              <label htmlFor="paymentMethod" className="block text-lg font-semibold text-gray-700">Payment Method</label>
              <Field 
                as="select" 
                id="paymentMethod" 
                name="paymentMethod" 
                className="w-full border border-gray-300 rounded-lg p-3 mt-1 focus:outline-none focus:ring-2 focus:ring-blue-600 transition duration-300"
              >
                <option value="">Select Payment Method</option>
                <option value="creditCard">Credit Card</option>
                <option value="paypal">PayPal</option>
              </Field>
              <ErrorMessage name="paymentMethod" component="div" className="text-red-600 mt-1 text-sm" />
            </div>

            <button 
              type="submit" 
              className="bg-blue-700 text-white py-3 px-6 rounded-lg hover:bg-blue-800 transition duration-300 focus:outline-none focus:ring-2 focus:ring-blue-600"
            >
              Complete Purchase
            </button>

            {isSuccess && (
              <p className="mt-4 text-gray-800 text-center">
                Your order was successfully placed. You can check your order history <a href="/order-history" className="text-blue-600 underline">here</a>.
              </p>
            )}
          </Form>
        </Formik>
      </div>
      {/* Footer Component would be added here */}
    </div>
  );
};

export default CheckoutPage;
