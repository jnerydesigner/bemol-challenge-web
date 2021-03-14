import React, { useCallback, useEffect, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import axios from 'axios';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import {
  Container,
  ContainerForm,
  TextTitleForm,
  Form,
  ContainerInteracao,
} from './style';
import Button from '../../components/Button';
import ColInteractive from '../../components/ColInteractive';
import { useToast } from '../../hooks/toast';
import api from '../../services/api';

interface DataObject {
  cep: string;
}

type Inputs = {
  cep: string;
  bairro: string;
  logradouro: string;
  numero: string;
  complemento: string;
  localidade: string;
  uf: string;
};

interface IClient {
  client: string;
  email: string;
}

const novo: React.FC = () => {
  const history = useHistory();
  const initial = {
    cep: '',
    bairro: '',
    logradouro: '',
    numero: '',
    complemento: '',
    localidade: '',
    uf: '',
  };

  const { addToast } = useToast();
  const [addressClient, setAddressClient] = useState<Inputs>(initial);
  const [client, setClient] = useState<IClient>(() => {
    const clientStorage = localStorage.getItem('@Bemol:clientes');
    if (clientStorage) {
      return JSON.parse(clientStorage);
    }
    return '';
  });

  // Responsável por instanciar o Hook do react-hook-form
  const { register, handleSubmit, reset } = useForm<Inputs>();

  const handleUpdateLocation = useCallback(
    async (data: Inputs) => {
      await api
        .put(`/client/endereco/${client.email}`, {
          cep: data.cep,
          bairro: data.bairro,
          logradouro: data.logradouro,
          numero: data.numero,
          complemento: data.complemento,
          localidade: data.localidade,
          uf: data.uf,
        })
        .then(response => {
          if (response.data) {
            history.push('/contato');
          }
        });
    },
    [client, history],
  );

  const onSubmit = useCallback(
    async (data: DataObject) => {
      const cepRegex = data.cep.replace(/[^0-9]/g, '');
      const response = await axios.get(
        `https://viacep.com.br/ws/${cepRegex}/json/`,
      );
      localStorage.setItem('@Bemol:endereco', JSON.stringify(response.data));
      handleUpdateLocation(response.data);
      setAddressClient(response.data);
    },
    [handleUpdateLocation],
  );

  return (
    <Container>
      <ColInteractive />
      <ContainerInteracao>
        <ContainerForm>
          <TextTitleForm>
            Oi {client.client}, digite o seu cep para localizarmos seu endereço.
          </TextTitleForm>

          <TextTitleForm>{addressClient.bairro}</TextTitleForm>

          <Form onSubmit={handleSubmit(onSubmit)}>
            <input
              placeholder="Seu CEP aqui"
              type="text"
              name="cep"
              ref={register}
            />

            <Button type="submit">Buscar Endereço</Button>
          </Form>
        </ContainerForm>
      </ContainerInteracao>
    </Container>
  );
};

export default novo;
