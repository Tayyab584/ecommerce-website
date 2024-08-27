import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';  // Import useNavigate hook

const Products = () => {
  const [products, setProducts] = useState([]);
  const [status, setStatus] = useState('idle');
  const navigate = useNavigate();  // Initialize useNavigate

  useEffect(() => {
    if (status === 'idle') {
      // Mock product data
      const fetchedProducts = [
        {
          id: 1,
          name: 'Audionic Headphones',
          description: 'The Audionic headphones are easy to use and have fantastic sound quality.',
          price: '9.99',
          imageUrl: 'src/assets/images/1.png'
        },
        {
          id: 2,
          name: 'Dell Core i7',
          description: 'Faster than previous versions with a graphics card included.',
          price: '39.99',
          imageUrl: 'src/assets/images/2.png'
        },
        {
          id: 3,
          name: 'RAM 256 SD',
          description: 'Increases the speed of your system and makes it more reliable.',
          price: '49.99',
          imageUrl: 'src/assets/images/3.png'
        },
        {
          id: 4,
          name: 'Smartwatch X',
          description: 'Stay connected with notifications and fitness tracking features.',
          price: '129.99',
          imageUrl: 'src/assets/images/5.png'
        },
        {
          id: 5,
          name: 'Wireless Mouse',
          description: 'Ergonomic design with precise tracking and long battery life.',
          price: '19.99',
          imageUrl: 'src/assets/images/6.png'
        },
        {
          id: 6,
          name: 'Bluetooth Speaker',
          description: 'Portable speaker with rich sound quality and long battery life.',
          price: '59.99',
          imageUrl: 'src/assets/images/7.png'
        },
        {
          id: 7,
          name: '4K Monitor',
          description: 'Ultra-high-definition monitor for stunning visuals and clear text.',
          price: '299.99',
          imageUrl: 'src/assets/images/8.png'
        },
        {
          id: 8,
          name: 'External SSD 1TB',
          description: 'High-speed storage solution for your data needs.',
          price: '149.99',
          imageUrl: 'src/assets/images/9.png'
        },
        {
          id: 9,
          name: 'Gaming Keyboard',
          description: 'Mechanical keyboard with customizable RGB lighting.',
          price: '89.99',
          imageUrl: 'src/assets/images/10.png'
        }
      ];
      setProducts(fetchedProducts);
      setStatus('succeeded');
    }
  }, [status]);

  const handleBuyNow = (product) => {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    cart.push(product);
    localStorage.setItem('cart', JSON.stringify(cart));
    navigate('/cart');
  };

  return (
    <div className="bg-gray-100 min-h-screen py-16 px-4">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold mb-12 text-center text-gray-800">Our Products</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {products.map(product => (
            <div key={product.id} className="relative bg-white shadow-lg rounded-lg overflow-hidden transform transition-transform hover:scale-105 border border-gray-300 transition duration-300 hover:bg-blue-50 hover:border-blue-500">
              <img
                src={product.imageUrl}
                alt={product.name}
                className="w-full h-48 object-cover transition-transform duration-300 transform hover:scale-110"
              />
              <div className="relative p-6">
                <h3 className="text-xl font-semibold mb-2 text-gray-800">{product.name}</h3>
                <p className="text-gray-600 mb-4">{product.description}</p>
                <div className="flex items-center justify-between">
                  <span className="text-lg font-bold text-blue-600">${product.price}</span>
                  <button
                    onClick={() => handleBuyNow(product)}
                    className="bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition duration-300"
                  >
                    Buy Now
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
        <section className="mt-16 py-8 bg-gradient-to-r from-indigo-800 via-purple-700 to-pink-600 rounded-lg shadow-md">
          <div className="container mx-auto text-center px-4">
            <h3 className="text-3xl font-bold mb-4 text-gray-100">Coming Soon!</h3>
            <p className="text-gray-200 mb-6">We’re working on adding more exciting products to our store. Stay tuned for updates and new arrivals!</p>
            <p className="text-gray-300">In the meantime, feel free to explore our current selection and take advantage of our ongoing promotions.</p>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Products;
