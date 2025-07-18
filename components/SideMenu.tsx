import { AiOutlineMenu } from "react-icons/ai";

const SideMenu = props => {
  return (
    <>
      <AiOutlineMenu
        className="text-2xl cursor-pointer relative z-1"
        {...props}
      />
    </>
  );
};

export default SideMenu;
