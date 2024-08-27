import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => (
  <header className="bg-gradient-to-r from-teal-500 via-blue-500 to-purple-600 text-white p-4">
    <div className="container mx-auto flex justify-between items-center">
      <Link to="/" className="text-2xl font-extrabold">My E-Commerce</Link>
      <nav>
        <Link
          to="/products"
          className="mx-4 text-lg hover:text-yellow-300 transition duration-300"
        >
          Products
        </Link>
        <Link
          to="/ProductDetailPage"
          className="mx-4 text-lg hover:text-yellow-300 transition duration-300"
        >
          Product Details
        </Link>
        <Link
          to="/order-history"
          className="mx-4 text-lg hover:text-yellow-300 transition duration-300"
        >
          Order History
        </Link>
        <Link
          to="/cart"
          className="mx-4 text-lg hover:text-yellow-300 transition duration-300"
        >
          Cart
        </Link>
        <Link
          to="/admin"
          className="mx-4 text-lg hover:text-yellow-300 transition duration-300"
        >
          Admin
        </Link>
      </nav>
    </div>
  </header>
);

export default Header;
