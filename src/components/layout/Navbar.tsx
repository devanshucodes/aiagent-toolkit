import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { navItems } from '../../data/filterData';

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <nav className="bg-black border-b border-gray-900 fixed top-0 left-0 right-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-14">
            {/* Desktop View - Exactly as before */}
            <div className="hidden lg:flex lg:items-center">
              <NavLink to="/" className="flex-shrink-0 w-32">
                <span className="text-lg font-mono tracking-wider text-white">LOGO</span>
              </NavLink>
              
              <div className="ml-16">
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
                            ? 'bg-[#3a2321] text-[#FF846C]'
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

            {/* Mobile View */}
            <div className="flex lg:hidden items-center w-full relative">
              <NavLink to="/" className="flex-shrink-0">
                <span className="text-lg font-mono tracking-wider text-white">LOGO</span>
              </NavLink>
              
              {/* Vertical Line */}
              <div className="absolute left-[40%] h-6 w-[1px] bg-gray-700" />
              
              {/* Mobile Hamburger Button */}
              <button
                onClick={toggleMenu}
                className="absolute right-0 p-2 text-[#ff836b] hover:text-[#ff836b] focus:outline-none"
              >
                <div className="w-6 h-5 relative flex flex-col justify-between">
                  <span className={`w-full h-0.5 bg-[#ff836b] transform transition duration-300 ${isMenuOpen ? 'rotate-45 translate-y-2' : ''}`} />
                  <span className={`w-full h-0.5 bg-[#ff836b] transition duration-300 ${isMenuOpen ? 'opacity-0 translate-x-3' : ''}`} />
                  <span className={`w-full h-0.5 bg-[#ff836b] transition duration-300 ${isMenuOpen ? 'opacity-0 -translate-x-3' : ''}`} />
                  <span className={`w-full h-0.5 bg-[#ff836b] transform transition duration-300 ${isMenuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
                </div>
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Navigation Menu - Slide from right */}
      <div 
        className={`fixed top-14 right-0 h-[calc(100%-3.5rem)] w-[70%] bg-black transform transition-transform duration-300 ease-in-out z-40 lg:hidden ${
          isMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="pt-4 px-4">
          {navItems.map((item) => (
            <NavLink
              key={item.id}
              to={item.id ? `/${item.id}` : '/'}
              end={item.id === ''}
              onClick={() => setIsMenuOpen(false)}
              className={({ isActive }) =>
                [
                  'block py-3 text-base font-mono whitespace-nowrap transition-colors duration-200 pl-5',
                  isActive
                    ? 'bg-[#3a2321] text-[#FF846C]'
                    : 'text-gray-400 hover:text-white'
                ].join(' ')
              }
            >
              {item.label}
            </NavLink>
          ))}
        </div>
      </div>

      {/* Overlay */}
      {isMenuOpen && (
        <div 
          className="fixed inset-0 top-14 bg-black bg-opacity-50 z-30 lg:hidden"
          onClick={() => setIsMenuOpen(false)}
        />
      )}
    </>
  );
};

export default Navbar;