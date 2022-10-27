import React, { useContext } from "react";
import Banner from "../Banner/Banner";
import Contact from "../Contact/Contact";
import Engineers from "../Engineers/Engineers";
import Notice from "../Notice/Notice";
import Testimonials from "../Testimonials/Testimonials";
import NewsLetter from "../NewsLetter/NewsLetter";
import Reviews from "../Reviews/Reviews";
import AboutUs from "../AboutUs/AboutUs";
import Statistics from "../Statistics/Statistics";
import Projects from "../projects/Projects";
import Companies from "../Companies/Companies";
import Directors from "../Directors/Directors";

const Home = () => {
  return (
    <div>
      <Banner />
      {/* <Guide /> */}
      <Companies></Companies>
      {/* <Cards /> */}
      {/* <Statistics /> */}
      {/* <Engineers /> */}
      {/* <Projects /> */}
      <Notice />
      {/* <Testimonials /> */}
      {/* <Reviews /> */}
      <AboutUs></AboutUs>
      <Directors/>
      <Contact />
      <NewsLetter />
    </div>
  );
};

export default Home;
