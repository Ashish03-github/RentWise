import { View, Text, StyleSheet } from 'react-native';
import React from 'react';
import useTheme from '@/common/hooks/useTheme';
import { ThemeColors } from '@/theme/colors';
import { ThemeFonts } from '@/theme/fonts';
import { ThemeLayout } from '@/theme/layout';
import { ThemeSpacing } from '@/theme/spacing';
import { scale } from '@/theme/scale';
import { AppIcon, AppImage } from '@/common/components';
import { DUMMY_USER } from '../constants/tenants.dummy.data';
import { commonIcons } from '@/common/constants/commonIcons';
import { useAppSelector } from '@/store/hooks';
import { selectActiveTenant } from '../store/tenants.selectors';
import { formatDate } from '@/utils/utils.helper';

const TenantCard = () => {
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

  const isRemoved = (tenant as any)?._isRemoved;
  const statusText = isRemoved
    ? 'Removed'
    : tenant?.propertyStatus === 'Vacant'
    ? 'In-Active'
    : tenant?.propertyStatus === 'Occupied'
    ? 'Active'
    : tenant?.propertyStatus === 'Booked'
    ? 'Booked'
    : 'Active';

  return (
    <View style={styles.tenantCardContainer}>
      <View style={styles.imageWrapper}>
        {true ? (
          <AppImage
            resizeMode="cover"
            uri={tenant.tenantImage || DUMMY_USER}
            imageStyle={styles.imageStyle}
          />
        ) : (
          <View style={styles.initialContainer}>
            <Text style={styles.initialText}>
              {getInitials(tenant?.tenantName || 'TN')}
            </Text>
          </View>
        )}
      </View>
      <View style={styles.tenantDetailsContainer}>
        <View style={styles.tenantNameAndStatusContainer}>
          <View style={styles.tenantNameContainer}>
            <Text numberOfLines={1} style={styles.tenantName}>
              {tenant?.tenantName || 'Not found.'}
            </Text>
          </View>
          <View
            style={[
              styles.statusBadge,
              isRemoved
                ? styles.removedBadge
                : tenant?.propertyStatus === 'Vacant'
                ? styles.vacantBadge
                : tenant?.propertyStatus === 'Occupied'
                ? styles.occupiedBadge
                : tenant?.propertyStatus === 'Booked'
                ? styles.bookedBadge
                : styles.occupiedBadge,
            ]}
          >
            <Text
              style={[
                styles.statusText,
                isRemoved
                  ? styles.removedText
                  : tenant?.propertyStatus === 'Vacant'
                  ? styles.vacantText
                  : tenant?.propertyStatus === 'Occupied'
                  ? styles.occupiedText
                  : tenant?.propertyStatus === 'Booked'
                  ? styles.bookedText
                  : styles.occupiedText,
              ]}
            >
              {statusText}
            </Text>
          </View>
        </View>
        <Text style={styles.propertyName}>{tenant?.propertyName || ''}</Text>
        <Text style={styles.leaseDates}>
          {tenant?.leaseStartDate && tenant?.leaseEndDate
            ? `${formatDate(tenant.leaseStartDate)} - ${formatDate(
                tenant.leaseEndDate,
              )}`
            : ''}
        </Text>

        <View style={styles.tenantInfoWrapper}>
          <View style={styles.infoItem}>
            <AppIcon name="house" size={15} />
            <Text style={styles.infoText}>{tenant?.propertyType || ''}</Text>
          </View>

          <View style={styles.infoItem}>
            <Text style={styles.rentText}>
              {commonIcons.rupees} {tenant?.propertyRent || 0} /{' '}
              {tenant?.rentRecurrence || 'Monthly'}
            </Text>
          </View>
        </View>
      </View>
    </View>
  );
};

const stylesFn = (
  Colors: ThemeColors,
  Fonts: ThemeFonts,
  Layout: ThemeLayout,
  Spacing: ThemeSpacing,
) =>
  StyleSheet.create({
    tenantCardContainer: {
      flex: 1,
    },
    imageWrapper: {
      flex: 1,
      ...Layout.flexRow,
      ...Spacing.mb2,
      ...Layout.roundedXl,
      overflow: 'hidden',
    },
    imageStyle: {
      ...Layout.fullWidth,
      ...Layout.fullHeight,
      ...Layout.roundedMd,
    },
    initialContainer: {
      ...Layout.fullWidth,
      ...Layout.fullHeight,
      ...Layout.center,
      ...Colors.primary,
      ...Layout.roundedXl,
    },
    initialText: {
      ...Fonts.sz30,
      ...Fonts.font600,
      ...Colors.textWhite,
    },
    tenantDetailsContainer: {
      ...Layout.fullWidth,
    },
    tenantNameAndStatusContainer: {
      ...Layout.flexRow,
      ...Layout.justifyBetween,
      ...Layout.alignCenter,
    },
    tenantNameContainer: {
      flex: 1,
      ...Layout.justifyCenter,
    },
    tenantName: {
      ...Fonts.font600,
      ...Fonts.sz20,
    },
    propertyName: {
      ...Fonts.font400Italic,
      ...Fonts.sz10,
      ...Colors.textSecondary,
      ...Spacing.mt1,
    },
    leaseDates: {
      ...Fonts.font500,
      ...Fonts.sz10,
      ...Colors.textSecondary,
      ...Spacing.mt1,
    },
    tenantInfoWrapper: {
      ...Layout.flexRow,
      ...Layout.justifyBetween,
      ...Layout.alignCenter,
      ...Spacing.mt2,
    },
    infoItem: {
      ...Spacing.px6,
      ...Spacing.py1,
      ...Layout.roundedMd,
      ...Colors.primaryLight1,
      ...Layout.justifyCenter,
      ...Layout.flexRow,
    },
    infoText: {
      ...Fonts.font500,
      ...Fonts.sz10,
      ...Colors.textBlack,
      ...Spacing.ml1,
    },
    rentText: {
      ...Fonts.font600Italic,
      ...Fonts.sz10,
      ...Colors.textBlack,
    },
    statusBadge: {
      ...Spacing.px4,
      ...Spacing.py1,
      borderRadius: scale(12),
      ...Layout.center,
    },
    occupiedBadge: {
      backgroundColor: 'rgba(34, 197, 94, 0.1)',
    },
    vacantBadge: {
      backgroundColor: 'rgba(239, 68, 68, 0.1)',
    },
    statusText: {
      ...Fonts.font500,
      ...Fonts.sz9,
    },
    occupiedText: {
      color: '#22C55E',
    },
    vacantText: {
      color: '#EF4444',
    },
    bookedBadge: {
      backgroundColor: 'rgba(251, 191, 36, 0.1)',
    },
    bookedText: {
      color: '#FBBF24',
    },
    removedBadge: {
      backgroundColor: 'rgba(239, 68, 68, 0.1)',
    },
    removedText: {
      color: '#EF4444',
    },
  });

export default TenantCard;
