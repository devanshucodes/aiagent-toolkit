import React, { useState } from 'react';
import Navbar from './Navbar';
import Sidebar from './Sidebar';
import { FilterGroup, ThemeMode } from '../../types';
import { filterGroups } from '../../data/filterData';
import HeroSection from '../sections/HeroSection';

interface PageLayoutProps {
  children: React.ReactNode;
  showHero?: boolean;
  showSidebar?: boolean;
  customFilters?: FilterGroup[];
  isToolsPage?: boolean;
  onToggleFilter?: (category: string, id: string) => void;
}

const PageLayout: React.FC<PageLayoutProps> = ({ 
  children, 
  showHero = true,
  showSidebar = true,
  customFilters,
  isToolsPage = false,
  onToggleFilter
}) => {
  const [theme, setTheme] = useState<ThemeMode>('dark');
  const [filters, setFilters] = useState<FilterGroup[]>(customFilters || filterGroups);
  
  const toggleTheme = () => {
    setTheme(prev => prev === 'dark' ? 'light' : 'dark');
  };

  const handleSearch = (query: string) => {
    // Get the current page from the URL
    const currentPath = window.location.pathname;
    let currentPage = 'home';
    
    if (currentPath.includes('tools')) {
      currentPage = 'tools';
    } else if (currentPath.includes('agents')) {
      currentPage = 'agents';
    } else if (currentPath.includes('communities')) {
      currentPage = 'communities';
    } else if (currentPath.includes('courses')) {
      currentPage = 'courses';
    }

    // Dispatch a custom event with the current page and search query
    const searchEvent = new CustomEvent('globalSearch', {
      detail: {
        query,
        page: currentPage
      }
    });
    window.dispatchEvent(searchEvent);
  };

  const toggleFilter = (category: string, id: string) => {
    if (onToggleFilter) {
      onToggleFilter(category, id);
    } else {
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
    }
  };

  return (
    <div className={`min-h-screen flex flex-col ${theme === 'dark' ? 'bg-black text-white' : 'bg-white text-gray-900'} pt-14`}>
      <Navbar />
      
      {showHero && <HeroSection onSearch={handleSearch} />}

      {/* Category Bar centered above filters and main content */}
      <div className="max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8">
        <div className="w-full overflow-x-auto py-2 mb-1">
          <div className="flex space-x-2 min-w-max justify-center">
            {[
              'Agent Tools',
              'Top LLMs',
              'Web3 AI Agent SDKs',
              'Agent Framework',
              'Agent Infrastructure',
              'Agent Launchpads',
              'Automation',
              'Tech Stack',
            ].map((cat) => (
              <button
                key={cat}
                className="filter-option px-4 py-2 text-sm font-mono whitespace-nowrap"
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </div>
      {/* End Category Bar */}

      {/* Divider line below category bar */}
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <hr className="border-t border-gray-700 opacity-70 mb-2" />
      </div>

      <div className="flex-1 flex flex-col lg:flex-row max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8">
        {showSidebar && (
          <div className="lg:w-64 lg:flex-shrink-0">
            <Sidebar 
              filters={filters} 
              onToggleFilter={toggleFilter}
              isToolsPage={isToolsPage}
            />
          </div>
        )}
        <div className="flex-1">
          <main className="flex-1 overflow-auto p-4 lg:p-8">
            {children}
          </main>
        </div>
      </div>
    </div>
  );
};

export default PageLayout;