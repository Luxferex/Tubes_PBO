import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/home';
import Login from './pages/login';
import Register from './pages/register';
import HomeUser from './pages/homeUser';
import Profile from './pages/profile';
const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/regis" element={<Register />} />
        <Route path="/home" element={<Home />} />
        <Route path="/homeUser" element={<HomeUser />} />
        <Route path="/profile" element={<Profile />} />

        {/* Tambahkan rute lainnya jika diperlukan */}
      </Routes>
    </Router>
  );
};

export default App;
