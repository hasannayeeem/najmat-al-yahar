import React from "react";
import Marquee from "react-fast-marquee";

const Notice = () => {
  return (
    <div className="flex items-center justify-start my-7 bg-gray-100 mt-10">
      <h2
        style={{ fontFamily: "'Rajdhani', sans-serif" }}
        className="uppercase lg:text-2xl text-xl bg-warning px-2 py-5 text-black font-bold w-32 "
      >
        Notice :
      </h2>
      <Marquee gradient={false} speed={50} gradientWidth={0}>
        {" "}
        <blockquote
          style={{ fontFamily: "'Rajdhani', sans-serif" }}
          className="text-2xl"
        >
          Saheda group is the mother company of Najmat-Al-Yahar,  Sadikur Consulting and Human Resource R.S.L, Hasaim International Travel and Ticketing, Mohammad parvez Information and Technology.
        </blockquote>
      </Marquee>
    </div>
  );
};

export default Notice;
