// src/components/Drawer.js
import React from 'react';
import { FaBook, FaUsers, FaFolder } from 'react-icons/fa'; // Import ikon
import { useDispatch, useSelector } from 'react-redux';
import { setSelectedMenu, toggleSubMenu } from '../../state/uiSlice';

const Drawer = () => {
  const dispatch = useDispatch();
  const { isSubMenuOpen } = useSelector((state) => state.ui);
  const { user, isProfileComplete } = useSelector((state) => state.user);

  console.log('Redux state user: ', user); // Debug user state

  const handleMenuClick = (menu) => {
    dispatch(setSelectedMenu(menu));
  };

  const handleSubMenuToggle = () => {
    dispatch(toggleSubMenu());
  };

  return (
    <div className="bg-gray-800 text-white p-4 fixed h-full w-64 overflow-y-auto pt-20">
      {/* Bagian User Info */}
      <div className="flex items-center space-x-4 mb-6">
        <img src={user?.profilePicture || '/images/people.png'} alt="User" className="w-16 h-16 rounded-full" />
        <div>
          <div className="font-semibold">{user ? user.name : 'Username'}</div>
          <div className="text-sm text-gray-400">
            {user?.status === 'Aktif' ? <span className="bg-green-500 text-white px-2 py-1 rounded-full text-xs">Aktif</span> : <span className="bg-yellow-500 text-white px-2 py-1 rounded-full text-xs">Pending</span>}
          </div>
        </div>
      </div>

      {/* Peringatan jika profil belum lengkap */}
      {!isProfileComplete && (
        <div className="text-red-500 text-sm mb-4 px-4 py-2 bg-red-100 rounded">
          <p>Profil Anda belum lengkap. Silakan lengkapi data profil untuk meminjam buku.</p>
        </div>
      )}

      {/* Menu */}
      <div className="space-y-4 pt-4">
        <button className="w-full text-left text-gray-200 hover:bg-gray-700 p-2 rounded flex items-center justify-start" onClick={() => handleMenuClick('beranda')}>
          <FaBook className="mr-2" />
          Beranda
        </button>
        <button className="w-full text-left text-gray-200 hover:bg-gray-700 p-2 rounded flex items-center justify-start" onClick={handleSubMenuToggle}>
          <FaUsers className="mr-2" />
          Daftar Buku
          <span className="ml-auto">{isSubMenuOpen ? '▲' : '▼'}</span>
        </button>
        {isSubMenuOpen && (
          <div className="ml-4 space-y-2">
            <button className="w-full text-left text-gray-200 hover:bg-gray-700 p-2 rounded" onClick={() => handleMenuClick('databuku')}>
              Buku
            </button>
            <button className="w-full text-left text-gray-200 hover:bg-gray-700 p-2 rounded" onClick={() => handleMenuClick('dataMajalah')}>
              Majalah
            </button>
            <button className="w-full text-left text-gray-200 hover:bg-gray-700 p-2 rounded" onClick={() => handleMenuClick('dataJurnal')}>
              Jurnal
            </button>
          </div>
        )}
        <button className="w-full text-left text-gray-200 hover:bg-gray-700 p-2 rounded flex items-center justify-start" onClick={() => handleMenuClick('keranjang')}>
          <FaFolder className="mr-2" />
          Keranjang
        </button>
      </div>
    </div>
  );
};

export default Drawer;
