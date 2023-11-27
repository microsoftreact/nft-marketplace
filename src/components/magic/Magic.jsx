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
      <div className="bg-[url('https://img.freepik.com/premium-photo/psychedelic-fantasy-magic-mushrooms-alien-forest-world-fantastic-fungus-with-glowing-stems-generative-ai_536572-1355.jpg')] bg-cover bg-no-repeat w-full h-[640px] flex justify-between items-end p-40">
        <div className="leading-loose">
          <div className="flex items-center justify-center gap-4 w-[151px] cursor-pointer h-[44px] border rounded-2xl active:scale-90 bg-[#3B3B3B] transition-all duration-700 hover:border-none">
            <img className="w-[24px] h-[24px]" src={Shroomie} alt="" />
            <button className="text-white">Shroomie</button>
          </div>
          <h2 className="text-white font-semibold text-[51px]">
            Magic Mashrooms
          </h2>
          <div className="flex items-center justify-center gap-4 w-[198px] cursor-pointer h-[60px] border rounded-3xl bg-white active:scale-90 transition-all duration-700 hover:border-none">
            <i className="fas fa-eye text-purple-500"></i>
            <button className="text-black font-semibold">See NFT</button>
          </div>
        </div>
        <div className="bg-gradient-to-b from-[#59437D] to-[#73499A] w-[295px] h-[144px] rounded-[20px] p-[30px]">
          <span className="text-[#ffffff] text-[12px]">Auction ends in:</span>
          <h3 className="text-[38px] tracking-[12px] text-white">
            {CurrentTime}
          </h3>
        </div>
      </div>
      <div className="px-40 pt-20 pb-10">
        <h3 className="capitalize text-[38px] text-white font-semibold">
          How it works
        </h3>
        <p className="text-white text-[22px] capitalize">
          Find out how to get started
        </p>
      </div>
      <div className="flex px-40 justify-between gap-20">
        <div className="w-[330px] h-[439px] bg-[#3B3B3B] rounded-3xl text-center flex flex-col items-center justify-center text-white pt-[10px] pr-[30px] pb-[30px] pl-[30px]">
          <img src={Wallet} alt="" />
          <h5 className="text-[22px] font-semibold py-2">Setup Your wallet</h5>
          <p>
            Set up your wallet of choice. Connect it to the Animarket by
            clicking the wallet icon in the top right corner.
          </p>
        </div>
        <div className="w-[330px] h-[439px] bg-[#3B3B3B] rounded-3xl text-center flex flex-col items-center justify-center text-white pt-[10px] pr-[30px] pb-[30px] pl-[30px]">
          <img src={Collection} alt="" />
          <h5 className="text-[22px] font-semibold py-2">Create Collection</h5>
          <p>
            Upload your work and setup your collection. Add a description,
            social links and floor price.
          </p>
        </div>
        <div className="w-[330px] h-[439px] bg-[#3B3B3B] rounded-3xl text-center flex flex-col items-center justify-center text-white pt-[10px] pr-[30px] pb-[30px] pl-[30px]">
          <img src={Earning} alt="" />
          <h5 className="text-[22px] font-semibold py-2">Start Earning</h5>
          <p>
            Choose between auctions and fixed-price listings. Start earning by
            selling your NFTs or trading others.
          </p>
        </div>
      </div>
      <div className="flex bg-[#3B3B3B] gap-20 w-[1200px] h-[430px] rounded-[20px] justify-center mx-auto mt-32">
        <div className="flex items-center">
          <img src={Pilot} alt="" />
        </div>
        <div className="mt-16 w-[430px]">
          <h3 className="text-white font-semibold text-[38px] capitalize">
            Join our weekly digest
          </h3>
          <p className="text-[22px] text-white pb-20 pt-4">
            Get exclusive promotions & updates straight to your inbox.
          </p>
          <div className="flex items-center just relative">
            <div className="absolute bg-white w-[225px] h-[50px] flex items-center indent-2 rounded-2xl">
              Enter your email here
            </div>
            <div className="absolute right-4 w-[211px] h-[50px] flex items-center justify-center gap-3 text-white bg-purple-700 rounded-2xl">
              <i className="fa-regular fa-envelope"></i> Subscribe
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Magic;
