import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const LoginPage = ({ handleLogin }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false); // State for toggling password visibility
  const [error, setError] = useState(''); // State for storing error messages
  const navigate = useNavigate();

  const handleLoginClick = () => {
    // Example credentials
    if ((username === 'tayyab' && password === '12345678') || 
        (username === 'admin' && password === 'admin123')) {
      handleLogin();
      navigate('/home'); // Navigate to home after login
    } else {
      // Set error message
      setError('Invalid username or password');
    }
  };

  const handleContinueWithoutLogin = () => {
    handleLogin(); // Optionally set logged-in state to true
    navigate('/home'); // Navigate to home without login
  };

  return (
    <div 
      className="flex items-center justify-center min-h-screen bg-cover bg-center"
      style={{ backgroundImage: `url('/src/assets/images/login.png')` }} // Ensure this path is correct
    >
      <div className="w-full max-w-md p-8 bg-white shadow-2xl rounded-lg border border-gray-300 bg-opacity-90 mx-4 sm:mx-6 lg:mx-8">
        <h1 className="text-4xl font-extrabold text-gray-800 mb-8 text-center">Login</h1>
        <div className="space-y-6">
          <div className="relative">
            <input
              type="text"
              placeholder="Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className={`w-full p-4 border ${error ? 'border-red-500' : 'border-gray-300'} rounded-lg focus:outline-none focus:ring-4 focus:ring-blue-300 text-lg shadow-sm`}
              aria-label="Username"
            />
            {error && (
              <p className="text-red-500 text-sm mt-2">{error}</p>
            )}
          </div>
          <div className="relative">
            <input
              type={showPassword ? 'text' : 'password'}
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className={`w-full p-4 border ${error ? 'border-red-500' : 'border-gray-300'} rounded-lg focus:outline-none focus:ring-4 focus:ring-blue-300 text-lg shadow-sm`}
              aria-label="Password"
            />
            {/* Add password visibility toggle icon if needed */}
            <button
              type="button"
              className="absolute inset-y-0 right-0 flex items-center pr-3"
              onClick={() => setShowPassword(!showPassword)}
            >
              <svg className="w-5 h-5 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12c0 2.21-1.79 4-4 4s-4-1.79-4-4 1.79-4 4-4 4 1.79 4 4z"></path>
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2.5 12c1.5-2.5 4-4 7.5-4s6 1.5 7.5 4-4 4-7.5 4-6-1.5-7.5-4z"></path>
              </svg>
            </button>
          </div>
          <div className="flex flex-col gap-6">
            <button
              onClick={handleLoginClick}
              className="w-full bg-blue-600 text-white py-3 px-4 rounded-lg shadow-md hover:bg-blue-700 transition duration-300 text-lg font-semibold focus:outline-none focus:ring-4 focus:ring-blue-300"
            >
              Login
            </button>
            <button
              onClick={handleContinueWithoutLogin}
              className="w-full bg-gray-600 text-white py-3 px-4 rounded-lg shadow-md hover:bg-gray-700 transition duration-300 text-lg font-semibold focus:outline-none focus:ring-4 focus:ring-gray-300"
            >
              Continue without Login
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
