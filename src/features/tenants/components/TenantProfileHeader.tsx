import { View, Text, StyleSheet } from 'react-native';
import React from 'react';
import useTheme from '@/common/hooks/useTheme';
import { scale } from '@/theme/scale';
import { ThemeColors } from '@/theme/colors';
import { ThemeFonts } from '@/theme/fonts';
import { ThemeLayout } from '@/theme/layout';
import { ThemeSpacing } from '@/theme/spacing';
import TenantPropertyInfo from '../components/TenantPropertyInfo';

const TenantProfileHeader = React.memo(() => {
  const { Colors, Fonts, Layout, Spacing } = useTheme();
  const styles = React.useMemo(
    () => stylesFn(Colors, Fonts, Layout, Spacing),
    [Colors, Fonts, Layout, Spacing],
  );

  return (
    <View style={styles.profileSection}>
      <View style={{ flexDirection: 'row' }}>
        <View style={{ flex: 0.3, ...Layout.center }}>
          <View style={styles.profileImage}>
            <Text style={styles.profileInitial}>RS</Text>
          </View>
        </View>

        <View style={{ flex: 0.7, justifyContent: 'center' }}>
          <Text style={styles.tenantName}>Rahul Sharma</Text>
          <Text style={styles.leaseDuration}>Mar 1, 2024 - Feb 28, 2025</Text>
          <Text style={styles.propertyName}>Greenwood Apartments</Text>
        </View>
      </View>

      <TenantPropertyInfo />
    </View>
  );
});

export default TenantProfileHeader;

const stylesFn = (
  Colors: ThemeColors,
  Fonts: ThemeFonts,
  Layout: ThemeLayout,
  Spacing: ThemeSpacing,
) =>
  StyleSheet.create({
    profileSection: {
      ...Layout.alignCenter,
      ...Spacing.py3,
      ...Colors.white,
      //   ...Spacing.mb3,
      ...Layout.roundedMd,
    },
    profileImage: {
      width: scale(80),
      height: scale(80),
      borderRadius: scale(40),
      ...Layout.center,
      ...Spacing.mb3,
      ...Colors.primary,
    },
    profileInitial: {
      ...Fonts.sz26,
      ...Fonts.font600,
      ...Colors.textWhite,
    },
    tenantName: {
      ...Fonts.sz14,
      ...Fonts.font600,
      ...Colors.textBlack,
      ...Spacing.mb1,
    },
    propertyName: {
      ...Fonts.sz11,
      ...Fonts.font500,
      ...Colors.textSecondary,
      ...Spacing.mb1,
    },
    leaseDuration: {
      ...Fonts.sz11,
      ...Fonts.font500,
      ...Colors.textSecondary,
    },
  });
