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
import Contact from '../Contact/Contact';

const CompanyDetails = () => {
	const [darkMode, setDarkMode] = useContext(DarkModeContext);
    const [companies, setCompanies] = useState([]);
const lc = useLocation();
  useEffect(() => {
    
    fetch("companies.json")
      .then((res) => res.json())
      .then((data) => console.log(data));
  }, [lc, companies, setCompanies]);
//   companies?.sadikurs
    const [hasaim, setHasaim] = useState([]);
    useEffect( () =>{
        fetch('./hasaim.json')
        .then(res => res.json())
        .then(data => setHasaim(data));
        
    },[hasaim,  setHasaim]);
    const [najmat, setNajmat] = useState([]);
    useEffect( () =>{
        fetch('https://neighbour-home--server.herokuapp.com/constructor')
        .then(res => res.json())
        .then(data => setNajmat(data));
        
    },[najmat,  setNajmat]);
    const [sadikur, setSadikur] = useState([]);
    useEffect( () =>{
                fetch('sadikurs.json')
                .then(res => res.json())
                .then(data => setSadikur(data));
                
            },[sadikur,  setSadikur]);
    // const [companies] = useCompanies();
    // console.log(companies?.sadikurs);
    const [services] = useServices();
    console.log(hasaim);
console.log(lc?.pathname);

    return (
        <div className='mx-auto'>
            {/* <h1 className="text-5xl border h-48 text-center">company Image or Logo{companies?.length}</h1> */}
            <img className='cover w-screen opacity-50 h-[420px]' src="https://scontent.fdac34-1.fna.fbcdn.net/v/t39.30808-6/299165621_1355231408336068_1707150811493179633_n.jpg?stp=c0.83.526.275a_dst-jpg_p526x296&_nc_cat=106&ccb=1-7&_nc_sid=e3f864&_nc_eui2=AeGkSl2YG5_JLY6oAPZa7uThpMdA1zhdFFWkx0DXOF0UVSQHqcBceF7jQJxUYN7UieO6EAZu2sK8-dY-xJBxHwv8&_nc_ohc=dBl2LV5G5GUAX9TsSD_&_nc_zt=23&_nc_ht=scontent.fdac34-1.fna&oh=00_AT_DRFHidkjPR63RfHc82jKAcAIWfWydHKuWdzNlcnFjcQ&oe=6355A8C1" alt="" />
            <div>
            <ul className="lg:text-2xl bg-yellow-400 border flex justify-around text-center">
                <li><Link to={`/companies/sadikur`} className={`font-semibold`}>Sadikur's</Link></li>
                <li><Link to={`/companies/parvez`} className={`font-semibold`}>Parvez's</Link></li>
                <li><Link to={`/companies/hasaim`} className={`font-semibold`}>Hasaim's</Link></li>
                <li><Link to={`/companies/najmat`} className={`font-semibold`}>Najmat's</Link></li>
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
                    
                    najmat?.map(service => (<Card service={service} key={service?._id}></Card>))
                    }</div></div> 
                    : lc.pathname === '/companies/najmat' ? 
                    <div className='flex justify-center items-center pt-12 pb-20'>
                <div className='md:px-4 md:grid md:grid-cols-2 lg:grid-cols-3 gap-5 space-y-4 md:space-y-0'>{
                    
                    services?.map(service => (<Card service={service} key={service?._id}></Card>))
                    }</div></div> 
                    : lc.pathname === '/companies/hasaim' ? 
                    <div className='flex justify-center items-center pt-12 pb-20'>
                <div className='md:px-4 md:grid md:grid-cols-2 lg:grid-cols-3 gap-5 space-y-4 md:space-y-0'>{
                    
                    hasaim?.map(service => (<Card service={service} key={service?._id}></Card>))
                    }</div></div>
                    : <p className='text-4xl text-error text-center my-24'>mohammed parvez services comming soon...</p>
            
            }</div>
			
            
            <Contact />

        </div>
    );
};

export default CompanyDetails;