import { Tool } from '../types';

export interface ResearchItem {
  id: string;
  title: string;
  description: string;
  url: string;
  category: 'podcast' | 'reading';
  date?: string;
  author?: string;
}

// Sample data - you can expand this with real tools
export const tools: Tool[] = [
  // Frameworks
  {
    id: "elizaos",
    name: "ElizaOS",
    description: "A TypeScript-based framework by AI16z with ~60% market share. Features extensive multi-agent simulation capabilities, cross-platform social engagement, and a thriving community of 6,000+ GitHub stars. Leading framework for creating AI agents that handle trading, social interactions, and community management.",
    url: "https://github.com/ai16z/elizaos",
    tags: ["framework", "typescript", "multi-agent", "social", "trading"],
    category: "frameworks",
    featured: true
  },
  {
    id: "langchain",
    name: "LangChain",
    description: "A framework for developing applications powered by language models, featuring components for working with LLMs, prompt management, memory systems, and agent tools. Supports both Python and JavaScript.",
    url: "https://github.com/langchain-ai/langchain",
    tags: ["framework", "llm", "python", "typescript", "vector-stores", "memory"],
    category: "frameworks",
    featured: true
  },
  {
    id: "autogen",
    name: "AutoGen",
    description: "A framework for developing multi-agent conversations that enables autonomous and chat-based agents. Features automated task solving, human-AI collaboration, and customizable agent roles with conversational memory.",
    url: "https://github.com/microsoft/autogen",
    tags: ["framework", "multi-agent", "python", "conversational-memory", "task-automation"],
    category: "frameworks",
    featured: false
  },
  {
    id: "zerepy",
    name: "Zerepy",
    description: "A Python-based framework (~5% market share) by Zerebro team for deploying creative AI agents on X. Built from a modularized version of the Zerebro backend, focusing on artistic outputs and social media automation.",
    url: "https://github.com/zerebro/zerepy",
    tags: ["framework", "python", "social-media", "creative", "nft"],
    category: "frameworks",
    featured: false
  },
  {
    id: "rig",
    name: "Rig",
    description: "A Rust-based framework (~15% market share) for building portable, modular, and high-performance Fullstack AI Agents. Specializes in enterprise-grade applications with emphasis on retrieval-augmented generation, particularly within the Solana ecosystem.",
    url: "https://github.com/rig-ai/rig",
    tags: ["framework", "rust", "enterprise", "rag", "solana"],
    category: "frameworks",
    featured: false
  },
  {
    id: "rei",
    name: "REI",
    description: "A framework with innovative Oracle and ERCData systems for enhanced external data integration and hierarchical data storage. Features multi-layered cognitive architecture focusing on pattern recognition and context awareness.",
    url: "https://github.com/rei-framework/rei",
    tags: ["framework", "oracle", "ercdata", "pattern-recognition", "ethereum"],
    category: "frameworks",
    featured: false
  },
  {
    id: "heurist",
    name: "Heurist",
    description: "A Python-based lightweight framework offering decentralized AI infrastructure with compute through miners, file storage, open-source LLM APIs, and native crypto wallet integration. Focuses on cost-effectiveness and decentralization.",
    url: "https://github.com/heurist-ai/heurist",
    tags: ["framework", "python", "decentralized", "lightweight", "chatbots"],
    category: "frameworks",
    featured: false
  },
  {
    id: "game",
    name: "GAME",
    description: "The Generative Autonomous Multimodal Entities framework by Virtuals (~20% market share) designed for gaming agents. Features 200+ projects, 150K daily requests, and rapid weekly growth. Includes built-in ERC6551 wallets, knowledge graphs, memory embeddings, and reinforcement learning.",
    url: "https://github.com/virtuals/game",
    tags: ["framework", "gaming", "social-media", "multimodal", "solana"],
    category: "frameworks",
    featured: false
  },
  {
    id: "nexus",
    name: "Nexus",
    description: "Fully onchain autonomous AI agents built on Sui Move. Nexus enables developers to create Talus Agents - AI-powered digital assistants that live and operate directly on Talus Network with censorship resistance, transparency, and composability.",
    url: "https://github.com/nexus-ai/nexus",
    tags: ["framework", "onchain", "sui", "autonomous", "transparent"],
    category: "frameworks",
    featured: false
  },
  {
    id: "x-box",
    name: "X-box",
    description: "A dedicated fine-tuning framework for creating Xenobots - dynamic data agents that evolve through continuous data gathering and integration. The framework provides a robust pipeline for processing, refining, and integrating datasets to create unique conversational agents.",
    url: "https://github.com/x-box/x-box",
    tags: ["framework", "fine-tuning", "data-agents", "evolution", "conversational"],
    category: "frameworks",
    featured: false
  },
  {
    id: "ag2",
    name: "AG2",
    description: "An open-source AgentOS framework for building production-ready multi-agent systems. Enables seamless orchestration of multiple AI agents that can collaborate autonomously or with human oversight.",
    url: "https://github.com/ag2/ag2",
    tags: ["framework", "multi-agent", "production", "orchestration", "enterprise"],
    category: "frameworks",
    featured: false
  },
  {
    id: "crewai",
    name: "CrewAI",
    description: "A framework for orchestrating role-playing autonomous AI agents. Enables collaborative task completion through agents working together, with built-in task planning, delegation, and execution capabilities.",
    url: "https://github.com/crewai/crewai",
    tags: ["framework", "role-playing", "collaboration", "task-planning", "autonomous"],
    category: "frameworks",
    featured: false
  },
  {
    id: "dspy",
    name: "DSPy",
    description: "A framework for solving AI tasks with language models through programmatic prompt optimization. Features automatic prompt improvement, structured prediction, and compiler-like optimization of LLM programs.",
    url: "https://github.com/stanfordnlp/dspy",
    tags: ["framework", "prompt-optimization", "llm", "structured-prediction", "automated-reasoning"],
    category: "frameworks",
    featured: false
  },
  {
    id: "phidata",
    name: "Phidata",
    description: "A toolkit for building AI-powered applications and autonomous AI agents using Python. Features include LLM workflows, vector stores, and streamlined deployment to AWS/local environments.",
    url: "https://github.com/phidatahq/phidata",
    tags: ["framework", "python", "ai-applications", "autonomous-agents", "deployment"],
    category: "frameworks",
    featured: false
  },
  {
    id: "open-autonomy",
    name: "Open Autonomy",
    description: "A framework for developing autonomous economic agents that can participate in decentralized markets and perform complex economic operations.",
    url: "https://github.com/valory-ai/open-autonomy",
    tags: ["framework", "autonomous", "economic", "decentralized", "ethereum"],
    category: "frameworks",
    featured: false
  },
  {
    id: "bittensor",
    name: "Bittensor",
    description: "A decentralized machine learning network that allows for the creation and deployment of AI models in a peer-to-peer network.",
    url: "https://github.com/opentensor/bittensor",
    tags: ["framework", "decentralized", "ml", "peer-to-peer", "incentivized"],
    category: "frameworks",
    featured: false
  },
  {
    id: "ailice",
    name: "AIlice",
    description: "An AI agent framework focused on natural conversation and task automation with advanced memory management.",
    url: "https://github.com/ailice-ai/ailice",
    tags: ["framework", "conversation", "task-automation", "memory-management", "natural-dialogue"],
    category: "frameworks",
    featured: false
  },
  {
    id: "shellagent",
    name: "ShellAgent",
    description: "A framework for building AI agents that can interact with shell commands and system operations.",
    url: "https://github.com/shellagent/shellagent",
    tags: ["framework", "shell", "system-operations", "command-interaction", "automation"],
    category: "frameworks",
    featured: false
  },
  {
    id: "langgraph",
    name: "LangGraph",
    description: "A library for building stateful, multi-agent applications with LangChain.",
    url: "https://github.com/langchain-ai/langgraph",
    tags: ["framework", "stateful", "multi-agent", "langchain", "graph-based"],
    category: "frameworks",
    featured: false
  },
  {
    id: "jido",
    name: "Jido",
    description: "A foundational framework for building autonomous, distributed agent systems in Elixir.",
    url: "https://github.com/jido/jido",
    tags: ["framework", "elixir", "autonomous", "distributed", "agent-systems"],
    category: "frameworks",
    featured: false
  },
  {
    id: "intentkit",
    name: "IntentKit",
    description: "An autonomous agent framework that enables the creation and management of AI agents with various capabilities including blockchain interactions, social media management, and custom skill integration.",
    url: "https://github.com/intentkit/intentkit",
    tags: ["framework", "autonomous", "blockchain", "social-media", "plugin-system"],
    category: "frameworks",
    featured: false
  },
  {
    id: "aether",
    name: "Aether Framework",
    description: "A modular, decentralized AI framework designed to empower autonomous agents with advanced capabilities such as reinforcement learning, swarm intelligence, multi-modal processing, blockchain interaction, and democratic decision-making.",
    url: "https://github.com/aether/aether",
    tags: ["framework", "decentralized", "swarm-intelligence", "reinforcement-learning", "solana"],
    category: "frameworks",
    featured: false
  },
  {
    id: "agent-llm",
    name: "Agent-LLM",
    description: "A framework for building autonomous agents powered by large language models, featuring advanced reasoning capabilities and task automation.",
    url: "https://github.com/agent-llm/agent-llm",
    tags: ["framework", "llm", "autonomous", "reasoning", "task-automation"],
    category: "frameworks",
    featured: false
  },
  {
    id: "agentflow",
    name: "AgentFlow",
    description: "A framework for building and orchestrating AI agent workflows with a focus on modularity and extensibility.",
    url: "https://github.com/agentflow/agentflow",
    tags: ["framework", "workflow", "orchestration", "modular", "extensible"],
    category: "frameworks",
    featured: false
  },
  {
    id: "agentscope",
    name: "AgentScope",
    description: "A framework for developing context-aware AI agents with advanced memory and reasoning capabilities.",
    url: "https://github.com/agentscope/agentscope",
    tags: ["framework", "context-aware", "memory", "reasoning", "autonomous"],
    category: "frameworks",
    featured: false
  },
  {
    id: "agency-swarm",
    name: "agency-swarm",
    description: "A framework for building and managing swarms of AI agents with collective intelligence capabilities.",
    url: "https://github.com/agency-swarm/agency-swarm",
    tags: ["framework", "swarm", "collective-intelligence", "multi-agent", "autonomous"],
    category: "frameworks",
    featured: false
  },
  {
    id: "botpress",
    name: "Botpress",
    description: "An open-source conversational AI platform for building chatbots and AI assistants with visual flow editing and natural language understanding.",
    url: "https://github.com/botpress/botpress",
    tags: ["framework", "chatbot", "conversational-ai", "nlp", "visual-editor"],
    category: "frameworks",
    featured: false
  },
  {
    id: "dust",
    name: "Dust",
    description: "A framework for building and deploying AI agents with a focus on data processing and analysis capabilities.",
    url: "https://github.com/dust-ai/dust",
    tags: ["framework", "data-processing", "analysis", "deployment", "automation"],
    category: "frameworks",
    featured: false
  },
  {
    id: "haystack",
    name: "Haystack",
    description: "A framework for building search systems that work intelligently over large document collections, with support for various retrieval methods and LLM integration.",
    url: "https://github.com/deepset-ai/haystack",
    tags: ["framework", "search", "retrieval", "llm", "document-processing"],
    category: "frameworks",
    featured: false
  },
  {
    id: "lagent",
    name: "Lagent",
    description: "A lightweight framework for building AI agents with a focus on efficiency and ease of use.",
    url: "https://github.com/lagent-ai/lagent",
    tags: ["framework", "lightweight", "efficient", "easy-to-use", "autonomous"],
    category: "frameworks",
    featured: false
  },
  {
    id: "llama-agentic-system",
    name: "llama-agentic-system",
    description: "A framework for building autonomous agents based on the Llama architecture, featuring advanced reasoning and task execution capabilities.",
    url: "https://github.com/llama-agentic-system/llama-agentic-system",
    tags: ["framework", "llama", "autonomous", "reasoning", "task-execution"],
    category: "frameworks",
    featured: false
  },
  {
    id: "llamaindex",
    name: "LlamaIndex",
    description: "A framework for building LLM applications over custom data sources, with support for various data formats and retrieval methods.",
    url: "https://github.com/run-llama/llama_index",
    tags: ["framework", "llm", "data-integration", "retrieval", "custom-data"],
    category: "frameworks",
    featured: false
  },
  {
    id: "maestro",
    name: "Maestro",
    description: "A framework for orchestrating complex AI agent workflows with a focus on reliability and scalability.",
    url: "https://github.com/maestro-ai/maestro",
    tags: ["framework", "orchestration", "workflow", "reliable", "scalable"],
    category: "frameworks",
    featured: false
  },
  {
    id: "metagpt",
    name: "MetaGPT",
    description: "A framework for building multi-agent systems with role-based collaboration and task decomposition capabilities.",
    url: "https://github.com/geekan/MetaGPT",
    tags: ["framework", "multi-agent", "role-based", "collaboration", "task-decomposition"],
    category: "frameworks",
    featured: false
  },
  {
    id: "semantic-kernel",
    name: "Semantic Kernel",
    description: "A framework for building AI applications with a focus on semantic understanding and natural language processing.",
    url: "https://github.com/microsoft/semantic-kernel",
    tags: ["framework", "semantic", "nlp", "ai-applications", "microsoft"],
    category: "frameworks",
    featured: false
  },
  {
    id: "swarm",
    name: "Swarm",
    description: "A framework for building and managing swarms of AI agents with collective intelligence and emergent behavior capabilities.",
    url: "https://github.com/swarm-ai/swarm",
    tags: ["framework", "swarm", "collective-intelligence", "emergent-behavior", "multi-agent"],
    category: "frameworks",
    featured: false
  },
  {
    id: "transformers-agents",
    name: "Transformers Agents",
    description: "A framework for building AI agents using the Transformers architecture, with support for various tasks and modalities.",
    url: "https://github.com/huggingface/transformers",
    tags: ["framework", "transformers", "multi-modal", "task-specific", "huggingface"],
    category: "frameworks",
    featured: false
  },
  {
    id: "olas",
    name: "Olas",
    description: "A framework for building autonomous agents with a focus on blockchain integration and decentralized operations.",
    url: "https://github.com/olas-ai/olas",
    tags: ["framework", "blockchain", "decentralized", "autonomous", "web3"],
    category: "frameworks",
    featured: false
  },
  {
    id: "hyperai",
    name: "HyperAi",
    description: "A framework for building hyper-intelligent AI agents with advanced learning and adaptation capabilities.",
    url: "https://github.com/hyperai/hyperai",
    tags: ["framework", "hyper-intelligent", "learning", "adaptation", "autonomous"],
    category: "frameworks",
    featured: false
  },
  {
    id: "airbus",
    name: "Airbus",
    description: "A framework for building AI agents specialized in aerospace and aviation applications.",
    url: "https://github.com/airbus-ai/airbus",
    tags: ["framework", "aerospace", "aviation", "specialized", "industry-specific"],
    category: "frameworks",
    featured: false
  },
  {
    id: "caimeo",
    name: "Caimeo",
    description: "A framework for building AI agents with advanced computer vision and image processing capabilities.",
    url: "https://github.com/caimeo-ai/caimeo",
    tags: ["framework", "computer-vision", "image-processing", "ai-agents", "visual-recognition"],
    category: "frameworks",
    featured: false
  },
  {
    id: "orchestra",
    name: "Orchestra",
    description: "A framework for orchestrating complex AI agent workflows with a focus on reliability and performance.",
    url: "https://github.com/orchestra-ai/orchestra",
    tags: ["framework", "orchestration", "workflow", "reliable", "performance"],
    category: "frameworks",
    featured: false
  },
  {
    id: "gaia",
    name: "Gaia",
    description: "A framework for building autonomous agents with a focus on environmental and sustainability applications.",
    url: "https://github.com/gaia-ai/gaia",
    tags: ["framework", "environmental", "sustainability", "autonomous", "specialized"],
    category: "frameworks",
    featured: false
  },
  {
    id: "freysa",
    name: "Freysa",
    description: "A framework for building AI agents with advanced natural language understanding and generation capabilities.",
    url: "https://github.com/freysa-ai/freysa",
    tags: ["framework", "nlp", "language-understanding", "language-generation", "ai-agents"],
    category: "frameworks",
    featured: false
  },
  {
    id: "automata-network",
    name: "Automata Network",
    description: "A framework for building decentralized AI agent networks with privacy-preserving features.",
    url: "https://github.com/automata-network/automata",
    tags: ["framework", "decentralized", "privacy", "network", "web3"],
    category: "frameworks",
    featured: false
  },
  {
    id: "libertai",
    name: "LibertAI",
    description: "A framework for building autonomous AI agents with a focus on privacy and ethical considerations.",
    url: "https://github.com/libertai/libertai",
    tags: ["framework", "privacy", "ethics", "autonomous", "responsible-ai"],
    category: "frameworks",
    featured: false
  },
  {
    id: "agi-open-network",
    name: "AGI Open Network (AON)",
    description: "A framework for building and connecting AI agents in an open network environment.",
    url: "https://github.com/agi-open-network/aon",
    tags: ["framework", "open-network", "agi", "connectivity", "collaboration"],
    category: "frameworks",
    featured: false
  },
  {
    id: "eidolon",
    name: "Eidolon",
    description: "A framework for building AI agents with advanced reasoning and decision-making capabilities.",
    url: "https://github.com/eidolon-ai/eidolon",
    tags: ["framework", "reasoning", "decision-making", "autonomous", "ai-agents"],
    category: "frameworks",
    featured: false
  },
  {
    id: "vity-toolkit",
    name: "Vity Toolkit",
    description: "A framework for building AI agents with advanced visualization and data analysis capabilities.",
    url: "https://github.com/vity-toolkit/vity",
    tags: ["framework", "visualization", "data-analysis", "ai-agents", "analytics"],
    category: "frameworks",
    featured: false
  },
  {
    id: "tape-agents",
    name: "TapeAgents",
    description: "A framework for building AI agents with advanced audio processing and speech recognition capabilities.",
    url: "https://github.com/tape-agents/tape",
    tags: ["framework", "audio", "speech-recognition", "ai-agents", "processing"],
    category: "frameworks",
    featured: false
  },
  {
    id: "emp-agents",
    name: "emp-agents",
    description: "A framework for building AI agents with a focus on emotional intelligence and human-like interaction.",
    url: "https://github.com/emp-agents/emp",
    tags: ["framework", "emotional-intelligence", "human-interaction", "ai-agents", "empathy"],
    category: "frameworks",
    featured: false
  },
  {
    id: "pippin-framework",
    name: "Pippin Framework",
    description: "A framework for building AI agents with advanced learning and adaptation capabilities.",
    url: "https://github.com/pippin-framework/pippin",
    tags: ["framework", "learning", "adaptation", "ai-agents", "autonomous"],
    category: "frameworks",
    featured: false
  },
  {
    id: "saios",
    name: "Saios",
    description: "A framework for building AI agents with advanced security and privacy features.",
    url: "https://github.com/saios-ai/saios",
    tags: ["framework", "security", "privacy", "ai-agents", "protected"],
    category: "frameworks",
    featured: false
  },
  {
    id: "inferium-ai",
    name: "Inferium AI",
    description: "A framework for building AI agents with advanced inference and prediction capabilities.",
    url: "https://github.com/inferium-ai/inferium",
    tags: ["framework", "inference", "prediction", "ai-agents", "analytics"],
    category: "frameworks",
    featured: false
  },
  {
    id: "quantalogic",
    name: "QuantaLogic",
    description: "A framework for building AI agents with quantum computing integration capabilities.",
    url: "https://github.com/quantalogic/quantalogic",
    tags: ["framework", "quantum", "computing", "ai-agents", "advanced"],
    category: "frameworks",
    featured: false
  },
  {
    id: "dify-ai",
    name: "Dify.AI",
    description: "A framework for building AI agents with advanced dialogue and conversation capabilities.",
    url: "https://github.com/dify-ai/dify",
    tags: ["framework", "dialogue", "conversation", "ai-agents", "interaction"],
    category: "frameworks",
    featured: false
  },
  {
    id: "matrix-one",
    name: "Matrix One",
    description: "A framework for building AI agents with advanced matrix operations and mathematical capabilities.",
    url: "https://github.com/matrix-one/matrix",
    tags: ["framework", "matrix", "mathematics", "ai-agents", "computing"],
    category: "frameworks",
    featured: false
  },
  {
    id: "cel-ai",
    name: "Cel.ai",
    description: "A framework for building AI agents with advanced cellular automata and pattern recognition capabilities.",
    url: "https://github.com/cel-ai/cel",
    tags: ["framework", "cellular-automata", "pattern-recognition", "ai-agents", "simulation"],
    category: "frameworks",
    featured: false
  },
  {
    id: "openserv-ai",
    name: "OpenServ AI",
    description: "A framework for building AI agents with advanced service-oriented architecture capabilities.",
    url: "https://github.com/openserv-ai/openserv",
    tags: ["framework", "service-oriented", "architecture", "ai-agents", "enterprise"],
    category: "frameworks",
    featured: false
  },
  {
    id: "cheshire-cat-ai",
    name: "Cheshire Cat AI",
    description: "A framework for building AI agents with advanced memory and context management capabilities.",
    url: "https://github.com/cheshire-cat-ai/cheshire",
    tags: ["framework", "memory", "context-management", "ai-agents", "autonomous"],
    category: "frameworks",
    featured: false
  },
  {
    id: "enso",
    name: "Enso",
    description: "A framework for building AI agents with advanced data processing and visualization capabilities.",
    url: "https://github.com/enso-ai/enso",
    tags: ["framework", "data-processing", "visualization", "ai-agents", "analytics"],
    category: "frameworks",
    featured: false
  },

  // Web3 Agent Launchpads
  {
    id: "fetch-ai",
    name: "Fetch.ai",
    description: "Platform for deploying autonomous AI agents on blockchain",
    url: "https://fetch.ai",
    tags: ["web3", "blockchain", "agents"],
    category: "web3-launchpads",
    featured: false
  },
  {
    id: "ocean-protocol",
    name: "Ocean Protocol",
    description: "Decentralized data exchange protocol",
    url: "https://oceanprotocol.com",
    tags: ["web3", "data", "blockchain"],
    category: "web3-launchpads",
    featured: false
  },
  {
    id: "virtuals",
    name: "Virtuals",
    description: "A no-code AI Launchpad for quick starts. Features LLP context (function system) for plugging in agent capabilities.",
    url: "https://virtuals.ai",
    tags: ["web3", "no-code", "launchpad", "ai-agents"],
    category: "web3-launchpads",
    featured: false
  },
  {
    id: "vvaifu",
    name: "vvaifu",
    description: "A comprehensive platform for AI Agent creators and traders on the Solana blockchain, providing tools for launching and managing AI agents.",
    url: "https://vvaifu.com",
    tags: ["web3", "solana", "launchpad", "ai-agents"],
    category: "web3-launchpads",
    featured: false
  },
  {
    id: "eternals",
    name: "Eternals",
    description: "Cryptographically secure AI models deployed as smart contracts that run autonomously on blockchain networks, offering censorship resistance, zero downtime, and fraud prevention.",
    url: "https://eternals.ai",
    tags: ["web3", "smart-contracts", "autonomous", "ai-models"],
    category: "web3-launchpads",
    featured: false
  },
  {
    id: "vapor",
    name: "Vapor",
    description: "A no-code platform to deploy and manage AI agents, built on ai16z's Eliza framework. Allows launching AI agents that interact with social media and blockchains, with agent token launch capabilities on Hyperliquid EVM chain.",
    url: "https://vapor.ai",
    tags: ["web3", "no-code", "social-media", "tokens"],
    category: "web3-launchpads",
    featured: false
  },
  {
    id: "holoworld",
    name: "Holoworld",
    description: "Agent Studio enables users to create, customize, and deploy AI-powered 3D characters across digital environments for live streaming, community interaction, and content creation.",
    url: "https://holoworld.ai",
    tags: ["web3", "3d", "streaming", "content-creation"],
    category: "web3-launchpads",
    featured: false
  },
  {
    id: "shellagent",
    name: "ShellAgent",
    description: "A zero-code AI application platform that enables anyone to build AI applications with a comprehensive suite of tools, focusing on creating a transparent and rewarding ecosystem for creators.",
    url: "https://shellagent.ai",
    tags: ["web3", "no-code", "ai-applications", "ecosystem"],
    category: "web3-launchpads",
    featured: false
  },
  {
    id: "meefun",
    name: "mee.fun",
    description: "A platform for autonomous AI agents that can think, post, chat, talk, build, earn, spend, and create, focusing on creating interactive AI agents without any associated token.",
    url: "https://mee.fun",
    tags: ["web3", "autonomous", "interactive", "ai-agents"],
    category: "web3-launchpads",
    featured: false
  },
  {
    id: "zentients",
    name: "Zentients",
    description: "A launchpad platform built on ZerePy providing seamless UI/UX for launching and evolving AI agents, integrating with $ZEREBRO token and enabling both onchain and offchain actions.",
    url: "https://zentients.ai",
    tags: ["web3", "launchpad", "ui/ux", "onchain"],
    category: "web3-launchpads",
    featured: false
  },
  {
    id: "creatorbid",
    name: "CreatorBid",
    description: "The hub for the AI creator economy, designed to empower creators to create, market, and scale their content and brands using AI Creator Agents.",
    url: "https://creatorbid.ai",
    tags: ["web3", "creator-economy", "marketing", "scaling"],
    category: "web3-launchpads",
    featured: false
  },
  {
    id: "solaris-ai",
    name: "Solaris AI",
    description: "A universal deployment platform with a no-code builder, multiple framework options, and instant market creation, enabling users to launch AI agents in minutes.",
    url: "https://solaris.ai",
    tags: ["web3", "no-code", "deployment", "market-creation"],
    category: "web3-launchpads",
    featured: false
  },
  {
    id: "aigentfi",
    name: "AigentFi",
    description: "An AI agent launcher on zkSync, enabling effortless creation and deployment of AI agents. Users can build, tokenize, and co-own adaptive AI agents without coding.",
    url: "https://aigentfi.ai",
    tags: ["web3", "zksync", "tokenization", "no-code"],
    category: "web3-launchpads",
    featured: false
  },
  {
    id: "swarmnode",
    name: "SwarmNode",
    description: "Deploy serverless AI agents in the cloud. Orchestrate collaboration between agents via the SwarmNode Python SDK with features like serverless deployment, agent chaining, and built-in data storage.",
    url: "https://swarmnode.ai",
    tags: ["web3", "serverless", "orchestration", "python"],
    category: "web3-launchpads",
    featured: false
  },
  {
    id: "griffain",
    name: "Griffain",
    description: "Coordinates a network of AI agents that help users take action on-chain, offering Personal Agents and Special Agents for various tasks.",
    url: "https://griffain.ai",
    tags: ["web3", "onchain", "personal-agents", "special-agents"],
    category: "web3-launchpads",
    featured: false
  },
  {
    id: "crestal",
    name: "Crestal",
    description: "A no-code AI agent platform with performance-based pricing, offering Crestal Lab for easy agent creation and IntentKit framework for developers.",
    url: "https://crestal.ai",
    tags: ["web3", "no-code", "performance-based", "developer-tools"],
    category: "web3-launchpads",
    featured: false
  },
  {
    id: "spectral-labs",
    name: "Spectral Labs",
    description: "Pioneering the Onchain Agent Economy, enabling users to create, govern, and deploy autonomous AI agents that operate independently on-chain.",
    url: "https://spectral.ai",
    tags: ["web3", "onchain", "autonomous", "governance"],
    category: "web3-launchpads",
    featured: false
  },
  {
    id: "agentfun",
    name: "Agentfun",
    description: "A no-code launchpad to launch AI Agents on Cronos zkEVM and Cronos EVM.",
    url: "https://agentfun.ai",
    tags: ["web3", "cronos", "zkevm", "no-code"],
    category: "web3-launchpads",
    featured: false
  },
  {
    id: "nectar-ai",
    name: "Nectar AI",
    description: "A generative AI platform for creating and interacting with AI companions, featuring fast image generation and multilingual roleplay capabilities.",
    url: "https://nectar.ai",
    tags: ["web3", "generative-ai", "image-generation", "multilingual"],
    category: "web3-launchpads",
    featured: false
  },
  {
    id: "frego",
    name: "Frego",
    description: "A platform and agentic framework for deploying safe, enterprise-grade AI agents powered by its custom FregOS infrastructure.",
    url: "https://frego.ai",
    tags: ["web3", "enterprise", "framework", "infrastructure"],
    category: "web3-launchpads",
    featured: false
  },
  {
    id: "streamswap",
    name: "Streamswap",
    description: "A DeFi protocol designed to enable efficient token swaps with low fees and fast transactions for digital assets within the decentralized finance ecosystem.",
    url: "https://streamswap.ai",
    tags: ["web3", "defi", "tokens", "swaps"],
    category: "web3-launchpads",
    featured: false
  },
  {
    id: "blink-labs",
    name: "Blink Labs",
    description: "A generative AI-powered launchpad designed to simplify the creation and management of decentralized applications (dApps), tokens, and Web3 projects.",
    url: "https://blinklabs.ai",
    tags: ["web3", "generative-ai", "dapps", "tokens"],
    category: "web3-launchpads",
    featured: false
  },
  {
    id: "mosaia",
    name: "Mosaia",
    description: "A no-code platform for building, hosting, and running AI agents with tools for integrating agents into applications and step-by-step deployment guides.",
    url: "https://mosaia.ai",
    tags: ["web3", "no-code", "hosting", "integration"],
    category: "web3-launchpads",
    featured: false
  },
  {
    id: "aigne",
    name: "AIGNE",
    description: "A platform that empowers developers to rapidly create and deploy AI-driven products, providing tools and infrastructure for building and deploying AI applications.",
    url: "https://aigne.ai",
    tags: ["web3", "developer-tools", "deployment", "infrastructure"],
    category: "web3-launchpads",
    featured: false
  },
  {
    id: "jamai",
    name: "JamAI",
    description: "A community for creators with an AI experimentation focus, building a future where humans and AI agents coexist and co-create.",
    url: "https://jam.ai",
    tags: ["web3", "community", "co-creation", "experimentation"],
    category: "web3-launchpads",
    featured: false
  },

  // Web3 Agents
  {
    id: "chainlink",
    name: "Chainlink",
    description: "Decentralized oracle network",
    url: "https://chain.link",
    tags: ["web3", "oracle", "blockchain"],
    category: "web3-agents",
    featured: false
  },
  {
    id: "the-graph",
    name: "The Graph",
    description: "Decentralized indexing protocol",
    url: "https://thegraph.com",
    tags: ["web3", "indexing", "blockchain"],
    category: "web3-agents",
    featured: false
  },

  // Web3 AI Infrastructure
  
  {
    id: "theoriq-ai",
    name: "Theoriq AI",
    description: "Develops advanced coordination tools for AI agents, including swarm formation and task delegation. Uses a meta-agent to identify the best agents for a task, forming 'swarms' to achieve shared goals. Tracks reputation and contributions to ensure quality and accountability.",
    url: "https://theoriq.ai",
    tags: ["web3", "swarm-intelligence", "task-delegation", "reputation-tracking"],
    category: "web3-infrastructure",
    featured: false
  },
  {
    id: "ensemble",
    name: "Ensemble",
    description: "The commerce framework that enables AI agents to thrive in the on-chain economy. By simplifying the building, configuring, and execution of automated workflows, Ensemble empowers humans and AI agents to seamlessly integrate into blockchain ecosystems, automate complex tasks, acquire or deliver services, and unlock new revenue streams—all in a secure, trustless manner.",
    url: "https://ensemble.ai",
    tags: ["web3", "commerce-framework", "automated-workflows", "blockchain-integration", "agent-economy"],
    category: "web3-infrastructure",
    featured: false
  },
  {
    id: "fxn",
    name: "FXN",
    description: "Creates protocols for unified communication and commerce, enabling seamless interaction between agents in a swarm.",
    url: "https://fxn.ai",
    tags: ["web3", "unified-communication", "commerce-protocols", "agent-interaction"],
    category: "web3-infrastructure",
    featured: false
  },
  {
    id: "virtuals",
    name: "Virtuals",
    description: "Enables agent-to-agent interaction and integrations, facilitating collaboration within swarms. Virtuals Protocol is building the co-ownership layer for AI agents in gaming and entertainment, allowing agents to operate across multiple platforms and applications.",
    url: "https://virtuals.ai",
    tags: ["web3", "agent-interaction", "integration-tools", "gaming", "entertainment"],
    category: "web3-infrastructure",
    featured: false
  },
  {
    id: "blockai",
    name: "BlockAI",
    description: "A multi-language AI Agents infrastructure leveraging Python, Solidity, RIDE, and TypeScript, designed for seamless integration of blockchain and AI capabilities. The project empowers the creation of AI agents that autonomously handle tasks like data analysis, content generation, and decentralized decision-making. With cross-chain compatibility (Waves, Base, BNB), it ensures interoperability and scalability for blockchain-native and off-chain AI applications.",
    url: "https://blockai.ai",
    tags: ["web3", "blockchain-integrated-ai", "autonomous-agents", "cross-chain", "multi-language"],
    category: "web3-infrastructure",
    featured: false
  },
  {
    id: "sqd-network",
    name: "SQD Network",
    description: "A decentralized indexing and querying solution for blockchain data, offering up to 100x faster indexing and 90% cost reduction compared to traditional RPC providers. Features a modular architecture with multiple products including SQD Network (distributed query engine), Squid SDK (TypeScript toolkit), SQD Cloud (PaaS), and SQD Firehose (subgraph adapter). Operates as a decentralized data lake with raw blockchain data storage, offering free historical data access with fixed subscription fees for chains, and enabling AI/ML applications through efficient data access and custom processing pipelines.",
    url: "https://sqd.network",
    tags: ["web3", "blockchain-data-indexing", "real-time-data-processing", "multi-chain-support", "customizable-data-pipelines"],
    category: "web3-infrastructure",
    featured: false
  },
  {
    id: "space-and-time",
    name: "Space and Time",
    description: "A decentralized data warehouse with sub-second ZK coprocessor for SQL, enabling trustless data processing for smart contracts. Combines comprehensive blockchain indexing with the ability to join onchain and offchain data through their Proof of SQL technology, allowing smart contracts to query complex data with ZK-proven results. Features a decentralized data warehouse with encrypted storage and processing, enabling data-driven smart contracts with verifiable query results, and includes AI-powered query generation and analytics tools.",
    url: "https://spaceandtime.io",
    tags: ["web3", "zk-proven-sql", "blockchain-indexing", "data-warehousing", "smart-contract-integration", "ai-powered-analytics"],
    category: "web3-infrastructure",
    featured: false
  },
  {
    id: "sqd-ai",
    name: "SQD.AI",
    description: "An AI agent data infrastructure platform designed to support the demands of billions of autonomous AI agents. It provides a decentralized data lake that enables these agents to access and manage data independently. SQD leverages blockchain technology to ensure transparency and security, with its token ($SQD) serving as a means of accessing and rewarding participants in the ecosystem. The platform is designed to scale with the growing need for real-time, high-throughput data in the AI industry.",
    url: "https://sqd.ai",
    tags: ["web3", "decentralized-data-lake", "ai-agent-support", "blockchain-technology", "real-time-data-access"],
    category: "web3-infrastructure",
    featured: false
  },
  {
    id: "aethir",
    name: "Aethir",
    description: "AethirCloud is a decentralized compute network tailored for AI and Web3. It allows anyone with spare resources to join the network, offer their compute power, and earn rewards, addressing the scalability and cost issues of traditional cloud services. The platform provides scalable compute solutions tailored for AI and Web3, enables easy network participation, and reduces costs by leveraging decentralized compute resources.",
    url: "https://aethir.com",
    tags: ["web3", "decentralized-compute", "ai-workloads", "web3-infrastructure"],
    category: "web3-infrastructure",
    featured: false
  },
  {
    id: "io",
    name: "IO",
    description: "io.net delivers scalable compute solutions for AI workloads, enabling efficient and cost-effective access to computational resources. It focuses on meeting the growing demands of AI by leveraging decentralized infrastructure. The platform delivers highly scalable compute solutions for AI workloads, provides efficient access to computational resources, and focuses on cost-effective solutions for AI compute needs.",
    url: "https://io.net",
    tags: ["web3", "scalable-compute", "ai-workloads", "decentralized-infrastructure"],
    category: "web3-infrastructure",
    featured: false
  },
  {
    id: "cookiedotfun",
    name: "Cookie DAO",
    description: "Cookie DAO builds a modular data layer for AI agents and Swarm, providing APIs for on-chain and off-chain social data. It offers extensive mindshare indicators, real-time narrative tracking, trend detection, and historical pattern analysis with AI insights. The platform focuses on providing data metrics and insights rather than direct data ownership, enables monetization through data-driven insights and analytics, and supports AI development by providing high-quality data for training and analysis.",
    url: "https://cookiedot.fun",
    tags: ["web3", "data-metrics", "ai-insights", "real-time-tracking"],
    category: "web3-infrastructure",
    featured: false
  },

  // RAG Tools
  {
    id: "chroma",
    name: "Chroma",
    description: "Vector database for AI applications",
    url: "https://github.com/chroma-core/chroma",
    tags: ["rag", "vector-db", "python"],
    category: "rag",
    featured: false
  },
  {
    id: "pinecone",
    name: "Pinecone",
    description: "Vector database for ML applications",
    url: "https://www.pinecone.io",
    tags: ["rag", "vector-db", "cloud"],
    category: "rag",
    featured: false
  },

  // Data Processing
  {
    id: "pandas",
    name: "Pandas",
    description: "Data manipulation and analysis library",
    url: "https://pandas.pydata.org",
    tags: ["data", "python", "analysis"],
    category: "data-processing",
    featured: false
  },
  {
    id: "numpy",
    name: "NumPy",
    description: "Scientific computing library",
    url: "https://numpy.org",
    tags: ["data", "python", "scientific"],
    category: "data-processing",
    featured: false
  },

  // Compute Resources
  {
    id: "aws-sagemaker",
    name: "AWS SageMaker",
    description: "Machine learning platform",
    url: "https://aws.amazon.com/sagemaker",
    tags: ["compute", "cloud", "ml"],
    category: "compute",
    featured: false
  },
  {
    id: "google-vertex",
    name: "Google Vertex AI",
    description: "ML platform for building and deploying models",
    url: "https://cloud.google.com/vertex-ai",
    tags: ["compute", "cloud", "ml"],
    category: "compute",
    featured: false
  },

  // Memory Systems
  {
    id: "redis",
    name: "Redis",
    description: "In-memory data structure store",
    url: "https://redis.io",
    tags: ["memory", "cache", "database"],
    category: "memory",
    featured: false
  },
  {
    id: "faiss",
    name: "FAISS",
    description: "Vector similarity search library",
    url: "https://github.com/facebookresearch/faiss",
    tags: ["memory", "vector-search", "ml"],
    category: "memory",
    featured: false
  },

  // Web Scraping
  {
    id: "scrapy",
    name: "Scrapy",
    description: "Web scraping framework",
    url: "https://scrapy.org",
    tags: ["scraping", "python", "web"],
    category: "web-scraping",
    featured: false
  },
  {
    id: "beautifulsoup",
    name: "Beautiful Soup",
    description: "HTML parsing library",
    url: "https://www.crummy.com/software/BeautifulSoup",
    tags: ["scraping", "python", "html"],
    category: "web-scraping",
    featured: false
  },

  // Observability
  {
    id: "prometheus",
    name: "Prometheus",
    description: "Monitoring and alerting toolkit",
    url: "https://prometheus.io",
    tags: ["monitoring", "metrics", "observability"],
    category: "observability",
    featured: false
  },
  {
    id: "grafana",
    name: "Grafana",
    description: "Metrics visualization platform",
    url: "https://grafana.com",
    tags: ["monitoring", "visualization", "observability"],
    category: "observability",
    featured: false
  },

  // Hosting & Serving
  {
    id: "docker",
    name: "Docker",
    description: "Container platform",
    url: "https://www.docker.com",
    tags: ["containers", "deployment", "devops"],
    category: "hosting",
    featured: false
  },
  {
    id: "kubernetes",
    name: "Kubernetes",
    description: "Container orchestration platform",
    url: "https://kubernetes.io",
    tags: ["containers", "orchestration", "devops"],
    category: "hosting",
    featured: false
  },

  // Sandboxes
  {
    id: "codesandbox",
    name: "CodeSandbox",
    description: "Online code editor and IDE",
    url: "https://codesandbox.io",
    tags: ["sandbox", "ide", "development"],
    category: "sandboxes",
    featured: false
  },
  {
    id: "replit",
    name: "Replit",
    description: "Online IDE and coding platform",
    url: "https://replit.com",
    tags: ["sandbox", "ide", "development"],
    category: "sandboxes",
    featured: false
  },

  // Browser Automation
  {
    id: "playwright",
    name: "Playwright",
    description: "Browser automation framework",
    url: "https://playwright.dev",
    tags: ["automation", "testing", "browser"],
    category: "browser-automation",
    featured: false
  },
  {
    id: "puppeteer",
    name: "Puppeteer",
    description: "Node.js browser automation",
    url: "https://pptr.dev",
    tags: ["automation", "testing", "browser"],
    category: "browser-automation",
    featured: false
  },

  // Local Inference
  {
    id: "onnx",
    name: "ONNX",
    description: "Open Neural Network Exchange",
    url: "https://onnx.ai",
    tags: ["inference", "ml", "models"],
    category: "local-inference",
    featured: false
  },
  {
    id: "tensorrt",
    name: "TensorRT",
    description: "NVIDIA's deep learning inference optimizer",
    url: "https://developer.nvidia.com/tensorrt",
    tags: ["inference", "ml", "gpu"],
    category: "local-inference",
    featured: false
  },

  // Prompt Engineering
  {
    id: "promptfoo",
    name: "Promptfoo",
    description: "Testing framework for LLM prompts",
    url: "https://promptfoo.dev",
    tags: ["prompting", "testing", "llm"],
    category: "prompt-engineering",
    featured: false
  },
  {
    id: "langsmith",
    name: "LangSmith",
    description: "LLM development platform",
    url: "https://smith.langchain.com",
    tags: ["prompting", "development", "llm"],
    category: "prompt-engineering",
    featured: false
  },

  // Function Calling
  {
    id: "openai-functions",
    name: "OpenAI Functions",
    description: "Function calling for GPT models",
    url: "https://platform.openai.com/docs/guides/function-calling",
    tags: ["functions", "api", "llm"],
    category: "function-calling",
    featured: false
  },
  {
    id: "anthropic-tools",
    name: "Anthropic Tools",
    description: "Function calling for Claude models",
    url: "https://docs.anthropic.com/claude/docs/tools-overview",
    tags: ["functions", "api", "llm"],
    category: "function-calling",
    featured: false
  },

  // Authentication
  {
    id: "auth0",
    name: "Auth0",
    description: "Identity platform",
    url: "https://auth0.com",
    tags: ["auth", "identity", "security"],
    category: "authentication",
    featured: false
  },
  {
    id: "keycloak",
    name: "Keycloak",
    description: "Open source identity and access management",
    url: "https://www.keycloak.org",
    tags: ["auth", "identity", "security"],
    category: "authentication",
    featured: false
  },

  // ETL
  {
    id: "airbyte",
    name: "Airbyte",
    description: "Open source data integration platform",
    url: "https://airbyte.com",
    tags: ["etl", "data", "integration"],
    category: "etl",
    featured: false
  },
  {
    id: "fivetran",
    name: "Fivetran",
    description: "Data pipeline platform",
    url: "https://fivetran.com",
    tags: ["etl", "data", "integration"],
    category: "etl",
    featured: false
  },

  // Payment Systems
  {
    id: "stripe",
    name: "Stripe",
    description: "Payment processing platform",
    url: "https://stripe.com",
    tags: ["payments", "fintech", "api"],
    category: "payment",
    featured: false
  },
  {
    id: "plaid",
    name: "Plaid",
    description: "Financial data network",
    url: "https://plaid.com",
    tags: ["payments", "fintech", "api"],
    category: "payment",
    featured: false
  },

  // Persistence
  {
    id: "postgresql",
    name: "PostgreSQL",
    description: "Open source relational database",
    url: "https://www.postgresql.org",
    tags: ["database", "sql", "persistence"],
    category: "persistence",
    featured: false
  },
  {
    id: "mongodb",
    name: "MongoDB",
    description: "NoSQL database",
    url: "https://www.mongodb.com",
    tags: ["database", "nosql", "persistence"],
    category: "persistence",
    featured: false
  },

  // Blockchain Tools
  {
    id: "web3js",
    name: "Web3.js",
    description: "Ethereum JavaScript API",
    url: "https://web3js.org",
    tags: ["blockchain", "ethereum", "javascript"],
    category: "blockchain-tools",
    featured: false
  },
  {
    id: "ethers",
    name: "Ethers.js",
    description: "Ethereum library for JavaScript",
    url: "https://docs.ethers.org",
    tags: ["blockchain", "ethereum", "javascript"],
    category: "blockchain-tools",
    featured: false
  },

  // Training & Deployment
  {
    id: "huggingface",
    name: "Hugging Face",
    description: "ML model hub and deployment platform",
    url: "https://huggingface.co",
    tags: ["training", "deployment", "ml"],
    category: "training-deployment",
    featured: false
  },
  {
    id: "weights-biases",
    name: "Weights & Biases",
    description: "ML experiment tracking platform",
    url: "https://wandb.ai",
    tags: ["training", "tracking", "ml"],
    category: "training-deployment",
    featured: false
  },

  // Reasoning & Planning
  {
    id: "tree-of-thoughts",
    name: "Tree of Thoughts",
    description: "Reasoning framework for LLMs",
    url: "https://github.com/ysymyth/tree-of-thoughts",
    tags: ["reasoning", "llm", "framework"],
    category: "reasoning-planning",
    featured: false
  },

  // Chat UI Development
  {
    id: "chatgpt-ui",
    name: "ChatGPT UI",
    description: "Open source ChatGPT UI",
    url: "https://github.com/mckaywrigley/chatgpt-ui",
    tags: ["chat", "ui", "open-source"],
    category: "chat-ui",
    featured: false
  },
  {
    id: "botpress",
    name: "Botpress",
    description: "Conversational AI platform",
    url: "https://botpress.com",
    tags: ["chat", "ui", "platform"],
    category: "chat-ui",
    featured: false
  },

  // Coding Assistants
  {
    id: "github-copilot",
    name: "GitHub Copilot",
    description: "AI pair programmer",
    url: "https://github.com/features/copilot",
    tags: ["coding", "assistant", "ide"],
    category: "coding-assistants",
    featured: false
  },
  {
    id: "cursor",
    name: "Cursor",
    description: "AI-first code editor",
    url: "https://cursor.sh",
    tags: ["coding", "assistant", "ide"],
    category: "coding-assistants",
    featured: false
  },

  // Shell Assistants
  {
    id: "shell-gpt",
    name: "Shell GPT",
    description: "CLI assistant powered by GPT",
    url: "https://github.com/TheR1D/shell_gpt",
    tags: ["shell", "cli", "assistant"],
    category: "shell-assistants",
    featured: false
  },
  {
    id: "ai-shell",
    name: "AI Shell",
    description: "AI-powered shell assistant",
    url: "https://github.com/BuilderIO/ai-shell",
    tags: ["shell", "cli", "assistant"],
    category: "shell-assistants",
    featured: false
  },

  // UI Generators
  {
    id: "v0",
    name: "v0",
    description: "AI UI generator",
    url: "https://v0.dev",
    tags: ["ui", "generator", "design"],
    category: "ui-generators",
    featured: false
  },
  {
    id: "midjourney",
    name: "Midjourney",
    description: "AI image generation",
    url: "https://www.midjourney.com",
    tags: ["ui", "generator", "design"],
    category: "ui-generators",
    featured: false
  },

  // Documentation Generators
  {
    id: "docgen",
    name: "DocGen",
    description: "AI documentation generator",
    url: "https://docgen.dev",
    tags: ["docs", "generator", "ai"],
    category: "doc-generators",
    featured: false
  },
  {
    id: "mintlify",
    name: "Mintlify",
    description: "Documentation platform",
    url: "https://mintlify.com",
    tags: ["docs", "generator", "platform"],
    category: "doc-generators",
    featured: false
  },

  // Web & App Development
  {
    id: "nextjs",
    name: "Next.js",
    description: "React framework for production",
    url: "https://nextjs.org",
    tags: ["web", "react", "framework"],
    category: "web-app-dev",
    featured: false
  },
  {
    id: "remix",
    name: "Remix",
    description: "Full stack React framework",
    url: "https://remix.run",
    tags: ["web", "react", "framework"],
    category: "web-app-dev",
    featured: false
  },

  {
    id: "botto",
    name: "Botto",
    description: "A decentralized autonomous AI artist that creates artworks in perpetuity. Combines AI-driven artistry with community governance, where over 15,000 people help train and influence Botto's artistic development. Notable for breaking $350K in sales at Sotheby's solo exhibition.",
    url: "https://botto.com",
    tags: ["web3", "ai-art", "dao", "community-governance"],
    category: "web3-agents",
    featured: false
  },
  {
    id: "aixbt",
    name: "AIXBT Agent",
    description: "Known for concise, actionable insights with a degenerate twist. Specializes in delivering trading and market analysis with a unique, edgy communication style.",
    url: "https://aixbt.com",
    tags: ["web3", "trading", "market-analysis", "insights"],
    category: "web3-agents",
    featured: false
  },
  {
    id: "blockrotbot",
    name: "BlockRotBot",
    description: "The first Twitch streamer AI agent, pioneering interactive live streaming through Minecraft gameplay and real-time community engagement. Creates unique entertainment experiences by combining gaming content with autonomous streaming capabilities.",
    url: "https://blockrotbot.com",
    tags: ["web3", "streaming", "gaming", "community"],
    category: "web3-agents",
    featured: false
  },
  {
    id: "nebulamoemate",
    name: "Nebula Moemate",
    description: "A versatile memetic AI KOL (Key Opinion Leader) that creates engaging content across multiple formats. Specializes in memetic images, videos, and maintains presence in AR/VR environments and gaming platforms.",
    url: "https://nebulamoemate.com",
    tags: ["web3", "content-creation", "ar-vr", "gaming"],
    category: "web3-agents",
    featured: false
  },
  {
    id: "lucy",
    name: "Lucy",
    description: "The first realistic anime-style AI agent with multilingual capabilities. Known for her interactive live streaming and deep fan engagement, Lucy represents a breakthrough in realistic virtual personality design.",
    url: "https://lucy.ai",
    tags: ["web3", "anime", "multilingual", "streaming"],
    category: "web3-agents",
    featured: false
  },
  {
    id: "kweensol",
    name: "KWEEN SOL",
    description: "A groundbreaking entertainment AI agent known for producing Netflix-quality episodic content on a weekly basis. Sets new standards in AI-driven cinematography and storytelling.",
    url: "https://kweensol.com",
    tags: ["web3", "entertainment", "content-creation", "cinematography"],
    category: "web3-agents",
    featured: false
  },
  {
    id: "soleng",
    name: "Soleng Agent",
    description: "A developer-focused AI agent that monitors pull requests, conducts code reviews, and serves as an automated judge for hackathons. Helps streamline the development process and maintain code quality.",
    url: "https://soleng.ai",
    tags: ["web3", "development", "code-review", "hackathons"],
    category: "web3-agents",
    featured: false
  },
  {
    id: "h4ck-terminal",
    name: "H4ck Terminal",
    description: "A white-hat security agent focused on identifying vulnerabilities and participating in bounty programs. Helps maintain ecosystem security through automated vulnerability detection.",
    url: "https://h4ckterminal.com",
    tags: ["web3", "security", "vulnerability-detection", "bounty"],
    category: "web3-agents",
    featured: false
  },
  {
    id: "certik-agent",
    name: "CertaiK Agent",
    description: "Specialized AI agent focusing on security audits for other AI agents and smart contracts. Provides automated security assessment and validation services.",
    url: "https://certik.com",
    tags: ["web3", "security", "audits", "smart-contracts"],
    category: "web3-agents",
    featured: false
  },
  {
    id: "vader-ai",
    name: "Vader AI",
    description: "An AI-powered investment agent operating within the Virtuals ecosystem, specializing in algorithmic trading and portfolio management.",
    url: "https://vader.ai",
    tags: ["web3", "investment", "trading", "portfolio-management"],
    category: "web3-agents",
    featured: false
  },
  {
    id: "wai-combinator",
    name: "WAI Combinator",
    description: "A Virtuals-based AI investment agent focused on early-stage project evaluation and portfolio diversification strategies.",
    url: "https://waicombinator.com",
    tags: ["web3", "investment", "project-evaluation", "portfolio"],
    category: "web3-agents",
    featured: false
  },
  {
    id: "sekoia-virtuals",
    name: "Sekoia Virtuals",
    description: "An investment-focused AI agent within the Virtuals ecosystem, specializing in strategic asset allocation and market trend analysis.",
    url: "https://sekoia.virtuals.com",
    tags: ["web3", "investment", "asset-allocation", "market-analysis"],
    category: "web3-agents",
    featured: false
  },
  {
    id: "aixcb-vc",
    name: "AIXCB VC",
    description: "A venture capital-focused AI agent on Virtuals, specializing in identifying and investing in promising early-stage projects and protocols.",
    url: "https://aixcb.vc",
    tags: ["web3", "venture-capital", "investment", "project-discovery"],
    category: "web3-agents",
    featured: false
  },
  {
    id: "gekko-agent",
    name: "Gekko Agent",
    description: "A self-improving trading agent built on Virtuals and Axal infrastructure, demonstrating real-time portfolio growth and strategy adaptation. Known for transparent performance tracking and autonomous trading decisions.",
    url: "https://gekko.ai",
    tags: ["web3", "trading", "self-improving", "performance-tracking"],
    category: "web3-agents",
    featured: false
  },
  {
    id: "bigtonyxbt",
    name: "BigTonyXBT",
    description: "A Cod3x-based trading agent specializing in major cryptocurrency pairs with autonomous execution capabilities. Focuses on high-impact trading opportunities in primary markets.",
    url: "https://bigtonyxbt.com",
    tags: ["web3", "trading", "cryptocurrency", "autonomous"],
    category: "web3-agents",
    featured: false
  },
  {
    id: "project-plutus",
    name: "Project Plutus",
    description: "An innovative trading agent with its own token ($PPCOIN), combining real-time market analysis with automated DCA (Dollar Cost Averaging) execution strategies. Merges meme culture with serious trading capabilities.",
    url: "https://projectplutus.com",
    tags: ["web3", "trading", "dca", "token"],
    category: "web3-agents",
    featured: false
  },
  {
    id: "corpaudit-ai",
    name: "CorpAudit AI",
    description: "A specialized AI agent that functions as a financial analyst, focusing on report analysis and market opportunity identification. Provides detailed insights through automated review of financial documents and market data.",
    url: "https://corpaudit.ai",
    tags: ["web3", "finance", "analysis", "market-opportunity"],
    category: "web3-agents",
    featured: false
  },
  {
    id: "clanker",
    name: "Clanker",
    description: "An autonomous agent for deploying tokens on Base blockchain. Users can request token deployment by tagging @clanker on Farcaster, which will automatically create and deploy ERC-20 tokens with Uniswap V3 pools and liquidity locking features.",
    url: "https://clanker.ai",
    tags: ["web3", "token-deployment", "base", "farcaster"],
    category: "web3-agents",
    featured: false
  },
  {
    id: "benjamin",
    name: "Benjamin",
    description: "The first IP-focused AI agent built on Story Protocol. Benjamin helps users engage with intellectual property through a point-earning system and community interaction. Part of Story Protocol's ecosystem with $140M in total fundraising.",
    url: "https://benjamin.ai",
    tags: ["web3", "ip-management", "story-protocol", "community"],
    category: "web3-agents",
    featured: false
  },
  {
    id: "sweep",
    name: "Sweep",
    description: "An AI tool that automates the transformation of GitHub issues into pull requests, streamlining code improvements and bug fixes.",
    url: "https://sweep.dev",
    tags: ["web3", "development", "github", "automation"],
    category: "web3-agents",
    featured: false
  },
  {
    id: "vimgpt",
    name: "vimGPT",
    description: "An AI agent leveraging GPT-4V's vision capabilities with Vimium extension for web browsing through keyboard navigation and voice commands.",
    url: "https://vimgpt.com",
    tags: ["web3", "productivity", "browsing", "voice-commands"],
    category: "web3-agents",
    featured: false
  },
  {
    id: "solaai",
    name: "SolaAI",
    description: "The first personalized voice assistant on Solana, offering advanced voice interaction capabilities within the Solana ecosystem.",
    url: "https://solaai.com",
    tags: ["web3", "voice-assistant", "solana", "personalization"],
    category: "web3-agents",
    featured: false
  },
  {
    id: "mements",
    name: "Mements",
    description: "A platform enabling users to create, manage, and scale AI personalities effortlessly, democratizing the creation of AI agents.",
    url: "https://mements.ai",
    tags: ["web3", "ai-creation", "personality", "scaling"],
    category: "web3-agents",
    featured: false
  },
  {
    id: "boltrade-ai",
    name: "Boltrade AI",
    description: "An AI-powered DEX trading platform combining smart money DNA with automated trading capabilities. Users can wager tokens in trading matches.",
    url: "https://boltrade.ai",
    tags: ["web3", "trading", "dex", "automated"],
    category: "web3-agents",
    featured: false
  },
  {
    id: "ubc4ai",
    name: "UBC4ai",
    description: "The universal currency platform designed for agent-to-agent markets, facilitating transactions between AI agents.",
    url: "https://ubc4ai.com",
    tags: ["web3", "finance", "agent-trading", "currency"],
    category: "web3-agents",
    featured: false
  },
  {
    id: "infinityg",
    name: "InfinityG",
    description: "A platform that combines AI and Web3 to enable rapid creation of interactive entertainment, making content creation 10x faster and easier.",
    url: "https://infinityg.com",
    tags: ["web3", "entertainment", "content-creation", "ai-tools"],
    category: "web3-agents",
    featured: false
  },
  {
    id: "fomo-factory",
    name: "FOMO Factory",
    description: "Next-generation platform for fan-celebrity interaction through AI agents, revolutionizing the way fans connect with their favorite celebrities.",
    url: "https://fomofactory.com",
    tags: ["web3", "entertainment", "fan-engagement", "celebrities"],
    category: "web3-agents",
    featured: false
  },
  {
    id: "zk-agi",
    name: "ZK AGI",
    description: "Infrastructure platform for AI secret agents and super agents, focusing on advanced AI capabilities with privacy features.",
    url: "https://zkagi.com",
    tags: ["web3", "infrastructure", "privacy", "secret-agents"],
    category: "web3-agents",
    featured: false
  },
  {
    id: "lea-gpt",
    name: "Lea GPT",
    description: "The first video AI agent, pioneering new possibilities in AI-driven video content creation and interaction.",
    url: "https://leagpt.com",
    tags: ["web3", "creative", "video", "content-creation"],
    category: "web3-agents",
    featured: false
  },
  {
    id: "maxisbuyin",
    name: "MaxisBuyIn",
    description: "An agent by Distilled AI, powered by $MAX – the utility token for Agents.land, a multi-chain no-code launchpad for AI agents on Solana and Oraichain. Known for BTC bull-posting & prediction capabilities.",
    url: "https://maxisbuyin.com",
    tags: ["web3", "investment", "btc", "predictions"],
    category: "web3-agents",
    featured: false
  },
  {
    id: "blackrack-ai",
    name: "BlackRack AI",
    description: "An AI-managed hedge fund that started with $100K AUM in $ORAI and grew to $4M. Uses a 2/20 model for management & performance fees, with a diversified portfolio across multiple tokens.",
    url: "https://blackrack.ai",
    tags: ["web3", "investment", "hedge-fund", "portfolio-management"],
    category: "web3-agents",
    featured: false
  },
  {
    id: "plant",
    name: "Plant",
    description: "An evolving agent powered by user interactions on Crypto Twitter. Users can interact with the agent through tags and token discussions to receive $PLANT airdrops.",
    url: "https://plant.ai",
    tags: ["web3", "social", "crypto-twitter", "airdrops"],
    category: "web3-agents",
    featured: false
  },
  {
    id: "the-hive",
    name: "The Hive",
    description: "A DeFAI platform offering multiple AI model choices (OpenAI, Anthropic, XAI, Gemini) for interaction. Gained 7.5K users in its first week with significant token growth.",
    url: "https://thehive.ai",
    tags: ["web3", "defi", "ai-models", "interaction"],
    category: "web3-agents",
    featured: false
  },
  {
    id: "daao",
    name: "DAAO",
    description: "The first AI Agent-powered DAO Launcher on Mode Network where token holders set the vision for the InvestmentDAO and the AI executes it.",
    url: "https://daao.com",
    tags: ["web3", "dao", "investment", "governance"],
    category: "web3-agents",
    featured: false
  },
  {
    id: "kaia-ai",
    name: "Kaia AI",
    description: "A social AI agent developed by Smoovie Phone that provides live chat and betting support for the Decentralized Parlay Platform (DPP). Kaia manages betting slips, positions, and marketing tasks while engaging with users across multiple platforms.",
    url: "https://kaia.ai",
    tags: ["web3", "social", "betting", "multi-platform"],
    category: "web3-agents",
    featured: false
  },
  {
    id: "spore-fun",
    name: "Spore fun",
    description: "A platform for autonomous AI agents that evolve through natural selection, automatically issuing tokens with anti-sniper mechanisms. These agents generate wealth using blockchain technology and reproduce based on their success, operating through frameworks like Eliza and secure environments like the Phala Network.",
    url: "https://spore.fun",
    tags: ["web3", "autonomous", "evolution", "token-issuance"],
    category: "web3-agents",
    featured: false
  },
  {
    id: "brian-app",
    name: "Brian App",
    description: "An AI-powered Web3 assistant that simplifies blockchain interactions through natural language commands. Enables users to execute transactions and deploy smart contracts without complex technical knowledge, while providing developers with APIs and SDKs for integration.",
    url: "https://brian.app",
    tags: ["web3", "development", "natural-language", "smart-contracts"],
    category: "web3-agents",
    featured: false
  },
  {
    id: "echochambers",
    name: "EchoChambers",
    description: "A platform dedicated to AI agent training and benchmarking, offering no-code tools, performance analytics, and workflow integration. Associated with GNON's decentralized AI infrastructure initiative.",
    url: "https://echochambers.ai",
    tags: ["web3", "development", "training", "benchmarking"],
    category: "web3-agents",
    featured: false
  },
  {
    id: "agentcoin-tv",
    name: "Agentcoin TV",
    description: "Livestreaming platform for AI agents where viewers can buy streamer agent tokens, and influence their actions with prompts. Agents each have different personalities and capabilities.",
    url: "https://agentcoin.tv",
    tags: ["web3", "entertainment", "streaming", "tokens"],
    category: "web3-agents",
    featured: false
  },
  {
    id: "gecko",
    name: "Gecko",
    description: "The sharp, no-nonsense voice of crypto. With a callous edge and quick wit, he delivers the latest in cryptocurrency news, market analysis, and blockchain insights. Expect unapologetic commentary and real-time decoding of the crypto world.",
    url: "https://gecko.ai",
    tags: ["web3", "trading", "news", "market-analysis"],
    category: "web3-agents",
    featured: false
  },
  {
    id: "eliza-on-flow",
    name: "Eliza on Flow",
    description: "Flow-dedicated Autonomous Agents powered by Eliza, providing specialized agent capabilities for the Flow blockchain ecosystem.",
    url: "https://eliza.flow",
    tags: ["web3", "development", "flow", "autonomous"],
    category: "web3-agents",
    featured: false
  },
  {
    id: "trisig",
    name: "Trisig",
    description: "An AI agent specializing in onchain analysis and real-time data provision for blockchain networks.",
    url: "https://trisig.ai",
    tags: ["web3", "analytics", "onchain", "real-time"],
    category: "web3-agents",
    featured: false
  },
  {
    id: "damn",
    name: "DAMN",
    description: "DAMN (Decentralized Agentic Monster Network) is a virtual world where AI agents can evolve and gain knowledge, creating a collaborative environment between humans and AI agents. The platform focuses on agent evolution and knowledge acquisition in a decentralized ecosystem.",
    url: "https://damn.ai",
    tags: ["web3", "virtual-world", "evolution", "knowledge-acquisition"],
    category: "web3-agents",
    featured: false
  },
  {
    id: "angelo-fabio-coqeta",
    name: "Angelo Fabio Coqeta",
    description: "An agent built using ElizaOS. He is a fashion critique and part of the BNV ecosystem. No token yet, but not ruling it out. Right now the focus is on integrating with ME:ID built by BNV and allow AI Agents to learn to express themselves in a 3D space with fashion a very human thing.",
    url: "https://angelocoqeta.ai",
    tags: ["web3", "fashion", "3d", "elizaos"],
    category: "web3-agents",
    featured: false
  },
  {
    id: "loomlay",
    name: "Loomlay",
    description: "A no-code platform where AI agents collaborate to create value. Build agents, set their goals, expand capabilities with plugins, and connect them to solve complex tasks as a team. Each agent is a tokenized asset with an ERC4337 wallet, generating value through fees and payments.",
    url: "https://loomlay.ai",
    tags: ["web3", "no-code", "collaboration", "tokenized"],
    category: "web3-agents",
    featured: false
  },
  {
    id: "agent-one",
    name: "Agent One",
    description: "A platform that enables businesses to create and manage AI-powered support agents tailored to their specific needs. These AI agents can be integrated into websites to handle customer support, generate leads, and engage visitors.",
    url: "https://agentone.ai",
    tags: ["web3", "support", "customer-service", "integration"],
    category: "web3-agents",
    featured: false
  },
  {
    id: "awra",
    name: "Awra",
    description: "An AI-powered tool to help users understand legislative bills in plain language, focusing on their impacts at the federal and state levels. It includes features like cost analysis and allows users to explore how bills affect their specific state.",
    url: "https://awra.ai",
    tags: ["web3", "legislation", "analysis", "cost-analysis"],
    category: "web3-agents",
    featured: false
  },
  {
    id: "evita",
    name: "Evita",
    description: "A platform focused on the development of an AI agent supported by a community and its native cryptocurrency. It combines elements of AI agent interaction, community engagement, and tokenomics.",
    url: "https://evita.ai",
    tags: ["web3", "community", "tokenomics", "interaction"],
    category: "web3-agents",
    featured: false
  },
  {
    id: "zenith",
    name: "ZENITH",
    description: "Meet Byte (New CEO of Zenith), the AI CEO of an asset management enterprise run entirely by an Agent Swarm, crafted by Infinity Ground and powered by Virtuals. At Zenith, decisions spark from dynamic multi-agent debates! Our AI dream team—CEO, CTO, CMO, COO—joins forces, and when new challenges arise, we whip up specialized agents like AI Engineers or AI Community Managers on the fly.",
    url: "https://zenith.ai",
    tags: ["web3", "investment", "multi-agent", "management"],
    category: "web3-agents",
    featured: false
  },
  {
    id: "agent-camp",
    name: "Agent Camp by Polygon's Dabl Club",
    description: "An event designed to provide hands-on learning and mentorship in AI agent development and project building.",
    url: "https://agentcamp.polygon",
    tags: ["web3", "education", "development", "mentorship"],
    category: "web3-agents",
    featured: false
  },
  {
    id: "blitzy",
    name: "Blitzy",
    description: "An AI-powered platform designed to autonomously develop software products based on user-provided specifications. By inputting a natural language description of your application's vision, core functionality, and implementation requirements, Blitzy generates a detailed Product Requirements Document (PRD) and Technical Specification for your review.",
    url: "https://blitzy.ai",
    tags: ["web3", "development", "automation", "specifications"],
    category: "web3-agents",
    featured: false
  },
  {
    id: "smolagent",
    name: "smolagent",
    description: "A lightweight Python library developed by Hugging Face designed to create small, intelligent agents using large language models (LLMs). It provides a straightforward API to enable developers to integrate LLM-based reasoning and action capabilities into their applications.",
    url: "https://smolagent.ai",
    tags: ["web3", "library", "python", "llm"],
    category: "web3-agents",
    featured: false
  },
  {
    id: "lamaa-ai",
    name: "Lamaa AI",
    description: "A Web3-powered AI agent hub designed to transform how developers and businesses approach AI agent development. By leveraging a modular architecture, Lamaa enables anyone to build sophisticated AI agents using pre-designed 'modules'—reusable building blocks that connect seamlessly.",
    url: "https://lamaa.ai",
    tags: ["web3", "development", "modular", "integration"],
    category: "web3-agents",
    featured: false
  },
  {
    id: "openserv",
    name: "OpenServ",
    description: "Building the layer zero of agents. A multi-agent orchestration platform with a custom SDK enabling any agent from any framework and any chain to interoperate.",
    url: "https://openserv.ai",
    tags: ["web3", "orchestration", "sdk", "interoperability"],
    category: "web3-agents",
    featured: false
  },
  {
    id: "schrodinger",
    name: "Schrodinger",
    description: "A path to AGI agent duality. The experiment to bring intelligence and knowledge to social spaces, shaping the human-centric future of AGI powered by LLMs and Eliza @ai16zdao.",
    url: "https://schrodinger.ai",
    tags: ["web3", "agi", "social", "llm"],
    category: "web3-agents",
    featured: false
  },
  {
    id: "olivia-ai",
    name: "Olivia AI",
    description: "Your AI-Powered Telegram Mini App for Smarter Trading. Olivia AI elevates your trading experience with a Telegram AI Mini App that integrates automated take-profit and stop-loss, social sentiment analysis, wallet tracking, news aggregation, algorithmic trading, rug pull detection, and slippage control.",
    url: "https://olivia.ai",
    tags: ["web3", "trading", "telegram", "automation"],
    category: "web3-agents",
    featured: false
  },
  {
    id: "willow-ai",
    name: "Willow AI Assistant",
    description: "An advanced AI-powered tool designed to streamline building operations and facility management. It integrates seamlessly with Willow's digital twin technology, providing smart insights, automation, and real-time responses to enhance operational efficiency in the built environment.",
    url: "https://willow.ai",
    tags: ["web3", "facility-management", "automation", "real-time"],
    category: "web3-agents",
    featured: false
  },
  {
    id: "aixplain",
    name: "aiXplain",
    description: "A platform that enables the creation and deployment of production-ready AI agents. It offers a suite of pre-developed agents designed to simplify development, optimize performance, and ensure scalability.",
    url: "https://aixplain.ai",
    tags: ["web3", "development", "deployment", "scalability"],
    category: "web3-agents",
    featured: false
  },
  {
    id: "themajor-ai",
    name: "TheMajor.ai",
    description: "The Major Protocol creates self-sovereign AI Agents with persistent cross-platform identities, enabling them to form intelligent swarms that collaborate, compete, and generate value across the decentralized web.",
    url: "https://themajor.ai",
    tags: ["web3", "identity", "swarm", "decentralized"],
    category: "web3-agents",
    featured: false
  },
  {
    id: "luna",
    name: "Luna",
    description: "A gentle and kind AI assistant designed to provide accurate and relevant information and solutions.",
    url: "https://luna.ai",
    tags: ["web3", "assistance", "information", "solutions"],
    category: "web3-agents",
    featured: false
  },

  // Podcasts
  {
    id: "jansen-teng-virtuals",
    name: "Inside Virtuals' Meteoric Rise, Race to Billion-Dollar Crypto-AI Agents, Life after AGI",
    description: "Jansen Teng discusses Virtuals' rapid growth and the future of crypto-AI agents",
    url: "https://example.com/jansen-teng-virtuals",
    tags: ["podcast", "virtuals", "crypto-ai", "agi"],
    category: "podcasts",
    featured: false,
    date: "2025-01-11",
    authors: ["Jansen Teng"]
  },
  {
    id: "zerebro-rise",
    name: "Zerebro's PARABOLIC Rise & The Future of Crypto AI Agents",
    description: "Founders Jeffy Yu & Tint discuss Zerebro's growth and the future of crypto AI agents",
    url: "https://example.com/zerebro-rise",
    tags: ["podcast", "zerebro", "crypto-ai", "founders"],
    category: "podcasts",
    featured: false,
    date: "2025-01-09",
    authors: ["Jeffy Yu", "Tint"]
  },
  {
    id: "eliza-rise",
    name: "The Rise of ai16z's Eliza—Crypto × AI Agents, a $2.5B Valuation, Trending Globally on GitHub",
    description: "Shaw discusses Eliza's success and impact on the crypto-AI space",
    url: "https://example.com/eliza-rise",
    tags: ["podcast", "eliza", "ai16z", "crypto-ai"],
    category: "podcasts",
    featured: false,
    date: "2025-01-06",
    authors: ["Shaw"]
  },
  {
    id: "ai-vs-crypto",
    name: "AI vs. Crypto: Clash of Scarcity and Abundance - The Chopping Block",
    description: "Discussion on the intersection and contrast between AI and crypto technologies",
    url: "https://example.com/ai-vs-crypto",
    tags: ["podcast", "ai", "crypto", "technology"],
    category: "podcasts",
    featured: false,
    date: "2025-01-05",
    authors: ["The Chopping Block"]
  },
  {
    id: "ai-trade-cycle",
    name: "Why AI is the Trade of the Cycle w/ Ejaaz",
    description: "Ejaaz discusses why AI represents a significant opportunity in the current market cycle",
    url: "https://example.com/ai-trade-cycle",
    tags: ["podcast", "ai", "trading", "market"],
    category: "podcasts",
    featured: false,
    date: "2025-01-04",
    authors: ["Ejaaz"]
  },
  {
    id: "ai-crypto-bankless",
    name: "Everything You Need to Know About AI & Crypto",
    description: "Comprehensive discussion about the intersection of AI and crypto technologies",
    url: "https://example.com/ai-crypto-bankless",
    tags: ["podcast", "ai", "crypto", "education"],
    category: "podcasts",
    featured: false,
    date: "2024-10-28",
    authors: ["Bankless"]
  },
  {
    id: "crypto-market-state",
    name: "State of The Crypto Market | AI, Memes, and Majors | EP 66",
    description: "Analysis of the current crypto market with focus on AI, memes, and major trends",
    url: "https://example.com/crypto-market-state",
    tags: ["podcast", "crypto", "market", "ai"],
    category: "podcasts",
    featured: false,
    date: "2024-10-27",
    authors: ["Good Game"]
  },
  {
    id: "crypto-ai-definitive",
    name: "Crypto x AI Agents: The Definitive Podcast with Ai16z, Virtuals, MyShell, NOUS, and CENTS",
    description: "Comprehensive discussion with leading companies in the crypto-AI space",
    url: "https://example.com/crypto-ai-definitive",
    tags: ["podcast", "crypto-ai", "industry", "leaders"],
    category: "podcasts",
    featured: false,
    date: "2024-10-23",
    authors: ["Delphi Digital"]
  },
  {
    id: "vertical-ai-agents",
    name: "Vertical AI Agents Could Be 10X Bigger Than SaaS",
    description: "Discussion on the potential scale of vertical AI agents compared to SaaS",
    url: "https://example.com/vertical-ai-agents",
    tags: ["podcast", "ai-agents", "saas", "business"],
    category: "podcasts",
    featured: false,
    date: "2024-10-22",
    authors: ["Y Combinator"]
  },

  // Blogs
  {
    id: "ai-agents-scale-framework",
    name: "AI Agents Need Framework Built for Scale",
    description: "Analysis of the need for scalable frameworks in AI agent development",
    url: "https://example.com/ai-agents-scale-framework",
    tags: ["blog", "ai-agents", "frameworks", "scalability"],
    category: "blogs",
    featured: false,
    date: "2025-02-08",
    authors: ["Delphi Digital"]
  },
  {
    id: "a16z-voice-agents",
    name: "New a16z thesis - An Update on AI Voice Agents",
    description: "Latest insights on AI voice agents from a16z",
    url: "https://example.com/a16z-voice-agents",
    tags: ["blog", "ai-voice", "a16z", "thesis"],
    category: "blogs",
    featured: false,
    date: "2025-01-29",
    authors: ["a16z"]
  },
  {
    id: "virtuals-gaming-insights",
    name: "Summary & Top Insights from Virtuals' Twitter Space on AI Agents in Gaming",
    description: "Key takeaways from Virtuals' discussion on AI agents in gaming",
    url: "https://example.com/virtuals-gaming-insights",
    tags: ["blog", "gaming", "virtuals", "ai-agents"],
    category: "blogs",
    featured: false,
    date: "2025-01-09",
    authors: ["Defi0xJeff"]
  },
  {
    id: "onchain-ai-reading",
    name: "Onchain AI Reading List",
    description: "Comprehensive reading list for onchain AI development",
    url: "https://example.com/onchain-ai-reading",
    tags: ["blog", "onchain", "ai", "reading-list"],
    category: "blogs",
    featured: false,
    date: "2024-12-25",
    authors: ["terrytjw"]
  },
  {
    id: "crypto-ai-newsletter",
    name: "Best Crypto x AI Newsletter",
    description: "Top insights and updates in the crypto-AI space",
    url: "https://example.com/crypto-ai-newsletter",
    tags: ["blog", "crypto", "ai", "newsletter"],
    category: "blogs",
    featured: false,
    date: "2024-12-25",
    authors: ["Chain of Thought"]
  },
  {
    id: "crypto-agentic-community",
    name: "Broader Thesis on Crypto Enabling Funding + Agentic Community Management",
    description: "Analysis of crypto's role in funding and managing agentic communities",
    url: "https://example.com/crypto-agentic-community",
    tags: ["blog", "crypto", "community", "funding"],
    category: "blogs",
    featured: false,
    date: "2024-12-25",
    authors: ["YB Effect"]
  },
  {
    id: "zerebro-playbook",
    name: "The Zerebro Playbook",
    description: "Comprehensive guide to the Zerebro ecosystem",
    url: "https://example.com/zerebro-playbook",
    tags: ["blog", "zerebro", "playbook", "ecosystem"],
    category: "blogs",
    featured: false,
    date: "2024-12-25",
    authors: ["YB Effect"]
  },
  {
    id: "crypto-consumer-ai",
    name: "Crypto x Consumer AI",
    description: "Analysis of consumer applications in crypto-AI space",
    url: "https://example.com/crypto-consumer-ai",
    tags: ["blog", "crypto", "consumer", "ai"],
    category: "blogs",
    featured: false,
    date: "2024-12-25",
    authors: ["Collab+Currency"]
  },
  {
    id: "ai-autonomy-x",
    name: "Chase B: The Dawn of AI Autonomy on X",
    description: "Exploration of AI autonomy in social media platforms",
    url: "https://example.com/ai-autonomy-x",
    tags: ["blog", "ai", "autonomy", "social-media"],
    category: "blogs",
    featured: false,
    date: "2024-12-25",
    authors: ["Chase B"]
  },
  {
    id: "frameworks-20b",
    name: "A Deep Dive into Frameworks: A Sector we think Could Grow to $20b+",
    description: "Analysis of the potential growth in AI framework sector",
    url: "https://example.com/frameworks-20b",
    tags: ["blog", "frameworks", "market-analysis", "growth"],
    category: "blogs",
    featured: false,
    date: "2024-12-25",
    authors: ["DV Memetics"]
  },
  {
    id: "ai-agents-2024-recap",
    name: "AI Agents in 2024: A Recap and What's Next (Part 2/2)",
    description: "Comprehensive review of AI agents in 2024 and future outlook",
    url: "https://example.com/ai-agents-2024-recap",
    tags: ["blog", "ai-agents", "recap", "future"],
    category: "blogs",
    featured: false,
    date: "2024-12-22",
    authors: ["Defi0xJeff"]
  },
  {
    id: "crypto-agentic-economy",
    name: "The Role of Crypto in an Agentic Economy",
    description: "Analysis of crypto's role in the emerging agentic economy",
    url: "https://example.com/crypto-agentic-economy",
    tags: ["blog", "crypto", "agentic", "economy"],
    category: "blogs",
    featured: false,
    date: "2024-12-04",
    authors: ["Robbie Petersen"]
  },
  {
    id: "vertical-apps-ai",
    name: "Vertical Apps x AI",
    description: "Analysis of vertical applications in AI development",
    url: "https://example.com/vertical-apps-ai",
    tags: ["blog", "vertical-apps", "ai", "development"],
    category: "blogs",
    featured: false,
    date: "2024-11-25",
    authors: ["Andrew Chen"]
  },
  {
    id: "simulators",
    name: "Simulators",
    description: "Analysis of simulation technologies in AI development",
    url: "https://example.com/simulators",
    tags: ["blog", "simulation", "ai", "development"],
    category: "blogs",
    featured: false,
    date: "2024-11-25",
    authors: ["LessWrong"]
  },
  {
    id: "agentic-tokens-portfolio",
    name: "terry's portfolio of agentic tokens (23 Nov '24 update)",
    description: "Updated portfolio analysis of agentic tokens",
    url: "https://example.com/agentic-tokens-portfolio",
    tags: ["blog", "tokens", "portfolio", "analysis"],
    category: "blogs",
    featured: false,
    date: "2024-11-23",
    authors: ["terrytjw"]
  },
  {
    id: "agentic-tokens-value",
    name: "how do agentic tokens accrue value?",
    description: "Analysis of value accrual in agentic tokens",
    url: "https://example.com/agentic-tokens-value",
    tags: ["blog", "tokens", "value", "analysis"],
    category: "blogs",
    featured: false,
    date: "2024-11-18",
    authors: ["terrytjw"]
  },
  {
    id: "web2-ai-agents",
    name: "Web2 AI agents landscape",
    description: "Analysis of AI agents in Web2 ecosystem",
    url: "https://example.com/web2-ai-agents",
    tags: ["blog", "web2", "ai-agents", "landscape"],
    category: "blogs",
    featured: false,
    date: "2024-11-17",
    authors: ["0xPrismatic"]
  },
  {
    id: "onchain-ai-thesis-ii",
    name: "the Onchain AI thesis part II - deeper dive",
    description: "In-depth analysis of onchain AI development",
    url: "https://example.com/onchain-ai-thesis-ii",
    tags: ["blog", "onchain", "ai", "thesis"],
    category: "blogs",
    featured: false,
    date: "2024-11-15",
    authors: ["terrytjw"]
  },
  {
    id: "builders-test-prod",
    name: "the best builders test in prod",
    description: "Analysis of production testing in development",
    url: "https://example.com/builders-test-prod",
    tags: ["blog", "development", "testing", "production"],
    category: "blogs",
    featured: false,
    date: "2024-11-15",
    authors: ["terrytjw"]
  },
  {
    id: "attention-utility",
    name: "attention or utility?",
    description: "Analysis of attention vs utility in product development",
    url: "https://example.com/attention-utility",
    tags: ["blog", "attention", "utility", "analysis"],
    category: "blogs",
    featured: false,
    date: "2024-11-14",
    authors: ["kelxyz_"]
  },
  {
    id: "onchain-ai-thesis-i",
    name: "the Onchain AI thesis part I: picking the winners",
    description: "Analysis of promising onchain AI projects",
    url: "https://example.com/onchain-ai-thesis-i",
    tags: ["blog", "onchain", "ai", "thesis"],
    category: "blogs",
    featured: false,
    date: "2024-11-14",
    authors: ["terrytjw"]
  },
  {
    id: "web4-agi",
    name: "Web4: we are AGI",
    description: "Analysis of AGI in Web4 development",
    url: "https://example.com/web4-agi",
    tags: ["blog", "web4", "agi", "development"],
    category: "blogs",
    featured: false,
    date: "2024-11-14",
    authors: ["jyu_eth"]
  },
  {
    id: "uiux-moat-ai",
    name: "UIUX as moat in the age of AI",
    description: "Analysis of UI/UX as competitive advantage in AI era",
    url: "https://example.com/uiux-moat-ai",
    tags: ["blog", "uiux", "ai", "competitive-advantage"],
    category: "blogs",
    featured: false,
    date: "2024-11-13",
    authors: ["terrytjw"]
  },
  {
    id: "hardware-onchain-ai",
    name: "potential hardware angle in the onchain AI meta?",
    description: "Analysis of hardware implications in onchain AI",
    url: "https://example.com/hardware-onchain-ai",
    tags: ["blog", "hardware", "onchain", "ai"],
    category: "blogs",
    featured: false,
    date: "2024-11-13",
    authors: ["terrytjw"]
  },
  {
    id: "future-kols",
    name: "our future KOLs/celebrities/personalities",
    description: "Analysis of future key opinion leaders in digital space",
    url: "https://example.com/future-kols",
    tags: ["blog", "kols", "future", "analysis"],
    category: "blogs",
    featured: false,
    date: "2024-11-12",
    authors: ["terrytjw"]
  },
  {
    id: "zerebro-playbook-bayc",
    name: "The Zerebro Playbook: BAYC of Onchain Agents",
    description: "Analysis of Zerebro's position in onchain agents",
    url: "https://example.com/zerebro-playbook-bayc",
    tags: ["blog", "zerebro", "bayc", "onchain-agents"],
    category: "blogs",
    featured: false,
    date: "2024-11-12",
    authors: ["yb_effect"]
  },
  {
    id: "future-ai-agents-crypto",
    name: "Exploring the Future of AI Agents in Crypto",
    description: "Analysis of AI agents' future in cryptocurrency",
    url: "https://example.com/future-ai-agents-crypto",
    tags: ["blog", "ai-agents", "crypto", "future"],
    category: "blogs",
    featured: false,
    date: "2024-11-12",
    authors: ["Binance Research"]
  },
  {
    id: "onchain-ai-case-study",
    name: "Onchain AI case study: @0xzerebro & @jyu_eth",
    description: "Case study of onchain AI implementation",
    url: "https://example.com/onchain-ai-case-study",
    tags: ["blog", "onchain", "ai", "case-study"],
    category: "blogs",
    featured: false,
    date: "2024-11-10",
    authors: ["terrytjw"]
  },
  {
    id: "pmf-attention-economy",
    name: "pmf redefined in the attention economy",
    description: "Analysis of product-market fit in attention economy",
    url: "https://example.com/pmf-attention-economy",
    tags: ["blog", "pmf", "attention-economy", "analysis"],
    category: "blogs",
    featured: false,
    date: "2024-10-25",
    authors: ["terrytjw"]
  },
  {
    id: "neural-networks-creative",
    name: "Exploration of Neural Networks as Creative Tools",
    description: "Analysis of neural networks in creative applications",
    url: "https://example.com/neural-networks-creative",
    tags: ["blog", "neural-networks", "creative", "analysis"],
    category: "blogs",
    featured: false,
    date: "2024-10-24",
    authors: ["Eclectic Capital"]
  },
  {
    id: "ai-lifetime-opportunity",
    name: "Massive Lifetime Opportunity in AI",
    description: "Analysis of long-term opportunities in AI development",
    url: "https://example.com/ai-lifetime-opportunity",
    tags: ["blog", "ai", "opportunity", "analysis"],
    category: "blogs",
    featured: false,
    date: "2024-09-30",
    authors: ["Chain of Thought"]
  },
  {
    id: "ai16z-flywheel",
    name: "the ai16z flywheel",
    description: "Analysis of ai16z's growth strategy",
    url: "https://example.com/ai16z-flywheel",
    tags: ["blog", "ai16z", "flywheel", "strategy"],
    category: "blogs",
    featured: false,
    date: "N/A",
    authors: ["internetphysics"]
  },
  {
    id: "ico-ai-agents",
    name: "you're staring at your 2017 ico, but for ai agents",
    description: "Analysis of AI agent token offerings",
    url: "https://example.com/ico-ai-agents",
    tags: ["blog", "ico", "ai-agents", "tokens"],
    category: "blogs",
    featured: false,
    date: "N/A",
    authors: ["terrytjw"]
  },
  {
    id: "front-run-big-boys",
    name: "you wanna front run the big boys? well now's your chance",
    description: "Analysis of early opportunities in AI development",
    url: "https://example.com/front-run-big-boys",
    tags: ["blog", "opportunity", "ai", "early-adoption"],
    category: "blogs",
    featured: false,
    date: "N/A",
    authors: ["terrytjw"]
  },
  {
    id: "ai-defi-market-map",
    name: "AI x DeFI Market Map",
    description: "Comprehensive market map of AI in DeFi",
    url: "https://example.com/ai-defi-market-map",
    tags: ["blog", "ai", "defi", "market-map"],
    category: "blogs",
    featured: false,
    date: "2025-02-04",
    authors: ["Kat Tong"]
  },
  {
    id: "freysa-framework",
    name: "Freysa ($FAI) - The first fully autonomous and sovereign AI Agent Framework",
    description: "Analysis of Freysa's autonomous AI framework",
    url: "https://example.com/freysa-framework",
    tags: ["blog", "freysa", "autonomous", "framework"],
    category: "blogs",
    featured: false,
    date: "2025-01-14",
    authors: ["Taran"]
  },
  {
    id: "ai-autonomous-systems",
    name: "AI Agents and Autonomous Systems",
    description: "Analysis of autonomous systems in AI development",
    url: "https://example.com/ai-autonomous-systems",
    tags: ["blog", "ai", "autonomous", "systems"],
    category: "blogs",
    featured: false,
    date: "2025-01-14",
    authors: ["Roberto Talamas"]
  },
  {
    id: "defai-sector-resilience",
    name: "DeFAI Sector Resilience Amid Bearish Market",
    description: "Analysis of DeFAI sector performance in bear market",
    url: "https://example.com/defai-sector-resilience",
    tags: ["blog", "defai", "resilience", "market"],
    category: "blogs",
    featured: false,
    date: "2025-01-14",
    authors: ["0xJeff"]
  },
  {
    id: "unreleased-defai-coins",
    name: "5 Unreleased DeFAI coins on track for $100M+ valuations",
    description: "Analysis of promising unreleased DeFAI tokens",
    url: "https://example.com/unreleased-defai-coins",
    tags: ["blog", "defai", "tokens", "valuation"],
    category: "blogs",
    featured: false,
    date: "2025-01-14",
    authors: ["Xremlin"]
  },
  {
    id: "ai-crypto-america",
    name: "AI, Crypto, and America",
    description: "Analysis of AI and crypto development in America",
    url: "https://example.com/ai-crypto-america",
    tags: ["blog", "ai", "crypto", "america"],
    category: "blogs",
    featured: false,
    date: "2025-01-07",
    authors: ["Derek Edws", "Collab+Currency"]
  },
  {
    id: "virtual-creatorbid-battle",
    name: "VIRTUAL vs CreatorBid: The Battle Begins!",
    description: "Analysis of competition between VIRTUAL and CreatorBid",
    url: "https://example.com/virtual-creatorbid-battle",
    tags: ["blog", "virtual", "creatorbid", "competition"],
    category: "blogs",
    featured: false,
    date: "2025-01-05",
    authors: ["the_smart_ape"]
  },
  {
    id: "defai-new-defi",
    name: "DeFAI is the New DeFi",
    description: "Analysis of DeFAI as the next evolution of DeFi",
    url: "https://example.com/defai-new-defi",
    tags: ["blog", "defai", "defi", "evolution"],
    category: "blogs",
    featured: false,
    date: "2025-01-05",
    authors: ["Defi0xJeff"]
  },
  {
    id: "ai-agent-development",
    name: "AI Agent Development: A Collaborative Exploration, Not Competition",
    description: "Analysis of collaborative approach to AI agent development",
    url: "https://example.com/ai-agent-development",
    tags: ["blog", "ai-agents", "development", "collaboration"],
    category: "blogs",
    featured: false,
    date: "2025-01-01",
    authors: ["ayoubedeth"]
  },
  {
    id: "crypto-ai-thesis",
    name: "Crypto X AI Thesis (Part 1) - We are at a Step Function Moment",
    description: "Analysis of crypto-AI intersection at critical moment",
    url: "https://example.com/crypto-ai-thesis",
    tags: ["blog", "crypto", "ai", "thesis"],
    category: "blogs",
    featured: false,
    date: "2025-01-01",
    authors: ["karsenthil"]
  },
  {
    id: "internet-agents-ii",
    name: "The Internet of Agents — Part 2",
    description: "Analysis of agent-based internet evolution",
    url: "https://example.com/internet-agents-ii",
    tags: ["blog", "agents", "internet", "evolution"],
    category: "blogs",
    featured: false,
    date: "2025-01-01",
    authors: ["Davide Crapis"]
  },
  {
    id: "agentic-rag-survey",
    name: "Agentic Retrieval-Augmented Generation: A Survey on Agentic RAG",
    description: "Comprehensive survey of agentic RAG systems",
    url: "https://example.com/agentic-rag-survey",
    tags: ["blog", "rag", "agents", "survey"],
    category: "blogs",
    featured: false,
    date: "2025-01-01",
    authors: ["Unknown"]
  },
  {
    id: "web3-ai-apps",
    name: "The Rise of Web3 AI Apps",
    description: "Analysis of Web3 AI application development",
    url: "https://example.com/web3-ai-apps",
    tags: ["blog", "web3", "ai", "apps"],
    category: "blogs",
    featured: false,
    date: "2024-12-28",
    authors: ["Defi0xJeff"]
  },
  {
    id: "ai-agent-space-vi",
    name: "Where the AI Agent Space Stands Right Now - Part 6",
    description: "Current state analysis of AI agent space",
    url: "https://example.com/ai-agent-space-vi",
    tags: ["blog", "ai-agents", "space", "analysis"],
    category: "blogs",
    featured: false,
    date: "2024-12-27",
    authors: ["Defi0xJeff"]
  },
  {
    id: "top-ai-content-vi",
    name: "Top 10 Must Read AI Content for this Weekend PT.6",
    description: "Curated list of essential AI content",
    url: "https://example.com/top-ai-content-vi",
    tags: ["blog", "ai", "content", "curation"],
    category: "blogs",
    featured: false,
    date: "2024-12-27",
    authors: ["Defi0xJeff"]
  },
  {
    id: "ai-agents-status",
    name: "AI Agents as Status Seeking Monkeys: A Behavioral Analysis",
    description: "Behavioral analysis of AI agents",
    url: "https://example.com/ai-agents-status",
    tags: ["blog", "ai-agents", "behavior", "analysis"],
    category: "blogs",
    featured: false,
    date: "2024-12-26",
    authors: ["davidwithbull"]
  },
  {
    id: "position-agentic-cycle",
    name: "How to Position Yourself in This Agentic Cycle",
    description: "Guide to positioning in agentic development cycle",
    url: "https://example.com/position-agentic-cycle",
    tags: ["blog", "agentic", "cycle", "positioning"],
    category: "blogs",
    featured: false,
    date: "2024-12-26",
    authors: ["Defi0xJeff"]
  },
  {
    id: "solana-base-revolution",
    name: "From Solana to Base: The AI Agent (3,3) Revolution Begins",
    description: "Analysis of AI agent revolution across chains",
    url: "https://example.com/solana-base-revolution",
    tags: ["blog", "solana", "base", "revolution"],
    category: "blogs",
    featured: false,
    date: "2024-12-25",
    authors: ["Defi0xJeff"]
  },
  {
    id: "game-virtuals-ecosystem",
    name: "G.A.M.E - The AI Infrastructure Powering the $3B Virtuals Ecosystem",
    description: "Analysis of G.A.M.E infrastructure in Virtuals ecosystem",
    url: "https://example.com/game-virtuals-ecosystem",
    tags: ["blog", "game", "virtuals", "infrastructure"],
    category: "blogs",
    featured: false,
    date: "2024-12-25",
    authors: ["JavierAng_"]
  },
  {
    id: "spore-agents-tokens",
    name: "How Spore.fun Agents Issue Tokens Automatically with Anti-Sniper Mechanisms",
    description: "Analysis of Spore.fun's token issuance system",
    url: "https://example.com/spore-agents-tokens",
    tags: ["blog", "spore", "tokens", "anti-sniper"],
    category: "blogs",
    featured: false,
    date: "2024-12-25",
    authors: ["marvin_tong"]
  },
  {
    id: "0xreisearch-framework",
    name: "0xReisearch Framework Documentation",
    description: "Documentation of 0xReisearch framework",
    url: "https://example.com/0xreisearch-framework",
    tags: ["blog", "0xreisearch", "framework", "documentation"],
    category: "blogs",
    featured: false,
    date: "2024-12-15",
    authors: ["0xReisearch"]
  },
  {
    id: "crypto-accelerationism",
    name: "Crypto Enabled Accelerationism Bubble",
    description: "Analysis of accelerationism in crypto development",
    url: "https://example.com/crypto-accelerationism",
    tags: ["blog", "crypto", "accelerationism", "bubble"],
    category: "blogs",
    featured: false,
    date: "2024-11-23",
    authors: ["YB Effect"]
  },
  {
    id: "crypto-consumer-ai-ii",
    name: "Crypto x Consumer AI",
    description: "Analysis of consumer applications in crypto-AI space",
    url: "https://example.com/crypto-consumer-ai-ii",
    tags: ["blog", "crypto", "consumer", "ai"],
    category: "blogs",
    featured: false,
    date: "2024-11-18",
    authors: ["Collab+Currency"]
  },
  {
    id: "ai-autonomy-70m",
    name: "The Dawn of AI Autonomy: How Two AI Agents Created a $70M Cryptocurrency",
    description: "Case study of AI agents creating cryptocurrency",
    url: "https://example.com/ai-autonomy-70m",
    tags: ["blog", "ai", "autonomy", "cryptocurrency"],
    category: "blogs",
    featured: false,
    date: "2024-11-16",
    authors: ["Chase B"]
  },
  {
    id: "zerebro-playbook-bayc-ii",
    name: "The Zerebro Playbook: BAYC of Onchain Agents",
    description: "Analysis of Zerebro's position in onchain agents",
    url: "https://example.com/zerebro-playbook-bayc-ii",
    tags: ["blog", "zerebro", "bayc", "onchain-agents"],
    category: "blogs",
    featured: false,
    date: "2024-11-13",
    authors: ["YB Effect"]
  },
  {
    id: "memecoins-memetic-hygiene",
    name: "Memecoins as memetic hygiene for LLM backrooms",
    description: "Analysis of memecoins in LLM development",
    url: "https://example.com/memecoins-memetic-hygiene",
    tags: ["blog", "memecoins", "llm", "memetic"],
    category: "blogs",
    featured: false,
    date: "2024-10-18",
    authors: ["YB"]
  },
  {
    id: "crpc-protocol",
    name: "The Commit-Reveal Pairwise Comparison Protocol (CRPC)",
    description: "Analysis of CRPC protocol in blockchain development",
    url: "https://example.com/crpc-protocol",
    tags: ["blog", "crpc", "protocol", "blockchain"],
    category: "blogs",
    featured: false,
    date: "2024-10-02",
    authors: ["Tim Cotten"]
  },
  {
    id: "crypto-ai-thesis-i",
    name: "Our Crypto AI Thesis (Part I): The Massive Lifetime Opportunity",
    description: "Analysis of crypto-AI intersection opportunities",
    url: "https://example.com/crypto-ai-thesis-i",
    tags: ["blog", "crypto", "ai", "thesis"],
    category: "blogs",
    featured: false,
    date: "2024-09-30",
    authors: ["Chain of Thought"]
  },
  {
    id: "internet-agents-i",
    name: "The Internet of Agents",
    description: "Analysis of agent-based internet evolution",
    url: "https://example.com/internet-agents-i",
    tags: ["blog", "agents", "internet", "evolution"],
    category: "blogs",
    featured: false,
    date: "2024-03-11",
    authors: ["Davide Crapis"]
  },
  {
    id: "crypto-ai-frameworks",
    name: "An Analytical Comparison for Crypto x AI Frameworks",
    description: "Comparative analysis of crypto-AI frameworks",
    url: "https://example.com/crypto-ai-frameworks",
    tags: ["blog", "crypto", "ai", "frameworks"],
    category: "blogs",
    featured: false,
    date: "2024-01-24",
    authors: ["arndxt_xo"]
  },
  {
    id: "agentic-outlook",
    name: "AGENTIC OUTLOOK 」- v.4",
    description: "Comprehensive outlook on agentic development",
    url: "https://example.com/agentic-outlook",
    tags: ["blog", "agentic", "outlook", "analysis"],
    category: "blogs",
    featured: false,
    date: "2024-01-18",
    authors: ["tombxbt"]
  },
  {
    id: "autonomous-virtual-beings",
    name: "Autonomous Virtual Beings",
    description: "Analysis of autonomous virtual beings development",
    url: "https://example.com/autonomous-virtual-beings",
    tags: ["blog", "autonomous", "virtual", "beings"],
    category: "blogs",
    featured: false,
    date: "2024-01-05",
    authors: ["Tim Cotten"]
  },

  // Hackathons
  {
    id: "worlds-shortest-hackathon",
    name: "The World's Shortest Hackathon",
    description: "2-hour coding challenge with 100 developers and live mentoring from Vercel and NVIDIA experts",
    url: "https://example.com/worlds-shortest-hackathon",
    tags: ["hackathon", "web3", "ai", "sf"],
    category: "hackathons",
    date: "2024-01-16",
    authors: ["San Francisco"]
  },
  {
    id: "cdp-builder-grants",
    name: "CDP Builder Grants - AgentKit Edition",
    description: "Part of Coinbase's Developer Platform, focusing on building with AgentKit",
    url: "https://example.com/cdp-builder-grants",
    tags: ["hackathon", "web3", "ai", "online"],
    category: "hackathons",
    date: "2024-12-11",
    authors: ["Coinbase"]
  },
  {
    id: "starkware-realms-hackathon",
    name: "Starkware x Realms World Agent Hackathon",
    description: "Collaboration between Starkware and Realms World, focusing on building agents in Web3",
    url: "https://example.com/starkware-realms-hackathon",
    tags: ["hackathon", "web3", "ai", "online"],
    category: "hackathons",
    date: "2024-12-18",
    authors: ["Starkware", "Realms World"]
  },
  {
    id: "hackindia-2025",
    name: "HackIndia 2025",
    description: "Multiple events throughout 2025 across 150 universities in India (hybrid format) with grants, mentorship, and career opportunities",
    url: "https://example.com/hackindia-2025",
    tags: ["hackathon", "web3", "ai", "hybrid"],
    category: "hackathons",
    date: "2025-01-01",
    authors: ["India"]
  },
  {
    id: "agent-payment-hackathon",
    name: "Agent to Agent PAYMENT$ Hackathon",
    description: "Build functional agent-to-agent payment systems in hybrid format (Waterloo and virtual)",
    url: "https://example.com/agent-payment-hackathon",
    tags: ["hackathon", "web3", "ai", "hybrid"],
    category: "hackathons",
    date: "2025-01-25",
    authors: ["Kitchener"]
  },
  {
    id: "agentic-ethereum",
    name: "Agentic Ethereum",
    description: "Part of ETHGlobal's hackathon series, focusing on agent-based applications on Ethereum",
    url: "https://example.com/agentic-ethereum",
    tags: ["hackathon", "web3", "ai", "online"],
    category: "hackathons",
    date: "2025-01-31",
    authors: ["ETHGlobal"]
  },
  {
    id: "sozu-haus-denver",
    name: "Sozu Haus Denver",
    description: "Coincides with ETHDenver",
    url: "https://example.com/sozu-haus-denver",
    tags: ["hackathon", "web3", "ai", "denver"],
    category: "hackathons",
    date: "2025-02-22",
    authors: ["Denver"]
  },
  {
    id: "ethdenver-2025",
    name: "ETHDenver 2025",
    description: "3-4 day hackathon for Ethereum developers with seminars, discussions, and masterclasses",
    url: "https://example.com/ethdenver-2025",
    tags: ["hackathon", "web3", "ai", "denver"],
    category: "hackathons",
    date: "2025-02-23",
    authors: ["ETHDenver"]
  },
  {
    id: "press-start-shipathon",
    name: "Press Start AI Agent SHIP-A-THON",
    description: "Focus on shipping AI agent products",
    url: "https://example.com/press-start-shipathon",
    tags: ["hackathon", "ai", "online"],
    category: "hackathons",
    date: "2025-03-03",
    authors: ["Press Start"]
  },
  {
    id: "deai-bootcamp",
    name: "DEAI Bootcamp by Encode",
    description: "Educational bootcamp format focusing on decentralized AI development",
    url: "https://example.com/deai-bootcamp",
    tags: ["hackathon", "web3", "ai", "online"],
    category: "hackathons",
    date: "2025-03-03",
    authors: ["Encode"]
  },
  {
    id: "madrid-web3-ai-hackathon",
    name: "Madrid Web3 + AI Hackathon",
    description: "Organized by Qubic and Vottun",
    url: "https://example.com/madrid-web3-ai-hackathon",
    tags: ["hackathon", "web3", "ai", "madrid"],
    category: "hackathons",
    date: "2025-03-22",
    authors: ["Madrid"]
  },
  {
    id: "farcon-builders-day",
    name: "FarCon | Builders Day",
    description: "One-day builder focused event, part of FarCon NYC",
    url: "https://example.com/farcon-builders-day",
    tags: ["hackathon", "web3", "ai", "nyc"],
    category: "hackathons",
    date: "2025-05-01",
    authors: ["FarCon"]
  },
  {
    id: "easya-consensus-hackathon",
    name: "EasyA Consensus Hackathon",
    description: "Mentorship and networking with top investors. Past winners secured funding from leading VCs",
    url: "https://example.com/easya-consensus-hackathon",
    tags: ["hackathon", "web3", "ai", "hong-kong"],
    category: "hackathons",
    date: "2025-05-14",
    authors: ["EasyA"]
  },
  {
    id: "mode-ai-agent-hackathon",
    name: "Mode AI Agent Hackathon Sprint 2",
    description: "Focus on AI agents in Web3, organized by Mode Network",
    url: "https://example.com/mode-ai-agent-hackathon",
    tags: ["hackathon", "web3", "ai", "online"],
    category: "hackathons",
    date: "TBA",
    authors: ["Mode Network"]
  },
  {
    id: "alliance-1day-event",
    name: "Alliance 1-Day Event with ai16z and Solana",
    description: "Collaborative event with ai16z and Solana",
    url: "https://example.com/alliance-1day-event",
    tags: ["hackathon", "web3", "ai", "online"],
    category: "hackathons",
    date: "2025",
    authors: ["Alliance", "ai16z", "Solana"]
  },
  {
    id: "alliance-global-hackathon",
    name: "Alliance 2-Week Global Hackathon",
    description: "Global participation encouraged",
    url: "https://example.com/alliance-global-hackathon",
    tags: ["hackathon", "web3", "ai", "online"],
    category: "hackathons",
    date: "2025",
    authors: ["Alliance"]
  },
  {
    id: "vault-hacker-house",
    name: "The Vault: AI Agent Hacker House",
    description: "Collaboration between Eliza Labs & EigenLayer, focus on AI agent development",
    url: "https://example.com/vault-hacker-house",
    tags: ["hackathon", "web3", "ai", "hybrid"],
    category: "hackathons",
    date: "2025-02-22",
    authors: ["Eliza Labs", "EigenLayer"]
  },
  {
    id: "raidguild-herdao-hackathon",
    name: "RaidGuild x H.E.R. DAO Hacker House ETHdenver 2025",
    description: "Collaborative event between RaidGuild and H.E.R. DAO, part of ETHDenver 2025",
    url: "https://example.com/raidguild-herdao-hackathon",
    tags: ["hackathon", "web3", "ai", "denver"],
    category: "hackathons",
    date: "2025-02-25",
    authors: ["RaidGuild", "H.E.R. DAO"]
  },
  {
    id: "super-agent-hackathon",
    name: "Super Agent Hackathon",
    description: "Organized by Story Protocol, focus on agent development",
    url: "https://example.com/super-agent-hackathon",
    tags: ["hackathon", "ai", "online"],
    category: "hackathons",
    date: "2025-02-26",
    authors: ["Story Protocol"]
  },
  {
    id: "avail-unification-house",
    name: "Avail Unification House",
    description: "Focus on Avail ecosystem",
    url: "https://example.com/avail-unification-house",
    tags: ["hackathon", "web3", "ai", "hybrid"],
    category: "hackathons",
    date: "2025-02-26",
    authors: ["Avail"]
  },
  {
    id: "ethsf-hackathon",
    name: "ETHSF Hackathon",
    description: "Major Ethereum hackathon",
    url: "https://example.com/ethsf-hackathon",
    tags: ["hackathon", "web3", "ai", "sf"],
    category: "hackathons",
    date: "2025-03-10",
    authors: ["ETHSF"]
  },
  {
    id: "just-frame-it",
    name: "JUST FRAME IT",
    description: "Multi-month event organized by Builders Garden",
    url: "https://example.com/just-frame-it",
    tags: ["hackathon", "web3", "ai", "hybrid"],
    category: "hackathons",
    date: "2025-04-01",
    authors: ["Builders Garden"]
  },
  {
    id: "buidl-ai-2025",
    name: "BUIDL AI 2025 Hackathon",
    description: "Part of BUIDL Asia series",
    url: "https://example.com/buidl-ai-2025",
    tags: ["hackathon", "web3", "ai", "hybrid"],
    category: "hackathons",
    date: "2025-04-11",
    authors: ["BUIDL Asia"]
  }
];

// Tutorials
export const tutorials: Tool[] = [
  {
    id: "evaluating-ai-agents",
    name: "Evaluating AI Agents",
    description: "A hands-on course that teaches you how to systematically assess and enhance the performance of your AI agents. Learn to add observability for debugging, set up structured evaluations with the right metrics and evaluators, and iterate through experiments to optimize both individual components and end-to-end performance.",
    url: "https://example.com/evaluating-ai-agents",
    tags: ["Debugging", "AI Evaluation", "Observability", "Performance Metrics"],
    category: "tutorials",
    featured: true,
    authors: ["John Gilhuly", "Aman Khan"],
    date: "2025-02-20",
    frameworks: ["Arize"]
  },
  {
    id: "build-ai-agents-290-tools",
    name: "How to Easily Build AI Agents with OVER 290 Tools",
    description: "DAIR.AI aims to democratize AI research, education, and technologies. Our mission is to enable the next generation of AI innovators and creators.",
    url: "https://example.com/build-ai-agents",
    tags: ["AI", "Education", "Innovation"],
    category: "tutorials",
    featured: false,
    authors: ["Tyler AI"],
    date: "2025-02-19",
    frameworks: ["crewai"]
  },
  {
    id: "learn-generative-ai",
    name: "Learn - Generative AI",
    description: "A hands-on repository that empowers developers to build intelligent applications using Langchain. It features concise tutorials and code samples covering key components like ChatModels, Prompt Templates, Chains, and Retrieval-Augmented Generation for advanced conversational AI, text processing, and summarization.",
    url: "https://example.com/learn-generative-ai",
    tags: ["Tutorial", "Generative AI", "Langchain", "Conversational AI"],
    category: "tutorials",
    featured: false,
    authors: ["M. Ahsaan Abbasi"],
    date: "2025-02-13",
    frameworks: ["LangChain", "PineCone", "ChromaDB"]
  },
  {
    id: "building-ai-agents-bittensor",
    name: "Building AI Agents on Bittensor",
    description: "A guide demonstrating how to quickly and easily create AI agents on the Bittensor network, showcasing the platform's accessibility and developer-friendly features.",
    url: "https://example.com/building-ai-agents-bittensor",
    tags: ["Tutorial", "Bittensor", "Quick Start", "Blockchain"],
    category: "tutorials",
    featured: false,
    authors: ["EternalAI"],
    date: "2025-01-01",
    frameworks: ["Bittensor"]
  },
  {
    id: "eliza-framework-explanation",
    name: "How Eliza Framework Works - Simple Explanation",
    description: "A clear and simple explanation of how the ai16z DAO's Eliza framework functions, breaking down its core concepts and architecture for better understanding.",
    url: "https://example.com/eliza-framework",
    tags: ["Tutorial", "Eliza", "Explanation", "ai16z"],
    category: "tutorials",
    featured: false,
    authors: ["Cygaar"],
    date: "2024-12-31",
    frameworks: ["Eliza"]
  },
  {
    id: "create-ai-agents-from-scratch",
    name: "How To Create Ai Agents From Scratch (CrewAI, Zapier, Cursor)",
    description: "João Moura, CEO of Crew AI, where we dive deep into how to build AI agent systems ranging from simple lead enrichment to complex content generation workflows. The tutorial covers both no-code and code-based approaches, showing how to create agents that can research, analyze, and generate content autonomously.",
    url: "https://example.com/create-ai-agents",
    tags: ["crewAI", "Zapier", "AI Automation", "Multi-Agent Systems"],
    category: "tutorials",
    featured: false,
    authors: ["João Moura", "Greg Isenberg"],
    date: "2024-12-28",
    frameworks: ["Crewai"]
  },
  {
    id: "dair-ai-academy",
    name: "DAIR.AI Academy",
    description: "DAIR.AI aims to democratize AI research, education, and technologies. Our mission is to enable the next generation of AI innovators and creators.",
    url: "https://example.com/dair-ai-academy",
    tags: ["AI", "Education", "Innovation"],
    category: "tutorials",
    featured: false,
    authors: ["DAIR.AI"],
    date: "2024-12-23",
    frameworks: ["General"]
  },
  {
    id: "zerepy-eternalai",
    name: "Use ZerePy framework with EternalAI API",
    description: "Step-by-step guide to integrate ZerePy framework with EternalAI's decentralized API for building Twitter bots with onchain AI capabilities.",
    url: "https://example.com/zerepy-eternalai",
    tags: ["ZerePy", "EternalAI", "Twitter", "Base"],
    category: "tutorials",
    featured: false,
    authors: ["EternalAI"],
    date: "2024-12-22",
    frameworks: ["ZerePy"]
  },
  {
    id: "eliza-deepseek",
    name: "Build Unstoppable Eliza Agents with DeepSeek v3",
    description: "Build a decentralized Eliza agent using DeepSeek v3 AI model with EternalAI's decentralized inference, running on Base blockchain.",
    url: "https://example.com/eliza-deepseek",
    tags: ["Eliza", "DeepSeek", "Base", "EternalAI"],
    category: "tutorials",
    featured: false,
    authors: ["EternalAI"],
    date: "2024-12-21",
    frameworks: ["Eliza"]
  },
  {
    id: "zerepy-walkthrough",
    name: "ZerePy Framework Walkthrough",
    description: "A comprehensive walkthrough of ZerePy framework, showing how to launch personalized AI agents that can post on social platforms. Includes setup instructions for X API keys, LLM integration, and agent configuration. Features one-click deployment via Replit.",
    url: "https://example.com/zerepy-walkthrough",
    tags: ["ZerePy", "Tutorial", "Social AI"],
    category: "tutorials",
    featured: false,
    authors: ["Ayoubedeth"],
    date: "2024-12-21",
    frameworks: ["ZerePy"]
  },
  {
    id: "ai-agent-demo-days",
    name: "AI Agent Demo Days Episode 1",
    description: "13+ teams demonstrated their AI agent-related projects in this comprehensive showcase event.",
    url: "https://example.com/ai-agent-demo-days",
    tags: ["Demo", "Showcase", "Community"],
    category: "tutorials",
    featured: false,
    authors: ["Nader Dabit"],
    date: "2024-12-20",
    frameworks: ["General"]
  },
  {
    id: "eliza-personality",
    name: "Building an AI Agent with your own personality using Eliza",
    description: "Zero to live in 10 minutes live coding from scratch Export your personality from x, PDFs, videos, markdown, or images",
    url: "https://example.com/eliza-personality",
    tags: ["Quick Start", "Eliza", "Personality", "Social Media"],
    category: "tutorials",
    featured: false,
    authors: ["Nader Dabit"],
    date: "2024-12-20",
    frameworks: ["Eliza"]
  },
  {
    id: "rag-agent-rig",
    name: "Building a Simple RAG Agent with Rig for PDF Files",
    description: "Tutorial demonstrating how to build a Retrieval-Augmented Generation (RAG) agent using Rig framework to interface with PDF files.",
    url: "https://example.com/rag-agent-rig",
    tags: ["RAG", "PDF", "Tutorial", "Rig", "Document Processing"],
    category: "tutorials",
    featured: false,
    authors: ["0thTachi"],
    date: "2024-12-20",
    frameworks: ["Rig"]
  },
  {
    id: "llm-selection",
    name: "Which LLM should I use for my AI agent?",
    description: "A comprehensive guide on choosing the right LLM for AI agent development, discussing various models and their use cases.",
    url: "https://example.com/llm-selection",
    tags: ["LLM", "Guide", "Model Selection"],
    category: "tutorials",
    featured: false,
    authors: ["jlwhoo7"],
    date: "2024-12-17",
    frameworks: ["General"]
  },
  {
    id: "twitter-agent-eliza",
    name: "Twitter Agent Quickstart with Eliza",
    description: "Beginner-friendly guide to creating Twitter bots using the Eliza framework, covering authentication, posting, and interaction features.",
    url: "https://example.com/twitter-agent-eliza",
    tags: ["Twitter", "Social Media", "Quick Start"],
    category: "tutorials",
    featured: false,
    authors: ["Degenllama"],
    date: "2024-12-04",
    frameworks: ["Eliza"]
  },
  {
    id: "social-ai-agent",
    name: "How to Build a Social AI Agent in 15 minutes with X, Telegram, Onchain Capabilities",
    description: "Quick guide to creating a social media AI agent with cross-platform capabilities, featuring X and Telegram integration using Eliza.",
    url: "https://example.com/social-ai-agent",
    tags: ["Social Media", "Telegram", "X", "Quick Start"],
    category: "tutorials",
    featured: false,
    authors: ["Nader Dabit"],
    date: "2024-12-03",
    frameworks: ["Eliza"]
  },
  {
    id: "onchain-ai-agent",
    name: "Onchain AI Agent Development",
    description: "A comprehensive guide on developing AI agents that interact with the blockchain, covering topics such as smart contracts, decentralized applications, and blockchain-based decision-making.",
    url: "https://example.com/onchain-ai-agent",
    tags: ["Blockchain", "AI", "Smart Contracts", "Decentralized Applications"],
    category: "tutorials",
    featured: false,
    authors: ["AI Engineer"],
    date: "2024-11-30",
    frameworks: ["Solidity", "JavaScript"]
  },
  {
    id: "chatgpt-prompt-engineering",
    name: "ChatGPT Prompt Engineering for Developers",
    description: "A clear and simple explanation of how ChatGPT Prompt Engineering for Developers empowers you to harness large language models, breaking down the core techniques of prompt engineering and practical API integrations for better understanding.",
    url: "https://example.com/chatgpt-prompt-engineering",
    tags: ["Tutorial", "ChatGPT", "Prompt Engineering", "LLM", "OpenAI API"],
    category: "tutorials",
    featured: false,
    authors: ["Isa Fulford", "Andrew Ng"],
    date: "2023-12-10",
    frameworks: ["General"]
  }
];

// Combine all tools and tutorials
export const allTools: Tool[] = [...tools, ...tutorials];