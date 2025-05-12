import React, { useEffect, useState } from 'react';
import PageLayout from '../components/layout/PageLayout';
import '../styles/ecosystem-map.css'; // Import the custom CSS file
import { getEcosystemMap, EcosystemMap } from '../lib/sanityQueries';

const Map: React.FC = () => {
  const [ecosystemMap, setEcosystemMap] = useState<EcosystemMap | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchEcosystemMap = async () => {
      try {
        const data = await getEcosystemMap();
        setEcosystemMap(data);
        setError(null);
      } catch (err) {
        setError('Failed to load ecosystem map');
        console.error('Error fetching ecosystem map:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchEcosystemMap();
  }, []);

  return (
    <PageLayout 
      showSidebar={false} 
      showHero={true}
      aboveContent={
        <div className="max-w-7xl mx-auto w-full relative">
          <div className="w-full py-2 mb-1 relative flex">
            {/* Headline and category bar */}
            <div className="flex items-stretch gap-6 w-full">
              {/* Spacer for divider (to align with other pages) */}
              <div style={{ minWidth: '1.5px' }} />
              {/* Right: Category buttons */}
              <div className="flex flex-wrap gap-2 justify-center flex-1">
                {[
                  'AI x Crypto Map',
                  'AI Agent Market Map',
                  'AI Agent Infra Map',
                  'MCP Market Map',
                ].map((cat) => (
                  <button
                    key={cat}
                    className="filter-option px-4 py-2 text-sm font-mono whitespace-nowrap"
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
            {loading ? 'Loading...' : ecosystemMap?.title || 'Web3 AI Ecosystem Map'}
          </h1>
          <p className="ecosystem-map-desc">
            {loading ? 'Loading...' : ecosystemMap?.description || 'A curated collection of the best AI tools, frameworks, and resources for building intelligent agents'}
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
            ) : (
              ecosystemMap?.categories.map((section, index) => (
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
                            src={typeof item.logo === 'string' ? item.logo : item.logo?.asset?.url} 
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
            )}
          </div>
        </div>
      </div>
    </PageLayout>
  );
};

export default Map;