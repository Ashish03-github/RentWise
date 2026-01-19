import { View, Text, StyleSheet } from 'react-native';
import React from 'react';
import { ThemeColors } from '@/theme/colors';
import { ThemeFonts } from '@/theme/fonts';
import { ThemeLayout } from '@/theme/layout';
import { ThemeSpacing } from '@/theme/spacing';
import { commonIcons } from '@/common/constants/commonIcons';
import useTheme from '@/common/hooks/useTheme';
import { scale } from '@/theme/scale';

const PaymentHistoryCard = React.memo(() => {
  const { Colors, Fonts, Layout, Spacing } = useTheme();
  const payments = [
    {
      id: '1',
      amount: '20,000',
      method: 'UPI',
      type: 'Deposite',
      date: 'May 1, 2024',
    },
    {
      id: '2',
      amount: '20,000',
      method: 'Cash',
      type: 'Rent',
      date: 'Feb 28, 2024',
    },
    {
      id: '3',
      amount: '20,000',
      method: 'UPI',
      type: 'Deposite',
      date: 'May 1, 2024',
    },
    {
      id: '4',
      amount: '20,000',
      method: 'Cash',
      type: 'Rent',
      date: 'Feb 28, 2024',
    },
    {
      id: '5',
      amount: '20,000',
      method: 'UPI',
      type: 'Deposite',
      date: 'May 1, 2024',
    },
    {
      id: '6',
      amount: '20,000',
      method: 'Cash',
      type: 'Rent',
      date: 'Feb 28, 2024',
    },
  ];

  const styles = React.useMemo(
    () => stylesFn(Colors, Fonts, Layout, Spacing),
    [Colors, Fonts, Layout, Spacing],
  );

  return (
    <View style={styles.card}>
      <Text style={styles.sectionTitle}>Payment History</Text>
      {payments.map(payment => (
        <View key={payment.id} style={styles.paymentItem}>
          <Text style={styles.paymentDate}>{payment.date}</Text>
          <View style={styles.paymentLeft}>
            <Text style={styles.paymentMethod}>{payment.method}</Text>
            <Text style={styles.paymentMethod}>{payment.type}</Text>
            <Text style={styles.paymentAmount}>
              {commonIcons.rupees} {payment.amount}
            </Text>
          </View>
        </View>
      ))}
    </View>
  );
});

export default PaymentHistoryCard;

const stylesFn = (
  Colors: ThemeColors,
  Fonts: ThemeFonts,
  Layout: ThemeLayout,
  Spacing: ThemeSpacing,
) =>
  StyleSheet.create({
    card: {
      ...Spacing.p4,
      ...Colors.white,
      ...Layout.roundedLg,
    },
    sectionTitle: {
      ...Fonts.sz12,
      ...Fonts.font600,
      ...Colors.textBlack,
      ...Spacing.mb4,
    },
    depositRow: {
      ...Layout.flexRow,
      ...Layout.justifyBetween,
      ...Spacing.mb2,
    },
    depositLabel: {
      ...Fonts.sz11,
      ...Fonts.font500,
    },
    depositAmount: {
      ...Fonts.sz11,
      ...Fonts.font600,
    },
    paymentItem: {
      ...Layout.flexRow,
      ...Layout.justifyBetween,
      ...Layout.alignCenter,
      ...Spacing.py3,
      borderBottomWidth: 1,
      borderBottomColor: 'rgba(0,0,0,0.05)',
    },
    paymentLeft: {
      ...Layout.flexRow,
      ...Layout.alignCenter,
    },
    paymentAmount: {
      ...Fonts.sz11,
      ...Fonts.font500,
      color: '#4CAF50',
      ...Spacing.ml3,
    },
    paymentMethod: {
      ...Fonts.sz8,
      ...Fonts.font500Italic,
      ...Colors.textBlack,
      backgroundColor: '#F0F0F0',
      width: scale(70),
      ...Spacing.mx1,
      ...Spacing.py0,
      ...Layout.rounded,
      paddingVertical: scale(2),
      textAlign: 'center',
    },
    paymentDate: {
      ...Fonts.sz10,
      ...Fonts.font400,
    },
  });
