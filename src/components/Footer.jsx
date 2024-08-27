import React from 'react';

const Footer = () => (
  <footer className="bg-gradient-to-r from-teal-500 via-blue-500 to-purple-600 text-white py-4">
    <div className="container mx-auto text-center">
      <p className="text-sm">
        &copy; 2024 My E-Commerce Platform. All rights reserved.
      </p>
      <div className="mt-2">
        <a
          href="/privacy-policy"
          className="text-white hover:text-yellow-300 transition duration-300 mx-2"
        >
          Privacy Policy
        </a>
        |
        <a
          href="/terms-of-service"
          className="text-white hover:text-yellow-300 transition duration-300 mx-2"
        >
          Terms of Service
        </a>
      </div>
    </div>
  </footer>
);

export default Footer;
