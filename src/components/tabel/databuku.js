import React, { useState, useEffect } from 'react';
import { fetchData, createData, updateData, deleteData } from '../CRUD'; // Import reusable CRUD functions
import PopUpCRUD from '../home/popUpCRUD'; // Menggunakan nama baru untuk modal

const DataBuku = () => {
  const [books, setBooks] = useState([]); // State to store book data
  const [loading, setLoading] = useState(true); // State for loading
  const [error, setError] = useState(null); // Error handling
  const [isModalOpen, setIsModalOpen] = useState(false); // Modal visibility
  const [selectedBook, setSelectedBook] = useState(null); // Selected book for update

  // Fetch book data
  const loadBooks = async () => {
    try {
      setLoading(true);
      const data = await fetchData('buku'); // Fetch books data using fetchData utility
      setBooks(data);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  // Handle modal submission for adding or updating book
  const handleModalSubmit = async (formData) => {
    try {
      if (formData.id) {
        // Update existing book
        await updateData('buku', formData.id, formData);
        alert('Data buku berhasil diperbarui!');
      } else {
        // Add new book
        await createData('buku', formData);
        alert('Data buku berhasil ditambahkan!');
      }

      loadBooks(); // Refresh data after operation
    } catch (err) {
      console.error('Gagal menyimpan data:', err);
      alert('Terjadi kesalahan saat menyimpan data.');
    } finally {
      setIsModalOpen(false); // Close modal
      setSelectedBook(null); // Reset selected book
    }
  };

  // Handle delete book
  const handleDelete = async (id) => {
    if (window.confirm('Apakah Anda yakin ingin menghapus buku ini?')) {
      try {
        await deleteData('buku', id); // Use deleteData for books
        alert('Data buku berhasil dihapus!');
        loadBooks(); // Refresh data after deletion
      } catch (err) {
        console.error('Gagal menghapus buku:', err);
        alert('Terjadi kesalahan saat menghapus data.');
      }
    }
  };

  // Handle edit book
  const handleEdit = (book) => {
    setSelectedBook(book); // Set selected book for editing
    setIsModalOpen(true); // Open modal
  };

  // Handle adding new book
  const handleAdd = () => {
    setSelectedBook(null); // Reset selected book for add new
    setIsModalOpen(true); // Open modal
  };

  useEffect(() => {
    loadBooks(); // Load books data on initial render
  }, []);

  if (loading) return <p className="text-center">Loading...</p>;
  if (error) return <p className="text-center text-red-500">Error: {error}</p>;

  return (
    <div>
      <button onClick={handleAdd} className="mb-4 px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600">
        Tambah Buku
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

      {/*Pop UP */}
      <PopUpCRUD isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} onSubmit={handleModalSubmit} initialData={selectedBook} type="buku" />
    </div>
  );
};

export default DataBuku;
