import React from 'react';
import { useSelector } from 'react-redux';
import DataBuku from '../components/tabel/databuku';
import DataMajalah from '../components/tabel/dataMajalah';
import DataJurnal from '../components/tabel/dataJurnal';
import { FaSmile } from 'react-icons/fa';
import ActionBar from '../components/actionBar';

const Content = () => {
  const { selectedMenu } = useSelector((state) => state.ui);

  const handleSearch = (query) => {
    console.log(`Searching for: ${query}`);
  };

  const handleNewReport = () => {
    console.log('New Report clicked');
  };

  const handleExport = () => {
    console.log('Export clicked');
  };

  const renderContent = () => {
    switch (selectedMenu) {
      case 'databuku':
        return (
          <div className="flex flex-col h-full bg-white rounded-md shadow-md p-4">
            <h2 className="text-2xl font-semibold mb-4">Data Buku</h2>
            {/* ActionBar berada di bawah judul */}
            <ActionBar onSearch={handleSearch} onNewReport={handleNewReport} onExport={handleExport} searchPlaceholder="Search for books..." />
            {/* Tabel Data Buku yang dapat di-scroll */}
            <div className="overflow-auto bg-gray-50 p-4 rounded-md shadow-sm">
              <DataBuku />
            </div>
          </div>
        );
      case 'dataMajalah':
        return (
          <div className="flex flex-col h-full">
            <ActionBar onSearch={handleSearch} onNewReport={handleNewReport} onExport={handleExport} searchPlaceholder="Search for magazines..." />
            <h2 className="text-2xl font-semibold mb-4">Data Majalah</h2>
            <div className="flex-1 overflow-auto">
              <DataMajalah />
            </div>
          </div>
        );
      case 'dataJurnal':
        return (
          <div className="flex flex-col h-full">
            <ActionBar onSearch={handleSearch} onNewReport={handleNewReport} onExport={handleExport} searchPlaceholder="Search for journals..." />
            <h2 className="text-2xl font-semibold mb-4">Data Jurnal</h2>
            <div className="flex-1 overflow-auto">
              <DataJurnal />
            </div>
          </div>
        );
      case 'dataAnggota':
        return (
          <div className="flex flex-col h-full">
            <ActionBar onSearch={handleSearch} onNewReport={handleNewReport} onExport={handleExport} searchPlaceholder="Search for members..." />
            <h2 className="text-2xl font-semibold mb-4">Data Anggota</h2>
          </div>
        );
      case 'transaksi':
        return (
          <div className="flex flex-col h-full">
            <ActionBar onSearch={handleSearch} onNewReport={handleNewReport} onExport={handleExport} searchPlaceholder="Search for transactions..." />
            <h2 className="text-2xl font-semibold mb-4">Transaksi</h2>
          </div>
        );
      case 'laporan':
        return (
          <div className="flex flex-col h-full">
            <ActionBar onSearch={handleSearch} onNewReport={handleNewReport} onExport={handleExport} searchPlaceholder="Search for reports..." />
            <h2 className="text-2xl font-semibold mb-4">Laporan</h2>
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
      {' '}
      {/* Sesuaikan margin untuk memberi ruang pada drawer */}
      <div className="h-full flex flex-col bg-white overflow-auto">
        <div className="flex-1 overflow-auto">{renderContent()}</div>
      </div>
    </div>
  );
};

export default Content;
