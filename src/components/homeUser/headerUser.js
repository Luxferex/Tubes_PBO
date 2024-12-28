import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom'; // Menambahkan useNavigate
import { logout } from '../../state/userSlice'; // Mengimpor logout dari userSlice

const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate(); // Hook untuk navigasi
  const user = useSelector((state) => state.user.user);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const handleLogout = () => {
    dispatch(logout()); // Menjalankan action untuk logout (clear user data)
    navigate('/'); // Navigasi ke homepage setelah logout
  };

  return (
    <header className="flex justify-between items-center p-3 bg-blue-900 text-white fixed top-0 left-0 right-0 z-10 h-20">
      {/* Logo and Text */}
      <div className="flex items-center space-x-4">
        {/* Logo Gambar */}
        <img src="/images/logo.png" alt="Logo" className="w-12 h-12" />
        {/* Teks "ERAUTAMA" */}
        <div className="text-xl font-bold">PBO - Sistem Informasi Perpustakaan</div>
      </div>

      {/* Menu dan User Info */}
      <div className="flex items-center space-x-6">
        {/* User Profile */}
        <div className="relative">
          <img
            src={user?.profilePicture || '/images/people.png'}
            alt="User Profile"
            className="w-10 h-10 rounded-full cursor-pointer"
            onClick={() => setDropdownOpen(!dropdownOpen)} // Toggle dropdown
          />
          {/* Dropdown Menu */}
          {dropdownOpen && (
            <div className="absolute right-0 mt-2 w-40 bg-white text-gray-800 rounded-lg shadow-lg z-20">
              <Link to="/profile" className="block px-4 py-2 text-sm hover:bg-gray-200">
                Profile
              </Link>
              <button onClick={handleLogout} className="block px-4 py-2 text-sm text-left w-full hover:bg-gray-200">
                Logout
              </button>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
