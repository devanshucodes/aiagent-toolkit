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
  activeFilters?: {
    category: string;
    options: { id: string; active: boolean }[];
  }[];
}

const SanityToolsSection: React.FC<SanityToolsSectionProps> = ({ 
  title, 
  category,
  searchQuery = '',
  isExpanded = false,
  onShowMore,
  onHasResults,
  activeFilters = []
}) => {
  const [tools, setTools] = useState<Tool[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [page, setPage] = useState(0);
  
  useEffect(() => {
    const fetchTools = async () => {
      try {
        setLoading(true);
        // console.log('Fetching tools for category:', category);
        const fetchedTools = await getTools(category);
        // console.log('Fetched tools:', fetchedTools);
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
    // First apply search filter
    if (searchQuery) {
      const searchLower = searchQuery.toLowerCase();
      const matchesSearch = 
        (tool.name && tool.name.toLowerCase().includes(searchLower)) ||
        (tool.description && tool.description.toLowerCase().includes(searchLower)) ||
        (Array.isArray(tool.tags) && tool.tags.some(tag => tag && tag.toLowerCase().includes(searchLower)));
      if (!matchesSearch) return false;
    }

    // Then apply subscription filter if any are active
    const subscriptionFilter = activeFilters.find(filter => filter.category === 'Subscription');
    if (subscriptionFilter) {
      const activeSubscriptions = subscriptionFilter.options
        .filter(option => option.active)
        .map(option => {
          switch (option.id) {
            case 'free-to-use': return 'Free';
            case 'paid': return 'Paid';
            case 'freemium': return 'Freemium';
            default: return '';
          }
        });

      if (activeSubscriptions.length > 0 && !activeSubscriptions.includes(tool.type)) {
        return false;
      }
    }

    // Apply genre filter if any are active
    const genreFilter = activeFilters.find(filter => filter.category === 'Genre');
    if (genreFilter) {
      const activeGenres = genreFilter.options
        .filter(option => option.active)
        .map(option => option.id);

      // console.log('Genre filter:', {
      //   toolName: tool.name,
      //   toolGenre: tool.genre,
      //   activeGenres,
      //   shouldShow: !activeGenres.length || (tool.genre && activeGenres.includes(tool.genre))
      // });

      if (activeGenres.length > 0) {
        // If genres are selected, only show tools that have a matching genre
        if (!tool.genre || !activeGenres.includes(tool.genre)) {
          return false;
        }
      }
    }

    // Apply github filter if active
    const githubFilter = activeFilters.find(filter => filter.category === 'GitHub');
    if (githubFilter) {
      const isGithubActive = githubFilter.options.some(option => option.active);
      // console.log('GitHub filter:', {
      //   toolName: tool.name,
      //   hasGithub: tool.hasGithub,
      //   isGithubActive,
      //   shouldShow: !isGithubActive || tool.hasGithub
      // });
      if (isGithubActive && !tool.hasGithub) {
        return false;
      }
    }

    return true;
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

  useEffect(() => {
    if (!loading && !error) {
      console.log('SanityToolsSection:', { title, category, tools, filteredTools, searchQuery });
    }
  }, [loading, error, tools, filteredTools, searchQuery]);

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