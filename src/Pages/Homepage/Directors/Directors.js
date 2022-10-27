import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import Director from "./Director";

const Directors = () => {
  const [directors, setDirectors] = useState([]);
  useEffect(() => {
    fetch("directors.json")
      .then((res) => res.json())
      .then((data) => setDirectors(data));
  }, [directors, setDirectors]);
  return (
    <div className="h-[160vh] sm:h-[100vh] flex flex-col items-center justify-center mb-10" style={{backgroundImage: "linear-gradient(90deg,rgba(255,221,0,0.8),rgba(255,0,0,0.8)),url(https://akij.net/img/building.jpg)", backgroundSize: "cover"}}>
      <h1 className="text-center text-[1.5rem] mb-5 font-bold text-white">Founder Of Saheda Group</h1>
      <div className="flex flex-col lg:flex-row lg:justify-around ">
       <div className="mx-auto">
       {directors?.map((director, index) => 
          <Director className=" h-[70vh]" 
            key={index} 
            director={director}
          />
        )}
       </div>
        <div className="glass">
          <p>In this era of mass production, as it is very hard to stand out with one product, Saheda Group focuses on making the best in all sectors. Any company’s vision is actually the dream to which the company always strives to reach where it may become possible or not. Saheda Group is not something different.Expanding the business in the abroad and becoming one of the market leaders internationally are the visions of Saheda Group.
The mission of Saheda Group is to be the market leader through their best effort, suitable and competitive marketing strategy and the consumers support. Now they are in the position of challenger and their vision focuses on those missions, goals and objectives which will make them able to be the leader from the challenger to the leader in the market</p>
        </div>
      </div>
    </div>
  );
};

export default Directors;
