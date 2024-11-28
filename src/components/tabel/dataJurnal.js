import React, { useState, useEffect } from 'react';

const DataJurnal = () => {
  const [journals, setJournals] = useState([]); // State untuk menyimpan data jurnal
  const [loading, setLoading] = useState(true); // State untuk menandai loading
  const [error, setError] = useState(null); // State untuk error handling

  // Fungsi untuk mengambil data dari backend
  const fetchJournals = async () => {
    try {
      const response = await fetch('http://localhost:8080/jurnal'); // Endpoint backend jurnal
      if (!response.ok) {
        throw new Error('Gagal mengambil data jurnal');
      }
      const data = await response.json();
      setJournals(data);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchJournals();
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
        {journals.map((journal, index) => (
          <tr key={journal.id}>
            <td className="border border-gray-300 px-4 py-2">{index + 1}</td>
            <td className="border border-gray-300 px-4 py-2">{journal.judul}</td>
            <td className="border border-gray-300 px-4 py-2">{journal.penulis}</td>
            <td className="border border-gray-300 px-4 py-2">{journal.kategori}</td>
            <td className="border border-gray-300 px-4 py-2">{journal.tahunTerbit}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default DataJurnal;
