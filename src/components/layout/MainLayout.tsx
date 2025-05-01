import React, { useState } from 'react';
import Navbar from './Navbar';
import Sidebar from './Sidebar';
import HeroSection from '../sections/HeroSection';
import SanityToolsSection from '../sections/SanityToolsSection';
import { filterGroups } from '../../data/filterData';
import { FilterGroup } from '../../types';
import { createPortal } from 'react-dom';

const MainLayout: React.FC = () => {
  const [filters, setFilters] = useState<FilterGroup[]>(filterGroups);
  const [searchQuery, setSearchQuery] = useState('');
  
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
  
  const handleSearch = (query: string) => {
    setSearchQuery(query);
    // Implement search logic here
  };
  
  // Add special CSS for the pixel font effect
  React.useEffect(() => {
    const style = document.createElement('style');
    style.textContent = `
      @import url('https://fonts.googleapis.com/css2?family=Space+Mono:wght@400;700&display=swap');
      
      .font-pixel {
        font-family: 'Space Mono', monospace;
        letter-spacing: -0.05em;
      }
      
      body {
        font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
      }
    `;
    document.head.appendChild(style);
    
    return () => {
      document.head.removeChild(style);
    };
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-black text-white">
      <Navbar />
      
      <HeroSection onSearch={handleSearch} />
      
      <div className="flex-1 flex flex-col lg:flex-row max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8">
        <div className="lg:w-64 lg:flex-shrink-0">
          <Sidebar filters={filters} onToggleFilter={toggleFilter} />
        </div>
        
        <div className="flex-1">
          <main className="flex-1 overflow-auto p-4 lg:p-8">
            <div>
              <SanityToolsSection 
                title="AI Agent Tools" 
                category="ai-agent-tools" 
              />
              <SanityToolsSection 
                title="Top AI Agent Apps" 
                category="top-ai-agent-apps" 
              />
            </div>
          </main>
        </div>
      </div>
    </div>
  );
};

export default MainLayout;