import { FaAngleRight} from 'react-icons/fa6'
import BottomNavigation from '../Components/BottomNavigation'
import VIP from '../assets/VIP.webp'
import Avatar from '../assets/avatar.webp'
import { useState } from 'react'
import INR from '../assets/INR.svg'

const My = () => {
  const [isToast, setIsToast] = useState(false)

  const [isRotating, setIsRotating] = useState(false);

  const handleRefresh = () => {
    setIsRotating(true);

    setTimeout(() => {
      setIsRotating(false);
      // Place your refresh logic here
    }, 1000); // Duration of the animation
  };

  const handleCopy =()=>{
    setIsToast(true)
    setTimeout(()=>{
      setIsToast(false)
    },2000)
 }

  return (
    <>
    <div>
       <div className='bg-slate-300 w-full min-h-56'>
         <div className='p-5 pt-10 flex items-center'>
         <div className='bg-orange-100 h-16 w-16 rounded-full shadow-sm flex items-center justify-center'>
          <img src={Avatar} width={100} alt="user" className='rounded-full'/>
         </div>
          <div className='ms-3 text-black text-lg font-bold flex items-center'>
             <span >7905321205</span>
             {/* <span >VIP 1</span> */}
             <i className='fa-regular fa-copy px-3 cursor-pointer text-base text-slate-700 z-30' onClick={handleCopy}></i>
             {isToast && <div className='text-base font-normal bg-gray-400 px-3 py-0.5 rounded-3xl -ml-16 -mt-14 text-white'>Copied</div>}
          </div>


          <div className='absolute w-[150px] right-4'>
            <img src="" alt="" srcSet={VIP} />
          </div>

         </div>
       </div>
      <div className='p-5 pb-60 -mt-[108px]'>
         <div className='bg-white w-full flex flex-col min-h-52 rounded-xl shadow-lg text-[#333] text-sm px-3 pt-2'>
              {/* <FaAngleDown/> */}
              <div className='border rounded-[.625rem] py-[10] flex justify-between relative items-center cursor-pointer h-[39px] my-4' >
                 <div className='px-[15px] flex items-center w-1/4'>
                     <img width={100} src={INR} alt="" className='w-4 h-4 mr-2.5'/>
                     <span className='mr-[18px] ml-auto text-black'>100</span>         
                 </div>
                  <div className='w-2/3 flex justify-end'>
                    <i className="fa-solid fa-angle-down"></i>
                  </div>

                  <div className='w-1/6 h-full pl-3'>
                      <div className='p-[10px_15px] flex justify-center h-full bg-[#b7d0ff] rounded-tr-[.625rem] rounded-br-[.625rem]' onClick={handleRefresh}>
                        <div className='flex items-center cursor-pointer'>
                          <i className={`fa fa-arrows-rotate text-lg ${isRotating ? 'rotating' : ''}`}></i>
                        </div>
                      </div>
                  </div>
              </div>
          
                <span className='text-base text-black'>Frequently used</span>
                <div className='flex pt-5 text-xs font-medium'>
                    <div className='w-1/4 flex flex-col items-center'>
                    {/* <i className="fa-solid fa-wallet"></i> */}
                       <div className='bg-[#ff7cbe] h-10 w-10 rounded-lg z-20 shadow-sm flex items-center justify-center cursor-pointer'><i className="fa fa-piggy-bank text-white text-xl"></i></div>
                       <div className='mt-1'>Recharge</div>
                    </div>
                    <div className='w-1/4 flex flex-col items-center'>
                    <div className='bg-[#60cfff] h-10 w-10 rounded-lg z-20 shadow-sm flex items-center justify-center cursor-pointer'> <i className="fa-sharp fa-solid fa-building-columns text-white text-xl"></i></div>
                      <div className='mt-1'>Withdraw</div>
                    </div>
                    <div className='w-1/4 flex flex-col items-center'>
                    <div className='bg-[#fdb953] h-10 w-10 rounded-lg z-20 shadow-sm flex items-center justify-center cursor-pointer'> <i className="fa-solid fa-money-bill-trend-up text-white text-xl"></i></div>
                    <div className='mt-1'>Transaction</div>
                    </div>
                    <div className='w-1/4 flex flex-col items-center'>
                    <div className='bg-[#42e1cc] h-10 w-10 rounded-lg z-20 shadow-sm flex items-center justify-center cursor-pointer'><i className="fa-solid fa-people-group text-white text-xl"></i></div>
                    <div className='mt-1'>Team</div>
                    </div>
                </div>
         </div>

         <div className='bg-white w-full min-h-64 rounded-xl shadow-lg text-[#333] text-sm mt-5'>
             <div className='flex justify-between items-center p-4 px-5'>
               <div className='flex items-center'>
                 <i className="fas fa-pen-nib text-red-500 text-xl"> </i> <span className='ml-4'>My Order</span>
               </div>
               <div><FaAngleRight/></div>
             </div>
             <div className='mx-[30px]  border-b'></div>
             <div className='flex justify-between items-center p-4 px-5'>
               <div className='flex items-center'>
                 <i className="fas fa-clipboard-list text-teal-400 text-xl"> </i> <span className='ml-4'>Transaction</span>
               </div>
               <div><FaAngleRight/></div>
             </div>
             <div className='mx-[30px] border-b'></div>
             <div className='flex justify-between items-center p-4 px-5'>
               <div className='flex items-center'>
                 <i className="fas fa-users text-cyan-400 text-xl"> </i> <span className='ml-4'>My Team</span>
               </div>
               <div><FaAngleRight/></div>
             </div>
             <div className='mx-[30px] border-b'></div>
             <div className='flex justify-between items-center p-4 px-5'>
               <div className='flex items-center'>
                 <i className="fas fa-credit-card text-blue-400 text-xl"> </i> <span className='ml-4'>Bank Account</span>
               </div>
               <div><FaAngleRight/></div>
             </div>
             <div className='mx-[30px] border-b'></div>
             <div className='flex justify-between items-center p-4 px-5'>
               <div className='flex items-center'>
                 <i className="fas fa-mobile-screen text-emerald-400 text-xl"> </i> <span className='ml-4'>Download APP</span>
               </div>
               <div><FaAngleRight/></div>
             </div>
    
             {/* Download APP */}
             <div className='mx-[30px] border-b'></div>
             <div className='flex justify-between items-center p-4 px-5'>
               <div className='flex items-center'>
                  {/* <FaUnlockKeyhole */}
                 <i className="fas fa-unlock-keyhole text-fuchsia-400 text-xl"> </i> <span className='ml-4'>Password</span>
               </div>
               <div><FaAngleRight/></div>
             </div>
             <div className='mx-[30px] border-b'></div>
             <div className='flex justify-between items-center p-4 px-5'>
               <div className='flex items-center'>
                 <i className="fas fa-shield-halved text-red-400 text-xl"> </i> <span className='ml-4'>Withdraw Password</span>
               </div>
               <div><FaAngleRight/></div>
             </div>
             <div className='mx-[30px] border-b'></div>
             <div className='flex justify-between items-center p-4 px-5'>
               <div className='flex items-center'>
                 <i className="fas fa-circle-info text-green-400 text-xl"> </i> <span className='ml-4'>About Us</span>
               </div>
               <div><FaAngleRight color='#333'/></div>
             </div>
             <div className='mx-[30px] border-b'></div>
         </div>
         
      </div>

   </div>
    
    <BottomNavigation/>
    </>
  )
}

export default My