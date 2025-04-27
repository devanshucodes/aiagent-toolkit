import React from 'react';
import { FilterOption } from '../../types';

interface FilterTagProps {
  option: FilterOption;
  onToggle: (id: string) => void;
}

const FilterTag: React.FC<FilterTagProps> = ({ option, onToggle }) => {
  return (
    <button
      className={`px-3 py-1 text-xs font-mono mr-2 mb-2 border transition-all duration-200 
        ${option.active 
          ? 'bg-red-900/40 border-red-800 text-red-400' 
          : 'bg-transparent border-gray-800 text-gray-500 hover:border-red-900 hover:text-red-400'}`}
      onClick={() => onToggle(option.id)}
    >
      {option.label}
    </button>
  );
};

export default FilterTag;