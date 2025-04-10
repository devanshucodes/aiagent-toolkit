'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { Github, Sparkles } from 'lucide-react';

export default function Header() {
  return (
    <header className="py-6 px-4 text-slate-800">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="flex items-center"
        >
          <motion.div
            whileHover={{ rotate: 15, scale: 1.1 }}
            transition={{ type: "spring", stiffness: 300 }}
            className="mr-2"
          >
            <Sparkles className="h-6 w-6 text-yellow-400" />
          </motion.div>
          <Link href="/" className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500">
            AI Agent Toolkit
          </Link>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="flex items-center space-x-4"
        >
          <motion.a 
            href="https://github.com/devanshucodes/AI-Resources" 
            target="_blank" 
            rel="noopener noreferrer"
            className="p-2 rounded-full bg-slate-100 hover:bg-slate-200 transition-colors"
            aria-label="GitHub Repository"
            whileHover={{ scale: 1.1, rotate: 5 }}
            whileTap={{ scale: 0.95 }}
          >
            <Github className="h-5 w-5 text-slate-700" />
          </motion.a>
        </motion.div>
      </div>
    </header>
  );
}
