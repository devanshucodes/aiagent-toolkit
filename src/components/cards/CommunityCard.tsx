import React from 'react';
import { Send, MessageSquare, Github, Instagram, Globe } from 'lucide-react';

interface CommunityCardProps {
  name: string;
  logo: string;
  description: string;
  members: number;
  url: string;
  tags: string[];
  socialLinks?: {
    website?: string;
    telegram?: string;
    discord?: string;
    x?: string;
    github?: string;
    replit?: string;
    instagram?: string;
  };
}

export const CommunityCard: React.FC<CommunityCardProps> = ({
  name,
  logo,
  description,
  members,
  url,
  tags,
  socialLinks,
}) => {
  // Only show social links section if there are any valid links
  const hasValidSocialLinks = socialLinks && Object.values(socialLinks).some(link => !!link);

  return (
    <div 
      className="tool-card"
      style={{
        width: '100%',
        height: '22rem',
        background: '#27262b',
        border: '1px solid #FF846C40',
        margin: '0'
      }}
    >
      <div className="tool-card-inner" style={{padding: '1.25rem', height: '100%', position: 'relative'}}>
        <div className="tool-card-header" style={{display: 'flex', flexDirection: 'column', alignItems: 'flex-start', marginBottom: '0.75rem'}}>
          <div 
            className="tool-card-logo"
            style={{
              width: '3.5rem',
              height: '3.5rem',
              background: '#3d3c40',
              borderRadius: '4px',
              overflow: 'hidden',
              marginBottom: '1rem'
            }}
          >
            <img src={logo} alt={name} className="w-full h-full object-cover" />
          </div>
          <h3 
            className="tool-card-title"
            style={{
              fontFamily: 'Kode Mono, monospace',
              color: '#FFFFFF',
              fontSize: '1.125rem',
              fontWeight: '500',
              marginBottom: '0.5rem'
            }}
          >
            {name}
          </h3>
        </div>
        
        <div className="community-tags" style={{display: 'flex', flexWrap: 'wrap', gap: '0.5rem'}}>
          {tags.map((tag, idx) => (
            <span 
              key={idx} 
              className="community-tag"
              style={{
                background: '#3d3c40',
                color: '#ffffff',
                padding: '0.25rem 0.5rem',
                fontSize: '0.75rem',
                fontFamily: 'Kode Mono, monospace'
              }}
            >
              {tag}
            </span>
          ))}
        </div>
        
        <p 
          className="tool-card-desc"
          style={{
            color: '#FFFFFFBF',
            fontSize: '0.75rem',
            fontFamily: 'Kode Mono, monospace',
            marginBottom: '1.5rem',
            lineHeight: '1.5',
            display: '-webkit-box',
            WebkitLineClamp: 4,
            WebkitBoxOrient: 'vertical',
            overflow: 'hidden',
            textOverflow: 'ellipsis',
            maxHeight: '6em'
          }}
        >
          {description}
        </p>
        
        {hasValidSocialLinks && (
          <div className="flex gap-6 mt-auto" style={{paddingTop: '1rem'}}>
            {socialLinks?.website && (
              <a href={socialLinks.website} target="_blank" rel="noopener noreferrer">
                <Globe size={18} className="text-gray-400 hover:text-gray-200 cursor-pointer" />
              </a>
            )}
            {socialLinks?.telegram && (
              <a href={socialLinks.telegram} target="_blank" rel="noopener noreferrer">
                <Send size={18} className="text-gray-400 hover:text-gray-200 cursor-pointer" />
              </a>
            )}
            {socialLinks?.discord && (
              <a href={socialLinks.discord} target="_blank" rel="noopener noreferrer">
                <svg viewBox="0 0 24 24" width="18" height="18" className="text-gray-400 hover:text-gray-200 cursor-pointer">
                  <path fill="currentColor" d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028 14.09 14.09 0 0 0 1.226-1.994.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z"/>
                </svg>
              </a>
            )}
            {socialLinks?.x && (
              <a href={socialLinks.x} target="_blank" rel="noopener noreferrer">
                <svg viewBox="0 0 24 24" width="20" height="20" className="text-gray-400 hover:text-gray-200 cursor-pointer">
                  <path fill="currentColor" d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                </svg>
              </a>
            )}
            {socialLinks?.github && (
              <a href={socialLinks.github} target="_blank" rel="noopener noreferrer">
                <Github size={18} className="text-gray-400 hover:text-gray-200 cursor-pointer" />
              </a>
            )}
            {socialLinks?.replit && (
              <a href={socialLinks.replit} target="_blank" rel="noopener noreferrer">
                <svg viewBox="0 0 24 24" width="18" height="18" className="text-gray-400 hover:text-gray-200 cursor-pointer">
                  <path fill="currentColor" d="M12 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0zm5.01 4.744c.688 0 1.25.561 1.25 1.249a1.25 1.25 0 0 1-2.498.056l-2.597-.547-.8 3.747c1.824.07 3.48.632 4.674 1.488.308-.309.73-.491 1.207-.491.968 0 1.754.786 1.754 1.754 0 .716-.435 1.333-1.01 1.614a3.111 3.111 0 0 1 .042.52c0 2.694-3.13 4.87-7.004 4.87-3.874 0-7.004-2.176-7.004-4.87 0-.183.015-.366.043-.534A1.748 1.748 0 0 1 4.028 12c0-.968.786-1.754 1.754-1.754.463 0 .898.196 1.207.49 1.207-.883 2.878-1.43 4.744-1.487l.885-4.182a.342.342 0 0 1 .14-.197.35.35 0 0 1 .238-.042l2.906.617a1.214 1.214 0 0 1 1.108-.701zM9.25 12C8.561 12 8 12.562 8 13.25c0 .687.561 1.248 1.25 1.248.687 0 1.248-.561 1.248-1.249 0-.688-.561-1.249-1.249-1.249zm5.5 0c-.687 0-1.248.561-1.248 1.25 0 .687.561 1.248 1.249 1.248.688 0 1.249-.561 1.249-1.249 0-.687-.562-1.249-1.25-1.249zm-5.466 3.99a.327.327 0 0 0-.231.094.33.33 0 0 0 0 .463c.842.842 2.484.913 2.961.913.477 0 2.105-.056 2.961-.913a.361.361 0 0 0 .029-.463.33.33 0 0 0-.464 0c-.547.533-1.684.73-2.512.73-.828 0-1.979-.196-2.512-.73a.326.326 0 0 0-.232-.095z"/>
                </svg>
              </a>
            )}
            {socialLinks?.instagram && (
              <a href={socialLinks.instagram} target="_blank" rel="noopener noreferrer">
                <Instagram size={18} className="text-gray-400 hover:text-gray-200 cursor-pointer" />
              </a>
            )}
          </div>
        )}
      </div>
    </div>
  );
}; 