import React from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface SectionHeaderProps {
  title: string;
  onNext?: () => void;
  onPrevious?: () => void;
  onShowMore?: () => void;
  showMoreText?: string;
  currentPage?: number;
  itemsPerPage?: number;
  totalItems?: number;
}

const SectionHeader: React.FC<SectionHeaderProps> = ({ 
  title, 
  onNext, 
  onPrevious, 
  onShowMore,
  showMoreText = "Show More",
  currentPage = 0,
  itemsPerPage = 3,
  totalItems = 0
}) => {
  const startItem = currentPage * itemsPerPage + 1;
  const endItem = Math.min((currentPage + 1) * itemsPerPage, totalItems);
  const showPagination = onNext || onPrevious;

  return (
    <div className="flex items-center mb-2 justify-between">
      <div className="flex items-center gap-4 pl-4">
        <h2 className="text-2xl font-bold text-white" style={{fontFamily: 'Kode Mono, monospace'}}>{title}</h2>
        {onShowMore && (
          <button
            onClick={onShowMore}
            className="text-sm text-gray-400 hover:text-gray-300 transition-colors duration-200 underline"
            style={{fontFamily: "'Kode Mono', monospace"}}
          >
            {showMoreText}
          </button>
        )}
      </div>
      
      {showPagination && (
        <div className="flex items-center space-x-2" style={{ marginRight: '0.3rem' }}>
          <button 
            onClick={onPrevious}
            className="p-0.5 hover:bg-gray-700 transition-colors duration-200"
            style={{ background: '#27262b', border: '1px solid #414045' }}
            aria-label="Previous"
          >
            <ChevronLeft size={16} className="text-gray-400" />
          </button>
          
          {totalItems > 0 && (
            <span className="text-xs text-gray-400 font-mono px-1">
              {startItem} - {endItem} of {totalItems}
            </span>
          )}
          
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