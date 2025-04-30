import { PiCat } from "react-icons/pi";

const Header = () => {
  return (
    <div className="w-full fixed top-0 left-0">
      <div className="px-[9vw] pt-6 flex w-full max-w-[1600px] mx-auto justify-between">
        <div className="p-4 bg-black">
          <PiCat className="text-3xl" />
        </div>
      </div>
    </div>
  );
};

export default Header;
