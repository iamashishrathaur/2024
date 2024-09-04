import { FaAngleRight } from 'react-icons/fa6';
import BottomNavigation from '../Components/BottomNavigation';
import VIP from '../assets/VIP.webp';
import Avatar from '../assets/avatar.webp';
import { useState } from 'react';
import 'boxicons';
import INR from '../assets/INR.svg';
import refreshIcon from '../assets/refresh.png';

const My = () => {
  const [isToast, setIsToast] = useState(false);
  const [isRotating, setIsRotating] = useState(false);

  const handleRefresh = () => {
    setIsRotating(true);

    setTimeout(() => {
      setIsRotating(false);
      // Place your refresh logic here
    }, 5000); // Duration of the animation
  };

  const handleCopy = () => {
    setIsToast(true);
    setTimeout(() => {
      setIsToast(false);
    }, 2000);
  };

  return (
    <>
      <div>
        <div className='bg-slate-300 w-full min-h-56'>
          <div className='p-5 pt-10 flex items-center'>
            <div className='bg-orange-100 h-16 w-16 rounded-full shadow-sm flex items-center justify-center'>
              <img src={Avatar} width={100} alt="user" className='rounded-full' />
            </div>
            <div className='ms-3 text-black text-lg font-bold flex items-center'>
              <span>7905321205</span>
              <i
                className='fa-regular fa-copy px-3 cursor-pointer text-base text-slate-700 z-30'
                onClick={handleCopy}
              ></i>
              {isToast && (
                <div className='text-base font-normal bg-gray-400 px-3 py-0.5 rounded-3xl -ml-16 -mt-14 text-white'>
                  Copied
                </div>
              )}
            </div>
            <div className='absolute w-[150px] right-4'>
              <img src={VIP} alt="VIP" />
            </div>
          </div>
        </div>
        <div className='p-5 pb-60 -mt-[108px]'>
          <div className='bg-white w-full flex flex-col min-h-52 rounded-xl shadow-lg text-[#333] text-sm px-3 pt-2'>
            <div className='border rounded-[.625rem] py-[10] flex justify-between relative items-center cursor-pointer h-[39px] my-4'>
              <div className='px-[15px] flex items-center w-1/4'>
                <img width={100} src={INR} alt="INR" className='w-4 h-4 mr-2.5' />
                <span className='mr-[18px] ml-auto text-black'>100</span>
              </div>
              <div className='w-2/3 flex justify-end'>
                <i className="fa-solid fa-angle-down"></i>
              </div>
              <div className='w-1/6 h-full pl-3'>
                <div
                  className='flex justify-center items-center w-full h-full bg-[#b7d0ff] rounded-tr-[.625rem] rounded-br-[.625rem]'
                  onClick={handleRefresh}
                >
                  <span className='p-[1px] flex'>
                    <img
                      src={refreshIcon}
                      className={`h-5 cursor-pointer transition hover:scale-[1.1] ${isRotating ? 'rotating' : ''}`}
                      alt="refresh"
                    />
                  </span>
                </div>
              </div>
            </div>
            <span className='text-base text-black'>Frequently used</span>
            <div className='flex pt-5 text-xs font-medium'>
              {[
                { icon: 'fa-piggy-bank', color: '#ff7cbe', label: 'Recharge' },
                { icon: 'fa-building-columns', color: '#60cfff', label: 'Withdraw' },
                { icon: 'fa-money-bill-trend-up', color: '#fdb953', label: 'Transaction' },
                { icon: 'fa-people-group', color: '#42e1cc', label: 'Team' },
              ].map((item, index) => (
                <div key={index} className='w-1/4 flex flex-col items-center'>
                  <div
                    className={`bg-[${item.color}] h-10 w-10 rounded-lg z-20 shadow-sm flex items-center justify-center cursor-pointer`}
                  >
                    <i className={`fa ${item.icon} text-white text-xl`}></i>
                  </div>
                  <div className='mt-1'>{item.label}</div>
                </div>
              ))}
            </div>
          </div>

          <div className='bg-white w-full min-h-64 rounded-xl shadow-lg text-[#333] text-sm mt-5'>
            {[
              { icon: 'fa-pen-nib', color: 'text-red-500', label: 'My Order' },
              { icon: 'fa-clipboard-list', color: 'text-teal-400', label: 'Transaction' },
              { icon: 'fa-users', color: 'text-cyan-400', label: 'My Team' },
              { icon: 'fa-credit-card', color: 'text-blue-400', label: 'Bank Account' },
              { icon: 'fa-mobile-screen', color: 'text-emerald-400', label: 'Download APP' },
              { icon: 'fa-unlock-keyhole', color: 'text-fuchsia-400', label: 'Password' },
              { icon: 'fa-shield-halved', color: 'text-red-400', label: 'Withdraw Password' },
              { icon: 'fa-circle-info', color: 'text-green-400', label: 'About Us' },
            ].map((item, index) => (
              <div key={index}>
                <div className='flex justify-between items-center p-4 px-5'>
                  <div className='flex items-center cursor-pointer'>
                    <i className={`fas ${item.icon} ${item.color} text-xl`}></i>
                    <span className='ml-4'>{item.label}</span>
                  </div>
                  <FaAngleRight />
                </div>
                {index < 7 && <div className='mx-[30px] border-b'></div>}
              </div>
            ))}
          </div>
        </div>
      </div>
      <BottomNavigation />
    </>
  );
};

export default My;
