import { View, Text, StyleSheet } from 'react-native';
import React from 'react';
import { ThemeSpacing } from '@/theme/spacing';
import { ThemeFonts } from '@/theme/fonts';
import useTheme from '@/common/hooks/useTheme';
import { ThemeColors } from '@/theme/colors';
import { ThemeLayout } from '@/theme/layout';
import { scale } from '@/theme/scale';
import { AppIcon } from '@/common/components';
import { PaymentStatus, TenantRentItemProps } from '../types/components.type';
import { Dashboard_Icons } from '../assets/icons';
import { STATUS_UI_MAP } from '../constants/dummyData';
import { commonIcons } from '@/common/constants/commonIcons';

const TenantRentItem: React.FC<TenantRentItemProps> = ({ data, key }) => {
  const { Spacing, Fonts, Colors, Layout } = useTheme();

  const styles = React.useMemo(
    () => stylesFn(Spacing, Fonts, Colors, Layout),
    [Spacing, Fonts],
  );

  const {
    tenantName = 'User 1',
    propertyRent = 'Null',
    rentStatus = 'Pending',
    propertyName = 'Not Available',
  } = data;

  const statusConfig =
    STATUS_UI_MAP[rentStatus as PaymentStatus] ?? STATUS_UI_MAP.Pending;

  return (
    <View key={key} style={styles.tenantRentItemContainer}>
      <View style={styles.tenantImageContainer}>
        <View style={styles.tenantImage}>
          <AppIcon size={16} type="fontAwesome6" name={Dashboard_Icons.user} />
        </View>
      </View>
      <View style={styles.tenantDetailsContainer}>
        <View>
          <Text style={styles.tenantName}>{tenantName}</Text>
          <Text style={styles.propertyName}>{propertyName}</Text>
        </View>
        <View style={styles.propertyRentContainer}>
          <Text style={styles.propertyRent}>
            {commonIcons.rupees} {propertyRent}
          </Text>
        </View>
      </View>
      <View style={styles.tenantRentStatusButtonContainer}>
        <View style={[styles.statusBadge, statusConfig.badgeStyle]}>
          <Text style={[styles.statusText, statusConfig.textStyle]}>
            {statusConfig.label}
          </Text>
        </View>
      </View>
    </View>
  );
};

const stylesFn = (
  Spacing: ThemeSpacing,
  Fonts: ThemeFonts,
  Colors: ThemeColors,
  Layout: ThemeLayout,
) =>
  StyleSheet.create({
    tenantRentItemContainer: {
      ...Layout.fullWidth,
      height: 60,
      ...Spacing.mt2,
      ...Layout.flexRow,
      borderBottomColor: Colors.lightGrayPure,
      borderBottomWidth: 0.2,
    },
    tenantImageContainer: {
      flex: 0.13,
      ...Layout.justifyCenter,
    },
    tenantImage: {
      width: scale(35),
      height: scale(35),
      ...Layout.center,
      borderRadius: scale(40),
      ...Colors.primaryLight1,
    },
    tenantDetailsContainer: {
      flex: 0.62,
      ...Layout.flexRow,
      ...Layout.justifyBetween,
      ...Layout.alignCenter,
      ...Spacing.pr6,
    },
    tenantName: {
      ...Fonts.font600,
      ...Fonts.sz12,
    },
    propertyName: {
      ...Fonts.sz9,
      ...Fonts.font400Italic,
      ...Colors.textSecondary,
    },
    propertyRentContainer: {
      ...Layout.flexRow,
      ...Layout.center,
    },
    propertyRent: {
      ...Fonts.sz12,
      ...Fonts.font600,
      ...Spacing.ml1,
    },
    tenantRentStatusButtonContainer: {
      flex: 0.25,
      ...Layout.center,
    },
    rentStatusBadege: {
      width: scale(65),
      ...Layout.center,
      ...Spacing.py1,
      ...Layout.rounded3xl,
      ...Colors.primaryLight1,
    },
    rentStatusText: {
      ...Fonts.font500Italic,
      ...Fonts.sz8,
    },
    statusBadge: {
      minWidth: scale(70),
      ...Spacing.py1,
      borderRadius: scale(12),
      ...Layout.center,
    },
    statusText: {
      ...Fonts.font500,
      ...Fonts.sz8,
    },
  });

export default TenantRentItem;
