import React, { useState, useEffect } from 'react';
import { fetchData, createData, updateData, deleteData } from '../CRUD'; // Import reusable CRUD functions
import PopUpCRUD from '../home/popUpCRUD'; // Menggunakan nama baru untuk modal

const DataMajalah = () => {
  const [majalah, setMajalah] = useState([]); // State untuk data majalah
  const [loading, setLoading] = useState(true); // State untuk loading
  const [error, setError] = useState(null); // Error handling
  const [isModalOpen, setIsModalOpen] = useState(false); // Modal visibility
  const [selectedMajalah, setSelectedMajalah] = useState(null); // Selected majalah for update

  // Fetch data majalah
  const loadMajalah = async () => {
    try {
      setLoading(true);
      const data = await fetchData('majalah'); // Using the reusable fetchData function
      setMajalah(data);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  // Handle modal submission for adding or updating majalah
  const handleModalSubmit = async (formData) => {
    try {
      if (formData.id) {
        // Update existing majalah
        await updateData('majalah', formData.id, formData);
        alert('Data majalah berhasil diperbarui!');
      } else {
        // Add new majalah
        await createData('majalah', formData);
        alert('Data majalah berhasil ditambahkan!');
      }

      loadMajalah(); // Refresh data after operation
    } catch (err) {
      console.error('Gagal menyimpan data:', err);
      alert('Terjadi kesalahan saat menyimpan data.');
    } finally {
      setIsModalOpen(false); // Close modal
      setSelectedMajalah(null); // Reset selected majalah
    }
  };

  // Handle delete majalah
  const handleDelete = async (id) => {
    if (window.confirm('Apakah Anda yakin ingin menghapus majalah ini?')) {
      try {
        await deleteData('majalah', id); // Use deleteData for majalah
        alert('Data majalah berhasil dihapus!');
        loadMajalah(); // Refresh data after deletion
      } catch (err) {
        console.error('Gagal menghapus majalah:', err);
        alert('Terjadi kesalahan saat menghapus data.');
      }
    }
  };

  // Handle edit majalah
  const handleEdit = (majalah) => {
    setSelectedMajalah(majalah); // Set selected majalah for editing
    setIsModalOpen(true); // Open modal
  };

  // Handle adding new majalah
  const handleAdd = () => {
    setSelectedMajalah(null); // Reset selected majalah for add new
    setIsModalOpen(true); // Open modal
  };

  useEffect(() => {
    loadMajalah(); // Load majalah data on initial render
  }, []);

  if (loading) return <p className="text-center">Loading...</p>;
  if (error) return <p className="text-center text-red-500">Error: {error}</p>;

  return (
    <div>
      <button onClick={handleAdd} className="mb-4 px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600">
        Tambah Majalah
      </button>

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
            const kekurangan = majalahItem.stok_Dibutuhkan - majalahItem.stok_Tersedia;
            return (
              <tr key={majalahItem.id}>
                <td className="border border-gray-300 px-1 py-2 text-center">{index + 1}</td>
                <td className="border border-gray-300 px-4 py-2">{majalahItem.judul}</td>
                <td className="border border-gray-300 px-4 py-2 text-center">{majalahItem.stok_Tersedia}</td>
                <td className="border border-gray-300 px-4 py-2 text-center">{majalahItem.stok_Dibutuhkan}</td>
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

      {/*Pop UP */}
      <PopUpCRUD isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} onSubmit={handleModalSubmit} initialData={selectedMajalah} type="majalah" />
    </div>
  );
};

export default DataMajalah;
