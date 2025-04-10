'use client';

import { useState, useRef, useEffect } from 'react';
import { X, Send, Brain, Sparkles, Bot, MessageSquare, ExternalLink } from 'lucide-react';
import { motion } from 'framer-motion';
import { Tool, Category } from '../types';

// Initialize embeddings for tools and categories
const initializeEmbeddings = async (tools: Tool[], categories: Category[]) => {
  // Create embeddings for tools
  const toolEmbeddings = await Promise.all(
    tools.map(async (tool) => {
      const text = `${tool.name} ${tool.description} ${tool.tags.join(' ')} ${tool.category}`;
      const embedding = await getEmbedding(text);
      return { ...tool, embedding };
    })
  );

  // Create embeddings for categories
  const categoryEmbeddings = await Promise.all(
    categories.map(async (category) => {
      const text = `${category.name} ${category.description}`;
      const embedding = await getEmbedding(text);
      return { ...category, embedding };
    })
  );

  return { toolEmbeddings, categoryEmbeddings };
};

// Get embedding for text using OpenAI API
const getEmbedding = async (text: string): Promise<number[]> => {
  try {
    const response = await fetch('https://api.openai.com/v1/embeddings', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${process.env.NEXT_PUBLIC_OPENAI_API_KEY}`,
      },
      body: JSON.stringify({
        model: 'text-embedding-ada-002',
        input: text,
      }),
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
    return data.data[0].embedding;
  } catch (error) {
    console.error('Error getting embedding:', error);
    return [];
  }
};

// Calculate cosine similarity between two vectors
const cosineSimilarity = (a: number[], b: number[]): number => {
  if (a.length !== b.length) return 0;
  
  const dotProduct = a.reduce((sum, val, i) => sum + val * b[i], 0);
  const magnitudeA = Math.sqrt(a.reduce((sum, val) => sum + val * val, 0));
  const magnitudeB = Math.sqrt(b.reduce((sum, val) => sum + val * val, 0));
  
  return dotProduct / (magnitudeA * magnitudeB);
};

interface Message {
  role: 'user' | 'assistant';
  content: string;
  id: string;
  suggestions?: {
    tools: Tool[];
    categories: Category[];
  };
}

interface AIMentorProps {
  onClose: () => void;
  tools: Tool[];
  categories: Category[];
  onSelectCategory: (category: string | null) => void;
}

export default function AIMentor({ onClose, tools, categories, onSelectCategory }: AIMentorProps) {
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [showLevelButtons, setShowLevelButtons] = useState(false);
  const [showTopicButtons, setShowTopicButtons] = useState(false);
  const [toolEmbeddings, setToolEmbeddings] = useState<Array<Tool & { embedding: number[] }>>([]);
  const [categoryEmbeddings, setCategoryEmbeddings] = useState<Array<Category & { embedding: number[] }>>([]);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  // Initialize embeddings when component mounts
  useEffect(() => {
    const init = async () => {
      const { toolEmbeddings, categoryEmbeddings } = await initializeEmbeddings(tools, categories);
      setToolEmbeddings(toolEmbeddings);
      setCategoryEmbeddings(categoryEmbeddings);
    };
    init();
  }, [tools, categories]);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const isInitialGreeting = (text: string): boolean => {
    // List of basic greetings
    const greetings = [
      'hi', 'hello', 'hey', 'how are you', 'what\'s up', 'good morning', 'good afternoon',
      'good evening', 'nice to meet you', 'how\'s it going', 'how do you do', 'what\'s new',
      'long time no see', 'good to see you'
    ];

    const lowerText = text.toLowerCase().trim();
    
    // Check if it's exactly a greeting or starts with a greeting
    return greetings.some(greeting => 
      lowerText === greeting ||
      lowerText.startsWith(greeting + ' ') ||
      lowerText.endsWith(' ' + greeting)
    );
  };

  const findRelevantTools = async (query: string, assistantResponse?: string): Promise<Tool[]> => {
    // Skip suggestions only for the initial greeting
    if (messages.length === 0 && isInitialGreeting(query)) {
      return [];
    }

    // Combine user query and assistant response for better context
    const searchText = assistantResponse ? `${query} ${assistantResponse}` : query;
    
    // Get embedding for the search text
    const searchEmbedding = await getEmbedding(searchText);
    
    if (searchEmbedding.length === 0) return [];

    // Calculate similarity scores for all tools
    const scoredTools = toolEmbeddings.map(tool => ({
      tool,
      score: cosineSimilarity(searchEmbedding, tool.embedding)
    }));

    // Sort by score and get top matches
    return scoredTools
      .sort((a, b) => b.score - a.score)
      .filter(item => item.score > 0.5) // Only include tools with good similarity
      .slice(0, 3)
      .map(item => ({
        id: item.tool.id,
        name: item.tool.name,
        description: item.tool.description,
        url: item.tool.url,
        category: item.tool.category,
        tags: item.tool.tags
      }));
  };

  const findRelevantCategories = async (query: string, assistantResponse?: string): Promise<Category[]> => {
    // Skip suggestions only for the initial greeting
    if (messages.length === 0 && isInitialGreeting(query)) {
      return [];
    }

    // Combine user query and assistant response for better context
    const searchText = assistantResponse ? `${query} ${assistantResponse}` : query;
    
    // Get embedding for the search text
    const searchEmbedding = await getEmbedding(searchText);
    
    if (searchEmbedding.length === 0) return [];

    // Calculate similarity scores for all categories
    const scoredCategories = categoryEmbeddings.map(category => ({
      category,
      score: cosineSimilarity(searchEmbedding, category.embedding)
    }));

    // Sort by score and get top matches
    return scoredCategories
      .sort((a, b) => b.score - a.score)
      .filter(item => item.score > 0.5) // Only include categories with good similarity
      .slice(0, 2)
      .map(item => ({
        id: item.category.id,
        name: item.category.name,
        description: item.category.description,
        icon: item.category.icon,
        color: item.category.color
      }));
  };

  const handleLevelSelect = (level: string) => {
    const levelMessage = `I am a ${level}`;
    setInput(levelMessage);
    setShowLevelButtons(false);
    handleSend(levelMessage);
  };

  const handleTopicSelect = (option: string) => {
    const topicMessage = `I would like to ${option}`;
    setInput(topicMessage);
    setShowTopicButtons(false);
    handleSend(topicMessage);
  };

  const handleSend = async (customMessage?: string) => {
    const messageToSend = customMessage || input.trim();
    if (!messageToSend || isLoading) return;

    // Hide all buttons when sending a new message
    setShowLevelButtons(false);
    setShowTopicButtons(false);
    setInput('');
    
    // Add user message first
    setMessages(prev => [...prev, { 
      role: 'user', 
      content: messageToSend,
      id: Date.now().toString()
    }]);
    
    setIsLoading(true);

    try {
      const response = await fetch('https://api.openai.com/v1/chat/completions', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${process.env.NEXT_PUBLIC_OPENAI_API_KEY}`,
        },
        body: JSON.stringify({
          model: 'gpt-3.5-turbo',
          messages: [
            {
              role: 'system',
              content: `You are an AI Mentor who knows everything about the latest AI and Web3 technologies. You're like a knowledgeable friend who makes learning fun and easy. Here's how you roll:

1. FIRST INTERACTION:
   - ALWAYS start with a friendly greeting like "Hey buddy!" or "GM buddy!"
   - Be warm and welcoming
   - Make the user feel comfortable

2. EXPERIENCE LEVEL CHECK:
   - For ANY technical question, ALWAYS ask about their experience level FIRST
   - Use this EXACT format: "Would you like me to explain this as if you're:
     * A beginner (like you're 10 years old - super simple)
     * An intermediate (some AI knowledge)
     * An expert (deep technical details)"
   - Wait for their level selection before explaining
   - Adapt your explanation to their chosen level

3. EXPLANATION:
   - After they select their level, provide a clear explanation
   - Use examples and analogies for beginners
   - Include technical details for experts
   - Keep it engaging and interactive

4. FOLLOW-UP OPTIONS:
   - After explaining, ALWAYS offer these options:
     * "Would you like to explore more about this topic?"
     * "Should I show you some practical examples?"
     * "Would you like to move on to something else?"
   - Wait for their choice before proceeding

5. SUGGESTIONS:
   - After explaining a topic, suggest relevant tools or categories
   - Make suggestions based on their experience level
   - Keep suggestions relevant to the current discussion

Remember:
- Always start with a warm greeting
- ALWAYS check their knowledge level first
- Wait for their level selection before explaining
- Offer follow-up options after each explanation
- Keep the conversation natural and friendly
- Make complex topics simple and fun`
            },
            ...messages.map(msg => ({ role: msg.role, content: msg.content })),
            { role: 'user', content: messageToSend }
          ],
          temperature: 0.7,
        }),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();
      
      if (!data.choices || !data.choices[0] || !data.choices[0].message) {
        throw new Error('Invalid response format from OpenAI');
      }

      const assistantMessage = data.choices[0].message.content;
      
      // Find relevant tools and categories using RAG approach
      const relevantTools = await findRelevantTools(messageToSend, assistantMessage);
      const relevantCategories = await findRelevantCategories(messageToSend, assistantMessage);
      
      setMessages(prev => [...prev, { 
        role: 'assistant', 
        content: assistantMessage,
        id: (Date.now() + 1).toString(),
        suggestions: {
          tools: relevantTools,
          categories: relevantCategories
        }
      }]);

      // Check if the message contains level selection prompt
      if (assistantMessage.toLowerCase().includes('beginner') && 
          assistantMessage.toLowerCase().includes('intermediate') && 
          assistantMessage.toLowerCase().includes('expert')) {
        setShowLevelButtons(true);
      } else if (assistantMessage.toLowerCase().includes('explore') || 
                 assistantMessage.toLowerCase().includes('example')) {
        setShowTopicButtons(true);
      }
    } catch (error) {
      console.error('Error:', error);
      setMessages(prev => [...prev, { 
        role: 'assistant', 
        content: 'Sorry, I encountered an error. Please try again.',
        id: (Date.now() + 1).toString()
      }]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50">
      <div className="relative bg-white rounded-2xl shadow-2xl w-full max-w-3xl overflow-hidden">
        {/* Header */}
        <div className="relative p-6 border-b border-slate-200">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="relative">
                <div className="absolute inset-0 bg-blue-100 rounded-full blur-lg" />
                <Brain className="h-8 w-8 text-blue-500" />
              </div>
              <div>
                <h2 className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600">
                  AI Mentor
                </h2>
                <p className="text-sm text-slate-500">Your personal AI guide - Ask me anything about AI!</p>
              </div>
            </div>
            <button 
              onClick={onClose}
              className="p-2 rounded-full hover:bg-slate-100 transition-colors"
            >
              <X className="h-5 w-5 text-slate-500" />
            </button>
          </div>
        </div>

        {/* Messages container */}
        <div className="h-[500px] overflow-y-auto p-6 space-y-4">
          {messages.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full text-center">
              <div className="mb-4">
                <div className="relative">
                  <div className="absolute inset-0 bg-blue-100 rounded-full blur-lg" />
                  <MessageSquare className="h-12 w-12 text-blue-500 relative" />
                </div>
              </div>
              <h3 className="text-lg font-semibold text-slate-700 mb-2">
                Start a Conversation
              </h3>
              <p className="text-slate-500 max-w-sm">
                Ask me anything about AI tools, development, or best practices. I'm here to help!
              </p>
            </div>
          ) : (
            <div className="space-y-4">
              {messages.map((message) => (
                <div
                  key={message.id}
                  className={`flex ${message.role === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  <div className={`max-w-[80%] ${message.role === 'user' ? 'ml-4' : 'mr-4'}`}>
                    <div className={`flex items-start gap-2 ${message.role === 'user' ? 'flex-row-reverse' : ''}`}>
                      <div className={`p-2 rounded-full ${message.role === 'user' ? 'bg-blue-100' : 'bg-purple-100'}`}>
                        {message.role === 'user' ? (
                          <Sparkles className="h-4 w-4 text-blue-500" />
                        ) : (
                          <Bot className="h-4 w-4 text-purple-500" />
                        )}
                      </div>
                      <div className={`p-4 rounded-2xl ${
                        message.role === 'user'
                          ? 'bg-blue-500 text-white rounded-tr-none'
                          : 'bg-slate-100 text-slate-800 rounded-tl-none'
                      }`}>
                        <p className="text-sm leading-relaxed whitespace-pre-wrap">{message.content}</p>
                        
                        {/* Compact Suggestions */}
                        {message.role === 'assistant' && message.suggestions && 
                         (message.suggestions.tools.length > 0 || message.suggestions.categories.length > 0) && (
                          <div className="mt-3 pt-3 border-t border-slate-200">
                            <div className="flex flex-wrap gap-2">
                              {message.suggestions.tools.map(tool => (
                                <a
                                  key={tool.id}
                                  href={tool.url}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="flex items-center gap-1.5 px-2.5 py-1.5 bg-white rounded-lg border border-slate-200 hover:border-blue-500 transition-colors text-xs"
                                >
                                  <span className="font-medium text-slate-800">{tool.name}</span>
                                  <ExternalLink className="h-3 w-3 text-slate-400" />
                                </a>
                              ))}
                              {message.suggestions.categories.map(category => (
                                <button
                                  key={category.id}
                                  onClick={() => {
                                    onSelectCategory(category.id);
                                    onClose();
                                  }}
                                  className="flex items-center gap-1.5 px-2.5 py-1.5 bg-white rounded-lg border border-slate-200 hover:border-purple-500 transition-colors text-xs"
                                >
                                  <span className="font-medium text-slate-800">{category.name}</span>
                                  <ExternalLink className="h-3 w-3 text-slate-400" />
                                </button>
                              ))}
                            </div>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
              {showLevelButtons && (
                <motion.div 
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="flex justify-end gap-2 mt-4"
                >
                  <button
                    onClick={() => handleLevelSelect('beginner')}
                    className="px-4 py-2 bg-blue-500 text-white rounded-xl hover:bg-blue-600 transition-colors"
                  >
                    Beginner
                  </button>
                  <button
                    onClick={() => handleLevelSelect('intermediate')}
                    className="px-4 py-2 bg-purple-500 text-white rounded-xl hover:bg-purple-600 transition-colors"
                  >
                    Intermediate
                  </button>
                  <button
                    onClick={() => handleLevelSelect('expert')}
                    className="px-4 py-2 bg-indigo-500 text-white rounded-xl hover:bg-indigo-600 transition-colors"
                  >
                    Expert
                  </button>
                </motion.div>
              )}
              {showTopicButtons && (
                <motion.div 
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="flex justify-end gap-2 mt-4"
                >
                  <button
                    onClick={() => handleTopicSelect('explore more topics')}
                    className="px-4 py-2 bg-green-500 text-white rounded-xl hover:bg-green-600 transition-colors"
                  >
                    Explore More Topics
                  </button>
                  <button
                    onClick={() => handleTopicSelect('see some examples')}
                    className="px-4 py-2 bg-yellow-500 text-white rounded-xl hover:bg-yellow-600 transition-colors"
                  >
                    Show Examples
                  </button>
                  <button
                    onClick={() => handleTopicSelect('move on to something else')}
                    className="px-4 py-2 bg-red-500 text-white rounded-xl hover:bg-red-600 transition-colors"
                  >
                    Move On
                  </button>
                </motion.div>
              )}
            </div>
          )}
          {isLoading && (
            <div className="flex items-center gap-2 text-slate-500">
              <Brain className="h-5 w-5" />
              <span>Thinking...</span>
            </div>
          )}
          <div ref={messagesEndRef} />
        </div>

        {/* Input area */}
        <div className="p-6 border-t border-slate-200">
          <div className="flex items-center gap-3">
            <div className="flex-1 relative">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && handleSend()}
                placeholder="Type your message here..."
                className="w-full bg-white border border-slate-200 rounded-xl px-4 py-3 pr-12 text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-transparent"
              />
              <div className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400">
                <MessageSquare className="h-5 w-5" />
              </div>
            </div>
            <button
              onClick={() => handleSend()}
              disabled={isLoading}
              className={`p-3 rounded-xl ${
                isLoading
                  ? 'bg-slate-100 text-slate-400'
                  : 'bg-gradient-to-r from-blue-500 to-purple-500 text-white'
              }`}
            >
              <Send className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}