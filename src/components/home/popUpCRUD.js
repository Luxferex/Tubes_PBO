import React, { useState, useEffect } from 'react';

const PopUpCRUD = ({ isOpen, onClose, onSubmit, initialData, type = 'anggota' }) => {
  // Default data structure depending on the 'type'
  const defaultData = {
    anggota: { nama: '', nim: '', jurusan: '', noTelp: '' },
    buku: { judul: '', stok_Tersedia: 0, stok_Dibutuhkan: 0 },
    jurnal: { judul: '', stok_Tersedia: 0, stok_Dibutuhkan: 0 },
    majalah: { judul: '', stok_Tersedia: 0, stok_Dibutuhkan: 0 },
  };

  // Set initial form data
  const [formData, setFormData] = useState(initialData || defaultData[type]);

  useEffect(() => {
    // Reset the form data when the 'initialData' or 'type' changes
    setFormData(initialData || defaultData[type]);
  }, [initialData, type]);

  // Handle field changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
  };

  // Function to calculate kekurangan
  const calculateKekurangan = () => {
    const kekurangan = formData.stok_Dibutuhkan - formData.stok_Tersedia;
    return kekurangan <= 0 ? 'Tidak ada kekurangan' : kekurangan;
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
      <div className="bg-white p-6 rounded shadow-md w-full max-w-lg">
        <h2 className="text-xl font-bold mb-4">{type === 'anggota' ? 'Tambah/Edit Anggota' : 'Tambah/Edit Buku/Jurnal/Majalah'}</h2>
        <form onSubmit={handleSubmit}>
          {/* Anggota form fields */}
          {type === 'anggota' ? (
            <>
              <label className="block mb-2">
                Nama
                <input type="text" name="nama" value={formData.nama} onChange={handleChange} className="w-full border border-gray-300 p-2 rounded" required />
              </label>
              <label className="block mb-2">
                NIM
                <input type="text" name="nim" value={formData.nim} onChange={handleChange} className="w-full border border-gray-300 p-2 rounded" required />
              </label>
              <label className="block mb-2">
                Jurusan
                <input type="text" name="jurusan" value={formData.jurusan} onChange={handleChange} className="w-full border border-gray-300 p-2 rounded" required />
              </label>
              <label className="block mb-2">
                No Telp
                <input type="text" name="noTelp" value={formData.noTelp} onChange={handleChange} className="w-full border border-gray-300 p-2 rounded" required />
              </label>
            </>
          ) : (
            // Buku/Jurnal/Majalah form fields
            <>
              <label className="block mb-2">
                Judul
                <input type="text" name="judul" value={formData.judul} onChange={handleChange} className="w-full border border-gray-300 p-2 rounded" required />
              </label>
              <label className="block mb-2">
                Stok Tersedia
                <input type="number" name="stok_Tersedia" value={formData.stok_Tersedia} onChange={handleChange} className="w-full border border-gray-300 p-2 rounded" required />
              </label>
              <label className="block mb-2">
                Stok Dibutuhkan
                <input type="number" name="stok_Dibutuhkan" value={formData.stok_Dibutuhkan} onChange={handleChange} className="w-full border border-gray-300 p-2 rounded" required />
              </label>
              <label className="block mb-2">
                Kekurangan
                <input type="text" name="kekurangan" value={calculateKekurangan()} disabled className="w-full border border-gray-300 p-2 rounded" />
              </label>
            </>
          )}
          <div className="flex justify-end mt-4">
            <button type="button" onClick={onClose} className="bg-gray-500 text-white px-4 py-2 rounded mr-2 hover:bg-gray-600">
              Cancel
            </button>
            <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default PopUpCRUD;
