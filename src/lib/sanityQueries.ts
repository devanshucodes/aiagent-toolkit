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
    category: tool.tags, // Using tags as categories for the UI
    description: tool.description,
    type: tool.type,
    rating: tool.rating,
    url: tool.url,
  }))
}

export async function getLibraryTools(section: 'inference' | 'observability' | 'automation'): Promise<Tool[]> {
  const query = `*[_type == "libraryTool" && section == "${section}"]{
    _id,
    name,
    "logo": logo.asset->url,
    tags,
    description,
    type,
    rating,
    url
  }`;

  const tools = await client.fetch(query);
  return tools.map((tool: any) => ({
    id: tool._id,
    name: tool.name,
    logo: tool.logo,
    category: tool.tags,
    description: tool.description,
    type: tool.type,
    rating: tool.rating,
    url: tool.url,
  }));
}

export interface Community {
  _id: string;
  name: string;
  logo: string;
  description: string;
  members: number;
  url: string;
  tags: string[];
  socialLinks?: {
    telegram?: string;
    discord?: string;
    x?: string;
    github?: string;
    discord2?: string;
    instagram?: string;
  };
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
  _id: string;
  title: string;
  description: string;
  categories: {
    title: string;
    items: {
      name: string;
      url?: string;
      logo?: {
        asset: {
          url: string;
        };
      };
    }[];
  }[];
}

export const getEcosystemMap = async (): Promise<EcosystemMap> => {
  const query = `*[_type == "ecosystemMap"][0]{
    _id,
    title,
    description,
    categories[]{
      title,
      items[]{
        name,
        url,
        "logo": logo.asset->url
      }
    }
  }`;
  
  const result = await client.fetch(query);
  return result;
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