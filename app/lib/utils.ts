import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

/**
 * Combines multiple class names using clsx and tailwind-merge
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

/**
 * Generates a random color from the primary or secondary palette
 */
export function getRandomColor(): string {
  const colors = [
    'primary-500',
    'primary-600',
    'primary-700',
    'secondary-500',
    'secondary-600',
    'secondary-700',
  ];
  return colors[Math.floor(Math.random() * colors.length)];
}

/**
 * Formats a number with K, M suffix for thousands, millions
 */
export function formatNumber(num: number): string {
  if (num >= 1000000) {
    return (num / 1000000).toFixed(1) + 'M';
  }
  if (num >= 1000) {
    return (num / 1000).toFixed(1) + 'K';
  }
  return num.toString();
}

/**
 * Truncates text to a specific length and adds ellipsis
 */
export function truncateText(text: string, maxLength: number): string {
  if (text.length <= maxLength) return text;
  return text.slice(0, maxLength) + '...';
}

/**
 * Filters tools by search query
 */
export function filterToolsBySearch(tools: any[], query: string): any[] {
  if (!query) return tools;
  
  const lowercaseQuery = query.toLowerCase().trim();
  
  return tools.filter(tool => {
    // Search in name
    if (tool.name.toLowerCase().includes(lowercaseQuery)) return true;
    
    // Search in description
    if (tool.description.toLowerCase().includes(lowercaseQuery)) return true;
    
    // Search in tags
    if (tool.tags.some((tag: string) => tag.toLowerCase().includes(lowercaseQuery))) return true;
    
    // Search in category
    if (tool.category.toLowerCase().includes(lowercaseQuery)) return true;
    
    // Search in URL
    if (tool.url.toLowerCase().includes(lowercaseQuery)) return true;
    
    return false;
  });
}

/**
 * Groups tools by category
 */
export function groupToolsByCategory(tools: any[]): Record<string, any[]> {
  return tools.reduce((acc, tool) => {
    if (!acc[tool.category]) {
      acc[tool.category] = [];
    }
    acc[tool.category].push(tool);
    return acc;
  }, {} as Record<string, any[]>);
}
