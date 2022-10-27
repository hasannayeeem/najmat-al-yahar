import React from "react";
import { Link } from "react-router-dom";
import { FaFacebookF, FaLinkedinIn, FaTwitter, FaYoutube } from "react-icons/fa";
import logo_v2 from "../../Assest/images/sahedaFooter.png";
const Footer = () => {
  const date = new Date().getFullYear();
  // console.log(date);

  return (
    <footer className="lg:flex-row flex flex-col">
      <div className="lg:w-4/12 lg:flex-row w-full flex flex-col justify-between">
        <div className="">
          <Link
            rel="noopener noreferrer"
            to="/"
            className="flex justify-center space-x-3 lg:justify-start"
          >
            <div className="flex items-center justify-center w-12 h-12 rounded-full dark:bg-violet-400"></div>
            <img className="w-full my-auto px-6" src={logo_v2} alt="" />
          </Link>
        </div>
        <div className="lg:w-2/12 w-full bg-warning">
          <ul className="justify-evenly lg:flex-col flex-row  flex">
            <li className="hover:bg-red-700 block px-3 pb-2 pt-3">
              <a href="/">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  className="w-8 h-8 mx-auto hover:text-white  fill-current"
                >
                  <path d="M21.593,7.203c-0.23-0.858-0.905-1.535-1.762-1.766C18.265,5.007,12,5,12,5S5.736,4.993,4.169,5.404	c-0.84,0.229-1.534,0.921-1.766,1.778c-0.413,1.566-0.417,4.814-0.417,4.814s-0.004,3.264,0.406,4.814	c0.23,0.857,0.905,1.534,1.763,1.765c1.582,0.43,7.83,0.437,7.83,0.437s6.265,0.007,7.831-0.403c0.856-0.23,1.534-0.906,1.767-1.763	C21.997,15.281,22,12.034,22,12.034S22.02,8.769,21.593,7.203z M9.996,15.005l0.005-6l5.207,3.005L9.996,15.005z"></path>
                </svg>
              </a>
            </li>
            <li className="hover:bg-red-700 block px-3 py-2">
              <a href="/">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  className="w-8 h-8 mx-auto hover:text-white  fill-current"
                >
                  <path d="M20.947,8.305c-0.011-0.757-0.151-1.508-0.419-2.216c-0.469-1.209-1.424-2.165-2.633-2.633 c-0.699-0.263-1.438-0.404-2.186-0.42C14.747,2.993,14.442,2.981,12,2.981s-2.755,0-3.71,0.055 c-0.747,0.016-1.486,0.157-2.185,0.42C4.896,3.924,3.94,4.88,3.472,6.089C3.209,6.788,3.067,7.527,3.053,8.274 c-0.043,0.963-0.056,1.268-0.056,3.71s0,2.754,0.056,3.71c0.015,0.748,0.156,1.486,0.419,2.187 c0.469,1.208,1.424,2.164,2.634,2.632c0.696,0.272,1.435,0.426,2.185,0.45c0.963,0.043,1.268,0.056,3.71,0.056s2.755,0,3.71-0.056 c0.747-0.015,1.486-0.156,2.186-0.419c1.209-0.469,2.164-1.425,2.633-2.633c0.263-0.7,0.404-1.438,0.419-2.187 c0.043-0.962,0.056-1.267,0.056-3.71C21.003,9.572,21.003,9.262,20.947,8.305z M11.994,16.602c-2.554,0-4.623-2.069-4.623-4.623 s2.069-4.623,4.623-4.623c2.552,0,4.623,2.069,4.623,4.623S14.546,16.602,11.994,16.602z M16.801,8.263 c-0.597,0-1.078-0.482-1.078-1.078s0.481-1.078,1.078-1.078c0.595,0,1.077,0.482,1.077,1.078S17.396,8.263,16.801,8.263z"></path>
                  <circle cx="11.994" cy="11.979" r="3.003"></circle>
                </svg>
              </a>
            </li>
            <li className="hover:bg-red-700 block px-3 py-2">
              <a href="/">
                <svg
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-8 h-8 mx-auto hover:text-white  fill-current"
                >
                  <path d="M23.954 4.569a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.691 8.094 4.066 6.13 1.64 3.161a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.061a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.937 4.937 0 004.604 3.417 9.868 9.868 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.054 0 13.999-7.496 13.999-13.986 0-.209 0-.42-.015-.63a9.936 9.936 0 002.46-2.548l-.047-.02z"></path>
                </svg>
              </a>
            </li>
            <li className="hover:bg-red-700 block px-3 py-3">
              <a href="/">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 32 32"
                  className="w-8 h-8 mx-auto hover:text-white  fill-current"
                >
                  <path d="M32 16c0-8.839-7.167-16-16-16-8.839 0-16 7.161-16 16 0 7.984 5.849 14.604 13.5 15.803v-11.177h-4.063v-4.625h4.063v-3.527c0-4.009 2.385-6.223 6.041-6.223 1.751 0 3.584 0.312 3.584 0.312v3.937h-2.021c-1.984 0-2.604 1.235-2.604 2.5v3h4.437l-0.713 4.625h-3.724v11.177c7.645-1.199 13.5-7.819 13.5-15.803z"></path>
                </svg>
              </a>
            </li>
            <li className="hover:bg-red-700 block px-3 py-2">
              <a href="/">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 32 32"
                  fill="black"
                  className="w-8 h-8 mx-auto hover:text-white  fill-current"
                >
                  <path d="M16 0c-4.349 0-4.891 0.021-6.593 0.093-1.709 0.084-2.865 0.349-3.885 0.745-1.052 0.412-1.948 0.959-2.833 1.849-0.891 0.885-1.443 1.781-1.849 2.833-0.396 1.020-0.661 2.176-0.745 3.885-0.077 1.703-0.093 2.244-0.093 6.593s0.021 4.891 0.093 6.593c0.084 1.704 0.349 2.865 0.745 3.885 0.412 1.052 0.959 1.948 1.849 2.833 0.885 0.891 1.781 1.443 2.833 1.849 1.020 0.391 2.181 0.661 3.885 0.745 1.703 0.077 2.244 0.093 6.593 0.093s4.891-0.021 6.593-0.093c1.704-0.084 2.865-0.355 3.885-0.745 1.052-0.412 1.948-0.959 2.833-1.849 0.891-0.885 1.443-1.776 1.849-2.833 0.391-1.020 0.661-2.181 0.745-3.885 0.077-1.703 0.093-2.244 0.093-6.593s-0.021-4.891-0.093-6.593c-0.084-1.704-0.355-2.871-0.745-3.885-0.412-1.052-0.959-1.948-1.849-2.833-0.885-0.891-1.776-1.443-2.833-1.849-1.020-0.396-2.181-0.661-3.885-0.745-1.703-0.077-2.244-0.093-6.593-0.093zM16 2.88c4.271 0 4.781 0.021 6.469 0.093 1.557 0.073 2.405 0.333 2.968 0.553 0.751 0.291 1.276 0.635 1.844 1.197 0.557 0.557 0.901 1.088 1.192 1.839 0.22 0.563 0.48 1.411 0.553 2.968 0.072 1.688 0.093 2.199 0.093 6.469s-0.021 4.781-0.099 6.469c-0.084 1.557-0.344 2.405-0.563 2.968-0.303 0.751-0.641 1.276-1.199 1.844-0.563 0.557-1.099 0.901-1.844 1.192-0.556 0.22-1.416 0.48-2.979 0.553-1.697 0.072-2.197 0.093-6.479 0.093s-4.781-0.021-6.48-0.099c-1.557-0.084-2.416-0.344-2.979-0.563-0.76-0.303-1.281-0.641-1.839-1.199-0.563-0.563-0.921-1.099-1.197-1.844-0.224-0.556-0.48-1.416-0.563-2.979-0.057-1.677-0.084-2.197-0.084-6.459 0-4.26 0.027-4.781 0.084-6.479 0.083-1.563 0.339-2.421 0.563-2.979 0.276-0.761 0.635-1.281 1.197-1.844 0.557-0.557 1.079-0.917 1.839-1.199 0.563-0.219 1.401-0.479 2.964-0.557 1.697-0.061 2.197-0.083 6.473-0.083zM16 7.787c-4.541 0-8.213 3.677-8.213 8.213 0 4.541 3.677 8.213 8.213 8.213 4.541 0 8.213-3.677 8.213-8.213 0-4.541-3.677-8.213-8.213-8.213zM16 21.333c-2.948 0-5.333-2.385-5.333-5.333s2.385-5.333 5.333-5.333c2.948 0 5.333 2.385 5.333 5.333s-2.385 5.333-5.333 5.333zM26.464 7.459c0 1.063-0.865 1.921-1.923 1.921-1.063 0-1.921-0.859-1.921-1.921 0-1.057 0.864-1.917 1.921-1.917s1.923 0.86 1.923 1.917z"></path>
                </svg>
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="pl-8 lg:w-8/12 w-full divide-y bg-gray-700 text-gray-100">
        <div className="py-10 mx-auto space-y-8 lg:space-y-0">
          <div className="grid grid-cols-2 text-sm gap-x-3 gap-y-8 lg:grid-cols-3">
            <div className="space-y-3">
              <h3 className="tracking-wide uppercase dark:text-gray-50">
                Services
              </h3>
              <ul className="space-y-1">
                <li>
                  <Link rel="" to="/" className="hover:text-yellow-500">
                    Traveling
                  </Link>
                </li>
                <li>
                  <Link rel="noopener noreferrer" className="hover:text-yellow-500" to="/">
                    Constructing
                  </Link>
                </li>
                <li>
                  <Link rel="noopener noreferrer" className="hover:text-yellow-500" to="/">
                    Consulting
                  </Link>
                </li>
                <li>
                  <Link rel="noopener noreferrer" className="hover:text-yellow-500" to="/">
                    IT
                  </Link>
                </li>
              </ul>
            </div>
            <div className="space-y-3">
              <h3 className="tracking-wide uppercase dark:text-gray-50">
                Companies
              </h3>
              <ul className="space-y-1">
                <li>
                  <Link rel="noopener noreferrer" className="hover:text-yellow-500"  to="/company/623853b2e91c88cde579245e">
                  Najmat-Al-Yahar
                  </Link>
                </li>
                <li>
                  <Link rel="" className="hover:text-yellow-500" to="/companies/parvez">
                  <span className="block ">Mohammed Parvez</span> Information Technology
                  </Link>
                </li>
                <li>
                  <Link rel="noopener noreferrer " className="hover:text-yellow-500" to="/companies/hasaim">
                  Hasaim international
                  </Link>
                </li>
                <li>
                  <Link rel="noopener noreferrer" className="hover:text-yellow-500" to="/company/sadikur">
                  <span className="block ">Sadikur Consulting &</span> Human resources R.S.L
                  </Link>
                </li>
              </ul>
            </div>
            <div className="space-y-3 ">
              <h3 className="uppercase dark:text-gray-50">Founder</h3>
              <ul className="space-y-1">
                <li>
                  <Link rel="noopener noreferrer" className="hover:text-yellow-500"  to="/">
                    Sadikur Rahman
                  </Link>
                </li>
                <li className="flex mt-2">
                  <a href="https://m.facebook.com/profile.php?id=100006470061104" target={`_blank`}>
                <FaFacebookF></FaFacebookF></a>
                    <FaLinkedinIn className=" mx-4 pointer"></FaLinkedinIn>
                    <FaTwitter></FaTwitter>
                    <FaYoutube className="ml-4 pointer"></FaYoutube>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="py-6 text-sm text-center dark:text-gray-400">
          © {date}{" "}
          <Link className="text-yellow-500 mr-1" to="https://sahedagroup.net/" >
            SahedaGroup  
          </Link>
            All rights reserved.
             {/* <span className="text-xs">Developed By <a href="https://nayeemhasan.web.app" target={`_blank`} className="text-xs text-yellow-500">Nayeem Hasan</a></span> */}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
