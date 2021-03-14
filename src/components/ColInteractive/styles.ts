import styled from 'styled-components';
import BG from '../../assets/foto.jpeg';

export const Container = styled.div`
  width: 350px;
  height: 100vh;
  background: url(${BG});
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  -webkit-box-shadow: 5px 0px 9px -2px rgba(0, 0, 0, 0.65);
  box-shadow: 5px 0px 9px -2px rgba(0, 0, 0, 0.65);
  padding-bottom: 20px;
  padding-top: 20px;
`;

export const SocialMediasContainer = styled.div`
  border-radius: 8px;
  width: 320px;
  background: rgba(223, 230, 233, 0.4);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 10px;
  flex: 1;
  backdrop-filter: blur(2px);
  h2 {
    text-align: center;
  }

  a:first-child {
    width: 50px;
    height: 50px;
    background: #fff;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 25px;
    transition: 0.2s;
    &:hover {
      transform: scale(1.2);
    }
  }
`;
export const SocialContainer = styled.a`
  width: 200px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: 0.2s;
  &:hover {
    transform: scale(1.2);
  }
  div:first-child {
    margin-top: 10px;
  }
  > div {
    margin-bottom: 5px;
  }
`;

export const HomeContainer = styled.a`
  width: 50px;
  height: 50px;
  background: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 25px;
  transition: 0.2s;
  &:hover {
    transform: scale(1.2);
  }
`;
export const ImgYoutubeContainer = styled.div`
  width: 40px;
  img {
    width: 100%;
  }
`;

export const ContainerLogo = styled.div`
  width: 120px;
  transition: 0.2s;
  &:hover {
    transform: scale(1.2);
  }
  img {
    width: 100%;
  }
`;
