import React from 'react';
import { Link } from 'react-router-dom';
import { navItems } from '../../data/filterData';
import { Sun, Moon } from 'lucide-react';
import { ThemeMode } from '../../types';

interface NavbarProps {
  theme: ThemeMode;
  toggleTheme: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ theme, toggleTheme }) => {
  return (
    <nav className="bg-black border-b border-gray-900 sticky top-0 z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-14">
          <div className="flex items-center space-x-8">
            <Link to="/" className="flex-shrink-0">
              <span className="text-lg font-mono tracking-wider text-white">LOGO</span>
            </Link>
            
            <div className="hidden md:block">
              <div className="flex items-center space-x-1">
                {navItems.map((item) => (
                  <Link
                    key={item.id}
                    to={`/${item.id}`}
                    className="px-3 py-2 text-xs font-mono text-gray-400 hover:text-white hover:bg-red-900/20 transition-colors duration-200"
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            </div>
          </div>
          
          <div className="flex items-center space-x-4">
            <button 
              onClick={toggleTheme}
              className="p-2 rounded-full text-gray-500 hover:text-gray-300 transition-colors duration-200"
              aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
            >
              {theme === 'dark' ? <Sun size={16} /> : <Moon size={16} />}
            </button>
            
            <button className="bg-red-900/80 hover:bg-red-800 text-white px-4 py-1.5 text-xs font-mono uppercase tracking-wider transition-colors duration-200">
              Submit
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;