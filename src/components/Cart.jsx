import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';  // Import useNavigate hook

const Cart = () => {
  const [cartItems, setCartItems] = useState([]);
  const [loading, setLoading] = useState(true); // Track loading state
  const navigate = useNavigate();  // Initialize useNavigate

  useEffect(() => {
    // Retrieve cart items from local storage
    const fetchCartItems = async () => {
      setLoading(true);
      const storedCart = JSON.parse(localStorage.getItem('cart')) || [];
      setCartItems(storedCart);
      setLoading(false);
    };

    fetchCartItems();
  }, []);

  const handleRemove = (index) => {
    // Remove item from cart
    const updatedCart = cartItems.filter((_, i) => i !== index);
    setCartItems(updatedCart);
    localStorage.setItem('cart', JSON.stringify(updatedCart));
  };

  const calculateTotal = () => {
    // Calculate the total price of items in the cart based on product details price
    return cartItems.reduce((total, item) => total + parseFloat(item.price), 0).toFixed(2);
  };

  const handleOrderNow = () => {
    // Handle order submission
    alert('Order placed successfully!');
    
    // Clear cart after placing the order
    localStorage.removeItem('cart');
    setCartItems([]);

    // Navigate to the checkout page (or wherever you want to redirect)
    navigate('/checkout');
  };

  const handleAddMoreProducts = () => {
    // Navigate to the products page
    navigate('/products');
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-teal-50 to-teal-100">
        <div className="spinner-border animate-spin border-4 border-teal-600 border-t-transparent rounded-full h-12 w-12"></div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-blue-100 to-blue-200 flex flex-col items-center py-16 px-4">
      <div className="container max-w-4xl w-full bg-white shadow-lg rounded-lg p-6">
        <h2 className="text-4xl font-extrabold mb-12 text-gray-800 text-center">Shopping Cart</h2>
        {cartItems.length === 0 ? (
          <p className="text-center text-gray-600 text-lg">No products are selected.</p>
        ) : (
          <>
            <div className="space-y-8">
              {cartItems.map((item, index) => (
                <div key={index} className="bg-white shadow-lg rounded-lg p-6 flex items-start justify-between border border-gray-300 transition-transform transform hover:scale-105 hover:shadow-2xl">
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold mb-2 text-gray-800">{item.name}</h3>
                    <p className="text-gray-700 text-base mb-3">{item.description}</p>
                    <p className="text-xl font-bold text-blue-600">${item.price}</p>
                  </div>
                  <button
                    onClick={() => handleRemove(index)}
                    className="bg-red-600 text-white py-2 px-4 rounded-lg hover:bg-red-700 transition duration-300 transform hover:scale-105"
                  >
                    Remove
                  </button>
                </div>
              ))}
            </div>
            <div className="mt-12 border-t border-gray-300 pt-8 bg-white shadow-lg rounded-lg p-6">
              <h3 className="text-3xl font-extrabold text-gray-900">Total: ${calculateTotal()}</h3>
            </div>
            <div className="mt-12 flex flex-col sm:flex-row sm:justify-between gap-4">
              <button
                onClick={handleAddMoreProducts}
                className="bg-blue-600 text-white py-3 px-8 rounded-lg hover:bg-blue-700 transition duration-300 text-lg"
              >
                Add More Products
              </button>
              <button
                onClick={handleOrderNow}
                className="bg-green-600 text-white py-3 px-8 rounded-lg hover:bg-green-700 transition duration-300 text-lg"
              >
                Order Now
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Cart;
