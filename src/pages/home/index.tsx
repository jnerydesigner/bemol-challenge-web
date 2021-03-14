import React, { useCallback, useEffect, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
// import { FiMail } from 'react-icons/fi';
// import axios from 'axios';
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
import LogoBemol from '../../assets/marca-bemol.svg';
import Button from '../../components/Button';
import { useToast } from '../../hooks/toast';
import ColInteractive from '../../components/ColInteractive';
import api from '../../services/api';

type Inputs = {
  client: string;
  email: string;
};

interface IClient {
  client: string;
  email: string;
}

const home: React.FC = () => {
  const { addToast } = useToast();
  const history = useHistory();

  const { register, handleSubmit } = useForm<Inputs>();

  const onSubmit = useCallback(
    (data: IClient) => {
      if (data) {
        api.post('/client', {
          name: data.client,
          email: data.email,
        });
        const clientBemol = JSON.stringify(data);
        localStorage.setItem('@Bemol:clientes', clientBemol);
      }
      history.push('/novo');
    },
    [history],
  );

  return (
    <Container>
      <ColInteractive />
      <ContainerInteracao>
        <ContainerForm>
          <TextTitleForm>
            Oi podemos conversar por aqui, me informe seu nome e seu email.
          </TextTitleForm>

          <Form onSubmit={handleSubmit(onSubmit)}>
            <input
              placeholder="Seu Nome"
              type="text"
              name="client"
              ref={register}
            />
            <input
              placeholder="Seu melhor email"
              type="text"
              name="email"
              ref={register}
            />
            <Button type="submit">Cadastrar Nome</Button>
          </Form>
        </ContainerForm>
      </ContainerInteracao>
    </Container>
  );
};

export default home;
