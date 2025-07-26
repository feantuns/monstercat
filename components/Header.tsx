"use client";
import { useState } from "react";
import { PiCat } from "react-icons/pi";
import SideMenu, { SideMenuBar } from "./SideMenu";
import SocialIcons from "./SocialIcons";

const Header = () => {
  const [open, setOpen] = useState(false);

  const handleOpenMenu = () => setOpen(true);

  return (
    <div
      className="w-full fixed top-0 left-0 z-3 lg:z-1"
      style={{ zIndex: open ? 40 : undefined }}
    >
      <div className="hidden lg:block">
        <DesktopHeader handleOpenMenu={handleOpenMenu} />
      </div>
      <div className="lg:hidden">
        <MobileHeader handleOpenMenu={handleOpenMenu} />
      </div>

      <SideMenuBar open={open} setOpen={setOpen} />
    </div>
  );
};

export default Header;

const DesktopHeader = ({ handleOpenMenu }) => (
  <div className="px-[32px] pt-6 flex items-start w-full max-w-[1260px] mx-auto justify-between">
    <div className="p-4 bg-black">
      <a href="#">
        <PiCat className="text-3xl" />
      </a>
    </div>

    <div className="flex flex-col gap-14 items-end">
      <SideMenu style={{ marginTop: "1rem" }} onClick={handleOpenMenu} />

      <div className="flex flex-col gap-5 justify-center items-center">
        <SocialIcons />
      </div>
    </div>
  </div>
);

const MobileHeader = ({ handleOpenMenu }) => (
  <div className="bg-black/38 relative px-4 py-2 flex items-center justify-between w-full max-w-[1260px] mx-auto">
    <div className="p-2 bg-black relative z-1">
      <a href="#">
        <PiCat className="text-2xl sm:text-3xl" />
      </a>
    </div>

    <div className="hidden sm:flex flex-row gap-5 justify-center items-center relative z-1">
      <SocialIcons />
    </div>

    <SideMenu onClick={handleOpenMenu} />

    <div className="backdrop-blur-[8px] bg-black/38 absolute top-0 left-0 right-0 w-full h-full z-0"></div>
  </div>
);
