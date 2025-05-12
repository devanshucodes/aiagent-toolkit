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
      aboveContent={
        <div className="max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 relative">
          {/* Top horizontal line */}
          <hr className="border-t border-gray-700 opacity-70 mb-0" />
          <div className="w-full py-2 mb-1 relative flex">
            {/* Vertical divider (absolute, full height) */}
            <div className="absolute left-[180px] top-0 bottom-0 w-px bg-gray-700 opacity-70 z-10" />
            {/* Headline and category bar */}
            <div className="flex items-stretch gap-6 w-full">
              {/* Left: Headline */}
              <div className="flex items-start min-w-[160px] pr-2">
                <span className="text-gray-300 font-mono text-lg font-medium">Agent<br />Categories</span>
              </div>
              {/* Spacer for divider */}
              <div style={{ width: '1.5px' }} />
              {/* Right: Category buttons */}
              <div className="flex flex-wrap gap-2 justify-end flex-1">
                {[
                  'Inference APIs',
                  'RAG',
                  'Data Processing',
                  'Memory',
                  'Compute',
                  'Observability',
                  'Web Scraping',
                  'Hosting',
                  'Sandboxing',
                  'Browser Automation',
                  'Workflow Automation',
                  'Authentication',
                  'Payment',
                  'Blockchain',
                  'Reasoning',
                  'MCP',
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
          {/* Bottom horizontal line */}
          <hr className="border-t border-gray-700 opacity-70 mt-0 mb-2" />
        </div>
      }
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