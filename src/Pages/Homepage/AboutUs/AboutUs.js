import React, { useContext } from "react";
import { GiCheckMark } from "react-icons/gi";
import { Bounce } from "react-reveal";
import { DarkModeContext } from "../../../App";

const AboutUs = () => {
  const [darkMode] = useContext(DarkModeContext);

  return (
    <div
      id="about"
      style={{ fontFamily: "'Rajdhani', sans-serif" }}
      className={`${darkMode && "text-white"}  py-16 px-10 sm:px-20`}
    >
      <h2
        className={`${
          darkMode && "text-white"
        } uppercase text-3xl font-bold text-center`}
      >
        About <span className="text-[#f61a1a]">Us</span>
      </h2>
      <div className="flex justify-center mb-16">
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
            Mission and vision of saheda group of industries: In this era of mass
            production, as it is very hard to stand out with one product, Saheda
            Group focuses on making the best in all sectors. Any company’s
            vision is actually the dream to which the company always strives to
            reach where it may become possible or not. Saheda Group is not
            something different.Expanding the business in the abroad and
            becoming one of the market leaders internationally are the visions
            of Saheda Group. The mission of Saheda Group is to be the market
            leader through their best effort, suitable and competitive marketing
            strategy and the consumers support. Now they are in the position of
            challenger and their vision focuses on those missions, goals and
            objectives which will make them able to be the leader from the
            challenger to the leader in the market
          </p>
        </div></Bounce>
      </div>
    </div>
  );
};

export default AboutUs;
