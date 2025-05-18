import { FilterGroup } from '../types';

export const toolsFilters: FilterGroup[] = [
  {
    category: 'Subscription',
    options: [
      { id: 'free-to-use', label: 'Free to use', active: false },
      { id: 'paid', label: 'Paid', active: false },
      { id: 'freemium', label: 'Freemium', active: false }
    ]
  },
  {
    category: 'Categories',
    options: [
      { id: 'data-processing', label: 'Data Processing', active: false },
      { id: 'rag', label: 'RAG', active: false },
      { id: 'memory', label: 'Memory', active: false },
      { id: 'compute', label: 'Compute', active: false },
      { id: 'vector-database', label: 'Vector Database', active: false },
      { id: 'embeddings', label: 'Embeddings', active: false },
      { id: 'web-scraping', label: 'Web Scraping', active: false },
      { id: 'hosting', label: 'Hosting', active: false },
      { id: 'sandboxing', label: 'Sandboxing', active: false },
      { id: 'security', label: 'Security', active: false },
      { id: 'monitoring', label: 'Monitoring', active: false },
      { id: 'analytics', label: 'Analytics', active: false },
      { id: 'browser-automation', label: 'Browser Automation', active: false },
      { id: 'workflow', label: 'Workflow', active: false },
      { id: 'authentication', label: 'Authentication', active: false },
      { id: 'payment', label: 'Payment', active: false },
      { id: 'task-automation', label: 'Task Automation', active: false }
    ]
  }
];

export const communityFilters: FilterGroup[] = [
  {
    category: 'Platform',
    options: [
      { id: 'discord', label: 'Discord', active: false },
      { id: 'reddit', label: 'Reddit', active: false },
      { id: 'telegram', label: 'Telegram', active: false }
    ]
  },
  {
    category: 'Focus',
    options: [
      { id: 'ai-agents', label: 'AI Agents', active: false },
      { id: 'llms', label: 'LLMs', active: false },
      { id: 'tools', label: 'Tools', active: false }
    ]
  }
];

export const courseFilters: FilterGroup[] = [
  {
    category: 'Most Popular Categories',
    options: [
      { id: 'customer-service', label: 'Customer Service & Support', active: false },
      { id: 'sales', label: 'Sales', active: false },
      { id: 'back-office', label: 'Back Office', active: false },
      { id: 'operations', label: 'Operations', active: false },
      { id: 'growth-marketing', label: 'Growth Marketing', active: false },
      { id: 'writing-editing', label: 'Writing & Editing', active: false },
      { id: 'technology-it', label: 'Technology & IT', active: false },
      { id: 'design-creative', label: 'Design & Creative', active: false },
      { id: 'web3-ai-sdks', label: 'Web3 AI Agent SDKs', active: false }
    ]
  }
];

export const filterGroups: FilterGroup[] = [
  {
    category: 'Genre',
    options: [
      { id: 'web3', label: 'Web3', active: false },
      { id: 'onchain', label: 'Onchain', active: false }
    ]
  },
  {
    category: 'Subscription',
    options: [
      { id: 'free-to-use', label: 'Free to Use', active: false },
      { id: 'paid', label: 'Paid', active: false },
      { id: 'freemium', label: 'Freemium', active: false }
    ]
  },
  {
    category: 'Categories',
    options: [
      { id: 'tools', label: 'Tools', active: false },
      { id: 'top-agent-apps', label: 'Top Agent Apps', active: false },
      { id: 'top-llms', label: 'Top LLMs', active: false },
      { id: 'web3-ai-agent-sdks', label: 'Web3 AI Agent SDKs', active: false },
      { id: 'agent-framework', label: 'Agent Framework', active: false },
      { id: 'agent-infrastructure', label: 'Agent Infrastructure', active: false },
      { id: 'agent-launchpads', label: 'Agent Launchpads', active: false }
    ]
  }
];

export const navItems = [
  { id: '', label: 'Tools & Libraries' },
  { id: 'agents', label: 'AI Agents' },
  { id: 'communities', label: 'Communities' },
  { id: 'map', label: 'Map' },
  { id: 'courses-tutorials', label: 'Courses & Tutorials' },
  { id: 'glossary', label: 'Glossary' }
];