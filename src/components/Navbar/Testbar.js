// import React, { useContext, useState } from "react";
// import { Link, NavLink, useLocation } from "react-router-dom";
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

// const Testbar = () => {
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
//           colorChange && (darkMode ? "bg-white" : "bg-white")} ${
//           location === "/properties" ? "z-10" : "z-50"
//         }`}
//       >
//         {/* phone navbar */}
//         <div className="flex flex-wrap items-center justify-evenly py-6 sm:px-2 px-5">
//           <label
//             for="dashboard-drower"
//             tabIndex="1"
//             class={`${
//               location.includes("dashboard") ? "block" : "hidden"
//             } md:hidden text-white cursor-pointer`}
//           >
//             <MdDashboardCustomize className="h-5 w-5"></MdDashboardCustomize>
//           </label>

//           <div className=" md:w-auto flex">
//             <Link to="#">
//                             <img className='w-12' src="https://sahedagroup.net/assets/images/logo_of_saheda.png" alt="" />
//                         </Link>
//             <a
//               style={{ letterSpacing: "2px" }}
//               href="#"
//               className="font-bold  text-2xl"
//             >
//               <span className="text-blue-500 font-bold">Saheda</span>{" "}
//               <span className="text-red-700">Group</span>
//             </a>
//           </div>

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
//             <NavLink
//               className={({ isActive }) =>
//                 isActive ? "activeLink" : "navLink"
//               }
//               to={"/contact-us"}
//             >
//               <li className=" smNav-item inline-block pb-2 smNav-link">
//                 Management Team
//               </li>
//             </NavLink>
//           </ul>

//           {/* desktop navbar  */}
//           <div className="hidden lg:block w-full md:w-auto" id="menu">
//             <nav className="w-full bg-teal-100  md:bg-transparent rounded shadow-lg px-6 py-0 mt-4 text-center md:p-0 md:mt-0 md:shadow-none">
//               <ul class="menu menu-horizontal p-0">
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
//                 <li className="md:ml-2.5 md:hidden lg:block nav-item">
//                   <Link
//                     to={"/team"}
//                     className="nav-link py-1 inline-block md:text-white md:px-2 font-semibold"
//                     href="#"
//                   >
//                     Management Team{" "}
//                   </Link>
//                 </li>
//               </ul>
//             </nav>
//           </div>
//           <div className="relative hidden lg:block p-2 ml-2">
//             <div
//               className={`${
//                 darkMode ? ` text-gray-400` : `text-white`
//               } mr-2 quality-first text-[12px] sk-akij-uddin tracking-widest`}
//             >
//               <a
//                 href="mailto:sadikurr50@sahedagroup.net"
//                 className="flex justify-center items-center"
//               >
//                 <FontAwesomeIcon
//                   className="text-blue-100 text-md p-1"
//                   icon={faEnvelope}
//                 ></FontAwesomeIcon>
//                 <span className="text-sm">sadikur50@sahedagroup.net</span>
//               </a>
//             </div>
//             <div
//               className={`${
//                 darkMode ? ` text-gray-400` : `text-white`
//               } text-[12px] sk-akij-uddin tracking-widest`}
//             >
//               <a
//                 href="tel:+97143485089"
//                 className="flex justify-center items-center"
//               >
//                 <FontAwesomeIcon
//                   className="text-blue-100 text-md p-1"
//                   icon={faPhone}
//                 ></FontAwesomeIcon>
//                 <span className="text-sm">+97143485089</span>
//               </a>
//             </div>
//           </div>
//         </div>
        
//       </header>
//       {/* -- end header -- */}
//     </div>
//   );
// };

// export default Testbar;
