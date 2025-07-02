import { PiPlayLight, PiShareNetworkLight } from "react-icons/pi";
import Container from "./Container";
import SectionTitle from "./SectionTitle";
import { msToMinutesSeconds } from "../utils/time";
import { useAudio } from "../hooks/useAudio";
import PlayPauseIcon from "./PlayPauseIcon";

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
            isLoading={isLoading}
            isPlaying={isPlaying}
          />
        );
      })}
    </Container>
  );
};

export default TrackList;

const Track = ({ track, isPlaying, isLoading, handleClickPlay }) => {
  const artists = track.artists.map(artist => artist.name).join(", ");
  return (
    <div className="flex items-center justify-between py-4 antialiased text-white text-xl">
      <div className="flex items-center gap-6">
        <span className="font-extralight">{track.track_number}</span>
        <span className="ml-1 cursor-pointer" onClick={handleClickPlay}>
          <PlayPauseIcon isPlaying={isPlaying} isLoading={isLoading} />
        </span>

        <div>
          <p>{track.name}</p>
          <p className="text-base font-light">{artists}</p>
        </div>
      </div>
      <div className="flex items-center gap-8">
        <span className="font-extralight tabular-nums">
          {msToMinutesSeconds(track.duration_ms)}
        </span>
        <PiShareNetworkLight className="ml-1 cursor-pointer" fontSize="20px" />
      </div>
    </div>
  );
};
