import React from 'react'
import ProductsImg from '../assets/products.png'
import BottomNavigation from '../Components/BottomNavigation'
import Header from '../Components/Header'

const Products = () => {
  const item =[
    {
        name:'230'
    },
    {
        name:'230'
    },
    {
        name:'230'
    },
    {
        name:'230'
    }


  ]

  return (
<>
<div className=''>
 <Header/>
<div className='p-5 pb-60'>
{item.map((item,index)=>(
   <div key={index} className='bg-white shadow-lg rounded-lg w-full min-h-20 mt-3 flex justify-between'>
        <div className='w-44 h-44 p-3 relative'>
            <div className='w-full h-2/3 bg-cyan-100 shadow-sm rounded-3xl absolute bottom-3'>
                <img className='w-full -mt-9' src="" alt="" srcSet={ProductsImg} />
                {/* <span>234rs</span> */}
            </div>
        </div>

        <div className='w-1/2'>

            <button className='bg-slate-300 w-32 shadow-md rounded z-[999] p-1'>Buy</button>
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