import Avatar from '../assets/avatar.webp'

const WeaklyIncome = () => {
  return (
    <div className="rounded-[20px] text-white flex w-full h-[200px] justify-between relative backdrop-blur-md p-7 shadow-lg" style={{background:'linear-gradient(135deg, rgba(127, 0, 255, 0.9), rgba(225, 0, 255, 0.9))'}}>
    <div className="flex flex-col ">
    <div className="text-lg -mt-1 mb-3">Total Earnings</div>
    <div className="text-3xl font-extrabold">₹ 8,120.09</div>
    {/* <div className="flex items-end h-[100px]">
            <div className="h-24 w-2 bg-white bg-opacity-50 gap-1 rounded-t-full rounded-b-full mr-8 relative bar after:h-[10%]"></div>
            <div className="h-24 w-2 bg-white bg-opacity-50 gap-1 rounded-t-full rounded-b-full mr-8 relative bar after:h-[30%]"></div>
            <div className="h-24 w-2 bg-white bg-opacity-50 gap-1 rounded-t-full rounded-b-full mr-8 relative bar after:h-[70%]"></div>
            <div className="h-24 w-2 bg-white bg-opacity-50 gap-1 rounded-t-full rounded-b-full mr-8 relative bar after:h-[60%]"></div>
            <div className="h-24 w-2 bg-white bg-opacity-50 gap-1 rounded-t-full rounded-b-full mr-8 relative bar after:h-[100%]"></div>
            <div className="h-24 w-2 bg-white bg-opacity-50 gap-1 rounded-t-full rounded-b-full mr-8 relative bar after:h-[20%]"></div>
            <div className="h-24 w-2 bg-white bg-opacity-50 gap-1 rounded-t-full rounded-b-full mr-8 relative bar after:h-[40%]"></div>
    </div> */}
  </div>
  <div className="flex flex-col items-center h-full w-auto bg-white p-4 rounded-2xl relative">
    <img src={Avatar} width={100} className='w-14 h-14 rounded-full mb-[10px] bg-slate-300'/>
    <div className="bg-[#FFF3EA] cursor-pointer text-[#ff5a00] rounded-lg p-[5px_20px] text-center mt-3">Profile</div>
  </div>
</div>

  )
}

export default WeaklyIncome