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
          <a href="#">
            <PiCat className="text-3xl" />
          </a>
        </div>

        <div className="flex flex-col gap-14 items-end">
          <AiOutlineMenu className="text-2xl mt-4 cursor-pointer" />

          <div className="flex flex-col gap-5 justify-center items-center">
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
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
