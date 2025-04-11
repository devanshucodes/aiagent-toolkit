'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { categories } from './data/categories';
import { allTools } from './data/tools';
import { filterToolsBySearch } from './lib/utils';
import { Sparkles, Brain, Upload, Github } from 'lucide-react';
import Link from 'next/link';

// Components
import Header from './components/Header';
import SearchBar from './components/ui/SearchBar';
import FeaturedToolsSection from './components/FeaturedToolsSection';
import CategorySection from './components/CategorySection';
import SelectedCategoryView from './components/SelectedCategoryView';
import EmptyState from './components/EmptyState';
import ToolCard from './components/ui/ToolCard';
import AIMentor from './components/AIMentor';

export default function Home() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [showMentor, setShowMentor] = useState(false);
  
  useEffect(() => {
    setIsLoaded(true);
  }, []);
  
  const filteredTools = filterToolsBySearch(allTools, searchQuery);
  const featuredTools = filteredTools.filter(tool => tool.featured);
  
  const selectedCategoryData = categories.find(c => c.id === selectedCategory);
  const toolsInSelectedCategory = filteredTools.filter(tool => tool.category === selectedCategory);
  
  const hasSearchResults = filteredTools.length > 0;

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      <Header />
      
      <main className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-center mb-20 relative"
          >
            {/* Animated background elements */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.3, duration: 0.5 }}
              className="absolute -top-32 left-1/2 transform -translate-x-1/2 w-96 h-96 bg-gradient-to-r from-blue-400/30 to-purple-500/30 rounded-full blur-3xl"
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.5, duration: 0.5 }}
              className="absolute -top-32 left-1/2 transform -translate-x-1/2 w-96 h-96 bg-gradient-to-r from-purple-400/20 to-pink-500/20 rounded-full blur-3xl"
            />
            
            <motion.h1 
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="text-5xl md:text-7xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600 leading-none"
              style={{ paddingBottom: '0.2em' }}
            >
              AI Agent Toolkit
            </motion.h1>
            
            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.5 }}
              className="text-xl md:text-2xl text-slate-600 max-w-3xl mx-auto mb-10"
            >
              A curated collection of the best AI tools, frameworks, and resources for building intelligent agents
            </motion.p>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.5 }}
              className="mt-8 max-w-xl mx-auto"
            >
              <SearchBar 
                value={searchQuery}
                onChange={setSearchQuery}
              />
              
              <div className="mt-4 space-y-3">
                <motion.button 
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full py-3 px-6 bg-gradient-to-r from-blue-500 to-purple-500 text-white font-semibold rounded-xl shadow-lg hover:from-blue-600 hover:to-purple-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all duration-300 relative overflow-hidden group"
                  onClick={() => setShowMentor(true)}
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-400/20 to-purple-400/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="flex items-center justify-center gap-2 relative z-10">
                    <Brain className="h-5 w-5" />
                    <span>Ask AI Mentor</span>
                  </div>
                </motion.button>
                <motion.div 
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                  className="flex items-center justify-center gap-2"
                >
                  <div className="relative">
                    <div className="absolute inset-0 bg-blue-100 rounded-full blur-sm" />
                    <Sparkles className="h-4 w-4 text-blue-500 relative" />
                  </div>
                  <p className="text-sm text-slate-500">
                    Your personal AI guide - Ask me anything!
                  </p>
                </motion.div>
              </div>
            </motion.div>
          </motion.div>

          <AnimatePresence mode="wait">
            {searchQuery && !hasSearchResults ? (
              <EmptyState 
                resetSearch={() => setSearchQuery('')} 
              />
            ) : (
              <>
                {/* Search Results */}
                {searchQuery && (
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="mb-16"
                  >
                    <motion.div 
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.2 }}
                      className="flex items-center justify-between mb-8"
                    >
                      <h2 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600">
                        Search Results
                      </h2>
                      <motion.span 
                        className="text-sm text-slate-500"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.4 }}
                      >
                        {filteredTools.length} {filteredTools.length === 1 ? 'result' : 'results'} found
                      </motion.span>
                    </motion.div>
                    
                    <motion.div 
                      className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
                      variants={{
                        hidden: { opacity: 0 },
                        show: {
                          opacity: 1,
                          transition: {
                            staggerChildren: 0.1
                          }
                        }
                      }}
                      initial="hidden"
                      animate="show"
                    >
                      {filteredTools.map((tool, index) => (
                        <motion.div
                          key={tool.id}
                          variants={{
                            hidden: { opacity: 0, y: 20 },
                            show: { opacity: 1, y: 0 }
                          }}
                          whileHover={{ 
                            y: -5,
                            boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
                          }}
                          transition={{ type: "spring", stiffness: 300 }}
                        >
                          <ToolCard tool={tool} />
                        </motion.div>
                      ))}
                    </motion.div>
                  </motion.div>
                )}

                {/* Featured Tools */}
                {!selectedCategory && !searchQuery && (
                  <FeaturedToolsSection tools={featuredTools} />
                )}

                {/* Categories or Selected Category View */}
                {selectedCategory ? (
                  <SelectedCategoryView 
                    category={selectedCategoryData}
                    tools={toolsInSelectedCategory}
                    onBack={() => setSelectedCategory(null)}
                  />
                ) : !searchQuery && (
                  <CategorySection 
                    categories={categories}
                    tools={filteredTools}
                    onSelectCategory={setSelectedCategory}
                    selectedCategory={selectedCategory}
                  />
                )}
              </>
            )}
          </AnimatePresence>
        </div>
      </main>
      
      <footer className="py-8 text-center text-slate-500 text-sm">
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.5 }}
        >
          © {new Date().getFullYear()} AI Agent Toolkit. All rights reserved.
        </motion.p>
      </footer>

      {showMentor && (
        <AIMentor 
          onClose={() => setShowMentor(false)} 
          tools={allTools}
          categories={categories}
          onSelectCategory={setSelectedCategory}
        />
      )}
    </div>
  );
}
