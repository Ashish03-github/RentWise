import React from 'react';
import { Container } from '@/common/components';
import LoginForm from '../components/LoginForm';

const LoginScreen = () => {
  return (
    <Container screenHeading={null}>
      <LoginForm />
    </Container>
  );
};

export default LoginScreen;
