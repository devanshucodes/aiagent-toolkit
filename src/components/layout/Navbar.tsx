import React from 'react';
import { NavLink } from 'react-router-dom';
import { navItems } from '../../data/filterData';

const Navbar: React.FC = () => {
  return (
    <nav className="bg-black border-b border-gray-900 sticky top-0 z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-14">
          <div className="flex items-center">
            <NavLink to="/" className="flex-shrink-0 w-32">
              <span className="text-lg font-mono tracking-wider text-white">LOGO</span>
            </NavLink>
            
            <div className="hidden lg:block ml-16">
              <div className="flex items-center gap-2">
                {navItems.map((item) => (
                  <NavLink
                    key={item.id}
                    to={item.id ? `/${item.id}` : '/'}
                    end={item.id === ''}
                    className={({ isActive }) =>
                      [
                        'px-3 py-2 text-xs font-mono whitespace-nowrap transition-colors duration-200',
                        isActive
                          ? 'bg-[#3a2321] text-[#e07a6c]'
                          : 'text-gray-400 hover:text-white hover:bg-red-900/20'
                      ].join(' ')
                    }
                  >
                    {item.label}
                  </NavLink>
                ))}
              </div>
            </div>
          </div>
          
          <div className="flex items-center gap-4">
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