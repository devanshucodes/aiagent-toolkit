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
      <a href={tool.url} className="tool-card-link pentagon-corner-btn" style={{position: 'absolute', top: 0, right: 0, width: '28px', height: '28px', background: 'rgba(255,255,255,0.10)', display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 2}}>
        <ExternalLink size={16} color="#fff" />
      </a>
      <div className="tool-card-inner" style={{position: 'relative'}}>
        <div className="tool-card-header">
          <div className="tool-card-title-row">
            <img 
              src={tool.logo} 
              alt={`${tool.name} logo`} 
              className="tool-card-logo" 
            />
            <h3 className="tool-card-title">{tool.name}</h3>
          </div>
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