import { Tool } from '../types';
import { Zap, Grid, Layers } from 'lucide-react';

// This function converts Lucide icons to strings for storage
const iconToString = (Icon: typeof Zap) => {
  return Icon.toString();
};

export const aiTools: Tool[] = [
  {
    id: '1',
    name: 'ElizaOS',
    logo: 'https://images.pexels.com/photos/2007647/pexels-photo-2007647.jpeg?auto=compress&cs=tinysrgb&w=50&h=50&dpr=1',
    category: ['Business Intelligence', 'Map'],
    description: 'A TypeScript-based framework by AI1E2 with ~60% market share. Features extensive multi-agent simulation capabilities, cross-platform social engagement, and a thriving community of 6,000+ GitHub stars.',
    type: 'Free',
    rating: 3.5,
    url: '#'
  },
  {
    id: '2',
    name: 'Lovable',
    logo: 'https://images.pexels.com/photos/1629236/pexels-photo-1629236.jpeg?auto=compress&cs=tinysrgb&w=50&h=50&dpr=1',
    category: ['Web3 AI Agent SDKs', 'Top LLMs'],
    description: 'A TypeScript-based framework by AI1E2 with ~60% market share. Features extensive multi-agent simulation capabilities, cross-platform social engagement, and a thriving community of 6,000+ GitHub stars.',
    type: 'Free',
    rating: 3.0,
    url: '#'
  },
  {
    id: '3',
    name: 'Base44',
    logo: 'https://images.pexels.com/photos/2559941/pexels-photo-2559941.jpeg?auto=compress&cs=tinysrgb&w=50&h=50&dpr=1',
    category: ['Business Intelligence', 'Map'],
    description: 'A TypeScript-based framework by AI1E2 with ~60% market share. Features extensive multi-agent simulation capabilities, cross-platform social engagement, and a thriving community of 6,000+ GitHub stars.',
    type: 'Free',
    rating: 4.0,
    url: '#'
  }
];

export const aiApps: Tool[] = [
  {
    id: '4',
    name: 'Webdraw',
    logo: 'https://images.pexels.com/photos/1181467/pexels-photo-1181467.jpeg?auto=compress&cs=tinysrgb&w=50&h=50&dpr=1',
    category: ['Business Intelligence', 'Map'],
    description: 'A TypeScript-based framework by AI1E2 with ~60% market share. Features extensive multi-agent simulation capabilities, cross-platform social engagement, and a thriving community of 6,000+ GitHub stars.',
    type: 'Free',
    rating: 3.5,
    url: '#'
  },
  {
    id: '5',
    name: 'Databutton',
    logo: 'https://images.pexels.com/photos/2582937/pexels-photo-2582937.jpeg?auto=compress&cs=tinysrgb&w=50&h=50&dpr=1',
    category: ['Business Intelligence', 'Map'],
    description: 'A TypeScript-based framework by AI1E2 with ~60% market share. Features extensive multi-agent simulation capabilities, cross-platform social engagement, and a thriving community of 6,000+ GitHub stars.',
    type: 'Free',
    rating: 3.0,
    url: '#'
  },
  {
    id: '6',
    name: 'Bubble',
    logo: 'https://images.pexels.com/photos/4386442/pexels-photo-4386442.jpeg?auto=compress&cs=tinysrgb&w=50&h=50&dpr=1',
    category: ['Business Intelligence', 'Map'],
    description: 'A TypeScript-based framework by AI1E2 with ~60% market share. Features extensive multi-agent simulation capabilities, cross-platform social engagement, and a thriving community of 6,000+ GitHub stars.',
    type: 'Free',
    rating: 4.0,
    url: '#'
  }
];