import React, { useState, useEffect } from 'react';
import PageLayout from '../components/layout/PageLayout';
import { LibraryToolsSection } from '../components/sections/LibraryToolsSection';
import { toolsFilters } from '../data/filterData';
import { FilterGroup } from '../types';

const ToolsLibraries: React.FC = () => {
  const [filters, setFilters] = useState<FilterGroup[]>(toolsFilters);
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
      isToolsPage={true}
    >
      <div className="space-y-4">
        <LibraryToolsSection 
          title="Inference APIs" 
          section="inference-apis"
          searchQuery={searchQuery}
        />
        <LibraryToolsSection 
          title="RAG" 
          section="rag"
          searchQuery={searchQuery}
        />
        <LibraryToolsSection 
          title="Data Processing" 
          section="data-processing"
          searchQuery={searchQuery}
        />
        <LibraryToolsSection 
          title="Memory" 
          section="memory"
          searchQuery={searchQuery}
        />
        <LibraryToolsSection 
          title="Compute" 
          section="compute"
          searchQuery={searchQuery}
        />
        <LibraryToolsSection 
          title="Observability" 
          section="observability"
          searchQuery={searchQuery}
        />
        <LibraryToolsSection 
          title="Web Scraping" 
          section="web-scraping"
          searchQuery={searchQuery}
        />
        <LibraryToolsSection 
          title="Hosting" 
          section="hosting"
          searchQuery={searchQuery}
        />
        <LibraryToolsSection 
          title="Sandboxing" 
          section="sandboxing"
          searchQuery={searchQuery}
        />
        <LibraryToolsSection 
          title="Browser Automation" 
          section="browser-automation"
          searchQuery={searchQuery}
        />
        <LibraryToolsSection 
          title="Workflow Automation" 
          section="workflow-automation"
          searchQuery={searchQuery}
        />
        <LibraryToolsSection 
          title="Authentication" 
          section="authentication"
          searchQuery={searchQuery}
        />
        <LibraryToolsSection 
          title="Payment" 
          section="payment"
          searchQuery={searchQuery}
        />
        <LibraryToolsSection 
          title="Blockchain" 
          section="blockchain"
          searchQuery={searchQuery}
        />
        <LibraryToolsSection 
          title="Reasoning" 
          section="reasoning"
          searchQuery={searchQuery}
        />
        <LibraryToolsSection 
          title="MCP" 
          section="mcp"
          searchQuery={searchQuery}
        />
      </div>
    </PageLayout>
  );
};

export default ToolsLibraries;