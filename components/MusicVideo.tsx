import Container from "./Container";
import SectionTitle from "./SectionTitle";

const MusicVideo = () => {
  return (
    <Container>
      <SectionTitle className="mt-8 mb-8">Music video</SectionTitle>
      <iframe
        width="100%"
        className="h-[280px] md:h-[400px] lg:h-[500px]"
        src="https://www.youtube.com/embed/MrY-XZ45Rfk?si=xgCx4_tTRPyVxhDD"
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen
      ></iframe>
    </Container>
  );
};

export default MusicVideo;
