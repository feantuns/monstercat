import { PiPlayLight, PiShareNetworkLight } from "react-icons/pi";
import Button from "./Button";
import Container from "./Container";

const Hero = ({ album }) => {
  const date = new Date(album.release_date);

  const options = { year: "numeric", month: "long", day: "numeric" };
  const formattedDate = date.toLocaleDateString("en-US", options as any);

  return (
    <Container>
      <div className="h-[90vh] flex items-center gap-12 pt-24">
        <div className="flex gap-2">
          <span
            className="text-[1rem] text-white font-light italic"
            style={{ writingMode: "sideways-lr" }}
          >
            <span style={{ color: album.color }}>{album.label}</span> &mdash;
            Released {formattedDate}
          </span>
          <img
            src={album.images[0].url}
            alt={album.name}
            className="w-[clamp(350px,30vw,500px)]"
          />
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
    </Container>
  );
};

export default Hero;
