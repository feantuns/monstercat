import LiteYouTubeEmbed from "react-lite-youtube-embed";
import "react-lite-youtube-embed/dist/LiteYouTubeEmbed.css";
import Container from "./Container";
import SectionTitle from "./SectionTitle";

const MusicVideo = () => {
  return (
    <Container>
      <SectionTitle className="mt-8 mb-8">Music video</SectionTitle>
      <LiteYouTubeEmbed id="MrY-XZ45Rfk" title="YouTube video" />
    </Container>
  );
};

export default MusicVideo;
