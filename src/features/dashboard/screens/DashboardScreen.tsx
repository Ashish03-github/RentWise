import React from 'react';
import { Container } from '@/common/components';
import SummaryGrid from '../components/SummaryGrid';
import MonthlyRentStatusSection from '../components/MonthlyRentStatusSection';
import NeedsAttentionSection from '../components/NeedsAttentionSection';
import QuickActionsGrid from '../components/QuickActionsGrid';

const DashboardScreen = () => {
  return (
    <Container isDashboard={true} screenHeading={null} buttonLabel={null}>
      <SummaryGrid />

      <MonthlyRentStatusSection />

      <NeedsAttentionSection />

      <QuickActionsGrid />
    </Container>
  );
};

export default DashboardScreen;
