import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { useContext } from 'react';
import { Link, Route, Routes, useLocation } from 'react-router-dom';
import { DarkModeContext } from '../../../App';
import useCompanies from '../../../hooks/useCompanies';
import useHasaim from '../../../hooks/useHasaim';
import useSadikur from '../../../hooks/useSadikur';
import useServices from '../../../hooks/useServices';
import Card from '../Card/Card';
import Cards from '../Cards/Cards';
import Contact from '../Contact/Contact';

const CompanyDetails = () => {
	const [darkMode, setDarkMode] = useContext(DarkModeContext);
    const [companies, setCompanies] = useState([]);
    const [hasaim, setHasaim] = useHasaim();
    const [sadikur, setSadikur] = useSadikur();
const lc = useLocation();
  useEffect(() => {
    
    fetch("companies.json")
      .then((res) => res.json())
      .then((data) => console.log(data));
  }, [lc, companies, setCompanies]);
//   companies?.sadikurs
    const [najmat, setNajmat] = useState([]);
    useEffect( () =>{
        fetch('https://neighbour-home--server.herokuapp.com/constructor')
        .then(res => res.json())
        .then(data => setNajmat(data));
        
    },[najmat,  setNajmat]);
    const [services] = useServices();
console.log(lc?.pathname);

    return (
        <div className='mx-auto'>
            {/* <h1 className="text-5xl border h-48 text-center">company Image or Logo{companies?.length}</h1> */}
            <img className='cover w-screen opacity-80 h-[420px]' src="https://i.ibb.co/FgM7wJs/banner-2-01.jpg" alt="" />
            <div>
            <ul className="lg:text-2xl bg-yellow-400 border flex justify-around text-center">
                <li><Link to={`/companies/sadikur`} className={`font-semibold hover:text-white hover:bg-error inline-block lg:px-28`}>Sadikur's</Link></li>
                <li><Link to={`/companies/parvez`} className={`font-semibold hover:text-white hover:bg-error inline-block lg:px-28`}>Parvez's</Link></li>
                <li><Link to={`/companies/hasaim`} className={`font-semibold hover:text-white hover:bg-error inline-block lg:px-28`}>Hasaim's</Link></li>
                <li><Link to={`/companies/najmat`} className={`font-semibold hover:text-white hover:bg-error inline-block lg:px-28`}>Najmat's</Link></li>
            </ul>
            <h2
				style={{ fontFamily: "'Rajdhani', sans-serif" }}
				className={`${
					darkMode && 'text-white'
				} uppercase  font-bold text-3xl pb-3 pt-12 text-center`}
			>
				Our <span className='text-[#f61a1a]'>Services</span> 
			</h2>
			<div className='flex justify-center'>
				<div className=' rounded-md w-32 h-1 bg-[#f61a1a]'></div>
				<div className=' rounded-md w-4 h-1 mx-2 bg-[#ffd103]'></div>
				<div className=' rounded-md w-2 h-1 bg-[#030303]'></div>
			</div>
            {
                lc.pathname === '/companies/sadikur' ? <div className='flex justify-center items-center pt-12 pb-20'>
                <div className='md:px-4 md:grid md:grid-cols-2 lg:grid-cols-3 gap-5 space-y-4 md:space-y-0'>{
                    
                    sadikur?.map(service => (<Card service={service} key={service?._id}></Card>))
                    }</div></div> 
                    : lc.pathname === '/companies/najmat' ? 
                    <div className='flex justify-center items-center pt-12 pb-20'>
                <div className='md:px-4 md:grid md:grid-cols-2 lg:grid-cols-3 gap-5 space-y-4 md:space-y-0'>{
                    
                    najmat?.map(service => (<Card service={service} key={service?._id}></Card>))
                    }</div></div> 
                    : lc.pathname === '/companies/hasaim' ? 
                    <div className='flex justify-center items-center pt-12 pb-20'>
                <div className='md:px-4 md:grid md:grid-cols-2 lg:grid-cols-3 gap-5 space-y-4 md:space-y-0'>{
                    
                    hasaim?.map(service => (<Card service={service} key={service?._id}></Card>))
                    }</div></div>
                    : lc.pathname === '/companies/parvez' ?  <p className='text-4xl text-error text-center my-24'>mohammed parvez services comming soon...</p>
                    : <div className='flex justify-center items-center pt-12 pb-20'>
                    <div className='md:px-4 md:grid md:grid-cols-2 lg:grid-cols-3 gap-5 space-y-4 md:space-y-0'>{
                        
                        sadikur?.map(service => (<Card service={service} key={service?._id}></Card>))
                        }</div></div> 
            }</div>
			
            
            <Contact />

        </div>
    );
};

export default CompanyDetails;