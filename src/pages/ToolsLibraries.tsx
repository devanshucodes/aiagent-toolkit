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
      <div className="space-y-12">
        <LibraryToolsSection 
          title="Inference & Data Processing Tools" 
          section="inference" 
        />
        <LibraryToolsSection 
          title="Observability & Monitoring Tools" 
          section="observability" 
        />
        <LibraryToolsSection 
          title="Automation Tools" 
          section="automation" 
        />
      </div>
    </PageLayout>
  );
};

export default ToolsLibraries;