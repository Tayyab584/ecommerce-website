import React from 'react';
import { useSelector } from 'react-redux';
import ProductCard from './ProductCard'; // Ensure you have this component created

const ProductSelector = () => {
  // Use useSelector to get products from the Redux store
  const products = useSelector((state) => state.products.items);

  if (products.length === 0) {
    return <p className="text-center text-gray-500">No products available.</p>;
  }

  return (
    <div className="container mx-auto py-16">
      <h2 className="text-3xl font-bold mb-8">Our Products</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {products.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default ProductSelector;
