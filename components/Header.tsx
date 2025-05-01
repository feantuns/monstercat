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
    <div className="w-full fixed top-0 left-0">
      <div className="px-[9vw] pt-6 flex items-start w-full max-w-[1600px] mx-auto justify-between">
        <div className="p-4 bg-black">
          <PiCat className="text-3xl" />
        </div>

        <div className="flex flex-col gap-10 justify-center items-center">
          <AiOutlineMenu className="text-3xl mt-4" />

          <div className="flex flex-col gap-6 justify-center items-center">
            <PiInstagramLogo className="text-xl" />
            <FaTiktok className="text-xl" />
            <PiXLogoLight className="text-xl" />
            <PiTwitchLogoBold className="text-xl" />
            <FaFacebook className="text-xl" />
            <IoLogoDiscord className="text-xl" />
            <PiPlayCircleFill className="text-xl" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
