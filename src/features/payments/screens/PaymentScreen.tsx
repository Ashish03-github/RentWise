import React from 'react';
import { AppIcon, Container } from '@/common/components';
import PaymentsFilters from '../components/PaymentsFilters';
import PaymentsInfo from '../components/PaymentsInfo';
import RecentPaymentsList from '../components/RecentPaymentsList';
import { StyleSheet, TouchableOpacity, View } from 'react-native';
import useTheme from '@/common/hooks/useTheme';
import { ThemeColors } from '@/theme/colors';
import { ThemeLayout } from '@/theme/layout';
import { scale } from '@/theme/scale';

const PaymentScreen = () => {
  const { Colors, Fonts, Layout } = useTheme();
  const styles = React.useMemo(
    () => stylesFn(Colors, Layout),
    [Colors, Fonts, Layout],
  );
  return (
    <Container screenHeading={'Payments'}>
      <View style={styles.container}>
        <PaymentsInfo />
        {/* <PaymentsFilters /> */}
        <RecentPaymentsList />

        <TouchableOpacity
          onPress={() => {}}
          activeOpacity={0.9}
          style={styles.plusButton}
        >
          <AppIcon name="add" size={22} color={Colors.whitePure} />
        </TouchableOpacity>
      </View>
    </Container>
  );
};

const stylesFn = (Colors: ThemeColors, Layout: ThemeLayout) =>
  StyleSheet.create({
    container: {
      ...Layout.flex,
    },
    plusButton: {
      bottom: 0,
      right: 0,
      width: scale(56),
      height: scale(56),
      ...Layout.absolute,
      borderRadius: scale(28),
      ...Colors.primary,
      ...Layout.center,
    },
  });
export default PaymentScreen;
