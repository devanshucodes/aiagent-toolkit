export interface Tool {
  id: string;
  name: string;
  logo: string;
  category: string[];
  description: string;
  type: 'Free' | 'Paid' | 'Freemium';
  rating: number;
  url: string;
}

export type FilterCategory = 'Language' | 'Genre' | 'Subscription' | 'Categories';

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