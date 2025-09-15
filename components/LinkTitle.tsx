import clsx from "clsx";

const LinkTitle = (props: React.AnchorHTMLAttributes<HTMLAnchorElement>) => (
  <a
    {...props}
    className={clsx(
      "text-lg md:text-2xl text-white block uppercase font-medium tracking-[2px]",
      props.className
    )}
    title={typeof props.children === "string" ? props.children : undefined}
  />
);

export default LinkTitle;
