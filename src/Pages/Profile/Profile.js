import React from "react";
import { Link, Outlet } from "react-router-dom";
import logo from '../../Assest/images/sahedaFooter.png'

const Profile = () => {
  return (
    <section className="mt-[100px]">
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
            {/* <li className="w-full font-semibold">
              <Link to="/companies/najmat">
              <img
                src="https://sahedagroup.net/assets/images/najmat.png"
                className="w-12 h-12"
                alt="logo"
              />
                Najmat Al Yahar Building Contracting L.L.C
              </Link>
            </li> */}
            <li className="w-full font-semibold">
              <Link to="/companies/sadikur">
                <img
                src="https://sahedagroup.net/assets/images/sadikur-consultant.png"
                className="w-12 h-12"
                alt="logo"
              />Sadikur Consultant & Human resources S.R.L
              </Link>
            </li>
            <li className="w-full font-semibold ">
              
              <Link to="/companies/hasaim" className="flex">
                <img
                src="https://sahedagroup.net/assets/images/hasaim.png"
                className="w-12 h-12"
                alt="logo"
              />
                Hasaim international
              </Link>
            </li>
            {/* <li className="w-full font-semibold">
              
              <Link to="/companies/parvez" className="flex">
                <img
                src="https://sahedagroup.net/assets/images/parvez.png"
                className="w-12 h-12"
                alt="logo"
              />Mohammed Parvez Information Technology
              </Link>
            </li> */}
            <li className="w-full font-semibold">
              
              <Link to="/companies/rayhan" className="flex">
                <img
                src="https://sahedagroup.net/assets/images/carwash.png"
                className="w-12 h-12"
                alt="logo"
              />Rayhan Uddin Parking Car Washing
              </Link>
            </li>
            <li className="w-full font-semibold">
              
              <Link to="/companies/upcoming..." className="flex">
                <img
                src="https://sahedagroup.net/assets/images/saheda-propirties.png"
                className="w-12 h-12"
                alt="logo"
              />
              Saheda Properties Limited
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
