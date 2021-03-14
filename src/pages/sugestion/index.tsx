import React from 'react';
import {
  Container,
  ContainerForm,
  TextTitleForm,
  Form,
  ContainerInteracao,
} from './style';
import Button from '../../components/Button';
import { useToast } from '../../hooks/toast';
import ColInteractive from '../../components/ColInteractive';

const sugestion: React.FC = () => {
  return (
    <Container>
      <ColInteractive />
      <ContainerInteracao>
        <ContainerForm>
          <TextTitleForm>
            Olá Jander, deixe sua sugestão para melhorarmos ainda mais.
          </TextTitleForm>

          <Form>
            <label htmlFor="cep">
              <span>Escreva o Titulo de sua sugestão</span>
              <input type="text" id="cep" name="cep" />
            </label>
            <label htmlFor="descricao">
              <span>Escreva o que você acha dos nossos canais digitais</span>
              <textarea name="description" id="descricao" />
            </label>

            <Button type="submit">Deixe Sua sugestão</Button>
          </Form>
        </ContainerForm>
      </ContainerInteracao>
    </Container>
  );
};

export default sugestion;
