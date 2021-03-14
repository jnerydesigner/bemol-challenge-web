import React from 'react';
import {
  Container,
  ContainerForm,
  TextTitleForm,
  ContainerInteracao,
  ParagrafoDetails,
} from './style';
import LogoBemol from '../../assets/marca-bemol.svg';
import Button from '../../components/Button';
import { useToast } from '../../hooks/toast';
import ColInteractive from '../../components/ColInteractive';

const result: React.FC = () => {
  return (
    <Container>
      <ColInteractive />
      <ContainerInteracao>
        <ContainerForm>
          <TextTitleForm>
            Olá Jander, Ficamos agradecido de você que é tão importante para
            nós, ter deixado seu pedido.
          </TextTitleForm>
          <ParagrafoDetails>
            <span>Seu nome:</span>
            <span>Jander</span>
          </ParagrafoDetails>
          <ParagrafoDetails>
            <span>Seu email:</span>
            <span>jander.webmaster@gmail.com</span>
          </ParagrafoDetails>
          <ParagrafoDetails>
            <span>Seu endereço é:</span>
          </ParagrafoDetails>
          <ParagrafoDetails>
            <span>Rua:</span>
            <span>jander.webmaster@gmail.com</span>
          </ParagrafoDetails>
          <ParagrafoDetails>
            <span>Número:</span>
            <span>jander.webmaster@gmail.com</span>
          </ParagrafoDetails>
          <ParagrafoDetails>
            <span>Complemento:</span>
            <span>jander.webmaster@gmail.com</span>
          </ParagrafoDetails>
          <ParagrafoDetails>
            <span>Cep:</span>
            <span>jander.webmaster@gmail.com</span>
          </ParagrafoDetails>
          <ParagrafoDetails>
            <span>Cidade:</span>
            <span>jander.webmaster@gmail.com</span>
          </ParagrafoDetails>
          <ParagrafoDetails>
            <span>Estado:</span>
            <span>jander.webmaster@gmail.com</span>
          </ParagrafoDetails>
        </ContainerForm>
      </ContainerInteracao>
    </Container>
  );
};

export default result;
