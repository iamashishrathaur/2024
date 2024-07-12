import React from 'react'
import Scrolling from '../assets/scrolling.webp'

const SlideText = () => {
  return (
    <div
  className="md:text-pc-sz text-mobile-sz flex items-center justify-center w-full h-[40px] md:h-10 rounded-btn bg-marquee mt-[10px] md:mt-5 relative border bg-[#161c30] rounded-3xl"
>
  <div className="flex items-center justify-between w-full">
    <div>
      <img
        className="w-[29px] h-[32px] ml-1 relative bottom-1 md:w-[41px] md:h-[45px]"
        src={Scrolling}
        alt="scrollingImg"
      />
    </div>
    <div
      className="relative flex items-center w-full overflow-hidden h-6 cursor-pointer text-white"
    >
   <div className="absolute whitespace-nowrap animate-scroll">
        <p className="inline-flex mr-20">
          <strong>🔊 🔊 🔊 Sapphire Betting</strong> has been fully updated and
          renamed to <strong>BharatWin</strong>! A new experience and generous
          rewards await you!
        </p>
        <p className="inline-flex mr-20">
          🔊 🔊 🔊 Recharge cashback event is in full swing. Deposit using{" "}
          <strong>USDT Pay</strong> and get an instant <strong>0.5%</strong>{" "}
          cashback.
        </p>
        <p className="inline-flex mr-20">
          🔊 🔊 🔊 Earn generous rewards by checking in daily. Check in for 30
          consecutive days to receive over Rs. 1000.
        </p>
        <p className="inline-flex mr-20">
          🔊 🔊 🔊 Complete missions to receive substantial bonus rewards. More
          missions are updated weekly, waiting for you to challenge!
        </p>
        <p className="inline-flex mr-20">
          Invite friends to register and deposit any amount to earn rewards. The
          more friends you invite, the more you earn!
        </p>
        <p className="inline-flex">
          If you have any questions or need assistance, please feel free to
          contact customer service. Enjoy your game!
        </p>
      </div>
      {/* <div className="absolute flex min-w-full ease-linear"> 
        <p
          className="inline-flex flex-nowrap pr-[20px] pl-10 whitespace-nowrap text-layout-tx"
        />
        <p>
          <strong>🔊 🔊 🔊 Sapphire Betting</strong> has been fully updated and
          renamed to <strong>BharatWin</strong>! A new experience and generous
          rewards await you!
        </p>
        <p />
        <p
          className="inline-flex flex-nowrap pr-[20px] pl-10 whitespace-nowrap text-layout-tx"
        />
        <p>
          🔊 🔊 🔊 Recharge cashback event is in full swing. Deposit using{" "}
          <strong>USDT Pay</strong> and get an instant <strong>0.5%</strong>{" "}
          cashback.
        </p>
        <p />
        <p
          className="inline-flex flex-nowrap pr-[20px] pl-10 whitespace-nowrap text-layout-tx"
        />
        <p>
          🔊 🔊 🔊 Earn generous rewards by checking in daily. Check in for 30
          consecutive days to receive over Rs. 1000
        </p>
        <p>&nbsp;</p>
        <p />
        <p
          className="inline-flex flex-nowrap pr-[20px] pl-10 whitespace-nowrap text-layout-tx"
        />
        <p>
          🔊 🔊 🔊 Complete missions to receive substantial bonus rewards. More
          missions are updated weekly, waiting for you to challenge!
        </p>
        <p />
        <p
          className="inline-flex flex-nowrap pr-[20px] pl-10 whitespace-nowrap text-layout-tx"
        />
        <p>
          Invite friends to register and deposit any amount to earn rewards. The
          more friends you invite, the more you earn!
        </p>
        <p />
        <p
          className="inline-flex flex-nowrap pr-[20px] pl-10 whitespace-nowrap text-layout-tx"
        />
        <p>
          If you have any questions or need assistance, please feel free to
          contact customer service. Enjoy your game!
        </p>
        <p />
      </div> */}
    </div>
  </div>
</div>

    )
}

export default SlideText