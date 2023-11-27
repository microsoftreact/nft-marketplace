import React from "react";
import HeaderLogo from "/assets/Storefront.png";
import HeaderContentImg from "/assets/Highlighted NFT.png";
import CounterUpPage from "../counter/CounterUpPage";

const Header = () => {
  return (
    <div className="max-w-screen-2xl mx-auto">
      <div className="flex justify-between p-6">
        <div className="flex items-center gap-3 px-16">
          <img src={HeaderLogo} alt="Bu yerda NFT Marketing logosi bor" />
          <h1 className="font-['Work Sans'] text-xl text-[#ffffff] font-semibold">
            NFT Marketplace
          </h1>
        </div>
        <div className="flex items-center gap-16 px-16">
          <a
            href="#"
            className="font-['Work Sans'] font-semibold text-[#ffffff] text-base after:content-[''] after:w-0 after:h-1 after:hover:bg-[#A259FF] after:duration-700 after:absolute after:top-8 after:left-0 after:hover:w-full relative"
          >
            Marketplace
          </a>
          <a
            href="#"
            className="font-['Work Sans'] font-semibold text-[#ffffff] text-base after:content-[''] after:w-0 after:h-1 after:hover:bg-[#A259FF] after:duration-700 after:absolute after:top-8 after:left-0 after:hover:w-full relative"
          >
            Rankings
          </a>
          <a
            href="#"
            className="font-['Work Sans'] font-semibold text-[#ffffff] text-base after:content-[''] after:w-0 after:h-1 after:hover:bg-[#A259FF] after:duration-700 after:absolute after:top-8 after:left-0 after:hover:w-full relative"
          >
            Connect a wallet
          </a>
          <div className="flex items-center justify-center gap-4 w-36 cursor-pointer h-14 border rounded-2xl hover:bg-[#A259FF] transition-all duration-700 hover:border-none">
            <i className="fas fa-user text-white"></i>
            <button className="text-white">Sign Up</button>
          </div>
        </div>
      </div>
      <div className="px-40 flex mt-20">
        <div className="">
          <h1 className="text-7xl text-white w-3/4 font-semibold leading-[80px] capitalize">
            Discover digital art & Collect NFTs
          </h1>
          <p className="w-3/4 capitalize text-white font-[400] my-5 text-[22px]">
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
