import React from 'react';

interface SectionHeaderProps {
  title: string;
}

export const SectionHeader: React.FC<SectionHeaderProps> = ({ title }) => {
  return (
    <div className="mb-8">
      <h2 className="text-3xl font-bold text-gray-900 dark:text-white">
        {title}
      </h2>
    </div>
  );
}; 