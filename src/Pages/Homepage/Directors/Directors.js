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
    <div className="py-8 flex flex-col items-center justify-center mb-10" style={{backgroundImage: "linear-gradient(90deg,rgba(255,221,0,0.8),rgba(255,0,0,0.8)),url(https://akij.net/img/building.jpg)", backgroundSize: "cover"}}>
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
        <div className="glass mt-4 lg:mt-0">
          <p className="my-12 text-xl text-justify lg:mx-20 mx-8 font-semibold">Welcome and warm greetings. It is a pleasure to meet you through this website and I am grateful for the opportunity to share my views. When I started my first business, I had a dream of making it unique rather than big, and I believed it would comes true, with the right team and earnest efforts. The company was founded for the sole purpose of providing applicable yet affordable solutions to our customers thus creating opportunities for employment. I envisaged creating a workplace where our employees could realize and exhibit their fullest potentials fostering innovation, offering flexibility thus strengthening our offerings in meeting the needs of our customers.Welcome and warm greetings. It is a pleasure to meet you through this website and I am grateful for the opportunity to share my views. When I started my first business, I had a dream of making it unique rather than big, and I believed it would comes true, with the right team and earnest efforts. The company was founded for the sole purpose of providing applicable yet affordable solutions to our customers thus creating opportunities for employment. I envisaged creating a workplace where our employees could realize and exhibit their fullest potentials fostering innovation, offering flexibility thus strengthening our offerings in meeting the needs of our customers.</p>
        </div>
        </Fade>
      </div>
    </div>
  );
};

export default Directors;