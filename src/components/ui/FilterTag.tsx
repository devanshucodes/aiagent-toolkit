import React from 'react';
import { FilterOption } from '../../types';

interface FilterTagProps {
  option: FilterOption;
  onToggle: (id: string) => void;
}

const FilterTag: React.FC<FilterTagProps> = ({ option, onToggle }) => {
  return (
    <button
      className={`agents-filter-tag px-3 py-1 text-xs font-mono mr-2 mb-2 ${option.active ? 'active' : ''}`}
      onClick={() => onToggle(option.id)}
    >
      {option.label}
    </button>
  );
};

export default FilterTag;