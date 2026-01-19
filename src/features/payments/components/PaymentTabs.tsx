import React, { Dispatch, SetStateAction } from 'react';
import { AppTabs } from '@/common/components';

type PaymentTab = {
  tabs: string[];
  activeTab: 'Rent Summary' | 'Payment History';
  onChange: Dispatch<SetStateAction<'Rent Summary' | 'Payment History'>>;
};
const PaymentTabs = ({ tabs, activeTab, onChange }: PaymentTab) => {
  return (
    <AppTabs options={tabs} activeTab={activeTab} setActiveTab={onChange} />
  );
};

export default React.memo(PaymentTabs);
