'use client';

import { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, X, Sparkles } from 'lucide-react';

interface SearchBarProps {
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
}

export default function SearchBar({ 
  value, 
  onChange, 
  placeholder = "Search tools, frameworks, resources..." 
}: SearchBarProps) {
  const [isFocused, setIsFocused] = useState(false);
  const [localValue, setLocalValue] = useState(value);

  // Debounce the search input
  useEffect(() => {
    const timer = setTimeout(() => {
      onChange(localValue);
    }, 300);

    return () => clearTimeout(timer);
  }, [localValue, onChange]);

  const handleChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    setLocalValue(e.target.value);
  }, []);

  const handleClear = useCallback(() => {
    setLocalValue('');
    onChange('');
  }, [onChange]);

  return (
    <motion.div 
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.3 }}
      className="max-w-xl mx-auto"
    >
      <div className="relative">
        {/* Animated background gradient */}
        <motion.div 
          className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          animate={{ 
            opacity: isFocused ? 0.1 : 0,
            scale: isFocused ? 1.05 : 1
          }}
        />
        
        {/* Pulsing rings */}
        <motion.div
          className="absolute inset-0 border-2 border-blue-400/20 rounded-xl"
          animate={{
            scale: [1, 1.02, 1],
            opacity: [0.5, 0.3, 0.5],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        
        <div className="relative flex items-center">
          <motion.div 
            className="absolute inset-y-0 left-3 flex items-center pointer-events-none"
            animate={{ 
              color: isFocused ? '#3b82f6' : '#94a3b8',
              scale: isFocused ? 1.1 : 1
            }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <Search className="h-5 w-5" />
          </motion.div>
          
          <input
            type="text"
            className="block w-full pl-10 pr-10 py-3 border border-slate-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-white/80 backdrop-blur-sm shadow-sm transition-all duration-300 group-hover:border-blue-200"
            placeholder={placeholder}
            value={localValue}
            onChange={handleChange}
            onFocus={() => setIsFocused(true)}
            onBlur={() => setIsFocused(false)}
            aria-label="Search tools and resources"
          />
          
          <AnimatePresence>
            {localValue && (
              <motion.button
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={handleClear}
                className="absolute right-3 flex items-center"
                aria-label="Clear search"
              >
                <X className="h-5 w-5 text-slate-400 hover:text-slate-600 transition-colors duration-300" />
              </motion.button>
            )}
          </AnimatePresence>
        </div>
      </div>
      
      {/* AI-powered search indicator */}
      <motion.div 
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
        className="flex items-center justify-center mt-2 text-xs text-slate-500"
      >
        <Sparkles className="h-3 w-3 mr-1 text-blue-500" />
        AI-powered search
      </motion.div>
    </motion.div>
  );
}
