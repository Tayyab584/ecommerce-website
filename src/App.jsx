import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/Home';
import Products from './components/Products';
import ProductDetailPage from './components/ProductDetailPage';
import CheckoutPage from './components/CheckoutPage';
import OrderHistoryPage from './components/OrderHistoryPage';
import AdminPage from './components/AdminPage';
import Cart from './components/Cart';
import LoginPage from './components/LoginPage';

function App() {
  // State to manage if the user is logged in
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // Function to handle login, which sets the logged-in state to true
  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  // Function to handle logout, which sets the logged-in state to false
  const handleLogout = () => {
    setIsLoggedIn(false);
  };

  return (
    <Router>
      <Header isLoggedIn={isLoggedIn} handleLogout={handleLogout} /> {/* Pass isLoggedIn and handleLogout to Header */}
      <Routes>
        {/* Always show login page initially */}
        <Route 
          path="/login" 
          element={<LoginPage handleLogin={handleLogin} />} 
        />
        
        {/* Redirect to login page if not logged in, otherwise show the appropriate component */}
        <Route 
          path="/home" 
          element={isLoggedIn ? <Home /> : <Navigate to="/login" />} 
        />
        <Route 
          path="/products" 
          element={isLoggedIn ? <Products /> : <Navigate to="/login" />} 
        />
        <Route 
          path="/productDetailPage" 
          element={isLoggedIn ? <ProductDetailPage /> : <Navigate to="/login" />} 
        />
        <Route 
          path="/checkout" 
          element={isLoggedIn ? <CheckoutPage /> : <Navigate to="/login" />} 
        />
        <Route 
          path="/order-history" 
          element={isLoggedIn ? <OrderHistoryPage /> : <Navigate to="/login" />} 
        />
        <Route 
          path="/admin" 
          element={isLoggedIn ? <AdminPage /> : <Navigate to="/login" />} 
        />
        <Route 
          path="/cart" 
          element={isLoggedIn ? <Cart /> : <Navigate to="/login" />} 
        />
        {/* Redirect from root to login page */}
        <Route 
          path="/" 
          element={<Navigate to="/login" />} 
        />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
