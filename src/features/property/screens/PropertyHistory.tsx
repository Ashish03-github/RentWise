import React from 'react';
import { Container } from '@/common/components';
import RemovedPropertyList from '../components/RemovedPropertyList';

const PropertyHistory = () => {
  return (
    <Container screenHeading={'Removed Properties'}>
      <RemovedPropertyList />
    </Container>
  );
};

export default PropertyHistory;
