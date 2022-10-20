import React, { useContext, useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { DarkModeContext } from "../../App";
import useServices from "../../hooks/useServices";
import Card from "../Homepage/Card/Card";

const ServiceDetails = () => {
	const [darkMode, setDarkMode] = useContext(DarkModeContext);
	const {category }= useParams();
	console.log(category);
	const [services] = useServices();
    
  return (
<div className='flex justify-center items-center pt-12 pb-20'>
            <div className='md:px-4 md:grid md:grid-cols-2 lg:grid-cols-3 gap-5 space-y-4 md:space-y-0'>
            {
                services?.map(service => (
                    <Card service={service} key={service?._id}></Card>
                ))
            }
            </div>asdf</div>
  );
};

export default ServiceDetails;
