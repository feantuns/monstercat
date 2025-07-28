export const defaultFontButtonStyles = "text-white font-normal ";

const buttonStyles = {
  contained: `bg-[var(--bg)] border-1 border-transparent`,
  outlined: `border-1 border-white`,
  text: `bg-transparent border-0`,
};

const buttonSizes = {
  small: `pl-5 pr-5 py-1 text-base`,
  medium: `pl-6 pr-7 py-2 md:pl-7 md:pr-8 md:py-3 text-base md:text-xl`,
};

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: keyof typeof buttonStyles;
  size?: keyof typeof buttonSizes;
  children: any;
  color?: string;
  disableHoverEffect?: boolean;
}

const Button = ({
  variant = "contained",
  size = "medium",
  children,
  color,
  disableHoverEffect = false,
  ...props
}: ButtonProps) => {
  return (
    <button
      className={`${buttonStyles[variant]} ${
        buttonSizes[size]
      } ${defaultFontButtonStyles} cursor-pointer transition-all duration-200 ${
        !disableHoverEffect ? "hover:bg-white hover:text-black" : ""
      } focus:outline-none flex items-center justify-center gap-2 tracking-[1px]`}
      {...props}
      style={{ "--bg": color, ...props?.style } as any}
    >
      {children}
    </button>
  );
};

export default Button;
