import React from 'react';
import { FaBook, FaUsers, FaFileAlt, FaFolder } from 'react-icons/fa'; // Import ikon
import { useDispatch, useSelector } from 'react-redux';
import { setSelectedMenu, toggleSubMenu } from '../../state/uiSlice'; // Pastikan Anda mengimpor action Redux

const Drawer = () => {
  const dispatch = useDispatch();
  const { isSubMenuOpen } = useSelector((state) => state.ui);

  const handleMenuClick = (menu) => {
    dispatch(setSelectedMenu(menu)); // Pastikan ini memperbarui selectedMenu di Redux
  };

  const handleSubMenuToggle = () => {
    dispatch(toggleSubMenu()); // Toggle sub-menu
  };

  return (
    <div className="bg-gray-800 text-white p-4 fixed h-full w-64 overflow-y-auto pt-20">
      <div className="flex items-center space-x-4 mb">
        {/* Foto Profil */}
        <img src="/images/people.png" alt="User" className="w-16 h-16 rounded-full" />
        <div>
          <div className="font-semibold">Siuuuu</div>
          <div className="text-sm text-gray-400">Administrator</div>
        </div>
      </div>

      {/* Menu */}
      <div className="space-y-4 pt-8">
        {/* Data Buku */}
        <button className="w-full text-left text-gray-200 hover:bg-gray-700 p-2 rounded flex items-center justify-start" onClick={handleSubMenuToggle}>
          <FaBook className="mr-2" />
          Data Buku
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

        {/* Data Anggota */}
        <button className="w-full text-left text-gray-200 hover:bg-gray-700 p-2 rounded flex items-center justify-start" onClick={() => handleMenuClick('dataAnggota')}>
          <FaUsers className="mr-2" />
          Data Anggota
        </button>

        {/* Transaksi */}
        <button className="w-full text-left text-gray-200 hover:bg-gray-700 p-2 rounded flex items-center justify-start" onClick={() => handleMenuClick('transaksi')}>
          <FaFolder className="mr-2" />
          Transaksi
        </button>

        {/* Laporan */}
        <button className="w-full text-left text-gray-200 hover:bg-gray-700 p-2 rounded flex items-center justify-start" onClick={() => handleMenuClick('laporan')}>
          <FaFileAlt className="mr-2" />
          Laporan
        </button>
      </div>
    </div>
  );
};

export default Drawer;
