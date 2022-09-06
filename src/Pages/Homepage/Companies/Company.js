import React from 'react';
import { Link } from 'react-router-dom';

const Company = ({company}) => {
    const {img, title, _id, index} = company;
    return (
        <Link to={`/company/${_id}`}>
            <div className="lg:max-w-lg py-5 transform hover:-translate-y-2 transition duration-500">
            <figure className="">
                <img src={img} alt={title} className=" w-48 mx-auto h-48 shadow-lg rounded-xl" />
            </figure>
            <div className=" text-center mt-3">
                <Link to={`/company/${_id}`} className='d-block'>
                    <button className='w-50 font-bold  text-gradient-to-l from-secondary to-primary hover:text-gradient-to-r from-primary to-secondary py-1'>{title} -<span className='text-red-600'>{index + 1}</span></button>
                </Link>
            </div>
        </div>
        </Link>
    );
};

export default Company;