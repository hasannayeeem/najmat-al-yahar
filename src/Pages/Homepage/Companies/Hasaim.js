import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import useHasaim from '../../../hooks/useHasaim';
import useServices from '../../../hooks/useServices';
import Card from '../Card/Card';

const Hasaim = () => {
    const [darkMode, setDarkMode] = useState(false);
    const hasaim = [{
      "_id": "623853b2614a311d5abafdd1",
      "index": 0,
      "title": "iceLand Park",
      "type": "New Trending",
      "picture": "https://www.planetware.com/wpimages/2020/06/india-goa-top-attractions-popular-beaches.jpg",
      "duration": "90 days",
      "assignment": "9 Assignment",
      "discount": "17% Discount",
      "price": "$32",
      "category": "one",
      "description": "Four Places Visit And Included Hotel Service And Free Lunch And Dinner"
    },
    {
      "_id": "623853b2578d1ae0de9e6ad5",
      "index": 1,
      "title": "SaintMartin",
      "type": "New Trending",
      "picture": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR0XmEwogf5EblWFqqAwPCVqlosCLyLg18BZA&usqp=CAU",
      "duration": "90 days",
      "assignment": "9 Assignment",
      "discount": "17% Discount",
      "price": "$32",
      "category": "two",
      "description": "This Tour Has only for this Person Who can swimming in River and Enjoy The Sea beach Vibe"
    },
    
    {
      "_id": "623853bgf39582e48409ccc6",
      "index": 4,
      "title": "Tanguar hawr",
      "type": "New Trending",
      "picture": "https://nomadparadise.com/wp-content/uploads/2021/04/bangladesh-places-04.jpg",
      "duration": "90 days",
      "assignment": "9 Assignment",
      "discount": "17% Discount",
      "price": "$32",
      "category": "five",
      "description": "This Package Has see Beach And Mounten Visit Also included Free Lunch"
    }];
  
  
    return (
      <section>
        <h1 className="text-center text-3xl py-3 font-bold border-b-2 border-b-gray-300">
          Welcome To Hasaim International </h1>
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
          {hasaim?.map((service) => (
            <Card service={service} key={service?._id}></Card>
          ))}
        </div>
      </section>
    );
};

export default Hasaim;