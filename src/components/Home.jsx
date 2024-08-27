import React, { useCallback, useState } from 'react';
import { Link } from 'react-router-dom';
import ProductCard from '../components/ProductCard'; // Import the ProductCard component

const products = [
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
  }
];

const Home = () => {
  const handleAddToCart = useCallback((product) => {
    // Retrieve cart items from local storage
    const storedCart = JSON.parse(localStorage.getItem('cart')) || [];

    // Add the new product to the cart
    const updatedCart = [...storedCart, product];
    localStorage.setItem('cart', JSON.stringify(updatedCart));
  }, []);

  return (
    <>
      {/* Navbar would be here */}

      <div
        className="relative h-80 bg-cover bg-center bg-no-repeat text-white"
        style={{ backgroundImage: `url('src/assets/images/0.png')` }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-teal-500 via-blue-500 to-purple-600 bg-opacity-60 flex items-center justify-center">
          <div className="text-center p-8">
            <h1 className="text-5xl font-extrabold mb-4">Welcome to Our Store</h1>
            <p className="text-xl mb-6">Discover amazing products at unbeatable prices.</p>
            <Link
              to="/products"
              className="bg-yellow-400 text-black py-3 px-6 rounded-lg hover:bg-yellow-500 transition duration-300"
            >
              Shop Now
            </Link>
          </div>
        </div>
      </div>

      <div className="bg-gray-100 py-16">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold mb-8 text-center text-gray-800">Featured Products</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-8">
            {products.map(product => (
              <ProductCard
                key={product.id}
                product={product}
                onAddToCart={handleAddToCart}
              />
            ))}
          </div>
        </div>
      </div>

      <section className="bg-gradient-to-r from-green-100 via-blue-100 to-purple-100 py-16">
        <div className="container mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="flex-1">
            <img
              src="src/assets/images/4.png" // Update this path as needed
              alt="Feature"
              className="w-full h-64 object-cover rounded-lg shadow-lg border-4 border-yellow-300"
            />
          </div>
          <div className="flex-1 text-center md:text-left">
            <h2 className="text-3xl font-bold mb-4 text-gray-800">Explore Our Latest Collections</h2>
            <p className="text-lg text-gray-700 mb-6">
              Discover our latest collections and find the perfect item for your needs. 
              From innovative gadgets to stylish accessories, we offer a wide range of products 
              designed to enhance your lifestyle. Check out our new arrivals and get inspired!
            </p>
            <Link
              to="/products"
              className="bg-orange-500 text-white py-2 px-4 rounded-lg hover:bg-orange-600 transition duration-300"
            >
              View All Products
            </Link>
          </div>
        </div>
      </section>

      <section className="bg-white py-16">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold mb-8 text-center text-gray-800">Latest News & Updates</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="p-6 bg-gray-100 shadow-lg rounded-lg">
              <h3 className="text-2xl font-bold mb-4">Exciting New Product Launch</h3>
              <p className="text-gray-700 mb-4">
                We're thrilled to introduce our latest product line. Stay tuned for more details on the release date!
              </p>
            </div>
            <div className="p-6 bg-gray-100 shadow-lg rounded-lg">
              <h3 className="text-2xl font-bold mb-4">Summer Sale Announced!</h3>
              <p className="text-gray-700 mb-4">
                Our summer sale is just around the corner. Get ready for unbeatable discounts on selected items.
              </p>
            </div>
            <div className="p-6 bg-gray-100 shadow-lg rounded-lg">
              <h3 className="text-2xl font-bold mb-4">How to Choose the Perfect Gadget</h3>
              <p className="text-gray-700 mb-4">
                Not sure which gadget to buy? Check out our latest blog post for tips and recommendations.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-gray-50 py-16">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold mb-8 text-center text-gray-800">What Our Customers Say</h2>
          <div className="flex flex-wrap justify-center gap-8">
            <div className="w-full sm:w-1/2 lg:w-1/3 p-6 bg-white shadow-lg rounded-lg">
              <p className="text-lg mb-4 text-gray-700">
                "I absolutely love the products from this store! The quality is top-notch and the customer service is excellent."
              </p>
              <p className="font-bold text-gray-900">- Jane Doe</p>
            </div>
            <div className="w-full sm:w-1/2 lg:w-1/3 p-6 bg-white shadow-lg rounded-lg">
              <p className="text-lg mb-4 text-gray-700">
                "Fast shipping and great prices. I've bought multiple items and I've been consistently impressed."
              </p>
              <p className="font-bold text-gray-900">- John Smith</p>
            </div>
            <div className="w-full sm:w-1/2 lg:w-1/3 p-6 bg-white shadow-lg rounded-lg">
              <p className="text-lg mb-4 text-gray-700">
                "A fantastic shopping experience! The website is easy to navigate and the products are as described."
              </p>
              <p className="font-bold text-gray-900">- Emily Johnson</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
