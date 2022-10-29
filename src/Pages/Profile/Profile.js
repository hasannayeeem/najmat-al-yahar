import React from "react";
import { Link, Outlet } from "react-router-dom";
import logo from '../../Assest/images/sahedaFooter.png'

const Profile = () => {
  return (
    <section className="mt-[40px] ">
      <div className=" flex flex-col justify-center md:flex-row">
        <div className="md:w-1/3 w-full">
          <ul className="menu p-4 overflow-y-auto md:w-80 bg-base-100 text-base-content border m-3 shadow mx-auto">
            <li className="w-full font-semibold flex flex-col">
              
              <Link to="/companies" className="inline-block text-center">
                <img
                src={logo}
                className="w-48 h-40 block mx-auto"
                alt="logo"
              /> <span className="mt-8 text-2xl">Our Sister Concerns</span>
              </Link>
            </li>
            <li className="w-full font-semibold">
              <Link to="/companies/najmat">
              <img
                src="https://i.ibb.co/xJh9vr8/Untitled-2.png"
                className="w-12 h-12"
                alt="logo"
              />
                Najmat Al Yahar Building Contracting L.L.C
              </Link>
            </li>
            <li className="w-full font-semibold">
              <Link to="/companies/sadikur">
                <img
                src="https://i.ibb.co/zsNv330/sadikur-consultant.png"
                className="w-12 h-12"
                alt="logo"
              />Sadikur Consultant & Human resources R.S.L
              </Link>
            </li>
            <li className="w-full font-semibold ">
              
              <Link to="/companies/hasaim" className="flex">
                <img
                src="https://i.ibb.co/XjQQ0Tx/hasaim.png"
                className="w-12 h-12"
                alt="logo"
              />
                Hasaim international
              </Link>
            </li>
            <li className="w-full font-semibold">
              
              <Link to="/companies/parvez" className="flex">
                <img
                src="https://i.ibb.co/Dr3W1kY/parvez.png"
                className="w-12 h-12"
                alt="logo"
              />Mohammad Parvez Information Technology
              </Link>
            </li>
            <li className="w-full font-semibold">
              
              <Link to="/companies/upcoming..." className="flex">
                <img
                src="https://i.ibb.co/VwFPQYm/comming.png"
                className="w-12 h-12"
                alt="logo"
              />
              upcoming..
              </Link>
            </li>
          </ul>
        </div>
        <div className="md:w-2/3 w-full md:m-3 shadow-lg">
          <Outlet />
        </div>
      </div>
    </section>
  );
};

export default Profile;
