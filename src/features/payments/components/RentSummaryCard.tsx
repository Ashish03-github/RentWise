import React, { useMemo } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { AppIcon } from '@/common/components';
import useTheme from '@/common/hooks/useTheme';
import { ThemeColors } from '@/theme/colors';
import { ThemeFonts } from '@/theme/fonts';
import { ThemeLayout } from '@/theme/layout';
import { ThemeSpacing } from '@/theme/spacing';

type Rent = {
  month: string;
  amount: string;
  dueDate: string;
  status: string;
  isLate: boolean;
  daysLate: number;
};

const RentSummaryCard = ({ rent }: { rent: Rent }) => {
  const { Colors, Fonts, Layout, Spacing } = useTheme();

  const styles = useMemo(
    () => stylesFn(Colors, Fonts, Layout, Spacing),
    [Colors, Fonts, Layout, Spacing],
  );

  return (
    <View style={styles.section}>
      <Text style={styles.title}>Rent Summary</Text>

      <View style={styles.card}>
        <View style={styles.header}>
          <Text style={styles.month}>Rent for: {rent.month}</Text>
          <Text style={styles.amount}>₹ {rent.amount}</Text>
        </View>

        <View style={styles.row}>
          <Text>Due Date: {rent.dueDate}</Text>
          <View
            style={[
              styles.badge,
              rent.status === 'Paid' ? styles.paid : styles.pending,
            ]}
          >
            <Text style={styles.badgeText}>{rent.status}</Text>
          </View>
        </View>

        {rent.isLate && (
          <View style={styles.late}>
            <AppIcon
              type="feather"
              name="clock"
              size={16}
              color={Colors.redPure}
            />
            <Text style={styles.lateText}>
              Payment is {rent.daysLate} days late
            </Text>
          </View>
        )}
      </View>
    </View>
  );
};

export default React.memo(RentSummaryCard);

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
      ...Colors.textBlack,
      ...Spacing.pb3,
    },
    card: {
      ...Colors.primaryLight1,
      borderRadius: 8,
      padding: 16,
    },
    header: {
      ...Layout.flexRow,
      ...Layout.justifyBetween,
    },
    month: {
      ...Fonts.sz10,
      ...Fonts.font500,
    },
    amount: {
      ...Fonts.sz12,
      ...Fonts.font600,
    },
    row: {
      ...Layout.flexRow,
      ...Layout.justifyBetween,
      ...Spacing.py2,
    },
    badge: {
      ...Spacing.px4,
      ...Spacing.py1,
      ...Layout.rounded,
    },
    paid: {
      backgroundColor: 'rgba(34,197,94,0.1)',
    },
    pending: {
      backgroundColor: 'rgba(239,68,68,0.1)',
    },
    badgeText: {
      ...Fonts.sz10,
      ...Fonts.font500,
      ...Colors.textRed,
    },
    late: {
      ...Layout.flexRow,
      ...Layout.alignCenter,
      backgroundColor: 'rgba(239,68,68,0.05)',
      ...Spacing.p2,
      ...Spacing.mt2,
      ...Layout.rounded,
    },
    lateText: {
      ...Fonts.sz10,
      ...Fonts.font500,
      ...Colors.textRed,
      ...Spacing.ml2,
    },
  });
