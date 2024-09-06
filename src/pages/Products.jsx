import BottomNavigation from '../Components/BottomNavigation'
import jioImage from '../assets/jio.avif'
import viImage from '../assets/vi.png'
import airtelImage from '../assets/airtel.avif'
import bsnlImage from '../assets/bsnl.avif'
import {FaShoppingCart } from 'react-icons/fa'
import Header from '../Components/Header'
import lv0 from '../assets/lv0.svg';
import lv1 from '../assets/lv1.svg';
import lv2 from '../assets/lv2.svg';
import lv3 from '../assets/lv3.svg';
import lv4 from '../assets/lv4.svg';
import BottomSheet from '../Components/BottomSheet'
import { useState } from 'react'


const Products = () => {
  const [isOpen, setIsOpen] = useState(false);
  const item = [
    {
      name: 'Data-A01',
      price: '299',
      image: jioImage,
      cycle: 28,
      daily: 1.5,
      active: true,
      level: lv1,
      total:48
    },
    {
      name: 'Data-A02',
      price: '587',
      image: airtelImage,
      cycle: 28,
      daily: 1.5,
      active: true,
      level: lv2,
      total:48
    },
    {
      name: 'Data-A01',
      price: '780',
      image: viImage,
      cycle: 28,
      daily: 1.5,
      active: true,
      level: lv3,
      total:48
    },
    {
      name: 'Data-A01',
      price: '150',
      image: bsnlImage,
      cycle: 30,
      daily: 2.5,
      active: false,
      level: lv0,
      total:48
    }
  ];
  const closeModal = () => setIsOpen(false);

  
  return (
    <>
      <div>
        <Header name={'Products'} />
        <BottomSheet show={isOpen} onClose={closeModal}/>
        <div className='p-5 pb-60'>
          {item.map((item, index) => (
            <div key={index} className='bg-white shadow-lg rounded-lg w-full min-h-20 mt-3 flex flex-col justify-between'>
              <div className='w-full p-3 relative flex'>
                <div className='w-[30%]'>
                  <img src={item.image} alt={item.name} className='rounded-full w-16 h-16 mb-5 shadow' />
                  <span
                    style={{ backgroundImage: 'linear-gradient(135deg, rgb(76, 230, 112), rgb(0, 170, 255))' }}
                    className='rounded-[0px_25px_25px_0px] px-5 text-white -ml-3'>
                    {item.name}
                  </span>
                </div>
                <div className='w-[70%] flex justify-between gap-2'>
                  <div className='text-green-500 shadow-sm p-[1.5px] rounded-lg h-16 bg-gradient-to-r from-green-400 via-blue-500 to-purple-600 animate-border'>
                     <div className='w-full h-full rounded-lg flex flex-col items-center justify-center p-4 bg-white '>
                        <div className='text-black text-xs'>Price</div>
                        <div className='font-bold text-lg'>{item.price}rs</div>
                     </div>
                  </div>
                  <div className='text-green-500 shadow-sm p-[1.5px] rounded-lg h-16 bg-gradient-to-r from-green-400 via-blue-500 to-purple-600 animate-border'>
                     <div className='w-full h-full rounded-lg flex flex-col items-center justify-center p-4 bg-white '>
                        <div className='text-black text-xs'>Total Revenue</div>
                        <div className='font-bold text-lg'>{item.total} GB</div>
                     </div>
                  </div>
                  
                  <img src={item.level} width={100} className='w-5 h-5'/>
                </div>
              </div>
  
              <div className='w-full flex'>
                <div className='w-[65%] flex'>
                  <div className='flex p-[0px_10px_20px_20px]'>
                    <div className='p-[10px] shadow-[1px_1px_10px_#ccc] rounded-[5px] flex flex-col justify-center items-center'>
                      <span className='font-normal'>
                        <strong>{item.cycle}</strong> days
                      </span>
                      <span className='text-xs'>Cycle</span>
                    </div>
                    <div className='p-[10px] shadow-[1px_1px_10px_#ccc] rounded-[5px] flex flex-col justify-center items-center ml-3'>
                      <span className='text-green-500 font-bold'>{item.daily} GB </span>
                      <span className='text-xs'>Daily</span>
                    </div>
                  </div>
                </div>
                <div className='w-[35%] flex p-4'>
                  <button
                    style={
                      item.active
                        ? { background: 'linear-gradient(135deg, #f50, #fa0)' }
                        : { background: 'rgb(107 114 128)', cursor: 'default' }
                    }
                    className='h-7 w-32 text-white rounded-full shadow-md z-[99] p-[0px_15px_0px_15px] text-[14px] font-semibold flex justify-center items-center gap-2' onClick={item.active ? ()=>setIsOpen(true):""}>
                     {item.active ?  <><FaShoppingCart /> Buy</>: 'Pre-sale'}
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
        
      </div>
      <BottomNavigation />
     
    </>
  );
}

export default Products