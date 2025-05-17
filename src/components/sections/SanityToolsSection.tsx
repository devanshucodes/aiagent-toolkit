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
  isExpanded?: boolean;
  onShowMore?: () => void;
  onHasResults?: (hasTools: boolean) => void;
}

const SanityToolsSection: React.FC<SanityToolsSectionProps> = ({ 
  title, 
  category,
  searchQuery = '',
  isExpanded = false,
  onShowMore,
  onHasResults
}) => {
  const [tools, setTools] = useState<Tool[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [page, setPage] = useState(0);
  
  useEffect(() => {
    const fetchTools = async () => {
      try {
        setLoading(true);
        console.log('Fetching tools for category:', category);
        const fetchedTools = await getTools(category);
        console.log('Fetched tools:', fetchedTools);
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

  // Reset pagination when search query changes or expansion state changes
  useEffect(() => {
    setPage(0);
  }, [searchQuery, isExpanded]);

  const filteredTools = tools.filter(tool => {
    if (!searchQuery) return true;
    
    const searchLower = searchQuery.toLowerCase();
    return (
      (tool.name && tool.name.toLowerCase().includes(searchLower)) ||
      (tool.description && tool.description.toLowerCase().includes(searchLower)) ||
      (Array.isArray(tool.tags) && tool.tags.some(tag => tag && tag.toLowerCase().includes(searchLower)))
    );
  });

  const itemsPerPage = isExpanded ? filteredTools.length : 3;
  const totalPages = Math.ceil(filteredTools.length / itemsPerPage);
  
  const nextPage = () => {
    if (totalPages > 0 && !isExpanded) {
      setPage((prev) => (prev + 1) % totalPages);
    }
  };
  
  const prevPage = () => {
    if (totalPages > 0 && !isExpanded) {
      setPage((prev) => (prev - 1 + totalPages) % totalPages);
    }
  };
  
  const displayedTools = filteredTools.slice(
    page * itemsPerPage, 
    (page + 1) * itemsPerPage
  );

  // Notify parent about search results
  useEffect(() => {
    if (onHasResults) {
      const hasMatchingTools = filteredTools.length > 0;
      onHasResults(hasMatchingTools);
    }
  }, [filteredTools, onHasResults, searchQuery]);

  if (loading) {
    return <div className="text-white">Loading tools for {title}...</div>;
  }

  if (error) {
    return <div className="text-red-500">Error: {error}</div>;
  }

  // Show a message when no tools match the filters
  if (filteredTools.length === 0) {
    return null;
  }

  const isTechStack = category === 'tech-stack';

  return (
    <section className="pb-4" style={{paddingTop: 0, paddingBottom: '1rem'}}>
      <SectionHeader 
        title={title} 
        onNext={!isExpanded ? nextPage : undefined} 
        onPrevious={!isExpanded ? prevPage : undefined}
        onShowMore={onShowMore}
        showMoreText={isExpanded ? "Show Less" : "Show More"}
        currentPage={page}
        itemsPerPage={itemsPerPage}
        totalItems={filteredTools.length}
      />
      
      <div className={`tools-grid ${isExpanded ? 'expanded' : ''}`}>
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