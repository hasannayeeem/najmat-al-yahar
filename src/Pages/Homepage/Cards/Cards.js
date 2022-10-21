import React, { useContext, useEffect, useState } from 'react'
import useServices from '../../../hooks/useServices'
import Card from '../Card/Card'
import { DarkModeContext } from '../../../App'
import { BsJournalBookmarkFill } from 'react-icons/bs'

const Cards = () => {
	const [services] = useServices([]);
	console.log(services);
	const categories= [];
	let isExist = false;
	for(let i=0; i<=services?.length; i++){
		isExist = false;
		for(let j=0; j<= categories.length; j++){
			if(services[i]?.category===categories[j]?.category){
				isExist= true;
				break;
			}
		}
		if(!isExist){
			categories.push(services[i]);
		}
	}
	// console.log(categories);
	const [darkMode, setDarkMode] = useContext(DarkModeContext)
	return (
		<div id='services'>
			<h2
				style={{ fontFamily: "'Rajdhani', sans-serif" }}
				className={`${
					darkMode && 'text-white'
				} uppercase  font-bold text-3xl py-3 text-center`}
			>
				Our <span className='text-[#f61a1a]'>Services</span> 
			</h2>
			<div className='flex justify-center'>
				<div className=' rounded-md w-32 h-1 bg-[#f61a1a]'></div>
				<div className=' rounded-md w-4 h-1 mx-2 bg-[#ffd103]'></div>
				<div className=' rounded-md w-2 h-1 bg-[#030303]'></div>
			</div>
			<div className='flex justify-center items-center py-20'>
				<div className='md:px-4 md:grid md:grid-cols-2 lg:grid-cols-3 gap-5 space-y-4 md:space-y-0'>
					{categories?.map(service => (
						<Card service={service} key={service._id}></Card>
					))}
				</div>
			</div>
		</div>
	)
}

export default Cards
