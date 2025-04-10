import { Category } from '../types';

export const categories: Category[] = [
  // Main Categories as Titles
  {
    id: "frameworks",
    name: "Frameworks",
    description: "AI agent development frameworks and libraries",
    icon: "Boxes",
    color: "text-blue-500",
    count: 0,
    isMainCategory: true
  },
  {
    id: "web3-launchpads",
    name: "Web3 Agent Launchpads",
    description: "Platforms for launching Web3 agents",
    icon: "Rocket",
    color: "text-purple-500",
    count: 0,
    isMainCategory: true
  },
  {
    id: "web3-agents",
    name: "Web3 Agents",
    description: "Autonomous agents for Web3 applications",
    icon: "Bot",
    color: "text-indigo-500",
    count: 0,
    isMainCategory: true
  },
  {
    id: "web3-infrastructure",
    name: "Web3 AI Infrastructure",
    description: "Infrastructure tools for Web3 AI",
    icon: "Server",
    color: "text-pink-500",
    count: 0,
    isMainCategory: true
  },
  {
    id: "tutorials",
    name: "Tutorials",
    description: "Learning resources and guides",
    icon: "BookOpen",
    color: "text-yellow-500",
    count: 0,
    isMainCategory: true
  },
  {
    id: "podcasts",
    name: "Podcasts",
    description: "AI and Web3 podcasts",
    icon: "Headphones",
    color: "text-red-500",
    count: 0,
    isMainCategory: true
  },
  {
    id: "blogs",
    name: "Blogs",
    description: "AI and Web3 blog posts and articles",
    icon: "Newspaper",
    color: "text-red-500",
    count: 0,
    isMainCategory: true
  },
  {
    id: "hackathons",
    name: "Hackathons",
    description: "AI and Web3 hackathons",
    icon: "Trophy",
    color: "text-teal-500",
    count: 0,
    isMainCategory: true
  },
  {
    id: "llms",
    name: "LLMs",
    description: "Large Language Models",
    icon: "Brain",
    color: "text-violet-500",
    count: 0,
    isMainCategory: true
  },
  {
    id: "no-code-tools",
    name: "No-Code Tools",
    description: "No-code development tools and platforms",
    icon: "Layers",
    color: "text-emerald-500",
    count: 0,
    isMainCategory: true
  },
  {
    id: "low-code-tools",
    name: "Low-Code Tools",
    description: "Low-code development platforms and tools",
    icon: "Code2",
    color: "text-amber-500",
    count: 0,
    isMainCategory: true
  },

  // Subcategories under AI Agent Development
  {
    id: "rag-frameworks",
    name: "RAG Frameworks",
    description: "Retrieval Augmented Generation frameworks and tools",
    icon: "Search",
    color: "text-blue-400",
    count: 0,
    isMainCategory: false,
    parentCategory: "ai-agent-dev"
  },
  {
    id: "data-processing",
    name: "Data Processing",
    description: "Data Tools Libraries for AI Agents",
    icon: "Database",
    color: "text-indigo-400",
    count: 0,
    isMainCategory: false,
    parentCategory: "ai-agent-dev"
  },
  {
    id: "compute",
    name: "Compute Resources",
    description: "Tools for running and managing AI workloads",
    icon: "⚡️",
    color: "text-purple-400",
    count: 0,
    isMainCategory: false,
    parentCategory: "ai-agent-dev"
  },
  {
    id: "memory",
    name: "Memory Systems",
    description: "Tools for storing and retrieving AI context and data",
    icon: "🧠",
    color: "text-pink-400",
    count: 0,
    isMainCategory: false,
    parentCategory: "ai-agent-dev"
  },
  {
    id: "web-scraping",
    name: "Web Scraping",
    description: "Tools for extracting and processing web data",
    icon: "🕸️",
    color: "text-red-400",
    count: 0,
    isMainCategory: false,
    parentCategory: "ai-agent-dev"
  },
  {
    id: "hosting",
    name: "Hosting & Serving",
    description: "Tools for deploying and serving AI applications",
    icon: "🚀",
    color: "text-yellow-400",
    count: 0,
    isMainCategory: false,
    parentCategory: "ai-agent-dev"
  },

  {
    id: "browser-automation",
    name: "Browser Automation",
    description: "Browser automation tools",
    icon: "Monitor",
    color: "text-teal-400",
    count: 0,
    isMainCategory: false,
    parentCategory: "ai-agent-dev"
  },
  {
    id: "local-inference",
    name: "Local Inference",
    description: "Local model inference tools",
    icon: "Laptop",
    color: "text-cyan-400",
    count: 0,
    isMainCategory: false,
    parentCategory: "ai-agent-dev"
  },
  {
    id: "prompt-engineering",
    name: "Prompt Engineering",
    description: "Prompt design and optimization",
    icon: "MessageSquare",
    color: "text-lime-400",
    count: 0,
    isMainCategory: false,
    parentCategory: "ai-agent-dev"
  },
  {
    id: "function-calling",
    name: "Function Calling",
    description: "Function calling and execution",
    icon: "Function",
    color: "text-violet-400",
    count: 0,
    isMainCategory: false,
    parentCategory: "ai-agent-dev"
  },
  {
    id: "authentication",
    name: "Authentication",
    description: "Authentication and authorization",
    icon: "Key",
    color: "text-emerald-400",
    count: 0,
    isMainCategory: false,
    parentCategory: "ai-agent-dev"
  },
  {
    id: "etl",
    name: "ETL",
    description: "Extract, Transform, Load tools",
    icon: "ArrowRightLeft",
    color: "text-blue-300",
    count: 0,
    isMainCategory: false,
    parentCategory: "ai-agent-dev"
  },
  {
    id: "payment",
    name: "Payment Systems",
    description: "Payment processing solutions",
    icon: "CreditCard",
    color: "text-indigo-300",
    count: 0,
    isMainCategory: false,
    parentCategory: "ai-agent-dev"
  },

  {
    id: "blockchain-tools",
    name: "Blockchain Tools",
    description: "Blockchain development tools",
    icon: "Link",
    color: "text-pink-300",
    count: 0,
    isMainCategory: false,
    parentCategory: "ai-agent-dev"
  },
  {
    id: "training-deployment",
    name: "Training & Deployment",
    description: "Model training and deployment",
    icon: "Upload",
    color: "text-red-300",
    count: 0,
    isMainCategory: false,
    parentCategory: "ai-agent-dev"
  },
  {
    id: "reasoning-planning",
    name: "Reasoning & Planning",
    description: "AI reasoning and planning tools",
    icon: "GitBranch",
    color: "text-orange-300",
    count: 0,
    isMainCategory: false,
    parentCategory: "ai-agent-dev"
  },
  {
    id: "chat-ui",
    name: "Chat UI Development",
    description: "Chat interface development tools",
    icon: "MessageCircle",
    color: "text-yellow-300",
    count: 0,
    isMainCategory: false,
    parentCategory: "ai-agent-dev"
  },

  // AI Development Tools & Assistants Section
  {
    id: "ai-dev-tools",
    name: "AI Development Tools & Assistants",
    description: "Tools and assistants for AI development",
    icon: "Code",
    color: "text-amber-600",
    count: 0,
    isMainCategory: true
  },
  // Subcategories under AI Development Tools
  {
    id: "coding-assistants",
    name: "Coding Assistants",
    description: "AI-powered coding assistants",
    icon: "Code",
    color: "text-green-300",
    count: 0,
    isMainCategory: false,
    parentCategory: "ai-dev-tools"
  },
  {
    id: "shell-assistants",
    name: "Shell Assistants",
    description: "Command line assistants",
    icon: "Terminal",
    color: "text-teal-300",
    count: 0,
    isMainCategory: false,
    parentCategory: "ai-dev-tools"
  },
  {
    id: "ui-generators",
    name: "UI Generators",
    description: "AI UI generation tools",
    icon: "Layout",
    color: "text-cyan-300",
    count: 0,
    isMainCategory: false,
    parentCategory: "ai-dev-tools"
  },
  {
    id: "doc-generators",
    name: "Documentation Generators",
    description: "AI documentation tools",
    icon: "FileText",
    color: "text-lime-300",
    count: 0,
    isMainCategory: false,
    parentCategory: "ai-dev-tools"
  },
  {
    id: "web-app-dev",
    name: "Web & App Development",
    description: "Web and app development tools",
    icon: "Globe",
    color: "text-violet-300",
    count: 0,
    isMainCategory: false,
    parentCategory: "ai-dev-tools"
  },
  {
    id: "vector-db",
    name: "Vector Databases",
    description: "Databases optimized for vector similarity search",
    icon: "🗄️",
    color: "text-blue-400",
    count: 0,
    isMainCategory: false,
    parentCategory: "ai-agent-dev"
  },
  {
    id: "rag",
    name: "RAG Tools",
    description: "Tools for Retrieval-Augmented Generation",
    icon: "🔍",
    color: "text-green-400",
    count: 0,
    isMainCategory: false,
    parentCategory: "ai-agent-dev"
  },
  {
    id: "agent-frameworks",
    name: "Agent Frameworks",
    description: "Frameworks for building AI agents",
    icon: "🤖",
    color: "text-indigo-400",
    count: 0,
    isMainCategory: false,
    parentCategory: "ai-agent-dev"
  },
  {
    id: "prompting",
    name: "Prompt Engineering",
    description: "Tools for crafting and optimizing prompts",
    icon: "✍️",
    color: "text-orange-400",
    count: 0,
    isMainCategory: false,
    parentCategory: "ai-agent-dev"
  },
  {
    id: "fine-tuning",
    name: "Fine-Tuning",
    description: "Tools for customizing AI models",
    icon: "🎯",
    color: "text-teal-400",
    count: 0,
    isMainCategory: false,
    parentCategory: "ai-agent-dev"
  },
  {
    id: "evaluation",
    name: "Evaluation",
    description: "Tools for testing and benchmarking AI systems",
    icon: "📊",
    color: "text-cyan-400",
    count: 0,
    isMainCategory: false,
    parentCategory: "ai-agent-dev"
  },
  {
    id: "audio",
    name: "Audio Processing",
    description: "Tools for working with audio data",
    icon: "🎵",
    color: "text-purple-400",
    count: 0,
    isMainCategory: false,
    parentCategory: "ai-agent-dev"
  },
  {
    id: "image",
    name: "Image Processing",
    description: "Tools for working with image data",
    icon: "🖼️",
    color: "text-pink-400",
    count: 0,
    isMainCategory: false,
    parentCategory: "ai-agent-dev"
  },
  {
    id: "video",
    name: "Video Processing",
    description: "Tools for working with video data",
    icon: "🎥",
    color: "text-red-400",
    count: 0,
    isMainCategory: false,
    parentCategory: "ai-agent-dev"
  },
  {
    id: "multimodal",
    name: "Multimodal AI",
    description: "Tools for working with multiple data types",
    icon: "🎭",
    color: "text-yellow-400",
    count: 0,
    isMainCategory: false,
    parentCategory: "ai-agent-dev"
  },
  {
    id: "automation",
    name: "Automation",
    description: "Tools for automating AI workflows",
    icon: "⚙️",
    color: "text-blue-400",
    count: 0,
    isMainCategory: false,
    parentCategory: "ai-agent-dev"
  },
  {
    id: "computer-vision",
    name: "Computer Vision",
    description: "Tools for visual AI applications",
    icon: "👁️",
    color: "text-green-400",
    count: 0,
    isMainCategory: false,
    parentCategory: "ai-agent-dev"
  },
  {
    id: "podcast",
    name: "Podcasts",
    description: "Audio content about AI and technology",
    icon: "🎙️",
    color: "text-indigo-400",
    count: 0,
    isMainCategory: false,
    parentCategory: "ai-agent-dev"
  },
  {
    id: "reading",
    name: "Reading",
    description: "Written content about AI and technology",
    icon: "📚",
    color: "text-orange-400",
    count: 0,
    isMainCategory: false,
    parentCategory: "ai-agent-dev"
  }
];
