import React, { useState, useEffect } from 'react';
import Modal from '../modal';

const DataBuku = () => {
  const [books, setBooks] = useState([]); // State untuk menyimpan data buku
  const [loading, setLoading] = useState(true); // Loading state
  const [error, setError] = useState(null); // Error handling
  const [isModalOpen, setIsModalOpen] = useState(false); // Modal visibility
  const [selectedBook, setSelectedBook] = useState(null); // Buku yang dipilih untuk update

  // Fetch data buku
  const fetchBooks = async () => {
    try {
      setLoading(true);
      const response = await fetch('http://localhost:8080/buku');
      if (!response.ok) throw new Error('Gagal mengambil data buku');
      const data = await response.json();
      setBooks(data);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  // Handle delete buku
  const handleDelete = async (id) => {
    if (window.confirm('Apakah Anda yakin ingin menghapus buku ini?')) {
      try {
        const response = await fetch(`http://localhost:8080/buku/${id}`, {
          method: 'DELETE',
        });
        if (!response.ok) throw new Error('Gagal menghapus buku');
        fetchBooks(); // Refresh data setelah berhasil
      } catch (err) {
        console.error('Gagal menghapus buku:', err);
      }
    }
  };

  // Handle buka modal untuk edit
  const handleEdit = (book) => {
    setSelectedBook(book); // Set data buku yang dipilih
    setIsModalOpen(true); // Buka modal
  };

  const handleModalSubmit = async (formData) => {
    try {
      console.log('Form data yang dikirimkan:', formData); // Log formData yang dikirimkan
      const url = formData.id
        ? `http://localhost:8080/buku/${formData.id}` // Untuk update
        : 'http://localhost:8080/buku'; // Untuk tambah baru

      // Pastikan stok_Tersedia dan stok_Dibutuhkan adalah angka
      const dataToSend = {
        ...formData,
        stok_Tersedia: parseInt(formData.stok_Tersedia, 10), // Konversi menjadi angka
        stok_Dibutuhkan: parseInt(formData.stok_Dibutuhkan, 10), // Konversi menjadi angka
      };

      const method = formData.id ? 'PUT' : 'POST'; // PUT jika update, POST jika tambah baru
      const response = await fetch(url, {
        method,
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(dataToSend),
      });

      if (!response.ok) throw new Error('Gagal menyimpan data buku');

      console.log('Response dari server:', await response.json()); // Log response dari server

      fetchBooks(); // Refresh data setelah sukses
    } catch (err) {
      console.error('Gagal menyimpan data:', err);
    } finally {
      setIsModalOpen(false); // Tutup modal
      setSelectedBook(null); // Reset buku yang dipilih
    }
  };

  useEffect(() => {
    fetchBooks();
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
          {books.map((book, index) => (
            <tr key={book.id}>
              <td className="border border-gray-300 px-1 py-2 text-center">{index + 1}</td>
              <td className="border border-gray-300 px-4 py-2">{book.judul}</td>
              <td className="border border-gray-300 px-4 py-2 text-center">{book.stok_Tersedia}</td>
              <td className="border border-gray-300 px-4 py-2 text-center">{book.stok_Dibutuhkan}</td>
              <td className="border border-gray-300 px-4 py-2 text-center">{book.kekurangan}</td>
              <td className="border border-gray-300 px-4 py-2 text-center">
                <button onClick={() => handleEdit(book)} className="mr-2 text-blue-500 hover:text-blue-700" title="Edit">
                  ✏️
                </button>
                <button onClick={() => handleDelete(book.id)} className="text-red-500 hover:text-red-700" title="Delete">
                  🗑️
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      {/* Modal */}
      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} onSubmit={handleModalSubmit} initialData={selectedBook} />
    </div>
  );
};

export default DataBuku;
