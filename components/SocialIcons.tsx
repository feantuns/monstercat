import { PiInstagramLogo } from "react-icons/pi";
import { FaTiktok } from "react-icons/fa";
import { PiXLogoLight } from "react-icons/pi";
import { PiTwitchLogoBold } from "react-icons/pi";
import { FaFacebook } from "react-icons/fa";
import { IoLogoDiscord } from "react-icons/io5";
import { PiPlayCircleFill } from "react-icons/pi";

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

export default SocialIcons;
