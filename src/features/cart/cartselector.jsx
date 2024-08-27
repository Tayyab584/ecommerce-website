import React from 'react';
import { useSelector } from 'react-redux';
import CartItem from './CartItem';  // Ensure you have this component created

const CartSelector = () => {
  // Use useSelector to get cart items from the Redux store
  const cartItems = useSelector((state) => state.cart.items);

  if (cartItems.length === 0) {
    return <p className="text-center text-gray-500">Your cart is empty.</p>;
  }

  return (
    <div className="container mx-auto py-16">
      <h2 className="text-3xl font-bold mb-8">Your Cart</h2>
      <div>
        {cartItems.map(item => (
          <CartItem key={item.id} item={item} />
        ))}
      </div>
      <div className="mt-8">
        <p className="text-lg font-bold">
          Total: ${cartItems.reduce((total, item) => total + item.price * item.quantity, 0).toFixed(2)}
        </p>
      </div>
    </div>
  );
};

export default CartSelector;
