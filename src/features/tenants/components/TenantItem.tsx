import { View, Text, StyleSheet, Pressable } from 'react-native';
import React, { useCallback } from 'react';
import { scale } from '@/theme/scale';
import useTheme from '@/common/hooks/useTheme';
import { ThemeColors } from '@/theme/colors';
import { ThemeFonts } from '@/theme/fonts';
import { ThemeLayout } from '@/theme/layout';
import { AppImage, AppIcon } from '@/common/components';
import { ThemeSpacing } from '@/theme/spacing';
import { TenantItem as Tenant } from '../types/tenant.components.type';
import { formatDate } from '@/utils/utils.helper';
import { useNavigation } from '@react-navigation/native';
import { TenantRoutes } from '@/navigation/routes';
import { useAppDispatch } from '@/store/hooks';
import { setActiveTenantId } from '../store/tenants.slice';
import { DUMMY_USER } from '../constants/tenants.dummy.data';

type TenantItemProps = {
  item: Tenant;
};

const TenantItem: React.FC<TenantItemProps> = ({ item }) => {
  const {
    id,
    tenantName,
    propertyName,
    leaseStartDate,
    leaseEndDate,
    propertyStatus,
    tenantImage,
  } = item;

  const dispatch = useAppDispatch();
  const navigation = useNavigation<any>();
  const { Colors, Fonts, Layout, Spacing } = useTheme();
  const styles = React.useMemo(
    () => stylesFn(Colors, Fonts, Layout, Spacing),
    [Colors, Fonts, Layout, Spacing],
  );

  const navigateToDetails = useCallback(() => {
    dispatch(setActiveTenantId(id || ''));
    navigation.navigate(TenantRoutes.tenantDetails);
  }, [dispatch, navigation, id]);

  const navigateToEdit = useCallback(() => {
    dispatch(setActiveTenantId(id || ''));
    navigation.navigate(TenantRoutes.addTenant);
  }, [dispatch, navigation, id]);

  const isRemoved = (item as any)?._isRemoved;
  const statusText = isRemoved
    ? 'Removed'
    : propertyStatus === 'Vacant'
    ? 'In-Active'
    : propertyStatus === 'Occupied'
    ? 'Active'
    : propertyStatus === 'Booked'
    ? 'Booked'
    : 'Active';

  return (
    <Pressable onPress={navigateToDetails} style={styles.tenantItemContainer}>
      <View style={styles.tenantImageContainer}>
        <AppImage
          uri={tenantImage || DUMMY_USER}
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

        {!isRemoved && (
          <Pressable
            onPress={navigateToEdit}
            hitSlop={10}
            style={styles.editButton}
          >
            <AppIcon type="fontAwesome6" name="pencil" size={10} />
          </Pressable>
        )}
      </View>
      <View style={styles.statusContainer}>
        <View
          style={[
            styles.statusBadge,
            isRemoved
              ? styles.removedBadge
              : propertyStatus === 'Vacant'
              ? styles.vacantBadge
              : propertyStatus === 'Occupied'
              ? styles.occupiedBadge
              : propertyStatus === 'Booked'
              ? styles.bookedBadge
              : styles.occupiedBadge,
          ]}
        >
          <Text
            style={[
              styles.statusText,
              isRemoved
                ? styles.removedText
                : propertyStatus === 'Vacant'
                ? styles.vacantText
                : propertyStatus === 'Occupied'
                ? styles.occupiedText
                : propertyStatus === 'Booked'
                ? styles.bookedText
                : styles.occupiedText,
            ]}
          >
            {statusText}
          </Text>
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
      ...Colors.white,
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
    editButton: {
      position: 'absolute',
      right: scale(6),
      bottom: scale(0),
      ...Spacing.px3,
      paddingVertical: scale(6),
      ...Layout.rounded,
      ...Colors.primaryLight1,
      ...Layout.center,
    },
  });

export default TenantItem;
