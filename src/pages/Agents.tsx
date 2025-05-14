import React, { useState, useEffect } from 'react';
import PageLayout from '../components/layout/PageLayout';
import SanityToolsSection from '../components/sections/SanityToolsSection';
import { filterGroups } from '../data/filterData';
import { FilterGroup } from '../types';
import '../styles/agents.css';

const AGENT_CATEGORIES = [
  'Agent Tools',
  'Top LLMs',
  'Web3 AI Agent SDKs',
  'Agent Framework',
  'Agent Infrastructure',
  'Agent Launchpads',
  'Automation',
  'Tech Stack',
] as const;

type AgentCategory = typeof AGENT_CATEGORIES[number];

// Map category buttons to section IDs
const CATEGORY_TO_SECTION = {
  'Agent Tools': 'ai-agent-tools',
  'Top LLMs': 'top-llms',
  'Web3 AI Agent SDKs': 'web3-ai-agent-sdks',
  'Agent Framework': 'ai-agent-framework',
  'Agent Infrastructure': 'ai-agent-infrastructure',
  'Agent Launchpads': 'ai-agent-launchpads',
  'Automation': 'automation',
  'Tech Stack': 'tech-stack',
} as const;

const Agents: React.FC = () => {
  const [filters, setFilters] = useState<FilterGroup[]>(filterGroups);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [expandedSection, setExpandedSection] = useState<string | null>(null);
  const [isFilterOpen, setIsFilterOpen] = useState(false);

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

  const handleShowMore = (category: string) => {
    setExpandedSection(prev => prev === category ? null : category);
  };

  const sections = [
    { title: "AI Agent Tools", category: "ai-agent-tools" },
    { title: "Top AI Agent Apps", category: "top-ai-agent-apps" },
    { title: "Top LLMs", category: "top-llms" },
    { title: "Web3 AI Agent SDKs", category: "web3-ai-agent-sdks" },
    { title: "AI Agent Framework", category: "ai-agent-framework" },
    { title: "AI Agent Infrastructure", category: "ai-agent-infrastructure" },
    { title: "AI Agent Launchpads", category: "ai-agent-launchpads" },
    { title: "Automation", category: "automation" },
    { title: "Tech Stack", category: "tech-stack" },
  ];

  return (
    <PageLayout 
      customFilters={filters} 
      onToggleFilter={handleToggleFilter}
      hideFiltersOnMobile={true}
      aboveContent={
        <div className="max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 relative">
          <hr className="border-t border-gray-700 opacity-70 mb-0" />
          <div className="w-full py-2 mb-1 relative">
            {/* Mobile view with filter button */}
            <div className="md:hidden flex items-center w-full">
              <button
                onClick={() => setIsFilterOpen(true)}
                className="flex-shrink-0 mr-4 p-2 rounded-none bg-[#27262b] border border-[#1f2937]"
                style={{ width: '32px', height: '32px' }}
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-gray-400">
                  <line x1="4" y1="8" x2="20" y2="8" strokeLinecap="round" />
                  <line x1="8" y1="16" x2="16" y2="16" strokeLinecap="round" />
                </svg>
              </button>
              <div className="agents-categories-container">
                {AGENT_CATEGORIES.map((cat) => (
                  <button
                    key={cat}
                    onClick={() => handleCategoryClick(cat)}
                    className={`agents-btn px-4 py-2 text-sm font-mono whitespace-nowrap ${
                      selectedCategories.includes(cat) ? 'active' : ''
                    }`}
                  >
                    {cat}
                  </button>
                ))}
              </div>
            </div>

            {/* Desktop view */}
            <div className="hidden md:flex items-center justify-center">
              <div className="flex flex-wrap gap-2 justify-center">
                {AGENT_CATEGORIES.map((cat) => (
                  <button
                    key={cat}
                    onClick={() => handleCategoryClick(cat)}
                    className={`agents-btn px-4 py-2 text-sm font-mono whitespace-nowrap ${
                      selectedCategories.includes(cat) ? 'active' : ''
                    }`}
                  >
                    {cat}
                  </button>
                ))}
              </div>
            </div>
          </div>
          <hr className="border-t border-gray-700 opacity-70 mt-0 mb-2" />

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
                          className={`agents-btn px-4 py-2 text-sm font-mono whitespace-nowrap ${
                            option.active ? 'active' : ''
                          }`}
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
      {/* Main content: filters and cards */}
      <div className="space-y-4">
        {sections
          .filter(section => 
            (!expandedSection && (selectedCategories.length === 0 || selectedCategories.some(cat => CATEGORY_TO_SECTION[cat as AgentCategory] === section.category))) ||
            expandedSection === section.category
          )
          .map(section => (
            <SanityToolsSection 
              key={section.category}
              title={section.title}
              category={section.category}
              searchQuery={searchQuery}
              isExpanded={expandedSection === section.category}
              onShowMore={() => handleShowMore(section.category)}
            />
          ))
        }
      </div>
    </PageLayout>
  );
};

export default Agents; 