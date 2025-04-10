'use client';

import { motion } from 'framer-motion';
import { Tool } from '../types';
import { allTools } from '../data/tools';
import ToolCard from './ui/ToolCard';

interface FeaturedToolsSectionProps {
  tools: Tool[];
}

export default function FeaturedToolsSection({ tools }: FeaturedToolsSectionProps) {
  const featuredTools = allTools.filter(tool => tool.featured);
  
  if (featuredTools.length === 0) return null;
  
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.2 }}
      className="mb-16"
    >
      <h2 className="text-2xl font-bold mb-6">Featured Tools</h2>
      
      <motion.div 
        variants={container}
        initial="hidden"
        animate="show"
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
      >
        {featuredTools.map((tool) => (
          <ToolCard key={tool.id} tool={tool} />
        ))}
      </motion.div>
    </motion.div>
  );
}
