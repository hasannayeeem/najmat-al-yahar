import React, { useContext, useEffect, useState } from "react";
import {
  BsFacebook,
  BsTwitter,
  BsLinkedin,
  BsGithub,
  BsBehance,
} from "react-icons/bs";
import { Autoplay, FreeMode, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "./Engineer.css";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import { DarkModeContext } from "../../../App";
import useEngineers from "../../../hooks/useEngineers";

const Engineer = () => {
  const [engineers] = useEngineers([]);
  const [darkMode] = useContext(DarkModeContext);
  return (
    <div className="p-6 md:px-16">
      <Swiper
          slidesPerView={1}
          spaceBetween={30}
          freeMode={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          breakpoints={{
            640: {
              slidesPerView: 1,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 2,
              spaceBetween: 40,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 50,
            },
          }}
          modules={[Autoplay, FreeMode, Pagination]}
          className="mySwiper "
        >
        {engineers?.map((engineer) => {
          const { picture, name, rule, _id } = engineer;
          return (
            <SwiperSlide key={_id}>
              <div className="my-10">
                <div className={`${darkMode && "text-white"} engCard pt-8 shadow-xl`}>
                  <img src={picture} alt="Person" className="card__image" />
                  <p className="card__name font-bold">{name}</p>
                  <div className="">
                    {/* <div className="grid-child-posts">902 Post</div>

                    <div className="grid-child-followers">1300 Likes</div> */}
                    <p>{rule}</p>
                  </div>
                  <ul className="social-icons">
                    <li>
                      <a href="/">
                        <BsFacebook />
                      </a>
                    </li>
                    <li>
                      <a href="/">
                        <BsLinkedin />
                      </a>
                    </li>
                    <li>
                      <a href="/">
                        <BsTwitter />
                      </a>
                    </li>
                  </ul>
                  {/* <div className="flex">
                    <button
                      className={`${
                        darkMode ? "bg-transparent text-teal-600" : "bg-white"
                      } engBtn draw-border`}
                    >
                      Follow
                    </button>
                    <button
                      className={`${
                        darkMode ? "bg-transparent" : "bg-white"
                      } engBtn draw-border text-teal-600`}
                    >
                      massage
                    </button>
                  </div> */}
                </div>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};

export default Engineer;
