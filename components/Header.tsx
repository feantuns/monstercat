import { PiCat } from "react-icons/pi";

const Header = () => {
  return (
    <div className="fixed top-0 left-0">
      <div className="px-4 pt-4 w-full max-w-[1200px] mx-auto flex justify-between">
        <div className="p-4 bg-black">
          <PiCat className="text-3xl" />
        </div>
      </div>
    </div>
  );
};

export default Header;
