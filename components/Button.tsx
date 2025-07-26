interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "contained" | "outlined" | "text";
  children: any;
  color?: string;
  hoverEffect?: boolean;
}

const Button = ({
  variant = "contained",
  children,
  color,
  hoverEffect = true,
  ...props
}: ButtonProps) => {
  const buttonStyles = {
    contained: `bg-[var(--bg)] border-1 border-transparent text-white`,
    outlined: `border-1 border-white text-white`,
    text: `bg-transparent border-0 text-white`,
  };
  return (
    <button
      className={`${
        buttonStyles[variant]
      } cursor-pointer pl-6 pr-7 py-2 md:pl-7 md:pr-8 md:py-3 text-base md:text-xl font-normal transition-all duration-200 ${
        hoverEffect ? "hover:bg-white hover:text-black" : ""
      } focus:outline-none flex items-center justify-center gap-2 tracking-[1px]`}
      {...props}
      style={{ "--bg": color, ...props?.style } as any}
    >
      {children}
    </button>
  );
};

export default Button;
