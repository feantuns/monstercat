const Hero = ({ album }) => {
  return (
    <div className="h-[90vh] flex items-center justify-center gap-10">
      <div>
        <img src={album.images[0].url} alt={album.name} className="w-[30vw]" />
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
