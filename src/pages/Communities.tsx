import React, { useState } from 'react';
import PageLayout from '../components/layout/PageLayout';
import { filterGroups } from '../data/filterData';
import { Send, MessageSquare, Github, Instagram } from 'lucide-react';
import { FilterGroup } from '../types';

const Communities: React.FC = () => {
  const [filters, setFilters] = useState<FilterGroup[]>(filterGroups);

  const handleToggleFilter = (category: string, id: string) => {
    setFilters(prevFilters => 
      prevFilters.map(group => 
        group.category === category
          ? {
              ...group,
              options: group.options.map(option => 
                option.id === id
                  ? { ...option, active: !option.active }
                  : option
              )
            }
          : group
      )
    );
  };

  const communities = [
    {
      name: 'Capx Collective',
      description: 'A TypeScript-based framework by AI1E2 with ~60% market share. Features extensive',
      tags: ['AI Agents', 'Map'],
      logo: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=facearea&w=128&q=80'
    },
    {
      name: 'r/OpenAI',
      description: 'A TypeScript-based framework by AI1E2 with ~60% market',
      tags: ['Tools', 'Top LLMs'],
      logo: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=facearea&w=128&q=80'
    },
    {
      name: 'r/LocalLLaMA',
      description: 'A TypeScript-based framework by AI1E2 with ~60% market share. Features extensive.',
      tags: ['Top LLMs', 'Community'],
      logo: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=facearea&w=128&q=80'
    },
    {
      name: 'r/ArtificialIntelligence',
      description: 'A TypeScript-based framework by AI1E2 with ~60% market share. Features extensive multi-agent simulation capabilities, cross-platform social engagement, and a t...',
      tags: ['Business intelligence', 'Map'],
      logo: 'https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=facearea&w=128&q=80'
    },
    {
      name: 'r/AI_Agents',
      description: 'A TypeScript-based framework by AI1E2 with ~60% market share. Features extensive multi-agent simulation capabilities, cross-platform social engagement.',
      tags: ['AI Agents', 'Map'],
      logo: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=facearea&w=128&q=80'
    },
    {
      name: 'r/OpenAI',
      description: 'A TypeScript-based framework by AI1E2 with ~60% market',
      tags: ['Tools', 'Top LLMs'],
      logo: 'https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=facearea&w=128&q=80'
    }
  ];

  return (
    <PageLayout 
      customFilters={filters} 
      onToggleFilter={handleToggleFilter}
    >
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {communities.map((community, index) => (
          <div 
            key={index} 
            className="tool-card"
            style={{
              width: '19rem',
              height: '20rem',
              background: '#27262b',
              border: '1px solid #FF846C40',
              margin: '0'
            }}
          >
            <div className="tool-card-inner" style={{padding: '1rem', height: '100%', position: 'relative'}}>
              <div className="tool-card-header" style={{display: 'flex', flexDirection: 'column', alignItems: 'flex-start', marginBottom: '0.5rem'}}>
                <div 
                  className="tool-card-logo"
                  style={{
                    width: '3rem',
                    height: '3rem',
                    background: '#3d3c40',
                    borderRadius: '4px',
                    overflow: 'hidden',
                    marginBottom: '0.75rem'
                  }}
                >
                  <img src={community.logo} alt={community.name} className="w-full h-full object-cover" />
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
                  {community.name}
                </h3>
              </div>
              
              <div className="tool-card-categories" style={{display: 'flex', flexWrap: 'wrap', gap: '0.5rem', marginBottom: '0.5rem', marginTop: '0.5rem'}}>
                {community.tags.map((tag, idx) => (
                  <span 
                    key={idx} 
                    className="tool-card-category"
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
                  lineHeight: '1.5'
                }}
              >
                {community.description}
              </p>
              
              <div className="flex gap-6 mt-auto" style={{paddingTop: '1rem'}}>
                <Send size={18} className="text-gray-400 hover:text-gray-200 cursor-pointer" />
                <svg viewBox="0 0 24 24" width="20" height="20" className="text-gray-400 hover:text-gray-200 cursor-pointer">
                  <path fill="currentColor" d="M13.545 2.907a13.227 13.227 0 0 0-3.257-1.011.05.05 0 0 0-.052.025c-.141.25-.297.577-.406.833a12.19 12.19 0 0 0-3.658 0 8.258 8.258 0 0 0-.412-.833.051.051 0 0 0-.052-.025c-1.125.194-2.22.534-3.257 1.011a.041.041 0 0 0-.021.018C.356 6.024-.213 9.047.066 12.032c.001.014.01.028.021.037a13.276 13.276 0 0 0 3.995 2.02.05.05 0 0 0 .056-.019c.308-.42.582-.863.818-1.329a.05.05 0 0 0-.01-.059.051.051 0 0 0-.018-.011 8.875 8.875 0 0 1-1.248-.595.05.05 0 0 1-.02-.066.051.051 0 0 1 .015-.019c.084-.063.168-.129.248-.195a.05.05 0 0 1 .051-.007c2.619 1.196 5.454 1.196 8.041 0a.052.052 0 0 1 .053.007c.08.066.164.132.248.195a.051.051 0 0 1-.004.085 8.254 8.254 0 0 1-1.249.594.05.05 0 0 0-.03.03.052.052 0 0 0 .003.041c.24.465.515.909.817 1.329a.05.05 0 0 0 .056.019 13.235 13.235 0 0 0 4.001-2.02.049.049 0 0 0 .021-.037c.334-3.451-.559-6.449-2.366-9.106a.034.034 0 0 0-.02-.019Zm-8.198 7.307c-.789 0-1.438-.724-1.438-1.612 0-.889.637-1.613 1.438-1.613.807 0 1.45.73 1.438 1.613 0 .888-.637 1.612-1.438 1.612Zm5.316 0c-.788 0-1.438-.724-1.438-1.612 0-.889.637-1.613 1.438-1.613.807 0 1.451.73 1.438 1.613 0 .888-.631 1.612-1.438 1.612Z"/>
                </svg>
                <svg viewBox="0 0 24 24" width="18" height="18" className="text-gray-400 hover:text-gray-200 cursor-pointer">
                  <path fill="currentColor" d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                </svg>
                <Github size={18} className="text-gray-400 hover:text-gray-200 cursor-pointer" />
                <svg viewBox="0 0 24 24" width="18" height="18" className="text-gray-400 hover:text-gray-200 cursor-pointer">
                  <path fill="currentColor" d="M12 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0zm5.01 4.744c.688 0 1.25.561 1.25 1.249a1.25 1.25 0 0 1-2.498.056l-2.597-.547-.8 3.747c1.824.07 3.48.632 4.674 1.488.308-.309.73-.491 1.207-.491.968 0 1.754.786 1.754 1.754 0 .716-.435 1.333-1.01 1.614a3.111 3.111 0 0 1 .042.52c0 2.694-3.13 4.87-7.004 4.87-3.874 0-7.004-2.176-7.004-4.87 0-.183.015-.366.043-.534A1.748 1.748 0 0 1 4.028 12c0-.968.786-1.754 1.754-1.754.463 0 .898.196 1.207.49 1.207-.883 2.878-1.43 4.744-1.487l.885-4.182a.342.342 0 0 1 .14-.197.35.35 0 0 1 .238-.042l2.906.617a1.214 1.214 0 0 1 1.108-.701zM9.25 12C8.561 12 8 12.562 8 13.25c0 .687.561 1.248 1.25 1.248.687 0 1.248-.561 1.248-1.249 0-.688-.561-1.249-1.249-1.249zm5.5 0c-.687 0-1.248.561-1.248 1.25 0 .687.561 1.248 1.249 1.248.688 0 1.249-.561 1.249-1.249 0-.687-.562-1.249-1.25-1.249zm-5.466 3.99a.327.327 0 0 0-.231.094.33.33 0 0 0 0 .463c.842.842 2.484.913 2.961.913.477 0 2.105-.056 2.961-.913a.361.361 0 0 0 .029-.463.33.33 0 0 0-.464 0c-.547.533-1.684.73-2.512.73-.828 0-1.979-.196-2.512-.73a.326.326 0 0 0-.232-.095z"/>
                </svg>
                <Instagram size={18} className="text-gray-400 hover:text-gray-200 cursor-pointer" />
              </div>
            </div>
          </div>
        ))}
      </div>
    </PageLayout>
  );
};

export default Communities;