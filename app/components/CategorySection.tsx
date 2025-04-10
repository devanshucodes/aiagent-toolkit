'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Category, Tool } from '@/app/types';
import CategoryCard from './ui/CategoryCard';

interface CategorySectionProps {
  categories: Category[];
  tools: Tool[];
  onSelectCategory: (categoryId: string | null) => void;
  selectedCategory: string | null;
}

export default function CategorySection({ 
  categories, 
  tools, 
  onSelectCategory,
  selectedCategory
}: CategorySectionProps) {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05
      }
    }
  };

  // Count tools in each category
  const categoryToolCounts = categories.reduce((acc, category) => {
    acc[category.id] = tools.filter(tool => tool.category === category.id).length;
    return acc;
  }, {} as Record<string, number>);

  return (
    <motion.div
      variants={container}
      initial="hidden"
      animate="show"
      className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4"
    >
      {categories.map((category) => (
        <CategoryCard
          key={category.id}
          category={category}
          isSelected={selectedCategory === category.id}
          count={categoryToolCounts[category.id] || 0}
          onClick={() => onSelectCategory(category.id)}
        />
      ))}
    </motion.div>
  );
}
