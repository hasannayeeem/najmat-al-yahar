import React, { useContext } from "react";
import { GiCheckMark } from "react-icons/gi";
import { Bounce } from "react-reveal";
import { useLocation } from "react-router-dom";
import { DarkModeContext } from "../../../App";

const AboutUs = () => {
  const [darkMode] = useContext(DarkModeContext);
  const homePage = useLocation().pathname === '/';

  return (
    <div
      id="about"
      style={{ fontFamily: "'Rajdhani', sans-serif" }}
      className={`${darkMode && "text-white"} ${homePage ? '' : 'lg:mt-[170px]'} lg:mb-8 px-10 sm:px-20`}
    >
      <h2
        className={`${
          darkMode && "text-white"
        } uppercase text-3xl font-bold text-center`}
      >
        About <span className="text-[#f61a1a]">Us</span>
      </h2>
      <div className="flex justify-center mb-8">
        <div className=" rounded-md w-32 h-1 bg-[#f61a1a]"></div>
        <div className=" rounded-md w-4 h-1 mx-2 bg-[#ffd103]"></div>
        <div className=" rounded-md w-2 h-1 bg-[#030303]"></div>
      </div>
      <div className="flex lg:max-w-[1210px] mx-auto capitalize flex-col sm:flex-row">
        <Bounce left duration={1500}>
        <div className="w-10/12 sm:w-5/12">
          <div className="w-full block text-left">
            <img
              src="https://sahedagroup.net/assets/images/about.png"
              alt=""
              className="w-full overflow-hidden h-full"
            />
          </div>
        </div></Bounce>
        <div className=" w-5"></div>
        <Bounce right duration={1500}>
        <div className="w-11/12 sm:w-6/12 text-center sm:text-left sm:mt-0 mt-8">
          {/* <h5 className="font-semibold">About Us</h5> */}

          <p className="py-3">
          Our vision for the future is clear. We want to be the best, the first and the only choice for our customers in the service space, ensuring top quality services and best quality products. The new learning’s each day and abreast of advancements helps us to keep pace with the global developments, while we Endeavour to remain true to our core values in conducting our business activities. We at Saheda Group value our customers and take pride and ownership in delivering the best to our customers.
 
 We are obligated to provide honest, ethical and professional dealings with our customers, employees, and also with our vendors, subcontractors, clients, banks, agencies, etc. With the patronage of our customers and with the co-operation of our employees and stakeholders, we are able to keep the focus and move forward. I like to thank all for their committed and dedicated efforts contributed towards the achievement of the company’s goals. I am confident that we will continue to exceed the expectations, deliver value to our prestigious clients and expand our foothold into other geographies.
 
          </p>
        </div></Bounce>
      </div>
    </div>
  );
};

export default AboutUs;
