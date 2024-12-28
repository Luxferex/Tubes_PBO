import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import Card from '../homeUser/card'; // Komponen Card.js
import { FaSmile } from 'react-icons/fa';

const Content = () => {
  const { selectedMenu } = useSelector((state) => state.ui);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [selectedMenu]);

  const renderContent = () => {
    switch (selectedMenu) {
      case 'beranda':
        return (
          <div className="flex flex-col h-full bg-white rounded-md shadow-md p-8">
            <h2 className="text-4xl text-orange-600 font-bold mb-4 pb-10">Beranda</h2>
            <p className="text-gray-600">Konten untuk beranda akan ditampilkan di sini.</p>
          </div>
        );
      case 'cardBuku':
      case 'databuku':
      case 'dataMajalah':
      case 'dataJurnal':
        return (
          <div className="flex flex-col h-full bg-white rounded-md shadow-md p-8">
            <h2 className="text-4xl text-orange-600 font-bold mb-4 pb-10">
              {selectedMenu === 'databuku' && 'Daftar Buku'}
              {selectedMenu === 'dataMajalah' && 'Daftar Majalah'}
              {selectedMenu === 'dataJurnal' && 'Daftar Jurnal'}
              {selectedMenu === 'cardBuku' && 'Daftar Koleksi'}
            </h2>
            <Card />
          </div>
        );
      case 'keranjang':
        return (
          <div className="flex flex-col h-full bg-white rounded-md shadow-md p-8">
            <h2 className="text-4xl text-orange-600 font-bold mb-4 pb-10">Keranjang</h2>
            <p className="text-gray-600">Keranjang Anda kosong. Tambahkan item dari daftar koleksi.</p>
          </div>
        );
      default:
        return (
          <div className="flex flex-col items-center justify-center h-full">
            <FaSmile className="text-blue-500 text-6xl mb-4" />
            <h2 className="text-4xl font-bold mb-2">Selamat Datang</h2>
            <p className="text-lg text-gray-600">di Sistem Informasi Perpustakaan</p>
          </div>
        );
    }
  };

  return (
    <div className="flex-1 p-4" style={{ marginLeft: '280px' }}>
      <div className="h-full flex flex-col bg-white overflow-auto">
        <div className="flex-1 overflow-auto">{renderContent()}</div>
      </div>
    </div>
  );
};

export default Content;
