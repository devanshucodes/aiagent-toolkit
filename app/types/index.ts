export interface Tool {
  id: string;
  name: string;
  description: string;
  url: string;
  imageUrl?: string;
  tags: string[];
  category: string;
  featured?: boolean;
  authors?: string[];
  date?: string;
  frameworks?: string[];
}

export interface Category {
  id: string;
  name: string;
  description: string;
  icon: string; // Lucide icon name
  color: string; // Tailwind color class
  count?: number; // Number of tools in this category
  isMainCategory?: boolean; // Whether this is a main category title
  parentCategory?: string; // ID of the parent category if this is a subcategory
}
