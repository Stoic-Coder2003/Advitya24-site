import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { Link as ScrollLink, Element } from 'react-scroll'; // Import Element

function Navbar() {
  const [activeElement, setActiveElement] = useState(null);

  const changeColor = (element) => {
    setActiveElement(element);
  }

  return (
    <nav className="bg-[rgba(0, 0, 0, 0.07)] backdrop-blur fixed w-full z-20 top-0 start-0">
      <div className="flex flex-wrap items-center justify-between mx-auto py-4 px-10">
        <NavLink to="/" className="flex items-center space-x-3 rtl:space-x-reverse w-36">
          <span className={`self-center text-2xl font-semibold whitespace-nowrap text-gray-500`}>AdVITya'24</span>
        </NavLink>
        <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
          <NavLink to="/signin" className="w-36 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center">Login</NavLink>

          <button data-collapse-toggle="navbar-sticky" type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-sticky" aria-expanded="false">
            <span className="sr-only">Open main menu</span>
            <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
              <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15"/>
            </svg>
          </button>
        </div>
        <div className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-sticky">
          <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium rounded-lg bg-transparent md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-transparent">
            <li>
              <ScrollLink
                to="home" 
                smooth={true}
                duration={1000}
                offset={-50}
                spy={true}
                exact="true"
                onClick={() => changeColor('home')}
                className={` bg-blue-700 rounded md:bg-transparent ${activeElement === 'home' ? 'text-blue-700 border-b-2 border-blue-700' : 'text-gray-500 md:hover:text-slate-400 md:hover:border-b-2'} md:p-0 md:hover:text-slate-400 md:hover:border-b-2`}
                aria-current="page"
              >
                Home
              </ScrollLink>
            </li>
            <li>
              <ScrollLink
                to="about-section"
                smooth={true}
                duration={1000}
                offset={-50}
                spy={true}
                exact="true"
                onClick={() => changeColor('about')}
                className={` md:bg-transparent ${activeElement === 'about' ? 'text-blue-700 border-b-2 border-blue-700' : 'text-gray-500 md:hover:text-slate-400 md:hover:border-b-2'} md:p-0 md:hover:text-slate-400 md:hover:border-b-2`}
              >
                About us
              </ScrollLink>
            </li>
            <li>
              <ScrollLink
                to="events"
                smooth={true}
                duration={1000}
                offset={-50}
                spy={true}
                exact="true"
                onClick={() => changeColor('events')}
                className={` md:bg-transparent ${activeElement === 'events' ? 'text-blue-700 border-b-2 border-blue-700' : 'text-gray-500 md:hover:text-slate-400 md:hover:border-b-2'} md:p-0 md:hover:text-slate-400 md:hover:border-b-2`}
              >
                Events
              </ScrollLink>
            </li>
            <li>
              <NavLink className={`md:bg-transparent ${activeElement === 'gallery' ? 'text-blue-700' : 'text-gray-500'} md:p-0 md:hover:text-slate-400 md:hover:border-b-2`}>
                Gallery
              </NavLink>
            </li>
            <li>
              <NavLink className={`md:bg-transparent ${activeElement === 'helpdesk' ? 'text-blue-700' : 'text-gray-500'} md:p-0 md:hover:text-slate-400 md:hover:border-b-2`}>
                Helpdesk
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
