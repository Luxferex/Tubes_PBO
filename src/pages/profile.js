import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom'; // Untuk navigasi
import { setUser } from '../state/userSlice'; // Menyimpan data profil yang baru

const Profile = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate(); // Untuk navigasi setelah menyimpan
  const user = useSelector((state) => state.user.user);
  const [nim, setNim] = useState(user?.nim || '');
  const [jurusan, setJurusan] = useState(user?.jurusan || '');
  const [noTelp, setNoTelp] = useState(user?.noTelp || '');
  const [profilePicture, setProfilePicture] = useState(user?.profilePicture || '');
  const [file, setFile] = useState(null);

  // Menghandle perubahan foto profil
  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    if (selectedFile) {
      setFile(selectedFile);
      setProfilePicture(URL.createObjectURL(selectedFile)); // Menampilkan gambar pratinjau
    }
  };

  // Menyimpan data profil dan mengarahkannya ke homepage
  const handleSave = () => {
    // Simpan data baru ke Redux, update status menjadi "Aktif"
    dispatch(
      setUser({
        ...user,
        nim,
        jurusan,
        noTelp,
        profilePicture: file ? profilePicture : user.profilePicture,
        status: 'Aktif', // Update status menjadi Aktif
      })
    );

    // Navigasi ke homepage setelah berhasil menyimpan
    navigate('/homeUser'); // Ganti '/home' dengan path halaman utama Anda
  };

  return (
    <div className="min-h-screen bg-gray-50 flex justify-center items-center p-6">
      <div className="bg-white shadow-lg rounded-lg p-8 w-full max-w-lg">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">Profil Pengguna</h2>

        {/* Foto Profil */}
        <div className="flex justify-center mb-6">
          <div className="relative">
            <img src={profilePicture || '/images/people.png'} alt="User Profile" className="w-32 h-32 rounded-full object-cover border-4 border-blue-500" />
          </div>
        </div>

        {/* Form Profil */}
        <div className="space-y-4">
          {/* NIM */}
          <div>
            <label className="block text-sm font-medium text-gray-700">NIM</label>
            <input type="text" value={nim} onChange={(e) => setNim(e.target.value)} className="w-full p-3 mt-2 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500" placeholder="Masukkan NIM" />
          </div>

          {/* Jurusan */}
          <div>
            <label className="block text-sm font-medium text-gray-700">Jurusan</label>
            <input type="text" value={jurusan} onChange={(e) => setJurusan(e.target.value)} className="w-full p-3 mt-2 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500" placeholder="Masukkan Jurusan" />
          </div>

          {/* No. Telepon */}
          <div>
            <label className="block text-sm font-medium text-gray-700">No. Telepon</label>
            <input type="text" value={noTelp} onChange={(e) => setNoTelp(e.target.value)} className="w-full p-3 mt-2 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500" placeholder="Masukkan No. Telepon" />
          </div>

          {/* Input Foto Profil */}
          <div className="mt-6">
            <label className="block text-sm font-medium text-gray-700">Ganti Foto Profil</label>
            <input type="file" onChange={handleFileChange} className="w-full p-3 mt-2 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500" />
          </div>

          {/* Button Save */}
          <div className="flex justify-center">
            <button onClick={handleSave} className="w-full mt-6 bg-blue-600 text-white py-3 px-4 rounded-lg shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200">
              Simpan Data
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
