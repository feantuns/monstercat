import { FaArrowRightLong } from "react-icons/fa6";
import { LiaLongArrowAltRightSolid } from "react-icons/lia";

import Button from "./Button";
import Container from "./Container";
import LinkTitle from "./LinkTitle";

const Footer = () => {
  return (
    <footer className="py-20">
      <Container>
        <div className="py-10 border-t-1 border-b-1 border-white flex gap-x-6 flex-wrap">
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
