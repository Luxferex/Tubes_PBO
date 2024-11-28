import React, { useState, useEffect } from 'react';

const DataMajalah = () => {
  const [magazines, setMagazines] = useState([]); // State untuk menyimpan data majalah
  const [loading, setLoading] = useState(true); // State untuk menandai loading
  const [error, setError] = useState(null); // State untuk error handling

  // Fungsi untuk mengambil data dari backend
  const fetchMagazines = async () => {
    try {
      const response = await fetch('http://localhost:8080/majalah'); // Endpoint backend majalah
      if (!response.ok) {
        throw new Error('Gagal mengambil data majalah');
      }
      const data = await response.json();
      setMagazines(data);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchMagazines();
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <table className="table-auto w-full border-collapse border border-gray-300">
      <thead>
        <tr>
          <th className="border border-gray-300 px-4 py-2">No</th>
          <th className="border border-gray-300 px-4 py-2">Judul</th>
          <th className="border border-gray-300 px-4 py-2">Penerbit</th>
          <th className="border border-gray-300 px-4 py-2">Kategori</th>
          <th className="border border-gray-300 px-4 py-2">Tahun Terbit</th>
        </tr>
      </thead>
      <tbody>
        {magazines.map((magazine, index) => (
          <tr key={magazine.id}>
            <td className="border border-gray-300 px-4 py-2">{index + 1}</td>
            <td className="border border-gray-300 px-4 py-2">{magazine.judul}</td>
            <td className="border border-gray-300 px-4 py-2">{magazine.penerbit}</td>
            <td className="border border-gray-300 px-4 py-2">{magazine.kategori}</td>
            <td className="border border-gray-300 px-4 py-2">{magazine.tahunTerbit}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default DataMajalah;
