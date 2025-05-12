import React, { useState, useEffect } from 'react';
import PageLayout from '../components/layout/PageLayout';
import SanityToolsSection from '../components/sections/SanityToolsSection';
import { filterGroups } from '../data/filterData';
import { FilterGroup } from '../types';
import '../styles/agents.css';

const AGENT_CATEGORIES = [
  'Agent Tools',
  'Top LLMs',
  'Web3 AI Agent SDKs',
  'Agent Framework',
  'Agent Infrastructure',
  'Agent Launchpads',
  'Automation',
  'Tech Stack',
] as const;

type AgentCategory = typeof AGENT_CATEGORIES[number];

const Agents: React.FC = () => {
  const [filters, setFilters] = useState<FilterGroup[]>(filterGroups);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');

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

  const handleToggleFilter = (category: string, id: string) => {
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

  const handleCategoryClick = (category: string) => {
    setSelectedCategory(category);
  };

  return (
    <PageLayout 
      customFilters={filters} 
      onToggleFilter={handleToggleFilter}
      aboveContent={
        <div className="max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 relative">
          <hr className="border-t border-gray-700 opacity-70 mb-0" />
          <div className="w-full py-2 mb-1 relative flex">
            <div className="absolute left-[180px] top-0 bottom-0 w-px bg-gray-700 opacity-70 z-10" />
            <div className="flex items-stretch gap-6 w-full">
              <div className="flex items-start min-w-[160px] pr-2">
                <span className="text-gray-300 font-mono text-lg font-medium">Agent<br />Categories</span>
              </div>
              <div style={{ width: '1.5px' }} />
              <div className="flex flex-wrap gap-2 justify-end flex-1">
                {AGENT_CATEGORIES.map((cat) => (
                  <button
                    key={cat}
                    onClick={() => handleCategoryClick(cat)}
                    className={`agents-btn px-4 py-2 text-sm font-mono whitespace-nowrap ${
                      selectedCategory === cat ? 'active' : ''
                    }`}
                  >
                    {cat}
                  </button>
                ))}
              </div>
            </div>
          </div>
          <hr className="border-t border-gray-700 opacity-70 mt-0 mb-2" />
        </div>
      }
    >
      {/* Main content: filters and cards */}
      <div className="space-y-4">
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
    </PageLayout>
  );
};

export default Agents; 