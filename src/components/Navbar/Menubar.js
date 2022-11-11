import { faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { useContext } from 'react';
import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { DarkModeContext } from '../../App';
import logo_v3 from "../../Assest/images/saheda_logo.png";
import './Menubar.css'

const Menubar = () => {
    const [colorChange, setColorchange] = useState(false);
    const [darkMode, setDarkMode] = useContext(DarkModeContext);
    return (
        <div className=' fixed z-50 top-0 w-full bg-blue-800'>
            <div class="navbar bg-blue-800 lg:max-w-[1260px] mx-auto">
  <div class="navbar-start xs:justify-between">
    <div class="dropdown">
      <label tabindex="0" class=" lg:hidden text-white">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </label>
      <ul tabindex="0" class="menu menu-compact dropdown-content mt-4 -ml-2 p-2 shadow bg-blue-100 w-96">
      <NavLink
              className={({ isActive }) =>
                isActive ? "activeLink" : "navLink"
              }
              to={"/"}
            >
              <li className=" smNav-item inline-block smNav-link">Home</li>
            </NavLink>
            <NavLink
              className={({ isActive }) =>
                isActive ? "activeLink" : "navLink"
              }
              to={"/about"}
            >
              <li className=" smNav-item py-2 inline-block smNav-link">
                About
              </li>
            </NavLink>
            <NavLink
              className={({ isActive }) =>
                isActive ? "activeLink" : "navLink"
              }
              to={"/companies"}
            >
              <li className=" smNav-item inline-block smNav-link">
                Our Sister Concerns
              </li>
            </NavLink>
            <NavLink
              className={({ isActive }) =>
                isActive ? "activeLink" : "navLink"
              }
              to={"/contact-us"}
            >
              <li className=" smNav-item inline-block py-2 smNav-link">
                Contact Us
              </li>
            </NavLink>
            <NavLink
              className={({ isActive }) =>
                isActive ? "activeLink" : "navLink"
              }
              to={"/contact-us"}
            >
              <li className=" smNav-item inline-block pb-2 smNav-link">
                Management Team
              </li>
            </NavLink>
      </ul>
    </div>
    <div className='flex items-center'>
    <a class=" normal-case hidden lg:block"><img className='w-16 h-16 mr-4' src={logo_v3} /></a>
    <span className='font-bold text-2xl text-white hidden lg:block'>Saheda Group</span>
    </div>
  </div>
  <div class="navbar-center hidden lg:flex">
    <ul class="menu menu-horizontal p-0">
    <li className="nav-item">
                  <Link
                    to={"/"}
                    className={`nav-link py-1 inline-block ${
                      colorChange ? "text-black" : ""
                    } md:text-white lg:px-2 md:hidden lg:block font-semibold`}
                    href="#"
                  >
                    Home
                  </Link>
                </li>
                <li className="md:ml-2.5 nav-item">
                  <Link
                    to={"/about"}
                    className="nav-link py-1 inline-block md:text-white md:px-2 font-semibold"
                    href="#"
                  >
                    About
                  </Link>
                </li>
                <li className="md:ml-2.5 nav-item">
                  <Link
                    to={"/companies"}
                    className="nav-link py-1 inline-block md:text-white md:px-2 font-semibold"
                  >
                    Our Sister Concerns
                  </Link>
                </li>
                {/* <li className='md:ml-2.5 md:hidden lg:block'>
									<Link
										to={'/services'}
										className='py-2 inline-block md:text-white md:px-2 font-semibold'
										href='#'
									>
										Services
									</Link>
								</li> */}
                <li className="md:ml-2.5 md:hidden lg:block nav-item">
                  <Link
                    to={"/contact-us"}
                    className="nav-link py-1 inline-block md:text-white md:px-2 font-semibold"
                    href="#"
                  >
                    Contact Us{" "}
                  </Link>
                </li>
                <li className="md:ml-2.5 md:hidden lg:block nav-item">
                  <Link
                    to={"/team"}
                    className="nav-link py-1 inline-block md:text-white md:px-2 font-semibold"
                    href="#"
                  >
                    Management Team{" "}
                  </Link>
                </li>
    </ul>
  </div>
  <div class="navbar-end">
  <div className="items-center hidden lg:block">
            <div className="relative p-2 ml-2">
              <h1 className={`${darkMode ? ` text-gray-400` : `text-white`} text-[14px] font-extrabold ml-3 quality-first flex`}>
                "Your Satisfactions is our priority"
              </h1>
              <div className={`${darkMode ? ` text-gray-400` : `text-white`} mr-2 text-[12px] sk-akij-uddin tracking-widest`}>
              <a href="mailto:sadikurr50@sahedagroup.net" className='flex justify-center items-center'>
                <FontAwesomeIcon className="text-blue-100 text-md p-1" icon={faEnvelope}></FontAwesomeIcon>
                <span className='text-sm'>sadikur50@sahedagroup.net</span>
                </a>
              </div>
              <div className={`${darkMode ? ` text-gray-400` : `text-white`} text-[12px] sk-akij-uddin tracking-widest`}>
                <a href="tel:+97143485089" className='flex justify-center items-center'>
                <FontAwesomeIcon
                  className="text-blue-100 text-md p-1"
                  icon={faPhone}
                ></FontAwesomeIcon>
                <span className='text-sm'>+97143485089</span>
              </a>
              </div>
              
            </div>
          </div>
          <div className='block lg:hidden'><span className='font-bold text-2xl text-white mr-2'>Saheda Group</span></div>
  </div>
</div>
        </div>
    );
};

export default Menubar;