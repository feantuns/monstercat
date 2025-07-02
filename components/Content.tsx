"use client";
import Header from "../components/Header";
import Hero from "../components/Hero";
import StreamItYourWay from "../components/StreamItYourWay";
import TrackList from "../components/TrackList";
import MusicVideo from "../components/MusicVideo";
import Footer from "../components/Footer";
import { useAudio } from "../hooks/useAudio";

const Content = ({ album }) => {
  const audioHook = useAudio();
  return (
    <div className="relative z-2">
      <Header />
      <Hero album={album} audioHook={audioHook} />
      <StreamItYourWay />
      <TrackList album={album} audioHook={audioHook} />
      <MusicVideo />
      <Footer />
    </div>
  );
};

export default Content;
