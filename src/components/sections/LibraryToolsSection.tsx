import React, { useEffect, useState } from 'react';
import SectionHeader from '../ui/SectionHeader';
import ToolCard from '../ui/ToolCard';
import { Tool } from '../../types';
import { getLibraryTools } from '../../lib/sanityQueries';
import './ToolsSection.css';

interface LibraryToolsSectionProps {
  title: string;
  section: 'inference' | 'observability' | 'automation';
}

export const LibraryToolsSection: React.FC<LibraryToolsSectionProps> = ({ title, section }) => {
  const [tools, setTools] = useState<Tool[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [page, setPage] = useState(0);
  const itemsPerPage = 3;
  const totalPages = Math.ceil(tools.length / itemsPerPage);
  
  useEffect(() => {
    const fetchTools = async () => {
      try {
        setLoading(true);
        const data = await getLibraryTools(section);
        setTools(data);
        setError(null);
      } catch (err) {
        setError('Failed to load tools');
        console.error('Error fetching tools:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchTools();
  }, [section]);

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