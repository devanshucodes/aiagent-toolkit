import React from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface SectionHeaderProps {
  title: string;
  onNext?: () => void;
  onPrevious?: () => void;
}

const SectionHeader: React.FC<SectionHeaderProps> = ({ title, onNext, onPrevious }) => {
  return (
    <div className="flex justify-between items-center mb-4">
      <h2 className="text-2xl font-bold text-white">{title}</h2>
      
      {(onNext || onPrevious) && (
        <div className="flex space-x-2">
          <button 
            onClick={onPrevious}
            className="p-1 rounded bg-gray-800 border border-gray-700 hover:bg-gray-700 transition-colors duration-200"
            aria-label="Previous"
          >
            <ChevronLeft size={20} className="text-gray-400" />
          </button>
          <button 
            onClick={onNext}
            className="p-1 rounded bg-gray-800 border border-gray-700 hover:bg-gray-700 transition-colors duration-200"
            aria-label="Next"
          >
            <ChevronRight size={20} className="text-gray-400" />
          </button>
        </div>
      )}
    </div>
  );
};

export default SectionHeader;