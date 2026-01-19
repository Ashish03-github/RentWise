import React, { useMemo } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import useTheme from '@/common/hooks/useTheme';
import { scale } from '@/theme/scale';
import { ThemeFonts } from '@/theme/fonts';
import { ThemeLayout } from '@/theme/layout';
import { ThemeSpacing } from '@/theme/spacing';

type PaymentHistoryItemProps = {
  id: string;
  amount: string;
  method: string;
  type: string;
  date: string;
  isDecuted: boolean;
};
const PaymentHistoryItem = ({
  payment,
}: {
  payment: PaymentHistoryItemProps;
}) => {
  const { Colors, Fonts, Layout, Spacing } = useTheme();

  const styles = useMemo(
    () => stylesFn(Fonts, Layout, Spacing),
    [Colors, Fonts, Layout, Spacing],
  );

  return (
    <View style={styles.container}>
      <Text style={styles.date}>{payment.date}</Text>

      <View style={styles.left}>
        <Text style={styles.method}>{payment.method}</Text>
        <Text style={styles.method}>{payment.type}</Text>
        <Text style={styles.amount}>₹ {payment.amount}</Text>
      </View>
    </View>
  );
};

export default React.memo(PaymentHistoryItem);

const stylesFn = (
  Fonts: ThemeFonts,
  Layout: ThemeLayout,
  Spacing: ThemeSpacing,
) =>
  StyleSheet.create({
    container: {
      ...Layout.flexRow,
      ...Layout.justifyBetween,
      ...Spacing.py3,
      borderBottomWidth: 1,
      borderBottomColor: 'rgba(0,0,0,0.05)',
    },
    left: {
      ...Layout.flexRow,
      ...Layout.alignCenter,
    },
    method: {
      ...Fonts.sz8,
      ...Fonts.font500Italic,
      backgroundColor: '#F0F0F0',
      width: scale(70),
      paddingVertical: 2,
      ...Layout.rounded,
      ...Spacing.mx1,
      textAlign: 'center',
    },
    amount: {
      ...Fonts.sz11,
      ...Fonts.font600,
      color: '#4CAF50',
      ...Spacing.ml3,
    },
    date: {
      ...Fonts.sz10,
    },
  });
