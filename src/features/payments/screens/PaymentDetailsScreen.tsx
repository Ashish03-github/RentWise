import React, { useState } from 'react';
import { Container } from '@/common/components';
import TenantProfileCard from '../components/TenantProfileCard';
import PaymentTabs from '../components/PaymentTabs';
import RentSummaryCard from '../components/RentSummaryCard';
import PaymentHistoryList from '../components/PaymentHistoryList';

import {
  currentRent,
  payments,
  tenant,
} from '../constants/payments.dummy.data';

const TABS = ['Rent Summary', 'Payment History'] as const;

const PaymentDetailsScreen = () => {
  const [activeTab, setActiveTab] = useState<(typeof TABS)[number]>(TABS[0]);

  return (
    <Container buttonLabel="Send Reminder" screenHeading="Payments Details">
      <TenantProfileCard tenant={tenant} />

      <PaymentTabs tabs={TABS} activeTab={activeTab} onChange={setActiveTab} />

      {activeTab === 'Rent Summary' ? (
        <RentSummaryCard rent={currentRent} />
      ) : (
        <PaymentHistoryList payments={payments} />
      )}
    </Container>
  );
};

export default PaymentDetailsScreen;
