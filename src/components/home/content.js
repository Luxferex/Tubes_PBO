import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import DataBuku from '../tabel/databuku';
import DataMajalah from '../tabel/dataMajalah';
import DataJurnal from '../tabel/dataJurnal';
import DataAnggota from '../tabel/dataAnggota';
import { FaSmile } from 'react-icons/fa';
import ActionBar from '../home/actionBar';

const Content = () => {
  const { selectedMenu } = useSelector((state) => state.ui);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [selectedMenu]);

  const handleSearch = (query) => {
    console.log(`Searching for: ${query}`);
  };

  const handleNewReport = (dataType) => {
    console.log(`New Report clicked for: ${dataType}`);
  };

  const handleExport = () => {
    console.log('Export clicked');
  };

  const renderContent = () => {
    switch (selectedMenu) {
      case 'databuku':
        return (
          <div className="flex flex-col h-full bg-white rounded-md shadow-md p-8">
            <h2 className="text-4xl text-orange-600 font-bold mb-4 pb-10">Data Buku</h2>
            <ActionBar
              onSearch={handleSearch}
              onNewReport={() => handleNewReport('buku')} // Pass 'buku' to ActionBar
              onExport={handleExport}
              searchPlaceholder="Search for books..."
              dataType="buku" // Pass the data type here
            />
            <div className="overflow-auto bg-gray-50 p-4 rounded-md shadow-sm">
              <DataBuku />
            </div>
          </div>
        );
      case 'dataMajalah':
        return (
          <div className="flex flex-col h-full bg-white rounded-md shadow-md p-8">
            <h2 className="text-4xl text-orange-600 font-bold mb-4 pb-10">Data Majalah</h2>
            <ActionBar onSearch={handleSearch} onNewReport={() => handleNewReport('majalah')} onExport={handleExport} searchPlaceholder="Search for magazines..." dataType="majalah" />
            <div className="overflow-auto bg-gray-50 p-4 rounded-md shadow-sm">
              <DataMajalah />
            </div>
          </div>
        );
      case 'dataJurnal':
        return (
          <div className="flex flex-col h-full bg-white rounded-md shadow-md p-8">
            <h2 className="text-4xl text-orange-600 font-bold mb-4 pb-10">Data Jurnal</h2>
            <ActionBar onSearch={handleSearch} onNewReport={() => handleNewReport('jurnal')} onExport={handleExport} searchPlaceholder="Search for journals..." dataType="jurnal" />
            <div className="overflow-auto bg-gray-50 p-4 rounded-md shadow-sm">
              <DataJurnal />
            </div>
          </div>
        );
      case 'dataAnggota':
        return (
          <div className="flex flex-col h-full bg-white rounded-md shadow-md p-8">
            <h2 className="text-4xl text-orange-600 font-bold mb-4 pb-10">Data Anggota</h2>
            <ActionBar onSearch={handleSearch} onNewReport={() => handleNewReport('anggota')} onExport={handleExport} searchPlaceholder="Search for Anggota..." dataType="Anggota" />
            <div className="overflow-auto bg-gray-50 p-4 rounded-md shadow-sm">
              <DataAnggota />
            </div>
          </div>
        );
      case 'transaksi':
        return (
          <div className="flex flex-col h-full">
            <ActionBar
              onSearch={handleSearch}
              onNewReport={() => handleNewReport('transaksi')} // For 'transaksi'
              onExport={handleExport}
              searchPlaceholder="Search for transactions..."
              dataType="transaksi" // Pass the data type here
            />
            <h2 className="text-2xl font-semibold mb-4">Transaksi</h2>
          </div>
        );
      case 'laporan':
        return (
          <div className="flex flex-col h-full">
            <ActionBar
              onSearch={handleSearch}
              onNewReport={() => handleNewReport('laporan')} // For 'laporan'
              onExport={handleExport}
              searchPlaceholder="Search for reports..."
              dataType="laporan" // Pass the data type here
            />
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
      <div className="h-full flex flex-col bg-white overflow-auto">
        <div className="flex-1 overflow-auto">{renderContent()}</div>
      </div>
    </div>
  );
};

export default Content;
