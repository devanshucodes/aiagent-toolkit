import React from 'react';
import FilterTag from './FilterTag';
import { FilterGroup as FilterGroupType } from '../../types';

interface FilterGroupProps {
  filterGroup: FilterGroupType;
  onToggleFilter: (category: string, id: string) => void;
}

const FilterGroup: React.FC<FilterGroupProps> = ({ filterGroup, onToggleFilter }) => {
  const isSpecial = [
    'Language',
    'Genre',
    'Subscription',
    'Categories',
  ].includes(filterGroup.category);

  const isGitHub = filterGroup.category === 'GitHub';

  return (
    <>
      <div>
        <h3 className="text-gray-300 font-medium mb-2" style={{fontFamily: 'Kode Mono, monospace'}}>{filterGroup.category}</h3>
        {isSpecial && <div className="filter-divider" />}
        <div className="flex flex-wrap" style={{fontFamily: 'Kode Mono, monospace'}}>
          {isGitHub ? (
            <label className="relative inline-flex items-center cursor-pointer">
              <input 
                type="checkbox" 
                className="sr-only peer" 
                checked={filterGroup.options[0].active}
                onChange={() => onToggleFilter(filterGroup.category, filterGroup.options[0].id)}
              />
              <div className="w-11 h-6 bg-gray-800 peer-focus:outline-none peer-focus:ring-1 peer-focus:ring-red-900 rounded-none peer peer-checked:after:translate-x-full after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-gray-400 after:border-gray-600 after:border after:h-5 after:w-5 after:transition-all peer-checked:bg-red-900/40"></div>
            </label>
          ) : (
            filterGroup.options.map(option => (
              <FilterTag 
                key={option.id} 
                option={option} 
                onToggle={(id) => onToggleFilter(filterGroup.category, id)} 
              />
            ))
          )}
        </div>
        {isSpecial && <div className="filter-divider" />}
      </div>
      {!isSpecial && <div className="filter-divider" />}
    </>
  );
};

export default FilterGroup;