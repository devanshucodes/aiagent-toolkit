export interface Tool {
  id: string;
  name: string;
  logo: string;
  category: string;
  genre?: 'offchain' | 'onchain';
  hasGithub?: boolean;
  tags: string[];
  description: string;
  type: 'Free' | 'Paid' | 'Freemium';
  rating: number;
  url: string;
  filter_categories?: string[];
}

export interface LibraryTool {
  id: string;
  name: string;
  logo: string;
  section: string;
  tags: string[];
  description: string;
  type: 'Free' | 'Paid' | 'Freemium';
  rating: number;
  url: string;
  filter_categories?: string[];
}

export type FilterCategory = 'Language' | 'Genre' | 'Subscription' | 'Categories' | 'Platform' | 'Focus' | 'Most Popular Categories' | 'GitHub';

export interface FilterOption {
  id: string;
  label: string;
  active: boolean;
}

export interface FilterGroup {
  category: FilterCategory;
  options: FilterOption[];
}

export type ThemeMode = 'dark' | 'light';