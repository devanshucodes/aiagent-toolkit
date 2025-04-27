import React from 'react';
import SearchBar from '../ui/SearchBar';
import heroImage from '../../assets/images/ea4a31389d4a5701e70735cf16c0c5bf5de76482.png';

interface HeroSectionProps {
  onSearch: (query: string) => void;
}

const HeroSection: React.FC<HeroSectionProps> = ({ onSearch }) => {
  return (
    <div className="relative bg-black overflow-hidden">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/95 to-transparent z-10" />
      </div>
      
      <div className="relative z-10 max-w-7xl mx-auto flex flex-col lg:flex-row items-start lg:items-center">
        <div className="flex-1 relative py-8">
          <div className="absolute left-6 top-9 h-[160px] flex items-start">
            <div className="w-px bg-gray-600 opacity-40 h-full"></div>
          </div>
          <div className="max-w-xl text-left ml-12">
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-white mb-3 font-mono">
              AI Agent Toolkit
            </h1>
            <p className="text-sm text-gray-400 mb-5 max-w-2xl font-mono">
              A curated collection of the best AI tools, frameworks, and resources
              for building intelligent agents
            </p>
            <div className="flex">
              <input
                type="text"
                placeholder="Search tools, frameworks, resources ..."
                className="flex-grow py-2 px-3 bg-gray-800 text-gray-400 border-none rounded-none font-mono text-sm focus:outline-none focus:ring-0"
              />
              <button
                type="submit"
                className="ml-0 -ml-px px-5 py-2 bg-red-900/80 hover:bg-red-800 text-white font-mono text-sm border border-red-700 border-l-0 pentagon-btn transition-colors duration-200"
              >
                Search
              </button>
            </div>
          </div>
        </div>
        <img 
          src={heroImage} 
          alt="AI Agent Toolkit Hero" 
          className="hidden lg:block absolute -scale-x-100 w-2/3 md:w-1/2 lg:w-1/3 h-auto top-[-20%] right-8 object-contain rounded-none shadow-lg"
        />
      </div>
    </div>
  );
};

export default HeroSection;