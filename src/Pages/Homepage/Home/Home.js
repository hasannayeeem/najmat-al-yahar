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
      <Notice />
      {/* <Guide /> */}
      <Companies></Companies>
      {/* <Cards /> */}
      {/* <Statistics /> */}
      {/* <Projects /> */}
      {/* <Testimonials /> */}
      {/* <Reviews /> */}
      <Directors/>
      <AboutUs></AboutUs>
      <Engineers />
      
      <Contact />
      <NewsLetter />
    </div>
  );
};

export default Home;
