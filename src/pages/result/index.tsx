import React, { useEffect, useState } from 'react';
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
import api from '../../services/api';

interface IClient {
  client: string;
  email: string;
}

type Inputs = {
  name: string;
  email: string;
  cep: string;
  bairro: string;
  logradouro: string;
  numero: string;
  complemento: string;
  localidade: string;
  uf: string;
};

const result: React.FC = () => {
  const [client, setClient] = useState<IClient>(() => {
    const clientStorage = localStorage.getItem('@Bemol:clientes');
    if (clientStorage) {
      return JSON.parse(clientStorage);
    }
    return '';
  });
  const [address, setAddress] = useState<Inputs>();

  useEffect(() => {
    api.get(`/client/results/${client.email}`).then(response => {
      setAddress(response.data);
    });
  }, [client.email]);

  return (
    <Container>
      <ColInteractive />
      <ContainerInteracao>
        <ContainerForm>
          <TextTitleForm>
            Olá {client.client}, Ficamos agradecido de você que é tão importante
            para nós, ter deixado seu pedido.
          </TextTitleForm>
          <ParagrafoDetails>
            <span>Seu nome:</span>
            <span>{address?.name}</span>
          </ParagrafoDetails>
          <ParagrafoDetails>
            <span>Seu email:</span>
            <span>{address?.email}</span>
          </ParagrafoDetails>
          <ParagrafoDetails>
            <span>Seu endereço é:</span>
          </ParagrafoDetails>
          <ParagrafoDetails>
            <span>Rua:</span>
            <span>{address?.logradouro}</span>
          </ParagrafoDetails>
          <ParagrafoDetails>
            <span>Número:</span>
            <span>{address?.numero}</span>
          </ParagrafoDetails>
          <ParagrafoDetails>
            <span>Complemento:</span>
            <span>{address?.complemento}</span>
          </ParagrafoDetails>
          <ParagrafoDetails>
            <span>Cep:</span>
            <span>{address?.cep}</span>
          </ParagrafoDetails>
          <ParagrafoDetails>
            <span>Cidade:</span>
            <span>{address?.localidade}</span>
          </ParagrafoDetails>
          <ParagrafoDetails>
            <span>Estado:</span>
            <span>{address?.uf}</span>
          </ParagrafoDetails>
        </ContainerForm>
      </ContainerInteracao>
    </Container>
  );
};

export default result;
