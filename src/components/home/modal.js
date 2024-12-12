import React, { useState, useEffect } from 'react';

const Modal = ({ isOpen, onClose, onSubmit, initialData = null }) => {
  const [formData, setFormData] = useState({
    judul: '',
    stok_Tersedia: 0,
    stok_Dibutuhkan: 0, // Pastikan sesuai dengan format backend
  });

  // Update form data jika ada `initialData` (untuk update)
  useEffect(() => {
    if (initialData) {
      setFormData(initialData);
    } else {
      setFormData({
        judul: '',
        stok_Tersedia: 0,
        stok_Dibutuhkan: 0,
      });
    }
  }, [initialData]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Tambahkan id jika data berasal dari initialData
    const dataToSubmit = initialData ? { ...formData, id: initialData.id } : formData;

    onSubmit(dataToSubmit); // Kirim ke parent untuk handle logika update atau tambah
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
      <div className="bg-white rounded-lg p-6 w-1/3">
        <h2 className="text-xl font-bold mb-4">{initialData ? 'Perbarui data' : 'Tambah data Baru'}</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-sm font-bold mb-2">Judul</label>
            <input type="text" name="judul" value={formData.judul} onChange={handleChange} className="w-full px-3 py-2 border rounded" required />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-bold mb-2">Stok Tersedia</label>
            <input type="number" name="stok_Tersedia" value={formData.stok_Tersedia} onChange={handleChange} className="w-full px-3 py-2 border rounded" required />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-bold mb-2">Stok Dibutuhkan</label>
            <input type="number" name="stok_Dibutuhkan" value={formData.stok_Dibutuhkan} onChange={handleChange} className="w-full px-3 py-2 border rounded" required />
          </div>
          <div className="flex justify-end">
            <button type="button" className="mr-2 px-4 py-2 bg-gray-300 rounded" onClick={onClose}>
              Batal
            </button>
            <button type="submit" className="px-4 py-2 bg-blue-500 text-white rounded">
              {initialData ? 'Perbarui' : 'Simpan'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Modal;
