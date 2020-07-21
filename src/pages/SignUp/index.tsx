import React from 'react';
import { FiArrowLeft, FiUser, FiMail, FiLock } from 'react-icons/fi';
import logoImg from '../../assets/logo.svg';
import { Form } from '@unform/web'
import { } from 'yup';

import Input from '../../components/Input';
import Button from '../../components/Button';

import { Container, Content, Background } from './styles';

const SignUp: React.FC = () => {

  function handleSubmit(data: object): void {
    console.log(data);
  }

  return (
    <Container>
      <Background />
      <Content>
        <img src={logoImg} alt="GoBarber" />

        <Form onSubmit={handleSubmit}>
          <h1>Faça seu logon</h1>

          <Input name="name" icon={FiUser} placeholder="Nome" />
          <Input name="email" icon={FiMail} placeholder="E-mail" />

          <Input name="password" icon={FiLock} placeholder="Senha" type="password" />

          <Button type="submit">Cadastrar</Button>

        </Form>

        <a href="/">
          <FiArrowLeft />
        Voltar para o logon
      </a>
      </Content>


    </Container>
  );
};

export default SignUp;