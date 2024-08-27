import React from 'react';

const AdminPage = () => {
  return (
    <div className="container mx-auto py-16 px-4">
      <h2 className="text-4xl font-extrabold text-center mb-12 text-gray-900">Admin Panel</h2>

      <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {/* View Reports */}
        <div className="bg-green-50 p-6 rounded-lg border border-green-200 shadow-lg hover:bg-green-100 transition duration-300">
          <h3 className="text-2xl font-bold mb-4 text-gray-800">Reports</h3>
          <p className="text-gray-700">Here you can view various reports including sales data, user activity, and system performance metrics. Generate customized reports to analyze trends and make data-driven decisions.</p>
        </div>

        {/* Manage Users */}
        <div className="bg-blue-50 p-6 rounded-lg border border-blue-200 shadow-lg hover:bg-blue-100 transition duration-300">
          <h3 className="text-2xl font-bold mb-4 text-gray-800">Manage Users</h3>
          <p className="text-gray-700">Here you can view, add, edit, and remove users from the system. Assign roles and permissions to users and manage user access levels.</p>
        </div>

        {/* Configure Settings */}
        <div className="bg-yellow-50 p-6 rounded-lg border border-yellow-200 shadow-lg hover:bg-yellow-100 transition duration-300">
          <h3 className="text-2xl font-bold mb-4 text-gray-800">Settings</h3>
          <p className="text-gray-700">Here you can configure system settings, including application preferences, notification settings, and more. Adjust global settings to tailor the application to your needs and preferences.</p>
        </div>

        {/* View System Logs */}
        <div className="bg-red-50 p-6 rounded-lg border border-red-200 shadow-lg hover:bg-red-100 transition duration-300">
          <h3 className="text-2xl font-bold mb-4 text-gray-800">System Logs</h3>
          <p className="text-gray-700">Here you can view system logs to monitor application activity and troubleshoot issues. Access detailed logs for debugging and maintaining system health.</p>
        </div>
      </div>

      {/* Admin Summary Section */}
      <div className="mt-16 p-8 bg-gray-50 rounded-lg shadow-lg">
        <h3 className="text-2xl font-bold mb-6 text-gray-800">Admin Summary</h3>
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          <div className="p-4 bg-white rounded-lg border border-gray-200 shadow-md">
            <h4 className="text-lg font-semibold text-gray-700 mb-2">Total Users</h4>
            <p className="text-3xl font-bold text-gray-900">1,234</p>
          </div>
          <div className="p-4 bg-white rounded-lg border border-gray-200 shadow-md">
            <h4 className="text-lg font-semibold text-gray-700 mb-2">Active Sessions</h4>
            <p className="text-3xl font-bold text-gray-900">567</p>
          </div>
          <div className="p-4 bg-white rounded-lg border border-gray-200 shadow-md">
            <h4 className="text-lg font-semibold text-gray-700 mb-2">Pending Issues</h4>
            <p className="text-3xl font-bold text-gray-900">42</p>
          </div>
          <div className="p-4 bg-white rounded-lg border border-gray-200 shadow-md">
            <h4 className="text-lg font-semibold text-gray-700 mb-2">System Alerts</h4>
            <p className="text-3xl font-bold text-gray-900">8</p>
          </div>
        </div>
      </div>

      {/* Activity Logs Section */}
      <div className="mt-16 p-8 bg-gray-50 rounded-lg shadow-lg">
        <h3 className="text-2xl font-bold mb-6 text-gray-800">Recent Activity Logs</h3>
        <ul className="space-y-4">
          <li className="bg-white p-4 rounded-lg border border-gray-200 shadow-md hover:bg-gray-50 transition duration-300">
            <p className="text-gray-800"><span className="font-semibold">User123</span> logged in at 10:15 AM</p>
          </li>
          <li className="bg-white p-4 rounded-lg border border-gray-200 shadow-md hover:bg-gray-50 transition duration-300">
            <p className="text-gray-800"><span className="font-semibold">User456</span> updated their profile at 11:00 AM</p>
          </li>
          <li className="bg-white p-4 rounded-lg border border-gray-200 shadow-md hover:bg-gray-50 transition duration-300">
            <p className="text-gray-800"><span className="font-semibold">Admin01</span> changed site settings at 11:30 AM</p>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default AdminPage;
