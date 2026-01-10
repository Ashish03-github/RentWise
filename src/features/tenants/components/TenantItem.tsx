import { View, Text, StyleSheet } from 'react-native';
import React from 'react';
import { scale } from '@/theme/scale';
import useTheme from '@/common/hooks/useTheme';
import { ThemeColors } from '@/theme/colors';
import { ThemeFonts } from '@/theme/fonts';
import { ThemeLayout } from '@/theme/layout';
import { AppImage } from '@/common/components';
import { ThemeSpacing } from '@/theme/spacing';
import { TenantItem as Tenant } from '../types/tenant.components.type';
import { formatDate } from '@/utils/utils.helper';

type TenantItemProps = {
  item: Tenant;
  key: number;
};

const TenantItem: React.FC<TenantItemProps> = ({ item }) => {
  const {
    tenantName,
    propertyName,
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
        <Text style={styles.propertyName} numberOfLines={1}>
          {propertyName}
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
            {propertyStatus === 'Vacant' ? 'Vacant' : 'Occupied'}
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
      width: scale(50),
      height: scale(50),
      borderRadius: scale(10),
      overflow: 'hidden',
      marginRight: scale(12),
    },
    imageStyle: {
      width: '100%',
      height: '100%',
      borderRadius: scale(10),
    },
    tenantDetailsContainer: {
      flex: 1,
      justifyContent: 'center',
    },
    tenantName: {
      ...Fonts.font600,
      ...Fonts.sz12,
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
      flexDirection: 'row',
      alignItems: 'center',
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
  });

export default TenantItem;
