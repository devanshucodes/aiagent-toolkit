import React, { useState, useEffect } from 'react';
import Navbar from './Navbar';
import Sidebar from './Sidebar';
import HeroSection from '../sections/HeroSection';
import SanityToolsSection from '../sections/SanityToolsSection';
import { filterGroups } from '../../data/filterData';
import { FilterGroup } from '../../types';

const MainLayout: React.FC = () => {
  const [filters, setFilters] = useState<FilterGroup[]>(filterGroups);
  const [searchQuery, setSearchQuery] = useState('');
  
  // Initialize search from URL if present
  useEffect(() => {
    const searchParams = new URLSearchParams(window.location.search);
    const query = searchParams.get('search');
    if (query) {
      setSearchQuery(query);
    }
  }, []);

  // Listen for search events from the parent
  useEffect(() => {
    const handleGlobalSearch = (event: CustomEvent) => {
      const { query } = event.detail;
      setSearchQuery(query);
    };

    window.addEventListener('globalSearch' as any, handleGlobalSearch);
    return () => {
      window.removeEventListener('globalSearch' as any, handleGlobalSearch);
    };
  }, []);
  
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
    
    // Update URL with search query
    const searchParams = new URLSearchParams(window.location.search);
    if (query) {
      searchParams.set('search', query);
    } else {
      searchParams.delete('search');
    }
    const newUrl = `${window.location.pathname}${searchParams.toString() ? '?' + searchParams.toString() : ''}`;
    window.history.pushState({}, '', newUrl);

    // Dispatch a custom event with the current page and search query
    const searchEvent = new CustomEvent('globalSearch', {
      detail: {
        query,
        page: 'agents'
      }
    });
    window.dispatchEvent(searchEvent);
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
    <div className="min-h-screen flex flex-col bg-black text-white pt-14">
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
                searchQuery={searchQuery}
              />
              <SanityToolsSection 
                title="Top AI Agent Apps" 
                category="top-ai-agent-apps"
                searchQuery={searchQuery}
              />
              <SanityToolsSection 
                title="Top LLMs" 
                category="top-llms"
                searchQuery={searchQuery}
              />
              <SanityToolsSection 
                title="Web3 AI Agent SDKs" 
                category="web3-ai-agent-sdks"
                searchQuery={searchQuery}
              />
              <SanityToolsSection 
                title="AI Agent Framework" 
                category="ai-agent-framework"
                searchQuery={searchQuery}
              />
              <SanityToolsSection 
                title="AI Agent Infrastructure" 
                category="ai-agent-infrastructure"
                searchQuery={searchQuery}
              />
              <SanityToolsSection 
                title="AI Agent Launchpads" 
                category="ai-agent-launchpads"
                searchQuery={searchQuery}
              />
              <SanityToolsSection 
                title="Automation" 
                category="automation"
                searchQuery={searchQuery}
              />
              <SanityToolsSection 
                title="Tech Stack" 
                category="tech-stack"
                searchQuery={searchQuery}
              />
            </div>
          </main>
        </div>
      </div>
    </div>
  );
};

export default MainLayout;