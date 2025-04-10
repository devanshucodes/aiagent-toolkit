'use client';

import { motion } from 'framer-motion';
import { Search, RefreshCw } from 'lucide-react';

interface EmptyStateProps {
  message?: string;
  resetSearch?: () => void;
}

export default function EmptyState({ 
  message = "No tools found matching your search criteria.", 
  resetSearch 
}: EmptyStateProps) {
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="text-center py-12"
    >
      <div className="mx-auto w-16 h-16 bg-slate-100 rounded-full flex items-center justify-center mb-4">
        <Search className="h-8 w-8 text-slate-400" />
      </div>
      
      <p className="text-slate-600 mb-4">{message}</p>
      
      {resetSearch && (
        <button
          onClick={resetSearch}
          className="inline-flex items-center text-primary-600 hover:text-primary-800"
        >
          <RefreshCw className="mr-2 h-4 w-4" /> Reset search
        </button>
      )}
    </motion.div>
  );
}
