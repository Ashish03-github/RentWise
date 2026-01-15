import React from 'react';
import { CircularButton, Container } from '@/common/components';
import PaymentsInfo from '../components/PaymentsInfo';
import RecentPaymentsList from '../components/RecentPaymentsList';
import { StyleSheet, View } from 'react-native';
import useTheme from '@/common/hooks/useTheme';
import { ThemeLayout } from '@/theme/layout';
import { PaymentRoutes } from '@/navigation/routes';

const PaymentScreen = () => {
  const { Layout } = useTheme();
  const styles = React.useMemo(() => stylesFn(Layout), [Layout]);
  return (
    <Container screenHeading={'Payments'}>
      <View style={styles.container}>
        <PaymentsInfo />
        <RecentPaymentsList />
        <CircularButton nextToScreen={PaymentRoutes.addPayment} />
      </View>
    </Container>
  );
};

const stylesFn = (Layout: ThemeLayout) =>
  StyleSheet.create({
    container: {
      ...Layout.flex,
    },
  });
export default PaymentScreen;
