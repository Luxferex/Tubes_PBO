import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { auth } from '../../services/firebaseConfig'; // Firebase auth config
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { getDatabase, ref, set } from 'firebase/database'; // Untuk Realtime Database

const FormRegis = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleRegister = async (e) => {
    e.preventDefault();

    try {
      // Buat akun pengguna dengan Firebase Authentication
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;

      // Simpan informasi tambahan ke Firebase Realtime Database
      const db = getDatabase();
      set(ref(db, `users/${user.uid}`), {
        email,
        name,
      });

      // Arahkan pengguna ke halaman login
      navigate('/', { replace: true });
    } catch (err) {
      setError(err.message || 'Registrasi gagal. Silakan coba lagi.');
    }
  };

  return (
    <div className="w-full md:w-1/2 bg-white p-6 md:p-10 flex flex-col justify-center shadow-lg min-h-screen">
      <h1 className="text-2xl md:text-4xl font-bold text-zinc-800 absolute top-6 left-6">PBO-tubes</h1>
      <div className="w-11/12 sm:w-3/4 md:w-1/2 mx-auto mt-16">
        <h2 className="text-3xl font-bold mt-5 md:mt-10 text-zinc-600 text-center">Registrasi</h2>

        <form className="mt-4 md:mt-6" onSubmit={handleRegister}>
          {error && <p className="text-red-500 mb-4">{error}</p>}
          <label className="block mb-1 md:mb-2 text-sm font-medium text-zinc-700" htmlFor="email">
            Email
          </label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Masukkan Email anda"
            className="border border-zinc-300 rounded-lg p-2 md:p-4 w-full mb-4 md:mb-6 focus:outline-none focus:ring-2 focus:ring-primary"
          />
          <label className="block mb-1 md:mb-2 text-sm font-medium text-zinc-700" htmlFor="name">
            Name
          </label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Masukkan Nama anda"
            className="border border-zinc-300 rounded-lg p-2 md:p-4 w-full mb-6 md:mb-8 focus:outline-none focus:ring-2 focus:ring-primary"
          />
          <label className="block mb-1 md:mb- text-sm font-medium text-zinc-700" htmlFor="password">
            Password
          </label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Masukkan Password anda"
            className="border border-zinc-300 rounded-lg p-2 md:p-4 w-full mb-6 md:mb-8 focus:outline-none focus:ring-2 focus:ring-primary"
          />
          <button type="submit" className="bg-blue-600 text-white hover:bg-blue-700 p-2 md:p-3 rounded-lg w-full transition duration-200">
            Sign Up
          </button>
          <p className="text-zinc-500 text-sm mt-3 md:mt-5">
            sudah punya akun?
            <button onClick={() => navigate('/')} className="text-blue-600 hover:underline">
              Login
            </button>
          </p>
        </form>
      </div>
    </div>
  );
};

export default FormRegis;
