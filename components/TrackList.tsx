import Container from "./Container";
import SectionTitle from "./SectionTitle";

const TrackList = ({ album }) => {
  return (
    <Container>
      <SectionTitle className="mt-12">Track list</SectionTitle>
      {album?.tracks?.items?.map(item => (
        <Track track={item} key={item.id} />
      ))}
    </Container>
  );
};

export default TrackList;

const Track = ({ track }) => {
  console.log({ track });
  return (
    <div className="flex items-center justify-between py-4 text-white">
      <div className="flex items-center gap-4">
        <span>{track.track_number}</span>
        <span>{track.name}</span>
      </div>
      <span>{track.duration_ms}</span>
    </div>
  );
};
