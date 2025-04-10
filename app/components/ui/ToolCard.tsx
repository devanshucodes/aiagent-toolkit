'use client';

import { motion } from 'framer-motion';
import { Star, ExternalLink } from 'lucide-react';
import { Tool } from '@/app/types';

interface ToolCardProps {
  tool: Tool;
}

export default function ToolCard({ tool }: ToolCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      whileHover={{ 
        y: -5, 
        boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
      }}
      className="group relative bg-white/90 backdrop-blur-sm rounded-xl p-6 border border-slate-200 hover:border-blue-200 transition-all duration-300 overflow-visible"
    >
      {/* Gradient background effect */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 to-purple-50/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl" />
      
      {/* Featured badge */}
      {tool.featured && (
        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          className="absolute -top-3 -right-3 bg-gradient-to-r from-amber-400 to-yellow-500 text-white text-xs px-3 py-1 rounded-full flex items-center shadow-lg z-10"
        >
          <Star className="h-3 w-3 mr-1" /> Featured
        </motion.div>
      )}
      
      {/* Content */}
      <div className="relative z-10">
        <motion.h3 
          className="text-xl font-semibold mb-3 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600 group-hover:from-blue-700 group-hover:to-purple-700 transition-all duration-300"
          whileHover={{ scale: 1.02 }}
        >
          {tool.name}
        </motion.h3>
        
        <p className="text-slate-600 mb-4 group-hover:text-slate-800 transition-colors duration-300">
          {tool.description}
        </p>
        
        <div className="flex flex-wrap gap-2 mb-6">
          {tool.tags.map((tag) => (
            <motion.span 
              key={tag} 
              className="text-xs bg-slate-100 text-slate-800 px-2 py-1 rounded-full group-hover:bg-blue-50 group-hover:text-blue-700 transition-colors duration-300"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              {tag}
            </motion.span>
          ))}
        </div>
        
        <motion.a
          href={tool.url}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center text-blue-600 hover:text-blue-800 font-medium transition-colors group-hover:scale-105"
          whileHover={{ x: 5 }}
          whileTap={{ scale: 0.95 }}
        >
          Learn more 
          <ExternalLink className="ml-1 h-4 w-4 group-hover:rotate-12 transition-transform duration-300" />
        </motion.a>
      </div>
    </motion.div>
  );
}
