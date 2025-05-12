import React from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface SectionHeaderProps {
  title: string;
  onNext?: () => void;
  onPrevious?: () => void;
  onShowMore?: () => void;
  showMoreText?: string;
}

const SectionHeader: React.FC<SectionHeaderProps> = ({ 
  title, 
  onNext, 
  onPrevious, 
  onShowMore,
  showMoreText = "Show More"
}) => {
  return (
    <div className="flex items-center mb-2 justify-between">
      <div className="flex items-center gap-4">
        <h2 className="text-2xl font-bold text-white" style={{fontFamily: 'Kode Mono, monospace'}}>{title}</h2>
        {onShowMore && (
          <button
            onClick={onShowMore}
            className="text-sm text-gray-400 hover:text-gray-300 transition-colors duration-200 underline"
            style={{fontFamily: 'Kode Mono, monospace'}}
          >
            {showMoreText}
          </button>
        )}
      </div>
      
      {(onNext || onPrevious) && (
        <div className="flex space-x-0.5" style={{ marginRight: '0.3rem' }}>
          <button 
            onClick={onPrevious}
            className="p-0.5 hover:bg-gray-700 transition-colors duration-200"
            style={{ background: '#27262b', border: '1px solid #414045' }}
            aria-label="Previous"
          >
            <ChevronLeft size={16} className="text-gray-400" />
          </button>
          <button 
            onClick={onNext}
            className="p-0.5 hover:bg-gray-700 transition-colors duration-200"
            style={{ background: '#27262b', border: '1px solid #414045' }}
            aria-label="Next"
          >
            <ChevronRight size={16} className="text-gray-400" />
          </button>
        </div>
      )}
    </div>
  );
};

export default SectionHeader;