import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import Card from '../Card/Card';

const Najmat = () => {
    const [darkMode, setDarkMode] = useState(false);
    const najmat =
      [
        {
          "_id": "623853b2614a311d5abafdd1",
          "index": 0,
          "title": "Mega Mall Construction",
          "type": "New Trending",
          "picture": "https://nepirockcastle.com/wp-content/uploads/2019/03/nepi-MEGA-MALL-ROMANIA-1.jpg",
          "duration": "90 days",
          "assignment": "9 Assignment",
          "discount": "17% Discount",
          "price": "$32",
          "category": "one",
          "description": "We are providing big mall project for you. You can choose our designed projects or meet our engineers for custom build your project"
        },
        {
          "_id": "623853b2578d1ae0de9e6ad5",
          "index": 1,
          "title": "Highway Repairing",
          "type": "New Trending",
          "picture": "https://simex.com.bd/wp-content/uploads/2021/05/Fugear-1Construction-%E2%80%93-SIMEX-Bangladesh-1200x720.jpg",
          "duration": "90 days",
          "assignment": "9 Assignment",
          "discount": "17% Discount",
          "price": "$32",
          "category": "two",
          "description": "We are providing repairing service for your old project. You can choose our designed projects or meet our engineers for custom build your project"
        },
        {
          "_id": "623853b2d2ee71fb149b76c7",
          "index": 2,
          "title": "Building Engineering",
          "type": "New Trending",
          "picture": "https://simex.com.bd/wp-content/uploads/2020/10/SIMEX-Bangladesh-can-Provide-the-Ultimate-Guidelines-for-Building-Construction-1200x720.jpg",
          "duration": "90 days",
          "assignment": "9 Assignment",
          "discount": "17% Discount",
          "price": "$32",
          "category": "three",
          "description": "We do home building engineering project for you. You can choose our designed projects or meet our engineers for custom build your project"
        },
        {
          "_id": "623853b2e91c88cde579245e",
          "index": 3,
          "title": "Building Architecture",
          "type": "New Trending",
          "picture": "https://media.istockphoto.com/photos/hand-sketching-a-designer-villa-with-pool-picture-id1063723682?k=20&m=1063723682&s=612x612&w=0&h=m4E1YDtdg8WhGwr1hBG_X_wGoN9jNRME1DXHJ9oqSl4=",
          "duration": "90 days",
          "assignment": "9 Assignment",
          "discount": "17% Discount",
          "price": "$32",
          "category": "four",
          "description": "We have lot of Architecture Engineers. You can Design your project from us. We providing lifetime support for every customer."
        },
        {
          "_id": "623853bgf39582e48409ccc6",
          "index": 4,
          "title": "Construction Services",
          "type": "New Trending",
          "picture": "https://img.tradeford.com/pimages/l/7/941967.jpg",
          "duration": "90 days",
          "assignment": "9 Assignment",
          "discount": "17% Discount",
          "price": "$32",
          "category": "five",
          "description": "We are providing Construction Services project for you. You can choose our designed projects or meet our engineers for custom build your project"
        },
        {
          "_id": "623853b2cddafgtbc294f791",
          "index": 5,
          "title": "Construction Management",
          "type": "New Trending",
          "picture": "https://readcivil.com/wp-content/uploads/2017/08/Construction.jpg",
          "duration": "90 days",
          "assignment": "9 Assignment",
          "discount": "17% Discount",
          "price": "$32",
          "category": "six",
          "description": "We are providing Construction Management project for you. You can choose our designed projects or meet our engineers for custom build your project"
        }
      ];


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