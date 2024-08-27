import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { addItem } from '../features/cart/cartSlice';

const ProductDetail = () => {
  const { productId } = useParams(); // Get the product ID from the URL
  const dispatch = useDispatch();
  const navigate = useNavigate();
  
  // Static product data
  const products = [
    {
      id: 1,
      name: 'Audionic Headphones',
      description: 'The Audionic headphones are easy to use and have fantastic sound quality.',
      price: '9.99',
      imageUrl: '/src/assets/images/1.png'  // Path for public folder
    },
    {
      id: 2,
      name: 'Dell Core i7',
      description: 'Faster than previous versions with a graphics card included.',
      price: '39.99',
      imageUrl: '/src/assets/images/2.png'  // Path for public folder
    },
    {
      id: 3,
      name: 'RAM 256 SD',
      description: 'Increases the speed of your system and makes it more reliable.',
      price: '49.99',
      imageUrl: '/src/assets/images/3.png'  // Path for public folder
    },
    {
      id: 4,
      name: 'Smartwatch X',
      description: 'Stay connected with notifications and fitness tracking features.',
      price: '129.99',
      imageUrl: '/src/assets/images/5.png'  // Path for public folder
    },
    {
      id: 5,
      name: 'Wireless Mouse',
      description: 'Ergonomic design with precise tracking and long battery life.',
      price: '19.99',
      imageUrl: '/src/assets/images/6.png'  // Path for public folder
    },
    {
      id: 6,
      name: 'Bluetooth Speaker',
      description: 'Portable speaker with rich sound quality and long battery life.',
      price: '59.99',
      imageUrl: '/src/assets/images/7.png'  // Path for public folder
    },
    {
      id: 7,
      name: '4K Monitor',
      description: 'Ultra-high-definition monitor for stunning visuals and clear text.',
      price: '299.99',
      imageUrl: '/src/assets/images/8.png'  // Path for public folder
    },
    {
      id: 8,
      name: 'External SSD 1TB',
      description: 'High-speed storage solution for your data needs.',
      price: '149.99',
      imageUrl: '/src/assets/images/9.png'  // Path for public folder
    },
    {
      id: 9,
      name: 'Gaming Keyboard',
      description: 'Mechanical keyboard with customizable RGB lighting.',
      price: '89.99',
      imageUrl: '/src/assets/images/10.png'  // Path for public folder
    }
  ];

  const [selectedProductId, setSelectedProductId] = useState(productId || '');
  
  // Find the selected product
  const product = products.find((item) => item.id === parseInt(selectedProductId, 10));

  useEffect(() => {
    setSelectedProductId(productId || '');
  }, [productId]);

  const handleAddToCart = () => {
    if (product) {
      // Dispatch addItem action with product details
      dispatch(addItem(product));
    }
  };

  const handleSelectProduct = (event) => {
    const selectedId = event.target.value;
    setSelectedProductId(selectedId);
    navigate(`/product/${selectedId}`); // Navigate to the selected product's detail page
  };

  // Ensure price is a number and format it properly
  const formattedPrice = product ? parseFloat(product.price).toFixed(2) : '0.00';

  return (
    <div className="container mx-auto py-16">
      <div className="mb-8">
        <label htmlFor="productSelect" className="block text-lg font-semibold mb-2">Select a Product</label>
        <select
          id="productSelect"
          value={selectedProductId}
          onChange={handleSelectProduct}
          className="bg-white border border-gray-300 rounded-lg p-2 text-gray-700 w-full"
        >
          <option value="">Select a product</option>
          {products.map((product) => (
            <option key={product.id} value={product.id}>
              {product.name}
            </option>
          ))}
        </select>
      </div>

      {product && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
          <div>
            <img
              src={product.imageUrl}
              alt={product.name}
              className="w-full h-auto object-cover"
            />
          </div>
          <div>
            <h1 className="text-4xl font-bold mb-4">{product.name}</h1>
            <p className="text-lg text-gray-700 mb-4">{product.description}</p>
            <p className="text-xl font-semibold mb-4">${formattedPrice}</p>
            <button
              onClick={handleAddToCart}
              className="bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition duration-300"
            >
              Add to Cart
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductDetail;
