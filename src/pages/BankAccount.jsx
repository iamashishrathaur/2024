import React from 'react'
import Header from '../Components/Header'
import { RiBankCardLine } from 'react-icons/ri'
import BankCard from '../Components/BankCard'

const BankAccount = () => {
  return (
    <div className='pb-40'>
     <Header isBackPress={true} name={'Bank'}/>
     <div className='w-full p-5 '>
     <div className='w-full bg-white shadow-sm min-h-20 border-2 border-dashed border-[#cfd0d9] rounded-lg relative'>
       <div className='w-full p-3'> 
         <RiBankCardLine color='#cfd0d9' size={'40px'}/>
       </div>
       <div className='w-full px-3 pb-3'>
          <p className='text-lg text-[#818393]'>Add bank card</p>
          <span className='text-sm text-[#cfd0d9]'>If you have not attached a bank card, please attach it and withdraw it</span>
       </div>
       {/* <span className='absolute left-1/2 bottom-1/2 font-extrabold text-3xl text-[#cfd0d9]'>+</span> */}
     </div>

     <div className='pt-5 pb-3'><h3>Explain</h3></div>
      <div className='text-sm text-[#2f3648]'>
        <p className='pb-1'>1. Bank account is an important information for you to withdraw funds on the platform, please do not modify it arbitrarily.</p>
        <p className='pb-1'> 2. To modify a bank account, a mobile OTP verification code is required.</p>
        <p className='pb-1'>3. Unable to receive mobile OTP verification code, please contact online customer service for assistance.</p>
      </div>
     </div>   
     <BankCard/>
    </div>
  )
}

export default BankAccount