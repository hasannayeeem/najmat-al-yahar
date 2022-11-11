import React from 'react';
import { useContext } from 'react';
import { Rotate } from 'react-reveal';
import { Link } from 'react-router-dom';
import { DarkModeContext } from '../../../App';

const Company = ({company}) => {
    const {img, title, _id, name, index} = company;
    const [darkMode, setDarkMode] = useContext(DarkModeContext)
    return (
        <Link to={`/companies/${name}`}>
            <Rotate top left>
            <div className="lg:max-w-lg py-5 transform hover:-translate-y-2 transition duration-500">
            <figure className="">
                <img src={img} alt={title} className="p-4 w-52 mx-auto h-52 shadow-lg rounded-xl" />
            </figure>
            <div className=" text-center mt-3">
                <Link to={`/companies/${name}`} className='d-block'>
                    <button className={`w-50 font-bold ${darkMode ? ` text-gray-400` : `text-black`} text-gradient-to-l from-secondary to-primary hover:text-gradient-to-r py-1`}>{title}</button>
                </Link>
            </div>
        </div></Rotate>
        </Link>
    );
};

export default Company;