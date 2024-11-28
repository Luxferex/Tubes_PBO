import React from 'react';

const Databuku = () => {
  // Data buku contoh, Anda bisa menggantinya dengan data nyata dari API atau Redux
  const books = [
    { id: 1, title: 'React for Beginners', author: 'John Doe', year: 2020 },
    { id: 2, title: 'JavaScript Mastery', author: 'Jane Smith', year: 2021 },
    { id: 3, title: 'Advanced CSS', author: 'Ali Zaid', year: 2022 },
  ];

  return (
    <div className="overflow-x-auto w-full">
      <table className="min-w-full table-auto">
        <thead className="bg-gray-800 text-white">
          <tr>
            <th className="px-4 py-2">ID</th>
            <th className="px-4 py-2">Title</th>
            <th className="px-4 py-2">Author</th>
            <th className="px-4 py-2">Year</th>
          </tr>
        </thead>
        <tbody>
          {books.map((book) => (
            <tr key={book.id} className="border-b">
              <td className="px-4 py-2">{book.id}</td>
              <td className="px-4 py-2">{book.title}</td>
              <td className="px-4 py-2">{book.author}</td>
              <td className="px-4 py-2">{book.year}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Databuku;
