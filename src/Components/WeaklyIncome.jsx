import React from 'react'
import Avatar from '../assets/avatar.webp'

const WeaklyIncome = () => {
  return (
    <div className="rounded-[20px] text-white flex w-full h-[200px] justify-between relative backdrop-blur-md p-7" style={{background:'linear-gradient(135deg, rgba(127, 0, 255, 0.9), rgba(225, 0, 255, 0.9))'}}>
    <div className="flex flex-col justify-between">
    <div className="text-lg mb-3">Total Earnings</div>
    <div className="text-3xl mb-5">₹ 8,120.09</div>
    <div className="flex items-end h-[100px] gap-1">
      <div className="bar" style={{ height: "20%" }} />
      <div className="bar" style={{ height: "40%" }} />
      <div className="bar" style={{ height: "60%" }} />
      <div className="bar" style={{ height: "80%" }} />
      <div className="bar" style={{ height: "100%" }} />
      <div className="bar" style={{ height: "50%" }} />
    </div>
  </div>
  <div className="flex flex-col items-center h-full w-auto bg-white p-4 rounded-2xl relative">
    <img src={Avatar} width={100} className='w-14 h-14 rounded-full mb-[10px] bg-slate-300'/>
    <div className="bg-[#FFF3EA] cursor-pointer text-[#ff5a00] rounded-lg p-[5px_20px] text-center mt-3">Profile</div>
  </div>
</div>

  )
}

export default WeaklyIncome