import React, { useState, useEffect } from 'react';
import { fetchData, createData, updateData, deleteData } from '../CRUD'; // Import reusable CRUD functions
import PopUpCRUD from '../home/popUpCRUD'; // Menggunakan nama baru untuk modal

const DataJurnal = () => {
  const [journals, setJournals] = useState([]); // State untuk menyimpan data jurnal
  const [loading, setLoading] = useState(true); // State untuk loading
  const [error, setError] = useState(null); // State untuk error handling
  const [isModalOpen, setIsModalOpen] = useState(false); // Modal visibility
  const [selectedJournal, setSelectedJournal] = useState(null); // Jurnal yang dipilih untuk update

  // Fetch data jurnal
  const loadJournals = async () => {
    try {
      setLoading(true);
      const data = await fetchData('jurnal'); // Gunakan fetchData seperti di DataBuku
      setJournals(data);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  // Handle delete jurnal
  const handleDelete = async (id) => {
    if (window.confirm('Apakah Anda yakin ingin menghapus jurnal ini?')) {
      try {
        await deleteData('jurnal', id); // Gunakan deleteData untuk jurnal
        alert('Jurnal berhasil dihapus!');
        loadJournals(); // Refresh data setelah berhasil
      } catch (err) {
        console.error('Gagal menghapus jurnal:', err);
        alert('Terjadi kesalahan saat menghapus data.');
      }
    }
  };

  // Handle buka modal untuk edit
  const handleEdit = (journal) => {
    setSelectedJournal(journal); // Set data jurnal yang dipilih
    setIsModalOpen(true); // Buka modal
  };

  // Handle modal submission
  const handleModalSubmit = async (formData) => {
    try {
      if (formData.id) {
        // Update existing journal
        await updateData('jurnal', formData.id, formData);
        alert('Jurnal berhasil diperbarui!');
      } else {
        // Add new journal
        await createData('jurnal', formData);
        alert('Jurnal berhasil ditambahkan!');
      }

      loadJournals(); // Refresh data setelah operasi berhasil
    } catch (err) {
      console.error('Gagal menyimpan jurnal:', err);
      alert('Terjadi kesalahan saat menyimpan jurnal.');
    } finally {
      setIsModalOpen(false); // Tutup modal
      setSelectedJournal(null); // Reset jurnal yang dipilih
    }
  };

  useEffect(() => {
    loadJournals(); // Load data saat pertama kali render
  }, []);

  if (loading) return <p className="text-center">Loading...</p>;
  if (error) return <p className="text-center text-red-500">Error: {error}</p>;

  return (
    <div>
      <button onClick={() => setIsModalOpen(true)} className="mb-4 px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600">
        Tambah Jurnal
      </button>

      <table className="table-auto w-full border-collapse border border-gray-300">
        <thead>
          <tr>
            <th className="border border-gray-300 px-1 py-2 text-center">No</th>
            <th className="border border-gray-300 px-4 py-2 text-center">Judul</th>
            <th className="border border-gray-300 px-4 py-2 text-center">Stok Tersedia</th>
            <th className="border border-gray-300 px-4 py-2 text-center">Stok dibutuhkan</th>
            <th className="border border-gray-300 px-4 py-2 text-center">Kekurangan</th>
            <th className="border border-gray-300 px-4 py-2 text-center">Aksi</th>
          </tr>
        </thead>
        <tbody>
          {journals.map((journal, index) => (
            <tr key={journal.id}>
              <td className="border border-gray-300 px-1 py-2 text-center">{index + 1}</td>
              <td className="border border-gray-300 px-4 py-2">{journal.judul}</td>
              <td className="border border-gray-300 px-4 py-2 text-center">{journal.stok_Tersedia}</td>
              <td className="border border-gray-300 px-4 py-2 text-center">{journal.stok_Dibutuhkan}</td>
              <td className="border border-gray-300 px-4 py-2 text-center">{journal.kekurangan}</td>
              <td className="border border-gray-300 px-4 py-2 text-center">
                <button onClick={() => handleEdit(journal)} className="mr-2 text-blue-500 hover:text-blue-700" title="Edit">
                  ✏️
                </button>
                <button onClick={() => handleDelete(journal.id)} className="text-red-500 hover:text-red-700" title="Delete">
                  🗑️
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/*Pop UP */}
      <PopUpCRUD isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} onSubmit={handleModalSubmit} initialData={selectedJournal} type="jurnal" />
    </div>
  );
};

export default DataJurnal;
