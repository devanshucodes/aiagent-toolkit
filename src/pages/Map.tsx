import React, { useEffect, useState } from 'react';
import PageLayout from '../components/layout/PageLayout';
import '../styles/ecosystem-map.css'; // Import the custom CSS file
import { getEcosystemMap, EcosystemMap } from '../lib/sanityQueries';

const MAP_CATEGORIES = [
  'AI x Crypto Map',
  'AI Agent Market Map',
  'AI Agent Infra Map',
  'MCP Market Map',
] as const;

type MapCategory = typeof MAP_CATEGORIES[number];

const Map: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<MapCategory>('AI x Crypto Map');
  const [ecosystemMap, setEcosystemMap] = useState<EcosystemMap | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchEcosystemMap = async () => {
      try {
        setLoading(true);
        const data = await getEcosystemMap(selectedCategory);
        console.log('Received map data:', data);
        
        if (data && data.categories && data.categories.length > 0) {
          console.log('Setting ecosystem map with data:', data);
          setEcosystemMap(data);
        } else {
          console.log('No valid data received, setting empty state');
          setEcosystemMap({
            title: selectedCategory,
            description: 'No description available',
            category: selectedCategory,
            categories: []
          });
        }
        setError(null);
      } catch (err) {
        console.error('Error fetching ecosystem map:', err);
        setError('Failed to load ecosystem map');
      } finally {
        setLoading(false);
      }
    };

    fetchEcosystemMap();
  }, [selectedCategory]);

  // Debug logging
  console.log('Current state:', {
    selectedCategory,
    loading,
    error,
    hasEcosystemMap: !!ecosystemMap,
    categoriesCount: ecosystemMap?.categories?.length || 0,
    firstCategory: ecosystemMap?.categories?.[0],
    firstCategoryItems: ecosystemMap?.categories?.[0]?.items
  });

  return (
    <PageLayout 
      showSidebar={false} 
      showHero={true}
      aboveContent={
        <div className="max-w-7xl mx-auto w-full relative">
          <div className="w-full py-2 mb-1 relative flex">
            <div className="flex items-stretch gap-6 w-full">
              <div style={{ minWidth: '1.5px' }} />
              <div className="flex flex-wrap gap-2 justify-center flex-1">
                {MAP_CATEGORIES.map((cat) => (
                  <button
                    key={cat}
                    onClick={() => setSelectedCategory(cat)}
                    className={`filter-option px-4 py-2 text-sm font-mono whitespace-nowrap ${
                      selectedCategory === cat ? 'bg-[#3a2321] text-[#e07a6c]' : ''
                    }`}
                  >
                    {cat}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      }
    >
      <div className="ecosystem-map-section" style={{ marginTop: '0rem' }}>
        <div className="ecosystem-map-inner">
          <h1 className="ecosystem-map-title">
            {loading ? 'Loading...' : ecosystemMap?.title || selectedCategory}
          </h1>
          <p className="ecosystem-map-desc">
            {loading ? 'Loading...' : ecosystemMap?.description || 'No description available'}
          </p>
          {error && <div className="text-red-500 mb-4">{error}</div>}
          <div className="ecosystem-map-grid">
            {loading ? (
              // Loading skeleton
              [...Array(4)].map((_, index) => (
                <div key={index} className="ecosystem-card">
                  <div className="ecosystem-card-header">
                    <span className="ecosystem-card-title">Loading...</span>
                    <span className="ecosystem-card-bars">
                      {[...Array(4)].map((_, i) => (
                        <span key={i} className="ecosystem-card-bar" />
                      ))}
                    </span>
                  </div>
                  <div className="ecosystem-card-items">
                    {[...Array(4)].map((_, idx) => (
                      <div key={idx} className="ecosystem-card-item">
                        <span className="ecosystem-card-icon" />
                        <span className="ecosystem-card-item-text">Loading...</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))
            ) : ecosystemMap && ecosystemMap.categories && ecosystemMap.categories.length > 0 ? (
              ecosystemMap.categories.map((section, index) => (
                <div key={index} className="ecosystem-card">
                  <div className="ecosystem-card-header">
                    <span className="ecosystem-card-title">{section.title}</span>
                    <span className="ecosystem-card-bars">
                      {[...Array(4)].map((_, i) => (
                        <span key={i} className="ecosystem-card-bar" />
                      ))}
                    </span>
                  </div>
                  <div className="ecosystem-card-items">
                    {section.items.map((item, idx) => (
                      <div key={idx} className="ecosystem-card-item">
                        {item.logo ? (
                          <img 
                            src={item.logo} 
                            alt={`${item.name} logo`} 
                            className="ecosystem-card-icon"
                            style={{ objectFit: 'cover', borderRadius: '4px' }}
                          />
                        ) : (
                          <span className="ecosystem-card-icon" />
                        )}
                        {item.url ? (
                          <a 
                            href={item.url} 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="ecosystem-card-item-text"
                            style={{ color: '#b0b0b0', textDecoration: 'none' }}
                          >
                            {item.name}
                          </a>
                        ) : (
                          <span className="ecosystem-card-item-text">{item.name}</span>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              ))
            ) : (
              <div className="ecosystem-card">
                <div className="ecosystem-card-header">
                  <span className="ecosystem-card-title">No Data Available</span>
                </div>
                <div className="ecosystem-card-items">
                  <div className="ecosystem-card-item">
                    <span className="ecosystem-card-item-text">This map is coming soon</span>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </PageLayout>
  );
};

export default Map;