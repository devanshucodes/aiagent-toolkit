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
        className="flex-grow py-2 px-4 bg-gray-900/60 text-gray-400 border border-gray-800 rounded-none focus:outline-none focus:border-purple-500 focus:ring-0 font-mono text-sm"
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