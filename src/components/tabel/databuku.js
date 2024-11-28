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

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <table className="table-auto w-full border-collapse border border-gray-300">
      <thead>
        <tr>
          <th className="border border-gray-300 px-4 py-2">No</th>
          <th className="border border-gray-300 px-4 py-2">Judul</th>
          <th className="border border-gray-300 px-4 py-2">Penulis</th>
          <th className="border border-gray-300 px-4 py-2">Kategori</th>
          <th className="border border-gray-300 px-4 py-2">Tahun Terbit</th>
        </tr>
      </thead>
      <tbody>
        {books.map((book, index) => (
          <tr key={book.id}>
            <td className="border border-gray-300 px-4 py-2">{index + 1}</td>
            <td className="border border-gray-300 px-4 py-2">{book.judul}</td>
            <td className="border border-gray-300 px-4 py-2">{book.penulis}</td>
            <td className="border border-gray-300 px-4 py-2">{book.kategori}</td>
            <td className="border border-gray-300 px-4 py-2">{book.tahunTerbit}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default DataBuku;
