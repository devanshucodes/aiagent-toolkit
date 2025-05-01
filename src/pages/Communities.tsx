import React from 'react';
import { SanityCommunitiesSection } from '../components/sections/SanityCommunitiesSection';
import PageLayout from '../components/layout/PageLayout';
import { filterGroups } from '../data/filterData';
import { FilterGroup } from '../types';

const Communities: React.FC = () => {
  const [filters, setFilters] = React.useState<FilterGroup[]>(filterGroups);

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
      <SanityCommunitiesSection title="AI Agent Communities" />
    </PageLayout>
  );
};

export default Communities;