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
    <div className="h-[255vh] sm:h-[100vh] flex flex-col items-center justify-center mb-10" style={{backgroundImage: "linear-gradient(90deg,rgba(255,221,0,0.8),rgba(255,0,0,0.8)),url(https://akij.net/img/building.jpg)", backgroundSize: "cover"}}>
      <h1 className="text-center text-[1.5rem] mb-5 font-bold text-white">Founder Of Saheda Group</h1>
      <div className="grid grid-cols-1 lg:grid-cols-3 lg:gap-16 gap-4">
        {directors?.map((director, index) => 
          <Director 
            key={index} 
            director={director}
          />
        )}
      </div>
    </div>
  );
};

export default Directors;
