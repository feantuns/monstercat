const Button = ({
  variant = "contained",
  children,
  color,
}: {
  variant?: "contained" | "outlined";
  children: any;
  color?: string;
}) => {
  console.log(color);
  const buttonStyles = {
    contained: `bg-[--bg] border-2 border-transparent text-white`,
    outlined: `border-2 border-white text-white`,
  };
  return (
    <button
      style={{ "--bg": color } as any}
      className={`${buttonStyles[variant]} cursor-pointer px-5 py-2 text-sm font-semibold transition-all duration-200 hover:bg-white hover:text-black active:scale-[0.98] focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-50`}
    >
      {children}
    </button>
  );
};

export default Button;
