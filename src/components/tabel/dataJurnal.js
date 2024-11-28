import React from 'react';

const DataJurnal = () => {
  const journals = [
    { id: 1, title: 'AI Research Journal', editor: 'John Doe', year: 2023 },
    { id: 2, title: 'Data Science Review', editor: 'Alice Lee', year: 2022 },
    { id: 3, title: 'Computer Science Advances', editor: 'James Park', year: 2021 },
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
          {journals.map((journal) => (
            <tr key={journal.id} className="border-b">
              <td className="px-4 py-2">{journal.id}</td>
              <td className="px-4 py-2">{journal.title}</td>
              <td className="px-4 py-2">{journal.editor}</td>
              <td className="px-4 py-2">{journal.year}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default DataJurnal;
