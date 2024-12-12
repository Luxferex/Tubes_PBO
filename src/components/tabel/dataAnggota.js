import React, { useState, useEffect } from 'react';
import Modal from '../home/modal';

const DataAnggota = () => {
  const [anggota, setAnggota] = useState([]); // State untuk menyimpan data anggota
  const [loading, setLoading] = useState(true); // State untuk loading
  const [error, setError] = useState(null); // State untuk error handling
  const [isModalOpen, setIsModalOpen] = useState(false); // Modal visibility
  const [selectedAnggota, setSelectedAnggota] = useState(null); // Anggota yang dipilih untuk update

  // Fetch data anggota
  const fetchAnggota = async () => {
    try {
      setLoading(true);
      const response = await fetch('http://localhost:8080/anggota');
      if (!response.ok) throw new Error('Gagal mengambil data anggota');
      const data = await response.json();
      setAnggota(data);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  // Handle delete anggota
  const handleDelete = async (id) => {
    if (window.confirm('Apakah Anda yakin ingin menghapus anggota ini?')) {
      try {
        const response = await fetch(`http://localhost:8080/anggota/${id}`, {
          method: 'DELETE',
        });
        if (!response.ok) throw new Error('Gagal menghapus anggota');
        fetchAnggota(); // Refresh data setelah berhasil
      } catch (err) {
        console.error('Gagal menghapus anggota:', err);
      }
    }
  };

  // Handle buka modal untuk edit
  const handleEdit = (anggota) => {
    setSelectedAnggota(anggota); // Set data anggota yang dipilih
    setIsModalOpen(true); // Buka modal
  };

  const handleModalSubmit = async (formData) => {
    try {
      const url = formData.id
        ? `http://localhost:8080/anggota/${formData.id}` // Untuk update
        : 'http://localhost:8080/anggota'; // Untuk tambah baru

      const method = formData.id ? 'PUT' : 'POST'; // PUT jika update, POST jika tambah baru
      const response = await fetch(url, {
        method,
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (!response.ok) throw new Error('Gagal menyimpan data anggota');

      fetchAnggota(); // Refresh data setelah sukses
    } catch (err) {
      console.error('Gagal menyimpan data:', err);
    } finally {
      setIsModalOpen(false); // Tutup modal
      setSelectedAnggota(null); // Reset anggota yang dipilih
    }
  };

  useEffect(() => {
    fetchAnggota();
  }, []);

  if (loading) return <p className="text-center">Loading...</p>;
  if (error) return <p className="text-center text-red-500">Error: {error}</p>;

  return (
    <div>
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
          {anggota.map((anggota, index) => (
            <tr key={anggota.id}>
              <td className="border border-gray-300 px-1 py-2 text-center">{index + 1}</td>
              <td className="border border-gray-300 px-4 py-2 text-center">{anggota.nama}</td>
              <td className="border border-gray-300 px-4 py-2 text-center">{anggota.jurusan}</td>
              <td className="border border-gray-300 px-4 py-2 text-center">{anggota.nim}</td>
              <td className="border border-gray-300 px-4 py-2 text-center">
                <button onClick={() => handleEdit(anggota)} className="mr-2 text-blue-500 hover:text-blue-700" title="Edit">
                  ✏️
                </button>
                <button onClick={() => handleDelete(anggota.id)} className="text-red-500 hover:text-red-700" title="Delete">
                  🗑️
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      {/* Modal */}
      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} onSubmit={handleModalSubmit} initialData={selectedAnggota} />
    </div>
  );
};

export default DataAnggota;
