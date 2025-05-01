import React, { useEffect, useState } from 'react';
import SectionHeader from '../ui/SectionHeader';
import ToolCard from '../ui/ToolCard';
import { Tool } from '../../types';
import { getTools } from '../../lib/sanityQueries';
import './ToolsSection.css';

interface SanityToolsSectionProps {
  title: string;
  category?: string;
}

const SanityToolsSection: React.FC<SanityToolsSectionProps> = ({ title, category }) => {
  const [tools, setTools] = useState<Tool[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [page, setPage] = useState(0);
  const itemsPerPage = 3;
  const totalPages = Math.ceil(tools.length / itemsPerPage);
  
  useEffect(() => {
    const fetchTools = async () => {
      try {
        const fetchedTools = await getTools(category);
        setTools(fetchedTools);
        setLoading(false);
      } catch (err) {
        setError('Failed to fetch tools');
        setLoading(false);
      }
    };

    fetchTools();
  }, [category]);

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

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <section className="pb-4" style={{paddingTop: 0, paddingBottom: '1rem'}}>
      <SectionHeader 
        title={title} 
        onNext={nextPage} 
        onPrevious={prevPage} 
      />
      
      <div className="tools-grid">
        {displayedTools.map((tool) => (
          <ToolCard key={tool.id} tool={tool} />
        ))}
      </div>
    </section>
  );
};

export default SanityToolsSection; 