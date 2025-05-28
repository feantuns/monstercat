import { FaSpotify } from "react-icons/fa";
import { FaApple } from "react-icons/fa";
import { FaSoundcloud } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaBandcamp } from "react-icons/fa";
import { FaCirclePlay } from "react-icons/fa6";

import Container from "./Container";
import SectionTitle from "./SectionTitle";

const StreamList = ({ children }) => {
  return <ul>{children}</ul>;
};

const streams = [
  {
    title: "Monstercat Player",
    url: "#",
    icon: <FaCirclePlay />,
  },
  {
    title: "Bandcamp",
    url: "https://bandcamp.com",
    icon: <FaBandcamp />,
  },
  {
    title: "SoundCloud",
    url: "https://soundcloud.com",
    icon: <FaSoundcloud />,
  },
  {
    title: "Apple Music",
    url: "https://music.apple.com",
    icon: <FaApple />,
  },
  {
    title: "YouTube",
    url: "https://music.youtube.com",
    icon: <FaYoutube />,
  },
  {
    title: "Spotify",
    url: "https://open.spotify.com",
    icon: <FaSpotify />,
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
