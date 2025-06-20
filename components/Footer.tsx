import Container from "./Container";
import SectionTitle from "./SectionTitle";

const Footer = () => {
  return (
    <footer className="py-20">
      <Container>
        <div className="py-10 border-t-1 border-b-1 border-white flex gap-x-6 flex-wrap">
          <div className="flex-1">
            <a href="#">
              <SectionTitle>About Monstercat</SectionTitle>
            </a>
            <a href="#">
              <SectionTitle>Contact us</SectionTitle>
            </a>
            <a href="#">
              <SectionTitle>Carreers</SectionTitle>
            </a>
            <a href="#">
              <SectionTitle>News</SectionTitle>
            </a>
            <a href="#">
              <SectionTitle>Press</SectionTitle>
            </a>
          </div>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
