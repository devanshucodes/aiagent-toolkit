'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, X } from 'lucide-react';

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

  return (
    <motion.div 
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.3 }}
      className="max-w-md mx-auto"
    >
      <div 
        className={`relative transition-all duration-300 ${
          isFocused ? 'shadow-glow' : ''
        }`}
      >
        <motion.div 
          className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none"
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
          className="block w-full pl-10 pr-10 py-3 border border-slate-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-white/80 backdrop-blur-sm shadow-sm"
          placeholder={placeholder}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
        />
        
        <AnimatePresence>
          {value && (
            <motion.button
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={() => onChange('')}
              className="absolute inset-y-0 right-0 pr-3 flex items-center"
            >
              <X className="h-5 w-5 text-slate-400 hover:text-slate-600" />
            </motion.button>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  );
}
