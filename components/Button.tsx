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
    contained: `bg-[var(--bg)] border-1 border-transparent text-white`,
    outlined: `border-1 border-white text-white`,
  };
  return (
    <button
      style={{ "--bg": color } as any}
      className={`${buttonStyles[variant]} cursor-pointer pl-7 pr-8 py-3 text-xl font-normal transition-all duration-200 hover:bg-white hover:text-black focus:outline-none flex items-center justify-center gap-2 tracking-[1px]`}
    >
      {children}
    </button>
  );
};

export default Button;
