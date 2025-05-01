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