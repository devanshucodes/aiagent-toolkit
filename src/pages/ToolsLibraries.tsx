import React, { useState, useEffect, useRef } from 'react';
import PageLayout from '../components/layout/PageLayout';
import { LibraryToolsSection } from '../components/sections/LibraryToolsSection';
import { toolsFilters } from '../data/filterData';
import { FilterGroup as FilterGroupType } from '../types';
import '../styles/tools-libraries.css';
import FilterGroupComponent from '../components/ui/FilterGroup';

const TOOLS_CATEGORIES = [
  'Inference APIs',
  'RAG',
  'Data Processing',
  'Memory',
  'Compute',
  'Observability',
  'Web Scraping',
  'Hosting',
  'Sandboxing',
  'Browser Automation',
  'Workflow Automation',
  'Authentication',
  'Payment',
  'Blockchain',
  'Reasoning',
  'MCP',
] as const;

type ToolCategory = typeof TOOLS_CATEGORIES[number];

// Map category buttons to section IDs
const CATEGORY_TO_SECTION = {
  'Inference APIs': 'inference-apis',
  'RAG': 'rag',
  'Data Processing': 'data-processing',
  'Memory': 'memory',
  'Compute': 'compute',
  'Observability': 'observability',
  'Web Scraping': 'web-scraping',
  'Hosting': 'hosting',
  'Sandboxing': 'sandboxing',
  'Browser Automation': 'browser-automation',
  'Workflow Automation': 'workflow-automation',
  'Authentication': 'authentication',
  'Payment': 'payment',
  'Blockchain': 'blockchain',
  'Reasoning': 'reasoning',
  'MCP': 'mcp',
} as const;

const ToolsLibraries: React.FC = () => {
  const [filters, setFilters] = useState<FilterGroupType[]>(toolsFilters);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [expandedSection, setExpandedSection] = useState<string | null>(null);
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const scrollContainersRef = useRef<(HTMLDivElement | null)[]>([]);

  // Initialize search from URL if present
  useEffect(() => {
    const searchParams = new URLSearchParams(window.location.search);
    const query = searchParams.get('search');
    if (query) {
      setSearchQuery(query);
    }
  }, []);

  // Listen for search events from the parent
  useEffect(() => {
    const handleGlobalSearch = (event: CustomEvent) => {
      const { query } = event.detail;
      setSearchQuery(query);
    };

    window.addEventListener('globalSearch' as any, handleGlobalSearch);
    return () => {
      window.removeEventListener('globalSearch' as any, handleGlobalSearch);
    };
  }, []);

  // Add scroll synchronization effect
  useEffect(() => {
    const containers = scrollContainersRef.current.filter((el): el is HTMLDivElement => el !== null);
    
    const handleScroll = (event: Event) => {
      const scrolledContainer = event.target as HTMLDivElement;
      const scrollLeft = scrolledContainer.scrollLeft;
      
      containers.forEach(container => {
        if (container !== scrolledContainer) {
          container.scrollLeft = scrollLeft;
        }
      });
    };

    containers.forEach(container => {
      container.addEventListener('scroll', handleScroll);
    });

    return () => {
      containers.forEach(container => {
        container.removeEventListener('scroll', handleScroll);
      });
    };
  }, []);

  const handleToggleFilter = (category: string, id: string) => {
    setFilters(prevFilters => 
      prevFilters.map(group => 
        group.category === category
          ? {
              ...group,
              options: group.options.map(option => 
                option.id === id
                  ? { ...option, active: !option.active }
                  : option
              )
            }
          : group
      )
    );
  };

  const handleCategoryClick = (category: string) => {
    // Exit expanded state when selecting categories
    setExpandedSection(null);
    
    setSelectedCategories(prev => {
      const isSelected = prev.includes(category);
      if (isSelected) {
        return prev.filter(cat => cat !== category);
      } else {
        return [...prev, category];
      }
    });
  };

  const handleShowMore = (section: string) => {
    setExpandedSection(prev => prev === section ? null : section);
  };

  const sections = TOOLS_CATEGORIES.map(cat => ({
    title: cat,
    section: CATEGORY_TO_SECTION[cat as ToolCategory]
  }));

  return (
    <PageLayout 
      customFilters={filters} 
      onToggleFilter={handleToggleFilter}
      isToolsPage={true}
      aboveContent={
        <div className="w-full relative">
          {/* Filter Button */}
          <div className="lg:hidden w-screen relative left-1/2 right-1/2 -mx-[50vw]">
            <button
              onClick={() => setIsFilterOpen(!isFilterOpen)}
              className="w-full bg-[#1a1a1a] border-t border-[#333] py-3 px-4 flex items-center justify-center gap-3 text-white font-mono text-base tools-library-btn"
              style={{ height: '36px', background: '#1a1a1a' }}
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <line x1="4" y1="8" x2="20" y2="8" strokeLinecap="round" />
                <line x1="8" y1="16" x2="16" y2="16" strokeLinecap="round" />
              </svg>
              Filters
            </button>
          </div>

          {/* Categories section with proper width constraints for desktop */}
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Top horizontal line */}
            <hr className="border-t border-gray-700 opacity-70 mb-0" />
            <div className="w-full py-2 mb-1 relative flex">
              {/* Vertical divider (absolute, full height) */}
              <div className="absolute left-[180px] top-0 bottom-0 w-px bg-gray-700 opacity-70 z-10 hidden lg:block" />
              {/* Headline and category bar */}
              <div className="flex items-stretch gap-6 w-full">
                {/* Left: Headline */}
                <div className="hidden lg:flex items-start min-w-[160px] pl-8 pr-6">
                  <span className="text-gray-300 font-mono text-lg font-medium">Agent<br />Categories</span>
                </div>
                {/* Spacer for divider */}
                <div className="hidden lg:block" style={{ width: '1.5px' }} />
                {/* Right: Category buttons */}
                <div className="flex-1">
                  <div className="lg:flex lg:flex-wrap lg:gap-2 lg:justify-end">
                    {/* Mobile view: 3 lines with horizontal scroll */}
                    <div className="lg:hidden">
                      <div className="flex flex-col gap-1">
                        <div className="relative w-screen -ml-4 px-4">
                          <div 
                            className="overflow-x-auto hide-scrollbar"
                            ref={el => scrollContainersRef.current[0] = el}
                            style={{ WebkitOverflowScrolling: 'touch' }}
                          >
                            <div className="flex gap-2 pb-1 min-w-max">
                              {TOOLS_CATEGORIES.slice(0, Math.ceil(TOOLS_CATEGORIES.length / 3)).map((cat) => (
                                <button
                                  key={cat}
                                  onClick={() => handleCategoryClick(cat)}
                                  className={`tools-library-btn flex-none px-4 py-2 text-sm font-mono ${
                                    selectedCategories.includes(cat) ? 'active' : ''
                                  }`}
                                >
                                  {cat}
                                </button>
                              ))}
                            </div>
                          </div>
                        </div>
                        <div className="relative w-screen -ml-4 px-4">
                          <div 
                            className="overflow-x-auto hide-scrollbar"
                            ref={el => scrollContainersRef.current[1] = el}
                            style={{ WebkitOverflowScrolling: 'touch' }}
                          >
                            <div className="flex gap-2 pb-1 min-w-max">
                              {TOOLS_CATEGORIES.slice(Math.ceil(TOOLS_CATEGORIES.length / 3), Math.ceil(2 * TOOLS_CATEGORIES.length / 3)).map((cat) => (
                                <button
                                  key={cat}
                                  onClick={() => handleCategoryClick(cat)}
                                  className={`tools-library-btn flex-none px-4 py-2 text-sm font-mono ${
                                    selectedCategories.includes(cat) ? 'active' : ''
                                  }`}
                                >
                                  {cat}
                                </button>
                              ))}
                            </div>
                          </div>
                        </div>
                        <div className="relative w-screen -ml-4 px-4">
                          <div 
                            className="overflow-x-auto hide-scrollbar"
                            ref={el => scrollContainersRef.current[2] = el}
                            style={{ WebkitOverflowScrolling: 'touch' }}
                          >
                            <div className="flex gap-2 pb-1 min-w-max">
                              {TOOLS_CATEGORIES.slice(Math.ceil(2 * TOOLS_CATEGORIES.length / 3)).map((cat) => (
                                <button
                                  key={cat}
                                  onClick={() => handleCategoryClick(cat)}
                                  className={`tools-library-btn flex-none px-4 py-2 text-sm font-mono ${
                                    selectedCategories.includes(cat) ? 'active' : ''
                                  }`}
                                >
                                  {cat}
                                </button>
                              ))}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* Desktop view: Wrapped layout */}
                    <div className="hidden lg:flex lg:flex-wrap lg:gap-2 lg:justify-end">
                      {TOOLS_CATEGORIES.map((cat) => (
                        <button
                          key={cat}
                          onClick={() => handleCategoryClick(cat)}
                          className={`tools-library-btn px-4 py-2 text-sm font-mono whitespace-nowrap ${
                            selectedCategories.includes(cat) ? 'active' : ''
                          }`}
                        >
                          {cat}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* Bottom horizontal line */}
            <hr className="border-t border-gray-700 opacity-70 mt-0 mb-2" />
          </div>

          {/* Mobile Filters Panel */}
          <div 
            className={`fixed top-0 left-0 h-full w-full bg-black transform transition-transform duration-300 ease-in-out z-50 lg:hidden ${
              isFilterOpen ? 'translate-x-0' : '-translate-x-full'
            }`}
          >
            <div className="p-6">
              {/* Close button */}
              <div className="flex flex-col gap-6 mb-8">
                <button 
                  onClick={() => setIsFilterOpen(false)}
                  className="text-gray-400 hover:text-white w-fit"
                >
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M18 6L6 18M6 6l12 12" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </button>
                <h2 className="text-gray-400 font-mono text-lg">Filters</h2>
              </div>

              {/* Filter groups */}
              <div className="space-y-6">
                {filters.map((filterGroup) => (
                  <div key={filterGroup.category} className="border-b border-gray-800 pb-6">
                    <h3 className="text-white font-mono text-xl mb-4">{filterGroup.category}</h3>
                    <div className="flex flex-wrap gap-2">
                      {filterGroup.options.map((option) => (
                        <button
                          key={option.id}
                          onClick={() => handleToggleFilter(filterGroup.category, option.id)}
                          className={`tools-library-btn px-4 py-2 text-sm font-mono whitespace-nowrap ${
                            option.active ? 'active' : ''
                          }`}
                          style={{ background: '#27262b' }}
                        >
                          {option.label}
                        </button>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      }
    >
      <div className="space-y-4">
        {sections
          .filter(section => 
            (!expandedSection && (selectedCategories.length === 0 || selectedCategories.includes(section.title))) ||
            expandedSection === section.section
          )
          .map(section => (
            <LibraryToolsSection 
              key={section.section}
              title={section.title}
              section={section.section}
              searchQuery={searchQuery}
              isExpanded={expandedSection === section.section}
              onShowMore={() => handleShowMore(section.section)}
            />
          ))
        }
      </div>
    </PageLayout>
  );
};

export default ToolsLibraries;