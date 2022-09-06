import { faEnvelope, faPhone } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import logo from "../../Assest/images/image-1.png";
import logo_v3 from "../../Assest/images/logov4.png";
import "./Header.css";

const Header = () => {
  return (
    <div>
      <div className="w-full bg-[#f7f7f7]">
        <div className="max-w-[1140px] m-auto grid grid-cols-2">
          <div className="flex gap-5 items-center p-2">
            <small>Follow Us</small>
            <div className="flex gap-1">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 32 32"
                className="w-4 h-4 fill-[#2e6abf]"
              >
                <path d="M32 16c0-8.839-7.167-16-16-16-8.839 0-16 7.161-16 16 0 7.984 5.849 14.604 13.5 15.803v-11.177h-4.063v-4.625h4.063v-3.527c0-4.009 2.385-6.223 6.041-6.223 1.751 0 3.584 0.312 3.584 0.312v3.937h-2.021c-1.984 0-2.604 1.235-2.604 2.5v3h4.437l-0.713 4.625h-3.724v11.177c7.645-1.199 13.5-7.819 13.5-15.803z"></path>
              </svg>
              <svg
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
                className="w-4 h-4 fill-[#2e6abf]"
              >
                <path d="M23.954 4.569a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.691 8.094 4.066 6.13 1.64 3.161a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.061a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.937 4.937 0 004.604 3.417 9.868 9.868 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.054 0 13.999-7.496 13.999-13.986 0-.209 0-.42-.015-.63a9.936 9.936 0 002.46-2.548l-.047-.02z"></path>
              </svg>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="24"
                viewBox="0 0 24 24"
                className="w-4 h-4 fill-[#2e6abf]"
              >
                <path d="M20.947,8.305c-0.011-0.757-0.151-1.508-0.419-2.216c-0.469-1.209-1.424-2.165-2.633-2.633 c-0.699-0.263-1.438-0.404-2.186-0.42C14.747,2.993,14.442,2.981,12,2.981s-2.755,0-3.71,0.055 c-0.747,0.016-1.486,0.157-2.185,0.42C4.896,3.924,3.94,4.88,3.472,6.089C3.209,6.788,3.067,7.527,3.053,8.274 c-0.043,0.963-0.056,1.268-0.056,3.71s0,2.754,0.056,3.71c0.015,0.748,0.156,1.486,0.419,2.187 c0.469,1.208,1.424,2.164,2.634,2.632c0.696,0.272,1.435,0.426,2.185,0.45c0.963,0.043,1.268,0.056,3.71,0.056s2.755,0,3.71-0.056 c0.747-0.015,1.486-0.156,2.186-0.419c1.209-0.469,2.164-1.425,2.633-2.633c0.263-0.7,0.404-1.438,0.419-2.187 c0.043-0.962,0.056-1.267,0.056-3.71C21.003,9.572,21.003,9.262,20.947,8.305z M11.994,16.602c-2.554,0-4.623-2.069-4.623-4.623 s2.069-4.623,4.623-4.623c2.552,0,4.623,2.069,4.623,4.623S14.546,16.602,11.994,16.602z M16.801,8.263 c-0.597,0-1.078-0.482-1.078-1.078s0.481-1.078,1.078-1.078c0.595,0,1.077,0.482,1.077,1.078S17.396,8.263,16.801,8.263z"></path>
                <circle cx="11.994" cy="11.979" r="3.003"></circle>
              </svg>
              <svg
                stroke="currentColor"
                fill="#2e6abf"
                stroke-width="0"
                viewBox="0 0 16 16"
                height="0.8em"
                width="0.8em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z"></path>
              </svg>
            </div>
          </div>
          <div className="flex items-center justify-end mr-4">
            <span className="text-[#2e6abf] mr-2">
              <FontAwesomeIcon icon={faEnvelope}></FontAwesomeIcon>
            </span>
            <small>Web Mail</small>
          </div>
        </div>
      </div>
      <div className="max-w-[1140px] m-auto pb-1 px-3 flex justify-between">
        <div className="flex items-center">
          <img src={logo_v3} alt="" />
        </div>
        <div className="text-[14px] flex gap-5">
          <div className="flex items-center">
           <FontAwesomeIcon className="text-blue-500 text-xl p-2 border-2 rounded-full border-blue-100 m-4" icon={faPhone}></FontAwesomeIcon>
            <div>
              <p className="font-semibold">Toll Free: 08000016609</p>
              <p className="font-extrabold">Hot Line:16609</p>
            </div>
          </div>
          <div className="flex items-center">
          <FontAwesomeIcon className="text-blue-500 text-xl p-2 border-2 rounded-full border-blue-100 m-4" icon={faEnvelope}></FontAwesomeIcon>
            <div>
              <p className="font-semibold">Email us</p>
              <p className="font-extrabold">info@najmat.net</p>
            </div>
          </div>
          <div className="flex items-center">
            <div className="relative p-2 ml-2">
              <h1 className="text-[14px] font-extrabold ml-3 quality-first">
                " Quality First "
              </h1>
              <p className="ml-[-0.5rem] mr-2 text-[12px] sk-akij-uddin">
                - NAJMAT-AL-YAHAR
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-[#1662dc] w-full navbar sticky top-0">
        <nav className="bg-[#1662dc] max-w-[1140px] m-auto">
          <a className="text-white px-3 py-0 inline-block" href="/">
            Home
          </a>
          <a className="text-white px-3 py-0 inline-block" href="#about">
            About
          </a>
          <a className="text-white px-3 py-0 inline-block" href="#companies">
            Our Companies
          </a>
          <a className="text-white px-3 py-0 inline-block" href="#services">
            Services
          </a>
          <a className="text-white px-3 py-0 inline-block" href="#projects">
            Media
          </a>
          <a className="text-white px-3 py-0 inline-block" href="#contactUs">
            Contact Us
          </a>
        </nav>
      </div>
    </div>
  );
};

export default Header;
