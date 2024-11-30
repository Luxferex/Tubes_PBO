import React, { useState, useEffect } from 'react';

const DataBuku = () => {
  const [books, setBooks] = useState([]); // State untuk menyimpan data buku
  const [loading, setLoading] = useState(true); // State untuk menandai loading
  const [error, setError] = useState(null); // State untuk error handling

  // Fungsi untuk mengambil data dari backend
  const fetchBooks = async () => {
    try {
      const response = await fetch('http://localhost:8080/buku'); // Endpoint backend
      if (!response.ok) {
        throw new Error('Gagal mengambil data');
      }
      const data = await response.json();
      setBooks(data);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchBooks();
  }, []);

  if (loading) return <p className="text-center">Loading...</p>;
  if (error) return <p className="text-center text-red-500">Error: {error}</p>;

  return (
    <table className="table-auto w-full border-collapse border border-gray-300">
      <thead>
        <tr>
          <th className="border border-gray-300 px-1 py-2 text-center">No</th>
          <th className="border border-gray-300 px-4 py-2 text-center">Judul</th>
          <th className="border border-gray-300 px-4 py-2 text-center">Stok Tersedia</th>
          <th className="border border-gray-300 px-4 py-2 text-center">Stok Dibutuhkan</th>
          <th className="border border-gray-300 px-4 py-2 text-center">Kekurangan</th>
        </tr>
      </thead>
      <tbody>
        {books.map((book, index) => (
          <tr key={book.judul}>
            <td className="border border-gray-300 px-1 py-2 text-center align-middle">{index + 1}</td>
            <td className="border border-gray-300 px-4 py-2 align-middle">{book.judul}</td>
            <td className="border border-gray-300 px-4 py-2 text-center align-middle">{book.stok_Tersedia}</td>
            <td className="border border-gray-300 px-4 py-2 text-center align-middle">{book.stok_Dibutuhkan}</td>
            <td className="border border-gray-300 px-4 py-2 text-center align-middle">{book.kekurangan}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default DataBuku;
