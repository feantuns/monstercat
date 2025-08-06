"use client";
import { PiCat } from "react-icons/pi";
import { AiOutlineMenu } from "react-icons/ai";
import clsx from "clsx";
import { IoMdClose } from "react-icons/io";
import { GoChevronRight } from "react-icons/go";
import { useEffect, useState } from "react";
import SocialIcons from "./SocialIcons";
import Button, { defaultFontButtonStyles } from "./Button";

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

          <div className="flex-1 overflow-y-scroll flex flex-col gap-5 my-8 py-0 md:py-8">
            <MenuLink
              subLinks={[
                { href: "#", children: "Our music" },
                { href: "#", children: "Instinct" },
                { href: "#", children: "Uncaged" },
                { href: "#", children: "Silk" },
              ]}
            >
              Music
            </MenuLink>
            <MenuLink href="#">Artists</MenuLink>
            <MenuLink href="#">About</MenuLink>
            <MenuLink href="#">News</MenuLink>
            <MenuLink href="#">Events</MenuLink>
            <MenuLink href="#">Programming</MenuLink>
            <MenuLink href="#">Gold</MenuLink>
            <MenuLink href="#">Partners</MenuLink>
            <MenuLink href="#">Press</MenuLink>
            <MenuLink href="#">Player</MenuLink>
            <MenuLink href="#">Shop</MenuLink>
            <MenuLink href="#">Lost Civilization</MenuLink>
          </div>

          <div className="flex flex-col gap-6">
            <div className="flex gap-4 items-center">
              <SocialIcons />
            </div>

            <div className="flex items-center gap-2">
              <Button
                variant="outlined"
                size="small"
                style={{ marginRight: "8px" }}
              >
                SIGN IN
              </Button>
              <span
                className={clsx(
                  defaultFontButtonStyles,
                  "text-sm md:text-base"
                )}
              >
                OR
              </span>
              <Button
                variant="text"
                size="small"
                disableHoverEffect
                style={{ paddingLeft: 0 }}
              >
                SIGN UP
              </Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SideMenu;

const defaultLinkStyles =
  "text-lg md:text-xl w-fit cursor-pointer select-none text-white block uppercase font-medium tracking-[2px]";

const MenuLink = ({
  subLinks,
  children,
  ...props
}: React.AnchorHTMLAttributes<HTMLAnchorElement> & { subLinks?: any[] }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSubLinks = () => setIsOpen(prev => !prev);

  return (
    <>
      <a
        {...props}
        className={clsx(defaultLinkStyles, props.className)}
        onClick={subLinks?.length ? toggleSubLinks : undefined}
      >
        {children}{" "}
        {subLinks?.length ? (
          <GoChevronRight
            className={clsx(isOpen ? "rotate-90" : "", "inline mt-[-2px]")}
          />
        ) : (
          ""
        )}
      </a>
      {isOpen && subLinks && (
        <div className="pl-4 flex flex-col gap-2 mt-[-8px]">
          {subLinks.map(subLink => (
            <MenuLink
              key={subLink.children}
              className="text-base! md:text-lg! text-[#C4C4C4]! hover:text-white! transition-colors duration-200"
              {...subLink}
            />
          ))}
        </div>
      )}
    </>
  );
};
