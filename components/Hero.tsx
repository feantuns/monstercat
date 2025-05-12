const Hero = ({ album }) => {
  const date = new Date(album.release_date);

  const options = { year: "numeric", month: "long", day: "numeric" };
  const formattedDate = date.toLocaleDateString("en-US", options as any);

  return (
    <div className="h-[90vh] flex items-center justify-center gap-10">
      <div className="relative pl-5 w-[30vw]">
        <span className="absolute rotate-270 left-0 top-[55%] translate-[-50%] text-[1rem] text-white font-normal">
          {album.label} -- Released {formattedDate}
        </span>
        <img src={album.images[0].url} alt={album.name} className="w-full" />
      </div>
      <div>
        <h1 className="text-4xl uppercase relative font-semibold text-transparent text-stroke-white tracking-[4px]">
          {album.name}{" "}
          <span
            className="absolute left-0 pointer-events-none text-stroke-0"
            aria-hidden="true"
          >
            {album.name}
          </span>
        </h1>
        <h2 className="text-2xl uppercase font-semibold text-white mt-2">
          {album.artists[0].name}
        </h2>
      </div>
    </div>
  );
};

export default Hero;
