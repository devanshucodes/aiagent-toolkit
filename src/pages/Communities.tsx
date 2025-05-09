import React from 'react';
import { SanityCommunitiesSection } from '../components/sections/SanityCommunitiesSection';
import PageLayout from '../components/layout/PageLayout';

const Communities: React.FC = () => {
  return (
    <PageLayout showSidebar={false}>
      <SanityCommunitiesSection title="AI Agent Communities" />
    </PageLayout>
  );
};

export default Communities;