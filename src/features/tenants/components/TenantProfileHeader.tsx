import { View, Text, StyleSheet } from 'react-native';
import React from 'react';
import useTheme from '@/common/hooks/useTheme';
import { scale } from '@/theme/scale';
import { ThemeColors } from '@/theme/colors';
import { ThemeFonts } from '@/theme/fonts';
import { ThemeLayout } from '@/theme/layout';
import { ThemeSpacing } from '@/theme/spacing';
import TenantPropertyInfo from '../components/TenantPropertyInfo';
import { useAppSelector } from '@/store/hooks';
import { selectActiveTenant } from '../store/tenants.selectors';
import { AppImage } from '@/common/components';
import { DUMMY_USER } from '../constants/tenants.dummy.data';
import { formatDate } from '@/utils/utils.helper';

const TenantProfileHeader = React.memo(() => {
  const tenant = useAppSelector(selectActiveTenant);
  const { Colors, Fonts, Layout, Spacing } = useTheme();
  const styles = React.useMemo(
    () => stylesFn(Colors, Fonts, Layout, Spacing),
    [Colors, Fonts, Layout, Spacing],
  );

  const getInitials = (name: string) => {
    return name
      .split(' ')
      .map(n => n[0])
      .join('')
      .toUpperCase()
      .slice(0, 2);
  };

  return (
    <View style={styles.profileSection}>
      <View style={styles.profileDetailsContainer}>
        <View style={styles.profileImageWrapper}>
          {tenant?.tenantImage ? (
            <AppImage
              uri={tenant.tenantImage || DUMMY_USER}
              resizeMode="cover"
              imageStyle={styles.profileImage}
            />
          ) : (
            <View style={styles.profileImage}>
              <Text style={styles.profileInitial}>
                {getInitials(tenant?.tenantName || 'TN')}
              </Text>
            </View>
          )}
        </View>

        <View style={styles.profileDetails}>
          <Text style={styles.tenantName}>
            {tenant?.tenantName || 'Not found'}
          </Text>
          <Text style={styles.propertyName}>
            {tenant?.propertyName || ''}
          </Text>
          <Text style={styles.leaseDuration}>
            {tenant?.leaseStartDate && tenant?.leaseEndDate
              ? `${formatDate(tenant.leaseStartDate)} - ${formatDate(tenant.leaseEndDate)}`
              : ''}
          </Text>
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
      ...Spacing.pb2,
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
      overflow: 'hidden',
    },
    profileInitial: {
      ...Fonts.sz26,
      ...Fonts.font600,
      ...Colors.textWhite,
    },
    profileImageWrapper: {
      flex: 0.3,
      ...Layout.center,
    },
    profileDetailsContainer: {
      ...Layout.flexRow,
    },
    profileDetails: {
      flex: 0.7,
      ...Layout.justifyCenter,
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
