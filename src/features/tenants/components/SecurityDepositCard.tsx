import { View, Text, StyleSheet } from 'react-native';
import React from 'react';
import useTheme from '@/common/hooks/useTheme';
import { ThemeColors } from '@/theme/colors';
import { ThemeFonts } from '@/theme/fonts';
import { ThemeLayout } from '@/theme/layout';
import { ThemeSpacing } from '@/theme/spacing';
import { commonIcons } from '@/common/constants/commonIcons';
import { useAppSelector } from '@/store/hooks';
import { selectActiveTenant } from '../store/tenants.selectors';

const SecurityDepositCard = React.memo(() => {
  const tenant = useAppSelector(selectActiveTenant);
  const { Colors, Fonts, Layout, Spacing } = useTheme();
  const styles = React.useMemo(
    () => stylesFn(Colors, Fonts, Layout, Spacing),
    [Colors, Fonts, Layout, Spacing],
  );

  const totalDeposit = tenant?.propertyDeposit || '0';
  const paidAmount = '0'; // TODO: Calculate from payment history
  const remaining = String(Number(totalDeposit) - Number(paidAmount));

  const DepositRow = ({ label, value, color }: any) => (
    <View style={styles.depositRow}>
      <Text style={styles.depositLabel}>{label}</Text>
      <Text style={[styles.depositAmount, color && { color }]}>
        {commonIcons.rupees} {value}
      </Text>
    </View>
  );

  return (
    <View style={styles.card}>
      <Text style={styles.sectionTitle}>Security Deposit</Text>

      <DepositRow label="Total" value={totalDeposit} />
      <DepositRow label="Paid Amount" value={paidAmount} color="#4CAF50" />
      <DepositRow label="Remaining" value={remaining} />
    </View>
  );
});

export default SecurityDepositCard;

const stylesFn = (
  Colors: ThemeColors,
  Fonts: ThemeFonts,
  Layout: ThemeLayout,
  Spacing: ThemeSpacing,
) =>
  StyleSheet.create({
    safeArea: {
      ...Layout.flex,
      ...Spacing.pb4,
    },
    card: {
      ...Spacing.p4,
      ...Colors.white,
      ...Layout.roundedLg,
      //   backgroundColor: 'red',
      //   ...Spacing.mb3,
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
      ...Colors.textBlack,
      ...Spacing.mr3,
    },
    paymentMethod: {
      ...Fonts.sz9,
      ...Fonts.font500Italic,
      ...Colors.textBlack,
      backgroundColor: '#F0F0F0',
      ...Spacing.px4,
      ...Spacing.py0,
      ...Layout.rounded,
    },
    paymentDate: {
      ...Fonts.sz10,
      ...Fonts.font400,
    },
    endLeaseButton: {
      ...Layout.flexRow,
      ...Layout.center,
      ...Spacing.p3,
      ...Layout.roundedLg,
    },
    endLeaseIcon: {
      marginRight: 8,
      transform: [{ rotate: '180deg' }],
    },
    endLeaseText: {
      ...Colors.textWhite,
      ...Fonts.sz12,
      ...Fonts.font500,
    },
  });
