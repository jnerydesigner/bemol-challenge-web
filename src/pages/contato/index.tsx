import React, { useCallback, useEffect, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import api from '../../services/api';
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

type Inputs = {
  cep: string;
  bairro: string;
  logradouro: string;
  numero: string;
  complemento?: string;
  localidade: string;
  uf: string;
};

interface IClient {
  client: string;
  email: string;
}

interface DataObject {
  cep: string;
}
interface IAdress {
  cep: string;
  bairro: string;
  logradouro: string;
  numero: string;
  complemento?: string;
  localidade: string;
  uf: string;
}

const contato: React.FC = () => {
  const { addToast } = useToast();
  const history = useHistory();

  const [nameClient, setNameClient] = useState<IClient>(() => {
    const clientStorage = localStorage.getItem('@Bemol:clientes');
    if (clientStorage) {
      return JSON.parse(clientStorage);
    }
    return '';
  });

  const [enderecoClient, setEnderecoClient] = useState<IAdress>(() => {
    const enderecoStorage = localStorage.getItem('@Bemol:endereco');
    if (enderecoStorage) {
      return JSON.parse(enderecoStorage);
    }
    return '';
  });
  const { register, handleSubmit, reset } = useForm<Inputs>();

  useEffect(() => {
    reset({
      cep: enderecoClient.cep,
      logradouro: enderecoClient.logradouro,
      bairro: enderecoClient.bairro,
      complemento: enderecoClient.complemento,
      localidade: enderecoClient.localidade,
      uf: enderecoClient.uf,
    });
  }, [enderecoClient, reset]);

  // const onSubmit = (data: DataObject) => {
  //   console.log(data);
  // };

  const onSubmit = useCallback(
    async (data: IAdress) => {
      const results = await api.put(`/client/endereco/${nameClient.email}`, {
        cep: data.cep,
        bairro: data.bairro,
        logradouro: data.logradouro,
        numero: data.numero,
        complemento: data.complemento,
        localidade: data.localidade,
        uf: data.uf,
      });
      if (results) {
        history.push('/');
      }
    },
    [nameClient, history],
  );

  return (
    <Container>
      <ColInteractive />
      <ContainerInteracao>
        <ContainerForm>
          <TextTitleForm>
            Oi {enderecoClient.cep}, digite seus dados para maior Interação com
            a Bemol.
          </TextTitleForm>

          <Form onSubmit={handleSubmit(onSubmit)}>
            <input type="text" name="cep" ref={register} />
            <input type="text" name="logradouro" ref={register} />
            <input type="text" name="numero" ref={register} />
            <input type="text" name="complemento" ref={register} />
            <input type="text" name="bairro" ref={register} />
            <input type="text" name="localidade" ref={register} />
            <input type="text" name="uf" ref={register} />
            <Button type="submit">Cadastrar Cliente</Button>
          </Form>
        </ContainerForm>
      </ContainerInteracao>
    </Container>
  );
};

export default contato;
