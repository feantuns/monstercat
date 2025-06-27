"use client";
import Header from "../components/Header";
import Hero from "../components/Hero";
import StreamItYourWay from "../components/StreamItYourWay";
import TrackList from "../components/TrackList";
import MusicVideo from "../components/MusicVideo";
import Footer from "../components/Footer";

const Content = ({ album }) => {
  return (
    <div className="relative z-2">
      <Header />
      <Hero album={album} />
      <StreamItYourWay />
      <TrackList album={album} />
      <MusicVideo />
      <Footer />
    </div>
  );
};

export default Content;
