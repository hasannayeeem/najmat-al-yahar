import { faEnvelope, faPhone } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { useState } from "react";
import { useContext } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { GoThreeBars } from "react-icons/go";
import { IoMdNotificationsOutline } from "react-icons/io";
import {
  MdLightMode,
  MdNightsStay,
  MdOutlineClose,
  MdOutlineDarkMode,
} from "react-icons/md";
import { Link, NavLink, useLocation } from "react-router-dom";
import { DarkModeContext } from "../../App";
import { signOut } from "firebase/auth";
import { FaLocationArrow } from "react-icons/fa";
import logo_v3 from "../../Assest/images/saheda_logo.png";
import auth from "../../firebase.init";
import useRole from "../../hooks/useRole";
import Loading from "../../Shared/Loading/Loading";
import "./Header.css";
import NotificationModal from "./NotificationModal";

const Header = () => {
  const [colorChange, setColorchange] = useState(false);
  let [toggle, setToggle] = useState(false);
  let [notificationModal, setNotificationModal] = useState(false);
  const [user, loading] = useAuthState(auth);
  // let navigate = useNavigate();
  let location = useLocation().pathname;
  const [darkMode, setDarkMode] = useContext(DarkModeContext);
  let [role, roleLoading] = useRole(user);

  if (loading || roleLoading) {
    return <Loading />;
  }
  const navBtnHndle = () => {
    setToggle(!toggle);
  };
  const changeNavbarColor = () => {
    if (window.scrollY >= 80) {
      setColorchange(true);
    } else {
      setColorchange(false);
    }
  };
  window.addEventListener("scroll", changeNavbarColor);
  return (
    <div className={`fixed duration-300 bg-[#f5d9b1] top-0 left-0 w-full   ${
		colorChange && (darkMode ? "bg-white" : "bg-white")} ${
		location === "/properties" ? "z-10" : "z-50 "
	  }`}>
      <div className={`flex ${colorChange ? 'bg-white' : 'bg-[#f5d9b1]'}  items-center w-screen justify-between lg:justify-around py-2 sm:px-2 px-5 border-b-2 border-[#4563]`}>
        <span
          onClick={navBtnHndle}
          className="md:hidden text-black text-left text-2xl cursor-pointer"
        >
          {toggle ? (
            <MdOutlineClose></MdOutlineClose>
          ) : (
            <GoThreeBars></GoThreeBars>
          )}
        </span>
        <p className="text-black font-bold lg:hidden">
          <Link to={`/`}>SHAHEDA GROUP</Link>
        </p>

        <ul
          onClick={navBtnHndle}
          className={`mobile-manu flex md:hidden flex-col text-center z-50   left-0 w-full bg-white  absolute  py-4 duration-500 ${
            toggle ? " opacity-100  top-[55px]" : " top-[-350px] opacity-0"
          }`}
        >
          <NavLink
            className={({ isActive }) => (isActive ? "activeLink" : "navLink")}
            to={"/"}
          >
            <li className=" smNav-item inline-block smNav-link">Home</li>
          </NavLink>
          <NavLink
            className={({ isActive }) => (isActive ? "activeLink" : "navLink")}
            to={"/about"}
          >
            <li className=" smNav-item py-2 inline-block smNav-link">About</li>
          </NavLink>
          <NavLink
            className={({ isActive }) => (isActive ? "activeLink" : "navLink")}
            to={"/companies"}
          >
            <li className=" smNav-item inline-block smNav-link">
              Our Sister Concerns
            </li>
          </NavLink>
          <NavLink
            className={({ isActive }) => (isActive ? "activeLink" : "navLink")}
            to={"/team"}
          >
            <li className=" smNav-item inline-block py-2 smNav-link">
              Management Team
            </li>
          </NavLink>
          <NavLink
            className={({ isActive }) => (isActive ? "activeLink" : "navLink")}
            to={"/contact-us"}
          >
            <li className=" smNav-item inline-block py-2 smNav-link">
              Contact Us
            </li>
          </NavLink>
          {/* <NavLink
							className={({ isActive }) =>
								isActive ? 'activeLink' : 'navLink'
							}
							to={'/services'}
						>
							Services
						</NavLink>

						{darkMode ? (
							<li className='md:ml-2.5'>
								<button
									onClick={() => setDarkMode(false)}
									className='py-2 mx-auto md:text-white md:px-2  flex items-center'
									href='#'
								>
									Light{' '}
									<MdLightMode className='ml-1 text-2xl font-semibold'></MdLightMode>
								</button>
							</li>
						) : (
							<li className='md:ml-2.5'>
								<button
									onClick={() => setDarkMode(false)}
									className='py-2 mx-auto  md:text-white md:px-2 flex items-center '
									href='#'
								>
									Dark{' '}
									<MdNightsStay className='ml-1 text-2xl font-semibold'></MdNightsStay>
								</button>
							</li>
						)}
						<div className='avatar mx-auto my-2'>
							<div className='w-9 rounded-full ring ring-warning ring-offset-base-100 ring-offset-2'>
								<img
									src='https://placeimg.com/192/192/people'
									alt='Profile'
								/>
							</div>
						</div>
						<Link
							className='inline-block w-44 mx-auto font-semibold px-4 py-2 hover:bg-white hover:text-black  bg-warning text-black  hover:border-warning rounded'
							to={'/'}
						>
							Buy Apartment
						</Link> */}
        </ul>

        {/* desktop navbar  */}
        <div className="hidden md:block w-full md:w-auto" id="menu">
          <nav className="justify-around w-full flex text-black  md:bg-transparent rounded shadow-lg py-0 mt-4 text-center md:p-0 md:mt-0 md:shadow-none">
            <div className="flex items-center lg:mr-4">
              <img className=" mr-2 w-[56px] h-[56px]" src={logo_v3} alt="" />
			  <Link to={`/`}>
			  <span className="text-[#1e3b71] font-[900] uppercase">Saheda</span>{" "}
              <span className="text-[#ed2024] uppercase font-[900]">Group</span>
			  </Link>
            </div>
            <ul className="md:flex items-center mx-4">
              <li className="nav-item">
                <Link
                  to={"/"}
                  className={`nav-link py-1 inline-block ${
                    colorChange ? "text-black" : ""
                  } md:text-black lg:px-2 md:hidden lg:block font-semibold`}
                  href="#"
                >
                  Home
                </Link>
              </li>
              <li className="md:ml-2.5 nav-item">
                <Link
                  to={"/about"}
                  className="nav-link py-1 inline-block md:text-black md:px-2 font-semibold"
                  href="#"
                >
                  About
                </Link>
              </li>
              <li className="md:ml-2.5 nav-item">
                <Link
                  to={"/companies"}
                  className="nav-link py-1 inline-block md:text-black md:px-2 font-semibold"
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
                  to={"/team"}
                  className="nav-link py-1 inline-block md:text-black md:px-2 font-semibold"
                  href="#"
                >
                  Management Team{" "}
                </Link>
              </li>
              <li className="md:ml-2.5 md:hidden lg:block nav-item">
                <Link
                  to={"/contact-us"}
                  className="nav-link py-1 inline-block md:text-black md:px-2 font-semibold"
                  href="#"
                >
                  Contact Us{" "}
                </Link>
              </li>

              {/* <li className='md:ml-2.5'>
									<Link
										to={'/media'}
										className='py-2 inline-block md:text-white md:px-2 font-semibold'
										href='#'
									>
										Media
									</Link>
								</li>

								{darkMode ? (
									<li className='md:ml-2.5'>
										<button
											onClick={() => setDarkMode(false)}
											className='py-2 inline-block md:text-white md:px-2 font-semibold'
											href='#'
										>
											<MdLightMode className='text-2xl'></MdLightMode>
										</button>
									</li>
								) : (
									<li className='md:ml-2.5'>
										<button
											onClick={() => setDarkMode(false)}
											className='py-2 inline-block md:text-white md:px-2 font-semibold'
											href='#'
										>
											<MdOutlineDarkMode className='text-2xl'></MdOutlineDarkMode>
										</button>
									</li>
								)}

								<li className='md:ml-2.5 md:mr-2.5 flex items-center relative'>
									<label
										onClick={() => setNotificationModal(true)}
										htmlFor='notificattonModal'
										className='inline-block md:text-white md:px-2 font-semibold cursor-pointer'
									>
										<IoMdNotificationsOutline className='text-2xl'></IoMdNotificationsOutline>
										
									</label>

									<div className='absolute top-3'>
										{notificationModal && (
											<NotificationModal/>
										)}
									</div>
								</li> */}

              {/* <Link to={'/profile'} className='avatar mx-2'>
									<div className='w-9 rounded-full ring ring-error ring-offset-base-100 ring-offset-2'>
										<img
											src='https://placeimg.com/192/192/people'
											alt='Profile'
										/>
									</div>
								</Link> */}

              {/* {user ? (
									<li className='md:ml-6 mt-3 md:mt-0'>
										<a href='/'
											onClick={() => signOut(auth)}
											className={`inline-block font-semibold px-4 py-2 ${
												colorChange
													? 'bg-red-500 hover:text-black text-black  hover:bg-warning'
													: 'hover:bg-white hover:text-teal-900 text-black bg-warning'
											}   border-white rounded cursor-pointer`}
										>
											Sign Out
										</a>
									</li>
								) : (
									<li className='md:ml-6 mt-3 md:mt-0'>
										<Link
											className={`inline-block font-semibold px-4 py-2 ${
												colorChange
													? 'bg-red-500 hover:text-black text-black  hover:bg-warning'
													: 'hover:bg-white hover:text-teal-900 text-black bg-warning'
											}    border-white rounded`}
											to='/login'
										>
											Login
										</Link>
									</li>
								)} */}
            </ul>
			<div className="relative hidden lg:block p-2 ml-2">
            <div
              className={`${
                darkMode ? ` text-gray-400` : `text-black`
              } mr-2 quality-first text-[12px] sk-akij-uddin tracking-widest`}
            >
              <a
                href="mailto:sadikurr50@sahedagroup.net"
                className="flex justify-center items-center"
              >
                <FontAwesomeIcon
                  className="text-black text-md p-1"
                  icon={faEnvelope}
                ></FontAwesomeIcon>
                <span className="text-sm">sadikurr50@sahedagroup.net</span>
              </a>
            </div>
            <div
              className={`${
                darkMode ? ` text-gray-400` : `text-black`
              } text-[12px] sk-akij-uddin tracking-widest`}
            >
              <a
                href="tel:+97143485089"
                className="flex justify-center items-center"
              >
                <FontAwesomeIcon
                  className="text-black text-md p-1"
                  icon={faPhone}
                ></FontAwesomeIcon>
                <span className="text-sm">+97143485089</span>
              </a>
            </div>
          </div>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default Header;
