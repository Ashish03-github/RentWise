import { View, Text, StyleSheet, Pressable } from 'react-native';
import React, { useCallback } from 'react';
import { scale } from '@/theme/scale';
import useTheme from '@/common/hooks/useTheme';
import { ThemeColors } from '@/theme/colors';
import { ThemeFonts } from '@/theme/fonts';
import { ThemeLayout } from '@/theme/layout';
import { AppIcon, AppImage } from '@/common/components';
import { ThemeSpacing } from '@/theme/spacing';
import { PropertyItem as Property } from '../types/proprty.type';
import { useNavigation } from '@react-navigation/native';
import { PropertyRoutes } from '@/navigation/routes';

type PropertyItemProps = {
  item: Property;
  key: number;
};

const PropertyItem: React.FC<PropertyItemProps> = ({ item, key }) => {
  const {
    image,
    propertyName,
    propertyAddress,
    propertyRent,
    propertyStatus,
    propertyType,
    propertyRentRecurrence,
  } = item;

  const navigation = useNavigation();
  const navigateTo = useCallback(() => {
    navigation.navigate(PropertyRoutes.propertyDetails);
  }, []);

  const { Colors, Fonts, Layout, Spacing } = useTheme();
  const styles = React.useMemo(
    () => stylesFn(Colors, Fonts, Layout, Spacing),
    [Colors, Fonts, Layout],
  );
  return (
    <Pressable onPress={navigateTo} style={styles.propertyItemContainer}>
      <View style={styles.propertyImageContainer}>
        <AppImage
          uri={image}
          resizeMode="cover"
          imageStyle={styles.imageStyle}
        />
      </View>
      <View style={styles.propertyDetailsContainer}>
        <Text
          numberOfLines={1}
          ellipsizeMode="tail"
          style={styles.propertyName}
        >
          {propertyName}
        </Text>
        <Text
          numberOfLines={1}
          ellipsizeMode="tail"
          style={styles.propertyAddress}
        >
          {propertyAddress}
        </Text>
        <View style={styles.propertyTypeContainer}>
          <AppIcon name="house" size={12} />
          <Text style={styles.propertyType}>{propertyType}</Text>
        </View>
      </View>
      <View style={styles.propertyStatusAndAmountContainer}>
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
        <View style={styles.propertyRentContainer}>
          <AppIcon size={12} name="currency-rupee" />
          <Text style={styles.propertyRentText}>
            {propertyRent}/{propertyRentRecurrence}
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
    propertyItemContainer: {
      ...Layout.fullWidth,
      ...Layout.flexRow,
      ...Spacing.p2,
      ...Spacing.mb3,
      ...Colors.primaryLight2,
      borderRadius: scale(10),
      // ...Spacing.mb4,
    },
    propertyTypeContainer: {
      width: scale(60),
      paddingHorizontal: scale(6),
      paddingVertical: scale(3),
      borderRadius: scale(6),
      ...Colors.primaryLight1,
      ...Layout.justifyCenter,
      ...Layout.flexRow,
      ...Colors.white,
      ...Spacing.mt2,
    },
    propertyName: {
      ...Fonts.font600,
      ...Fonts.sz12,
    },
    propertyAddress: {
      ...Fonts.font400Italic,
      ...Fonts.sz10,
      ...Colors.textSecondary,
    },
    propertyType: {
      ...Fonts.font500,
      ...Fonts.sz8,
      ...Colors.textBlack,
      ...Spacing.ml1,
    },
    propertyImageContainer: {
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
    propertyDetailsContainer: {
      flex: 0.7,
      ...Layout.justifyCenter,
      // backgroundColor: 'yellow',
    },
    propertyStatusAndAmountContainer: {
      flex: 0.3,
      ...Layout.center,
      // backgroundColor: 'red',
    },
    propertyStatusButton: {
      width: scale(72),
      minHeight: scale(25),
      ...Layout.roundedMd,
      ...Layout.center,
      ...Colors.green,
    },
    propertyStatusText: {
      ...Fonts.font500,
      ...Fonts.sz8,
      ...Colors.textWhite,
    },
    propertyRentText: {
      ...Fonts.font600Italic,
      ...Fonts.sz10,
      ...Colors.textBlack,
    },
    propertyRentContainer: {
      ...Layout.flexRow,
      ...Layout.alignCenter,
      ...Spacing.pt4,
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

export default PropertyItem;
