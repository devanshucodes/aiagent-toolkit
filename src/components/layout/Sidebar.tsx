import React from 'react';
import FilterGroup from '../ui/FilterGroup';
import { FilterGroup as FilterGroupType } from '../../types';

interface SidebarProps {
  filters: FilterGroupType[];
  onToggleFilter: (category: string, id: string) => void;
  isToolsPage?: boolean;
}

const Sidebar: React.FC<SidebarProps> = ({ filters, onToggleFilter, isToolsPage = false }) => {
  return (
    <aside className="w-64 min-w-64 bg-black border-r border-gray-900 p-4">
      {filters.map((filterGroup) => (
        <FilterGroup 
          key={filterGroup.category} 
          filterGroup={filterGroup} 
          onToggleFilter={onToggleFilter}
        />
      ))}
    </aside>
  );
};

export default Sidebar;