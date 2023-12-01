import { useState } from "react";
import Shroomie from "/users/Shroomie.png";
import Wallet from "/magic/Wallet.png";
import Collection from "/magic/Collection.png";
import Earning from "/magic/Earning.png";
import Pilot from "/magic/Pilot.png";

const Magic = () => {
  let time = new Date().toLocaleTimeString();
  const [CurrentTime, setCurrentTime] = useState(time);

  const updateTime = () => {
    let time = new Date().toLocaleTimeString();
    setCurrentTime(time);
  };

  setInterval(updateTime, 1000);

  return (
    <div className="max-w-screen-2xl mx-auto mt-16">
      <div className="bg-[url('https://img.freepik.com/premium-photo/psychedelic-fantasy-magic-mushrooms-alien-forest-world-fantastic-fungus-with-glowing-stems-generative-ai_536572-1355.jpg')] bg-cover bg-no-repeat w-full h-[640px] flex justify-between lg:items-end md:items-center lg:p-40 md:p-10">
        <div className="lg:leading-loose md:flex md:flex-col md:items-center">
          <div className="flex items-center justify-center gap-4 w-[151px] cursor-pointer h-[44px] border rounded-2xl active:scale-90 bg-[#3B3B3B] transition-all duration-700 hover:border-none">
            <img className="w-[24px] h-[24px]" src={Shroomie} alt="" />
            <button className="text-white">Shroomie</button>
          </div>
          <h2 className="text-white font-semibold lg:text-[51px] md:py-6">
            Magic Mashrooms
          </h2>
          <div className="flex items-center justify-center gap-4 lg:w-[198px] md:w-[180px] md:h-[50px] cursor-pointer lg:h-[60px] border rounded-3xl bg-white active:scale-90 transition-all duration-700 hover:border-none">
            <i className="fas fa-eye text-purple-500"></i>
            <button className="text-black font-semibold">See NFT</button>
          </div>
        </div>
        <div className="bg-gradient-to-b from-[#59437D] to-[#73499A] w-[295px] h-[144px] rounded-[20px] p-[30px] md:flex md:flex-col md:items-center">
          <span className="text-[#ffffff] text-[12px]">Auction ends in:</span>
          <h3 className="text-[38px] text-center text-white">{CurrentTime}</h3>
        </div>
      </div>
      <div className="lg:px-40 md:px-10 pt-20 pb-10">
        <h3 className="capitalize lg:text-[38px] md:text-[26px] text-white font-semibold">
          How it works
        </h3>
        <p className="text-white lg:text-[22px] md:text-[16px] capitalize">
          Find out how to get started
        </p>
      </div>
      <div className="flex lg:px-40 md:px-10 lg:justify-between lg:gap-20 md:gap-6">
        <div className="lg:w-[330px] lg:h-[439px] md:w-[250px] md:h-[330px] bg-[#3B3B3B] rounded-3xl text-center flex-col items-center justify-center text-white pt-[10px] pr-[30px] pb-[30px] pl-[30px]">
          <img
            className="md:w-[140px] md:h-[140px] lg:w-auto lg:h-auto"
            src={Wallet}
            alt=""
          />
          <h5 className="lg:text-[22px] md:text-[18px] font-semibold py-2">
            Setup Your wallet
          </h5>
          <p className="md:text-[12px] lg:text-[16px]">
            Set up your wallet of choice. Connect it to the Animarket by
            clicking the wallet icon in the top right corner.
          </p>
        </div>
        <div className="lg:w-[330px] lg:h-[439px] md:w-[250px] md:h-[330px] bg-[#3B3B3B] rounded-3xl text-center flex flex-col items-center justify-center text-white pt-[10px] pr-[30px] pb-[30px] pl-[30px]">
          <img
            className="md:w-[140px] md:h-[140px] lg:w-auto lg:h-auto"
            src={Collection}
            alt=""
          />
          <h5 className="lg:text-[22px] md:text-[18px] font-semibold py-2">
            Create Collection
          </h5>
          <p className="md:text-[12px] lg:text-[16px]">
            Upload your work and setup your collection. Add a description,
            social links and floor price.
          </p>
        </div>
        <div className="lg:w-[330px] lg:h-[439px] md:w-[250px] md:h-[330px] bg-[#3B3B3B] rounded-3xl text-center flex flex-col items-center justify-center text-white pt-[10px] pr-[30px] pb-[30px] pl-[30px]">
          <img
            className="md:w-[140px] md:h-[140px] lg:w-auto lg:h-auto"
            src={Earning}
            alt=""
          />
          <h5 className="lg:text-[22px] md:text-[18px] font-semibold py-2">
            Start Earning
          </h5>
          <p className="md:text-[12px] lg:text-[16px]">
            Choose between auctions and fixed-price listings. Start earning by
            selling your NFTs or trading others.
          </p>
        </div>
      </div>
      <div className="flex bg-[#3B3B3B] lg:gap-20 md:gap-10 lg:w-[1200px] lg:h-[430px] md:h-[300px] rounded-[20px] lg:px-0 justify-center lg:mx-auto mt-32 md:mx-10 md:px-10">
        <div className="flex items-center">
          <img src={Pilot} alt="" />
        </div>
        <div className="lg:mt-16 md:mt-8 w-[430px]">
          <h3 className="text-white font-semibold lg:text-[38px] md:text-[22px] capitalize">
            Join our weekly digest
          </h3>
          <p className="lg:text-[22px] md:text-[14px] text-white lg:pb-20 md:pb-10 pt-4">
            Get exclusive promotions & updates straight to your inbox.
          </p>
          <div className="flex lg:items-center relative lg:flex-row md:flex-col lg:gap-0 md:gap-6">
            <div className="lg:absolute bg-white lg:w-[225px] lg:h-[50px] md:w-[250px] md:h-[40px] flex items-center md:justify-center indent-2 rounded-2xl lg:text-[16px] md:text-[14px]">
              Enter your email here
            </div>
            <div className="lg:absolute lg:right-4 lg:w-[211px] lg:h-[50px] md:w-[250px] md:h-[40px] flex items-center justify-center gap-3 text-white bg-purple-700 rounded-2xl lg:text-[16px] md:text-[14px]">
              <i className="fa-regular fa-envelope"></i> Subscribe
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Magic;
