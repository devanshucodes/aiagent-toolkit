import React, { useEffect, useState } from 'react';
import SectionHeader from '../ui/SectionHeader';
import { CommunityCard } from '../../components/cards/CommunityCard';
import { getCommunities, Community } from '../../lib/sanityQueries';

interface SanityCommunitiesSectionProps {
  title: string;
  searchQuery?: string;
}

const SanityCommunitiesSection: React.FC<SanityCommunitiesSectionProps> = ({ 
  title,
  searchQuery = ''
}) => {
  const [communities, setCommunities] = useState<Community[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchCommunities = async () => {
      try {
        setLoading(true);
        const fetchedCommunities = await getCommunities();
        setCommunities(fetchedCommunities);
        setError(null);
      } catch (err) {
        console.error('Error fetching communities:', err);
        setError('Failed to fetch communities');
      } finally {
        setLoading(false);
      }
    };

    fetchCommunities();
  }, []);

  const filteredCommunities = communities.filter(community => {
    if (!searchQuery) return true;
    const searchLower = searchQuery.toLowerCase();
    return (
      (community.name && community.name.toLowerCase().includes(searchLower)) ||
      (community.description && community.description.toLowerCase().includes(searchLower)) ||
      (Array.isArray(community.tags) && community.tags.some(tag => tag && tag.toLowerCase().includes(searchLower)))
    );
  });

  if (loading) {
    return (
      <div>
        <SectionHeader title={title} />
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
        <SectionHeader title={title} />
        <div className="text-red-500 text-center">{error}</div>
      </div>
    );
  }

  if (filteredCommunities.length === 0) {
    return null;
  }

  return (
    <div>
      <SectionHeader title={title} />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-4">
        {filteredCommunities.map((community) => (
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

export default SanityCommunitiesSection; 