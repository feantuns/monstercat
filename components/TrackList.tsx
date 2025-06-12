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
  return (
    <div className="flex items-center justify-between py-2 border-b border-gray-700">
      <div className="flex items-center">
        <span className="text-white">{track.name}</span>
      </div>
      <span className="text-gray-400">{track.duration_ms}</span>
    </div>
  );
};
