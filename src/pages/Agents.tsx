import React, { useState, useEffect } from 'react';
import PageLayout from '../components/layout/PageLayout';
import SanityToolsSection from '../components/sections/SanityToolsSection';
import { filterGroups } from '../data/filterData';
import { FilterGroup } from '../types';

const Agents: React.FC = () => {
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

  return (
    <PageLayout 
      customFilters={filters} 
      onToggleFilter={handleToggleFilter}
    >
      {/* Filter section and tool cards below */}
      {/** The filter section is rendered by the Sidebar in PageLayout, so no need to move it here. The bar will now appear above the filters visually. */}
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