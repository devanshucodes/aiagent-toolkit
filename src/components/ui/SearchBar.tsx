import React, { useState } from 'react';

interface SearchBarProps {
  onSearch: (query: string) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ onSearch }) => {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSearch(searchQuery);
  };

  return (
    <form onSubmit={handleSubmit} className="w-full max-w-xl flex">
      <input
        type="text"
        placeholder="Search tools, frameworks, resources ..."
        className="search-box flex-grow py-2 px-4 font-mono text-sm"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
      />
      <button
        type="submit"
        className="bg-red-900/80 hover:bg-red-800 text-white px-6 py-2 font-mono text-sm uppercase tracking-wider transition-colors duration-200"
      >
        Search
      </button>
    </form>
  );
};

export default SearchBar;