import Keepitreal from "/users/Keepitreal.png";
import Digilab from "/users/Digilab.png";
import Gravityone from "/users/Gravityone.png";
import Juanie from "/users/Juanie.png";
import Bluewhale from "/users/Bluewhale.png";
import Mrfox from "/users/Mrfox.png";
import Shroomie from "/users/Shroomie.png";
import Robotica from "/users/Robotica.png";
import RustyRobot from "/users/RustyRobot.png";
import Animakid from "/users/Animakid.png";
import Dotgu from "/users/Dotgu.png";
import Ghiblier from "/users/Ghiblier.png";
import Art from "/browse-categories/Art.png";
import Basketball from "/browse-categories/Basketball.png";
import Camera from "/browse-categories/Camera.png";
import Collectibles from "/browse-categories/Collectibles.png";
import MagicWand from "/browse-categories/MagicWand.png";
import PaintBrush from "/browse-categories/PaintBrush.png";
import MusicNotes from "/browse-categories/MusicNotes.png";
import Music from "/browse-categories/Music.png";
import Photography from "/browse-categories/Photography.png";
import Planet from "/browse-categories/Planet.png";
import Sport from "/browse-categories/Sport.png";
import Swatches from "/browse-categories/Swatches.png";
import Utility from "/browse-categories/Utility.png";
import Video from "/browse-categories/Video.png";
import VideoCamera from "/browse-categories/VideoCamera.png";
import VirtualWorlds from "/browse-categories/VirtualWorlds.png";
import DistantGalaxy from "/discover/DistantGalaxy.png";
import LifeOnEdena from "/discover/LifeOnEdena.png";
import AstroFiction from "/discover/AstroFiction.png";
import MoonDancer from "/discover/MoonDancer.png";
import NebulaKid from "/discover/NebulaKid.png";
import SpaceOne from "/discover/SpaceOne.png";

const User = () => {
  return (
    <div className="max-w-screen-2xl mx-auto">
      <div className="flex justify-between px-40 mt-24">
        <div className="leading-normal">
          <h3 className="font-semibold text-[38px] text-[#ffffff]">
            Top creators
          </h3>
          <span className="text-white text-[22px] font-['Work Sans']">
            Checkout Top Rated Creators on the NFT Marketplace
          </span>
        </div>
        <div className="font-semibold text-[16px] flex items-center justify-center gap-4 w-72 cursor-pointer h-14 border-purple-600 border-2 text-white rounded-2xl hover:bg-[#A259FF] transition-all duration-700 hover:border-none">
          <i className="fas fa-rocket"></i>
          View Rankings
        </div>
      </div>
      <div className="px-40 pt-40">
        <div className="flex gap-20">
          <div className="relative bg-[#3B3B3B] w-[240px] h-[238px] flex flex-col items-center justify-center rounded-3xl p-[20px]">
            <span className="absolute left-6 top-6 w-[30px] h-[30px] rounded-[50%] bg-[#2B2B2B] flex items-center justify-center text-[#858584]">
              1
            </span>
            <img className="w-[120px] h-[120px]" src={Keepitreal} />
            <h5 className="text-white font-semibold text-[22px] pt-4">
              Keepitreal
            </h5>
            <div className="flex gap-2 text-white">
              <p className="text-[#858584]">Total Sales:</p>
              <span className="">34.53 ETH</span>
            </div>
          </div>
          <div className="relative bg-[#3B3B3B] w-[240px] h-[238px] flex flex-col items-center justify-center rounded-3xl p-[20px]">
            <span className="absolute left-6 top-6 w-[30px] h-[30px] rounded-[50%] bg-[#2B2B2B] flex items-center justify-center text-[#858584]">
              2
            </span>
            <img className="w-[120px] h-[120px]" src={Digilab} />
            <h5 className="text-white font-semibold text-[22px] pt-4">
              DigiLab
            </h5>
            <div className="flex gap-2 text-white">
              <p className="text-[#858584]">Total Sales:</p>
              <span className="">34.53 ETH</span>
            </div>
          </div>
          <div className="relative bg-[#3B3B3B] w-[240px] h-[238px] flex flex-col items-center justify-center rounded-3xl p-[20px]">
            <span className="absolute left-6 top-6 w-[30px] h-[30px] rounded-[50%] bg-[#2B2B2B] flex items-center justify-center text-[#858584]">
              3
            </span>
            <img className="w-[120px] h-[120px]" src={Gravityone} />
            <h5 className="text-white font-semibold text-[22px] pt-4">
              GravityOne
            </h5>
            <div className="flex gap-2 text-white">
              <p className="text-[#858584]">Total Sales:</p>
              <span className="">34.53 ETH</span>
            </div>
          </div>
          <div className="relative bg-[#3B3B3B] w-[240px] h-[238px] flex flex-col items-center justify-center rounded-3xl p-[20px]">
            <span className="absolute left-6 top-6 w-[30px] h-[30px] rounded-[50%] bg-[#2B2B2B] flex items-center justify-center text-[#858584]">
              4
            </span>
            <img className="w-[120px] h-[120px]" src={Juanie} />
            <h5 className="text-white font-semibold text-[22px] pt-4">
              Juanie
            </h5>
            <div className="flex gap-2 text-white">
              <p className="text-[#858584]">Total Sales:</p>
              <span className="">34.53 ETH</span>
            </div>
          </div>
        </div>
        <div className="flex gap-20 py-20">
          <div className="relative bg-[#3B3B3B] w-[240px] h-[238px] flex flex-col items-center justify-center rounded-3xl p-[20px]">
            <span className="absolute left-6 top-6 w-[30px] h-[30px] rounded-[50%] bg-[#2B2B2B] flex items-center justify-center text-[#858584]">
              5
            </span>
            <img className="w-[120px] h-[120px]" src={Bluewhale} />
            <h5 className="text-white font-semibold text-[22px] pt-4">
              BlueWhale
            </h5>
            <div className="flex gap-2 text-white">
              <p className="text-[#858584]">Total Sales:</p>
              <span className="">34.53 ETH</span>
            </div>
          </div>
          <div className="relative bg-[#3B3B3B] w-[240px] h-[238px] flex flex-col items-center justify-center rounded-3xl p-[20px]">
            <span className="absolute left-6 top-6 w-[30px] h-[30px] rounded-[50%] bg-[#2B2B2B] flex items-center justify-center text-[#858584]">
              6
            </span>
            <img className="w-[120px] h-[120px]" src={Mrfox} />
            <h5 className="text-white capitalize font-semibold text-[22px] pt-4">
              mr fox
            </h5>
            <div className="flex gap-2 text-white">
              <p className="text-[#858584]">Total Sales:</p>
              <span className="">34.53 ETH</span>
            </div>
          </div>
          <div className="relative bg-[#3B3B3B] w-[240px] h-[238px] flex flex-col items-center justify-center rounded-3xl p-[20px]">
            <span className="absolute left-6 top-6 w-[30px] h-[30px] rounded-[50%] bg-[#2B2B2B] flex items-center justify-center text-[#858584]">
              7
            </span>
            <img className="w-[120px] h-[120px]" src={Shroomie} />
            <h5 className="text-white font-semibold text-[22px] pt-4">
              Shroomie
            </h5>
            <div className="flex gap-2 text-white">
              <p className="text-[#858584]">Total Sales:</p>
              <span className="">34.53 ETH</span>
            </div>
          </div>
          <div className="relative bg-[#3B3B3B] w-[240px] h-[238px] flex flex-col items-center justify-center rounded-3xl p-[20px]">
            <span className="absolute left-6 top-6 w-[30px] h-[30px] rounded-[50%] bg-[#2B2B2B] flex items-center justify-center text-[#858584]">
              8
            </span>
            <img className="w-[120px] h-[120px]" src={Robotica} />
            <h5 className="text-white capitalize font-semibold text-[22px] pt-4">
              robotica
            </h5>
            <div className="flex gap-2 text-white">
              <p className="text-[#858584]">Total Sales:</p>
              <span className="">34.53 ETH</span>
            </div>
          </div>
        </div>
        <div className="flex gap-20 pb-48">
          <div className="relative bg-[#3B3B3B] w-[240px] h-[238px] flex flex-col items-center justify-center rounded-3xl p-[20px]">
            <span className="absolute left-6 top-6 w-[30px] h-[30px] rounded-[50%] bg-[#2B2B2B] flex items-center justify-center text-[#858584]">
              9
            </span>
            <img className="w-[120px] h-[120px]" src={RustyRobot} />
            <h5 className="text-white font-semibold text-[22px] pt-4">
              RustyRobot
            </h5>
            <div className="flex gap-2 text-white">
              <p className="text-[#858584]">Total Sales:</p>
              <span className="">34.53 ETH</span>
            </div>
          </div>
          <div className="relative bg-[#3B3B3B] w-[240px] h-[238px] flex flex-col items-center justify-center rounded-3xl p-[20px]">
            <span className="absolute left-6 top-6 w-[30px] h-[30px] rounded-[50%] bg-[#2B2B2B] flex items-center justify-center text-[#858584]">
              10
            </span>
            <img className="w-[120px] h-[120px]" src={Animakid} />
            <h5 className="text-white capitalize font-semibold text-[22px] pt-4">
              animakid
            </h5>
            <div className="flex gap-2 text-white">
              <p className="text-[#858584]">Total Sales:</p>
              <span className="">34.53 ETH</span>
            </div>
          </div>
          <div className="relative bg-[#3B3B3B] w-[240px] h-[238px] flex flex-col items-center justify-center rounded-3xl p-[20px]">
            <span className="absolute left-6 top-6 w-[30px] h-[30px] rounded-[50%] bg-[#2B2B2B] flex items-center justify-center text-[#858584]">
              11
            </span>
            <img className="w-[120px] h-[120px]" src={Dotgu} />
            <h5 className="text-white font-semibold text-[22px] pt-4">Dotgu</h5>
            <div className="flex gap-2 text-white">
              <p className="text-[#858584]">Total Sales:</p>
              <span className="">34.53 ETH</span>
            </div>
          </div>
          <div className="relative bg-[#3B3B3B] w-[240px] h-[238px] flex flex-col items-center justify-center rounded-3xl p-[20px]">
            <span className="absolute left-6 top-6 w-[30px] h-[30px] rounded-[50%] bg-[#2B2B2B] flex items-center justify-center text-[#858584]">
              12
            </span>
            <img className="w-[120px] h-[120px]" src={Ghiblier} />
            <h5 className="text-white capitalize font-semibold text-[22px] pt-4">
              Ghiblier
            </h5>
            <div className="flex gap-2 text-white">
              <p className="text-[#858584]">Total Sales:</p>
              <span className="">34.53 ETH</span>
            </div>
          </div>
        </div>
        <div>
          <h3 className="font-semibold text-[38px] pb-12 text-[#ffffff]">
            Browse Categories
          </h3>
        </div>
        <div className="flex gap-20 pb-20">
          <div className="bg-[#3B3B3B] w-[240px] h-[316px] rounded-[20px] relative flex flex-col items-center justify-center">
            <img
              className="absolute top-0 blur-sm cursor-pointer"
              src={Art}
              alt=""
            />
            <img
              className="absolute top-16 cursor-pointer active:scale-50 duration-1000"
              src={PaintBrush}
              alt=""
            />
            <h5 className="absolute z-1 text-white bottom-7 left-6 text-[22px] font-semibold">
              Art
            </h5>
          </div>
          <div className="bg-[#3B3B3B] w-[240px] h-[316px] rounded-[20px] relative flex flex-col items-center justify-center">
            <img
              className="absolute top-0 blur-sm cursor-pointer"
              src={Collectibles}
              alt=""
            />
            <img
              className="absolute top-16 cursor-pointer active:scale-50 duration-1000"
              src={Swatches}
              alt=""
            />
            <h5 className="absolute z-1 text-white bottom-7 left-6 text-[22px] font-semibold">
              Collectibles
            </h5>
          </div>
          <div className="bg-[#3B3B3B] w-[240px] h-[316px] rounded-[20px] relative flex flex-col items-center justify-center">
            <img
              className="absolute top-0 blur-sm cursor-pointer"
              src={Music}
              alt=""
            />
            <img
              className="absolute top-16 cursor-pointer active:scale-50 duration-1000"
              src={MusicNotes}
              alt=""
            />
            <h5 className="absolute z-1 text-white bottom-7 left-6 text-[22px] font-semibold">
              Music
            </h5>
          </div>
          <div className="bg-[#3B3B3B] w-[240px] h-[316px] rounded-[20px] relative flex flex-col items-center justify-center">
            <img
              className="absolute top-0 blur-sm cursor-pointer"
              src={Photography}
              alt=""
            />
            <img
              className="absolute top-16 cursor-pointer active:scale-50 duration-1000"
              src={Camera}
              alt=""
            />
            <h5 className="absolute z-1 text-white bottom-7 left-6 text-[22px] font-semibold">
              Photography
            </h5>
          </div>
        </div>
        <div className="flex gap-20">
          <div className="bg-[#3B3B3B] w-[240px] h-[316px] rounded-[20px] relative flex flex-col items-center justify-center">
            <img
              className="absolute top-0 blur-sm cursor-pointer"
              src={Video}
              alt=""
            />
            <img
              className="absolute top-16 cursor-pointer active:scale-50 duration-1000"
              src={VideoCamera}
              alt=""
            />
            <h5 className="absolute z-1 text-white bottom-7 left-6 text-[22px] font-semibold">
              Video
            </h5>
          </div>
          <div className="bg-[#3B3B3B] w-[240px] h-[316px] rounded-[20px] relative flex flex-col items-center justify-center">
            <img
              className="absolute top-0 blur-sm cursor-pointer"
              src={Utility}
              alt=""
            />
            <img
              className="absolute top-16 cursor-pointer active:scale-50 duration-1000"
              src={MagicWand}
              alt=""
            />
            <h5 className="absolute z-1 text-white bottom-7 left-6 text-[22px] font-semibold">
              Utility
            </h5>
          </div>
          <div className="bg-[#3B3B3B] w-[240px] h-[316px] rounded-[20px] relative flex flex-col items-center justify-center">
            <img
              className="absolute top-0 blur-sm cursor-pointer"
              src={Sport}
              alt=""
            />
            <img
              className="absolute top-16 cursor-pointer active:scale-50 duration-1000"
              src={Basketball}
              alt=""
            />
            <h5 className="absolute z-1 text-white bottom-7 left-6 text-[22px] font-semibold">
              Sport
            </h5>
          </div>
          <div className="bg-[#3B3B3B] w-[240px] h-[316px] rounded-[20px] relative flex flex-col items-center justify-center">
            <img
              className="absolute top-0 blur-sm cursor-pointer"
              src={VirtualWorlds}
              alt=""
            />
            <img
              className="absolute top-16 cursor-pointer active:scale-50 duration-1000"
              src={Planet}
              alt=""
            />
            <h5 className="absolute z-1 text-white bottom-7 left-6 text-[22px] font-semibold">
              Virtual Worlds
            </h5>
          </div>
        </div>
        <div className="flex justify-between mt-48">
          <div className="leading-normal">
            <h3 className="font-semibold text-[38px] text-[#ffffff]">
              Discover More NFTs
            </h3>
            <span className="text-white text-[22px] font-['Work Sans']">
              Explore new trending NFTs
            </span>
          </div>
          <div className="font-semibold text-[16px] flex items-center justify-center gap-4 w-48 cursor-pointer h-14 border-purple-600 border-2 text-white rounded-2xl hover:bg-[#A259FF] transition-all duration-700 hover:border-none">
            <i className="fas fa-eye"></i>
            See All
          </div>
        </div>
        <div className="flex gap-20 py-16">
          <div className="bg-[#3B3B3B] rounded-2xl w-[350px] h-[490px]">
            <img className="w-[350px]" src={DistantGalaxy} />
            <div className="p-6">
              <h5 className="text-white pb-1 text-[22px]">Distant Galaxy</h5>
              <div className="flex gap-4">
                <img src={MoonDancer} alt="" />
                <span className="text-white">MoonDancer</span>
              </div>
              <div className="flex justify-between pt-6">
                <div className="">
                  <span className="text-[#858584] text-[14px]">Price</span>
                  <p className="text-white">1.63 ETH</p>
                </div>
                <div className="">
                  <span className="text-[#858584] text-[14px]">
                    Highest Bid
                  </span>
                  <p className="text-white">0.33 wETH</p>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-[#3B3B3B] rounded-2xl w-[350px] h-[490px]">
            <img className="w-[350px]" src={LifeOnEdena} />
            <div className="p-6">
              <h5 className="text-white pb-1 text-[22px]">Life On Edena</h5>
              <div className="flex gap-4">
                <img src={NebulaKid} alt="" />
                <span className="text-white">NebulaKid</span>
              </div>
              <div className="flex justify-between pt-6">
                <div className="">
                  <span className="text-[#858584] text-[14px]">Price</span>
                  <p className="text-white">1.63 ETH</p>
                </div>
                <div className="">
                  <span className="text-[#858584] text-[14px]">
                    Highest Bid
                  </span>
                  <p className="text-white">0.33 wETH</p>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-[#3B3B3B] rounded-2xl w-[350px] h-[490px]">
            <img className="w-[350px]" src={AstroFiction} />
            <div className="p-6">
              <h5 className="text-white pb-1 text-[22px]">AstroFiction</h5>
              <div className="flex gap-4">
                <img src={SpaceOne} alt="" />
                <span className="text-white">Spaceone</span>
              </div>
              <div className="flex justify-between pt-6">
                <div className="">
                  <span className="text-[#858584] text-[14px]">Price</span>
                  <p className="text-white">1.63 ETH</p>
                </div>
                <div className="">
                  <span className="text-[#858584] text-[14px]">
                    Highest Bid
                  </span>
                  <p className="text-white">0.33 wETH</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default User;
