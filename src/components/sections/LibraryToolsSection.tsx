import React, { useEffect, useState } from 'react';
import SectionHeader from '../ui/SectionHeader';
import ToolCard from '../ui/ToolCard';
import { LibraryTool } from '../../types';
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
  isExpanded?: boolean;
  onShowMore?: () => void;
  activeFilters?: {
    category: string;
    options: { id: string; active: boolean; }[];
  }[];
  onHasResults?: (hasTools: boolean) => void;
}

export const LibraryToolsSection: React.FC<LibraryToolsSectionProps> = ({ 
  title, 
  section,
  searchQuery = '',
  isExpanded = false,
  onShowMore,
  activeFilters = [],
  onHasResults
}) => {
  const [tools, setTools] = useState<LibraryTool[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [page, setPage] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  
  // Add window resize listener to detect mobile
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    // Check initially
    checkMobile();
    
    // Add resize listener
    window.addEventListener('resize', checkMobile);
    
    // Cleanup
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

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

  // Reset pagination when search query changes or expansion state changes
  useEffect(() => {
    setPage(0);
  }, [searchQuery, isExpanded]);

  const filteredTools = tools.filter(tool => {
    // First apply search filter
    if (searchQuery) {
      const searchLower = searchQuery.toLowerCase();
      const matchesSearch = 
        tool.name.toLowerCase().includes(searchLower) ||
        tool.description.toLowerCase().includes(searchLower) ||
        tool.tags.some(tag => tag.toLowerCase().includes(searchLower));
      
      if (!matchesSearch) return false;
    }

    // Then apply subscription filter if any are active
    const subscriptionFilter = activeFilters.find(filter => filter.category === 'Subscription');
    if (subscriptionFilter) {
      const activeSubscriptions = subscriptionFilter.options
        .filter(option => option.active)
        .map(option => {
          // Map filter IDs to actual type values
          switch (option.id) {
            case 'free-to-use': return 'Free';
            case 'paid': return 'Paid';
            case 'freemium': return 'Freemium';
            default: return '';
          }
        });

      if (activeSubscriptions.length > 0) {
        return activeSubscriptions.includes(tool.type);
      }
    }

    // Apply filter-categories filter if any are active
    const categoryFilter = activeFilters.find(filter => filter.category === 'Categories');
    if (categoryFilter) {
      const activeCategories = categoryFilter.options
        .filter(option => option.active)
        .map(option => option.id);

      if (activeCategories.length > 0) {
        return tool.filter_categories?.some(category => activeCategories.includes(category)) ?? false;
      }
    }

    return true;
  });

  const itemsPerPage = isExpanded ? filteredTools.length : (isMobile ? filteredTools.length : 3);
  const totalPages = Math.ceil(filteredTools.length / itemsPerPage);
  
  const nextPage = () => {
    if (totalPages > 0 && !isExpanded && !isMobile) {
      setPage((prev) => (prev + 1) % totalPages);
    }
  };
  
  const prevPage = () => {
    if (totalPages > 0 && !isExpanded && !isMobile) {
      setPage((prev) => (prev - 1 + totalPages) % totalPages);
    }
  };
  
  const displayedTools = isMobile && !isExpanded 
    ? filteredTools // Show all tools on mobile when not expanded
    : filteredTools.slice(
        page * itemsPerPage, 
        (page + 1) * itemsPerPage
      );

  // Notify parent about search results
  useEffect(() => {
    if (onHasResults) {
      onHasResults(filteredTools.length > 0);
    }
  }, [filteredTools.length, onHasResults]);

  if (loading) {
    return <div className="text-white">Loading...</div>;
  }

  if (error) {
    return <div className="text-red-500">Error: {error}</div>;
  }

  // Don't render anything if no tools match the filters
  if (filteredTools.length === 0) {
    return null;
  }

  return (
    <section>
      <SectionHeader 
        title={title} 
        onNext={!isExpanded && !isMobile ? nextPage : undefined} 
        onPrevious={!isExpanded && !isMobile ? prevPage : undefined}
        onShowMore={onShowMore}
        showMoreText={isExpanded ? "Show Less" : "Show More"}
        currentPage={!isMobile ? page : undefined}
        itemsPerPage={!isMobile ? itemsPerPage : undefined}
        totalItems={!isMobile ? filteredTools.length : undefined}
      />
      
      <div className={`tools-grid ${isExpanded ? 'expanded' : ''}`}>
        {displayedTools.map((tool) => (
          <ToolCard key={tool.id} tool={tool} />
        ))}
      </div>
    </section>
  );
}; 