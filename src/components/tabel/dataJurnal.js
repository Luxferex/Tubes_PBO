import React, { useState, useEffect } from 'react';
import Modal from '../home/modal';

const DataJurnal = () => {
  const [journals, setJournals] = useState([]); // State untuk menyimpan data jurnal
  const [loading, setLoading] = useState(true); // State untuk loading
  const [error, setError] = useState(null); // State untuk error handling
  const [isModalOpen, setIsModalOpen] = useState(false); // Modal visibility
  const [selectedJournal, setSelectedJournal] = useState(null); // Jurnal yang dipilih untuk update

  // Fetch data jurnal
  const fetchJournals = async () => {
    try {
      setLoading(true);
      const response = await fetch('http://localhost:8080/jurnal');
      if (!response.ok) throw new Error('Gagal mengambil data jurnal');
      const data = await response.json();
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
        const response = await fetch(`http://localhost:8080/jurnal/${id}`, {
          method: 'DELETE',
        });
        if (!response.ok) throw new Error('Gagal menghapus jurnal');
        fetchJournals(); // Refresh data setelah berhasil
      } catch (err) {
        console.error('Gagal menghapus jurnal:', err);
      }
    }
  };

  // Handle buka modal untuk edit
  const handleEdit = (journal) => {
    setSelectedJournal(journal); // Set data jurnal yang dipilih
    setIsModalOpen(true); // Buka modal
  };

  const handleModalSubmit = async (formData) => {
    try {
      const url = formData.id
        ? `http://localhost:8080/jurnal/${formData.id}` // Untuk update
        : 'http://localhost:8080/jurnal'; // Untuk tambah baru

      // Pastikan stok_Tersedia dan stok_Kebutuhan adalah angka
      const dataToSend = {
        ...formData,
        stok_Tersedia: parseInt(formData.stok_Tersedia, 10), // Konversi menjadi angka
        stok_Kebutuhan: parseInt(formData.stok_Kebutuhan, 10), // Konversi menjadi angka
      };

      const method = formData.id ? 'PUT' : 'POST'; // PUT jika update, POST jika tambah baru
      const response = await fetch(url, {
        method,
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(dataToSend),
      });

      if (!response.ok) throw new Error('Gagal menyimpan data jurnal');

      fetchJournals(); // Refresh data setelah sukses
    } catch (err) {
      console.error('Gagal menyimpan data:', err);
    } finally {
      setIsModalOpen(false); // Tutup modal
      setSelectedJournal(null); // Reset jurnal yang dipilih
    }
  };

  useEffect(() => {
    fetchJournals();
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
              <td className="border border-gray-300 px-4 py-2 text-center">{journal.stok_Kebutuhan}</td>
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
      {/* Modal */}
      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} onSubmit={handleModalSubmit} initialData={selectedJournal} />
    </div>
  );
};

export default DataJurnal;
