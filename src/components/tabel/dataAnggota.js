import React, { useState, useEffect } from 'react';
import PopUpCRUD from '../home/popUpCRUD'; // Menggunakan nama baru untuk modal
import { fetchData, createData, updateData, deleteData } from '../CRUD'; // Menggunakan utils CRUD

const DataAnggota = () => {
  const [anggota, setAnggota] = useState([]); // State untuk menyimpan data anggota
  const [loading, setLoading] = useState(true); // State untuk loading
  const [error, setError] = useState(null); // State untuk error handling
  const [isModalOpen, setIsModalOpen] = useState(false); // Modal visibility
  const [selectedAnggota, setSelectedAnggota] = useState(null); // Anggota yang dipilih untuk update

  // Fetch data anggota
  const loadAnggota = async () => {
    try {
      setLoading(true);
      const data = await fetchData('anggota'); // Menggunakan fungsi fetchData dari utils
      setAnggota(data);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  // Handle tambah atau edit anggota
  const handleModalSubmit = async (formData) => {
    try {
      if (formData.id) {
        // Update anggota
        await updateData('anggota', formData.id, formData);
        alert('Data anggota berhasil diperbarui!');
      } else {
        // Tambah anggota baru
        await createData('anggota', formData);
        alert('Data anggota berhasil ditambahkan!');
      }

      loadAnggota(); // Refresh data setelah operasi selesai
    } catch (err) {
      console.error('Gagal menyimpan data:', err);
      alert('Terjadi kesalahan saat menyimpan data.');
    } finally {
      setIsModalOpen(false); // Tutup modal
      setSelectedAnggota(null); // Reset anggota yang dipilih
    }
  };

  // Handle delete anggota
  const handleDelete = async (id) => {
    if (window.confirm('Apakah Anda yakin ingin menghapus anggota ini?')) {
      try {
        await deleteData('anggota', id); // Menggunakan fungsi deleteData dari utils
        alert('Data anggota berhasil dihapus!');
        loadAnggota(); // Refresh data setelah operasi selesai
      } catch (err) {
        console.error('Gagal menghapus anggota:', err);
        alert('Terjadi kesalahan saat menghapus data.');
      }
    }
  };

  // Handle buka modal untuk edit
  const handleEdit = (anggota) => {
    setSelectedAnggota(anggota); // Set data anggota yang dipilih
    setIsModalOpen(true); // Buka modal
  };

  // Handle buka modal untuk tambah baru
  const handleAdd = () => {
    setSelectedAnggota(null); // Kosongkan data untuk mode tambah baru
    setIsModalOpen(true); // Buka modal
  };

  useEffect(() => {
    loadAnggota();
  }, []);

  if (loading) return <p className="text-center">Loading...</p>;
  if (error) return <p className="text-center text-red-500">Error: {error}</p>;

  return (
    <div>
      <button onClick={handleAdd} className="mb-4 px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600">
        Tambah Anggota
      </button>

      <table className="table-auto w-full border-collapse border border-gray-300">
        <thead>
          <tr>
            <th className="border border-gray-300 px-1 py-2 text-center">No</th>
            <th className="border border-gray-300 px-4 py-2 text-center">Nama</th>
            <th className="border border-gray-300 px-4 py-2 text-center">Jurusan</th>
            <th className="border border-gray-300 px-4 py-2 text-center">NIM</th>
            <th className="border border-gray-300 px-4 py-2 text-center">Aksi</th>
          </tr>
        </thead>
        <tbody>
          {anggota.map((item, index) => (
            <tr key={item.id}>
              <td className="border border-gray-300 px-1 py-2 text-center">{index + 1}</td>
              <td className="border border-gray-300 px-4 py-2 text-center">{item.nama}</td>
              <td className="border border-gray-300 px-4 py-2 text-center">{item.jurusan}</td>
              <td className="border border-gray-300 px-4 py-2 text-center">{item.nim}</td>
              <td className="border border-gray-300 px-4 py-2 text-center">
                <button onClick={() => handleEdit(item)} className="mr-2 text-blue-500 hover:text-blue-700" title="Edit">
                  ✏️
                </button>
                <button onClick={() => handleDelete(item.id)} className="text-red-500 hover:text-red-700" title="Delete">
                  🗑️
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* PopUp CRUD */}
      <PopUpCRUD isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} onSubmit={handleModalSubmit} initialData={selectedAnggota} Type="anggota" />
    </div>
  );
};

export default DataAnggota;
