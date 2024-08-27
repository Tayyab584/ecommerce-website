import React from 'react';

const OrderHistory = () => {
  // Retrieve order history from local storage
  const orders = JSON.parse(localStorage.getItem('orderHistory')) || [];

  if (orders.length === 0) {
    return <p className="text-center text-gray-500">You have no order history.</p>;
  }

  return (
    <div className="container mx-auto py-16">
      <h2 className="text-3xl font-bold mb-8">Order History</h2>
      <div>
        {orders.map(order => (
          <div key={order.id} className="bg-white shadow-md rounded-lg mb-4 p-4">
            <h3 className="text-lg font-semibold">Order ID: {order.id}</h3>
            <p><strong>Name:</strong> {order.name}</p>
            <p><strong>Email:</strong> {order.email}</p>
            <p><strong>Address:</strong> {order.address}</p>
            <p><strong>Payment Method:</strong> {order.paymentMethod}</p>
            {/* Optionally display other order details */}
          </div>
        ))}
      </div>
    </div>
  );
};

export default OrderHistory;
