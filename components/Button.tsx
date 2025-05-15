const Button = ({
  variant = "contained",
  children,
  color,
}: {
  variant?: "contained" | "outlined";
  children: any;
  color?: string;
}) => {
  const buttonStyles = {
    contained: `bg-${color} text-white`,
    outlined: `border-2 border-white text-white`,
  };
  return <button className={buttonStyles[variant]}>{children}</button>;
};

export default Button;
