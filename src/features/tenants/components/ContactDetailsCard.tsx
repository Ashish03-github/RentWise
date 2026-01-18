import { View, Text, StyleSheet } from 'react-native';
import React from 'react';
import { ThemeColors } from '@/theme/colors';
import { ThemeFonts } from '@/theme/fonts';
import { ThemeLayout } from '@/theme/layout';
import { ThemeSpacing } from '@/theme/spacing';
import useTheme from '@/common/hooks/useTheme';

const ContactDetailsCard = React.memo(() => {
  const { Colors, Fonts, Layout, Spacing } = useTheme();
  const styles = React.useMemo(
    () => stylesFn(Colors, Fonts, Layout, Spacing),
    [Colors, Fonts, Layout, Spacing],
  );
  return (
    <View style={styles.card}>
      <Text style={styles.sectionTitle}>Contact Details</Text>
      <View style={styles.depositRow}>
        <Text style={styles.depositLabel}>Phone Number:</Text>
        <Text style={styles.depositAmount}>+91 9730592488</Text>
      </View>
      <View style={styles.depositRow}>
        <Text style={styles.depositLabel}>Email Address:</Text>
        <Text style={styles.depositAmount}> ashishyadav1261@gmail.com </Text>
      </View>
    </View>
  );
});

export default ContactDetailsCard;

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
  });
