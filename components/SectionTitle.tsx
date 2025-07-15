import clsx from "clsx";

const SectionTitle = props => (
  <h3
    {...props}
    className={clsx(
      "text-3xl md:text-5xl text-white uppercase font-medium tracking-[2px]",
      props.className
    )}
  />
);

export default SectionTitle;
