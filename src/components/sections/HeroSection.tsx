import React from 'react';
import SearchBar from '../ui/SearchBar';

interface HeroSectionProps {
  onSearch: (query: string) => void;
}

const HeroSection: React.FC<HeroSectionProps> = ({ onSearch }) => {
  return (
    <div className="relative bg-black overflow-hidden">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/95 to-transparent z-10" />
        <img 
          src="https://images.pexels.com/photos/3052361/pexels-photo-3052361.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
          alt="Cyberpunk background" 
          className="w-full h-full object-cover opacity-20 filter hue-rotate-270"
        />
      </div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
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
    </div>
  );
};

export default HeroSection;