import React from 'react';
import { Container } from '@/common/components';
import SummaryGrid from '../components/SummaryGrid';

const DashboardScreen = () => {
  return (
    <Container isDashboard={true} screenHeading={null} buttonLabel={null}>
      <SummaryGrid />
    </Container>
  );
};

export default DashboardScreen;
