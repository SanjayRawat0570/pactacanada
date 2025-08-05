import React, { useState } from 'react';
import { searchUsers } from '../api/api';

const Search = () => {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);

  const handleSearch = async () => {
    const res = await searchUsers(query);
    setResults(res.data);
  };

  return (
    <div className="max-w-xl mx-auto p-4">
      <input type="text" value={query} onChange={(e) => setQuery(e.target.value)} placeholder="Search users/projects" className="w-full p-2 border" />
      <button onClick={handleSearch} className="mt-2 px-4 py-2 bg-green-600 text-white">Search</button>
      <ul className="mt-4">
        {results.map((user, i) => (
          <li key={i} className="border-b py-2">{user.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default Search;