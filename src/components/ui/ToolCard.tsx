import React from 'react';
import { ExternalLink } from 'lucide-react';
import { Tool } from '../../types';
import Rating from './Rating';
import './ToolCard.css';

interface ToolCardProps {
  tool: Tool;
}

const ToolCard: React.FC<ToolCardProps> = ({ tool }) => {
  const renderRatingLines = (rating: number) => {
    const lines = [];
    for (let i = 0; i < 5; i++) {
      lines.push(
        <div 
          key={i} 
          className={`rating-line ${i < rating ? 'active' : ''}`}
        />
      );
    }
    return <div className="tool-card-rating-lines">{lines}</div>;
  };

  return (
    <div className="tool-card">
      <a href={tool.url} className="tool-card-link pentagon-corner-btn" style={{position: 'absolute', top: 0, right: 0, width: '30px', height: '30px', background: 'rgba(255,255,255,0.10)', display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 2}}>
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
        <div className="tool-card-tags">
          {tool.tags.map((tag, index) => (
            <span key={index} className="tool-card-tag">
              {tag}
            </span>
          ))}
        </div>
        <p className="tool-card-desc" style={{
          display: '-webkit-box',
          WebkitLineClamp: 5,
          WebkitBoxOrient: 'vertical',
          overflow: 'hidden',
          textOverflow: 'ellipsis',
          lineHeight: '1.5',
          maxHeight: '7.5em'
        }}>
          {tool.description}
        </p>
        <div className="tool-card-footer">
          <div className="tool-card-footer-row">
            <span className="tool-card-type-label">Type</span>
            <span className="tool-card-type tool-card-type-free">Free</span>
          </div>
          <div className="tool-card-footer-row">
            <span className="tool-card-rating-label">Rating</span>
            {renderRatingLines(tool.rating)}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ToolCard;