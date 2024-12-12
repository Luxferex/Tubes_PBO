import React from 'react';
import { useNavigate } from 'react-router-dom';

const FormLogin = () => {
  const navigate = useNavigate();

  const handlebutton = () => {
    navigate('/regis', { replace: true });
  };
  return (
    <div className="w-full md:w-1/2 bg-white p-6 md:p-10 flex flex-col justify-center shadow-lg min-h-screen">
      <h1 className="text-2xl md:text-4xl font-bold text-zinc-800 absolute top-6 left-6">PBO-tubes</h1>
      <div className="w-11/12 sm:w-3/4 md:w-1/2 mx-auto mt-16">
        <h2 className="text-3xl font-bold mt-5 md:mt-10 text-zinc-600 text-center">Login</h2>
        <p className="text-zinc-500 text-center mt-3 md:mt-5">Selamat Datang! Silahkan masukkan Password/username anda untuk Login</p>
        <form className="mt-4 md:mt-6">
          <label className="block mb-1 md:mb-2 text-sm font-medium text-zinc-700" htmlFor="email">
            Email
          </label>
          <input type="email" id="email" placeholder="Masukkan Email/Username anda" className="border border-zinc-300 rounded-lg p-2 md:p-4 w-full mb-4 md:mb-6 focus:outline-none focus:ring-2 focus:ring-primary"></input>
          <label className="block mb-3 md:mb-4 text-sm font-medium text-zinc-700" htmlFor="password">
            Password
          </label>
          <input type="password" id="password" placeholder="Masukkan Password anda" className="border border-zinc-300 rounded-lg p-2 md:p-4 w-full mb-6 md:mb-8 focus:outline-none focus:ring-2 focus:ring-primary"></input>

          <div className="flex justify-between items-center mb-4 md:mb-6">
            <div className="flex items-center">
              <input type="checkbox" id="remember" className="mr-2 w-4 h-4 border border-zinc-300 rounded focus:ring-2 focus:ring-primary" />
              <label htmlFor="remember" className="text-xs md:text-sm text-zinc-600">
                Keep me logged in
              </label>
            </div>
            <a href="#" className="text-xs md:text-sm text-blue-600 hover:underline">
              Forgot password?
            </a>
          </div>

          <button className="bg-blue-600 text-white hover:bg-blue-700 p-2 md:p-3 rounded-lg w-full transition duration-200">Sign in</button>
          <p className="text-zinc-500 text-sm mt-3 md:mt-5">
            belum punya akun?
            <button onClick={handlebutton} className="text-blue-600 hover:underline">
              Daftar
            </button>
          </p>
        </form>
      </div>
    </div>
  );
};

export default FormLogin;
