import React, { useState, useEffect } from 'react';
import Modal from '../home/modal'; // Asumsi Anda memiliki komponen Modal yang sama seperti DataBuku

const DataMajalah = () => {
  const [majalah, setMajalah] = useState([]); // State untuk menyimpan data majalah
  const [loading, setLoading] = useState(true); // State untuk loading
  const [error, setError] = useState(null); // State untuk error handling
  const [isModalOpen, setIsModalOpen] = useState(false); // State untuk modal
  const [selectedMajalah, setSelectedMajalah] = useState(null); // State untuk majalah yang dipilih

  // Fetch data majalah dari server
  const fetchMajalah = async () => {
    try {
      setLoading(true);
      const response = await fetch('http://localhost:8080/majalah');
      if (!response.ok) throw new Error('Gagal mengambil data majalah');
      const data = await response.json();
      setMajalah(data);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  // Handle delete majalah
  const handleDelete = async (id) => {
    if (window.confirm('Apakah Anda yakin ingin menghapus majalah ini?')) {
      try {
        const response = await fetch(`http://localhost:8080/majalah/${id}`, {
          method: 'DELETE',
        });
        if (!response.ok) throw new Error('Gagal menghapus majalah');
        fetchMajalah(); // Refresh data
      } catch (err) {
        console.error('Gagal menghapus majalah:', err);
      }
    }
  };

  // Handle buka modal untuk edit
  const handleEdit = (majalahItem) => {
    setSelectedMajalah(majalahItem); // Set data majalah yang dipilih
    setIsModalOpen(true); // Buka modal
  };

  // Handle submit form modal
  const handleModalSubmit = async (formData) => {
    try {
      const url = formData.id
        ? `http://localhost:8080/majalah/${formData.id}` // Untuk update
        : 'http://localhost:8080/majalah'; // Untuk tambah baru

      const method = formData.id ? 'PUT' : 'POST'; // PUT jika update, POST jika tambah baru

      // Pastikan stok_Tersedia dan stok_Kebutuhan adalah angka
      const dataToSend = {
        ...formData,
        stokTersedia: parseInt(formData.stokTersedia, 10),
        stokKebutuhan: parseInt(formData.stokKebutuhan, 10),
      };

      const response = await fetch(url, {
        method,
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(dataToSend),
      });

      if (!response.ok) throw new Error('Gagal menyimpan data majalah');

      fetchMajalah(); // Refresh data setelah sukses
    } catch (err) {
      console.error('Gagal menyimpan data:', err);
    } finally {
      setIsModalOpen(false); // Tutup modal
      setSelectedMajalah(null); // Reset data majalah
    }
  };

  useEffect(() => {
    fetchMajalah();
  }, []);

  if (loading) return <p className="text-center">Loading...</p>;
  if (error) return <p className="text-center text-red-500">Error: {error}</p>;

  return (
    <div>
      <table className="table-auto w-full border-collapse border border-gray-300">
        <thead>
          <tr>
            <th className="border border-gray-300 px-1 py-2 text-center">No</th>
            <th className="border border-gray-300 px-4 py-2 text-center">Judul</th>
            <th className="border border-gray-300 px-4 py-2 text-center">Stok Tersedia</th>
            <th className="border border-gray-300 px-4 py-2 text-center">Stok Dibutuhkan</th>
            <th className="border border-gray-300 px-4 py-2 text-center">Kekurangan</th>
            <th className="border border-gray-300 px-4 py-2 text-center">Aksi</th>
          </tr>
        </thead>
        <tbody>
          {majalah.map((majalahItem, index) => {
            const kekurangan = majalahItem.stokKebutuhan - majalahItem.stokTersedia;
            return (
              <tr key={majalahItem.id}>
                <td className="border border-gray-300 px-1 py-2 text-center">{index + 1}</td>
                <td className="border border-gray-300 px-4 py-2">{majalahItem.judul}</td>
                <td className="border border-gray-300 px-4 py-2 text-center">{majalahItem.stokTersedia}</td>
                <td className="border border-gray-300 px-4 py-2 text-center">{majalahItem.stokKebutuhan}</td>
                <td className="border border-gray-300 px-4 py-2 text-center">{kekurangan > 0 ? kekurangan : 'Tidak ada kekurangan'}</td>
                <td className="border border-gray-300 px-4 py-2 text-center">
                  <button onClick={() => handleEdit(majalahItem)} className="mr-2 text-blue-500 hover:text-blue-700" title="Edit">
                    ✏️
                  </button>
                  <button onClick={() => handleDelete(majalahItem.id)} className="text-red-500 hover:text-red-700" title="Delete">
                    🗑️
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
      {/* Modal */}
      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} onSubmit={handleModalSubmit} initialData={selectedMajalah} />
    </div>
  );
};

export default DataMajalah;
