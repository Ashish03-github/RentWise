import React from 'react';
import { Container } from '@/common/components';
import RemovedTenantList from '../components/RemovedTenantList';

const TenantHistory = () => {
  return (
    <Container screenHeading={'Removed Tenants'}>
      <RemovedTenantList />
    </Container>
  );
};

export default TenantHistory;

