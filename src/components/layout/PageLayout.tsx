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
  aboveContent?: React.ReactNode;
  hideHeroSearch?: boolean;
  heroDescription?: string;
  heroHeadline?: string;
  hideFiltersOnMobile?: boolean;
}

const PageLayout: React.FC<PageLayoutProps> = ({ 
  children, 
  showHero = true,
  showSidebar = true,
  customFilters,
  isToolsPage = false,
  onToggleFilter,
  aboveContent,
  hideHeroSearch = false,
  heroDescription,
  heroHeadline,
  hideFiltersOnMobile = false
}) => {
  const [theme, setTheme] = useState<ThemeMode>('dark');
  
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
      // This logic is not provided in the original file or the code block
      // It's assumed to exist as it's called in the Sidebar component
    }
  };

  return (
    <div className={`min-h-screen flex flex-col ${theme === 'dark' ? 'bg-black text-white' : 'bg-white text-gray-900'} pt-14`}>
      <Navbar />
      
      {showHero && (
        <HeroSection 
          onSearch={handleSearch} 
          showSearch={!hideHeroSearch} 
          customDescription={heroDescription}
          customHeadline={heroHeadline}
        />
      )}

      {aboveContent}

      <div className="flex-1 flex flex-col lg:flex-row max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8">
        {showSidebar && (
          <div className={`${isToolsPage || hideFiltersOnMobile ? 'hidden lg:block' : ''} lg:w-64 lg:flex-shrink-0`}>
            <Sidebar 
              filters={customFilters || filterGroups} 
              onToggleFilter={toggleFilter}
              isToolsPage={isToolsPage}
            />
          </div>
        )}
        <div className="flex-1">
          <main className="flex-1 overflow-auto">
            {children}
          </main>
        </div>
      </div>
    </div>
  );
};

export default PageLayout;