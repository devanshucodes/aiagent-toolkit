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
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 flex flex-col lg:flex-row items-start lg:items-center">
        <div className="flex-1">
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-white mb-4 font-mono">
            AI Agent Toolkit
          </h1>
          
          <p className="text-sm text-gray-400 mb-8 max-w-2xl font-mono">
            A curated collection of the best AI tools, frameworks, and resources
            for building intelligent agents.
          </p>
          
          <div className="flex">
            <SearchBar onSearch={onSearch} />
          </div>
        </div>
        <div className="hidden lg:block flex-shrink-0 ml-8">
          <img 
            src={heroImage} 
            alt="AI Agent Toolkit Hero" 
            className="w-72 h-auto object-contain rounded-none shadow-lg -scale-x-100"
          />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;