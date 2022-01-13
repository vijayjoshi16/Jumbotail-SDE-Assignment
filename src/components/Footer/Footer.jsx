import { Attribution, FooterContainer, FooterText } from "./Footer.styles";

const Footer = () => {
  return (
    <FooterContainer>
      <FooterText>
        Jumbotail SDE Assignment: Coded with ❤ by Vijay Joshi
      </FooterText>
      <Attribution href="https://www.freepik.com/vectors/school">
        School vector created by pch.vector - www.freepik.com
      </Attribution>
      <br></br>
      <Attribution href="https://www.freepik.com/vectors/business">
        Business vector created by pch.vector - www.freepik.com
      </Attribution>
    </FooterContainer>
  );
};

export default Footer;
