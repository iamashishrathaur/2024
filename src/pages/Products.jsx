import BottomNavigation from '../Components/BottomNavigation'
import jioImage from '../assets/jio.avif'
import viImage from '../assets/vi.png'
import airtelImage from '../assets/airtel.avif'
import bsnlImage from '../assets/bsnl.avif'
import {FaShoppingCart } from 'react-icons/fa'
import Header from '../Components/Header'
// import {lv0,lv1,lv2,lv3,lv4} from '../assets/avif'

const Products = () => {
  const item =[
    {
        name:'jio',
        price:'299',
        image:jioImage,
        cycle:28,
        daily:1.5,
        active:true

    },
    {
        name:'airtel',
        price:'587',
        image:viImage,
        cycle:28,
        daily:1.5,
        active:true
    },
    {
        name:'vi',
        price:'780',
        image:airtelImage,
        cycle:28,
        daily:1.5,
        active:true
    },
    {
        name:'bsnl',
        price:'150',
        image:bsnlImage,
        cycle:30,
        daily:2.5,
        active:false,
        level:1
    }


  ]

  return (
<>
<div className=''>
  <Header name={'Products'}/>
<div className='p-5 pb-60'>
{item.map((item,index)=>(
   <div key={index} className='bg-white shadow-lg rounded-lg w-full min-h-20 mt-3 flex justify-between'>
        <div className='w-3/5 p-3 relative block'>
           <img src={item.image} alt="" className='rounded-full w-16 h-16 mb-5 shadow'/>
           <span style={{backgroundImage:'linear-gradient(135deg, rgb(76, 230, 112), rgb(0, 170, 255))'}} className='rounded-[0px_25px_25px_0px] px-5 text-white -ml-3'>
              Jio-Air
           </span>
           <div className='flex p-[10px]'>
             <div className='p-[10px] shadow-[1px_1px_10px_#ccc] rounded-[5px] flex flex-col justify-center items-center'><span className='font-normal'> <strong>{item.cycle}</strong> days</span><span className='text-xs'>Cycle </span></div>
             <div className='p-[10px] shadow-[1px_1px_10px_#ccc] rounded-[5px] flex flex-col justify-center items-center ml-3'><span className='text-green-500 font-bold'>{item.daily} GB </span><span className='text-xs'>Daily </span></div>
           </div>
        </div>

        <div className='w-2/5'>
         <div className='text-green-500'>
         <div className='font-bold text-lg'>Price</div>
         <div className='text-black text-[14px] font-medium'>{item.price}rs</div>
         </div>
        <button style={item.active ? {background: 'linear-gradient(135deg, #f50, #fa0)'}:{background:'rgb(107 114 128)',cursor:'default'}} className='h-7 w-32 text-white rounded-full shadow-md z-[999] p-[0px_15px_0px_15px] text-[14px] font-semibold flex justify-center items-center gap-2'>
          <FaShoppingCart/> {item.active ? 'Buy':'Pre-sale'}
        </button>

        </div>
   </div>
))}
</div>
</div>
<BottomNavigation/>
</>
    
  )
}

export default Products