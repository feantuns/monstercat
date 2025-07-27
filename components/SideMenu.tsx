"use client";
import { PiCat } from "react-icons/pi";
import { AiOutlineMenu } from "react-icons/ai";
import clsx from "clsx";
import { IoMdClose } from "react-icons/io";
import { useEffect, useState } from "react";
import LinkTitle from "./LinkTitle";
import SocialIcons from "./SocialIcons";
import Button from "./Button";

const SideMenu = props => {
  return (
    <AiOutlineMenu
      className="text-2xl cursor-pointer relative z-1"
      {...props}
    />
  );
};

export const SideMenuBar = ({ open, setOpen }) => {
  const [localOpen, setLocalOpen] = useState(open);

  useEffect(() => {
    if (!localOpen) {
      setTimeout(() => setOpen(false), 300);
    }
  }, [localOpen]);

  useEffect(() => {
    setLocalOpen(open);
  }, [open]);

  return (
    <>
      {localOpen && (
        <div
          className={clsx("fixed inset-0 z-30", localOpen ? "block" : "hidden")}
          onClick={() => setLocalOpen(false)}
        ></div>
      )}
      <div
        className={clsx(
          "fixed p-8 bg-black top-0 right-0 h-full w-[430px] max-w-full transform transition-transform duration-300 z-40",
          localOpen ? "translate-x-0" : "translate-x-full"
        )}
      >
        <div className="flex flex-col h-full">
          <div className="flex items-center justify-between">
            <a href="#" className="flex items-center gap-2">
              <PiCat className="text-3xl" />

              <span className="text-3xl font-medium">monstercat</span>
            </a>

            <IoMdClose
              className="text-3xl cursor-pointer"
              onClick={() => setLocalOpen(false)}
            />
          </div>

          <div className="flex-1 overflow-auto flex flex-col gap-6 my-8 py-8">
            <MenuLink href="#">About Monstercat</MenuLink>
            <MenuLink href="#">Contact us</MenuLink>
            <MenuLink href="#">Carreers</MenuLink>
            <MenuLink href="#">News</MenuLink>
            <MenuLink href="#">Press</MenuLink>
            <MenuLink href="#">Press</MenuLink>
            <MenuLink href="#">Press</MenuLink>
            <MenuLink href="#">Press</MenuLink>
            <MenuLink href="#">Press</MenuLink>
            <MenuLink href="#">Press</MenuLink>
            <MenuLink href="#">Press</MenuLink>
          </div>

          <div className="flex flex-col gap-6">
            <div className="flex gap-4 items-center">
              <SocialIcons />
            </div>

            <div className="flex gap-4">
              <Button variant="outlined">SIGN IN</Button>
              <Button variant="text" disableHoverEffect>
                <span className="pointer-events-none cursor-none">OR</span>SIGN
                UP
              </Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SideMenu;

const MenuLink = (props: React.AnchorHTMLAttributes<HTMLAnchorElement>) => (
  <a
    {...props}
    className={clsx(
      "text-lg md:text-xl text-white block uppercase font-medium tracking-[2px]",
      props.className
    )}
  />
);
