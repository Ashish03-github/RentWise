import { View, Text, StyleSheet } from 'react-native';
import React from 'react';
import useTheme from '@/common/hooks/useTheme';
import { ThemeColors } from '@/theme/colors';
import { ThemeFonts } from '@/theme/fonts';
import { ThemeLayout } from '@/theme/layout';
import { ThemeSpacing } from '@/theme/spacing';
import { scale } from '@/theme/scale';
import { AppIcon, AppImage } from '@/common/components';
import { BUILDING_IMAGE } from '../constants/properties.dummy.data';
import { commonIcons } from '@/common/constants/commonIcons';
import { useAppSelector } from '@/store/hooks';
import { selectPropertyById } from '../store/properties.selectors';

const PropertyCard = () => {
  const property = useAppSelector(selectPropertyById)[0];
  const { Colors, Fonts, Layout, Spacing } = useTheme();
  const styles = React.useMemo(
    () => stylesFn(Colors, Fonts, Layout, Spacing),
    [Colors, Fonts, Layout],
  );

  return (
    <View style={styles.propertyCardContainer}>
      <View style={styles.imageWrapper}>
        <AppImage
          resizeMode="cover"
          uri={property.image || BUILDING_IMAGE}
          imageStyle={styles.imageStyle}
        />
      </View>
      <View style={styles.propertyDetailsContainer}>
        <View style={styles.propertyTypeAndStatusContainer}>
          <View style={styles.propertyNameContainer}>
            <Text numberOfLines={1} style={styles.propertyName}>
              {property?.propertyName || 'Not found.'}
            </Text>
          </View>
          <View style={styles.propertyRentContainer}>
            <Text style={styles.propertyRentText}>
              {commonIcons.rupees} {property.propertyRent} /{' '}
              {property.rentRecurrence}
            </Text>
          </View>
        </View>
        <Text style={styles.propertyAddress}>{property.propertyAddress}</Text>

        <View style={styles.propertyTypesWrapper}>
          <View style={styles.propertyTypeContainer}>
            <AppIcon name="house" size={15} />
            <Text style={styles.propertyType}>{property.propertyType}</Text>
          </View>

          <View
            style={[
              styles.statusBadge,
              property.propertyStatus === 'Vacant'
                ? styles.vacantBadge
                : styles.occupiedBadge,
            ]}
          >
            <Text
              style={[
                styles.statusText,
                property.propertyStatus === 'Vacant'
                  ? styles.vacantText
                  : styles.occupiedText,
              ]}
            >
              {property.propertyStatus ? 'Vacant' : 'Occupied'}
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
    propertyCardContainer: {
      flex: 1,
      //   backgroundColor: 'red',
    },
    imageWrapper: {
      flex: 1,
      ...Layout.flexRow,
      // ...Spacing.p2,
      ...Spacing.mb2,
      //   ...Colors.red,
      ...Layout.roundedXl,
    },
    propertyDetailsContainer: {
      ...Layout.fullWidth,
    },
    propertyTypeAndStatusContainer: {
      ...Layout.flexRow,
      //   ...Layout.justifyBetween,
      //   ...Layout.alignCenter,
    },
    propertyTypeContainer: {
      ...Spacing.px6,
      ...Spacing.py1,
      ...Layout.roundedMd,
      ...Colors.primaryLight1,
      ...Layout.justifyCenter,
      ...Layout.flexRow,
    },
    propertyNameContainer: {
      flex: 1,
      //   ...Layout.justifyBetween,
      //   ...Layout.alignCenter,
      ...Layout.justifyCenter,
      //   backgroundColor: 'red',
    },
    propertyTypesWrapper: {
      flex: 0.3,
      ...Layout.flexRow,
      ...Layout.justifyBetween,
      ...Layout.alignCenter,
      ...Spacing.mt2,
      //   backgroundColor: 'red',
    },
    propertyName: {
      ...Fonts.font600,
      ...Fonts.sz20,
    },
    propertyAddress: {
      ...Fonts.font400Italic,
      ...Fonts.sz10,
      ...Colors.textSecondary,
    },
    propertyType: {
      ...Fonts.font500,
      ...Fonts.sz10,
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
      ...Layout.fullWidth,
      ...Layout.fullHeight,
      ...Layout.roundedMd,
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
      //   ...Layout.justifyStart,
      ...Layout.alignCenter,
      //   ...Spacing.pt4,
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

export default PropertyCard;
