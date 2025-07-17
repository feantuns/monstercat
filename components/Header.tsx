import { PiCat } from "react-icons/pi";
import { AiOutlineMenu } from "react-icons/ai";
import { PiInstagramLogo } from "react-icons/pi";
import { FaTiktok } from "react-icons/fa";
import { PiXLogoLight } from "react-icons/pi";
import { PiTwitchLogoBold } from "react-icons/pi";
import { FaFacebook } from "react-icons/fa";
import { IoLogoDiscord } from "react-icons/io5";
import { PiPlayCircleFill } from "react-icons/pi";

const Header = () => {
  return (
    <div className="w-full fixed top-0 left-0 z-3 lg:z-0">
      <div className="hidden lg:block">
        <DesktopHeader />
      </div>
      <div className="lg:hidden">
        <MobileHeader />
      </div>
    </div>
  );
};

export default Header;

const DesktopHeader = () => (
  <div className="px-[32px] pt-6 flex items-start w-full max-w-[1260px] mx-auto justify-between">
    <div className="p-4 bg-black">
      <a href="#">
        <PiCat className="text-3xl" />
      </a>
    </div>

    <div className="flex flex-col gap-14 items-end">
      <AiOutlineMenu className="text-2xl mt-4 cursor-pointer" />

      <div className="flex flex-col gap-5 justify-center items-center">
        <SocialIcons />
      </div>
    </div>
  </div>
);

const MobileHeader = () => (
  <div className="bg-black/38 relative px-4 py-2 flex items-center justify-between w-full max-w-[1260px] mx-auto">
    <div className="p-2 bg-black relative z-1">
      <a href="#">
        <PiCat className="text-2xl sm:text-3xl" />
      </a>
    </div>

    <div className="hidden sm:flex flex-row gap-5 justify-center items-center relative z-1">
      <SocialIcons />
    </div>

    <AiOutlineMenu className="text-2xl cursor-pointer relative z-1" />

    <div className="backdrop-blur-[8px] bg-black/38 absolute top-0 left-0 right-0 w-full h-full z-0"></div>
  </div>
);

const SocialIcons = () => (
  <>
    <a href="#">
      <PiInstagramLogo className="text-[1.2rem]" />
    </a>
    <a href="#">
      <FaTiktok className="text-[1.2rem]" />
    </a>
    <a href="#">
      <PiXLogoLight className="text-[1.2rem]" />
    </a>
    <a href="#">
      <PiTwitchLogoBold className="text-[1.2rem]" />
    </a>
    <a href="#">
      <FaFacebook className="text-[1.2rem]" />
    </a>
    <a href="#">
      <IoLogoDiscord className="text-[1.2rem]" />
    </a>
    <a href="#">
      <PiPlayCircleFill className="text-[1.2rem]" />
    </a>
  </>
);
