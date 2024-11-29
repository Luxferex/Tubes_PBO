import React from 'react';
import { FaSearch } from 'react-icons/fa'; // Import ikon untuk search

const ActionBar = ({ onSearch, onNewReport, onExport, searchPlaceholder = 'Search...' }) => {
  return (
    <div className="flex justify-between items-center py-4 px-6 bg-gray-100 rounded-lg shadow-md mb-4">
      <div className="flex space-x-4">
        <button className="flex items-center bg-blue-500 text-white px-6 py-2 rounded-full hover:bg-blue-600 transition duration-200" onClick={onNewReport}>
          <span className="mr-2">New Report</span>
        </button>
        <button className="flex items-center bg-gray-200 text-black px-6 py-2 rounded-full hover:bg-gray-300 transition duration-200" onClick={onExport}>
          <span className="mr-2">Export</span>
        </button>
      </div>

      <div className="flex items-center border border-gray-300 rounded-full w-1/4">
        <FaSearch className="text-gray-500 ml-3" />
        <input type="text" placeholder={searchPlaceholder} className="px-4 py-2 w-full rounded-full outline-none focus:ring-0" onChange={(e) => onSearch(e.target.value)} />
      </div>
    </div>
  );
};

export default ActionBar;
