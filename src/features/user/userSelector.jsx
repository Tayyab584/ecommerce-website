import React from 'react';
import { useSelector } from 'react-redux';

const UserSelector = () => {
  // Use useSelector to get user information from the Redux store
  const user = useSelector((state) => state.user.userInfo);

  if (!user) {
    return <p className="text-center text-gray-500">Please log in to see your profile.</p>;
  }

  return (
    <div className="container mx-auto py-16">
      <h2 className="text-3xl font-bold mb-8">User Profile</h2>
      <div className="bg-white shadow-md rounded-lg p-6">
        <h3 className="text-xl font-bold mb-4">Hello, {user.name}!</h3>
        <p className="text-lg mb-2"><strong>Email:</strong> {user.email}</p>
        <p className="text-lg mb-2"><strong>Address:</strong> {user.address}</p>
        {/* Add more user details as needed */}
      </div>
    </div>
  );
};

export default UserSelector;
