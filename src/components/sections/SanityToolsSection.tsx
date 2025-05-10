import React, { useEffect, useState } from 'react';
import SectionHeader from '../ui/SectionHeader';
import ToolCard from '../ui/ToolCard';
import TechStackCard from '../ui/TechStackCard';
import { Tool } from '../../types';
import { getTools } from '../../lib/sanityQueries';
import './ToolsSection.css';

interface SanityToolsSectionProps {
  title: string;
  category?: string;
  searchQuery?: string;
}

const SanityToolsSection: React.FC<SanityToolsSectionProps> = ({ 
  title, 
  category,
  searchQuery = ''
}) => {
  const [tools, setTools] = useState<Tool[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [page, setPage] = useState(0);
  const itemsPerPage = 3;
  
  useEffect(() => {
    const fetchTools = async () => {
      try {
        setLoading(true);
        const fetchedTools = await getTools(category);
        setTools(fetchedTools);
        setError(null);
      } catch (err) {
        console.error('Error fetching tools:', err);
        setError('Failed to fetch tools');
      } finally {
        setLoading(false);
      }
    };

    fetchTools();
  }, [category]);

  // Reset pagination when search query changes
  useEffect(() => {
    setPage(0);
  }, [searchQuery]);

  const filteredTools = tools.filter(tool => {
    if (!searchQuery) return true;
    
    const searchLower = searchQuery.toLowerCase();
    return (
      (tool.name && tool.name.toLowerCase().includes(searchLower)) ||
      (tool.description && tool.description.toLowerCase().includes(searchLower)) ||
      (Array.isArray(tool.tags) && tool.tags.some(tag => tag && tag.toLowerCase().includes(searchLower)))
    );
  });

  const totalPages = Math.ceil(filteredTools.length / itemsPerPage);
  
  const nextPage = () => {
    if (totalPages > 0) {
      setPage((prev) => (prev + 1) % totalPages);
    }
  };
  
  const prevPage = () => {
    if (totalPages > 0) {
      setPage((prev) => (prev - 1 + totalPages) % totalPages);
    }
  };
  
  const displayedTools = filteredTools.slice(
    page * itemsPerPage, 
    (page + 1) * itemsPerPage
  );

  if (loading) {
    return <div className="text-white">Loading tools for {title}...</div>;
  }

  if (error) {
    return <div className="text-red-500">Error: {error}</div>;
  }

  if (filteredTools.length === 0) {
    return null;
  }

  const isTechStack = category === 'tech-stack';

  return (
    <section className="pb-4" style={{paddingTop: 0, paddingBottom: '1rem'}}>
      <SectionHeader 
        title={title} 
        onNext={nextPage} 
        onPrevious={prevPage} 
      />
      
      <div className="tools-grid">
        {displayedTools.map((tool) => (
          isTechStack ? (
            <TechStackCard key={tool.id} tool={tool} />
          ) : (
            <ToolCard key={tool.id} tool={tool} />
          )
        ))}
      </div>
    </section>
  );
};

export default SanityToolsSection; 