import React, { useState } from "react";
import CountUp from "react-countup";
import ScrollTrigger from "react-scroll-trigger";
import CardDogImage from "/collections/Primary Photo Placeholder.png";
import CardCatImage from "/collections/cardCatIMage.png";
import CardBearImage from "/collections/Bear.png";
import CardMushroomImage from "/collections/Primary Photo Placeholder (1).png";
import CardMagicImage from "/collections/magicmushroom.png";
import CardRobotImage from "/collections/Primary Photo Placeholder (2).png";
import CardDiscoImage from "/collections/robot2.png";
import CardDiscoRobotImage from "/collections/robot.png";
import MrFox from "/avatars/mrFox.png";
import Shroomie from "/avatars/Avatar Placeholder (3).png";
import BeKind2Robots from "/avatars/Asset 12 2.png";

const Collection = () => {
  const [counterOn, setCounterOn] = useState(false);
  const [replaceImg, setReplaceImg] = useState(CardDogImage);
  const [mushroom, setMushroom] = useState(CardMushroomImage);
  const [robot, setRobot] = useState(CardRobotImage);
  return (
    <div className="lg:px-40 md:px-10 mt-40 max-w-screen-2xl mx-auto">
      <div>
        <h3 className="text-white font-semibold font-['Work Sans'] lg:text-[38px] md:text-[30px] leading-[46px] py-2">
          Trending Collection
        </h3>
        <p className="font-['Work Sans'] lg:text-[22px] md:text-[18px] text-white lg:leading-[35px]">
          Checkout our weekly updated trending collection.
        </p>
      </div>
      <div className="flex lg:justify-evently md:justify-around lg:gap-4 md:gap-20 mt-20 md:flex-wrap">
        <div className="">
          <div className="md:h-[250px] md:w-[250px] lg:w-[330px] lg:h-[330px]">
            <img
              className="md:h-[250px] lg:w-[330px] lg:h-[330px] rounded-xl md:w-[250px] cursor-pointer"
              src={replaceImg}
              alt="Bu yerda kuchukning rasmi bor"
            />
          </div>
          <div className="flex mt-6 gap-6">
            <img
              className="lg:h-24 lg:w-24 md:w-16 md:h-16 cursor-pointer"
              onClick={() => {
                setReplaceImg(CardCatImage);
              }}
              src={CardCatImage}
              alt="Bu yerda mushukning rasmi bor"
            />
            <img
              className="lg:h-24 lg:w-24 md:w-16 md:h-16 cursor-pointer"
              onClick={() => {
                setReplaceImg(CardBearImage);
              }}
              src={CardBearImage}
              alt="Bu yerda ayiqning rasmi bor"
            />
            <ScrollTrigger
              onEnter={() => setCounterOn(true)}
              onExit={() => setCounterOn(false)}
            >
              <div className="flex items-center justify-center rounded-2xl lg:text-xl md:text-[16px] font-[monospace] font-semibold lg:w-24 lg:h-24 md:w-16 md:h-16 bg-[#A259FF]">
                {counterOn && (
                  <CountUp start={0} end={1025} duration={5} delay={0} />
                )}
                +
              </div>
            </ScrollTrigger>
          </div>
          <div className="leading-loose mt-6">
            <h5 className="text-white text-[22px] font-semibold font-['Work Sans']">
              DSGN Animals
            </h5>
            <div className="flex items-center gap-4">
              <img
                className="w-8"
                src={MrFox}
                alt="Bu yerda tulkining rasmi bor"
              />
              <span className="text-white font-normal">MrFox</span>
            </div>
          </div>
        </div>
        <div className="">
          <div className="md:h-[250px] md:w-[250px] lg:w-[330px] lg:h-[330px]">
            <img
              className="md:h-[250px] lg:w-[330px] lg:h-[330px] rounded-xl md:w-[250px] cursor-pointer"
              src={mushroom}
              alt="Bu yerda qo'ziqorinning rasmi bor"
            />
          </div>
          <div className="flex mt-6 gap-6">
            <img
              className="lg:w-24 lg:h-24 md:w-16 md:h-16 cursor-pointer"
              src={CardMagicImage}
              alt="Bu yerda qo'ziqorinning rasmi bor"
              onClick={() => {
                setMushroom(CardMagicImage);
              }}
            />
            <img
              className="lg:w-24 lg:h-24 md:w-16 md:h-16 cursor-pointer"
              src={CardMushroomImage}
              alt="Bu yerda qo'ziqorinning rasmi bor"
              onClick={() => {
                setMushroom(CardMushroomImage);
              }}
            />
            <ScrollTrigger
              onEnter={() => setCounterOn(true)}
              onExit={() => setCounterOn(false)}
            >
              <div className="flex items-center justify-center rounded-2xl lg:text-xl md:text-[16px] font-[monospace] font-semibold lg:w-24 lg:h-24 md:w-16 md:h-16 bg-[#A259FF]">
                {counterOn && (
                  <CountUp start={0} end={1025} duration={5} delay={0} />
                )}
                +
              </div>
            </ScrollTrigger>
          </div>
          <div className="leading-loose mt-6">
            <h5 className="text-white text-[22px] font-semibold font-['Work Sans']">
              Magic Mushrooms
            </h5>
            <div className="flex items-center gap-4">
              <img
                className="w-8"
                src={Shroomie}
                alt="Bu yerda xitoylikning rasmi bor"
              />
              <span className="text-white font-normal">Shroomie</span>
            </div>
          </div>
        </div>
        <div className="">
          <div className="md:h-[250px] md:w-[250px] lg:w-[330px] lg:h-[330px]">
            <img
              className="md:h-[250px] lg:w-[330px] lg:h-[330px] rounded-xl md:w-[250px] cursor-pointer"
              src={robot}
              alt="Bu yerda robotnning rasmi bor"
            />
          </div>
          <div className="card-collections flex mt-6 gap-6">
            <img
              className="lg:w-24 lg:h-24 md:w-16 md:h-16 cursor-pointer"
              onClick={() => {
                setRobot(CardDiscoImage);
              }}
              src={CardDiscoImage}
              alt="Bu yerda robotnning rasmi bor"
            />
            <img
              onClick={() => {
                setRobot(CardDiscoRobotImage);
              }}
              className="lg:w-24 lg:h-24 md:w-16 md:h-16 cursor-pointer"
              src={CardDiscoRobotImage}
              alt="Bu yerda robotnning rasmi bor"
            />
            <ScrollTrigger
              onEnter={() => setCounterOn(true)}
              onExit={() => setCounterOn(false)}
            >
              <div className="flex items-center justify-center rounded-2xl lg:text-xl md:text-[16px] font-[monospace] font-semibold lg:w-24 lg:h-24 md:w-16 md:h-16 bg-[#A259FF]">
                {counterOn && (
                  <CountUp start={0} end={1025} duration={5} delay={0} />
                )}
                +
              </div>
            </ScrollTrigger>
          </div>
          <div className="leading-loose mt-6">
            <h5 className="text-white text-[22px] font-semibold font-['Work Sans']">
              Disco Machines
            </h5>
            <div className="flex items-center gap-4">
              <img
                className="w-8"
                src={BeKind2Robots}
                alt="Bu yerda robotnning rasmi bor"
              />
              <span className="text-white font-normal">BeKind2Robots</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Collection;
