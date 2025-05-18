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
    contained: `bg-[var(--bg)] border-2 border-transparent text-white`,
    outlined: `border-2 border-white text-white`,
  };
  return (
    <button
      style={{ "--bg": color } as any}
      className={`${buttonStyles[variant]} cursor-pointer px-8 py-2 text-xl font-normal transition-all duration-200 hover:bg-white hover:text-black focus:outline-none flex items-center gap-2`}
    >
      {children}
    </button>
  );
};

export default Button;
