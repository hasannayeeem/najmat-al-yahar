import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { Fade } from "react-reveal";
import Director from "./Director";

const Directors = () => {
  const [directors, setDirectors] = useState([]);
  useEffect(() => {
    fetch("directors.json")
      .then((res) => res.json())
      .then((data) => setDirectors(data));
  }, [directors, setDirectors]);
  return (
    <div className="h-[150vh]  lg:h-[100vh] flex flex-col items-center justify-center mb-10" style={{backgroundImage: "linear-gradient(90deg,rgba(255,221,0,0.8),rgba(255,0,0,0.8)),url(https://akij.net/img/building.jpg)", backgroundSize: "cover"}}>
      <h1 className="text-center text-[1.5rem] mb-5 font-bold text-white">Founder Of Saheda Group</h1>
      <div className="flex flex-col max-w-[1260px] lg:flex-row lg:mx-24">
      <Fade left duration={1500}>
      <div className="mx-auto">
       {directors?.map((director, index) => 
          <Director className=" " 
            key={index} 
            director={director}
          />
        )}
       </div>
       </Fade>
       <Fade right duration={1500}>
        <div className="glass mt-4 lg:mt-0 lg:h-[70vh]">
          <p className="my-12 text-xl text-justify lg:mx-20 mx-8 font-semibold">In this era of mass production, as it is very hard to stand out with one product, Saheda Group focuses on making the best in all sectors. Any company’s vision is actually the dream to which the company always strives to reach where it may become possible or not. Saheda Group is not something different.Expanding the business in the abroad and becoming one of the market leaders internationally are the visions of Saheda Group.
The mission of Saheda Group is to be the market leader through their best effort, suitable and competitive marketing strategy and the consumers support. Now they are in the position of challenger and their vision focuses on those missions, goals and objectives which will make them able to be the leader from the challenger to the leader in the market</p>
        </div>
        </Fade>
      </div>
    </div>
  );
};

export default Directors;