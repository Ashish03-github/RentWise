import React from 'react';
import { Container } from '@/common/components';
import PropertyList from '../components/PropertyList';

const PropertyScreen = () => {
  return (
    <Container screenHeading={'Properties'}>
      <PropertyList />
    </Container>
  );
};

export default PropertyScreen;
