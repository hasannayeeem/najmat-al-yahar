import React from 'react';
import { useState } from 'react';
import { useContext } from 'react';
import { useEffect } from 'react';
import { DarkModeContext } from '../../../App';
import Company from '../../Homepage/Companies/Company';

const CompanyProfile = () => {

    const [darkMode] = useContext(DarkModeContext);
const [companies, setCompanies] = useState([]);

  useEffect(() => {
    fetch("companies.json")
      .then((res) => res.json())
      .then((data) => setCompanies(data));
  }, []);

  return (
    <div className="pt-5" id="companies">
      <h2
        style={{ fontFamily: "'Rajdhani', sans-serif" }}
        className={`${
          darkMode && "text-white"
        } uppercase text-3xl font-bold text-center py-3`}
      >
        <span className="text-[#f61a1a]">Our</span> Sister{" "}
        Concerns
      </h2>
      <div className="flex justify-center">
        <div className=" rounded-md w-32 h-1 bg-[#f61a1a]"></div>
        <div className=" rounded-md w-4 h-1 mx-2 bg-[#ffd103]"></div>
        <div className=" rounded-md w-2 h-1 bg-[#030303]"></div>
      </div>
<h1 className="text-sm  text-center lg:px-24 mt-3">In this era of mass production, as it is very hard to stand out with one product, <span className="hover:text-yellow-500">saheda group </span>
focuses on making the best in all sectors.</h1>

<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-2 lg:px-2 px-12 pt-8 pb-24'>
                {
                    companies.map(company => <Company
                        key={company._id}
                        company={company}
                    ></Company>)
                }
            </div>

      
    </div>
  );
};

export default CompanyProfile;