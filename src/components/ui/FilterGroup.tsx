import React from 'react';
import FilterTag from './FilterTag';
import { FilterGroup as FilterGroupType } from '../../types';

interface FilterGroupProps {
  filterGroup: FilterGroupType;
  onToggleFilter: (category: string, id: string) => void;
}

const FilterGroup: React.FC<FilterGroupProps> = ({ filterGroup, onToggleFilter }) => {
  return (
    <div className="mb-6">
      <h3 className="text-gray-300 font-medium mb-2" style={{fontFamily: 'Kode Mono, monospace'}}>{filterGroup.category}</h3>
      <div className="flex flex-wrap" style={{fontFamily: 'Kode Mono, monospace'}}>
        {filterGroup.options.map(option => (
          <FilterTag 
            key={option.id} 
            option={option} 
            onToggle={(id) => onToggleFilter(filterGroup.category, id)} 
          />
        ))}
      </div>
    </div>
  );
};

export default FilterGroup;