import React, { useContext, useState } from "react";
import { useEffect } from "react";
import { Fade } from "react-reveal";
import { Link, useParams } from "react-router-dom";
import { DarkModeContext } from "../../App";
import useServices from "../../hooks/useServices";
import Card from "../Homepage/Card/Card";

const ServiceDetails = () => {
	const [darkMode, setDarkMode] = useContext(DarkModeContext);
	const {category }= useParams();
	console.log(category);
	const [services] = useServices();
    
  return (
<section className={`${darkMode && "dark-theme"} bg-gray-200 py-12  duration-300 lg:px-16`}>
      <Link to={`#`}><button onClick={()=> window.history.back()} className='lg:ml-24 btn btn-sm btn-yellow-500'>back</button></Link>
      <div
        className={`hero min-h-screen ${darkMode && "dark-theme"}`}
      >
        <div className={`hero-content ${darkMode ? 'bg-teal-600' : 'bg-white'} mx-12 shadow-2xl py-12 lg:px-12 flex-col lg:flex-row`}>
          <Fade right duration={1500}>
            <div className="">
              <img
                src={``}
                className="lg:max-w-sm max-w-xs rounded-lg shadow-2xl"
                alt=""
              />
            </div>
          </Fade>
          <Fade left duration={1500}>
            <div className={`lg:ml-8 ${darkMode ? "text-white" : "black"} pr-12 `}>
              <h1 className="text-3xl font-bold mb-4 pt-4">{}</h1>
              <h1 className="text-sm font-semibold capitalize  my-1">
                Comming Soon...
              </h1>
            </div>
          </Fade>
        </div>
      </div>
    </section>
  );
};

export default ServiceDetails;
