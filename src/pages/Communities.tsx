import React, { useState, useEffect } from 'react';
import SanityCommunitiesSection from '../components/sections/SanityCommunitiesSection';
import PageLayout from '../components/layout/PageLayout';

const Communities: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');

  // Initialize search from URL if present
  useEffect(() => {
    const searchParams = new URLSearchParams(window.location.search);
    const query = searchParams.get('search');
    if (query) {
      setSearchQuery(query);
    }
  }, []);

  // Listen for search events from the parent
  useEffect(() => {
    const handleGlobalSearch = (event: CustomEvent) => {
      const { query } = event.detail;
      setSearchQuery(query);
    };

    window.addEventListener('globalSearch' as any, handleGlobalSearch);
    return () => {
      window.removeEventListener('globalSearch' as any, handleGlobalSearch);
    };
  }, []);

  return (
    <PageLayout showSidebar={false}>
      <div className="mt-8">
        <SanityCommunitiesSection 
          title="AI Agent Communities" 
          searchQuery={searchQuery}
        />
      </div>
    </PageLayout>
  );
};

export default Communities;