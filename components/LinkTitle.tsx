import clsx from "clsx";

const LinkTitle = (props: React.AnchorHTMLAttributes<HTMLAnchorElement>) => (
  <a
    {...props}
    className={clsx(
      "text-2xl text-white block uppercase font-medium tracking-[2px]",
      props.className
    )}
  />
);

export default LinkTitle;
