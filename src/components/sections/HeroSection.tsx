import React, { useState, useEffect } from 'react';
import SearchBar from '../ui/SearchBar';
import heroImage from '../../assets/images/ea4a31389d4a5701e70735cf16c0c5bf5de76482.png';

interface HeroSectionProps {
  onSearch: (query: string) => void;
  showSearch?: boolean;
  customDescription?: string;
  customHeadline?: string;
}

const HeroSection: React.FC<HeroSectionProps> = ({ 
  onSearch, 
  showSearch = true,
  customDescription,
  customHeadline
}) => {
  const [searchInput, setSearchInput] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSearch(searchInput.trim());
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setSearchInput(value);
    // Trigger search on every input change
    onSearch(value.trim());
  };

  const defaultDescription = "A curated collection of the best AI tools, frameworks, and resources for building intelligent agents";

  return (
    <div className="relative bg-black overflow-hidden" style={{border: 'none'}}>
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/95 to-transparent z-10" />
      </div>
      
      <div className="relative z-10 max-w-7xl mx-auto flex flex-col lg:flex-row items-start lg:items-center">
        <div className="flex-1 relative py-8">
          <div className="absolute left-6 top-9 h-[160px] hidden lg:flex items-start">
            <div className="w-px bg-gray-600 opacity-40 h-full"></div>
          </div>
          <div className="max-w-xl text-left lg:ml-12 px-5">
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-white mb-3 font-mono">
              {customHeadline || "AI Agent Toolkit"}
            </h1>
            <p className="text-sm text-gray-400 mb-5 max-w-2xl font-mono">
              {customDescription || defaultDescription}
            </p>
            {showSearch && (
              <form onSubmit={handleSubmit} style={{display: 'flex', width: '100%', maxWidth: 500, alignItems: 'center'}}>
                <input
                  type="text"
                  value={searchInput}
                  onChange={handleInputChange}
                  placeholder="Search tools, frameworks, resources ..."
                  className="search-box font-mono text-sm focus:outline-none focus:ring-0"
                  style={{
                    flex: 1,
                    borderTopRightRadius: 0,
                    borderBottomRightRadius: 0,
                    borderRight: 'none',
                    padding: '0.75rem 1rem',
                    backgroundColor: '#1a1a1a',
                    color: 'white',
                    border: '1px solid #333',
                    height: '36px',
                    boxSizing: 'border-box'
                  }}
                />
                <button
                  type="submit"
                  style={{
                    background: 'none',
                    border: 'none',
                    padding: 0,
                    cursor: 'pointer',
                    outline: 'none',
                    marginLeft: '0.25rem',
                    display: 'flex',
                    alignItems: 'center',
                    height: '40px'
                  }}
                >
                  <svg width="96" height="40" viewBox="0 0 96 40" style={{ display: 'block' }}>
                    <polygon
                      points="0,0 96,0 96,32 80,40 0,40"
                      fill="#7C2B22"
                      stroke="#FF846C"
                      strokeWidth="2"
                    />
                    <text
                      x="48"
                      y="25"
                      textAnchor="middle"
                      fill="#fff"
                      fontFamily="'Kode Mono', monospace"
                      fontSize="15"
                      fontWeight="500"
                      style={{ pointerEvents: 'none', userSelect: 'none' }}
                    >
                      Search
                    </text>
                  </svg>
                </button>
              </form>
            )}
          </div>
        </div>
        <img 
          src={heroImage} 
          alt="AI Agent Toolkit Hero" 
          className="hidden lg:block absolute -scale-x-100 w-2/3 md:w-1/2 lg:w-1/3 h-auto top-[-20%] right-8 object-contain rounded-none shadow-lg"
        />
      </div>
      <div style={{position: 'absolute', left: 0, right: 0, bottom: 0, height: '2px', background: '#27262b', opacity: 0.7, zIndex: 20}} />
    </div>
  );
};

export default HeroSection;