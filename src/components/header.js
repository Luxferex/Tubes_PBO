// src/components/Header/Header.js
import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom'; // Jika menggunakan React Router

const Header = () => {
  // Mengambil data user dari Redux store
  const user = useSelector((state) => state.user.user);

  return (
    <header className="flex justify-between items-center p-3 bg-blue-900 text-white">
      {/* Logo dan Teks */}
      <div className="flex items-center space-x-4">
        {/* Logo Gambar */}
        <img src="/images/logo.png" alt="Logo" className="w-12 h-12" />
        {/* Teks "ERAUTAMA" */}
        <div className="text-xl font-bold">PBO - Sistem Informasi Perpustakaan</div>
      </div>

      {/* Menu dan User Info */}
      <div className="flex items-center space-x-6">
        {/* Menu */}

        {/* User Profile */}
        <div className="flex items-center space-x-3">
          <img src={user.profilePicture} alt="User Profile" className="w-10 h-10 rounded-full" />
        </div>
      </div>
    </header>
  );
};

export default Header;
