import React, { useState } from "react";
import HeaderLogo from "/assets/Storefront.png";
import HeaderContentImg from "/assets/Highlighted NFT.png";
import CounterUpPage from "../counter/CounterUpPage";

const Header = () => {
  const [openModal, setOpenModal] = useState(true);

  function handleClick() {
    setOpenModal(!openModal);
  }
  return (
    <div className="max-w-screen-2xl mx-auto">
      <div className="flex lg:justify-between md:justify-between lg:p-6 md:p-6">
        <div className="flex items-center lg:gap-3 lg:px-16 md:gap-3">
          <img src={HeaderLogo} alt="Bu yerda NFT Marketing logosi bor" />
          <h1 className="font-['Work Sans'] text-xl md:text-[18px] md:w-[300px] text-[#ffffff] font-semibold">
            NFT Marketplace
          </h1>
        </div>
        <div className="flex items-center lg:gap-16 lg:px-16">
          <a
            href="#"
            className="md:hidden lg:block font-['Work Sans'] font-semibold text-[#ffffff] text-base after:content-[''] after:w-0 after:h-1 after:hover:bg-[#A259FF] after:duration-700 after:absolute after:top-8 after:left-0 after:hover:w-full relative"
          >
            Marketplace
          </a>
          <a
            href="#"
            className="md:hidden lg:block font-['Work Sans'] font-semibold text-[#ffffff] text-base after:content-[''] after:w-0 after:h-1 after:hover:bg-[#A259FF] after:duration-700 after:absolute after:top-8 after:left-0 after:hover:w-full relative"
          >
            Rankings
          </a>
          <a
            href="#"
            className="md:hidden lg:block font-['Work Sans'] font-semibold text-[#ffffff] text-base after:content-[''] after:w-0 after:h-1 after:hover:bg-[#A259FF] after:duration-700 after:absolute after:top-8 after:left-0 after:hover:w-full relative"
          >
            Connect a wallet
          </a>
          <div className="lg:flex items-center justify-center md:hidden gap-4 w-36 cursor-pointer h-14 border rounded-2xl hover:bg-[#A259FF] transition-all duration-700 hover:border-none active:scale-90">
            <i className="fas fa-user text-white"></i>
            <button className="text-white">Sign Up</button>
          </div>
          <div
            className={`modal ${
              openModal ? "" : "md:hidden"
            } md:cursor-pointer`}
          >
            <i
              onClick={handleClick}
              className="fa-solid fa-bars md:text-[20px] md:text-gray-400 md:active:scale-90 md:duration-700"
            ></i>
          </div>
          <div
            className={`lg:hidden modal ${
              openModal ? "md:hidden" : ""
            } md:flex md:w-[300px] md:h-[250px] md:bg-slate-600 md:relative md:rounded-xl md:flex-col md:items-center md:justify-center`}
          >
            <i
              onClick={handleClick}
              className="fas fa-close md:absolute md:right-6 md:top-4 md:text-[25px] text-gray-400 md:cursor-pointer md:active:scale-90 md:duration-500"
            ></i>
            <a
              href="#"
              className="md:block lg:hidden font-['Work Sans'] font-semibold text-[#ffffff] text-base after:content-[''] after:w-0 after:h-1 after:hover:bg-[#e15f76f5] after:duration-700 after:absolute after:top-8 after:left-0 after:hover:w-full relative md:pb-4 md:active:scale-90 md:duration-500"
            >
              Marketplace
            </a>
            <a
              href="#"
              className="md:block lg:hidden font-['Work Sans'] font-semibold text-[#ffffff] text-base after:content-[''] after:w-0 after:h-1 after:hover:bg-[#e15f76f5] after:duration-700 after:absolute after:top-8 after:left-0 after:hover:w-full relative md:pb-4 md:active:scale-90 md:duration-500"
            >
              Rankings
            </a>
            <a
              href="#"
              className="md:block lg:hidden font-['Work Sans'] font-semibold text-[#ffffff] text-base after:content-[''] after:w-0 after:h-1 after:hover:bg-[#e15f76f5] after:duration-700 after:absolute after:top-8 after:left-0 after:hover:w-full relative md:pb-4 md:active:scale-90 md:duration-500"
            >
              Connect a wallet
            </a>
            <div className="items-center justify-center md:flex gap-4 w-36 cursor-pointer h-10 border rounded-2xl hover:bg-[#A259FF] transition-all duration-700 hover:border-none md:active:scale-90">
              <i className="fas fa-user text-white text-[14px]"></i>
              <button className="text-white text-[14px]">Sign Up</button>
            </div>
          </div>
        </div>
      </div>
      <div className="lg:px-40 flex lg:mt-20 md:px-10 md:mt-20">
        <div className="">
          <h1 className="lg:text-7xl md:text-5xl text-white lg:w-3/4 md:w-[400px] font-semibold leading-[80px] capitalize">
            Discover digital art & Collect NFTs
          </h1>
          <p className="lg:w-3/4 md:w-[330px] lg:capitalize text-white font-[400] my-5 lg:text-[22px] md:text-[16px]">
            NFT marketplace UI created with Anima for Figma. Collect, buy and
            sell art from more than 20k NFT artists.
          </p>
          <div className="flex items-center justify-center gap-4 w-64 cursor-pointer h-14 border rounded-2xl hover:bg-[#A259FF] transition-all duration-700 hover:border-none text-white my-6">
            <i className="fas fa-rocket"></i>
            Get Started
          </div>
          <CounterUpPage />
        </div>
        <div className="w-3/4">
          <img src={HeaderContentImg} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Header;
