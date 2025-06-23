interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "contained" | "outlined" | "text";
  children: any;
  color?: string;
}

const Button = ({
  variant = "contained",
  children,
  color,
  ...props
}: ButtonProps) => {
  const buttonStyles = {
    contained: `bg-[var(--bg)] border-1 border-transparent text-white`,
    outlined: `border-1 border-white text-white`,
    text: `bg-transparent border-0 text-white`,
  };
  return (
    <button
      className={`${buttonStyles[variant]} cursor-pointer pl-7 pr-8 py-3 text-xl font-normal transition-all duration-200 hover:bg-white hover:text-black focus:outline-none flex items-center justify-center gap-2 tracking-[1px]`}
      {...props}
      style={{ "--bg": color, ...props?.style } as any}
    >
      {children}
    </button>
  );
};

export default Button;
