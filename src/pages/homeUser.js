import React from 'react';

const HomepageUser = () => {
  return (
    <div className="w-full min-h-screen bg-gray-100 p-6 flex flex-col items-center">
      <header className="w-full bg-blue-600 text-white p-4 text-center">
        <h1 className="text-2xl font-bold">Welcome, User!</h1>
      </header>
      <main className="w-full max-w-4xl mt-8">
        <h2 className="text-xl font-semibold mb-4">Your Dashboard</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-white p-4 rounded shadow">
            <h3 className="font-bold text-lg">Profile</h3>
            <p className="text-gray-600">Manage your profile settings.</p>
          </div>
          <div className="bg-white p-4 rounded shadow">
            <h3 className="font-bold text-lg">Activities</h3>
            <p className="text-gray-600">View recent activities.</p>
          </div>
        </div>
      </main>
      <footer className="w-full mt-auto bg-gray-200 p-4 text-center">
        <p className="text-sm text-gray-600">© 2024 Your App</p>
      </footer>
    </div>
  );
};

export default HomepageUser;
