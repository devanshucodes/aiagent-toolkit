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
  const [searchQuery, setSearchQuery] = useState('');
  
  const toggleTheme = () => {
    setTheme(prev => prev === 'dark' ? 'light' : 'dark');
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
      
      {showHero && <HeroSection onSearch={() => {}} />}

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