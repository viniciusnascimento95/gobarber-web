import React, { useRef, useCallback, useContext } from 'react';
import { FiLogIn, FiMail, FiLock } from 'react-icons/fi';
import { FormHandles } from '@unform/core'
import { Form } from '@unform/web'
import * as Yup from 'yup';

import { AuthContext } from '../../context/AuthContext';
import getValidationErrors from '../../utils/getValidationErrors';

import logoImg from '../../assets/logo.svg';

import Input from '../../components/Input';
import Button from '../../components/Button';

import { Container, Content, Background } from './styles';

interface SignInFormData {
  email: string;
  password: string;
}

const SignIn: React.FC = () => {

  const formRef = useRef<FormHandles>(null);
  // console.log(formRef);
  const { signIn } = useContext(AuthContext);

  const handleSubmit = useCallback(async (data: SignInFormData) => {
    // console.log(data);
    try {
      formRef.current?.setErrors({}); //zerando os erros
      const schema = Yup.object().shape({
        email: Yup.string().required('Email obrigatório').email(),
        password: Yup.string().required('Senha obrigatório')
      });

      await schema.validate(data, {
        abortEarly: false,
      });

      signIn({
        email: data.email,
        password: data.password,
      });
    } catch (err) {
      console.log(err);

      const errors = getValidationErrors(err);
      formRef.current?.setErrors(errors);
    }
  }, [signIn]);

  return (
    <Container>
      <Content>
        <img src={logoImg} alt="GoBarber" />

        <Form ref={formRef} onSubmit={handleSubmit}>
          <h1>Faça seu logon</h1>

          <Input name="email" icon={FiMail} placeholder="E-mail" />

          <Input name="password" icon={FiLock} placeholder="Senha" type="password" />

          <Button type="submit">Entrar</Button>

          <a href="forgot">Esqueci minha senha</a>
        </Form>

        <a href="login">
          <FiLogIn />
        Criar conta
      </a>
      </Content>

      <Background />
    </Container>
  )
}



  ;

export default SignIn;