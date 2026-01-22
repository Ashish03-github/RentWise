import { View } from 'react-native';
import React, { useCallback } from 'react';
import { AppTabs } from '@/common/components';
import SecurityDepositCard from './SecurityDepositCard';
import PaymentHistoryCard from './PaymentHistoryCard';
import ContactDetailsCard from './ContactDetailsCard';

const TABS = ['Security Deposit', 'Payment History', 'Contact Details'];

const TenantDetailsCard = () => {
  const [activeTab, setActiveTab] = React.useState(TABS[0]);

  const getActiveTabDetails = useCallback((tab: string) => {
    let activeComponent = <></>;
    switch (tab) {
      case 'Security Deposit':
        activeComponent = <SecurityDepositCard />;
        break;
      case 'Payment History':
        activeComponent = <PaymentHistoryCard />;
        break;
      case 'Contact Details':
        activeComponent = <ContactDetailsCard />;
        break;
      default:
        activeComponent = <SecurityDepositCard />;
    }
    return activeComponent;
  }, []);

  return (
    <View style={{ flex: 1 }}>
      <AppTabs
        options={TABS}
        activeTab={activeTab}
        setActiveTab={setActiveTab}
      />

      {getActiveTabDetails(activeTab)}
    </View>
  );
};

export default TenantDetailsCard;

