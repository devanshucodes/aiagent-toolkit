import React from 'react';
import PageLayout from '../components/layout/PageLayout';
import '../styles/ecosystem-map.css'; // Import the custom CSS file

const Map: React.FC = () => {
  const frameworks = [
    {
      title: "Frameworks",
      items: ["Name of Product", "Name of Product", "Name of Product", "Name of Product"]
    },
    {
      title: "Infrastructure",
      items: ["Name of Product", "Name of Product", "Name of Product"]
    },
    {
      title: "Development Tools",
      items: ["Name of Product", "Name of Product", "Name of Product", "Name of Product"]
    },
    {
      title: "Deployment",
      items: ["Name of Product", "Name of Product", "Name of Product"]
    }
  ];

  return (
    <PageLayout showSidebar={false} showHero={true}>
      <div style={{ width: '100%', marginBottom: '2.5rem' }}>
        <input
          type="text"
          placeholder="Search Ecosystem"
          className="search-box font-mono text-sm focus:outline-none focus:ring-0"
          style={{ width: '420px', background: '#0F0E14', color: '#b0b0b0', border: '1px solid #35343a', padding: '0.75rem 1.2rem', fontFamily: 'Kode Mono, monospace' }}
        />
      </div>
      <div className="ecosystem-map-section">
        <div className="ecosystem-map-inner">
          <h1 className="ecosystem-map-title">Web3 AI Ecosystem Map</h1>
          <p className="ecosystem-map-desc">
            A curated collection of the best AI tools, frameworks, and resources for building intelligent agents
          </p>
          <div className="ecosystem-map-grid">
            {frameworks.map((section, index) => (
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
                      <span className="ecosystem-card-icon" />
                      <span className="ecosystem-card-item-text">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </PageLayout>
  );
};

export default Map;