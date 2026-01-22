import React, { useEffect } from 'react';
import { Container } from '@/common/components';
import SummaryGrid from '../components/SummaryGrid';
import MonthlyRentStatusSection from '../components/MonthlyRentStatusSection';
import NeedsAttentionSection from '../components/NeedsAttentionSection';
import QuickActionsGrid from '../components/QuickActionsGrid';
import { socketService } from '@/services/socket';

const EVENTS = {
  ROOM_JOIN: 'room:join',
  MESSAGE_NEW: 'message:new',
  TYPING_START: 'typing:start',
  TYPING_STOP: 'typing:stop',
  PUBLIC_KEY: 'public-key',
};

const DashboardScreen = () => {
  useEffect(() => {
    socketService.emit(EVENTS.MESSAGE_NEW, {
      text: 'Hello from React Native how are you',
    });
  }, []);

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
