import React from 'react';
import { useSelector } from 'react-redux';
import DataBuku from '../components/tabel/databuku'; // Import komponen DataBuku
import DataMajalah from '../components/tabel/dataMajalah'; // Import komponen DataMajalah
import DataJurnal from '../components/tabel/dataJurnal'; // Import komponen DataJurnal
import { FaSmile } from 'react-icons/fa';

const Content = () => {
  const { selectedMenu } = useSelector((state) => state.ui); // Ambil selectedMenu dari Redux

  const renderContent = () => {
    switch (selectedMenu) {
      case 'databuku':
        return (
          <div className="flex flex-col h-full">
            <h2 className="text-2xl font-semibold mb-4">Data Buku</h2>
            <div className="flex-1 overflow-auto">
              <DataBuku /> {/* Pastikan DataBuku memiliki pengaturan tinggi yang benar */}
            </div>
          </div>
        );
      case 'dataMajalah':
        return (
          <div className="flex flex-col h-full">
            <h2 className="text-2xl font-semibold mb-4">Data Majalah</h2>
            <div className="flex-1 overflow-auto">
              <DataMajalah /> {/* Pastikan DataMajalah memiliki pengaturan tinggi yang benar */}
            </div>
          </div>
        );
      case 'dataJurnal':
        return (
          <div className="flex flex-col h-full">
            <h2 className="text-2xl font-semibold mb-4">Data Jurnal</h2>
            <div className="flex-1 overflow-auto">
              <DataJurnal /> {/* Pastikan DataJurnal memiliki pengaturan tinggi yang benar */}
            </div>
          </div>
        );
      case 'dataAnggota':
        return <h2 className="text-2xl font-semibold mb-4">Data Anggota</h2>;
      case 'transaksi':
        return <h2 className="text-2xl font-semibold mb-4">Transaksi</h2>;
      case 'laporan':
        return <h2 className="text-2xl font-semibold mb-4">Laporan</h2>;
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
      <div className="h-full flex flex-col bg-white">{renderContent()}</div>
    </div>
  );
};

export default Content;
