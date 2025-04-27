import React from 'react';
import PageLayout from '../components/layout/PageLayout';
import { toolsFilters } from '../data/filterData';

const ToolsLibraries: React.FC = () => {
  return (
    <PageLayout customFilters={toolsFilters}>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="bg-gray-900/40 border border-gray-800 p-4">
          <h2 className="text-xl font-mono text-white mb-4">Inference APIs</h2>
          <div className="space-y-2">
            <div className="text-gray-400 font-mono text-sm">Data Processing</div>
            <div className="text-gray-400 font-mono text-sm">RAG</div>
            <div className="text-gray-400 font-mono text-sm">Memory</div>
            <div className="text-gray-400 font-mono text-sm">Compute</div>
          </div>
        </div>
        
        <div className="bg-gray-900/40 border border-gray-800 p-4">
          <h2 className="text-xl font-mono text-white mb-4">Observability</h2>
          <div className="space-y-2">
            <div className="text-gray-400 font-mono text-sm">Web Scraping</div>
            <div className="text-gray-400 font-mono text-sm">Hosting</div>
            <div className="text-gray-400 font-mono text-sm">Sandboxing</div>
          </div>
        </div>
        
        <div className="bg-gray-900/40 border border-gray-800 p-4">
          <h2 className="text-xl font-mono text-white mb-4">Automation</h2>
          <div className="space-y-2">
            <div className="text-gray-400 font-mono text-sm">Browser Automation</div>
            <div className="text-gray-400 font-mono text-sm">Workflow Automation</div>
            <div className="text-gray-400 font-mono text-sm">Authentication</div>
            <div className="text-gray-400 font-mono text-sm">Payment</div>
          </div>
        </div>
      </div>
    </PageLayout>
  );
};

export default ToolsLibraries;