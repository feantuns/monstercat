"use client";
import { FaSpotify } from "react-icons/fa";
import { FaApple } from "react-icons/fa";
import { FaSoundcloud } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaBandcamp } from "react-icons/fa";
import { FaCirclePlay } from "react-icons/fa6";

import Container from "./Container";
import SectionTitle from "./SectionTitle";
import { useEffect } from "react";

const StreamList = ({ children }) => {
  return <ul className="flex mt-8">{children}</ul>;
};

const StreamListItem = ({ children }) => {
  return (
    <li className="flex items-center justify-center min-w-11 h-11 md:min-w-16 md:h-16 border-white border-1 not-last:border-r-0 ">
      {children}
    </li>
  );
};

const streams = [
  {
    title: "Monstercat Player",
    url: "#",
    icon: (
      <div className="flex gap-2 items-center px-4 uppercase tracking-widest">
        <FaCirclePlay />
        <span>Player</span>
      </div>
    ),
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
  useEffect(() => {
    const tooltips = document.querySelectorAll(".tooltip");
    const btns = document.querySelectorAll(".button-tooltip");

    function addEventListeners(i) {
      btns[i].addEventListener("mouseover", () => {
        (tooltips[i] as any).showPopover({ source: btns[i] });
      });

      btns[i].addEventListener("mouseout", () => {
        (tooltips[i] as any).hidePopover();
      });

      btns[i].addEventListener("focus", () => {
        (tooltips[i] as any).showPopover({ source: btns[i] });
      });

      btns[i].addEventListener("blur", () => {
        (tooltips[i] as any).hidePopover();
      });
    }

    for (let i = 0; i < btns.length; i++) {
      addEventListeners(i);
    }
  }, []);
  return (
    <Container>
      <SectionTitle>Stream it your way</SectionTitle>
      <StreamList>
        {streams.map((stream, index) => (
          <StreamListItem key={index}>
            <a
              href={stream.url}
              target="_blank"
              rel="noopener noreferrer"
              popoverTarget={`${stream.title}-popover`}
              popoverTargetAction="toggle"
              className="button-tooltip cursor-pointer"
            >
              <span className="font-semibold">{stream.icon}</span>
            </a>
            <div
              id={`${stream.title}-popover`}
              popover={"hint" as any}
              className="tooltip"
            >
              STREAM ON {stream.title}
            </div>
          </StreamListItem>
        ))}
      </StreamList>
    </Container>
  );
};

export default StreamItYourWay;
