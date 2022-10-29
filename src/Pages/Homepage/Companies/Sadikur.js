import React from 'react';
import { useState } from 'react';
import useSadikur from '../../../hooks/useSadikur';
import Card from '../Card/Card';

const Sadikur = () => {
    const [darkMode, setDarkMode] = useState(false);
    const sadikur = [{
        "index": 1,
        "title": "HR & Consultant",
        "type": "New Trending",
        "picture": "https://www.ismartrecruit.com/upload/blog/main_image/Top_15_HR_Consulting_Companies.jpg",
        "duration": "90 days",
        "assignment": "9 Assignment",
        "discount": "17% Discount",
        "price": "$32",
        "category": "two",
        "description": "Specialist advice and services provided by a third-party to help businesses maximise the efficiency of their HR operations and implement appropriate new policies..."
      },
      {
        "index": 2,
        "title": "HR & Consultant",
        "type": "New Trending",
        "picture": "https://timebusinessnews.com/wp-content/uploads/HR-Consultants.jpg",
        "duration": "90 days",
        "assignment": "9 Assignment",
        "discount": "17% Discount",
        "price": "$32",
        "category": "three",
        "description": "HR consultancies are often brought in to address a particular problem or deficit and are tasked with assessment, auditing, proposal..."
      },
      {
        "index": 2,
        "title": "HR & Consultant",
        "type": "New Trending",
        "picture": "https://timebusinessnews.com/wp-content/uploads/HR-Consultants.jpg",
        "duration": "90 days",
        "assignment": "9 Assignment",
        "discount": "17% Discount",
        "price": "$32",
        "category": "three",
        "description": " and procedures in the best way possible. They are often valued by companies for their ability to bring an outsider’s objective view..."
      }];
  
  
    return (
      <section>
        <h1 className="text-center text-3xl py-3 font-bold border-b-2 border-b-gray-300">
          Welcome To Sadikur Consulting & Human resources R.S.L </h1>
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
          {sadikur?.map((service) => (
            <Card service={service} key={service?._id}></Card>
          ))}
        </div>
      </section>
    );
};

export default Sadikur;