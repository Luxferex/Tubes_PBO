import React, { useState, useEffect } from 'react';

const Datamajalah = () => {
  const [majalah, setmajalah] = useState([]); // State untuk menyimpan data majalah
  const [loading, setLoading] = useState(true); // State untuk menandai loading
  const [error, setError] = useState(null); // State untuk error handling

  // Fungsi untuk mengambil data dari backend
  const fetchmajalah = async () => {
    try {
      const response = await fetch('http://localhost:8080/majalah'); // Endpoint backend majalah
      if (!response.ok) {
        throw new Error('Gagal mengambil data majalah');
      }
      const data = await response.json();
      setmajalah(data);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchmajalah();
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

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
        {majalah.map((majalah, index) => {
          const kekurangan = majalah.stokKebutuhan - majalah.stokTersedia; // Hitung kekurangan
          return (
            <tr key={majalah.id}>
              <td className="border border-gray-300 px-1 py-2 text-center align-middle">{index + 1}</td>
              <td className="border border-gray-300 px-4 py-2">{majalah.judul}</td>
              <td className="border border-gray-300 px-4 py-2 text-center align-middle">{majalah.stokTersedia}</td>
              <td className="border border-gray-300 px-4 py-2 text-center align-middle">{majalah.stokKebutuhan}</td>
              <td className="border border-gray-300 px-4 py-2 text-center align-middle">{kekurangan > 0 ? kekurangan : 'Tidak ada kekurangan'}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default Datamajalah;
