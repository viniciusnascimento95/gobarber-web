import React from 'react';
import { FiArrowLeft, FiUser, FiMail, FiLock } from 'react-icons/fi';
import logoImg from '../../assets/logo.svg';

import Input from '../../components/Input';
import Button from '../../components/Button';

import { Container, Content, Background } from './styles';

const SignUp: React.FC = () => (
  <Container>
    <Background />
    <Content>
      <img src={logoImg} alt="GoBarber" />

      <form>
        <h1>Faça seu logon</h1>

        <Input name="name" icon={FiUser} placeholder="Nome" />
        <Input name="email" icon={FiMail} placeholder="E-mail" />

        <Input name="password" icon={FiLock} placeholder="Senha" type="password" />

        <Button type="submit">Cadastrar</Button>

      </form>

      <a href="/">
        <FiArrowLeft />
        Voltar para o logon
      </a>
    </Content>


  </Container>

);

export default SignUp;