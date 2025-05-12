import React, { useState, useEffect } from 'react';
import PageLayout from '../components/layout/PageLayout';
import { LibraryToolsSection } from '../components/sections/LibraryToolsSection';
import { toolsFilters } from '../data/filterData';
import { FilterGroup } from '../types';
import '../styles/tools-libraries.css';

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
  const [filters, setFilters] = useState<FilterGroup[]>(toolsFilters);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [expandedSection, setExpandedSection] = useState<string | null>(null);

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
        <div className="max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 relative">
          {/* Top horizontal line */}
          <hr className="border-t border-gray-700 opacity-70 mb-0" />
          <div className="w-full py-2 mb-1 relative flex">
            {/* Vertical divider (absolute, full height) */}
            <div className="absolute left-[180px] top-0 bottom-0 w-px bg-gray-700 opacity-70 z-10" />
            {/* Headline and category bar */}
            <div className="flex items-stretch gap-6 w-full">
              {/* Left: Headline */}
              <div className="flex items-start min-w-[160px] pl-8 pr-6">
                <span className="text-gray-300 font-mono text-lg font-medium">Agent<br />Categories</span>
              </div>
              {/* Spacer for divider */}
              <div style={{ width: '1.5px' }} />
              {/* Right: Category buttons */}
              <div className="flex flex-wrap gap-2 justify-end flex-1">
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
          {/* Bottom horizontal line */}
          <hr className="border-t border-gray-700 opacity-70 mt-0 mb-2" />
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