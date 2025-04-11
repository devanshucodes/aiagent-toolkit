'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { Github, BrainCircuit, Sparkles, Upload } from 'lucide-react';

export default function Header() {
  return (
    <header className="py-6 px-4 text-slate-800 sticky top-0 z-50 backdrop-blur-sm bg-transparent">
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
            className="mr-3"
          >
            <div className="relative">
              {/* Animated gradient background */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full blur-md opacity-50"
                animate={{
                  scale: [1, 1.2, 1],
                  opacity: [0.5, 0.7, 0.5],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
              {/* Pulsing rings */}
              <motion.div
                className="absolute inset-0 border-2 border-blue-400/30 rounded-full"
                animate={{
                  scale: [1, 1.2, 1],
                  opacity: [0.5, 0.3, 0.5],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
              <motion.div
                className="absolute inset-0 border-2 border-purple-400/30 rounded-full"
                animate={{
                  scale: [1, 1.3, 1],
                  opacity: [0.3, 0.5, 0.3],
                }}
                transition={{
                  duration: 2.5,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
              <BrainCircuit className="h-8 w-8 text-white relative z-10" />
            </div>
          </motion.div>
          <Link href="/" className="group">
            <motion.span 
              className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600 group-hover:from-blue-700 group-hover:to-purple-700 transition-all duration-300"
              whileHover={{ scale: 1.02 }}
            >
              AI Agent Toolkit
            </motion.span>
            <motion.span 
              className="inline-block ml-2 text-xs font-medium bg-gradient-to-r from-blue-500 to-purple-500 text-white px-2 py-1 rounded-full"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
            >
              Beta
            </motion.span>
          </Link>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="flex items-center space-x-4"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-xl hover:from-blue-600 hover:to-purple-600 transition-all duration-300 shadow-lg hover:shadow-xl"
            onClick={() => window.open('https://t.me/devanshu_0_1', '_blank')}
          >
            <Upload className="h-4 w-4" />
            <span>Submit</span>
          </motion.button>
          <motion.a 
            href="https://github.com/devanshucodes/AI-Resources" 
            target="_blank" 
            rel="noopener noreferrer"
            className="group p-2 rounded-full bg-gradient-to-r from-slate-100/50 to-slate-200/50 hover:from-slate-200/50 hover:to-slate-300/50 transition-all duration-300 shadow-sm hover:shadow-md backdrop-blur-sm"
            aria-label="GitHub Repository"
            whileHover={{ scale: 1.1, rotate: 5 }}
            whileTap={{ scale: 0.95 }}
          >
            <Github className="h-5 w-5 text-slate-700 group-hover:text-slate-900 transition-colors duration-300" />
          </motion.a>
        </motion.div>
      </div>
    </header>
  );
}
