import React from 'react';

const DataMajalah = () => {
  const magazines = [
    { id: 1, title: 'Tech Weekly', editor: 'Ali Zaid', year: 2023 },
    { id: 2, title: 'Design Today', editor: 'Sara White', year: 2022 },
    { id: 3, title: 'Digital World', editor: 'Tom Brown', year: 2021 },
  ];

  return (
    <div className="overflow-x-auto w-full">
      <table className="min-w-full table-auto">
        <thead className="bg-gray-800 text-white">
          <tr>
            <th className="px-4 py-2">ID</th>
            <th className="px-4 py-2">Title</th>
            <th className="px-4 py-2">Editor</th>
            <th className="px-4 py-2">Year</th>
          </tr>
        </thead>
        <tbody>
          {magazines.map((magazine) => (
            <tr key={magazine.id} className="border-b">
              <td className="px-4 py-2">{magazine.id}</td>
              <td className="px-4 py-2">{magazine.title}</td>
              <td className="px-4 py-2">{magazine.editor}</td>
              <td className="px-4 py-2">{magazine.year}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default DataMajalah;
