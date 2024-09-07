import React from 'react'

const BankCard = () => {
  return (
    <div className="relative w-[350px] h-[222px] min-w-[350px] bg-gradient-to-r from-purple-800 to-purple-600 rounded-lg shadow-inner m-10 mx-auto filter drop-shadow-lg transform translate-y-[-10px]">
    <figure className="relative h-10 m-0">
      <figcaption className="absolute bottom-[-40px] text-white text-xs font-semibold tracking-wider w-full text-center">PLATINUM</figcaption>
      <img
        src="https://conta.nubank.com.br/images/nu-white.png"
        className="absolute right-1/2 transform translate-x-[65px] top-[20px] w-[130px]"
        alt="Logo"
      />
    </figure>
    <div className="absolute top-1/2 left-[33px] transform -translate-y-[40px] w-12 h-10 bg-gradient-to-r from-yellow-400 to-yellow-300 rounded-lg overflow-hidden">
      <div className="absolute w-12 h-10 rounded-full border border-gray-600 z-0"></div>
      <div className="absolute w-12 h-10 rounded-full border border-gray-600 z-0 transform translate-x-[37px] translate-y-[15px]"></div>
      <div className="absolute w-12 h-10 rounded-full border border-gray-600 z-0 transform translate-x-[15px] translate-y-[30px]"></div>
      <div className="absolute w-12 h-10 rounded-full border border-gray-600 z-0 transform -translate-x-[37px] -translate-y-[15px]"></div>
      <div className="absolute w-12 h-10 rounded-full border border-gray-600 z-0 transform -translate-x-[15px] -translate-y-[30px]"></div>
    </div>
    <p className="absolute text-white text-center text-lg font-mono tracking-widest top-[80px] left-1/2 transform -translate-x-[20px] shadow-md">
      5032 9334 3764 9846
    </p>
    <div className="absolute bottom-[22%] flex justify-between w-2/5 text-white text-sm font-mono transform translate-x-[60px]">
      <span>09/16</span>
      <span>09/19</span>
    </div>
    <p className="absolute text-white text-xs font-mono tracking-widest top-[105px] left-[35px] transform shadow-md">
      GABRIEL FERREIRA
    </p>
    <div className="absolute right-8 top-[45%] w-[80px] h-[110px] border border-gray-300 rounded-full">
      <div className="w-full h-1/2 bg-gray-400 rounded-t-full bg-gradient-to-r from-gray-300 to-gray-400"></div>
      <div className="absolute top-1/2 left-0 w-1/2 h-full bg-yellow-600 rounded-full"></div>
      <div className="absolute top-1/2 right-0 w-1/2 h-full bg-red-600 rounded-full"></div>
      <div className="absolute top-1/2 left-1/2 transform translate-x-[-50%] text-black text-3xl top-3">🌎</div>
      <div className="absolute top-1/2 right-2 w-10 h-10 bg-red-600 rounded-full"></div>
      <div className="absolute top-1/2 right-1 w-10 h-10 bg-yellow-600 rounded-full flex items-center justify-center text-white text-xs font-semibold">
        MasterCard
      </div>
    </div>
  </div>
);
};

export default BankCard