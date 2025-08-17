import { PiPlayLight, PiPauseLight, PiShareNetworkLight } from "react-icons/pi";

import Button from "./Button";
import Container from "./Container";
import { useAudio } from "../hooks/useAudio";
import PlayPauseIcon from "./PlayPauseIcon";
import { share } from "../utils/share";
import clsx from "clsx";
import MusicArtwork from "./ui/music-artwork";

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

  return (
    <Container>
      <div className="min-h-[90vh] lg:px-0 flex flex-col lg:flex-row items-start lg:items-center gap-12 pt-25 pb-24 lg:pb-0">
        {/* <div className="flex-col-reverse  md:flex-row lg:w-auto flex gap-2">
          <div className="hidden md:flex">
            <ReleaseDate album={album} formattedDate={formattedDate} sideways />
          </div>
          <div className="flex md:hidden mt-9 mb-[-20px]">
            <ReleaseDate album={album} formattedDate={formattedDate} />
          </div>
          <img
            src={album.images[0].url}
            alt={album.name}
            className="w-full lg:w-[clamp(350px,30vw,500px)]"
          />
        </div> */}
        <div className="flex justify-center w-full lg:w-[clamp(350px,30vw,500px)]">
          <MusicArtwork
            artist={album.artists[0].name}
            music={firstTrack.name}
            albumArt={album.images[0].url}
            isSong={true}
            isLoading={audioHook.loadingTrack}
            onPlayPause={() =>
              audioHook.handleClickPlay({ track: firstTrack, isPlaying })
            }
          />
        </div>
        <div>
          <h1 className="text-3xl md:text-4xl uppercase relative font-medium md:font-semibold text-white md:text-transparent text-stroke-white tracking-[4px]">
            {album.name}{" "}
            <span
              className="absolute left-0 pointer-events-none text-stroke-0"
              aria-hidden="true"
            >
              {album.name}
            </span>
          </h1>
          <h2 className="text-2xl md:text-3xl uppercase font-normal md:font-medium text-white mt-1">
            {album.artists[0].name}
          </h2>
          <div className="flex gap-2 mt-6 md:mt-12">
            <Button
              color={album.color}
              onClick={() =>
                audioHook.handleClickPlay({ track: firstTrack, isPlaying })
              }
            >
              <PlayPauseIcon
                isPlaying={isPlaying}
                isLoading={audioHook.loadingTrack}
              />
              LISTEN NOW
            </Button>
            <Button
              variant="outlined"
              onClick={() =>
                share({ title: album.name, url: album.external_urls.spotify })
              }
            >
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

const ReleaseDate = ({ album, sideways = false, formattedDate }) => (
  <span
    className={clsx(
      "text-white font-light italic",
      sideways ? "text-base" : "text-base sm:text-[1.2rem]"
    )}
    style={{ writingMode: sideways ? "sideways-lr" : undefined }}
  >
    <span style={{ color: album.color }}>{album.label}</span>
    <span className={clsx(sideways ? {} : "font-thin")}>
      {" "}
      &mdash; Released {formattedDate}
    </span>
  </span>
);
