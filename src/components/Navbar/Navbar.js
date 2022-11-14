// import React, { useContext, useState } from "react";
// import { Link, NavLink, useLocation } from "react-router-dom";
// import logo_v3 from "../../Assest/images/shaheda.png";
// import {
//   MdModeNight,
//   MdOutlineDarkMode,
//   MdDashboardCustomize,
//   MdNightsStay,
//   MdLightMode,
//   MdOutlineClose,
// } from "react-icons/md";
// import { GoThreeBars } from "react-icons/go";
// import { IoMdNotificationsOutline } from "react-icons/io";
// import "./Navbar.css";
// import { DarkModeContext } from "../../App";
// import { useAuthState } from "react-firebase-hooks/auth";
// import auth from "../../firebase.init";
// import Loading from "../../Shared/Loading/Loading";
// import { signOut } from "firebase/auth";
// import NotificationModal from "./NotificationModal";
// import useAdmin from "../../hooks/useRole";
// import useRole from "../../hooks/useRole";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faEnvelope, faPhone } from "@fortawesome/free-solid-svg-icons";

// const Navbar = () => {
//   const [colorChange, setColorchange] = useState(false);
//   let [toggle, setToggle] = useState(false);
//   let [notificationModal, setNotificationModal] = useState(false);
//   const [user, loading] = useAuthState(auth);
//   // let navigat = useNavigate();
//   let location = useLocation().pathname;
//   const [darkMode, setDarkMode] = useContext(DarkModeContext);
//   let [role, roleLoading] = useRole(user);
//   //     console.log(role);

//   if (loading || roleLoading) {
//     return <Loading />;
//   }

//   // console.log(user?.email)

//   // console.log(location);
//   const navBtnHndle = () => {
//     setToggle(!toggle);
//   };
//   const changeNavbarColor = () => {
//     if (window.scrollY >= 80) {
//       setColorchange(true);
//     } else {
//       setColorchange(false);
//     }
//   };
//   window.addEventListener("scroll", changeNavbarColor);
//   //   console.log(colorChange);
//   return (
//     <div className="">
//       {/* start header  */}
//       <header
//         className={`fixed duration-300 top-0 left-0 w-full  px-4 sm:px-8 lg:px-16 xl:px-28 2xl:px-64 ${
//           colorChange && (darkMode ? "bg-teal-600" : "bg-blue-800")
//         } ${location !== "/" && (darkMode ? "bg-teal-600" : "bg-blue-800")} ${
//           location === "/properties" ? "z-10" : "z-50"
//         }`}
//       >
//         <div
//           className={`${
//             colorChange ? "lg:hidden opacity-0" : "md:flex opacity-100"
//           } hidden justify-between duration-500 items-center text-sm`}
//           // style="border-color: rgba(255,255,255,.25)"
//         >
//           <div className="flex items-center">
//             <img className="w-24 h-24 p-2" src={logo_v3} alt="" />
//           </div>

//           <div className="text-[14px] flex gap-5">
//             <div className="flex items-center">
//               <a href="tel:+97143485089">
//                 <FontAwesomeIcon
//                   className="text-blue-500 text-xl p-2 border-2 rounded-full border-blue-100 m-4"
//                   icon={faPhone}
//                 ></FontAwesomeIcon>
//               </a>
//               <div>
//                 <p
//                   className={`${
//                     darkMode ? ` text-gray-400` : `text-black`
//                   }  font-extrabold`}
//                 >
//                   Telephone: +97143485089
//                 </p>
//               </div>
//             </div>
//             <div className="flex items-center">
//               <a href="mailto:sadikurr50@sahedagroup.net">
//                 <FontAwesomeIcon
//                   className="text-blue-500 text-xl p-2 border-2 rounded-full border-blue-100 m-4"
//                   icon={faEnvelope}
//                 ></FontAwesomeIcon>
//               </a>
//               <div>
//                 <p
//                   className={`${
//                     darkMode ? ` text-gray-400` : `text-black`
//                   }  font-extrabold`}
//                 >
//                   Email us
//                 </p>
//                 <p
//                   className={`${
//                     darkMode ? ` text-gray-400` : `text-black`
//                   }  font-extrabold`}
//                 >
//                   sadikurr50@sahedagroup.net
//                 </p>
//               </div>
//             </div>
//             <div className="flex items-center">
//               <div className="relative p-2 ml-2">
//                 <h1
//                   className={`${
//                     darkMode ? ` text-gray-400` : `text-black`
//                   } text-[14px] font-extrabold ml-3 quality-first`}
//                 >
//                   "Your Satisfactions is our priority"
//                 </h1>
//                 <p
//                   className={`${
//                     darkMode ? ` text-gray-400` : `text-black`
//                   } ml-[-0.5rem] mr-2 text-[12px] sk-akij-uddin tracking-widest`}
//                 >
//                   SAHEDA-GROUP
//                 </p>
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* phone navbar */}
//         <div className="flex flex-wrap items-center justify-between py-6 sm:px-2 px-5">
//           <label
//             for="dashboard-drower"
//             tabIndex="1"
//             class={`${
//               location.includes("dashboard") ? "block" : "hidden"
//             } md:hidden text-white cursor-pointer`}
//           >
//             <MdDashboardCustomize className="h-5 w-5"></MdDashboardCustomize>
//           </label>

//           <div className=" md:w-auto">
//             <a
//               style={{ letterSpacing: "2px" }}
//               href="/"
//               className="text-white font-semibold  text-2xl"
//             >
//               Saheda Group
//             </a>
//             {/* <Link to="#">
//                             <img className='w-40' src="https://i.ibb.co/Mh84735/logo.png" alt="" />
//                         </Link> */}
//           </div>

//           {/* <label htmlFor="menu-toggle" className="pointer-cursor md:hidden block"><svg className="fill-current text-white"
//                         xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20">
//                         <title>menu</title>
//                         <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"></path>
//                     </svg></label>

//                     <input className="hidden" type="checkbox" id="menu-toggle" /> */}

//           <span
//             onClick={navBtnHndle}
//             className="md:hidden text-white text-2xl cursor-pointer"
//           >
//             {toggle ? (
//               <MdOutlineClose></MdOutlineClose>
//             ) : (
//               <GoThreeBars></GoThreeBars>
//             )}
//           </span>

//           <ul
//             onClick={navBtnHndle}
//             className={`mobile-manu flex md:hidden flex-col text-center z-10   left-0 w-full bg-teal-100  absolute  py-4 duration-500 ${
//               toggle ? " opacity-100  top-20" : " top-[-350px] opacity-0"
//             }`}
//           >
//             <NavLink
//               className={({ isActive }) =>
//                 isActive ? "activeLink" : "navLink"
//               }
//               to={"/"}
//             >
//               <li className=" smNav-item inline-block smNav-link">Home</li>
//             </NavLink>
//             <NavLink
//               className={({ isActive }) =>
//                 isActive ? "activeLink" : "navLink"
//               }
//               to={"/about"}
//             >
//               <li className=" smNav-item py-2 inline-block smNav-link">
//                 About
//               </li>
//             </NavLink>
//             <NavLink
//               className={({ isActive }) =>
//                 isActive ? "activeLink" : "navLink"
//               }
//               to={"/companies"}
//             >
//               <li className=" smNav-item inline-block smNav-link">
//                 Our Sister Concerns
//               </li>
//             </NavLink>
//             <NavLink
//               className={({ isActive }) =>
//                 isActive ? "activeLink" : "navLink"
//               }
//               to={"/contact-us"}
//             >
//               <li className=" smNav-item inline-block py-2 smNav-link">
//                 Contact Us
//               </li>
//             </NavLink>
//           </ul>

//           {/* desktop navbar  */}
//           <div className="hidden lg:block w-full md:w-auto" id="menu">
//             <nav className="w-full bg-teal-900  md:bg-transparent rounded shadow-lg px-6 py-10 mt-4 text-center md:p-0 md:mt-0 md:shadow-none">
//               <ul className="md:flex items-center">
//                 <li className="nav-item">
//                   <Link
//                     to={"/"}
//                     className={`nav-link py-1 inline-block ${
//                       colorChange ? "text-black" : ""
//                     } md:text-white lg:px-2 md:hidden lg:block font-semibold`}
//                     href="#"
//                   >
//                     Home
//                   </Link>
//                 </li>
//                 <li className="md:ml-2.5 nav-item">
//                   <Link
//                     to={"/about"}
//                     className="nav-link py-1 inline-block md:text-white md:px-2 font-semibold"
//                     href="#"
//                   >
//                     About
//                   </Link>
//                 </li>
//                 <li className="md:ml-2.5 nav-item">
//                   <Link
//                     to={"/companies"}
//                     className="nav-link py-1 inline-block md:text-white md:px-2 font-semibold"
//                   >
//                     Our Sister Concerns
//                   </Link>
//                 </li>
//                 <li className="md:ml-2.5 md:hidden lg:block nav-item">
//                   <Link
//                     to={"/contact-us"}
//                     className="nav-link py-1 inline-block md:text-white md:px-2 font-semibold"
//                     href="#"
//                   >
//                     Contact Us{" "}
//                   </Link>
//                 </li>
//               </ul>
//             </nav>
//           </div>
//         </div>
//       </header>
//       {/* -- end header -- */}
//     </div>
//   );
// };

// export default Navbar;
