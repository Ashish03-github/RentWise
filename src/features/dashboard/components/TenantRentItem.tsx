import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import React, { useCallback } from 'react';
import { ThemeSpacing } from '@/theme/spacing';
import { ThemeFonts } from '@/theme/fonts';
import useTheme from '@/common/hooks/useTheme';
import { ThemeColors } from '@/theme/colors';
import { ThemeLayout } from '@/theme/layout';
import { scale } from '@/theme/scale';
import { AppIcon } from '@/common/components';
import { TenantRentItemProps } from '../types/components.type';
import { Dashboard_Icons } from '../assets/icons';

const TenantRentItem: React.FC<TenantRentItemProps> = ({ data, key }) => {
  const { Spacing, Fonts, Colors, Layout } = useTheme();

  const styles = React.useMemo(
    () => stylesFn(Spacing, Fonts, Colors, Layout),
    [Spacing, Fonts],
  );

  const {
    tenantName = 'User 1',
    propertyRent = 'Nill',
    rentStatus = 'Pending',
    propertyName = 'Not Available',
  } = data;

  const getRentStatusBadgeColor = useCallback(() => {
    switch (rentStatus) {
      case 'Paid':
        return { ...Colors.textGreen };
      case 'Pending':
        return { ...Colors.textRed };
      case 'Partial':
        return { ...Colors.textLightOrange };

      default:
        break;
    }
  }, [rentStatus]);

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
          <AppIcon
            size={12}
            type={'fontAwesome6'}
            name={Dashboard_Icons.rupee}
          />
          <Text style={styles.propertyRent}>{propertyRent}</Text>
        </View>
      </View>
      <View style={styles.tenantRentStatusButtonContainer}>
        <TouchableOpacity style={styles.rentStatusBadege}>
          <Text style={[styles.rentStatusText, getRentStatusBadgeColor()]}>
            {rentStatus}
          </Text>
        </TouchableOpacity>
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
  });

export default TenantRentItem;
