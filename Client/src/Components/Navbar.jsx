import React, { useState, useRef, useCallback, useEffect } from 'react';
import { GiShop, GiRotaryPhone } from 'react-icons/gi';
import { PiFarmFill } from 'react-icons/pi';
import { FaBars, FaEmpire } from 'react-icons/fa';
import { Link as ScrollLink } from 'react-scroll';
import { NavLink, useLocation } from 'react-router-dom';
import useActiveSection from './hooks/hook'; // Adjust path as necessary

const Navbar = ({ introRef }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef(null);
  const location = useLocation();

  const toggleMenu = useCallback(() => {
    setIsMenuOpen((prev) => !prev);
  }, []);

  const handleClickOutside = useCallback((event) => {
    if (menuRef.current && !menuRef.current.contains(event.target)) {
      setIsMenuOpen(false);
    }
  }, []);

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [handleClickOutside]);

  const sections = ['intro', 'products', 'contact'];
  const activeSection = useActiveSection(sections);

  const activeLinkStyle = 'text-slate-700';
  const getLinkStyle = (section) => (section === activeSection ? activeLinkStyle : '');

  const isAboutPage = location.pathname === '/about';

  const scrollToTop = () => {
    if (introRef.current) {
      introRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className="navBg fixed top-0 z-10 w-full h-24 flex items-center justify-between shadow-md bg-white">
      <div className="flex items-center">
      <NavLink to="/">
        <img src="./nobbg.png" alt="logo" className="h-24 ml-1 p-[2px] object-contain" />
        </NavLink>
        <NavLink to="/">
        <h1 className="text-2xl ml-1 font-medium text-slate-900 hidden md:flex">ORGANIC GOODS</h1></NavLink>
      </div>

      <div className="md:hidden flex items-center pr-4 relative">
        <FaBars className="text-2xl cursor-pointer" onClick={toggleMenu} />
        {isMenuOpen && (
          <div
            ref={menuRef}
            className="absolute top-full right-1 mt-1 w-[165px] bg-[#ffc20ae6] rounded-lg shadow-md z-10"
          >
            <ul className="flex flex-col gap-3 p-4 font-medium">
              <li>
                <NavLink
                  to="/"
                  className={({ isActive }) => `flex items-center gap-1 hover:text-red-800 ${isActive ? activeLinkStyle : ''}`}
                  onClick={scrollToTop}
                >
                  <PiFarmFill className="text-2xl" />
                  HOME
                </NavLink>
              </li>
              {!isAboutPage && (
                <>
                  <li>
                    <ScrollLink
                      to="products"
                      smooth={true}
                      duration={500}
                      className={`flex items-center gap-1 hover:text-red-800 ${getLinkStyle('products')}`}
                    >
                      <GiShop className="text-lg" />
                      PRODUCTS
                    </ScrollLink>
                  </li>
                  <li>
                    <ScrollLink
                      to="contact"
                      smooth={true}
                      duration={500}
                      className={`flex items-center gap-1 hover:text-red-800 ${getLinkStyle('contact')}`}
                    >
                      <GiRotaryPhone className="text-2xl" />
                      CONTACT US
                    </ScrollLink>
                  </li>
                </>
              )}
              <li>
                <NavLink
                  to="/about"
                  className={({ isActive }) => `flex items-center gap-1  hover:text-red-800 ${isActive ? activeLinkStyle : ''}`}
                >
                  <FaEmpire className="text-xl" />
                  ABOUT US
                </NavLink>
              </li>
            </ul>
          </div>
        )}
      </div>

      <div className="hidden md:flex mr-4">
        <ul className="flex gap-5 font-medium">
          <li>
            <NavLink
              to="/"
              className={`flex items-center gap-1 cursor-pointer hover:text-red-800 ${activeSection === 'intro' ? activeLinkStyle : ''}`}
              onClick={scrollToTop}
            >
              <PiFarmFill className="text-2xl" />
              HOME
            </NavLink>
          </li>
          {!isAboutPage && (
            <>
              <li>
                <ScrollLink
                  to="products"
                  smooth={true}
                  duration={500}
                  className={`flex items-center gap-1 cursor-pointer hover:text-red-800 ${getLinkStyle('products')}`}
                >
                  <GiShop className="text-lg" />
                  PRODUCTS
                </ScrollLink>
              </li>
              <li>
                <ScrollLink
                  to="contact"
                  smooth={true}
                  duration={500}
                  className={`flex items-center gap-1 cursor-pointer hover:text-red-800 ${getLinkStyle('contact')}`}
                >
                  <GiRotaryPhone className="text-2xl" />
                  CONTACT US
                </ScrollLink>
              </li>
            </>
          )}
          <li>
            <NavLink
              to="/about"
              className={({ isActive }) => `flex items-center gap-1 cursor-pointer hover:text-red-800 ${isActive ? activeLinkStyle : ''}`}
            >
              <FaEmpire className="text-xl" />
              ABOUT US
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
