import React, { useState } from 'react';
import PageLayout from '../components/layout/PageLayout';

const Glossary: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  
  const alphabet = '#ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');
  
  const glossaryItems = [
    {
      term: '0x Protocol',
      definition: '0x is an Ethereum-based open-source platform for exchanging cryptocurrencies. It allows for the creation of features in a decentralized exchange (DEX), a wallet or a marketplace.'
    },
    {
      term: '401(k) Plan',
      definition: 'A 401(k) plan is a retirement savings program sponsored by US companies where employees contribute part of their income and the employer matches the contributions.'
    },
    {
      term: '51% Attack',
      definition: 'If more than half the computer power or mining hash rate on a network is run by a single person or a single group of people, then a 51% attack is in operation.'
    },
    {
      term: '80/20 Rule (Pareto Principle)',
      definition: 'The 80/20 rule, commonly known as Pareto Principle, states that 20% of your actions account for 80% of results.'
    }
  ];

  return (
    <PageLayout>
      <div className="space-y-8">
        <div className="mb-8">
          <input
            type="text"
            placeholder="Search Ecosystems"
            className="w-full mb-4 py-2 px-4 bg-gray-900/60 text-gray-400 border border-gray-800 font-mono text-sm"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          
          <div className="flex flex-wrap gap-4 text-gray-400 font-mono">
            {alphabet.map((letter) => (
              <a
                key={letter}
                href={`#${letter}`}
                className="hover:text-white transition-colors duration-200"
              >
                {letter}
              </a>
            ))}
          </div>
        </div>
        
        <div className="space-y-8">
          {glossaryItems.map((item, index) => (
            <div key={index} className="border-b border-gray-800 pb-6">
              <h2 className="text-2xl font-mono text-white mb-2">{item.term}</h2>
              <p className="text-gray-400 font-mono text-sm">{item.definition}</p>
            </div>
          ))}
        </div>
      </div>
    </PageLayout>
  );
};

export default Glossary;