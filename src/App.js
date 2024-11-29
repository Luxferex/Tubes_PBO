import React from 'react';
import Header from './components/header'; // Pastikan untuk mengimpor Header
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { setSelectedMenu } from './state/uiSlice'; // Import action Redux
import Home from './pages/home/home'; // Halaman Utama

const App = () => {
  const dispatch = useDispatch();

  const handleMenuClick = (menu) => {
    dispatch(setSelectedMenu(menu)); // Set state selectedMenu di Redux saat menu diklik
  };

  return (
    <Router>
      {/* Header tetap di atas */}
      <Header />

      {/* Konten utama dengan margin-top yang cukup */}
      <div className="mt-[80px]">
        {' '}
        {/* Sesuaikan nilai mt sesuai tinggi header */}
        <Routes>
          {/* Rute utama */}
          <Route path="/" element={<Home />} />

          {/* Rute lainnya */}
          <Route path="/databuku" element={<div>Data Buku</div>} />
          <Route path="/dataMajalah" element={<div>Data Majalah</div>} />
          <Route path="/dataJurnal" element={<div>Data Jurnal</div>} />
          <Route path="/dataAnggota" element={<div>Data Anggota</div>} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
