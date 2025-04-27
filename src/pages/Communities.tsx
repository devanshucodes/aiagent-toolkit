import React from 'react';
import PageLayout from '../components/layout/PageLayout';
import { communityFilters } from '../data/filterData';
import { MessageCircle, Github, Twitter } from 'lucide-react';

const Communities: React.FC = () => {
  const communities = [
    {
      name: 'Capx Collective',
      description: 'A TypeScript-based framework by AI1E2 with ~60% market share.',
      tags: ['AI Agents', 'Map'],
      logo: 'https://images.pexels.com/photos/2007647/pexels-photo-2007647.jpeg?auto=compress&cs=tinysrgb&w=50&h=50&dpr=1'
    },
    {
      name: 'r/OpenAI',
      description: 'A TypeScript-based framework by AI1E2 with ~60% market share.',
      tags: ['Tools', 'Top LLMs'],
      logo: 'https://images.pexels.com/photos/1629236/pexels-photo-1629236.jpeg?auto=compress&cs=tinysrgb&w=50&h=50&dpr=1'
    },
    {
      name: 'r/LocalLLaMA',
      description: 'A TypeScript-based framework by AI1E2 with ~60% market share.',
      tags: ['Top LLMs', 'Community'],
      logo: 'https://images.pexels.com/photos/2559941/pexels-photo-2559941.jpeg?auto=compress&cs=tinysrgb&w=50&h=50&dpr=1'
    }
  ];

  return (
    <PageLayout customFilters={communityFilters}>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {communities.map((community, index) => (
          <div key={index} className="bg-gray-900/40 border border-gray-800 p-4">
            <div className="flex items-center mb-4">
              <img src={community.logo} alt={community.name} className="w-10 h-10 mr-3" />
              <h2 className="text-xl font-mono text-white">{community.name}</h2>
            </div>
            
            <div className="flex flex-wrap gap-2 mb-3">
              {community.tags.map((tag, idx) => (
                <span key={idx} className="text-xs font-mono bg-gray-800 text-gray-400 px-2 py-1">
                  {tag}
                </span>
              ))}
            </div>
            
            <p className="text-gray-400 font-mono text-sm mb-4">{community.description}</p>
            
            <div className="flex gap-4 mt-4">
              <MessageCircle size={20} className="text-gray-500 hover:text-gray-300 cursor-pointer" />
              <Github size={20} className="text-gray-500 hover:text-gray-300 cursor-pointer" />
              <Twitter size={20} className="text-gray-500 hover:text-gray-300 cursor-pointer" />
            </div>
          </div>
        ))}
      </div>
    </PageLayout>
  );
};

export default Communities;