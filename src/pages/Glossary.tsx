import React, { useState } from 'react';
import PageLayout from '../components/layout/PageLayout';
import '../styles/glossary.css';

const Glossary: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [currentLetter, setCurrentLetter] = useState('#');
  
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

  const filteredItems = glossaryItems.filter(item => {
    const firstChar = item.term[0].toUpperCase();
    const matchesLetter = currentLetter === '#' 
      ? !isNaN(Number(firstChar))
      : firstChar === currentLetter;
    
    if (searchTerm) {
      return item.term.toLowerCase().includes(searchTerm.toLowerCase());
    }
    return matchesLetter;
  });

  return (
    <PageLayout showSidebar={false}>
      <div className="glossary-container">
        <div className="glossary-header">
          <input
            type="text"
            placeholder="Search Ecosystem"
            className="glossary-search"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          
          <div className="alphabet-nav">
            {alphabet.map((letter) => (
              <a
                key={letter}
                href="#"
                className={currentLetter === letter ? 'active' : ''}
                onClick={(e) => {
                  e.preventDefault();
                  setCurrentLetter(letter);
                  setSearchTerm('');
                }}
              >
                {letter}
              </a>
            ))}
          </div>
        </div>
        
        <div className="glossary-content">
          <div className="current-letter">
            {currentLetter}
          </div>
          
          <div className="glossary-items">
            {filteredItems.map((item, index) => (
              <div key={index} className="glossary-item">
                <h2 className="glossary-term">{item.term}</h2>
                <p className="glossary-definition">{item.definition}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </PageLayout>
  );
};

export default Glossary;