import Container from "./Container";
import LinkTitle from "./LinkTitle";

const Footer = () => {
  return (
    <footer className="py-20">
      <Container>
        <div className="py-10 border-t-1 border-b-1 border-white flex gap-x-6 flex-wrap">
          <div className="flex-1">
            <LinkTitle href="#">About Monstercat</LinkTitle>
            <LinkTitle href="#">Contact us</LinkTitle>
            <LinkTitle href="#">Carreers</LinkTitle>
            <LinkTitle href="#">News</LinkTitle>
            <LinkTitle href="#">Press</LinkTitle>
          </div>
          <div className="flex-1">
            <LinkTitle href="#">Terms of service</LinkTitle>
            <LinkTitle href="#">Privacy policy</LinkTitle>
          </div>
          <div className="flex-1">
            <LinkTitle>Monstercat News</LinkTitle>
          </div>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
