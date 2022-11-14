import React, { useContext } from "react";
import { useLocation } from "react-router-dom";
import { DarkModeContext } from "../../../App";
import Engineer from "../Engineer/Engineer";

const Engineers = () => {
  const [darkMode, setDarkMode] = useContext(DarkModeContext)

  const homePage = useLocation().pathname === "/";
  return (
    <div className={`${homePage ? 'pt-20' : 'pt-28'}`}>
      <h2 style={{fontFamily:"'Rajdhani', sans-serif"}} className={`${darkMode && "text-white"} uppercase text-3xl font-bold text-center py-3`}>
        <span className="text-[#f61a1a]">Management </span> Team
      </h2>
      <div className='flex justify-center'>
				<div className=' rounded-md w-32 h-1 bg-[#f61a1a]'></div>
				<div className=' rounded-md w-4 h-1 mx-2 bg-[#ffd103]'></div>
				<div className=' rounded-md w-2 h-1 bg-[#030303]'></div>
			</div>
      <Engineer/>
    </div>
  );
};

export default Engineers;
