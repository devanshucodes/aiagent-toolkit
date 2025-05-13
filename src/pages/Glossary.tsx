import React, { useState, useEffect } from 'react';
import PageLayout from '../components/layout/PageLayout';
import { getGlossaryTerms, GlossaryTerm } from '../lib/sanityQueries';
import '../styles/glossary.css';

const Glossary: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [currentLetter, setCurrentLetter] = useState('A');
  const [glossaryItems, setGlossaryItems] = useState<GlossaryTerm[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  
  const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');

  useEffect(() => {
    const fetchGlossaryTerms = async () => {
      try {
        const data = await getGlossaryTerms();
        setGlossaryItems(data);
        setError(null);
      } catch (err) {
        setError('Failed to load glossary terms');
        console.error('Error fetching glossary terms:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchGlossaryTerms();
  }, []);

  const filteredItems = glossaryItems.filter(item => {
    const matchesLetter = item.firstLetter === currentLetter;
    
    if (searchTerm) {
      return item.term.toLowerCase().includes(searchTerm.toLowerCase());
    }
    return matchesLetter;
  });

  return (
    <PageLayout 
      showSidebar={false} 
      hideHeroSearch={true}
      heroDescription="A simple glossary of key terms, concepts, and jargon every AI agent builder should know"
    >
      <div className="glossary-container">
        <div className="glossary-header">
          <input
            type="text"
            placeholder="Search Glossary"
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
            {loading ? (
              <div className="glossary-item">
                <h2 className="glossary-term">Loading...</h2>
                <p className="glossary-definition">Please wait while we load the glossary terms.</p>
              </div>
            ) : error ? (
              <div className="glossary-item">
                <h2 className="glossary-term">Error</h2>
                <p className="glossary-definition">{error}</p>
              </div>
            ) : filteredItems.length === 0 ? (
              <div className="glossary-item">
                <h2 className="glossary-term">No Terms Found</h2>
                <p className="glossary-definition">Try a different search term or letter.</p>
              </div>
            ) : (
              filteredItems.map((item) => (
                <div key={item._id} className="glossary-item">
                  <h2 className="glossary-term">{item.term}</h2>
                  <p className="glossary-definition">{item.definition}</p>
                </div>
              ))
            )}
          </div>
        </div>
      </div>
    </PageLayout>
  );
};

export default Glossary;