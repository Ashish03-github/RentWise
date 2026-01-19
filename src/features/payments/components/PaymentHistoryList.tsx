import React, { useMemo } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import useTheme from '@/common/hooks/useTheme';
import EmptyState from './EmptyState';
import PaymentHistoryItem from './PaymentHistoryItem';
import { ThemeColors } from '@/theme/colors';
import { ThemeFonts } from '@/theme/fonts';
import { ThemeLayout } from '@/theme/layout';
import { ThemeSpacing } from '@/theme/spacing';

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
  const { Colors, Fonts, Layout, Spacing } = useTheme();

  const styles = useMemo(
    () => stylesFn(Colors, Fonts, Layout, Spacing),
    [Colors, Fonts, Layout, Spacing],
  );

  if (!payments.length) {
    return <EmptyState message="No payments made yet." />;
  }

  return (
    <View style={styles.section}>
      <Text style={styles.title}>Payment History</Text>

      {payments.map(payment => (
        <PaymentHistoryItem key={payment.id} payment={payment} />
      ))}
    </View>
  );
};

export default React.memo(PaymentHistoryList);

const stylesFn = (
  Colors: ThemeColors,
  Fonts: ThemeFonts,
  Layout: ThemeLayout,
  Spacing: ThemeSpacing,
) =>
  StyleSheet.create({
    section: {
      ...Colors.white,
      ...Layout.roundedXl,
      ...Spacing.p4,
      ...Spacing.my2,
    },
    title: {
      ...Fonts.sz12,
      ...Fonts.font600,
      ...Spacing.pb3,
    },
  });
