"use client";
import { PiCat } from "react-icons/pi";
import { AiOutlineMenu } from "react-icons/ai";
import clsx from "clsx";
import { IoMdClose } from "react-icons/io";
import { useState } from "react";

const SideMenu = props => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <AiOutlineMenu
        className="text-2xl cursor-pointer relative z-1"
        onClick={() => setOpen(true)}
        {...props}
      />

      <div
        className={clsx(
          "fixed p-5 bg-black top-0 right-0 h-full w-[450px] max-w-full transform transition-transform duration-300 z-40",
          open ? "translate-x-0" : "translate-x-full"
        )}
      >
        <div className="flex items-center justify-between">
          <a href="#" className="flex items-center gap-2">
            <PiCat className="text-3xl" />

            <span className="text-3xl font-semibold">monstercat</span>
          </a>

          <IoMdClose
            className="text-2xl cursor-pointer"
            onClick={() => setOpen(false)}
          />
        </div>
      </div>
    </>
  );
};

export default SideMenu;
