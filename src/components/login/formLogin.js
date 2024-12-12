import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../services/firebaseConfig';

const FormLogin = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();

    // Cek jika email dan password adalah 'admin'
    if (email === 'admin' && password === 'admin') {
      navigate('/', { replace: true });
      return;
    }

    try {
      console.log('Attempting login with email:', email);
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;

      console.log('Login successful for:', user.email);

      // Periksa apakah pengguna adalah admin
      if (email === 'admin@gmail.com' && password === 'admin123') {
        console.log('Admin credentials detected, redirecting to admin dashboard');
        navigate('/home', { replace: true });
        return;
      } else {
        console.log('Redirecting to user homepage');
        navigate('/homeUser', { replace: true });
      }
    } catch (err) {
      console.error('Error during login:', err.code, err.message);
      setError('Login failed. Please check your credentials.');
    }
  };

  return (
    <div className="w-full md:w-1/2 bg-white p-6 md:p-10 flex flex-col justify-center shadow-lg min-h-screen">
      <h1 className="text-2xl md:text-4xl font-bold text-zinc-800 absolute top-6 left-6">PBO-tubes</h1>
      <div className="w-11/12 sm:w-3/4 md:w-1/2 mx-auto mt-16">
        <h2 className="text-3xl font-bold mt-5 md:mt-10 text-zinc-600 text-center">Login</h2>
        <p className="text-zinc-500 text-center mt-3 md:mt-5">Selamat Datang! Silahkan masukkan Email dan Password Anda untuk Login</p>
        <form className="mt-4 md:mt-6" onSubmit={handleLogin}>
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
          <label className="block mb-3 md:mb-4 text-sm font-medium text-zinc-700" htmlFor="password">
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
            Sign in
          </button>
          <p className="text-zinc-500 text-sm mt-3 md:mt-5">
            belum punya akun?
            <button onClick={() => navigate('/regis', { replace: true })} className="text-blue-600 hover:underline">
              Daftar
            </button>
          </p>
        </form>
      </div>
    </div>
  );
};

export default FormLogin;
