import { View, Text, StyleSheet } from 'react-native';
import React from 'react';
import useTheme from '@/common/hooks/useTheme';
import { AppImage } from '@/common/components';
import { formatDate } from '@/utils/utils.helper';
import { ThemeColors } from '@/theme/colors';
import { ThemeFonts } from '@/theme/fonts';
import { ThemeLayout } from '@/theme/layout';
import { ThemeSpacing } from '@/theme/spacing';
import { scale } from '@/theme/scale';
import { TenantItem } from '@/features/tenants/types/tenant.components.type';

type TenantItemProps = {
  item: TenantItem;
  key: number;
};

const HistoryItem: React.FC<TenantItemProps> = ({ item }) => {
  const {
    tenantName,
    leaseStartDate,
    leaseEndDate,
    propertyStatus,
    tenantImage,
  } = item;

  const { Colors, Fonts, Layout, Spacing } = useTheme();
  const styles = React.useMemo(
    () => stylesFn(Colors, Fonts, Layout, Spacing),
    [Colors, Fonts, Layout, Spacing],
  );
  return (
    <View style={styles.tenantItemContainer}>
      <View style={styles.tenantImageContainer}>
        <AppImage
          uri={tenantImage}
          resizeMode="cover"
          imageStyle={styles.imageStyle}
        />
      </View>
      <View style={styles.tenantDetailsContainer}>
        <Text style={styles.tenantName} numberOfLines={1}>
          {tenantName}
        </Text>
        <View style={styles.leaseDateContainer}>
          <Text style={styles.leaseDateText}>
            {formatDate(leaseStartDate)} - {formatDate(leaseEndDate)}
          </Text>
        </View>
      </View>
      <View style={styles.statusContainer}>
        <View
          style={[
            styles.statusBadge,
            propertyStatus === 'Vacant'
              ? styles.vacantBadge
              : styles.occupiedBadge,
          ]}
        >
          <Text
            style={[
              styles.statusText,
              propertyStatus === 'Vacant'
                ? styles.vacantText
                : styles.occupiedText,
            ]}
          >
            {propertyStatus === 'Vacant' ? 'In-Active' : 'Active'}
          </Text>
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
    tenantItemContainer: {
      ...Layout.fullWidth,
      ...Layout.flexRow,
      ...Colors.white,
      borderRadius: scale(12),
      ...Spacing.p3,
      ...Spacing.mb3,
      ...Colors.primaryLight2,
    },
    tenantImageContainer: {
      width: scale(36),
      height: scale(36),
      borderRadius: scale(6),
      overflow: 'hidden',
      marginRight: scale(12),
    },
    imageStyle: {
      ...Layout.fullWidth,
      ...Layout.fullHeight,
      ...Layout.roundedLg,
    },
    tenantDetailsContainer: {
      ...Layout.flex,
      ...Layout.justifyCenter,
    },
    tenantName: {
      ...Fonts.font500,
      ...Fonts.sz10,
      ...Colors.textBlack,
      marginBottom: scale(2),
    },
    propertyName: {
      ...Fonts.font400,
      ...Fonts.sz10,
      ...Colors.textSecondary,
      marginBottom: scale(4),
    },
    leaseDateContainer: {
      ...Layout.flexRow,
      ...Layout.alignCenter,
      marginTop: scale(2),
    },
    leaseDateText: {
      ...Fonts.font500Italic,
      ...Fonts.sz8,
      ...Colors.textBlack,
      // marginLeft: scale(4),
    },
    statusContainer: {
      ...Layout.center,
      minWidth: scale(70),
    },
    statusBadge: {
      ...Spacing.px5,
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
      ...Fonts.sz8,
    },
    occupiedText: {
      color: '#22C55E',
    },
    vacantText: {
      color: '#EF4444',
    },
  });

export default HistoryItem;
