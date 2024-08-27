import React from 'react';

const OrderHistoryPage = () => {
  // Retrieve order history from local storage
  const orders = JSON.parse(localStorage.getItem('orderHistory')) || [];

  if (orders.length === 0) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-gray-200 to-gray-400">
        <p className="text-center text-gray-600 text-xl font-medium">You have no order history.</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-blue-100 to-blue-200 py-16 px-4">
      <div className="container mx-auto max-w-4xl bg-white shadow-lg rounded-lg p-8 border border-gray-200">
        <h2 className="text-4xl font-extrabold mb-12 text-gray-900 text-center">Order History</h2>
        <div className="space-y-8">
          {orders.map(order => (
            <div key={order.id} className="bg-white shadow-md rounded-lg p-6 border border-gray-200 bg-gradient-to-r from-blue-50 to-blue-100 hover:bg-gradient-to-r hover:from-blue-100 hover:to-blue-200 transition duration-300 ease-in-out">
              <div className="border-b border-gray-300 pb-4 mb-4">
                <h3 className="text-2xl font-semibold text-blue-800 mb-2">Order ID: {order.id}</h3>
                {order.timestamp && (
                  <p className="text-gray-600 text-sm">Placed on: {new Date(order.timestamp).toLocaleDateString()}</p>
                )}
              </div>
              <div className="space-y-4">
                <p className="text-gray-800">
                  <strong className="font-medium text-blue-700">Name:</strong> {order.name}
                </p>
                <p className="text-gray-800">
                  <strong className="font-medium text-blue-700">Email:</strong> {order.email}
                </p>
                <p className="text-gray-800">
                  <strong className="font-medium text-blue-700">Address:</strong> {order.address}
                </p>
                <p className="text-gray-800">
                  <strong className="font-medium text-blue-700">Payment Method:</strong> {order.paymentMethod}
                </p>
                {/* Optionally display other order details */}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default OrderHistoryPage;
