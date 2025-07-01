import { PiPlayLight, PiPauseLight, PiShareNetworkLight } from "react-icons/pi";

import Button from "./Button";
import Container from "./Container";
import { useAudio } from "../hooks/useAudio";
import PlayPauseIcon from "./PlayPauseIcon";

const Hero = ({
  album,
  audioHook,
}: {
  album: any;
  audioHook: ReturnType<typeof useAudio>;
}) => {
  const date = new Date(album.release_date);

  const options = { year: "numeric", month: "long", day: "numeric" };
  const formattedDate = date.toLocaleDateString("en-US", options as any);

  const firstTrack = album?.tracks?.items?.[0];

  const isPlaying = audioHook.playingTrack?.id === firstTrack?.id;

  const handleClickPlay = () => {
    if (isPlaying) {
      audioHook.stopTrack();
      return;
    }
    audioHook.playTrack(firstTrack);
  };

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
            <Button color={album.color} onClick={handleClickPlay}>
              <PlayPauseIcon
                isPlaying={isPlaying}
                isLoading={audioHook.loadingTrack}
              />
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
