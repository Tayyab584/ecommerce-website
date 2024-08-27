import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';  // Import useNavigate hook

const ProductDetailPage = () => {
  const [selectedProductName, setSelectedProductName] = useState('');
  const [productDetail, setProductDetail] = useState(null);
  const navigate = useNavigate();  // Initialize useNavigate

  // Static product data
  const products = [
    {
      id: 1,
      name: 'Audionic Headphones',
      description: 'The Audionic headphones are easy to use and have fantastic sound quality.',
      price: '9.99',
      brand: 'Audionic',
      warranty: '1 year',
      category: 'Electronics',
      availability: 'In Stock',
      features: ['High comfort', 'Excellent sound quality', 'Noise-canceling'],
      additionalInfo: 'Ideal for daily use, commuting, or enjoying music on the go. Compatible with most devices using a standard 3.5mm headphone jack.',
      image: '/src/assets/images/1.png' // Correct image path
    },
    {
      id: 2,
      name: 'Dell Core i7',
      description: 'Faster than previous versions with a graphics card included.',
      price: '39.99',
      brand: 'Dell',
      warranty: '2 years',
      category: 'Computer Components',
      availability: 'In Stock',
      features: ['High performance', 'Includes graphics card', 'Energy efficient'],
      additionalInfo: 'Perfect for gaming and high-performance computing tasks. Compatible with most motherboards with LGA 1151 socket.',
      image: '/src/assets/images/2.png' // Correct image path
    },
    {
      id: 3,
      name: 'RAM 256 SD',
      description: 'Increases the speed of your system and makes it more reliable.',
      price: '49.99',
      brand: 'Kingston',
      warranty: 'Lifetime',
      category: 'Computer Components',
      availability: 'Out of Stock',
      features: ['High speed', 'Reliable performance', 'Lifetime warranty'],
      additionalInfo: 'Ideal for enhancing the performance of your PC. Ensure compatibility with your motherboard before purchasing.',
      image: '/src/assets/images/3.png' // Correct image path
    },
    {
      id: 4,
      name: 'Smartwatch X',
      description: 'Stay connected with notifications and fitness tracking features.',
      price: '129.99',
      brand: 'SmartTech',
      warranty: '1 year',
      category: 'Wearables',
      availability: 'In Stock',
      features: ['Fitness tracking', 'Notifications', 'Long battery life'],
      additionalInfo: 'Features include heart rate monitoring, sleep tracking, and smartphone notifications. Compatible with both iOS and Android devices.',
      image: '/src/assets/images/5.png' // Correct image path
    },
    {
      id: 5,
      name: 'Wireless Mouse',
      description: 'Ergonomic design with precise tracking and long battery life.',
      price: '19.99',
      brand: 'Logitech',
      warranty: '1 year',
      category: 'Accessories',
      availability: 'In Stock',
      features: ['Ergonomic design', 'Precise tracking', 'Long battery life'],
      additionalInfo: 'Designed for comfort and extended use. Includes adjustable DPI settings for precision. Works with most operating systems and devices.',
      image: '/src/assets/images/6.png' // Correct image path
    },
    {
      id: 6,
      name: 'Bluetooth Speaker',
      description: 'Portable speaker with rich sound quality and long battery life.',
      price: '59.99',
      brand: 'Bose',
      warranty: '2 years',
      category: 'Audio',
      availability: 'In Stock',
      features: ['Rich sound quality', 'Portable', 'Long battery life'],
      additionalInfo: 'Perfect for outdoor activities and gatherings. Features Bluetooth connectivity with a range of up to 30 feet and a rechargeable battery that lasts up to 12 hours.',
      image: '/src/assets/images/7.png' // Correct image path
    },
    {
      id: 7,
      name: '4K Monitor',
      description: 'Ultra-high-definition monitor for stunning visuals and clear text.',
      price: '299.99',
      brand: 'LG',
      warranty: '3 years',
      category: 'Displays',
      availability: 'In Stock',
      features: ['4K resolution', 'Stunning visuals', 'Clear text'],
      additionalInfo: 'Ideal for professional work, gaming, and entertainment. Includes multiple input options and supports HDR content for vibrant colors and deeper contrast.',
      image: '/src/assets/images/8.png' // Correct image path
    },
    {
      id: 8,
      name: 'External SSD 1TB',
      description: 'High-speed storage solution for your data needs.',
      price: '149.99',
      brand: 'Samsung',
      warranty: '5 years',
      category: 'Storage',
      availability: 'In Stock',
      features: ['High-speed data transfer', '1TB capacity', 'Durable design'],
      additionalInfo: 'Provides fast data access and transfer speeds. Durable and compact design makes it ideal for portability. Compatible with both USB 3.0 and USB-C interfaces.',
      image: '/src/assets/images/9.png' // Correct image path
    },
    {
      id: 9,
      name: 'Gaming Keyboard',
      description: 'Mechanical keyboard with customizable RGB lighting.',
      price: '89.99',
      brand: 'Corsair',
      warranty: '2 years',
      category: 'Gaming',
      availability: 'In Stock',
      features: ['Customizable RGB lighting', 'Mechanical switches', 'Durable build'],
      additionalInfo: 'Features programmable keys and customizable lighting effects. Designed for gamers with responsive mechanical switches and a robust build quality.',
      image: '/src/assets/images/10.png' // Correct image path
    }
  ];

  // Handle product selection
  const handleSelectProduct = (event) => {
    const selectedName = event.target.value;
    setSelectedProductName(selectedName);
    const selectedProduct = products.find(product => product.name === selectedName);
    setProductDetail(selectedProduct || null);
  };

  // Handle adding to cart
  const handleAddToCart = () => {
    if (productDetail) {
      // Retrieve cart from local storage and update
      const storedCart = JSON.parse(localStorage.getItem('cart')) || [];
      storedCart.push(productDetail);
      localStorage.setItem('cart', JSON.stringify(storedCart));
      alert(`${productDetail.name} has been added to your cart!`);
      navigate('/cart');  // Redirect to the Cart page
    }
  };

  return (
    <div className="bg-gray-100 min-h-screen py-16 px-4">
      <div className="container mx-auto max-w-7xl bg-white rounded-lg shadow-xl p-8">
        <div className="mb-8">
          <label htmlFor="productSelect" className="block text-lg font-semibold mb-2 text-gray-800">
            Select a Product
          </label>
          <select
            id="productSelect"
            value={selectedProductName}
            onChange={handleSelectProduct}
            className="bg-white border border-gray-300 rounded-lg p-3 text-gray-700 w-full focus:ring-2 focus:ring-blue-500"
          >
            <option value="">Select a product</option>
            {products.map((product) => (
              <option key={product.id} value={product.name}>
                {product.name}
              </option>
            ))}
          </select>
        </div>

        {productDetail && (
          <div className="bg-white p-8 rounded-lg shadow-lg border border-gray-300 space-y-6">
            <div className="flex flex-col lg:flex-row gap-6 lg:gap-12">
              <div className="lg:w-1/2 flex justify-center">
                <img
                  src={productDetail.image}
                  alt={productDetail.name}
                  className="w-full max-w-md object-cover rounded-lg shadow-md"
                />
              </div>
              <div className="lg:w-1/2">
                <h1 className="text-4xl font-bold mb-4 text-gray-900">{productDetail.name}</h1>
                <p className="text-lg mb-4 text-gray-700"><strong>Description:</strong> {productDetail.description}</p>
                <p className="text-lg mb-4 text-gray-700"><strong>Price:</strong> ${parseFloat(productDetail.price).toFixed(2)}</p>
                <p className="text-lg mb-4 text-gray-700"><strong>Brand:</strong> {productDetail.brand}</p>
                <p className="text-lg mb-4 text-gray-700"><strong>Warranty:</strong> {productDetail.warranty}</p>
                <p className="text-lg mb-4 text-gray-700"><strong>Category:</strong> {productDetail.category}</p>
                <p className="text-lg mb-4 text-gray-700"><strong>Availability:</strong> {productDetail.availability}</p>
                <button
                  onClick={handleAddToCart}
                  className="mt-6 bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition duration-300"
                >
                  Add to Cart
                </button>
              </div>
            </div>
            <div className="bg-gray-50 border-t border-gray-200 pt-4">
              <h2 className="text-2xl font-semibold mb-4 text-gray-800">Key Features</h2>
              <ul className="list-disc list-inside text-gray-700 space-y-2">
                {productDetail.features.map((feature, index) => (
                  <li key={index} className="text-lg">{feature}</li>
                ))}
              </ul>
            </div>
            <div className="bg-gray-50 border-t border-gray-200 pt-4">
              <h2 className="text-2xl font-semibold mb-4 text-gray-800">Additional Information</h2>
              <p className="text-lg text-gray-700">{productDetail.additionalInfo}</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductDetailPage;
