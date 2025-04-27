import React, { useState } from 'react';
import Navbar from './Navbar';
import Sidebar from './Sidebar';
import { FilterGroup, ThemeMode } from '../../types';
import { filterGroups } from '../../data/filterData';
import HeroImage from '../sections/HeroImage';

interface PageLayoutProps {
  children: React.ReactNode;
  showHero?: boolean;
  customFilters?: FilterGroup[];
}

const PageLayout: React.FC<PageLayoutProps> = ({ 
  children, 
  showHero = true,
  customFilters
}) => {
  const [theme, setTheme] = useState<ThemeMode>('dark');
  const [filters, setFilters] = useState<FilterGroup[]>(customFilters || filterGroups);
  const [searchQuery, setSearchQuery] = useState('');
  
  const toggleTheme = () => {
    setTheme(prev => prev === 'dark' ? 'light' : 'dark');
  };

  const toggleFilter = (category: string, id: string) => {
    setFilters(prevFilters => 
      prevFilters.map(group => 
        group.category === category
          ? {
              ...group,
              options: group.options.map(option => 
                option.id === id
                  ? { ...option, active: !option.active }
                  : option
              )
            }
          : group
      )
    );
  };

  return (
    <div className={`min-h-screen ${theme === 'dark' ? 'bg-black text-white' : 'bg-white text-gray-900'}`}>
      <Navbar theme={theme} toggleTheme={toggleTheme} />
      
      {showHero && (
        <div className="relative bg-black overflow-hidden">
          <div className="absolute inset-0 z-0">
            <div className="absolute inset-0 bg-gradient-to-r from-black via-black/95 to-transparent z-10" />
          </div>
          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-white mb-4 font-mono">
              AI Agent Toolkit
            </h1>
            <p className="text-sm text-gray-400 mb-8 max-w-2xl font-mono">
              A curated collection of the best AI tools, frameworks, and resources
              for building intelligent agents.
            </p>
            <div className="flex">
              <input
                type="text"
                placeholder="Search tools, frameworks, resources ..."
                className="flex-grow py-2 px-4 bg-gray-900/60 text-gray-400 border border-gray-800 rounded-none focus:outline-none focus:border-red-900 focus:ring-0 font-mono text-sm"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <button
                type="submit"
                className="bg-red-900/80 hover:bg-red-800 text-white px-6 py-2 font-mono text-sm uppercase tracking-wider transition-colors duration-200"
              >
                Search
              </button>
            </div>
            <HeroImage />
          </div>
        </div>
      )}

      <div className="flex-1 flex">
        <Sidebar filters={filters} onToggleFilter={toggleFilter} />
        <main className="flex-1 p-4 lg:p-8">
          <div className="max-w-7xl mx-auto">
            {children}
          </div>
        </main>
      </div>
    </div>
  );
};

export default PageLayout;