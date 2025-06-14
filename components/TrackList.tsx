import { PiPlayLight } from "react-icons/pi";
import Container from "./Container";
import SectionTitle from "./SectionTitle";
import { msToMinutesSeconds } from "../utils/time";

const TrackList = ({ album }) => {
  return (
    <Container>
      <SectionTitle className="mt-12 mb-6">Track list</SectionTitle>
      {album?.tracks?.items?.map(item => (
        <Track track={item} key={item.id} />
      ))}
    </Container>
  );
};

export default TrackList;

const Track = ({ track }) => {
  console.log({ track });
  const artists = track.artists.map(artist => artist.name).join(", ");
  return (
    <div className="flex items-center justify-between py-4 text-white text-xl">
      <div className="flex items-center gap-6">
        <span className="font-extralight">{track.track_number}</span>
        <PiPlayLight className="ml-1 cursor-pointer" fontSize="20px" />
        <div>
          <p>{track.name}</p>
          <p className="text-base font-light">{artists}</p>
        </div>
      </div>
      <div>
        <span className="font-extralight tabular-nums">
          {msToMinutesSeconds(track.duration_ms)}
        </span>
      </div>
    </div>
  );
};
