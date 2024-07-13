import React from 'react';
import Scrolling from '../assets/scrolling.webp';
import Marquee from 'react-fast-marquee';

const SlideText = () => {
  return (
    <div className="flex items-center justify-center w-full h-[40px] mt-[10px] relative border bg-[#161c30] rounded-3xl shadow-lg">
      <div className="flex items-center justify-between w-full">
        <div>
          <img
            className="w-[29px] h-[32px] ml-1 relative bottom-1"
            src={Scrolling}
            alt="scrollingImg"
          />
        </div>
        <div className="relative flex items-center w-full overflow-hidden h-6 cursor-pointer text-white text-base">
          <Marquee pauseOnHover={true} speed={50} gradient={false} delay={1}>
            <p className="inline-flex mr-20">
              <strong className="px-[5px]">🔊 🔊 🔊 Sapphire Betting </strong> has been fully updated and renamed to <strong className="px-[5px]"> BharatWin</strong>! A new experience and generous rewards await you!
            </p>
            <p className="inline-flex mr-20">
              🔊 🔊 🔊 Recharge cashback event is in full swing. Deposit using <strong className="px-[5px]"> USDT Pay </strong> and get an instant <strong className="px-[5px]">0.5%</strong> cashback.
            </p>
            <p className="inline-flex mr-20">
              🔊 🔊 🔊 Earn generous rewards by checking in daily. Check in for 30 consecutive days to receive over Rs. 1000.
            </p>
            <p className="inline-flex mr-20">
              🔊 🔊 🔊 Complete missions to receive substantial bonus rewards. More missions are updated weekly, waiting for you to challenge!
            </p>
            <p className="inline-flex mr-20">
              Invite friends to register and deposit any amount to earn rewards. The more friends you invite, the more you earn!
            </p>
            <p className="inline-flex">
              If you have any questions or need assistance, please feel free to contact customer service. Enjoy your game!
            </p>
          </Marquee>
        </div>
      </div>
    </div>
  );
};

export default SlideText;
