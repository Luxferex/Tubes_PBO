import React, { useState } from 'react';
import { FaSearch } from 'react-icons/fa';
import PopUpCRUD from '../home/popUpCRUD'; // Mengganti nama modal
import { createData, updateData, fetchData } from '../CRUD';

const ActionBar = ({ onSearch, searchPlaceholder = 'Search...', type, onDataUpdate, isAnggota }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedData, setSelectedData] = useState(null); // Untuk edit data

  // Untuk tambah data baru
  const handleNewReport = () => {
    setSelectedData(null); // Kosongkan data untuk mode tambah baru
    setIsModalOpen(true);
  };

  // Tutup modal
  const handleModalClose = () => {
    setIsModalOpen(false);
  };

  // Submit data ke server
  const handleSubmit = async (formData) => {
    try {
      if (selectedData) {
        // Jika edit data
        await updateData(type, selectedData.id, formData);
        alert(`${type} berhasil diperbarui!`);
      } else {
        // Jika tambah data baru
        await createData(type, formData);
        alert(`${type} berhasil ditambahkan!`);
      }

      // Fetch data terbaru untuk memperbarui tampilan
      const updatedData = await fetchData(type);
      if (onDataUpdate) onDataUpdate(updatedData); // Panggil callback untuk meng-update data di parent
    } catch (error) {
      console.error('Error:', error);
      alert('Terjadi kesalahan saat menyimpan data.');
    } finally {
      setIsModalOpen(false);
    }
  };

  return (
    <>
      <div className="flex justify-between items-center py-4 px-6 bg-gray-100 rounded-lg shadow-md mb-4">
        <div className="flex space-x-4">
          {isAnggota && (
            <button className="flex items-center bg-blue-500 text-white px-6 py-2 rounded-full hover:bg-blue-600 transition duration-200" onClick={handleNewReport}>
              <span className="mr-2">
                New {type === 'anggota' ? 'Anggota' : 'Tambah Data'} {type.charAt(0).toUpperCase() + type.slice(1)}
              </span>
            </button>
          )}
        </div>

        <div className="flex items-center border border-gray-300 rounded-full w-1/4">
          <FaSearch className="text-gray-500 ml-3" />
          <input type="text" placeholder={searchPlaceholder} className="px-4 py-2 w-full rounded-full outline-none focus:ring-0" onChange={(e) => onSearch(e.target.value)} />
        </div>
      </div>

      <PopUpCRUD isOpen={isModalOpen} onClose={handleModalClose} onSubmit={handleSubmit} type={type} initialData={selectedData} />
    </>
  );
};

export default ActionBar;
