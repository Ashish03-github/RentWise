import React from 'react';
import RegisterForm from '../components/RegisterForm';
import { Container } from '@/common/components';

const RegisterScreen = () => {
  return (
    <Container screenHeading={null}>
      <RegisterForm />
    </Container>
  );
};

export default RegisterScreen;
