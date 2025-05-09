import React, { useState } from 'react';
import PageLayout from '../components/layout/PageLayout';
import { LibraryToolsSection } from '../components/sections/LibraryToolsSection';
import { toolsFilters } from '../data/filterData';
import { FilterGroup } from '../types';

const ToolsLibraries: React.FC = () => {
  const [filters, setFilters] = useState<FilterGroup[]>(toolsFilters);

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
        />
        <LibraryToolsSection 
          title="RAG" 
          section="rag" 
        />
        <LibraryToolsSection 
          title="Data Processing" 
          section="data-processing" 
        />
        <LibraryToolsSection 
          title="Memory" 
          section="memory" 
        />
        <LibraryToolsSection 
          title="Compute" 
          section="compute" 
        />
        <LibraryToolsSection 
          title="Observability" 
          section="observability" 
        />
        <LibraryToolsSection 
          title="Web Scraping" 
          section="web-scraping" 
        />
        <LibraryToolsSection 
          title="Hosting" 
          section="hosting" 
        />
        <LibraryToolsSection 
          title="Sandboxing" 
          section="sandboxing" 
        />
        <LibraryToolsSection 
          title="Browser Automation" 
          section="browser-automation" 
        />
        <LibraryToolsSection 
          title="Workflow Automation" 
          section="workflow-automation" 
        />
        <LibraryToolsSection 
          title="Authentication" 
          section="authentication" 
        />
        <LibraryToolsSection 
          title="Payment" 
          section="payment" 
        />
        <LibraryToolsSection 
          title="Blockchain" 
          section="blockchain" 
        />
        <LibraryToolsSection 
          title="Reasoning" 
          section="reasoning" 
        />
        <LibraryToolsSection 
          title="MCP" 
          section="mcp" 
        />
      </div>
    </PageLayout>
  );
};

export default ToolsLibraries;