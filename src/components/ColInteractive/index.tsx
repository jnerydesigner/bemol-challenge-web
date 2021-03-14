import React from 'react';
import { Link } from 'react-router-dom';
import { FcHome } from 'react-icons/fc';
import Youtube from '../../assets/youtube.png';
import Facebook from '../../assets/facebook.png';
import Instagram from '../../assets/instagram.png';
import Whatsapp from '../../assets/whatsapp.png';
import Twitter from '../../assets/twitter.png';
import Linkedin from '../../assets/linkedin.png';
import LogoBemol from '../../assets/marca-bemol.svg';

import {
  Container,
  SocialMediasContainer,
  SocialContainer,
  ImgYoutubeContainer,
  ContainerLogo,
} from './styles';

const ColInteractive: React.FC = () => {
  return (
    <Container>
      <SocialMediasContainer>
        <ContainerLogo>
          <img src={LogoBemol} alt="Logo da Bemol" />
        </ContainerLogo>
        <Link to="/result">
          <FcHome size={40} />
        </Link>
        <h2>Nossos Canais de Mídia para tirar sua dúvida</h2>
        <SocialContainer
          target="_blank"
          href="https://www.youtube.com/channel/UCCwd1cdjZEkHTAC-szuoUeA"
        >
          <ImgYoutubeContainer>
            <img src={Youtube} alt="Youtube" />
          </ImgYoutubeContainer>
        </SocialContainer>
        <SocialContainer
          target="_blank"
          href="https://www.facebook.com/bemolonline"
        >
          <ImgYoutubeContainer>
            <img src={Facebook} alt="Facebook" />
          </ImgYoutubeContainer>
        </SocialContainer>
        <SocialContainer
          target="_blank"
          href="https://www.instagram.com/bemolonline/"
        >
          <ImgYoutubeContainer>
            <img src={Instagram} alt="Instagram" />
          </ImgYoutubeContainer>
        </SocialContainer>
        <SocialContainer href="#">
          <ImgYoutubeContainer>
            <img src={Whatsapp} alt="Whatsapp" />
          </ImgYoutubeContainer>
        </SocialContainer>
        <SocialContainer target="_blank" href="https://twitter.com/BemolOnline">
          <ImgYoutubeContainer>
            <img src={Twitter} alt="Twitter" />
          </ImgYoutubeContainer>
        </SocialContainer>
        <SocialContainer
          target="_blank"
          href="https://www.linkedin.com/company/bemol/"
        >
          <ImgYoutubeContainer>
            <img src={Linkedin} alt="Linkedin" />
          </ImgYoutubeContainer>
        </SocialContainer>
      </SocialMediasContainer>
    </Container>
  );
};

export default ColInteractive;
