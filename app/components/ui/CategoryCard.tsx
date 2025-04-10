'use client';

import { motion } from 'framer-motion';
import * as LucideIcons from 'lucide-react';
import { cn } from '@/app/lib/utils';
import { Category } from '@/app/types';

interface CategoryCardProps {
  category: Category;
  isSelected: boolean;
  count: number;
  onClick: () => void;
}

export default function CategoryCard({ 
  category, 
  isSelected, 
  count, 
  onClick 
}: CategoryCardProps) {
  // Dynamically get the icon from Lucide
  const IconComponent = (LucideIcons as any)[category.icon] || LucideIcons.Box;

  // Extract color name from the category color (e.g., "text-blue-500" -> "blue")
  const colorName = category.color.split('-')[1];
  
  // Create background color classes with different shades
  const bgColorClass = `bg-${colorName}-100`;
  const borderColorClass = `border-${colorName}-300`;
  
  // Define gradient colors for icons based on category
  const getIconGradient = () => {
    const gradients = {
      blue: "from-blue-400 to-indigo-600",
      purple: "from-purple-400 to-fuchsia-600",
      indigo: "from-indigo-400 to-violet-600",
      pink: "from-pink-400 to-rose-600",
      green: "from-green-400 to-emerald-600",
      yellow: "from-yellow-400 to-amber-600",
      red: "from-red-400 to-rose-600",
      orange: "from-orange-400 to-amber-600",
      teal: "from-teal-400 to-cyan-600",
      cyan: "from-cyan-400 to-blue-600",
      lime: "from-lime-400 to-green-600",
      violet: "from-violet-400 to-purple-600",
      emerald: "from-emerald-400 to-teal-600",
      amber: "from-amber-400 to-orange-600",
      rose: "from-rose-400 to-pink-600",
      slate: "from-slate-400 to-gray-600"
    };
    
    return gradients[colorName as keyof typeof gradients] || "from-blue-400 to-indigo-600";
  };
  
  return (
    <motion.div
      whileHover={{ 
        scale: 1.05,
        boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
      }}
      whileTap={{ scale: 0.98 }}
      onClick={onClick}
      className={cn(
        "glass-card cursor-pointer text-center transition-all duration-300 p-4 rounded-xl border-2",
        isSelected ? 'ring-2 ring-blue-500 shadow-glow bg-white' : 'bg-white/80 hover:bg-white',
        borderColorClass
      )}
    >
      <motion.div 
        className={cn(
          "w-16 h-16 rounded-xl flex items-center justify-center mx-auto mb-3",
          "shadow-lg relative overflow-hidden border-2",
          borderColorClass,
          "bg-gradient-to-br",
          getIconGradient()
        )}
        whileHover={{ 
          rotate: 15,
          scale: 1.1,
          transition: { type: "spring", stiffness: 300 }
        }}
      >
        {/* Background pattern for icon container */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0 bg-gradient-to-br from-white to-transparent"></div>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white via-transparent to-transparent"></div>
        </div>
        
        {/* Icon with white color */}
        <motion.div
          className="relative z-10"
          whileHover={{ scale: 1.2 }}
          transition={{ type: "spring", stiffness: 400 }}
        >
          <IconComponent className="h-8 w-8 text-white drop-shadow-md" />
        </motion.div>
      </motion.div>
      <h3 className={cn("font-medium text-lg mb-1", `text-${colorName}-800`)}>{category.name}</h3>
      <motion.p 
        className={cn("text-sm", `text-${colorName}-600`)}
        initial={{ opacity: 0.7 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
      >
        {count} {count === 1 ? 'tool' : 'tools'}
      </motion.p>
    </motion.div>
  );
}
