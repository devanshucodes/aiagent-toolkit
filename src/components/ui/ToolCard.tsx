import React from 'react';
import { ExternalLink } from 'lucide-react';
import { Tool } from '../../types';
import Rating from './Rating';

interface ToolCardProps {
  tool: Tool;
}

const ToolCard: React.FC<ToolCardProps> = ({ tool }) => {
  return (
    <div className="bg-gray-900/40 border border-gray-800 rounded-none overflow-hidden transition-all duration-300 hover:border-purple-800 w-[19rem] h-[20rem]">
      <div className="p-3">
        <div className="flex justify-between items-start mb-2">
          <div className="flex items-center">
            <img 
              src={tool.logo} 
              alt={`${tool.name} logo`} 
              className="w-8 h-8 rounded-none object-cover mr-3" 
            />
            <h3 className="text-white text-base font-mono">{tool.name}</h3>
          </div>
          <a href={tool.url} className="text-gray-500 hover:text-gray-300 transition-colors duration-200">
            <ExternalLink size={16} />
          </a>
        </div>
        
        <div className="flex flex-wrap gap-2 mb-2">
          {tool.category.map((cat, index) => (
            <span 
              key={index} 
              className="text-xs font-mono bg-gray-800 text-gray-400 px-2 py-1"
            >
              {cat}
            </span>
          ))}
        </div>
        
        <p className="text-gray-500 text-xs font-mono mb-2 leading-relaxed">{tool.description}</p>
        
        <div className="flex justify-between items-center mt-auto pt-3 border-t border-gray-800">
          <div>
            <span className="text-xs text-gray-600 font-mono uppercase block mb-1">Type</span>
            <span className={`text-xs font-mono ${
              tool.type === 'Free' ? 'text-green-500' : 
              tool.type === 'Paid' ? 'text-orange-500' : 'text-blue-500'
            }`}>
              {tool.type}
            </span>
          </div>
          
          <div>
            <span className="text-xs text-gray-600 font-mono uppercase block mb-1">RATING</span>
            <Rating value={tool.rating} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ToolCard;