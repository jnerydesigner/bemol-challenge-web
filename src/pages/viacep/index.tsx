import React, { useEffect, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import {
  Container,
  ContainerForm,
  TextTitleForm,
  Form,
  ContainerInteracao,
  ContainerLogo,
} from './style';
import LogoBemol from '../../assets/marca-bemol.svg';
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
  nameClient: string;
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

const shema = yup.object().shape({
  cep: yup.string().required().min(8),
});

const viacep: React.FC = () => {
  const history = useHistory();
  const { addToast } = useToast();
  const initial = {
    cep: '',
    bairro: '',
    numero: '',
    complemento: '',
    logradouro: '',
    localidade: '',
    uf: '',
  };

  const [address, setAddress] = useState<IAdress>(initial);

  const [nameClient, setNameClient] = useState<IClient>(() => {
    const clientStorage = localStorage.getItem('@Bemol:clientes');
    if (clientStorage) {
      return JSON.parse(clientStorage);
    }
    return '';
  });
  const { register, handleSubmit, reset } = useForm<Inputs>({
    resolver: yupResolver(shema),
  });
  useEffect(() => {
    function resetForm(addressClient: IAdress) {
      const dados = {
        cep: addressClient.cep,
        bairro: addressClient.bairro,
        logradouro: addressClient.logradouro,
        numero: addressClient.numero,
        complemento: addressClient.complemento,
        localidade: addressClient.localidade,
        uf: addressClient.uf,
      };

      localStorage.setItem('@Bemol:endereco', JSON.stringify(dados));
    }

    resetForm(address);
  }, [address, reset]);

  const onSubmit = (data: DataObject) => {
    const { cep } = data;
    const cepRegex = cep.replace(/[^0-9]/g, '');
    fetch(`https://viacep.com.br/ws/${cepRegex}/json/`)
      .then(res => res.json())
      .then(datacep => {
        if (datacep.erro) {
          addToast({
            type: 'error',
            title: 'Acho que você Ditou o CEP errado',
            description:
              'O CEP retornado não existe nos correios, tente outro.',
          });
          setAddress(initial);
          return;
        }
        setAddress(datacep);
        history.push('/contato');
      })
      .catch(err => {
        setAddress(initial);
        addToast({
          type: 'error',
          title: 'Acho que você Ditou o CEP errado',
          description: 'O CEP Geralmente tem esse formato 00000-000.',
        });
      });
  };

  function errorCep() {
    addToast({
      type: 'error',
      title: 'Erro na busca do Cep',
      description: 'Ocorreu um erro ao fazer login, cheque as credenciais.',
    });
  }

  return (
    <Container>
      <ColInteractive />
      <ContainerInteracao>
        <ContainerLogo>
          <img src={LogoBemol} alt="Logo da Bemol" />
        </ContainerLogo>
        <ContainerForm>
          <TextTitleForm>
            Oi {nameClient}, digite seu CEP para maior Interação com a Bemol.
          </TextTitleForm>

          <Form onSubmit={handleSubmit(onSubmit)}>
            <input
              placeholder="Seu CEP aqui"
              type="text"
              name="cep"
              ref={register({ minLength: 8 })}
            />
            <Button type="submit">Buscar CEP</Button>
          </Form>
        </ContainerForm>
      </ContainerInteracao>
    </Container>
  );
};

export default viacep;
