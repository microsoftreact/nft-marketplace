import NftLogo from "/assets/Storefront.png";

const Footer = () => {
  return (
    <div className="w-full h-[400px] bg-[#3B3B3B]">
      <div className="max-w-screen-2xl mx-auto px-40 flex justify-between mt-14 pt-[1px]">
        <div className="mt-20 w-[328px]">
          <div className="text-white font-semibold flex items-center gap-4 text-[22px]">
            <img src={NftLogo} alt="" />
            NFT Marketplace
          </div>
          <p className="text-[#cccccc] w-[238px] py-6">
            NFT marketplace UI created with Anima for Figma.
          </p>
          <span className="text-[#cccccc] my-10">Join our community</span>
          <div className="flex gap-4 mt-4">
            <i className="fa-brands fa-discord text-[#858584] text-[25px]"></i>
            <i className="fa-brands fa-youtube text-[#858584] text-[25px]"></i>
            <i className="fa-brands fa-twitter text-[#858584] text-[25px]"></i>
            <i className="fa-brands fa-instagram text-[#858584] text-[25px]"></i>
          </div>
        </div>
        <div className="mt-20">
          <a className="text-white block font-semibold text-[22px]" href="#">
            Explore
          </a>
          <a
            className="text-white block active:scale-90 pt-4 hover:text-purple-500"
            href="#"
          >
            Marketplace
          </a>
          <a
            className="text-white block active:scale-90 pt-4 hover:text-purple-500"
            href="#"
          >
            Rankings
          </a>
          <a
            className="text-white block active:scale-90 pt-4 hover:text-purple-500"
            href="#"
          >
            Connect a wallet
          </a>
        </div>
        <div className="mt-16 w-[470px]">
          <h3 className="text-white font-semibold tracking-wider text-[22px] capitalize">
            Join our weekly digest
          </h3>
          <p className="text-white w-[330px] pb-14 pt-6">
            Get exclusive promotions & updates straight to your inbox.
          </p>
          <div className="flex items-center justify-center relative">
            <div className="absolute left-0 bg-white w-[250px] h-[55px] flex items-center indent-2 rounded-2xl">
              Enter your email here
            </div>
            <div className="absolute right-12 w-[210px] h-[55px] flex items-center justify-center gap-3 text-white bg-purple-700 rounded-2xl">
              Subscribe
            </div>
          </div>
        </div>
      </div>
      <hr className="border w-[1200px] mx-auto my-10 bg-[#858584]" />
      <div className="w-[1200px] mx-auto text-[#858584] font-semibold text-[18px]">
        Ⓒ Create website design by Nodirbek Toshpulatov
      </div>
    </div>
  );
};

export default Footer;
