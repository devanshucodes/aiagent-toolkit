import React from 'react';
import PageLayout from '../components/layout/PageLayout';

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
    <PageLayout>
      <div className="space-y-8">
        <input
          type="text"
          placeholder="Search Ecosystems"
          className="w-full mb-8 py-2 px-4 bg-gray-900/60 text-gray-400 border border-gray-800 font-mono text-sm"
        />
        
        <h1 className="text-4xl font-mono text-white mb-4">Web3 AI Ecosystem Map</h1>
        <p className="text-gray-400 font-mono text-sm mb-8">
          A curated collection of the best AI tools, frameworks, and resources for building intelligent agents
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {frameworks.map((section, index) => (
            <div key={index} className="space-y-4">
              <div className="bg-gray-900/40 border border-gray-800 p-4">
                <h3 className="text-white font-mono mb-4 flex items-center justify-between">
                  {section.title}
                  <div className="space-x-0.5">
                    {[...Array(4)].map((_, i) => (
                      <div key={i} className="inline-block w-0.5 h-3 bg-gray-700" />
                    ))}
                  </div>
                </h3>
                <div className="space-y-2">
                  {section.items.map((item, idx) => (
                    <div key={idx} className="bg-gray-800/50 p-2">
                      <span className="text-gray-400 font-mono text-sm">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </PageLayout>
  );
};

export default Map;