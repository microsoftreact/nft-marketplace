import React, { useState } from "react";
import CountUp from "react-countup";
import ScrollTrigger from "react-scroll-trigger";

const CounterUpPage = () => {
  const [counterOn, setCounterOn] = useState(false);

  return (
    <ScrollTrigger
      onEnter={() => setCounterOn(true)}
      onExit={() => setCounterOn(false)}
    >
      <div className="flex gap-12 text-white font-['Work Sans']">
        <div className="flex flex-col">
          <span className="font-semibold lg:text-[28px] md:text-[22px]">
            {counterOn && (
              <CountUp start={0} end={240} duration={10} delay={0} />
            )}
            k<span className="px-1">+</span>
          </span>
          <span className="lg:text-[24px] md:text-[18px]">Total Sale</span>
        </div>
        <div className="flex flex-col">
          <span className="font-semibold lg:text-[28px] md:text-[22px]">
            {counterOn && (
              <CountUp start={0} end={100} duration={5} delay={0} />
            )}
            k<span className="px-1">+</span>
          </span>
          <span className="lg:text-[24px] md:text-[18px]">Auctions</span>
        </div>
        <div className="flex flex-col">
          <span className="font-semibold lg:text-[28px] md:text-[22px]">
            {counterOn && (
              <CountUp start={0} end={240} duration={10} delay={0} />
            )}
            k<span className="px-1">+</span>
          </span>
          <span className="lg:text-[24px] md:text-[18px]">Artists</span>
        </div>
      </div>
    </ScrollTrigger>
  );
};

export default CounterUpPage;
