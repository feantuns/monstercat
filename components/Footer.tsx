import { PiInstagramLogo } from "react-icons/pi";
import { FaTiktok } from "react-icons/fa";
import { PiXLogoLight } from "react-icons/pi";
import { PiTwitchLogoBold } from "react-icons/pi";
import { FaFacebook } from "react-icons/fa";
import { IoLogoDiscord } from "react-icons/io5";
import { PiPlayCircleFill } from "react-icons/pi";
import { LiaLongArrowAltRightSolid } from "react-icons/lia";
import { FaYoutube } from "react-icons/fa";
import { FaSpotify } from "react-icons/fa";
import { FaApple } from "react-icons/fa";

import Button from "./Button";
import Container from "./Container";
import LinkTitle from "./LinkTitle";

const Footer = () => {
  return (
    <footer className="pb-20 pt-30">
      <Container>
        <div className="py-12 border-t-1 border-b-1 border-white flex gap-x-6 flex-wrap">
          <div className="flex-1">
            <LinkTitle href="#">About Monstercat</LinkTitle>
            <LinkTitle href="#">Contact us</LinkTitle>
            <LinkTitle href="#">Carreers</LinkTitle>
            <LinkTitle href="#">News</LinkTitle>
            <LinkTitle href="#">Press</LinkTitle>
          </div>
          <div className="flex-1">
            <LinkTitle href="#">Terms of service</LinkTitle>
            <LinkTitle href="#">Privacy policy</LinkTitle>
          </div>
          <div className="flex-1">
            <LinkTitle className="text-stone-500" style={{ color: "#79716b" }}>
              Monstercat News
            </LinkTitle>
            <p className="italic font-extralight text-lg my-2">
              Don't miss a thing, stay up to date with the latest news from us.
            </p>
            <EmailField />
          </div>
        </div>

        <div className="flex justify-between flex-wrap gap-2 pt-8">
          <p className="italic font-extralight text-lg my-2">
            2011 - 2025 © Monstercat, All Rights Reserved
          </p>

          <div className="flex flex-wrap gap-5 items-center">
            <a href="#">
              <FaYoutube className="text-[1.2rem]" />
            </a>
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
              <FaSpotify className="text-[1.2rem]" />
            </a>
            <a href="#">
              <FaApple className="text-[1.2rem]" />
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

        <p className="font-thin text-sm mt-16 mb-4 text-center">
          {`We acknowledge with gratitude the traditional, ancestral and unceded land of the Coast Salish peoples, including the territories of the Sḵwx̱wú7mesh (Squamish), Stó:lō and Səl̓ílwətaʔ/Selilwitulh (Tsleil-Waututh) and xʷməθkʷəy̓əm (Musqueam) Nations, on which Monstercat's Vancouver HQ stands.`}
        </p>

        <p className="font-thin text-sm text-center">
          {`We acknowledge the unceded and ancestral territories of the Gabrielino/Tongva peoples on which our LA team live and work.`}
        </p>
      </Container>
    </footer>
  );
};

export default Footer;

const EmailField = () => {
  return (
    <div className="relative">
      <input
        type="email"
        placeholder="Enter email"
        className="w-full p-3 text-lg font-thin tracking-widest outline-none border-[0.5px] border-transparent border-b-stone-500"
      />
      <Button
        variant="text"
        style={{ position: "absolute", right: 0, top: 8, padding: "8px 20px" }}
      >
        <LiaLongArrowAltRightSolid />
      </Button>
    </div>
  );
};
