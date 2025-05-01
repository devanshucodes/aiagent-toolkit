import React, { useEffect, useState } from 'react';
import SectionHeader from '../ui/SectionHeader';
import { CommunityCard } from '../../components/cards/CommunityCard';
import { getCommunities, Community } from '../../lib/sanityQueries';

interface SanityCommunitiesSectionProps {
  title: string;
}

export const SanityCommunitiesSection: React.FC<SanityCommunitiesSectionProps> = ({ title }) => {
  const [communities, setCommunities] = useState<Community[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6;

  useEffect(() => {
    const fetchCommunities = async () => {
      try {
        setLoading(true);
        const data = await getCommunities();
        setCommunities(data);
        setError(null);
      } catch (err) {
        setError('Failed to fetch communities');
        console.error('Error fetching communities:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchCommunities();
  }, []);

  const totalPages = Math.ceil(communities.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentCommunities = communities.slice(startIndex, endIndex);

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(prev => prev + 1);
    }
  };

  const handlePrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(prev => prev - 1);
    }
  };

  if (loading) {
    return (
      <div>
        <SectionHeader title={title} onNext={handleNextPage} onPrevious={handlePrevPage} />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {[...Array(6)].map((_, index) => (
            <div key={index} className="animate-pulse">
              <div className="bg-gray-800 rounded-lg h-64"></div>
            </div>
          ))}
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div>
        <SectionHeader title={title} onNext={handleNextPage} onPrevious={handlePrevPage} />
        <div className="text-red-500 text-center">{error}</div>
      </div>
    );
  }

  return (
    <div>
      <SectionHeader title={title} onNext={handleNextPage} onPrevious={handlePrevPage} />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
        {currentCommunities.map((community) => (
          <CommunityCard
            key={community._id}
            name={community.name}
            logo={community.logo}
            description={community.description}
            members={community.members}
            url={community.url}
            tags={community.tags}
            socialLinks={community.socialLinks}
          />
        ))}
      </div>
    </div>
  );
}; 