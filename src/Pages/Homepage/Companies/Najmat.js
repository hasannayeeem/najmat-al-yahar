import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import Card from '../Card/Card';

const Najmat = () => {
    const [darkMode, setDarkMode] = useState(false);
    const [najmat, setNajmat] = useState([]);
    useEffect( () =>{
        fetch('https://neighbour-home--server.herokuapp.com/constructor')
        .then(res => res.json())
        .then(data => setNajmat(data));
        
    },[najmat,  setNajmat]);


  return (
    <section>
      <h1 className="text-center text-3xl py-3 font-bold border-b-2 border-b-gray-300">
        Welcome To Najmat Al Yahar </h1>
      <h2
        style={{ fontFamily: "'Rajdhani', sans-serif" }}
        className={`${
          darkMode && "text-white"
        } uppercase  font-bold text-3xl pb-3 pt-12 text-center`}
      >Our <span className="text-[#f61a1a]">Services</span>
      </h2>
      <div className="flex justify-center">
        <div className=" rounded-md w-32 h-1 bg-[#f61a1a]"></div>
        <div className=" rounded-md w-4 h-1 mx-2 bg-[#ffd103]"></div>
        <div className=" rounded-md w-2 h-1 bg-[#030303]"></div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 lg:ml-6 py-8 mx-auto gap-y-8 mt-12">
        {najmat?.map((service) => (
          <Card service={service} key={service?._id}></Card>
        ))}
      </div>
    </section>
  );
};

export default Najmat;