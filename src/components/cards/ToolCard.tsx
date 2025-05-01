import React from 'react';

interface ToolCardProps {
  name: string;
  logo: string;
  category: string[];
  description: string;
  type: string;
  rating: number;
  url: string;
}

export const ToolCard: React.FC<ToolCardProps> = ({
  name,
  logo,
  category,
  description,
  type,
  rating,
  url,
}) => {
  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="block p-6 bg-white dark:bg-gray-800 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
    >
      <div className="flex items-center mb-4">
        <img
          src={logo}
          alt={`${name} logo`}
          className="w-12 h-12 object-contain mr-4"
        />
        <div>
          <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
            {name}
          </h3>
          <div className="flex items-center mt-1">
            <span className="text-sm text-gray-500 dark:text-gray-400">
              {type}
            </span>
            <span className="mx-2 text-gray-300 dark:text-gray-600">•</span>
            <div className="flex items-center">
              {[...Array(5)].map((_, i) => (
                <svg
                  key={i}
                  className={`w-4 h-4 ${
                    i < rating
                      ? 'text-yellow-400'
                      : 'text-gray-300 dark:text-gray-600'
                  }`}
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
            </div>
          </div>
        </div>
      </div>
      <p className="text-gray-600 dark:text-gray-300 mb-4 line-clamp-2">
        {description}
      </p>
      <div className="flex flex-wrap gap-2">
        {category.map((tag, index) => (
          <span
            key={index}
            className="px-2 py-1 text-xs font-medium bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200 rounded-full"
          >
            {tag}
          </span>
        ))}
      </div>
    </a>
  );
}; 