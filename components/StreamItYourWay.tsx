import { FaSpotify } from "react-icons/fa";
import { FaApple } from "react-icons/fa";
import { FaSoundcloud } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaBandcamp } from "react-icons/fa";
import { FaCirclePlay } from "react-icons/fa6";

import Container from "./Container";
import SectionTitle from "./SectionTitle";

const StreamList = ({ children }) => {
  return <ul className="flex mt-8">{children}</ul>;
};

const StreamListItem = ({ children }) => {
  return (
    <li className="flex items-center justify-center w-16 h-16 border-white border-1 not-last:border-r-0 ">
      {children}
    </li>
  );
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
          <StreamListItem key={index}>
            <a href={stream.url} target="_blank" rel="noopener noreferrer">
              <span className="text-xl font-semibold">{stream.icon}</span>
            </a>
          </StreamListItem>
        ))}
      </StreamList>
    </Container>
  );
};

export default StreamItYourWay;
