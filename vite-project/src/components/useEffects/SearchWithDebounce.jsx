import React, { useState, useEffect } from 'react';

const mockUsers = [
  { id: 1, name: 'Purv Patel' },
  { id: 2, name: 'John Doe' },
  { id: 3, name: 'Clementine Bauch' },
  { id: 4, name: 'Leanne Graham' },
  { id: 5, name: 'Ervin Howell' },
  { id: 6, name: 'Chelsey Dietrich' },
  { id: 7, name: 'Kurtis Weissnat' },
  { id: 8, name: 'Nicholas Runolfsdottir' },
  { id: 9, name: 'Glenna Reichert' },
  { id: 10, name: 'Patricia Lebsack' },
];

function SearchWithDebounce() {
  const [searchTerm, setSearchTerm] = useState('');
  const [results, setResults] = useState([]);

  useEffect(() => {
    const timeout = setTimeout(() => {
      if (searchTerm.trim() !== '') {
        const filtered = mockUsers.filter(user =>
          user.name.toLowerCase().includes(searchTerm.toLowerCase())
        );
        setResults(filtered);
      } else {
        setResults([]);
      }
    }, 500);

    return () => clearTimeout(timeout);
  }, [searchTerm]);

  return (
    <>
      <div className="p-4">
        <h2 className="text-lg font-bold mb-2">Search With Debounce</h2>
        <input
          type="text"
          value={searchTerm}
          placeholder="Search user name..."
          onChange={(e) => setSearchTerm(e.target.value)}
          className="border p-2 w-full max-w-md"
        />
        <ul className="mt-4 list-disc pl-5">
          {results.map((user) => (
            <li key={user.id}>{user.name}</li>
          ))}
        </ul>
      </div>
    </>
  );
}

export default SearchWithDebounce;
