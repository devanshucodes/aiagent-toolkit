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
        console.log(`Fetching tools for category: ${category}`);
        const fetchedTools = await getTools(category);
        console.log(`Fetched tools:`, fetchedTools);
        setTools(fetchedTools);
        setLoading(false);
      } catch (err) {
        console.error('Error fetching tools:', err);
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
    return <div className="text-white">Loading tools for {title}...</div>;
  }

  if (error) {
    return <div className="text-red-500">Error: {error}</div>;
  }

  if (tools.length === 0) {
    return <div className="text-white">No tools found for {title}</div>;
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