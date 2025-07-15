import { PiPlayLight, PiShareNetworkLight } from "react-icons/pi";
import Container from "./Container";
import SectionTitle from "./SectionTitle";
import { msToMinutesSeconds } from "../utils/time";
import { useAudio } from "../hooks/useAudio";
import PlayPauseIcon from "./PlayPauseIcon";
import { Roboto } from "next/font/google";
import { share } from "../utils/share";

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800"],
  variable: "--font-roboto",
});

const TrackList = ({
  album,
  audioHook,
}: {
  album: any;
  audioHook: ReturnType<typeof useAudio>;
}) => {
  return (
    <Container>
      <SectionTitle className="mt-12 mb-6">Track list</SectionTitle>
      {album?.tracks?.items?.map(item => {
        const isPlaying = audioHook.playingTrack?.id === item.id;
        const isLoading = isPlaying && audioHook.loadingTrack;

        return (
          <Track
            track={item}
            key={item.id}
            handleClickPlay={() =>
              audioHook.handleClickPlay({ track: item, isPlaying })
            }
            handleClickShare={() =>
              share({ title: album.name, url: item.external_urls.spotify })
            }
            isLoading={isLoading}
            isPlaying={isPlaying}
          />
        );
      })}
    </Container>
  );
};

export default TrackList;

const Track = ({
  track,
  isPlaying,
  isLoading,
  handleClickPlay,
  handleClickShare,
}) => {
  const artists = track.artists.map(artist => artist.name).join(", ");
  return (
    <div className="flex items-center justify-between py-4 antialiased text-white text-xl">
      <div className="flex items-center gap-4 md:gap-6">
        <span
          className={`${roboto.className} text-base md:text-lg font-light tabular-nums inline-block min-w-[12px] md:min-w-[18px]`}
        >
          {track.track_number}
        </span>
        <span className="ml-1 cursor-pointer" onClick={handleClickPlay}>
          <PlayPauseIcon
            fontSize="inherit"
            isPlaying={isPlaying}
            isLoading={isLoading}
          />
        </span>

        <div>
          <p className="text-base md:text-lg">{track.name}</p>
          <p className="text-sm md:text-base font-light">{artists}</p>
        </div>
      </div>
      <div className="flex items-center gap-0 md:gap-8">
        <span
          className={`${roboto.className} text-base md:text-lg font-light tabular-nums`}
        >
          {msToMinutesSeconds(track.duration_ms)}
        </span>
        <PiShareNetworkLight
          className="ml-1 cursor-pointer"
          fontSize="20px"
          onClick={handleClickShare}
        />
      </div>
    </div>
  );
};
