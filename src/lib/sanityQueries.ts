import { client } from './sanity'
import { Tool } from '../types'

export async function getTools(category?: string): Promise<Tool[]> {
  const query = `*[_type == "tool"${category ? ` && category == "${category}"` : ''}]{
    _id,
    name,
    "logo": logo.asset->url,
    category,
    tags,
    description,
    type,
    rating,
    url
  }`

  const tools = await client.fetch(query)
  return tools.map((tool: any) => ({
    id: tool._id,
    name: tool.name,
    logo: tool.logo,
    category: tool.category,
    tags: tool.tags,
    description: tool.description,
    type: tool.type,
    rating: tool.rating,
    url: tool.url,
  }))
}

export const getLibraryTools = async (section: string): Promise<Tool[]> => {
  const query = `*[_type == "libraryTool" && section == $section] {
    _id,
    name,
    "logo": logo.asset->url,
    section,
    tags,
    description,
    type,
    rating,
    url
  }`;

  const params = { section };
  const tools = await client.fetch(query, params);

  return tools.map((tool: any) => ({
    id: tool._id,
    name: tool.name,
    logo: tool.logo,
    category: tool.section,
    tags: tool.tags,
    description: tool.description,
    type: tool.type,
    rating: tool.rating,
    url: tool.url
  }));
};

export interface Community {
  _id: string;
  name: string;
  logo: string;
  description: string;
  members: number;
  url: string;
  tags: string[];
  socialLinks?: {
    website?: string | null;
    telegram?: string | null;
    discord?: string | null;
    x?: string | null;
    github?: string | null;
    replit?: string | null;
    instagram?: string | null;
  } | null;
}

export async function getCommunities(): Promise<Community[]> {
  const query = `*[_type == "community"]{
    _id,
    name,
    "logo": logo.asset->url,
    description,
    members,
    url,
    tags,
    socialLinks
  }`;

  const communities = await client.fetch(query);
  return communities;
}

export interface EcosystemMap {
  _id?: string;
  title: string;
  description: string;
  category: string;
  categories: {
    title: string;
    items: {
      name: string;
      logo?: any;
      url?: string;
    }[];
  }[];
}

export const getEcosystemMap = async (category: string = 'AI x Crypto Map'): Promise<EcosystemMap> => {
  // Map category names to their corresponding map titles in Sanity
  const mapTitles = {
    'AI x Crypto Map': 'Web3 AI Ecosystem Map',
    'AI Agent Market Map': 'AI Agent Market Map',
    'AI Agent Infra Map': 'AI Agent Infra Map',
    'MCP Market Map': 'MCP Market Map'
  };

  const mapTitle = mapTitles[category as keyof typeof mapTitles];
  
  const query = `*[_type == "ecosystemMap" && title == $mapTitle][0] {
    _id,
    title,
    description,
    categories[] {
      title,
      items[] {
        name,
        "logo": logo.asset->url,
        url
      }
    }
  }`;

  const params = { mapTitle };
  console.log('Fetching ecosystem map with params:', {
    category,
    mapTitle,
    query
  });
  
  const result = await client.fetch(query, params);
  console.log('Ecosystem map fetch result:', result);
  
  if (!result) {
    console.warn('No ecosystem map found for:', {
      category,
      mapTitle,
      availableMaps: await client.fetch('*[_type == "ecosystemMap"].title')
    });
    return {
      title: category,
      description: 'No description available',
      category,
      categories: []
    };
  }

  return {
    ...result,
    category
  };
};

export interface Course {
  _id: string;
  title: string;
  description: string;
  url: string;
  logo: string;
  author: string;
  tags: string[];
}

export const getCourses = async (): Promise<Course[]> => {
  const query = `*[_type == "course"]{
    _id,
    title,
    description,
    url,
    "logo": logo.asset->url,
    author,
    tags
  }`;
  
  const result = await client.fetch(query);
  return result;
};

export interface GlossaryTerm {
  _id: string;
  term: string;
  definition: string;
  firstLetter: string;
}

export const getGlossaryTerms = async (): Promise<GlossaryTerm[]> => {
  const query = `*[_type == "glossary"] | order(term asc){
    _id,
    term,
    definition,
    firstLetter
  }`;
  
  const result = await client.fetch(query);
  return result;
}; 