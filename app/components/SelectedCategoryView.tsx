'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { ArrowLeft } from 'lucide-react';
import { Category, Tool } from '@/app/types';
import ToolCard from './ui/ToolCard';
import EmptyState from './EmptyState';

interface SelectedCategoryViewProps {
  category: Category | undefined;
  tools: Tool[];
  onBack: () => void;
}

export default function SelectedCategoryView({ 
  category, 
  tools, 
  onBack 
}: SelectedCategoryViewProps) {
  if (!category) return null;
  
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
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      className="mt-12"
    >
      <div className="flex justify-between items-center mb-6">
        <motion.h2 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="text-2xl font-bold flex items-center"
        >
          <span className={`w-8 h-8 rounded-full ${category.color} flex items-center justify-center mr-2`}>
            {/* We'll use the dynamic icon in the next phase */}
            <span className="text-white text-xs">{category.icon.charAt(0)}</span>
          </span>
          {category.name}
        </motion.h2>
        
        <motion.button
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          onClick={onBack}
          className="flex items-center text-slate-600 hover:text-slate-900 transition-colors"
        >
          <ArrowLeft className="mr-1 h-4 w-4" /> Back to all categories
        </motion.button>
      </div>
      
      <motion.p 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
        className="text-slate-600 mb-8"
      >
        {category.description}
      </motion.p>
      
      {tools.length > 0 ? (
        <motion.div 
          variants={container}
          initial="hidden"
          animate="show"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          <AnimatePresence>
            {tools.map((tool) => (
              <ToolCard key={tool.id} tool={tool} />
            ))}
          </AnimatePresence>
        </motion.div>
      ) : (
        <EmptyState message={`No tools found in the ${category.name} category.`} />
      )}
    </motion.div>
  );
}
