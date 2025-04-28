import React from 'react';
import { ExternalLink } from 'lucide-react';
import { Tool } from '../../types';
import Rating from './Rating';
import './ToolCard.css';

interface ToolCardProps {
  tool: Tool;
}

const ToolCard: React.FC<ToolCardProps> = ({ tool }) => {
  return (
    <div className="tool-card">
      <div className="tool-card-inner">
        <div className="tool-card-header">
          <div className="tool-card-title-row">
            <img 
              src={tool.logo} 
              alt={`${tool.name} logo`} 
              className="tool-card-logo" 
            />
            <h3 className="tool-card-title">{tool.name}</h3>
          </div>
          <a href={tool.url} className="tool-card-link">
            <ExternalLink size={16} />
          </a>
        </div>
        <div className="tool-card-categories">
          {tool.category.map((cat, index) => (
            <span 
              key={index} 
              className="tool-card-category"
            >
              {cat}
            </span>
          ))}
        </div>
        <p className="tool-card-desc">{tool.description}</p>
        <div className="tool-card-footer">
          <div>
            <span className="tool-card-type-label">Type</span>
            <span className={`tool-card-type tool-card-type-${tool.type.toLowerCase()}`}>
              {tool.type}
            </span>
          </div>
          <div>
            <span className="tool-card-rating-label">RATING</span>
            <Rating value={tool.rating} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ToolCard;