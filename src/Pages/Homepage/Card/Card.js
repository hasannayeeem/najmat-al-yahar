import React from "react";
import { Link } from 'react-router-dom';
import { useContext } from "react";
import { DarkModeContext } from "../../../App";
const Card = ({ service }) => {
  const { title, picture, category, description } = service;
  const [darkMode, setDarkMode] = useContext(DarkModeContext)
  return (
    <div>
      <div className={ `${darkMode ? "bg-teal-600 border-none" : "bg-white border-white border"} max-w-sm  px-6 pt-6 pb-2  shadow-lg transform hover:scale-105 transition duration-500 h-[480px]`}>
        <div className="relative">
          <img className="w-full h-52" src={picture} alt={title} />
          
        </div>
        <h1 className={`${darkMode ? "text-0" : "text-gray-800"} mt-4  text-2xl font-bold cursor-pointer`}>
          {title}
        </h1>
        <p>
          {description}
        </p>
        <div className="my-4">
          <Link to={`/contact-us`} className='d-block'>
            <button className='mt-4 text-xl w-full text-black bg-warning py-2 rounded shadow-lg'>Contact Us</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Card;