import React from 'react';
import { Outlet } from 'react-router-dom';

const Layout = () => {
  return (
    <div className="bg-black text-white min-h-screen flex flex-col">
      {/* Header */}
      <header className="p-4 bg-gray-800">
        <h1 className="text-3xl">Book Management</h1>
      </header>

      {/* Main content */}
      <main className="flex-1 p-4">
        {/* Outlet is where the nested routes will render */}
        <Outlet />
      </main>

      {/* Footer */}
      <footer className="p-4 bg-gray-800 text-center">
        <p>© 2024 Book Management System</p>
      </footer>
    </div>
  );
};

export default Layout;
