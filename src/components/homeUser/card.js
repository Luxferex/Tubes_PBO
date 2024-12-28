import React, { useEffect, useState } from 'react';
import { FaInfoCircle, FaShoppingCart, FaBook, FaNewspaper, FaBookOpen } from 'react-icons/fa';
import axios from 'axios';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const Card = () => {
  const [items, setItems] = useState([]);
  const { selectedMenu } = useSelector((state) => state.ui);
  const { isProfileComplete } = useSelector((state) => state.user);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      let endpoint = '';
      switch (selectedMenu) {
        case 'databuku':
          endpoint = 'http://localhost:8080/buku';
          break;
        case 'dataMajalah':
          endpoint = 'http://localhost:8080/majalah';
          break;
        case 'dataJurnal':
          endpoint = 'http://localhost:8080/jurnal';
          break;
        default:
          setItems([]);
          return;
      }

      try {
        const response = await axios.get(endpoint);
        setItems(response.data);
      } catch (error) {
        console.error(`Error fetching data from ${endpoint}:`, error);
      }
    };

    fetchData();
  }, [selectedMenu]);

  const handleDetailClick = (itemId) => {
    alert(`Detail Item: ${itemId}`);
  };

  const handleAddToCart = (itemId) => {
    if (!isProfileComplete) {
      alert('Silakan lengkapi profil Anda sebelum menambah buku ke keranjang.');
      return;
    }
    navigate('/keranjang', { state: { itemId } });
  };

  const renderIcon = () => {
    switch (selectedMenu) {
      case 'databuku':
        return <FaBook className="w-24 h-24 text-gray-500 mb-4" />;
      case 'dataMajalah':
        return <FaBookOpen className="w-24 h-24 text-gray-500 mb-4" />;
      case 'dataJurnal':
        return <FaNewspaper className="w-24 h-24 text-gray-500 mb-4" />;
      default:
        return null;
    }
  };

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 p-4">
      {items.map((item) => (
        <div key={item.id} className="bg-gray-100 rounded-lg shadow-md p-4 flex flex-col items-center text-center hover:shadow-lg transition-shadow duration-200">
          {item.image ? <img src={item.image} alt={item.judul || item.nama} className="w-24 h-24 object-cover mb-4 rounded-md" /> : renderIcon()}
          <h3 className="text-lg font-semibold text-gray-700 mb-2">{item.judul || item.nama}</h3>
          <div className="flex space-x-4">
            <button onClick={() => handleDetailClick(item.id)} className="text-blue-500 hover:text-blue-700 transition-colors" title="Detail Item">
              <FaInfoCircle size={20} />
            </button>
            <button onClick={() => handleAddToCart(item.id)} className="text-green-500 hover:text-green-700 transition-colors" title="Tambah ke Keranjang">
              <FaShoppingCart size={20} />
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Card;
