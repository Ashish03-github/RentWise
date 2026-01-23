import React from 'react';
import { FlatList } from 'react-native';

import { EmptyState } from '../../../common/components';
import PaymentHistoryItem from './PaymentHistoryItem';
type PaymentHistroryList = {
  id: string;
  amount: string;
  method: string;
  type: string;
  date: string;
  isDecuted: boolean;
}[];
const PaymentHistoryList = ({
  payments,
}: {
  payments: PaymentHistroryList;
}) => {
  if (!payments.length) {
    return <EmptyState icon="home" message="No payments made yet." />;
  }

  return (
    <FlatList
      data={payments}
      keyExtractor={item => item.id}
      removeClippedSubviews={true}
      showsVerticalScrollIndicator={false}
      initialNumToRender={15}
      renderItem={({ item, index }) => (
        <PaymentHistoryItem key={index} payment={item} />
      )}
    />
  );
};

export default React.memo(PaymentHistoryList);
