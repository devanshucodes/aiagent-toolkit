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

export const inferenceTools: Tool[] = [
  {
    id: 'inference1',
    name: 'DataProcessor',
    logo: 'https://images.pexels.com/photos/2582937/pexels-photo-2582937.jpeg?auto=compress&cs=tinysrgb&w=50&h=50&dpr=1',
    category: ['Data Processing', 'RAG'],
    description: 'Advanced data processing tool with built-in RAG capabilities. Features extensive multi-agent processing and real-time data handling.',
    type: 'Free',
    rating: 4.5,
    url: '#'
  },
  {
    id: 'inference2',
    name: 'MemoryCore',
    logo: 'https://images.pexels.com/photos/2007647/pexels-photo-2007647.jpeg?auto=compress&cs=tinysrgb&w=50&h=50&dpr=1',
    category: ['Memory', 'Compute'],
    description: 'High-performance memory management system for AI agents. Optimized for large-scale operations with efficient compute utilization.',
    type: 'Freemium',
    rating: 4.0,
    url: '#'
  },
  {
    id: 'inference3',
    name: 'VectorDB',
    logo: 'https://images.pexels.com/photos/1629236/pexels-photo-1629236.jpeg?auto=compress&cs=tinysrgb&w=50&h=50&dpr=1',
    category: ['Vector Database', 'Embeddings'],
    description: 'Scalable vector database optimized for AI embeddings and semantic search. Features high-performance indexing and real-time querying.',
    type: 'Free',
    rating: 4.2,
    url: '#'
  }
];

export const observabilityTools: Tool[] = [
  {
    id: 'observe1',
    name: 'WebScrapeAI',
    logo: 'https://images.pexels.com/photos/1629236/pexels-photo-1629236.jpeg?auto=compress&cs=tinysrgb&w=50&h=50&dpr=1',
    category: ['Web Scraping', 'Hosting'],
    description: 'Intelligent web scraping platform with built-in AI capabilities. Features automated data extraction and cloud hosting.',
    type: 'Free',
    rating: 4.2,
    url: '#'
  },
  {
    id: 'observe2',
    name: 'SandboxPro',
    logo: 'https://images.pexels.com/photos/2559941/pexels-photo-2559941.jpeg?auto=compress&cs=tinysrgb&w=50&h=50&dpr=1',
    category: ['Sandboxing', 'Security'],
    description: 'Secure sandboxing environment for AI agent testing. Includes advanced security features and monitoring tools.',
    type: 'Paid',
    rating: 4.8,
    url: '#'
  },
  {
    id: 'observe3',
    name: 'MetricsAI',
    logo: 'https://images.pexels.com/photos/2582937/pexels-photo-2582937.jpeg?auto=compress&cs=tinysrgb&w=50&h=50&dpr=1',
    category: ['Monitoring', 'Analytics'],
    description: 'Comprehensive AI agent monitoring and analytics platform. Real-time metrics, performance tracking, and intelligent alerting system.',
    type: 'Freemium',
    rating: 4.3,
    url: '#'
  }
];

export const automationTools: Tool[] = [
  {
    id: 'auto1',
    name: 'BrowserBot',
    logo: 'https://images.pexels.com/photos/1181467/pexels-photo-1181467.jpeg?auto=compress&cs=tinysrgb&w=50&h=50&dpr=1',
    category: ['Browser Automation', 'Workflow'],
    description: 'Advanced browser automation toolkit with AI-powered workflow optimization. Seamless integration with popular browsers.',
    type: 'Free',
    rating: 4.3,
    url: '#'
  },
  {
    id: 'auto2',
    name: 'AuthFlow',
    logo: 'https://images.pexels.com/photos/2582937/pexels-photo-2582937.jpeg?auto=compress&cs=tinysrgb&w=50&h=50&dpr=1',
    category: ['Authentication', 'Payment'],
    description: 'Complete authentication and payment processing solution for AI agents. Secure, scalable, and easy to integrate.',
    type: 'Freemium',
    rating: 4.6,
    url: '#'
  },
  {
    id: 'auto3',
    name: 'TaskMaster',
    logo: 'https://images.pexels.com/photos/2007647/pexels-photo-2007647.jpeg?auto=compress&cs=tinysrgb&w=50&h=50&dpr=1',
    category: ['Task Automation', 'Workflow'],
    description: 'Intelligent task automation platform for AI agents. Features advanced scheduling, error handling, and workflow management.',
    type: 'Free',
    rating: 4.4,
    url: '#'
  }
];