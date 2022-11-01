import React from 'react'

const Director = ({director}) => {
  return (
    <div className="bg-white p-5 md:p-10 w-[300px] sm:w-[200px] lg:w-[320px] lg:h-[70vh]  lg:rounded-l-md">
        <img className='m-auto h-52 w-52 rounded-full border-[#e3cc38] border-[1px] p-[5px]' src={director?.image} alt="" />
        <h1 className='text-center text-[#2e6abf] text-[18px] mt-[10px] font-bold'>{director?.name}</h1>
        <h2 className='text-center text-[#3e3e3e] font-bold text-[16px]'>{director?.role}</h2>
        <p className='text-center leading-[30px] text-[14px] '>{director?.company}</p>
    </div>
  )
}

export default Director