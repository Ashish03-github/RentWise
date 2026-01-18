import React, { JSX } from 'react';
import SecurityDepositCard from './SecurityDepositCard';
import PaymentHistoryCard from './PaymentHistoryCard';
import ContactDetailsCard from './ContactDetailsCard';

const TenantTabRenderer = React.memo(({ activeTab }: { activeTab: string }) => {
  const TAB_COMPONENTS: Record<string, JSX.Element> = {
    'Security Deposit': <SecurityDepositCard />,
    'Payment History': <PaymentHistoryCard />,
    'Contact Details': <ContactDetailsCard />,
  };

  return TAB_COMPONENTS[activeTab] ?? null;
});

export default TenantTabRenderer;
