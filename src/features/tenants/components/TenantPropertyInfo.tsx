import { View, Text, StyleSheet } from 'react-native';
import React from 'react';
import { commonIcons } from '@/common/constants/commonIcons';
import { AppIcon } from '@/common/components';
import useTheme from '@/common/hooks/useTheme';
import { scale } from '@/theme/scale';
import { ThemeColors } from '@/theme/colors';
import { ThemeFonts } from '@/theme/fonts';
import { ThemeLayout } from '@/theme/layout';
import { ThemeSpacing } from '@/theme/spacing';

const TenantPropertyInfo = React.memo(() => {
  const { Colors, Fonts, Layout, Spacing } = useTheme();
  const styles = React.useMemo(
    () => stylesFn(Colors, Fonts, Layout, Spacing),
    [Colors, Fonts, Layout, Spacing],
  );

  return (
    <>
      <View style={styles.propertyItem}>
        <View style={styles.propertyIcon}>
          <AppIcon
            type="ionicons"
            name="location"
            size={14}
            color={Colors.purePrimary}
          />
        </View>

        <View style={styles.propertyTextContainer}>
          <Text style={styles.propertyLabel}>Address</Text>
          <Text style={styles.propertyName}>242, New Gouri Nagar, Indore</Text>
        </View>
      </View>

      <View style={styles.propertyItem}>
        <View style={styles.propertyIcon}>
          <AppIcon
            type="ionicons"
            name="home"
            size={14}
            color={Colors.purePrimary}
          />
        </View>

        <View style={styles.propertyTextContainer}>
          <Text style={styles.propertyLabel}>Flat</Text>
          <Text style={styles.rentText}>{commonIcons.rupees} 15,000/month</Text>
        </View>
      </View>
    </>
  );
});

export default TenantPropertyInfo;

const stylesFn = (
  Colors: ThemeColors,
  Fonts: ThemeFonts,
  Layout: ThemeLayout,
  Spacing: ThemeSpacing,
) =>
  StyleSheet.create({
    propertyName: {
      ...Fonts.sz11,
      ...Fonts.font500,
      ...Colors.textSecondary,
      ...Spacing.mb1,
    },
    propertyItem: {
      ...Layout.flexRow,
      ...Layout.alignCenter,
      ...Spacing.px4,
      ...Spacing.py1,
      ...Layout.fullWidth,
    },
    propertyIcon: {
      width: scale(28),
      height: scale(28),
      borderRadius: scale(18),
      ...Colors.primaryLight1,
      ...Layout.center,
      ...Spacing.mr3,
    },
    propertyTextContainer: {
      ...Layout.flex,
      ...Layout.flexRow,
      ...Layout.justifyBetween,
    },
    propertyLabel: {
      ...Fonts.sz11,
      ...Fonts.font500,
      ...Colors.textBlack,
    },
    rentText: {
      ...Fonts.sz11,
      ...Fonts.font600,
      ...Colors.textPrimary,
    },
  });
