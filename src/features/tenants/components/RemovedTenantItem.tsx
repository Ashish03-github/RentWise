import React, { useCallback } from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import useTheme from '@/common/hooks/useTheme';
import { ThemeColors } from '@/theme/colors';
import { ThemeFonts } from '@/theme/fonts';
import { ThemeLayout } from '@/theme/layout';
import { ThemeSpacing } from '@/theme/spacing';
import { scale } from '@/theme/scale';
import { AppImage } from '@/common/components';
import { BUILDING_IMAGE } from '@/features/property/constants/properties.dummy.data';
import { TenantHistoryItem } from '../store/tenants.slice';
import { formatDate } from '@/utils/utils.helper';
import { useNavigation } from '@react-navigation/native';
import { TenantRoutes } from '@/navigation/routes';
import { useAppDispatch } from '@/store/hooks';
import { setActiveTenantId } from '../store/tenants.slice';

type RemovedTenantItemProps = {
  item: TenantHistoryItem;
};

const RemovedTenantItem: React.FC<RemovedTenantItemProps> = ({ item }) => {
  const tenant = item.snapshot;
  const dispatch = useAppDispatch();
  const navigation = useNavigation<any>();

  const navigateToDetails = useCallback(() => {
    dispatch(setActiveTenantId(tenant.id || ''));
    navigation.navigate(TenantRoutes.tenantDetails);
  }, [dispatch, navigation, tenant.id]);

  const { Colors, Fonts, Layout, Spacing } = useTheme();
  const styles = React.useMemo(
    () => stylesFn(Colors, Fonts, Layout, Spacing),
    [Colors, Fonts, Layout, Spacing],
  );

  return (
    <Pressable onPress={navigateToDetails} style={styles.tenantItemContainer}>
      <View style={styles.tenantImageContainer}>
        <AppImage
          uri={tenant.tenantImage || BUILDING_IMAGE}
          resizeMode="cover"
          imageStyle={styles.imageStyle}
        />
      </View>
      <View style={styles.tenantDetailsContainer}>
        <Text style={styles.tenantName} numberOfLines={1}>
          {tenant.tenantName}
        </Text>
        <Text style={styles.propertyName} numberOfLines={1}>
          {tenant.propertyName}
        </Text>
        <View style={styles.leaseDateContainer}>
          <Text style={styles.leaseDateText}>
            {formatDate(tenant.leaseStartDate)} -{' '}
            {formatDate(tenant.leaseEndDate)}
          </Text>
        </View>
      </View>
      <View style={styles.statusContainer}>
        <View style={styles.removedBadge}>
          <Text style={styles.removedText}>Removed</Text>
        </View>
      </View>
    </Pressable>
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
    },
    statusContainer: {
      ...Layout.center,
      minWidth: scale(70),
    },
    removedBadge: {
      ...Spacing.px4,
      ...Spacing.py1,
      borderRadius: scale(12),
      backgroundColor: 'rgba(239, 68, 68, 0.1)',
    },
    removedText: {
      ...Fonts.font500,
      ...Fonts.sz9,
      color: '#EF4444',
    },
  });

export default RemovedTenantItem;
