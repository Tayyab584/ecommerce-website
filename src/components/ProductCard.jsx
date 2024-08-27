import React from 'react';
import { useNavigate } from 'react-router-dom';

const ProductCard = ({ product, onAddToCart }) => {
  const navigate = useNavigate(); // Initialize useNavigate

  const handleAddToCart = () => {
    onAddToCart(product); // Call the passed handler to add the product to the cart
    navigate('/cart'); // Navigate to the cart page
  };

  return (
    <div className="border border-gray-200 rounded-lg overflow-hidden shadow-lg">
      <img
        src={product.imageUrl}
        alt={product.name}
        className="w-full h-40 object-cover"
      />
      <div className="p-4">
        <h3 className="text-xl font-semibold mb-2">{product.name}</h3>
        <p className="text-gray-700 mb-2">{product.description}</p>
        <p className="text-lg font-bold mb-4">${parseFloat(product.price).toFixed(2)}</p>
        <button
          onClick={handleAddToCart}
          className="bg-green-500 text-white py-2 px-4 rounded-lg hover:bg-green-600 transition duration-300"
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
