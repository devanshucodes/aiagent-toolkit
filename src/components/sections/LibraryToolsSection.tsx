import React, { useEffect, useState } from 'react';
import SectionHeader from '../ui/SectionHeader';
import ToolCard from '../ui/ToolCard';
import { Tool } from '../../types';
import { getLibraryTools } from '../../lib/sanityQueries';
import './ToolsSection.css';

type LibrarySection = 
  | 'inference-apis'
  | 'rag'
  | 'data-processing'
  | 'memory'
  | 'compute'
  | 'observability'
  | 'web-scraping'
  | 'hosting'
  | 'sandboxing'
  | 'browser-automation'
  | 'workflow-automation'
  | 'authentication'
  | 'payment'
  | 'blockchain'
  | 'reasoning'
  | 'mcp';

interface LibraryToolsSectionProps {
  title: string;
  section: LibrarySection;
  searchQuery?: string;
}

export const LibraryToolsSection: React.FC<LibraryToolsSectionProps> = ({ 
  title, 
  section,
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

  // Reset pagination when search query changes
  useEffect(() => {
    setPage(0);
  }, [searchQuery]);

  const filteredTools = tools.filter(tool => {
    if (!searchQuery) return true;
    
    const searchLower = searchQuery.toLowerCase();
    return (
      tool.name.toLowerCase().includes(searchLower) ||
      tool.description.toLowerCase().includes(searchLower) ||
      tool.tags.some(tag => tag.toLowerCase().includes(searchLower))
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
    return <div className="text-white">Loading...</div>;
  }

  if (error) {
    return <div className="text-red-500">Error: {error}</div>;
  }

  if (filteredTools.length === 0) {
    return null;
  }

  return (
    <section>
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