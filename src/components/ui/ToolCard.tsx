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
    <a 
      href={tool.url} 
      target="_blank" 
      rel="noopener noreferrer" 
      className="tool-card"
    >
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
          <ExternalLink size={16} color="#fff" className="opacity-50" />
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
    </a>
  );
};

export default ToolCard;