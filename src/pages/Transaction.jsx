import React, { useState } from 'react'
import Header from '../Components/Header'
import { BiSearch } from 'react-icons/bi'
import { CgCalendarNext, CgCalendarDue } from 'react-icons/cg'

const Transaction = () => {
  const [isActiveIndex, setIsActiveIndex] = useState('all')

  const handleTabClick = (index) => {
    setIsActiveIndex(index)
  }

  const handleSearch = () => {
    console.log('Search clicked')
  }

  // Function to dynamically get the background gradient based on the active tab
  const getBackgroundGradient = (tab) => {
    switch (tab) {
      case 'all':
        return 'linear-gradient(135deg, #f50, #fa0)' // Orange gradient for 'All types'
      case 'withdrawals':
        return 'linear-gradient(135deg, #36D1DC, #5B86E5)' // Blue gradient for 'Withdrawals'
      case 'recharge':
        return 'linear-gradient(135deg, #FF512F, #DD2476)' // Pink gradient for 'Recharge'
      default:
        return 'linear-gradient(135deg, #f50, #fa0)' // Default fallback
    }
  }

  return (
    <div className='min-h-[100vh] pb-60'>
      <Header isBackPress={true} name={'Transaction Records'} />
      <div className='w-full flex flex-col'>
        <div className='w-[90%] flex gap-2 px-2 py-5'>
          <div className='w-[30%] bg-white shadow-md rounded-full flex items-center justify-center'>
            <CgCalendarNext color='red' />
          </div>
          <span>to</span>
          <div className='w-[30%] bg-white shadow-md rounded-full flex items-center justify-center'>
            <CgCalendarDue color='red' />
          </div>
          <div
            onClick={handleSearch}
            style={{ background: 'linear-gradient(135deg, #f50, #fa0)' }}
            className=' bg-slate-600 py-[2px] px-5 flex items-center justify-center rounded-full text-white gap-2 cursor-pointer shadow-md'
          >
            <BiSearch height={'20px'} width={'20px'} className='h-[20px]' />
            <span className='mb-[2px]'>search</span>
          </div>
        </div>
        <div className='w-full bg-white shadow-sm flex flex-wrap text-sm gap-2 p-2'>

          <div  className='flex-1 flex items-center justify-center cursor-pointer' onClick={() => handleTabClick('all')}>
            <span style={{ background: isActiveIndex === 'all' ? getBackgroundGradient('all') : 'none',}}
              className={`w-full flex items-center justify-center py-[8px] rounded-full shadow-sm ${isActiveIndex === 'all' ? 'text-white' : 'text-black'} border`}>
              All types
            </span>
          </div>
          <div className='flex-1 flex items-center justify-center cursor-pointer' onClick={() => handleTabClick('withdrawals')}>
            <span style={{ background: isActiveIndex === 'withdrawals' ? getBackgroundGradient('withdrawals') : 'none',}}
              className={`w-full flex items-center justify-center py-[8px] rounded-full shadow-sm ${isActiveIndex === 'withdrawals' ? 'text-white' : 'text-black'} border`} >
              Withdrawals
            </span>
          </div>
          <div className='flex-1 flex items-center justify-center cursor-pointer' onClick={() => handleTabClick('recharge')}>
            <span style={{ background: isActiveIndex === 'recharge' ? getBackgroundGradient('recharge') : 'none', }}
              className={`w-full flex items-center justify-center py-[8px] rounded-full shadow-sm ${isActiveIndex === 'recharge' ? 'text-white' : 'text-black'} border`}>
              Recharge
            </span>
          </div>
        </div>

        <div className='flex items-center justify-center p-5'>
             <small>There is no record on this page</small>
        </div>
      </div>
    </div>
  )
}

export default Transaction
