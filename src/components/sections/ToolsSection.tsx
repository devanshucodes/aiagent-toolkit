import React from 'react';
import SectionHeader from '../ui/SectionHeader';
import ToolCard from '../ui/ToolCard';
import { Tool } from '../../types';

interface ToolsSectionProps {
  title: string;
  tools: Tool[];
}

const ToolsSection: React.FC<ToolsSectionProps> = ({ title, tools }) => {
  const [page, setPage] = React.useState(0);
  const itemsPerPage = 3;
  const totalPages = Math.ceil(tools.length / itemsPerPage);
  
  const nextPage = () => {
    setPage((prev) => (prev + 1) % totalPages);
  };
  
  const prevPage = () => {
    setPage((prev) => (prev - 1 + totalPages) % totalPages);
  };
  
  const displayedTools = tools.slice(
    page * itemsPerPage, 
    (page + 1) * itemsPerPage
  );

  return (
    <section className="py-8">
      <SectionHeader 
        title={title} 
        onNext={nextPage} 
        onPrevious={prevPage} 
      />
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[4px]">
        {displayedTools.map((tool) => (
          <ToolCard key={tool.id} tool={tool} />
        ))}
      </div>
    </section>
  );
};

export default ToolsSection;