import React from 'react';
import { Tool } from '../../types';
import './TechStackCard.css';

interface TechStackCardProps {
  tool: Tool;
}

const TechStackCard: React.FC<TechStackCardProps> = ({ tool }) => {
  return (
    <div className="tech-stack-card">
      <div className="tech-stack-card-inner">
        <h3 className="tech-stack-card-title">{tool.name}</h3>
        <div className="tech-stack-card-tags">
          {tool.tags.map((tag, index) => (
            <span key={index} className="tech-stack-card-tag">
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TechStackCard; 