import Container from "./Container";
import SectionTitle from "./SectionTitle";

const StreamList = ({ children }) => {
  return <ul>{children}</ul>;
};

const streams = [
  {
    title: "Spotify",
    url: "https://open.spotify.com",
    color: "#1DB954",
  },
  {
    title: "Apple Music",
    url: "https://music.apple.com",
    color: "#FA2D2D",
  },
  {
    title: "YouTube Music",
    url: "https://music.youtube.com",
    color: "#FF0000",
  },
  {
    title: "Amazon Music",
    url: "https://music.amazon.com",
    color: "#FF9900",
  },
];

const StreamItYourWay = () => {
  return (
    <Container>
      <SectionTitle>Stream it your way</SectionTitle>
      <StreamList>
        {streams.map((stream, index) => (
          <li key={index} className="mb-4">
            <a
              href={stream.url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 p-4 bg-gray-800 rounded-lg hover:bg-gray-700 transition-colors"
              style={{ color: stream.color }}
            >
              <span className="text-xl font-semibold">{stream.title}</span>
            </a>
          </li>
        ))}
      </StreamList>
    </Container>
  );
};

export default StreamItYourWay;
