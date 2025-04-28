import React from 'react';
import FilterGroup from '../ui/FilterGroup';
import { FilterGroup as FilterGroupType } from '../../types';

interface SidebarProps {
  filters: FilterGroupType[];
  onToggleFilter: (category: string, id: string) => void;
}

const Sidebar: React.FC<SidebarProps> = ({ filters, onToggleFilter }) => {
  return (
    <aside className="w-64 min-w-64 bg-black border-r border-gray-900 p-4 ml-24">
   
      {filters.slice(0, 2).map((filterGroup) => (
        <FilterGroup 
          key={filterGroup.category} 
          filterGroup={filterGroup} 
          onToggleFilter={onToggleFilter} 
        />
      ))}
      
      <div className="mb-6">
        <h3 className="text-gray-400 font-mono text-sm mb-2">GitHub</h3>
        <label className="relative inline-flex items-center cursor-pointer">
          <input type="checkbox" value="" className="sr-only peer" />
          <div className="w-11 h-6 bg-gray-800 peer-focus:outline-none peer-focus:ring-1 peer-focus:ring-red-900 rounded-none peer peer-checked:after:translate-x-full after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-gray-400 after:border-gray-600 after:border after:h-5 after:w-5 after:transition-all peer-checked:bg-red-900/40"></div>
        </label>
      </div>

      <div className="filter-divider" />
      {filters.slice(2).map((filterGroup) => (
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