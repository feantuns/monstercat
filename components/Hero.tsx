import { PiPlayLight, PiShareNetworkLight } from "react-icons/pi";
import Button from "./Button";

const Hero = ({ album }) => {
  const date = new Date(album.release_date);

  const options = { year: "numeric", month: "long", day: "numeric" };
  const formattedDate = date.toLocaleDateString("en-US", options as any);

  return (
    <div className="h-[90vh] flex items-center justify-center gap-10">
      <div className="relative pl-5 w-[clamp(350px,30vw,500px)]">
        <span className="absolute rotate-270 left-0 top-[52%] translate-[-50%] text-[1rem] text-white font-light italic">
          <span style={{ color: album.color }}>{album.label}</span> &mdash;
          Released {formattedDate}
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
        <h2 className="text-3xl uppercase font-medium text-white mt-1">
          {album.artists[0].name}
        </h2>
        <div className="flex gap-2 mt-12">
          <Button color={album.color}>
            <PiPlayLight fontSize="16px" />
            LISTEN NOW
          </Button>
          <Button variant="outlined">
            <PiShareNetworkLight fontSize="16px" />
            SHARE
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
