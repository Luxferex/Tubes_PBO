import React from 'react';
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
      <Routes>
        {/* Rute utama */}
        <Route path="/" element={<Home />} />

        <Route
          path="/databuku"
          element={
            <div>
              <button onClick={() => handleMenuClick('databuku')}>Data Buku</button>
              {/* Anda bisa mengganti dengan komponen yang lebih dinamis */}
            </div>
          }
        />
        <Route
          path="/dataMajalah"
          element={
            <div>
              <button onClick={() => handleMenuClick('dataMajalah')}>Data Majalah</button>
              {/* Anda bisa mengganti dengan komponen yang lebih dinamis */}
            </div>
          }
        />
        <Route
          path="/dataJurnal"
          element={
            <div>
              <button onClick={() => handleMenuClick('dataJurnal')}>Data Jurnal</button>
              {/* Anda bisa mengganti dengan komponen yang lebih dinamis */}
            </div>
          }
        />
        <Route
          path="/dataAnggota"
          element={
            <div>
              <button onClick={() => handleMenuClick('dataAnggota')}>Data Anggota</button>
              {/* Anda bisa mengganti dengan komponen yang lebih dinamis */}
            </div>
          }
        />
      </Routes>
    </Router>
  );
};

export default App;
