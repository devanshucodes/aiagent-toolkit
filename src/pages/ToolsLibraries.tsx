import React, { useState, useMemo } from 'react';
import PageLayout from '../components/layout/PageLayout';
import ToolsSection from '../components/sections/ToolsSection';
import { toolsFilters } from '../data/filterData';
import { inferenceTools, observabilityTools, automationTools } from '../data/toolsData';
import { Tool, FilterGroup } from '../types';

const ToolsLibraries: React.FC = () => {
  const [filters, setFilters] = useState<FilterGroup[]>(toolsFilters);

  const getActiveFilters = (category: string) => {
    const group = filters.find(g => g.category === category);
    return group ? group.options.filter(opt => opt.active).map(opt => opt.id) : [];
  };

  const filterTools = (tools: Tool[]) => {
    const activeSubscriptions = getActiveFilters('Subscription');
    const activeCategories = getActiveFilters('Categories');

    return tools.filter(tool => {
      const subscriptionMatch = activeSubscriptions.length === 0 || 
        (activeSubscriptions.includes('free-to-use') && tool.type === 'Free') ||
        (activeSubscriptions.includes('paid') && tool.type === 'Paid') ||
        (activeSubscriptions.includes('freemium') && tool.type === 'Freemium');

      const categoryMatch = activeCategories.length === 0 || 
        tool.category.some(cat => 
          activeCategories.includes(cat.toLowerCase().replace(/\s+/g, '-'))
        );

      return subscriptionMatch && categoryMatch;
    });
  };

  const filteredInferenceTools = useMemo(() => filterTools(inferenceTools), [filters]);
  const filteredObservabilityTools = useMemo(() => filterTools(observabilityTools), [filters]);
  const filteredAutomationTools = useMemo(() => filterTools(automationTools), [filters]);

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
        <ToolsSection title="Inference & Data Processing" tools={filteredInferenceTools} />
        <ToolsSection title="Observability & Monitoring" tools={filteredObservabilityTools} />
        <ToolsSection title="Automation Tools" tools={filteredAutomationTools} />
      </div>
    </PageLayout>
  );
};

export default ToolsLibraries;